'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
};

export default function HomePage() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
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
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,80,200,0.15),transparent_50%)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />

        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-violet-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
              <motion.div
                className="h-px w-12 bg-gradient-to-r from-violet-500 to-transparent"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <span className="text-violet-400 text-sm font-medium tracking-widest uppercase">Pioneering AI Innovation</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight"
            >
              Shaping the<br />
              <motion.span
                className="bg-gradient-to-r from-violet-400 via-purple-400 to-violet-400 bg-clip-text text-transparent inline-block"
                initial={{ backgroundPosition: '0% 50%' }}
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Future of Intelligence
              </motion.span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl"
            >
              We architect autonomous AI systems that transform how industries operate. From concept to deployment, we build the infrastructure for tomorrow&apos;s intelligent enterprises.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex items-center gap-6">
              <Link href="/projects" className="group px-6 py-3 bg-white text-black rounded-full font-semibold text-sm hover:bg-gray-100 hover:scale-105 transition-all flex items-center gap-2 shadow-lg shadow-white/10">
                Explore Our Work
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ x: 5 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Learn More</Link>
            </motion.div>
          </motion.div>

          {/* Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-violet-600/30 to-purple-600/30 rounded-2xl blur-2xl"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden">
                <div className="flex items-center gap-1 px-4 py-3 bg-white/5 border-b border-white/5">
                  {codeExamples.map((ex, i) => (
                    <motion.button
                      key={ex.name}
                      onClick={() => setActiveTab(i)}
                      className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${activeTab === i ? 'bg-violet-500/20 text-violet-300' : 'text-gray-500 hover:text-gray-300'}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {ex.label}
                    </motion.button>
                  ))}
                  <div className="flex-1" />
                  <div className="flex gap-1.5">
                    <motion.div
                      className="w-2.5 h-2.5 rounded-full bg-red-500/60"
                      whileHover={{ scale: 1.2, backgroundColor: 'rgba(239, 68, 68, 1)' }}
                    />
                    <motion.div
                      className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"
                      whileHover={{ scale: 1.2, backgroundColor: 'rgba(234, 179, 8, 1)' }}
                    />
                    <motion.div
                      className="w-2.5 h-2.5 rounded-full bg-green-500/60"
                      whileHover={{ scale: 1.2, backgroundColor: 'rgba(34, 197, 94, 1)' }}
                    />
                  </div>
                </div>
                <div className="p-5 min-h-[200px]">
                  <AnimatePresence mode="wait">
                    <motion.pre
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="text-sm font-mono leading-relaxed"
                    >
                      {codeExamples[activeTab].code.split('\n').map((line, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className={`${line.startsWith('$') ? 'text-emerald-400' : line.startsWith('✓') || line.startsWith('⚡') ? 'text-violet-400' : 'text-gray-400'}`}
                        >
                          {line}
                        </motion.div>
                      ))}
                    </motion.pre>
                  </AnimatePresence>
                </div>
                <div className="px-4 py-2 bg-white/5 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <motion.div
                      className="w-2 h-2 rounded-full bg-emerald-500"
                      animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span className="text-xs text-gray-500">Ready</span>
                  </div>
                  <span className="text-xs text-gray-600">Hashtag AI Network</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="relative py-24 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="h-px w-12 bg-gradient-to-r from-violet-500 to-transparent"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                />
                <span className="text-violet-400 text-sm font-medium tracking-widest uppercase">Who We Are</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Building Intelligence<br /><span className="text-gray-500">Since 2023</span></h2>
              <p className="text-gray-400 leading-relaxed mb-6">Hashtag World Company stands at the intersection of artificial intelligence and industrial innovation. We architect the cognitive infrastructure that powers tomorrow&apos;s enterprises.</p>
              <Link href="/about" className="text-violet-400 font-medium hover:text-violet-300 transition-colors flex items-center gap-2 group">
                About Us
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ x: 5 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </Link>
            </motion.div>
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {[{ v: '2023', l: 'Founded' }, { v: '∞', l: 'Vision' }, { v: 'AI', l: 'Core Focus' }, { v: '24/7', l: 'Operations' }].map((s, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, borderColor: 'rgba(139, 92, 246, 0.3)' }}
                  className="p-6 bg-white/[0.02] border border-white/5 rounded-xl transition-colors"
                >
                  <motion.div
                    className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-1"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
                  >
                    {s.v}
                  </motion.div>
                  <div className="text-gray-500 text-sm">{s.l}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="relative py-24 bg-gray-950 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,80,200,0.08),transparent_70%)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            className="flex flex-col md:flex-row md:items-end justify-between mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="h-px w-12 bg-gradient-to-r from-violet-500 to-transparent"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                />
                <span className="text-violet-400 text-sm font-medium tracking-widest uppercase">Capabilities</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Expertise Across Industries</h2>
            </div>
            <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm font-medium mt-4 md:mt-0 flex items-center gap-2 group">
              All Services
              <motion.svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" whileHover={{ x: 5 }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </Link>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {services.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -8, borderColor: 'rgba(139, 92, 246, 0.3)' }}
                className="group p-6 bg-white/[0.02] border border-white/5 rounded-xl transition-all cursor-pointer"
              >
                <motion.div
                  className="text-2xl text-violet-400 mb-4"
                  initial={{ scale: 0.8, opacity: 0.6 }}
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  whileInView={{ scale: 1, opacity: 0.6 }}
                  viewport={{ once: true }}
                >
                  {s.icon}
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="relative py-24 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="flex flex-col md:flex-row md:items-end justify-between mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="h-px w-12 bg-gradient-to-r from-violet-500 to-transparent"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                />
                <span className="text-violet-400 text-sm font-medium tracking-widest uppercase">Insights</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Latest Thinking</h2>
            </div>
            <Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm font-medium mt-4 md:mt-0 flex items-center gap-2 group">
              All Posts
              <motion.svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" whileHover={{ x: 5 }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </Link>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {posts.map((p, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Link href={`/blog/${p.slug}`} className="group cursor-pointer block">
                  <motion.div
                    className="aspect-video bg-gradient-to-br from-violet-900/20 to-purple-900/20 rounded-xl mb-4 border border-white/5 flex items-center justify-center overflow-hidden"
                    whileHover={{ scale: 1.02, borderColor: 'rgba(139, 92, 246, 0.3)' }}
                  >
                    <motion.div
                      className="text-4xl text-violet-400"
                      initial={{ opacity: 0.1 }}
                      whileHover={{ opacity: 0.3, scale: 1.2, rotate: 180 }}
                      transition={{ duration: 0.5 }}
                    >
                      ◈
                    </motion.div>
                  </motion.div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-violet-400 text-xs font-medium">{p.category}</span>
                    <span className="text-gray-600 text-xs">·</span>
                    <span className="text-gray-600 text-xs">{p.date}</span>
                  </div>
                  <h3 className="text-white font-medium group-hover:text-violet-300 transition-colors">{p.title}</h3>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-gray-950 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(120,80,200,0.1),transparent_60%)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="relative max-w-3xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let&apos;s Build the Future
          </motion.h2>
          <motion.p
            className="text-gray-400 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Whether you&apos;re exploring AI possibilities or ready to transform your enterprise, we&apos;re here to guide your journey.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all shadow-lg shadow-white/10 group">
              Start a Conversation
              <motion.svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: 5 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}