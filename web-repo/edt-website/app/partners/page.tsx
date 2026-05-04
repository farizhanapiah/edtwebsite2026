import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Agency Partners | Strengthen Your Pitch with EDT's XR Capability",
  description:
    "EDT is Malaysia's white-label XR and immersive tech partner for agencies. No hiring, no R&D risk. Pitch, deploy, and deliver unforgettable experiences.",
  alternates: {
    canonical: '/partners',
    languages: { 'en-MY': '/partners', 'x-default': '/partners' },
  },
}

export default function PartnersPage() {
  return (
    <main className="bg-edt-black text-white">

      {/* HERO */}
      <section className="bg-edt-black pt-20 pb-24 lg:pt-28 lg:pb-32 border-b border-white/10 pixel-grid">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="edt-badge mb-6 inline-block">Agency Partners</span>
          <h1 className="display-xl font-display uppercase mb-6 max-w-4xl">
            Are You an Agency? Strengthen Your Pitch with EDT.
          </h1>
          <p className="text-xl text-edt-grey max-w-2xl leading-relaxed">
            EDT is Malaysia's white-label XR and immersive tech partner for agencies.
            No hiring. No R&D risk. Pitch with confidence, deploy with precision, and
            deliver experiences your clients will never forget.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#partner-form" className="btn-primary">
              Become a Partner
            </a>
            <Link href="/work" className="btn-ghost">
              View What We Build
            </Link>
          </div>
        </div>
      </section>

      {/* THE AGENCY PROBLEM */}
      <section className="bg-surface py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="edt-badge mb-6 inline-block">The Agency Problem</span>
              <h2 className="display-md font-display uppercase mb-6">
                Clients Want Immersive Tech. Most Agencies Can't Deliver It.
              </h2>
              <p className="text-edt-grey text-lg leading-relaxed mb-6">
                Every brief seems to include a line about "immersive experiences" now.
                AR activations. AI photobooths. Interactive installations. Virtual
                production. Clients have seen what's possible, and they want it.
              </p>
              <p className="text-edt-grey text-lg leading-relaxed mb-6">
                But building XR capability in-house is expensive, slow, and risky. Hiring
                a specialist team, acquiring hardware, and developing the R&D required to
                deliver confidently at scale can take years — and the technology moves
                faster than any agency can keep up with.
              </p>
              <p className="text-edt-grey text-lg leading-relaxed">
                The result: agencies either decline immersive briefs and lose the business,
                or over-promise and under-deliver — damaging client relationships they spent
                years building.
              </p>
            </div>
            <div className="space-y-4">
              {[
                'Client asks for an AR activation at their product launch',
                'Your team knows the concept, but not the build',
                "You hire a freelancer — they can\'t handle hardware on the day",
                'You pass on the brief — competitor takes the account',
                'You promise something new — and scramble to deliver',
              ].map((scenario, i) => (
                <div key={i} className="flex items-start gap-4 border border-white/10 p-5">
                  <span className="text-edt-grey/40 font-mono text-sm w-8 shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-edt-grey leading-relaxed">{scenario}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THE EDT SOLUTION */}
      <section className="bg-edt-black py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="edt-badge mb-6 inline-block">The EDT Solution</span>
          <h2 className="display-md font-display uppercase mb-4 max-w-3xl">
            Your Agency. EDT's Capability.
          </h2>
          <p className="text-edt-grey text-lg leading-relaxed mb-12 max-w-2xl">
            EDT operates as your invisible XR department. We sit behind your agency
            brand, bring the technology and talent, and ensure your client sees exactly
            what you promised — delivered flawlessly.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {[
              {
                check: '01',
                title: "Pitch with EDT\'s Proven Capability",
                desc: 'Walk into any client meeting with a portfolio of delivered XR projects, working product demos, and the credibility of an established immersive tech studio behind your proposal.',
              },
              {
                check: '02',
                title: 'Deploy with Our Hardware, Software & Crew',
                desc: "EDT owns the hardware, the software licenses, the specialist crew, and the project management frameworks. You don\'t need to procure, transport, or operate anything.",
              },
              {
                check: '03',
                title: 'Deliver with White-Label Flexibility',
                desc: 'EDT operates under your brand. All deliverables, on-site presence, and client communications can be presented under your agency name. Your client relationship stays yours.',
              },
              {
                check: '04',
                title: 'Repeat Across Clients',
                desc: "Once you\'ve won one immersive brief with EDT, you have a repeatable capability. Win the next one. Then the one after that. Build a reputation for immersive excellence without building a department.",
              },
            ].map((item) => (
              <div key={item.check} className="bg-surface border border-white/10 p-8 flex gap-6">
                <div className="text-edt-blue font-display text-2xl shrink-0">{item.check}</div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-3">{item.title}</h3>
                  <p className="text-edt-grey leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-surface py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <h2 className="display-md font-display uppercase mb-12">How It Works</h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 border border-white/10">
            {[
              {
                step: '01',
                title: 'Share the Brief',
                desc: 'Send us your client brief — event details, objectives, audience, budget range, and timeline. Confidential. No obligation.',
              },
              {
                step: '02',
                title: 'We Concept',
                desc: "EDT\'s creative and technical team develops an immersive experience proposal tailored to the brief. We provide deck-ready concepts and realistic scoping.",
              },
              {
                step: '03',
                title: 'You Win the Client',
                desc: "Take the concept to your client under your agency brand. EDT operates as a behind-the-scenes partner — we don\'t need the credit.",
              },
              {
                step: '04',
                title: 'We Execute',
                desc: 'EDT handles full production — build, delivery, on-site operation, and post-event reporting. You manage the client relationship.',
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

      {/* WHAT PARTNERS GET */}
      <section className="bg-edt-black py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <h2 className="display-md font-display uppercase mb-12">What Partners Get</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Priority Concept Turnaround',
                desc: 'Partner agencies receive prioritised concept development — typically within 48 hours of brief submission, versus standard 5-day turnaround.',
              },
              {
                title: 'White-Label Delivery',
                desc: 'All on-site crew, digital assets, and client-facing materials are presented under your agency brand. Full white-label from pitch to post-event.',
              },
              {
                title: "Access to EDT\'s Full Product Suite",
                desc: 'Partners can pitch the full EDT portfolio — MimpiLab, CheritAR, Hoomans.ai, ARVENA, RiaReality, and custom build capability.',
              },
              {
                title: 'Competitive Partner Pricing',
                desc: "EDT's partner pricing is structured to protect your agency margin. Share the brief and budget — we'll work to fit your commercial model.",
              },
              {
                title: 'Joint Business Development',
                desc: 'For long-term partners, EDT offers co-business development — joint pitches, shared case studies, and co-marketing in select cases.',
              },
            ].map((benefit) => (
              <div key={benefit.title} className="bg-surface border border-white/10 p-8">
                <h3 className="text-white font-semibold text-lg mb-4">{benefit.title}</h3>
                <p className="text-edt-grey leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-surface py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-edt-blue text-5xl font-display mb-8">"</div>
            <blockquote className="display-sm font-display uppercase text-white leading-tight mb-8">
              EDT gave us the ability to pitch immersive tech confidently without building
              the capability ourselves. They delivered exactly what we promised our client.
            </blockquote>
            <p className="text-edt-grey">
              — Agency Partner, Malaysia
            </p>
          </div>
        </div>
      </section>

      {/* PARTNER FORM */}
      <section id="partner-form" className="bg-edt-black py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="display-md font-display uppercase mb-6">
                Become an EDT Partner
              </h2>
              <p className="text-edt-grey text-lg leading-relaxed mb-6">
                Fill in the form and one of EDT's partnership team will be in touch
                within 24 hours. All conversations are confidential.
              </p>
              <div className="space-y-4">
                {[
                  'Creative agencies & integrated marketing agencies',
                  'Event management and experiential agencies',
                  'PR and communications consultancies',
                  'Digital transformation and tech consulting firms',
                  'Architecture and spatial design firms',
                ].map((type) => (
                  <div key={type} className="flex items-start gap-4">
                    <span className="text-edt-blue shrink-0">—</span>
                    <span className="text-edt-grey">{type}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <form action="https://formspree.io/f/maqvqkpq" method="POST" className="space-y-5">
                <input type="hidden" name="_subject" value="New partner enquiry — EDT" />
                <input type="hidden" name="_next" value="https://weareedt.com/thank-you?type=partner" />
                <input
                  type="text"
                  name="_gotcha"
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
                <div>
                  <label htmlFor="agency-name" className="block text-edt-grey text-sm uppercase tracking-widest mb-2">
                    Agency Name *
                  </label>
                  <input
                    type="text"
                    id="agency-name"
                    name="agency_name"
                    required
                    className="w-full bg-surface border border-white/20 text-white px-5 py-4 text-sm placeholder:text-edt-grey/50 focus:outline-none focus:border-edt-blue"
                    placeholder="Your agency name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-name" className="block text-edt-grey text-sm uppercase tracking-widest mb-2">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="contact_name"
                    required
                    className="w-full bg-surface border border-white/20 text-white px-5 py-4 text-sm placeholder:text-edt-grey/50 focus:outline-none focus:border-edt-blue"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="partner-email" className="block text-edt-grey text-sm uppercase tracking-widest mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="partner-email"
                    name="email"
                    required
                    className="w-full bg-surface border border-white/20 text-white px-5 py-4 text-sm placeholder:text-edt-grey/50 focus:outline-none focus:border-edt-blue"
                    placeholder="you@agency.com"
                  />
                </div>
                <div>
                  <label htmlFor="client-type" className="block text-edt-grey text-sm uppercase tracking-widest mb-2">
                    Client Type
                  </label>
                  <input
                    type="text"
                    id="client-type"
                    name="client_type"
                    className="w-full bg-surface border border-white/20 text-white px-5 py-4 text-sm placeholder:text-edt-grey/50 focus:outline-none focus:border-edt-blue"
                    placeholder="e.g. FMCG, Corporate, Government"
                  />
                </div>
                <div>
                  <label htmlFor="typical-brief" className="block text-edt-grey text-sm uppercase tracking-widest mb-2">
                    Typical Brief
                  </label>
                  <textarea
                    id="typical-brief"
                    name="typical_brief"
                    rows={4}
                    className="w-full bg-surface border border-white/20 text-white px-5 py-4 text-sm placeholder:text-edt-grey/50 focus:outline-none focus:border-edt-blue resize-none"
                    placeholder="Describe a typical client brief you receive that might include immersive technology..."
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full justify-center"
                >
                  Submit Partner Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-edt-blue py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 text-center">
          <h2 className="display-lg font-display uppercase text-white mb-6">
            Win More. Deliver More.
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            EDT's partner programme is built for agencies that want to compete for
            immersive briefs without the overhead of building the capability in-house.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#partner-form" className="btn-secondary border-white text-white">
              Become a Partner
            </a>
            <Link href="/contact" className="btn-ghost border-white text-white">
              Talk to the Team
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
