export default function LegalPage() {
  const sections = [
    {
      title: 'Terms of Service',
      content: `By accessing and using Hashtag World Company services, you agree to comply with these terms. We reserve the right to modify these terms at any time. Your continued use of our services following any changes constitutes acceptance of those changes.

Our services are provided "as is" without warranties of any kind. We are not liable for any damages arising from the use of our services. You agree not to use our services for any unlawful purpose or in violation of these terms.`
    },
    {
      title: 'Privacy Policy',
      content: `We respect your privacy and are committed to protecting your personal data. This policy describes how we collect, use, and share information about you when you use our services.

Information We Collect:
• Information you provide directly (name, email, etc.)
• Usage information and analytics
• Device and browser information

We never sell your personal data to third parties. We use your information only to provide and improve our services, communicate with you, and comply with legal obligations.`
    },
    {
      title: 'Cookie Policy',
      content: `We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. 

Types of cookies we use:
• Essential cookies: Required for site functionality
• Analytics cookies: Help us understand how visitors interact with our site
• Preference cookies: Remember your settings and preferences

You can manage your cookie preferences through your browser settings. Note that disabling certain cookies may affect site functionality.`
    },
    {
      title: 'Security & Compliance',
      content: `We implement industry-standard security measures to protect your data, including:

• Encryption of data in transit and at rest
• Regular security audits and assessments
• Access controls and authentication measures
• Incident response procedures

Our systems are regularly audited for compliance with international standards. We are committed to maintaining the highest levels of data security and privacy protection.`
    },
    {
      title: 'Intellectual Property',
      content: `All content on this website, including text, graphics, logos, and software, is the property of Hashtag World Company and is protected by intellectual property laws.

You may not reproduce, distribute, or create derivative works from our content without explicit written permission. Our trademarks and brand elements may not be used without authorization.`
    },
    {
      title: 'Contact for Legal Inquiries',
      content: `For any legal questions or concerns, please contact us at:

Email: legal@hashtagworldcompany.com
General: info@hashtagworldcompany.com

We aim to respond to all inquiries within 5 business days.`
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Header */}
      <div className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-violet-500 to-transparent" />
            <span className="text-violet-400 text-sm font-medium tracking-widest uppercase">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Terms & Policies</h1>
          <p className="text-gray-400 text-lg max-w-2xl">Our commitment to transparency and your privacy.</p>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-8">
          {sections.map((section, i) => (
            <div key={i} className="p-6 bg-white/[0.02] border border-white/5 rounded-xl">
              <h2 className="text-xl font-semibold text-white mb-4">{section.title}</h2>
              <div className="text-gray-400 leading-relaxed whitespace-pre-line text-sm">
                {section.content}
              </div>
            </div>
          ))}

          <div className="pt-8 border-t border-white/5">
            <p className="text-gray-500 text-sm">
              Last updated: January 2025
            </p>
            <p className="text-gray-600 text-xs mt-2">
              © 2023 Hashtag World Company. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}