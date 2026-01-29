import React from 'react';

const sectors = [
  { name: "IT & Technology", details: "Software Development, QA, Data Science, Gen AI, Infra Mgt., Security Operations, Service Desk" },
  { name: "Sales & Business Dev", details: "Revenue growth talent and strategic account management." },
  { name: "Operations & Support", details: "Service delivery excellence and back-office optimization." },
  { name: "Finance & HR", details: "Corporate functions and executive leadership placement." },
  { name: "Healthcare & Mfg", details: "Retail, Edtech, BPO, and diverse industrial sectors." },
];

const strengths = [
  { title: "Tech & IT Excellence", desc: "Deep expertise in all IT domains.", icon: "💼" },
  { title: "Enterprise & Industrial", desc: "Healthcare, manufacturing operations.", icon: "🏢" }
];

export default function DomainExpertise() {
  return (
    <section className="bg-black py-24 px-6 text-white font-sans overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-none mb-6">
            Domain <span className="text-zinc-500">Expertise</span>
          </h2>
          <p className="text-zinc-400 text-lg border-l-2 border-white pl-6 italic max-w-3xl">
            Unrivaled industry coverage. We don't just find candidates; we find specialists who understand your specific vertical.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Sector Sourcing Strength - LEFT COLUMN (Prose-focused) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xs font-black tracking-[0.4em] uppercase text-zinc-600 mb-8">
              Sector Sourcing Strength
            </h3>
            
            <div className="bg-zinc-950 border border-zinc-800 rounded-[2rem] overflow-hidden">
              {sectors.map((sector, index) => (
                <div 
                  key={index} 
                  className="group p-8 border-b border-zinc-900 last:border-0 hover:bg-white transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <span className="text-xl font-bold group-hover:text-black transition-colors">
                      {sector.name}
                    </span>
                    <span className="text-sm text-zinc-500 group-hover:text-zinc-700 md:text-right md:max-w-xs transition-colors">
                      {sector.details}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Strengths - RIGHT COLUMN (Visual Cards) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="text-xs font-black tracking-[0.4em] uppercase text-zinc-600 mb-2">
              Key Strengths
            </h3>

            {strengths.map((strength, index) => (
              <div 
                key={index}
                className="relative group bg-zinc-900/50 border border-zinc-800 p-8 rounded-[2rem] hover:border-white transition-all duration-500 overflow-hidden"
              >
                {/* Decorative background number */}
                <span className="absolute -right-4 -bottom-4 text-9xl font-black text-white/5 pointer-events-none">
                  0{index + 1}
                </span>

                <div className="relative z-10">
                  <div className="text-4xl mb-6">{strength.icon}</div>
                  <h4 className="text-2xl font-bold mb-2 tracking-tight">
                    {strength.title}
                  </h4>
                  <p className="text-zinc-400 group-hover:text-zinc-200 transition-colors">
                    {strength.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Unique "Data-Driven" CTA box */}
            <div className="mt-auto bg-white p-8 rounded-[2rem] text-black">
                <h4 className="text-sm font-black uppercase tracking-widest mb-2">Industry Focus</h4>
                <p className="text-3xl font-bold tracking-tighter italic">Deep market penetration across 15+ verticals.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}