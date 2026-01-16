import Link from 'next/link';

const posts: Record<string, { title: string; date: string; read: string; category: string; content: string }> = {
  'strands-agents': {
    title: 'Autonomous AI Agents in Industry: The Strands Agents Architecture and Its Impact on Smart Manufacturing',
    date: 'Nov 10, 2025',
    read: '10 min',
    category: 'Research',
    content: `Artificial intelligence has reached a stage where it no longer merely responds to queries—it now acts, plans, and decides. The concept of an AI agent represents this transformation from passive systems into autonomous, reasoning entities capable of independent decision-making.

Traditional large language models (LLMs) were designed to generate text in response to prompts. In contrast, agent-based systems use models as cognitive engines that can perform planning, tool selection, data integration, and sequential reasoning.

One of the most advanced open-source frameworks enabling this new paradigm is Strands Agents, an SDK developed under Amazon's open-source initiative.

## The Model-Centric Architecture

At the heart of Strands Agents lies a simple but powerful triad: Model, Tool Set, and Memory. These three layers represent the agent's cognitive, action, and contextual capacities respectively.

## Multi-Agent Orchestration

Industrial processes require multiple interdependent subsystems operating simultaneously. Strands Agents employ a multi-agent orchestration layer that allows multiple agents to cooperate dynamically through Graph, Workflow, and Swarm modules.

## Industrial Applications

Strands Agents introduces a unifying layer of agentic intelligence, allowing autonomous decision-making, cross-system coordination, and human-guided control across the entire industrial stack.`
  },
  'toyota-walk-me': {
    title: 'New Frontiers in Robotic Mobility: The Toyota\'s "Walk Me" Four-Legged Chair Concept',
    date: 'Nov 9, 2025',
    read: '5 min',
    category: 'Analysis',
    content: `Despite significant advances in modern mobility technologies, people with limited physical capabilities still face substantial barriers to independent movement. Conventional wheelchairs perform efficiently on flat surfaces but fail to cope with everyday obstacles such as stairs, thresholds, and uneven terrain.

Toyota has introduced a radical solution by redefining human mobility through legged robotic technology with its "Walk Me" concept.

## Technical Architecture

Walk Me's technical design merges biomimetic engineering with AI-driven control systems. The device's four legs are powered by high-torque servo motors, each equipped with multiple joints capable of adapting to various terrain conditions.

## Key Features

- Multi-terrain adaptability
- Biomimetic motion (crab-inspired gait)
- Voice interaction support
- Foldable design for transport
- One full day of battery operation`
  },
  'optical-computing': {
    title: 'Computing with Light: Optical Feature Extraction Engine Surpasses Electronics',
    date: 'Oct 28, 2025',
    read: '4 min',
    category: 'Technology',
    content: `The success of deep learning systems heavily relies on their ability to extract meaningful "features" from raw data. However, especially in real-time applications, latency and energy consumption of this step present critical limitations.

This study proposes a purely optical feature extraction engine where information processing occurs at the speed of light.

## Performance Metrics

- Core latency: ~250 picoseconds
- Throughput: 250 GOPS
- Energy efficiency: 2.06 TOPS/W

## The Paradigm Shift

Instead of converting data to electricity and computing, process it directly with light. This is not just a performance improvement—it's a paradigm shift.`
  },
  'silicon-qubits': {
    title: 'Quantum at the Scale of Industry: Silicon Spin Qubits Surpassing 99% Fidelity',
    date: 'Oct 18, 2025',
    read: '4 min',
    category: 'Research',
    content: `The future of quantum technologies is no longer defined by laboratory precision alone—but by the engineering stability of industrial production.

A study published in Nature in 2025 demonstrates that silicon-based spin qubits, fabricated on a 300-millimeter CMOS process line, can operate with an error rate below one percent.

## Experimental Results

- Single-qubit gates: 99.4% to 99.9%
- Two-qubit (CZ) gates: 99.0% to 99.6%
- SPAM fidelity: 99.9%

## Conclusion

This study marks a defining moment: quantum information processing can be manufactured, not merely demonstrated. Quantum computation has crossed its most critical threshold—it has become a manufacturable reality.`
  }
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug] || posts['strands-agents'];

  return (
    <div className="bg-black min-h-screen">
      <div className="pt-32 pb-8">
        <div className="max-w-3xl mx-auto px-6">
          <Link href="/blog" className="text-gray-500 hover:text-white text-sm mb-6 inline-flex items-center gap-2 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Blog
          </Link>
          
          <div className="flex items-center gap-2 mb-4 mt-6">
            <span className="text-violet-400 text-sm font-medium">{post.category}</span>
            <span className="text-gray-600">·</span>
            <span className="text-gray-500 text-sm">{post.date}</span>
            <span className="text-gray-600">·</span>
            <span className="text-gray-500 text-sm">{post.read} read</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">{post.title}</h1>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold">H</div>
            <div>
              <div className="text-white text-sm font-medium">Hashtag World</div>
              <div className="text-gray-500 text-xs">Research Team</div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-8">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-invert prose-violet max-w-none">
            {post.content.split('\n\n').map((paragraph, i) => {
              if (paragraph.startsWith('## ')) {
                return <h2 key={i} className="text-2xl font-bold text-white mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <ul key={i} className="list-disc list-inside text-gray-400 space-y-2 my-4">
                    {paragraph.split('\n').map((item, j) => (
                      <li key={j}>{item.replace('- ', '')}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={i} className="text-gray-400 leading-relaxed mb-4">{paragraph}</p>;
            })}
          </div>

          <div className="mt-12 p-6 bg-violet-500/10 border border-violet-500/20 rounded-xl">
            <p className="text-violet-300 text-sm">
              📅 Original Publication Date: <strong>{post.date}</strong>
            </p>
            <p className="text-gray-500 text-xs mt-1">This date is preserved from the original publication.</p>
          </div>

          {/* Share & Related */}
          <div className="mt-12 pt-8 border-t border-white/5">
            <h3 className="text-white font-semibold mb-4">Share this article</h3>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-white/5 text-gray-400 rounded-lg text-sm hover:bg-white/10 hover:text-white transition-all">
                Twitter
              </button>
              <button className="px-4 py-2 bg-white/5 text-gray-400 rounded-lg text-sm hover:bg-white/10 hover:text-white transition-all">
                LinkedIn
              </button>
              <button className="px-4 py-2 bg-white/5 text-gray-400 rounded-lg text-sm hover:bg-white/10 hover:text-white transition-all">
                Copy Link
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function generateStaticParams() {
  return [
    { slug: 'strands-agents' },
    { slug: 'toyota-walk-me' },
    { slug: 'optical-computing' },
    { slug: 'silicon-qubits' },
  ];
}