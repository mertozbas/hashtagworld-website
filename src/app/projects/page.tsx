import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Header */}
      <div className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-violet-500 to-transparent" />
            <span className="text-violet-400 text-sm font-medium tracking-widest uppercase">Projects</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Flagship Projects</h1>
          <p className="text-gray-400 text-lg max-w-2xl">Explore our innovative AI solutions and platforms.</p>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {/* Alfred CLI */}
          <Link href="/projects/alfred-cli" className="group cursor-pointer p-8 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-violet-500/30 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl">⌘</div>
              <div>
                <h3 className="text-2xl font-bold text-white">Alfred CLI</h3>
                <p className="text-gray-500 text-sm">Command Line Intelligence</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              A powerful command-line interface for orchestrating AI agents. Initialize projects, manage workflows, and deploy intelligent systems—all from your terminal.
            </p>
            <div className="flex flex-wrap gap-2">
              {['CLI', 'Automation', 'DevTools', 'Open Source'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/5 text-gray-400 text-xs rounded-full">{tag}</span>
              ))}
            </div>
          </Link>

          {/* Hashtag AI Network */}
          <Link href="/projects/hashtag-ai-network" className="group cursor-pointer p-8 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-violet-500/30 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-2xl">⬢</div>
              <div>
                <h3 className="text-2xl font-bold text-white">Hashtag AI Network</h3>
                <p className="text-gray-500 text-sm">Collaborative AI Ecosystem</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              A collaborative ecosystem where developers, businesses, and AI agents converge to build, deploy, and scale intelligent solutions across industries.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Platform', 'Multi-Agent', 'Enterprise', 'Scalable'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/5 text-gray-400 text-xs rounded-full">{tag}</span>
              ))}
            </div>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Interested in Our Projects?</h2>
          <p className="text-gray-400 mb-8">Get in touch to learn more about how our solutions can transform your business.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all">
            Contact Us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>
    </div>
  );
}