import Link from 'next/link'
import FormspreeForm from '@/components/FormspreeForm'

// Newsletter + project CTA shared by the blog index and article pages.
export default function BlogFooterSections({ newsletterCopy }: { newsletterCopy?: string }) {
  return (
    <>
      {/* NEWSLETTER */}
      <section className="bg-surface py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="display-md font-display uppercase mb-6">
                Be First to Read It
              </h2>
              <p className="text-edt-grey text-lg leading-relaxed">
                {newsletterCopy ??
                  'Drop your email — we’ll send you new articles the day they go live. No spam. Unsubscribe any time.'}
              </p>
            </div>
            <div>
              <FormspreeForm
                endpoint="https://formspree.io/f/xqenejyp"
                thankYouType="newsletter"
                className="flex gap-0"
              >
                <input type="hidden" name="_subject" value="New newsletter subscriber — EDT" />
                <input
                  type="text"
                  name="_gotcha"
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="flex-1 bg-edt-black border border-white/20 text-white px-6 py-4 text-sm placeholder:text-edt-grey focus:outline-none focus:border-edt-blue"
                />
                <button
                  type="submit"
                  className="btn-primary whitespace-nowrap"
                >
                  Subscribe
                </button>
              </FormspreeForm>
              <p className="text-edt-grey text-xs mt-3">
                No spam. Unsubscribe any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-edt-blue py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 text-center">
          <h2 className="display-lg font-display uppercase text-white mb-6">
            Ready to Build Something?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Reading about immersive tech is one thing. Deploying it for your brand, event,
            or institution is another. Let&apos;s talk about your project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-secondary border-white text-white">
              Get in Touch
            </Link>
            <Link href="/work" className="btn-ghost border-white text-white">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

    </>
  )
}
