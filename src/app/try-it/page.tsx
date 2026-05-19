"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Sparkles, Calendar, MapPin, Scroll, BookOpen, Compass, ArrowRight, User } from "lucide-react";
import Button from "@/components/ui/button";

function TryItForm() {
  const searchParams = useSearchParams();
  const [persona, setPersona] = useState("scholar");
  const [destination, setDestination] = useState("cappadocia");
  const [pace, setPace] = useState("balanced");
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [result, setResult] = useState<any | null>(null);

  useEffect(() => {
    const qPersona = searchParams.get("persona");
    const qLocation = searchParams.get("location");

    if (qPersona) {
      if (qPersona.includes("scholar") || qPersona.includes("byzantine")) setPersona("scholar");
      else if (qPersona.includes("merchant") || qPersona.includes("ottoman")) setPersona("merchant");
      else if (qPersona.includes("philosopher") || qPersona.includes("roman")) setPersona("philosopher");
      else if (qPersona.includes("sculptor") || qPersona.includes("hittite")) setPersona("sculptor");
    }

    if (qLocation) {
      const locLower = qLocation.toLowerCase();
      if (locLower.includes("cappadocia")) setDestination("cappadocia");
      else if (locLower.includes("istanbul")) setDestination("istanbul");
      else if (locLower.includes("ephesus") || locLower.includes("izmir")) setDestination("ephesus");
      else if (locLower.includes("hattusa")) setDestination("hattusa");
    }
  }, [searchParams]);

  const personas = [
    { id: "scholar", name: "Byzantine Scholar", icon: BookOpen, accent: "text-blue-400" },
    { id: "merchant", name: "Ottoman Spice Merchant", icon: Compass, accent: "text-amber-400" },
    { id: "philosopher", name: "Roman Philosopher", icon: Scroll, accent: "text-cyan-400" },
    { id: "sculptor", name: "Hittite Sculptor", icon: User, accent: "text-emerald-400" },
  ];

  const destinations = [
    { id: "cappadocia", name: "Cappadocia (Valley of Monks)", region: "Central Anatolia" },
    { id: "istanbul", name: "Istanbul (The Sublime Porte)", region: "Marmara" },
    { id: "ephesus", name: "Ephesus (The Ancient Metropolis)", region: "Aegean" },
    { id: "hattusa", name: "Hattusa (Bronze Age Kingdom)", region: "Black Sea Border" },
  ];

  const loadingSteps = [
    "Opening historical gates...",
    "Retrieving manuscript archives...",
    "Aligning cosmic routes...",
    "Synthesizing persona dialogue...",
    "Forging dynamic itinerary...",
  ];

  const handleGenerate = () => {
    setLoading(true);
    setLoadingStep(0);
    setResult(null);

    const interval = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev < loadingSteps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setLoading(false);
          generateResult();
          return prev;
        }
      });
    }, 1200);
  };

  const generateResult = () => {
    // Curated rich templates based on selections
    const database: Record<string, Record<string, any>> = {
      scholar: {
        cappadocia: {
          title: "The Subterranean Epistles",
          intro: "To my esteemed colleagues in Constantinople: I write this under the warm light of a tallow candle, deep within the rock-cut halls of Göreme. The air is cool, and the walls hum with silent, stone-carved monastic prayers.",
          days: [
            {
              day: 1,
              title: "Descent into Subterranean Refuge",
              desc: "Step through stone doorways into the multi-level underground city of Derinkuyu. Marvel at the engineering of ventilation shafts and massive circular stone gates rolled shut against invaders.",
            },
            {
              day: 2,
              title: "Monastic Frescoes & Scriptoriums",
              desc: "Visit the rock-cut chapels of Göreme. Study the biblical murals painted in natural ochres, and converse with local keepers of the ancient cave churches.",
            },
            {
              day: 3,
              title: "Silent Valley Musings",
              desc: "Hike the Rose Valley under the sunset. As the fairy chimneys glow pink, pen reflections on transience and architectural eternity.",
            },
          ],
        },
        istanbul: {
          title: "Domes of the Queen of Cities",
          intro: "Constantinople stands tall, a beacon of faith and wisdom. From the gallery of Hagia Sophia, I look down upon the mosaic angels, writing on the fusion of Roman authority and theological geometry.",
          days: [
            {
              day: 1,
              title: "The Great Church Geometry",
              desc: "Explore Hagia Sophia's massive dome. Analyze Mimar Sinan's structural reinforcements and study the transition from Byzantine masonry to Ottoman geometry.",
            },
            {
              day: 2,
              title: "Subterranean Basilican Waters",
              desc: "Descend into the cool, silent Basilica Cistern. Find the massive carved stone Medusa heads supporting columns looted from forgotten pagan temples.",
            },
          ],
        },
      },
      merchant: {
        istanbul: {
          title: "The Spice Caravans of the Golden Horn",
          intro: "By the grace of the Almighty, my trade caravan has arrived safely at the gates of the Grand Bazaar. The air is thick with cardamom and Egyptian saffron, and my ledger is full of promising transactions.",
          days: [
            {
              day: 1,
              title: "Tasting Spice & Silk Markets",
              desc: "Walk the vaulted streets of the Spice Bazaar. Negotiate deals for rare silks, taste Turkish delights, and observe Ottoman currency systems.",
            },
            {
              day: 2,
              title: "The Han Commerce Hubs",
              desc: "Visit Büyük Valide Han. Clamber to the rooftops to view caravans trading near the port, and enjoy traditional Turkish tea in the central courtyard.",
            },
          ],
        },
        cappadocia: {
          title: "Cappadocian Caravanserai Trails",
          intro: "The silk roads through Anatolia are dry and dusty, but the heavy iron gates of Sultan Han offer security. We rest our camels under Seljuk arches tonight.",
          days: [
            {
              day: 1,
              title: "Sultanhanı Resting Ground",
              desc: "Investigate the monumental portal of Sultanhanı, the grandest caravanserai in Central Anatolia. Study Seljuk stone masonry and trading laws.",
            },
            {
              day: 2,
              title: "Valley Camel Trails",
              desc: "Ride horseback through the white and red valleys, mapping local trading paths carved directly into rock formations.",
            },
          ],
        },
      },
      philosopher: {
        ephesus: {
          title: "Stoic Solitude at Celsus",
          intro: "Nature does nothing in vain. Standing before the Celsus Library facade, I remind myself that the search for wisdom is the only noble path. The marbles of Ephesus are polished clean by centuries of seeking.",
          days: [
            {
              day: 1,
              title: "Dialogues in the Agora",
              desc: "Walk the ruins of the State Agora. Ponder political virtue and trade philosophy where ancient sophists once debated.",
            },
            {
              day: 2,
              title: "The Library of Celsus",
              desc: "Spend the morning at the library's steps. Read fragments of Epictetus, reflecting on what lies within our control.",
            },
          ],
        },
      },
      sculptor: {
        hattusa: {
          title: "The Sacred Lithics of Hattusa",
          intro: "The Sun Goddess of Arinna guides my chisel. I carve the twin lion gates of the Great Citadel, immortalizing the eternal peace treaty in solid, grey stone.",
          days: [
            {
              day: 1,
              title: "The Citadel of Great Kings",
              desc: "Wander the high stone walls of Hattusa. Touch the massive green stones of the grand temple and examine Hittite cuneiform scripts.",
            },
            {
              day: 2,
              title: "Yazılıkaya's Twelve Gods",
              desc: "Hike to the open-air rock sanctuary of Yazılıkaya. Study the carving of the twelve gods of the underworld, capturing their spiritual posture.",
            },
          ],
        },
      },
    };

    // Fallback if combination does not exist
    const selectedP = database[persona];
    const selectedD = selectedP ? selectedP[destination] : null;

    if (selectedD) {
      setResult(selectedD);
    } else {
      // Dynamic fallback generator
      const personaObj = personas.find((p) => p.id === persona);
      const destObj = destinations.find((d) => d.id === destination);
      setResult({
        title: `The Chronicles of the ${personaObj?.name} in ${destObj?.name}`,
        intro: `Through the lens of the ${personaObj?.name}, the landscapes of ${destObj?.name} transform. Every pathway tells a tale of historical continuity, trade, and architectural marvels.`,
        days: [
          {
            day: 1,
            title: `Arrival at ${destObj?.name}`,
            desc: `Soak in the unique geography and cultural landmarks of ${destObj?.name}, viewing them through your unique historical lens and journaling the raw sensations.`,
          },
          {
            day: 2,
            title: `Unraveling the Local Mystique`,
            desc: `Examine the local architecture and talk to artisans to synthesize how your identity would have traded, written, or governed here.`,
          },
        ],
      });
    }
  };

  return (
    <div className="grid lg:grid-cols-12 gap-8 items-start">
      {/* Form / Selections */}
      <div className="lg:col-span-5 flex flex-col gap-6 glass-panel p-6 rounded-3xl border-white/10 relative">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-brand-primary" />
          Persona Configuration
        </h2>

        {/* Persona Select */}
        <div className="flex flex-col gap-2.5">
          <label className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Choose Historical Soul</label>
          <div className="grid grid-cols-2 gap-3">
            {personas.map((p) => {
              const Icon = p.icon;
              const isSelected = persona === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setPersona(p.id)}
                  className={`p-4 rounded-2xl border text-left flex flex-col gap-2 transition-all duration-300 ${
                    isSelected
                      ? "bg-brand-primary/10 border-brand-primary text-white"
                      : "bg-slate-900/50 border-white/5 hover:border-white/15 text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isSelected ? p.accent : "text-slate-500"}`} />
                  <span className="text-xs font-semibold">{p.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Destination Select */}
        <div className="flex flex-col gap-2">
          <label className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Anatolian Destination</label>
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full bg-slate-900/50 border border-white/10 focus:border-brand-primary rounded-xl py-3 px-4 text-sm text-white focus:outline-none transition-all cursor-pointer"
          >
            {destinations.map((d) => (
              <option key={d.id} value={d.id} className="bg-slate-950 text-slate-300">
                {d.name} ({d.region})
              </option>
            ))}
          </select>
        </div>

        {/* Travel Pace */}
        <div className="flex flex-col gap-2">
          <label className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Contemplation Pace</label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: "leisure", label: "Leisurely" },
              { id: "balanced", label: "Balanced" },
              { id: "academic", label: "Academic" },
            ].map((pOpt) => (
              <button
                key={pOpt.id}
                onClick={() => setPace(pOpt.id)}
                className={`py-2 rounded-xl text-xs font-medium border transition-all ${
                  pace === pOpt.id
                    ? "bg-white/10 border-white/20 text-white"
                    : "bg-transparent border-transparent text-slate-500 hover:text-slate-300"
                }`}
              >
                {pOpt.label}
              </button>
            ))}
          </div>
        </div>

        <Button variant="glow" onClick={handleGenerate} disabled={loading} className="w-full gap-2 mt-4 py-3 rounded-xl">
          Initiate Synthesis
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Output Panel */}
      <div className="lg:col-span-7 flex flex-col gap-6">
        {loading ? (
          <div className="glass-panel p-12 rounded-3xl border-white/10 min-h-[400px] flex flex-col items-center justify-center text-center gap-6">
            <div className="w-16 h-16 rounded-full border-2 border-brand-primary/20 border-t-brand-primary animate-spin" />
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold text-white">Synthesizing Travel Soul</h3>
              <p className="text-xs text-brand-primary font-mono uppercase tracking-widest animate-pulse">
                {loadingSteps[loadingStep]}
              </p>
            </div>
          </div>
        ) : result ? (
          <div className="glass-panel p-8 rounded-3xl border-white/10 flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-300 relative overflow-hidden">
            {/* Ambient gold glow */}
            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-brand-primary/5 filter blur-[80px] pointer-events-none" />

            <div className="flex flex-col gap-2 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <Scroll className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest">
                  Historical Chronicle Synthesized
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white mt-1">{result.title}</h2>
              <p className="text-xs text-slate-500">
                Persona: <strong className="text-slate-300">{personas.find((p) => p.id === persona)?.name}</strong> |
                Destination: <strong className="text-slate-300">{destinations.find((d) => d.id === destination)?.name}</strong>
              </p>
            </div>

            <blockquote className="text-sm md:text-base text-slate-300 italic pl-4 border-l-2 border-brand-primary/40 py-1 leading-relaxed bg-white/5 p-4 rounded-r-2xl">
              "{result.intro}"
            </blockquote>

            <div className="flex flex-col gap-6 mt-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent-teal" />
                Chronological Journey
              </h3>

              <div className="flex flex-col gap-6 relative border-l border-white/10 pl-6 ml-3">
                {result.days.map((day: any) => (
                  <div key={day.day} className="relative group">
                    {/* Circle bullet */}
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-slate-950 border border-brand-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-semibold text-brand-primary uppercase tracking-wider">
                        Day {day.day}
                      </span>
                      <h4 className="text-base font-bold text-white">{day.title}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed mt-1 font-normal">{day.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-3 border-t border-white/10 pt-6 mt-6">
              <Button variant="outline" className="text-xs py-2 rounded-xl" onClick={() => window.print()}>
                Print Chronicle
              </Button>
              <Button
                variant="glow"
                className="text-xs py-2 rounded-xl"
                onClick={() => alert("Chronicle stored securely in your Anatolian Codex (Firestore).")}
              >
                Save to Codex
              </Button>
            </div>
          </div>
        ) : (
          <div className="glass-panel p-12 rounded-3xl border-white/10 min-h-[400px] flex flex-col items-center justify-center text-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-slate-600">
              <Compass className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Chronicle Synthesis System</h3>
              <p className="text-sm text-slate-400 max-w-sm mt-1">
                Configure your historical identity soul and target location in the left panel to synthesize an agentic, narrative travel chronicle.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function TryIt() {
  return (
    <div className="flex flex-col gap-12 py-8">
      {/* Intro */}
      <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
        <div className="inline-flex items-center gap-2 self-center px-4 py-1.5 rounded-full glass-panel border-white/10 text-xs font-semibold text-brand-primary tracking-wide">
          <Sparkles className="w-3.5 h-3.5" />
          Portal Synthesizer
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
          Initiate Identity Tourism
        </h1>
        <p className="text-slate-400 text-sm md:text-base leading-relaxed">
          Unlock your dynamic narrative timeline. Align your modern travel coordinates with ancient Anatolian souls.
        </p>
      </div>

      <Suspense fallback={
        <div className="text-center py-12 text-slate-400">Loading portal controls...</div>
      }>
        <TryItForm />
      </Suspense>
    </div>
  );
}
