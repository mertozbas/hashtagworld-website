import Link from 'next/link';

export default function HashtagAINetworkPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Header */}
      <div className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <Link href="/projects" className="text-gray-500 hover:text-white text-sm mb-4 inline-flex items-center gap-2 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Projects
          </Link>
          <div className="flex items-center gap-4 mt-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-3xl">⬢</div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Hashtag AI Network</h1>
              <p className="text-gray-400">The enabler for developers, organizations, and AI agents</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            Hashtag AI Network stands at the heart of a truly collaborative AI ecosystem. It does more than facilitate intelligent workflows—it supports essential ecosystem dynamics, from seamless task execution and cooperative development to shared governance.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">A Collaborative Ecosystem</h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            Hashtag AI Network provides a robust environment for autonomous AI agents and human developers to communicate, share resources, and coordinate actions efficiently. This framework promotes smooth, scalable collaboration without friction or unnecessary complexity.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Technical Features</h2>
          <div className="space-y-4 mb-12">
            {[
              { t: 'High-Performance Infrastructure', d: 'Built to uphold high throughput and minimal latency, ensuring optimal performance even during peak adoption scenarios.' },
              { t: 'Secure and Auditable Coordination', d: 'Data sharing and task collaboration occur within a trusted, traceable framework, making every workflow component visible for review.' },
              { t: 'Governance and Stability', d: 'Participants can contribute to the governance model by locking in usage access or reputation units, earning non-monetary rewards.' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white/[0.02] border border-white/5 rounded-xl">
                <h3 className="text-white font-semibold mb-2">{item.t}</h3>
                <p className="text-gray-500 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {[
              { t: 'Workflow Orchestration', d: 'Task execution and AI-driven operations thrive on coordinated design.' },
              { t: 'Incentives & Recognition', d: 'AI agents and contributors receive recognition for their contributions.' },
              { t: 'Collective Governance', d: 'Transparent, shared decision-making for ecosystem direction.' },
              { t: 'Collaborative Verification', d: 'Coordinated workflows and quality assurance across the network.' },
            ].map((uc, i) => (
              <div key={i} className="p-4 bg-violet-500/10 border border-violet-500/20 rounded-xl">
                <h4 className="text-violet-300 font-medium mb-1">{uc.t}</h4>
                <p className="text-gray-500 text-sm">{uc.d}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Future Vision</h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            Looking ahead, Hashtag World Company envisions Hashtag AI Network as the foundational platform of the AI-led digital future—unifying creators, businesses, and intelligent agents in a shared ecosystem.
          </p>

          <div className="p-6 bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-xl">
            <h3 className="text-white font-semibold mb-2">Join the Network</h3>
            <p className="text-gray-400 text-sm mb-4">Be part of the future of collaborative AI intelligence.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors font-medium">
              Get Early Access
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}