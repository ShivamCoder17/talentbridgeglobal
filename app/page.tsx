import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";

const models = [
  {
    title: "Pay-Per-Hire",
    desc: "Success-based pricing. Pay only when you hire.",
    icon: "💰",
    step: "01",
    tag: "Flexible"
  },
  {
    title: "Project-Based",
    desc: "Fixed scope and timeline for specific goals.",
    icon: "📊",
    step: "02",
    tag: "Scalable"
  },
  {
    title: "Exclusive Mandate",
    desc: "Dedicated focus and priority timeline for your most critical requirements.",
    icon: "🔒",
    step: "03",
    tag: "Priority"
  },
  {
    title: "Ongoing Partnership",
    desc: "Long-term strategic hiring support with embedded talent experts.",
    icon: "🤝",
    step: "04",
    tag: "Elite"
  }
];

export const metadata: Metadata = {
  title: "Home | TalentBridgeGlobal",
  description: "Connecting talent with opportunities worldwide. Find your next career move or discover exceptional professionals.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-6 flex justify-center">
          <Image
            src="/images/tbg.png"
            alt="TalentBridgeGlobal Logo"
            width={180}
            height={60}
            priority
          />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold text-foreground sm:text-6xl lg:text-7xl">
            TalentBridgeGlobal
            <span className="text-foreground/80"> - Strategic Vendor Partnership</span>
          </h1>
          <p className="mb-8 text-xl text-zinc-600 dark:text-zinc-400 sm:text-2xl">
            Excellence in Talent Sourcing, Recruitment & Staffing Solutions for Enterprise Growth.
          </p>
          {/* <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/apply"
              className="rounded-full bg-foreground px-8 py-4 text-base font-medium text-background transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200"
            >
              Apply Now
            </Link>
            <Link
              href="/jobs"
              className="rounded-full border border-zinc-300 bg-white px-8 py-4 text-base font-medium text-foreground transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950 dark:hover:bg-zinc-900"
            >
              Browse Jobs
            </Link>
          </div> */}
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground sm:text-4xl">
              Why Partner with TalentBridgeGlobal?
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-4 text-4xl">🌍</div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  Global Reach
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Access opportunities and talent from around the <span className="font-bold">world</span>.
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 text-4xl">🎯</div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  Success Rate
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  <span className="font-bold">92%</span> of our candidates are successfully placed in their dream jobs.
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 text-4xl">⚡</div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  Fast Process
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Streamlined processes with an <span className="font-bold">24-48 hours</span> avg turnaround time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        
        <div className="bg-black px-4 font-sans text-white">
          <div className="max-w-5xl mx-auto">

            <div className="text-center mb-24">
              <h2 className="text-5xl font-black tracking-tighter mb-6 uppercase italic">Our Proven Recruitment Process</h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg border-l-2 border-white pl-6 italic">
                <span className="text-white font-bold not-italic">Streamlined 5-Step Hiring Excellence:</span> A structured, efficient process combining deep market understanding with rapid execution.
              </p>
            </div>

            <div className="relative">
              <svg className="hidden md:block absolute top-12 left-0 w-full h-full -z-0 opacity-30" viewBox="0 0 800 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M150 60 H 650 A 50 50 0 0 1 700 110 V 210 A 50 50 0 0 1 650 260 H 150 A 50 50 0 0 0 100 310 V 410 A 50 50 0 0 0 150 460 H 650 A 50 50 0 0 1 700 510 V 610 A 50 50 0 0 1 650 660 H 150 A 50 50 0 0 0 100 710 V 810 A 50 50 0 0 0 150 860 H 250"
                  stroke="white" strokeWidth="2" strokeDasharray="8 12" strokeLinecap="round">
                  <animate attributeName="stroke-dashoffset" from="100" to="0" dur="5s" repeatCount="indefinite" />
                </path>
              </svg>

              <div className="space-y-16 md:space-y-0 relative z-10">

                <div className="flex flex-col md:flex-row items-center md:justify-start">
                  <div className="w-full md:w-5/12 group">
                    <div className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800 transition-all duration-500 hover:border-white hover:bg-zinc-800">
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] mb-4">Step 01</div>
                      <h4 className="text-2xl font-bold text-white mb-3">Requirement Analysis</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">In-depth understanding of role, skills, and culture fit.</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center md:justify-end md:-mt-10">
                  <div className="w-full md:w-5/12 group">
                    <div className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800 transition-all duration-500 hover:border-white hover:bg-zinc-800">
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] mb-4">Step 02</div>
                      <h4 className="text-2xl font-bold text-white mb-3">Talent Sourcing</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">Leveraging recruiter network and market outreach.</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center md:justify-start md:-mt-10">
                  <div className="w-full md:w-5/12 group">
                    <div className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800 transition-all duration-500 hover:border-white hover:bg-zinc-800">
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] mb-4">Step 03</div>
                      <h4 className="text-2xl font-bold text-white mb-3">Screening</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">Rigorous evaluation of technical and behavioral fit.</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center md:justify-end md:-mt-10">
                  <div className="w-full md:w-5/12 group">
                    <div className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800 transition-all duration-500 hover:border-white hover:bg-zinc-800">
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] mb-4">Step 04</div>
                      <h4 className="text-2xl font-bold text-white mb-3">Interview</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">Seamless scheduling and preparation guidance.</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center md:justify-start md:-mt-10">
                  <div className="w-full md:w-5/12 group">
                    <div className="bg-white p-10 rounded-3xl border border-white transition-all duration-500 transform group-hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                      <div className="text-xs font-bold text-black uppercase tracking-[0.3em] mb-4">Final Step</div>
                      <h4 className="text-2xl font-black text-black mb-3 italic">Hiring Excellence</h4>
                      <p className="text-zinc-700 text-sm leading-relaxed font-medium">Ensuring a smooth transition and long-term success for your team.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-24 px-6 text-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Minimalist Stark Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            
            <h2 className=" text-5xl font-black tracking-tighter mb-6 uppercase italic">
              Engagement Models
            </h2>
            <p className="text-zinc-400 text-lg border-l-2 border-white pl-6 italic">
              Choose the partnership structure that best aligns with your organizational growth speed.
            </p>
          </div>
          <div className="hidden md:block text-right">
            <span className="text-sm font-bold tracking-[0.5em] text-zinc-600 uppercase">Strategic Sourcing</span>
          </div>
        </div>

        {/* Unique Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {models.map((model, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-[2.5rem] p-8 transition-all duration-500 border border-zinc-800 
                ${index === 0 || index === 3 ? 'md:col-span-7' : 'md:col-span-5'}
                ${index === 3 ? 'bg-white text-black' : 'bg-zinc-950 text-white'}
                hover:border-zinc-500`}
            >
              {/* Animated Background Glow (Dark Cards Only) */}
              {index !== 3 && (
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-700" />
              )}

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <span className={`text-4xl p-3 rounded-2xl ${index === 3 ? 'bg-black/5' : 'bg-white/5'}`}>
                      {model.icon}
                    </span>
                    <span className={`text-xs font-black tracking-widest uppercase py-1 px-3 rounded-full border 
                      ${index === 3 ? 'border-black/20 text-black/60' : 'border-white/10 text-white/40'}`}>
                      {model.tag}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4 tracking-tight leading-tight">
                    {model.title}
                  </h3>
                  <p className={`text-lg leading-relaxed max-w-sm
                    ${index === 3 ? 'text-black/70' : 'text-zinc-400'}`}>
                    {model.desc}
                  </p>
                </div>

                <div className="mt-12 flex items-center justify-between">
                  <span className={`text-6xl font-black opacity-10 ${index === 3 ? 'text-black' : 'text-white'}`}>
                    {model.step}
                  </span>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between text-zinc-600 text-xs font-bold tracking-widest uppercase">
          <div className="flex gap-8 mb-4 md:mb-0">
            <span>Enterprise Ready</span>
            <span>Global Search</span>
            <span>Talent Pipeline</span>
          </div>
        </div>
      </div>
    </section>

      {/* Testimonials Section */}
      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mb-8 text-lg text-zinc-600 dark:text-zinc-400">
            Join thousands of professionals and companies already using TalentBridgeGlobal.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-foreground px-8 py-4 text-base font-medium text-background transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
