"use client";

import { useState } from "react";
import Link from "next/link";
import { Compass, Calendar, ArrowRight, User, MapPin, Sparkles } from "lucide-react";
import Button from "@/components/ui/button";

export default function Explore() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Eras" },
    { id: "ancient", name: "Ancient Greco-Roman" },
    { id: "byzantine", name: "Byzantine Empire" },
    { id: "ottoman", name: "Ottoman Renaissance" },
  ];

  const tours = [
    {
      id: "derinkuyu-scholar",
      title: "Subterranean Monastic Quest",
      location: "Cappadocia (Derinkuyu)",
      persona: "Byzantine Scholar",
      era: "byzantine",
      duration: "3 Days",
      bgClass: "from-blue-600/20 to-indigo-900/40",
      accent: "text-blue-400",
      description:
        "Venture into multi-level subterranean cities and stone-cut monasteries, decoding ancient Greek frescoes through the eyes of a monastic writer.",
      stops: ["Derinkuyu Underground City", "Göreme Open Air Museum", "Ihlara Valley Monasteries"],
    },
    {
      id: "grand-bazaar-envoy",
      title: "Silk Road Trade Chronicles",
      location: "Istanbul (Grand Bazaar & Hans)",
      persona: "Ottoman Spice Merchant",
      era: "ottoman",
      duration: "2 Days",
      bgClass: "from-amber-600/20 to-orange-950/40",
      accent: "text-amber-400",
      description:
        "Negotiate and map the trading routes of the Grand Bazaar, staying at historical caravanserais while exploring the 16th-century commercial legacy.",
      stops: ["Büyük Valide Han", "Spice Bazaar", "Topkapı Palace Minting Rooms"],
    },
    {
      id: "ephesus-philosopher",
      title: "The Stoic Ephesus Walk",
      location: "Izmir (Ephesus Ruins)",
      persona: "Roman Philosopher",
      era: "ancient",
      duration: "1 Day",
      bgClass: "from-cyan-600/20 to-teal-950/40",
      accent: "text-cyan-400",
      description:
        "Walk the white marble streets of Ephesus, reciting classical texts at the Library of Celsus under the philosophical guidance of a Stoic traveler.",
      stops: ["Library of Celsus", "Terrace Houses", "Temple of Hadrian"],
    },
    {
      id: "hattusa-sculptor",
      title: "Bronze Age Stone Whispers",
      location: "Çorum (Hattusa & Yazılıkaya)",
      persona: "Hittite Sculptor",
      era: "ancient",
      duration: "2 Days",
      bgClass: "from-emerald-600/20 to-green-950/40",
      accent: "text-emerald-400",
      description:
        "Trace the origins of Anatolian art by studying ancient rock-cut reliefs and bronze castings under the spiritual mind of a temple artisan.",
      stops: ["Yazılıkaya Sanctuary", "Hattusa Lion Gate", "Alacahöyük Tombs"],
    },
    {
      id: "phrygian-bard",
      title: "Homeric Melodies & Mysticism",
      location: "Eskişehir (Phrygian Valley)",
      persona: "Phrygian Bard",
      era: "ancient",
      duration: "3 Days",
      bgClass: "from-purple-600/20 to-purple-950/40",
      accent: "text-purple-400",
      description:
        "Wander carved rock monuments and step-altars dedicated to Cybele, crafting poetry and experiencing ancient mythological landscapes.",
      stops: ["Midas Monument", "Yapıldak Valley altars", "Gerdekkaya Rock Tomb"],
    },
    {
      id: "karatay-astronomer",
      title: "Celestial Domes & Madrasahs",
      location: "Konya (Seljuk Legacy)",
      persona: "Seljuk Astronomer",
      era: "ottoman",
      duration: "2 Days",
      bgClass: "from-rose-600/20 to-rose-950/40",
      accent: "text-rose-400",
      description:
        "Study tiles and geometric celestial carvings on Seljuk school portals, analyzing early medieval star charts in historic Konya.",
      stops: ["Karatay Madrasah", "Ince Minareli Madrasah", "Mevlana Museum"],
    },
  ];

  const filteredTours =
    selectedFilter === "all" ? tours : tours.filter((t) => t.era === selectedFilter);

  return (
    <div className="flex flex-col gap-12 py-8">
      {/* Intro */}
      <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
        <div className="inline-flex items-center gap-2 self-center px-4 py-1.5 rounded-full glass-panel border-white/10 text-xs font-semibold text-accent-teal tracking-wide">
          <Compass className="w-3.5 h-3.5" />
          Anatolian Time Machine
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
          Browse Historical Chronicles
        </h1>
        <p className="text-slate-400 text-sm md:text-base leading-relaxed">
          Embark on curated, narrative-driven journeys across Anatolia. Filter by era, pick your historical identity avatar, and begin a spiritual exploration.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedFilter(cat.id)}
            className={`px-5 py-2.5 rounded-2xl text-xs font-semibold transition-all duration-300 ${
              selectedFilter === cat.id
                ? "bg-brand-primary text-slate-950 shadow-lg shadow-brand-primary/10"
                : "glass-panel border-white/5 hover:border-white/20 text-slate-400 hover:text-white"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mt-4">
        {filteredTours.map((tour) => (
          <div
            key={tour.id}
            className={`glass-panel rounded-3xl border-white/10 p-6 flex flex-col justify-between hover:border-brand-primary/20 hover:scale-[1.01] transition-all duration-300 relative overflow-hidden group`}
          >
            {/* Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${tour.bgClass} opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />

            <div className="flex flex-col gap-5 relative z-10">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-semibold text-slate-400 flex items-center gap-1.5 uppercase tracking-widest bg-white/5 px-2.5 py-1 rounded-lg">
                  <Calendar className="w-3.5 h-3.5" />
                  {tour.duration}
                </span>
                <span className={`text-[10px] font-bold uppercase tracking-wider ${tour.accent}`}>
                  {tour.persona}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-brand-primary transition-colors duration-300">
                  {tour.title}
                </h3>
                <span className="text-xs text-slate-400 flex items-center gap-1 mt-1 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-accent-teal shrink-0" />
                  {tour.location}
                </span>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed font-normal">{tour.description}</p>

              <div className="flex flex-col gap-2 mt-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Notable Stops</span>
                <ul className="flex flex-col gap-1.5">
                  {tour.stops.map((stop, i) => (
                    <li key={i} className="text-xs text-slate-300 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary/60 shrink-0" />
                      {stop}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-white/10 pt-5 mt-6 relative z-10">
              <Link
                href={`/try-it?persona=${tour.persona.toLowerCase().replace(" ", "-")}&location=${encodeURIComponent(
                  tour.location.split(" (")[0]
                )}`}
              >
                <Button variant="outline" className="w-full gap-2 text-xs py-2 rounded-xl group-hover:bg-brand-primary group-hover:text-slate-950 group-hover:border-transparent">
                  Initiate Tour Persona
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
