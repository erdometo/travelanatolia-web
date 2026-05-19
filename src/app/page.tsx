"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Compass, Sparkles, MapPin, Shield, Scroll, CheckCircle } from "lucide-react";
import Button from "@/components/ui/button";

export default function Home() {
  const [selectedIdentity, setSelectedIdentity] = useState("merchant");

  const identities = [
    {
      id: "merchant",
      title: "Silk Road Merchant",
      era: "14th Century Ottoman Era",
      quote: "My caravans carry Persian silks and Anatolian spices. The roads are long, but the inns of Anatolia are welcoming.",
      narrative: "Explore the ancient caravanserai networks (Han) of Cappadocia, Hagia Sophia's bustling marketplaces, and trade routes through Konya.",
      focus: "Historical Caravanserais, Bazaars, Spice Markets",
      gradient: "from-amber-500 to-orange-600",
    },
    {
      id: "scholar",
      title: "Byzantine Scholar",
      era: "9th Century Empire",
      quote: "Knowledge is the greatest treasure. The monastic cells of Göreme hold secrets carved directly into the living rock.",
      narrative: "Uncover subterranean cities, Byzantine rock-cut churches with ancient frescoes, and the scholarly history of Ephesus.",
      focus: "Monastery Frescoes, Rock-cut Cities, Ancient Libraries",
      gradient: "from-cyan-400 to-blue-600",
    },
    {
      id: "artisan",
      title: "Ottoman Calligrapher",
      era: "16th Century Renaissance",
      quote: "The ink is the light of the mind. Every curve of my pen tells the story of the Golden Horn.",
      narrative: "Immerse yourself in İznik tile workshops, the majestic dome geometries of Mimar Sinan, and the scriptorial history of Topkapı.",
      focus: "Sinan Architecture, Ceramics Workshops, Miniature Art",
      gradient: "from-purple-500 to-pink-600",
    },
  ];

  const features = [
    {
      icon: Sparkles,
      title: "Magical Narrative Synthesis",
      desc: "Our AI model synthesizes personalized travel itineraries narrated from your chosen historical persona's voice.",
    },
    {
      icon: Compass,
      title: "Authentic Footsteps",
      desc: "Avoid generic tours. Travel exact routes once tread by emperors, merchants, and nomadic travelers.",
    },
    {
      icon: Scroll,
      title: "Generative Travel Journal",
      desc: "As you travel, receive daily journal entries written by your digital avatar describing your experiences.",
    },
  ];

  const selectedData = identities.find((i) => i.id === selectedIdentity) || identities[0];

  return (
    <div className="flex flex-col gap-20 py-8">
      {/* Hero Section */}
      <section className="text-center flex flex-col items-center gap-6 max-w-4xl mx-auto py-12 md:py-20 relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-white/10 text-xs font-semibold text-brand-primary tracking-wide mb-2 animate-pulse">
          <Sparkles className="w-3.5 h-3.5" />
          The Next Generation of AI Travel
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
          Step Into a Different Soul. <br />
          <span className="bg-gradient-to-r from-brand-primary via-amber-400 to-accent-teal bg-clip-text text-transparent glow-text-gold">
            Explore Anatolia.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mt-2">
          Experience AI-driven identity tourism. Step back in time as a Roman Scholar, an Ottoman Artisan, or a Silk Road Merchant to uncover Turkey's deepest secrets.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/try-it">
            <Button variant="glow" size="lg" className="gap-2 group">
              Begin Your Persona Tour
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/explore">
            <Button variant="outline" size="lg">
              Explore Destinations
            </Button>
          </Link>
        </div>
      </section>

      {/* Identity Preview Showcase */}
      <section className="flex flex-col gap-8">
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Choose Your Lens of History
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            Select a historical identity to see how it alters your perspective, destination picks, and daily narratives.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch mt-4">
          {/* Identity Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {identities.map((id) => (
              <button
                key={id.id}
                onClick={() => setSelectedIdentity(id.id)}
                className={`p-6 rounded-3xl text-left transition-all duration-300 ${
                  selectedIdentity === id.id
                    ? "glass-panel border-brand-primary/30 shadow-xl shadow-brand-primary/5"
                    : "hover:bg-white/5 border border-transparent"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white">{id.title}</h3>
                  <span className={`text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-gradient-to-r ${id.gradient} text-slate-950`}>
                    {id.era.split(" ")[0]}
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-medium mb-1">{id.era}</p>
                <p className="text-sm text-slate-300 line-clamp-1 italic">"{id.quote}"</p>
              </button>
            ))}
          </div>

          {/* Interactive Card Narrative Preview */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between border-white/10 group min-h-[350px]">
            {/* Ambient background glow matching the identity gradient */}
            <div className={`absolute -right-20 -top-20 w-80 h-80 rounded-full bg-gradient-to-br ${selectedData.gradient} opacity-10 filter blur-[80px] group-hover:opacity-15 transition-opacity duration-500`} />

            <div className="flex flex-col gap-6 relative z-10">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-xl bg-gradient-to-r ${selectedData.gradient} flex items-center justify-center`}>
                  <Compass className="w-4 h-4 text-slate-950" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{selectedData.title}</h4>
                  <p className="text-[10px] text-slate-400">{selectedData.era}</p>
                </div>
              </div>

              <blockquote className="text-lg md:text-xl font-medium text-slate-200 italic border-l-2 border-brand-primary/50 pl-4 py-1">
                "{selectedData.quote}"
              </blockquote>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold text-brand-primary uppercase tracking-wider">Historical Route Narrative</span>
                <p className="text-sm text-slate-300 leading-relaxed">{selectedData.narrative}</p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 mt-6 flex flex-wrap gap-4 items-center justify-between relative z-10">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent-teal" />
                <span className="text-xs text-slate-400">
                  Focus: <strong className="text-white">{selectedData.focus}</strong>
                </span>
              </div>
              <Link href="/try-it" className="text-xs font-bold text-brand-primary flex items-center gap-1 hover:gap-2 transition-all">
                Try this persona
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="flex flex-col gap-12 border-t border-white/5 pt-16">
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
          <h2 className="text-3xl font-bold text-white">How The Magic Works</h2>
          <p className="text-slate-400 text-sm md:text-base">
            Using autonomous agentic travel planning to deliver immersive journeys.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="glass-panel glass-panel-hover p-6 rounded-3xl flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shadow-inner">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Testimonial / Story Callout */}
      <section className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden flex flex-col items-center text-center gap-6 border-white/10 max-w-4xl mx-auto">
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/5 via-transparent to-accent-teal/5 pointer-events-none" />
        <div className="w-12 h-12 rounded-full bg-brand-primary/15 flex items-center justify-center text-brand-primary">
          <CheckCircle className="w-6 h-6" />
        </div>
        <blockquote className="text-xl md:text-2xl font-medium text-slate-200 italic max-w-2xl relative z-10">
          "I traveled Ephesus as a 2nd-century Roman Philosopher. My digital journal narrated the sights with Stoic wisdom, making me look at ruins with profound, new perspective. Absolutely magical!"
        </blockquote>
        <div className="flex flex-col items-center relative z-10">
          <span className="font-semibold text-white">Alistair V.</span>
          <span className="text-xs text-slate-500">Identity Traveler from San Francisco</span>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="text-center flex flex-col items-center gap-6 max-w-xl mx-auto py-8">
        <h2 className="text-3xl font-extrabold text-white">Ready for Identity Tourism?</h2>
        <p className="text-slate-400 text-sm md:text-base">
          Start stepping into historical lives. Generate your first identity-driven route and experience Turkey like never before.
        </p>
        <Link href="/try-it">
          <Button variant="glow" size="lg" className="px-10">
            Get Started Now
          </Button>
        </Link>
      </section>
    </div>
  );
}
