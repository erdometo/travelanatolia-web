const fs = require('fs');
const path = require('path');
const os = require('os');

const PROJECT_ID = 'travelanatolia-prod';
const OLD_KEY_VAL = 'AIzaSyB0BuPwl4fhL6C58aN_ZWseRB2jGyb6cCc';

function getLocalAccessToken() {
  const configPath = path.join(os.homedir(), '.config', 'configstore', 'firebase-tools.json');
  console.log(`Reading Firebase tools configuration from: ${configPath}`);
  if (!fs.existsSync(configPath)) {
    throw new Error(`Firebase tools configuration file not found at ${configPath}`);
  }
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  if (!config.tokens || !config.tokens.access_token) {
    throw new Error('Access token not found in firebase-tools.json. Please run "firebase login"');
  }
  return config.tokens.access_token;
}

async function listKeys(token) {
  console.log('Listing existing API Keys in GCP...');
  const res = await fetch(`https://apikeys.googleapis.com/v2/projects/${PROJECT_ID}/locations/global/keys`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Failed to list API keys: ${res.status} - ${errText}`);
  }
  
  const data = await res.json();
  return data.keys || [];
}

async function createKey(token) {
  console.log('Initiating creation of a new API Key...');
  const res = await fetch(`https://apikeys.googleapis.com/v2/projects/${PROJECT_ID}/locations/global/keys`, {
    method: 'POST',
    headers: { 
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      displayName: 'Browser Key (rotated securely)'
    })
  });
  
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Failed to create API key: ${res.status} - ${errText}`);
  }
  
  const operation = await res.json();
  console.log(`LRO Operation started: ${operation.name}`);
  return operation;
}

async function pollOperation(token, opName) {
  console.log('Waiting for API key creation LRO to complete...');
  while (true) {
    const res = await fetch(`https://apikeys.googleapis.com/v2/${opName}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    
    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Failed to check operation status: ${res.status} - ${errText}`);
    }
    
    const op = await res.json();
    if (op.done) {
      if (op.error) {
        throw new Error(`Operation failed: ${JSON.stringify(op.error)}`);
      }
      return op.response;
    }
    
    console.log('Still processing key creation...');
    await new Promise(r => setTimeout(r, 2000));
  }
}

async function deleteKey(token, keyName) {
  console.log(`Deleting compromised old API Key: ${keyName}...`);
  const res = await fetch(`https://apikeys.googleapis.com/v2/${keyName}`, {
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${token}` }
  });
  
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Failed to delete API key: ${res.status} - ${errText}`);
  }
  
  console.log('Compromised API Key deleted successfully!');
}

async function run() {
  try {
    const token = getLocalAccessToken();
    console.log('Access token loaded from local configstore.');
    
    const keys = await listKeys(token);
    console.log(`Found ${keys.length} API Keys.`);
    console.log('Existing Keys details:');
    keys.forEach(k => {
      console.log(`- Name: ${k.name}, DisplayName: ${k.displayName}, keyString: ${k.keyString ? k.keyString.substring(0, 8) + '...' : 'undefined'}`);
    });
    
    const compromisedKey = keys.find(k => k.keyString === OLD_KEY_VAL);
    if (!compromisedKey) {
      console.warn('COULD NOT FIND THE COMPROMISED KEY IN LIST. Perhaps it is already deleted or you rotated it.');
    } else {
      console.log(`Found compromised key: ${compromisedKey.name}`);
    }
    
    // Create new key
    const op = await createKey(token);
    const newKeyDetails = await pollOperation(token, op.name);
    console.log('New key created successfully!');
    console.log(`New Key resource: ${newKeyDetails.name}`);
    console.log(`New Key string: ${newKeyDetails.keyString}`);
    
    // Update .env.local
    const envPath = path.join(__dirname, '.env.local');
    let envContent = '';
    if (fs.existsSync(envPath)) {
      envContent = fs.readFileSync(envPath, 'utf8');
    }
    
    // Replace old key string with new key string
    const updatedContent = envContent.replace(
      new RegExp(OLD_KEY_VAL, 'g'),
      newKeyDetails.keyString
    );
    
    fs.writeFileSync(envPath, updatedContent, 'utf8');
    console.log('.env.local file updated with the new secure API Key.');
    
    // If compromised key was found, delete it now
    if (compromisedKey) {
      await deleteKey(token, compromisedKey.name);
    }
    
    console.log('API KEY ROTATION SUCCESSFUL!');
  } catch (err) {
    console.error('Error during rotation:', err.message);
    process.exit(1);
  }
}

run();
