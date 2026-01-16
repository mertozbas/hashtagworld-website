export default function ServicesPage() {
  const services = [
    {
      icon: '◈',
      title: 'Economy & Finance Management',
      desc: 'Strategic Financial Solutions for Sustainable Growth. We offer AI-driven solutions to help organizations optimize their financial processes, reduce costs, and identify new investment opportunities.',
      features: ['Smart Budgeting & Forecasting', 'Automated Risk Assessment', 'Customized Investment Insights']
    },
    {
      icon: '⬡',
      title: 'Business Process Optimization & Automation',
      desc: 'Elevating Efficiency Through Intelligent Workflows. Our process optimization and automation services use AI and machine learning to streamline routine tasks.',
      features: ['Robotic Process Automation (RPA)', 'Workflow Reengineering', 'Scalable Integration']
    },
    {
      icon: '◎',
      title: 'Robotics & Automation Technologies',
      desc: 'Reimagining Production and Operational Excellence. Harness the latest advancements in robotics to achieve new levels of efficiency and accuracy.',
      features: ['Industrial Robotics', 'Autonomous Vehicles & Drones', 'Smart Agriculture Solutions']
    },
    {
      icon: '◇',
      title: 'Defense & Security',
      desc: 'Protecting Assets with Advanced AI and Surveillance. We provide robust security solutions tailored to safeguard organizations from an ever-evolving threat landscape.',
      features: ['Intelligent Surveillance Systems', 'Cybersecurity & Threat Analysis', 'Security Training & Awareness']
    },
    {
      icon: '△',
      title: 'Environment & Energy Management',
      desc: 'Sustainable optimization through predictive analytics and smart resource allocation for a greener future.',
      features: ['Energy Optimization', 'Resource Management', 'Sustainability Analytics']
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
            <span className="text-violet-400 text-sm font-medium tracking-widest uppercase">Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Expertise Across Industries</h1>
          <p className="text-gray-400 text-lg max-w-2xl">We deliver transformative AI solutions across sectors that demand precision, scalability, and innovation.</p>
        </div>
      </div>

      {/* Services List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          {services.map((s, i) => (
            <div key={i} className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-violet-500/20 transition-all">
              <div className="flex items-start gap-6">
                <div className="text-3xl text-violet-400 opacity-60">{s.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-3">{s.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.features.map((f, j) => (
                      <span key={j} className="px-3 py-1 bg-violet-500/10 text-violet-300 text-xs rounded-full">{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-8">Why Partner with Hashtag World Company?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: 'Expertise Across Sectors', d: 'From finance to manufacturing and beyond, our diverse portfolio demonstrates success in a wide range of environments.' },
              { t: 'Ethical AI Practices', d: 'We uphold rigorous standards for data privacy, bias mitigation, and transparency throughout all our AI solutions.' },
              { t: 'Client-Centric Approach', d: 'We collaborate closely with each client, tailoring our services to fit their specific challenges.' },
              { t: 'Scalability & Adaptability', d: 'Whether your goal is to automate a single process or undertake an enterprise-wide digital transformation.' },
              { t: 'End-to-End Support', d: 'From conceptualizing the right solutions to executing them at scale, we deliver real-world value.' },
              { t: 'Continuous Innovation', d: 'We actively invest in research and development, partnering with academic institutions and thought leaders.' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white/[0.02] border border-white/5 rounded-xl">
                <h3 className="text-white font-semibold mb-2">{item.t}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}