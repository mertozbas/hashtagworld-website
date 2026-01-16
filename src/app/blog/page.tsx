import Link from 'next/link';

export default function BlogPage() {
  const posts = [
    {
      slug: 'strands-agents',
      date: 'Nov 10, 2025',
      title: 'Autonomous AI Agents in Industry: The Strands Agents Architecture and Its Impact on Smart Manufacturing',
      category: 'Research',
      read: '10 min',
      description: 'Strands Agents redefine industrial automation through autonomous, model-driven AI systems that think, decide, and act intelligently.'
    },
    {
      slug: 'toyota-walk-me',
      date: 'Nov 9, 2025',
      title: 'New Frontiers in Robotic Mobility: The Toyota\'s "Walk Me" Four-Legged Chair Concept',
      category: 'Analysis',
      read: '5 min',
      description: 'Toyota\'s Walk Me walking wheelchair redefines mobility with AI-powered legs and independence-focused design.'
    },
    {
      slug: 'optical-computing',
      date: 'Oct 28, 2025',
      title: 'Computing with Light: Optical Feature Extraction Engine Surpasses Electronics',
      category: 'Technology',
      read: '4 min',
      description: 'A new optical engine processes features at light speed, literally redefining AI hardware efficiency.'
    },
    {
      slug: 'silicon-qubits',
      date: 'Oct 18, 2025',
      title: 'Quantum at the Scale of Industry: Silicon Spin Qubits Surpassing 99% Fidelity',
      category: 'Research',
      read: '4 min',
      description: 'Silicon spin qubits manufactured on 300mm CMOS lines achieve fault-tolerant fidelity.'
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Header */}
      <div className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-violet-500 to-transparent" />
            <span className="text-violet-400 text-sm font-medium tracking-widest uppercase">Blog</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Insights & Research</h1>
          <p className="text-gray-400 text-lg max-w-2xl">Exploring the frontiers of AI, robotics, and emerging technologies.</p>
        </div>
      </div>

      {/* Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((p, i) => (
              <Link href={`/blog/${p.slug}`} key={i} className="group p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-violet-500/30 transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-violet-400 text-xs font-medium">{p.category}</span>
                  <span className="text-gray-600 text-xs">·</span>
                  <span className="text-gray-600 text-xs">{p.date}</span>
                  <span className="text-gray-600 text-xs">·</span>
                  <span className="text-gray-600 text-xs">{p.read}</span>
                </div>
                <h2 className="text-lg font-semibold text-white group-hover:text-violet-300 transition-colors leading-snug mb-3">{p.title}</h2>
                <p className="text-gray-500 text-sm leading-relaxed">{p.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-gray-400 mb-6">Subscribe to our newsletter for the latest insights and research.</p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 bg-black border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-violet-500 focus:outline-none"
            />
            <button className="px-6 py-3 bg-violet-600 text-white rounded-xl font-semibold hover:bg-violet-500 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}