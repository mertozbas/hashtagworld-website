import Link from 'next/link';

export default function AlfredCliPage() {
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
            <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl">⌘</div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Alfred CLI</h1>
              <p className="text-gray-400">Command Line Intelligence for AI Agent Orchestration</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Terminal Demo */}
          <div className="p-6 bg-gray-900 rounded-xl mb-12 border border-white/5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <pre className="text-sm font-mono text-gray-300 overflow-x-auto">
{`$ alfred init my-project
✓ Project initialized

$ alfred agent create analyst
✓ Agent "analyst" created with default configuration

$ alfred run --watch
⚡ Watching for changes...
⚡ Agent "analyst" is now active

$ alfred deploy --env production
✓ Deployed to production successfully`}
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            Alfred CLI is a powerful command-line interface designed to simplify the creation, management, and deployment of AI agents. Built for developers who prefer terminal-based workflows, Alfred provides an intuitive yet powerful set of commands for orchestrating intelligent systems.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {[
              'Project Scaffolding',
              'Agent Management',
              'Live Reload',
              'Multi-Environment Support',
              'Plugin System',
              'CI/CD Integration',
              'Built-in Testing',
              'Monitoring Dashboard'
            ].map((f, i) => (
              <div key={i} className="p-4 bg-white/[0.02] border border-white/5 rounded-xl flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-violet-500" />
                <span className="text-white">{f}</span>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Installation</h2>
          <div className="p-4 bg-gray-900 rounded-xl mb-8 border border-white/5">
            <code className="text-violet-400 font-mono">npm install -g @hashtagworld/alfred-cli</code>
          </div>

          <div className="p-6 bg-violet-500/10 border border-violet-500/20 rounded-xl">
            <h3 className="text-white font-semibold mb-2">🚀 Coming Soon</h3>
            <p className="text-gray-400 text-sm">Alfred CLI is currently in active development. Stay tuned for the public release.</p>
          </div>
        </div>
      </section>
    </div>
  );
}