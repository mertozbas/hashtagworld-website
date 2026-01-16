'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => setActiveTab(prev => (prev + 1) % 2), 5000);
    return () => clearInterval(interval);
  }, []);

  const codeExamples = [
    { name: 'alfred', label: 'Alfred CLI', code: `$ alfred init my-project\n✓ Project initialized\n\n$ alfred agent create analyst\n✓ Agent "analyst" created\n\n$ alfred run --watch\n⚡ Watching for changes...` },
    { name: 'strands', label: 'Strands SDK', code: `from strands import Agent\n\nagent = Agent(model="gpt-4")\nresponse = agent.run(\n    "Analyze quarterly metrics"\n)\nprint(response.insights)` }
  ];

  const services = [
    { icon: '◈', title: 'Economy & Finance', desc: 'AI-driven financial intelligence for strategic decision making.' },
    { icon: '⬡', title: 'Process Automation', desc: 'Intelligent workflow orchestration at enterprise scale.' },
    { icon: '◎', title: 'Robotics & Systems', desc: 'Autonomous systems bridging digital and physical worlds.' },
  ];

  const posts = [
    { date: 'Nov 10, 2025', title: 'Autonomous AI Agents in Industry', category: 'Research', slug: 'strands-agents' },
    { date: 'Nov 9, 2025', title: "Toyota's Walk Me: Robotic Mobility", category: 'Analysis', slug: 'toyota-walk-me' },
    { date: 'Oct 28, 2025', title: 'Computing with Light', category: 'Technology', slug: 'optical-computing' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,80,200,0.15),transparent_50%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-violet-500 to-transparent" />
              <span className="text-violet-400 text-sm font-medium tracking-widest uppercase">Pioneering AI Innovation</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
              Shaping the<br />
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">Future of Intelligence</span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
              We architect autonomous AI systems that transform how industries operate. From concept to deployment, we build the infrastructure for tomorrow&apos;s intelligent enterprises.
            </p>

            <div className="flex items-center gap-6">
              <Link href="/projects" className="group px-6 py-3 bg-white text-black rounded-full font-semibold text-sm hover:bg-gray-100 transition-all flex items-center gap-2">
                Explore Our Work
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Learn More</Link>
            </div>
          </div>

          {/* Terminal */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/30 to-purple-600/30 rounded-2xl blur-2xl" />
              <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden">
                <div className="flex items-center gap-1 px-4 py-3 bg-white/5 border-b border-white/5">
                  {codeExamples.map((ex, i) => (
                    <button key={ex.name} onClick={() => setActiveTab(i)} className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${activeTab === i ? 'bg-violet-500/20 text-violet-300' : 'text-gray-500 hover:text-gray-300'}`}>{ex.label}</button>
                  ))}
                  <div className="flex-1" />
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  </div>
                </div>
                <div className="p-5 min-h-[200px]">
                  <pre className="text-sm font-mono leading-relaxed">
                    {codeExamples[activeTab].code.split('\n').map((line, i) => (
                      <div key={i} className={`${line.startsWith('$') ? 'text-emerald-400' : line.startsWith('✓') || line.startsWith('⚡') ? 'text-violet-400' : 'text-gray-400'}`}>{line}</div>
                    ))}
                  </pre>
                </div>
                <div className="px-4 py-2 bg-white/5 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs text-gray-500">Ready</span>
                  </div>
                  <span className="text-xs text-gray-600">Hashtag AI Network</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="relative py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-violet-500 to-transparent" />
                <span className="text-violet-400 text-sm font-medium tracking-widest uppercase">Who We Are</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Building Intelligence<br /><span className="text-gray-500">Since 2023</span></h2>
              <p className="text-gray-400 leading-relaxed mb-6">Hashtag World Company stands at the intersection of artificial intelligence and industrial innovation. We architect the cognitive infrastructure that powers tomorrow&apos;s enterprises.</p>
              <Link href="/about" className="text-violet-400 font-medium hover:text-violet-300 transition-colors flex items-center gap-2">
                About Us <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{ v: '2023', l: 'Founded' }, { v: '∞', l: 'Vision' }, { v: 'AI', l: 'Core Focus' }, { v: '24/7', l: 'Operations' }].map((s, i) => (
                <div key={i} className="p-6 bg-white/[0.02] border border-white/5 rounded-xl">
                  <div className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-1">{s.v}</div>
                  <div className="text-gray-500 text-sm">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="relative py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-violet-500 to-transparent" />
                <span className="text-violet-400 text-sm font-medium tracking-widest uppercase">Capabilities</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Expertise Across Industries</h2>
            </div>
            <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm font-medium mt-4 md:mt-0 flex items-center gap-2">
              All Services <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="group p-6 bg-white/[0.02] border border-white/5 rounded-xl hover:border-violet-500/20 transition-all">
                <div className="text-2xl text-violet-400 mb-4 opacity-60 group-hover:opacity-100 transition-opacity">{s.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="relative py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-violet-500 to-transparent" />
                <span className="text-violet-400 text-sm font-medium tracking-widest uppercase">Insights</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Latest Thinking</h2>
            </div>
            <Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm font-medium mt-4 md:mt-0 flex items-center gap-2">
              All Posts <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((p, i) => (
              <Link href={`/blog/${p.slug}`} key={i} className="group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-violet-900/20 to-purple-900/20 rounded-xl mb-4 border border-white/5 group-hover:border-violet-500/30 transition-all flex items-center justify-center">
                  <div className="text-4xl opacity-10 group-hover:opacity-20 transition-opacity">◈</div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-violet-400 text-xs font-medium">{p.category}</span>
                  <span className="text-gray-600 text-xs">·</span>
                  <span className="text-gray-600 text-xs">{p.date}</span>
                </div>
                <h3 className="text-white font-medium group-hover:text-violet-300 transition-colors">{p.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(120,80,200,0.1),transparent_60%)]" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Let&apos;s Build the Future</h2>
          <p className="text-gray-400 mb-10">Whether you&apos;re exploring AI possibilities or ready to transform your enterprise, we&apos;re here to guide your journey.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all">
            Start a Conversation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}