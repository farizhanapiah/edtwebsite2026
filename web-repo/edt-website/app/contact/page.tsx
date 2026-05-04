import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact EDT | Get a Quote for AR VR & Immersive Experiences Malaysia',
  description:
    'Ready to build something unforgettable? Contact EDT to request a demo, get a quote, or discuss your next immersive project in Malaysia or Southeast Asia.',
  alternates: {
    canonical: '/contact',
    languages: { 'en-MY': '/contact', 'x-default': '/contact' },
  },
}

const contactBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://weareedt.com' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://weareedt.com/contact' },
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://weareedt.com/#localbusiness',
  name: 'Experiential Design Team',
  alternateName: 'EDT',
  legalName: 'Adticles Sdn Bhd',
  description:
    'Malaysia immersive tech studio delivering AR, VR, MR, AI avatar and interactive installation experiences.',
  url: 'https://weareedt.com',
  telephone: '+60364115361',
  email: 'hello@weareedt.com',
  image: 'https://weareedt.com/favicon/web-app-manifest-512x512.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'A-3-13 Centrio Pantai Hillpark, Jalan Pantai Murni',
    addressLocality: 'Kuala Lumpur',
    addressRegion: 'WP Kuala Lumpur',
    postalCode: '59200',
    addressCountry: 'MY',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 3.1390, longitude: 101.6869 },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  areaServed: ['Malaysia', 'Singapore', 'Qatar', 'Hong Kong'],
  sameAs: [
    'https://www.instagram.com/edtmy',
    'https://www.linkedin.com/company/edtmy',
  ],
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactBreadcrumbSchema) }}
      />

      <main className="bg-edt-black text-white">

        {/* HERO */}
        <section className="bg-edt-black pt-20 pb-24 lg:pt-28 lg:pb-32 border-b border-white/10 pixel-grid">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
            <span className="edt-badge mb-6 inline-block">Get in Touch</span>
            <h1 className="display-xl font-display uppercase mb-6 max-w-3xl">
              Let's Build Something Unforgettable.
            </h1>
            <p className="text-xl text-edt-grey max-w-xl leading-relaxed">
              Tell us about your project. We respond within 24 hours.
            </p>
          </div>
        </section>

        {/* FORM + CONTACT INFO */}
        <section className="bg-edt-black py-24 border-b border-white/10">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

              {/* FORM */}
              <div className="lg:col-span-2">
                <form action="https://formspree.io/f/mwvyvznj" method="POST" className="space-y-6">

                  <input type="hidden" name="_subject" value="New project enquiry — EDT" />
                  <input type="hidden" name="_next" value="https://weareedt.com/thank-you?type=contact" />
                  <input
                    type="text"
                    name="_gotcha"
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  {/* Name + Company */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="full-name" className="block text-edt-grey text-sm uppercase tracking-widest mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="full-name"
                        name="full_name"
                        required
                        className="w-full bg-surface border border-white/20 text-white px-5 py-4 text-sm placeholder:text-edt-grey/50 focus:outline-none focus:border-edt-blue"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="company-name" className="block text-edt-grey text-sm uppercase tracking-widest mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company-name"
                        name="company_name"
                        required
                        className="w-full bg-surface border border-white/20 text-white px-5 py-4 text-sm placeholder:text-edt-grey/50 focus:outline-none focus:border-edt-blue"
                        placeholder="Your company or organisation"
                      />
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-email" className="block text-edt-grey text-sm uppercase tracking-widest mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        required
                        className="w-full bg-surface border border-white/20 text-white px-5 py-4 text-sm placeholder:text-edt-grey/50 focus:outline-none focus:border-edt-blue"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-edt-grey text-sm uppercase tracking-widest mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full bg-surface border border-white/20 text-white px-5 py-4 text-sm placeholder:text-edt-grey/50 focus:outline-none focus:border-edt-blue"
                        placeholder="+60 11 1234 5678"
                      />
                    </div>
                  </div>

                  {/* I Need + Budget */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="i-need" className="block text-edt-grey text-sm uppercase tracking-widest mb-2">
                        I Need *
                      </label>
                      <select
                        id="i-need"
                        name="service_needed"
                        required
                        className="w-full bg-surface border border-white/20 text-white px-5 py-4 text-sm focus:outline-none focus:border-edt-blue appearance-none"
                      >
                        <option value="" disabled selected className="text-edt-grey">
                          Select a service
                        </option>
                        <option value="ar-vr-mr-development">AR / VR / MR Development</option>
                        <option value="interactive-installation">Interactive Installation</option>
                        <option value="ai-photobooth">AI Photobooth (MimpiLab)</option>
                        <option value="ai-hologram">AI Hologram (Hoomans.ai)</option>
                        <option value="virtual-production">Virtual Production (ARVENA)</option>
                        <option value="heritage-ar">Heritage AR (CheritAR)</option>
                        <option value="vr-training">VR Training / Education</option>
                        <option value="agency-partnership">Agency Partnership</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-edt-grey text-sm uppercase tracking-widest mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget_range"
                        className="w-full bg-surface border border-white/20 text-white px-5 py-4 text-sm focus:outline-none focus:border-edt-blue appearance-none"
                      >
                        <option value="" disabled selected className="text-edt-grey">
                          Select budget range (optional)
                        </option>
                        <option value="under-20k">Under RM 20,000</option>
                        <option value="20k-50k">RM 20,000 – RM 50,000</option>
                        <option value="50k-100k">RM 50,000 – RM 100,000</option>
                        <option value="100k-250k">RM 100,000 – RM 250,000</option>
                        <option value="250k-500k">RM 250,000 – RM 500,000</option>
                        <option value="above-500k">Above RM 500,000</option>
                        <option value="tbc">To be discussed</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label htmlFor="project-details" className="block text-edt-grey text-sm uppercase tracking-widest mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="project-details"
                      name="project_details"
                      rows={6}
                      className="w-full bg-surface border border-white/20 text-white px-5 py-4 text-sm placeholder:text-edt-grey/50 focus:outline-none focus:border-edt-blue resize-none"
                      placeholder="Tell us about your project — event type, audience size, timeline, venue, any specific ideas or references you have in mind..."
                    />
                  </div>

                  {/* Submit */}
                  <div className="flex items-center gap-6">
                    <button type="submit" className="btn-primary">
                      Let's Talk
                    </button>
                    <p className="text-edt-grey text-sm">
                      We respond within 24 hours on working days.
                    </p>
                  </div>

                </form>
              </div>

              {/* CONTACT DETAILS */}
              <div className="space-y-8">

                {/* Response time */}
                <div className="bg-surface border border-white/10 p-8">
                  <div className="window-bar mb-6">
                    <span className="window-dot"></span>
                    <span className="window-dot"></span>
                    <span className="window-dot"></span>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-4">Response Time</h3>
                  <p className="text-edt-grey text-sm leading-relaxed">
                    EDT responds to all project enquiries within 24 hours on Malaysian
                    working days (Monday–Friday, 9am–6pm MYT).
                  </p>
                </div>

                {/* Direct contact */}
                <div className="border border-white/10 p-8 space-y-6">
                  <h3 className="text-white font-semibold text-lg">Direct Contact</h3>

                  <div>
                    <div className="text-edt-grey text-xs uppercase tracking-widest mb-1">Email</div>
                    <a
                      href="mailto:hello@edtmy.com"
                      className="text-edt-blue hover:underline text-sm"
                    >
                      hello@edtmy.com
                    </a>
                  </div>

                  <div>
                    <div className="text-edt-grey text-xs uppercase tracking-widest mb-1">Phone</div>
                    <a
                      href="tel:+60111234567"
                      className="text-white text-sm hover:text-edt-blue transition-colors"
                    >
                      +60 11 1234 5678
                    </a>
                  </div>

                  <div>
                    <div className="text-edt-grey text-xs uppercase tracking-widest mb-1">WhatsApp</div>
                    <a
                      href="https://wa.me/60111234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-sm hover:text-edt-blue transition-colors"
                    >
                      Chat on WhatsApp →
                    </a>
                  </div>
                </div>

                {/* Office */}
                <div className="border border-white/10 p-8">
                  <h3 className="text-white font-semibold text-lg mb-4">Office</h3>
                  <address className="not-italic text-edt-grey text-sm leading-relaxed space-y-1">
                    <div className="text-white font-semibold">EDT — Experiential Design Team</div>
                    <div>Kuala Lumpur</div>
                    <div>Wilayah Persekutuan</div>
                    <div>Malaysia</div>
                  </address>
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="text-edt-grey text-xs uppercase tracking-widest mb-1">Hours</div>
                    <div className="text-white text-sm">Mon–Fri, 9:00am – 6:00pm MYT</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* WHAT HAPPENS NEXT */}
        <section className="bg-surface py-24 border-b border-white/10">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
            <h2 className="display-md font-display uppercase mb-12">What Happens Next</h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 border border-white/10">
              {[
                {
                  step: '01',
                  title: 'You Submit',
                  desc: 'Fill in the form above with your project details. The more context you share, the better our initial response.',
                },
                {
                  step: '02',
                  title: 'We Respond',
                  desc: 'An EDT team member will reach out within 24 hours to acknowledge your brief and clarify any questions.',
                },
                {
                  step: '03',
                  title: 'Discovery Call',
                  desc: "We schedule a short discovery call to understand your objectives, timeline, audience, and budget in detail.",
                },
                {
                  step: '04',
                  title: 'Proposal',
                  desc: "EDT presents a tailored proposal — concept, scope, timeline, and investment — for your review and feedback.",
                },
              ].map((stage, i) => (
                <div
                  key={stage.step}
                  className={`p-8 ${i < 3 ? 'border-r border-white/10' : ''}`}
                >
                  <div className="text-edt-blue font-display text-4xl mb-4">{stage.step}</div>
                  <h3 className="text-white font-semibold text-lg mb-3">{stage.title}</h3>
                  <p className="text-edt-grey text-sm leading-relaxed">{stage.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QUICK LINKS */}
        <section className="bg-edt-black py-24 border-b border-white/10">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
            <h2 className="display-md font-display uppercase mb-10">
              Explore EDT Before You Reach Out
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                {
                  label: 'Our Work',
                  href: '/work',
                  desc: 'Case studies from CheritAR to AirAsia to New Balance — see what EDT builds.',
                },
                {
                  label: 'Our Products',
                  href: '/products',
                  desc: 'MimpiLab, CheritAR, Hoomans.ai, ARVENA, RiaReality, WayangMind.',
                },
                {
                  label: 'Our Services',
                  href: '/services',
                  desc: 'AR/VR development, interactive installations, virtual production, and more.',
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="bg-surface border border-white/10 hover:border-edt-blue p-8 block transition-colors group"
                >
                  <div className="text-edt-blue text-sm uppercase tracking-widest mb-3 font-semibold group-hover:underline">
                    {link.label} →
                  </div>
                  <p className="text-edt-grey text-sm leading-relaxed">{link.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-edt-blue py-20">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20 text-center">
            <h2 className="display-lg font-display uppercase text-white mb-6">
              Ready When You Are
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              Fill in the brief form above, or reach out directly. EDT's team is
              ready to help you build something your audience will never forget.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#top" className="btn-secondary border-white text-white">
                Back to Top
              </a>
              <a
                href="mailto:hello@edtmy.com"
                className="btn-ghost border-white text-white"
              >
                Email EDT
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
