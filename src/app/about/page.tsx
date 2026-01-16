export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Header */}
      <div className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-violet-500 to-transparent" />
            <span className="text-violet-400 text-sm font-medium tracking-widest uppercase">About Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Building Intelligence Since 2023</h1>
          <p className="text-gray-400 text-lg max-w-2xl">We architect the cognitive infrastructure that powers tomorrow&apos;s intelligent enterprises.</p>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Our Journey</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Hashtag World Company is a forward-thinking technology firm dedicated to harnessing the power of artificial intelligence to drive lasting value for businesses worldwide.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                Founded in 2023 by AI enthusiast and entrepreneur Mert Özbaş, our company was born out of a profound belief that cutting-edge technology can transform industries, catalyze sustainable growth, and solve some of the most complex challenges faced by organizations today.
              </p>
              <p className="text-gray-400 leading-relaxed">
                In the early days, our team recognized an emerging gap in the market: while many organizations wanted to adopt AI to enhance efficiency, they often lacked the expertise or the right tools to do so effectively.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Our mission is to empower businesses—regardless of their size or sector—to fully leverage the benefits of AI.
              </p>
              <div className="space-y-4">
                {[
                  { t: 'Innovation', d: 'Consistently pushing the boundaries of AI research and development.' },
                  { t: 'Sustainability', d: 'Helping clients optimize resources and adopt eco-friendly processes.' },
                  { t: 'Collaboration', d: 'Building strong, transparent partnerships with our clients.' },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                    <h3 className="text-white font-semibold mb-1">{item.t}</h3>
                    <p className="text-gray-500 text-sm">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-8">What Makes Us Different</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: 'Scalable Solutions', d: 'Tailored approaches for startups to global enterprises.' },
              { t: 'Human-Centered AI', d: 'Solutions crafted to enrich human work and decision-making.' },
              { t: 'Ethical Practices', d: 'Stringent security measures and ethical AI practices.' },
              { t: 'End-to-End Expertise', d: 'From ideation to full-scale implementation.' },
              { t: 'Collaborative Partnerships', d: 'Working closely with clients and industry peers.' },
              { t: 'Cross-Industry Success', d: 'Portfolio spanning healthcare, finance, logistics, and beyond.' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white/[0.02] border border-white/5 rounded-xl">
                <h3 className="text-white font-semibold mb-2">{item.t}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-8">Leadership</h2>
          <div className="flex items-center gap-6 p-6 bg-white/[0.02] border border-white/5 rounded-xl max-w-md">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">M</div>
            <div>
              <h3 className="text-white font-semibold text-lg">Mert Özbaş</h3>
              <p className="text-gray-500">Founder & CEO</p>
              <p className="text-gray-600 text-sm mt-1">AI visionary with hands-on experience since 2021</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-6">Our Vision</h2>
          <p className="text-gray-400 leading-relaxed max-w-4xl">
            We envision a future where AI becomes a trusted partner in every dimension of modern life—acting not as a replacement for human creativity, but as a catalyst that sparks greater efficiency, sustainability, and inclusivity. Our approach centers on melding the most advanced AI architectures with intuitive design philosophies, ensuring that technology remains accessible and beneficial for all.
          </p>
        </div>
      </section>
    </div>
  );
}