"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  Send, 
  Loader2, 
  ChevronRight,
  Clock,
  Compass
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Types for the itinerary
interface POI {
  name: string;
  description: string;
  time?: string;
}

interface Day {
  day: number;
  title: string;
  pois: POI[];
}

interface Itinerary {
  destination: string;
  duration: string;
  days: Day[];
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);

  const fetchItinerary = async (searchQuery: string) => {
    setLoading(true);
    setItinerary(null);
    
    try {
      // Mock API call stub
      /*
      const response = await fetch('/api/generate-itinerary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: searchQuery }),
      });
      const data = await response.json();
      setItinerary(data);
      */
      
      // Simulating API delay for demonstration
      await new Promise((resolve) => setTimeout(resolve, 3000));
      
      // Mock Data response
      const mockData: Itinerary = {
        destination: "Istanbul & Cappadocia",
        duration: "3 Days",
        days: [
          {
            day: 1,
            title: "Historic Heart of Istanbul",
            pois: [
              { name: "Hagia Sophia", description: "Ancient architectural masterpiece with stunning mosaics.", time: "09:00 AM" },
              { name: "Blue Mosque", description: "Iconic mosque known for its blue tiles and six minarets.", time: "11:30 AM" },
              { name: "Grand Bazaar", description: "One of the largest and oldest covered markets in the world.", time: "03:00 PM" }
            ]
          },
          {
            day: 2,
            title: "Bosphorus & Modern Vibes",
            pois: [
              { name: "Galata Tower", description: "Medieval stone tower offering panoramic views of the city.", time: "10:00 AM" },
              { name: "Bosphorus Cruise", description: "Scenic boat trip between Europe and Asia.", time: "02:00 PM" },
              { name: "Istiklal Avenue", description: "Bustling pedestrian street with shops, cafes, and historic trams.", time: "06:00 PM" }
            ]
          },
          {
            day: 3,
            title: "Fairytale Cappadocia",
            pois: [
              { name: "Hot Air Balloon Flight", description: "Breathtaking sunrise flight over unique rock formations.", time: "05:30 AM" },
              { name: "Goreme Open Air Museum", description: "UNESCO site with rock-cut churches and frescoes.", time: "10:30 AM" },
              { name: "Uchisar Castle", description: "Highest point in Cappadocia with panoramic valley views.", time: "03:00 PM" }
            ]
          }
        ]
      };
      
      setItinerary(mockData);
    } catch (error) {
      console.error("Failed to fetch itinerary:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      fetchItinerary(query);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-500/30 selection:text-blue-200">
      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/20 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24">
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium"
          >
            <Sparkles className="w-4 h-4" />
            <span>Next-Gen Travel Planning</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white"
          >
            TravelAnatolia
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light"
          >
            Your Autonomous <span className="text-blue-400 font-medium">Agentic Travel Architect</span>. 
            Crafting hyper-personalized journeys with AI precision.
          </motion.p>
        </div>

        {/* Input Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto mb-20"
        >
          <form onSubmit={handleSubmit} className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-focus-within:opacity-50 transition duration-500"></div>
            <div className="relative flex items-center bg-[#0f172a] border border-slate-800 rounded-2xl p-2 shadow-2xl overflow-hidden">
              <div className="flex-1 flex items-center px-4">
                <Compass className="w-6 h-6 text-slate-500 mr-3" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Where do you want to go? (e.g., A 5-day cultural tour of Aegean coast)"
                  className="w-full bg-transparent border-none focus:ring-0 text-white placeholder-slate-500 py-4 text-lg outline-none"
                  disabled={loading}
                />
              </div>
              <button
                type="submit"
                disabled={loading || !query.trim()}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300",
                  loading || !query.trim() 
                    ? "bg-slate-800 text-slate-500 cursor-not-allowed" 
                    : "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20"
                )}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Processing</span>
                  </>
                ) : (
                  <>
                    <span>Generate Itinerary</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>

        {/* Loading State */}
        <AnimatePresence>
          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-20 space-y-4"
            >
              <div className="relative">
                <div className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-blue-400" />
                </div>
              </div>
              <p className="text-blue-400 font-medium animate-pulse">
                Agentic Orchestration in progress...
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results / Timeline */}
        <AnimatePresence>
          {itinerary && !loading && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-12"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-800 pb-8 gap-4">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{itinerary.destination}</h2>
                  <div className="flex items-center gap-4 text-slate-400">
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {itinerary.duration}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Customized Experience</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 via-indigo-600 to-transparent md:-translate-x-1/2 hidden sm:block" />

                {itinerary.days.map((day, dayIdx) => (
                  <div key={day.day} className="relative mb-20 last:mb-0">
                    {/* Day Marker */}
                    <div className="flex items-center justify-center md:justify-center mb-8 relative z-10">
                      <div className="bg-[#0f172a] border-2 border-blue-600 text-blue-400 px-6 py-2 rounded-full font-bold shadow-xl shadow-blue-600/10">
                        Day {day.day}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-24 items-start">
                      {/* Day Info */}
                      <div className={cn(
                        "space-y-4",
                        dayIdx % 2 === 0 ? "md:text-right" : "md:order-2"
                      )}>
                        <h3 className="text-2xl font-bold text-white">{day.title}</h3>
                        <p className="text-slate-400 leading-relaxed">
                          Experience the best of {day.title} with a curated selection of locations designed for maximum immersion.
                        </p>
                      </div>

                      {/* POIs */}
                      <div className={cn(
                        "space-y-6",
                        dayIdx % 2 === 0 ? "" : "md:order-1"
                      )}>
                        {day.pois.map((poi, poiIdx) => (
                          <motion.div
                            key={poi.name}
                            initial={{ opacity: 0, x: dayIdx % 2 === 0 ? 20 : -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: poiIdx * 0.1 }}
                            className="bg-[#0f172a]/50 border border-slate-800 p-5 rounded-2xl hover:border-blue-500/50 transition-colors group"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-bold text-white group-hover:text-blue-400 transition-colors">{poi.name}</h4>
                              {poi.time && (
                                <span className="flex items-center gap-1.5 text-xs font-mono text-slate-500 bg-slate-800/50 px-2 py-1 rounded">
                                  <Clock className="w-3 h-3" /> {poi.time}
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-slate-400">{poi.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center pt-12 pb-20">
                <button className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-slate-200 transition-colors inline-flex items-center gap-2">
                  <span>Save Itinerary</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-12 px-6 text-center text-slate-600 text-sm">
        <p>© 2026 TravelAnatolia V2 • Powered by Agentic Intelligence</p>
      </footer>
    </div>
  );
}
