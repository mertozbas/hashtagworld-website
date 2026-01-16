'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Header */}
      <div className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-violet-500 to-transparent" />
            <span className="text-violet-400 text-sm font-medium tracking-widest uppercase">Contact</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Get in Touch</h1>
          <p className="text-gray-400 text-lg max-w-2xl">Have questions or interested in collaborating? Reach out to our team.</p>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">We&apos;re Here to Help</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Have questions about our solutions, looking for personalized guidance, or interested in collaborating with Hashtag World Company? We look forward to connecting with you.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <a href="mailto:info@hashtagworldcompany.com" className="text-violet-400 hover:text-violet-300 transition-colors">
                    info@hashtagworldcompany.com
                  </a>
                </div>
                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                  <h3 className="text-white font-semibold mb-1">LinkedIn</h3>
                  <a href="https://linkedin.com/company/hashtag-world-company" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 transition-colors">
                    Hashtag World Company
                  </a>
                </div>
                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                  <h3 className="text-white font-semibold mb-1">Location</h3>
                  <p className="text-gray-400">İzmir, Turkey</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">Thank you for reaching out. We&apos;ll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">First Name</label>
                      <input
                        type="text"
                        value={form.firstName}
                        onChange={e => setForm({ ...form, firstName: e.target.value })}
                        className="w-full px-4 py-3 bg-black border border-white/10 rounded-xl text-white placeholder-gray-600 focus:border-violet-500 focus:outline-none transition-colors"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Last Name</label>
                      <input
                        type="text"
                        value={form.lastName}
                        onChange={e => setForm({ ...form, lastName: e.target.value })}
                        className="w-full px-4 py-3 bg-black border border-white/10 rounded-xl text-white placeholder-gray-600 focus:border-violet-500 focus:outline-none transition-colors"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 bg-black border border-white/10 rounded-xl text-white placeholder-gray-600 focus:border-violet-500 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Message</label>
                    <textarea
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 bg-black border border-white/10 rounded-xl text-white placeholder-gray-600 focus:border-violet-500 focus:outline-none transition-colors resize-none"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}