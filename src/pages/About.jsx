import { ShieldCheck, Target, Heart, Award, GraduationCap, Star } from 'lucide-react';
import PageSEO from '../components/PageSEO.jsx';
import PageWrapper from '../components/PageWrapper.jsx';
import { CLINIC } from '../constants';

const VALUES = [
  {
    icon: <Target className="text-gold" size={26} aria-hidden="true" />,
    title: "Evidence-Based Practice",
    description: "Every treatment we offer is backed by clinical research. We use technology and techniques that are proven to work — not trends.",
  },
  {
    icon: <ShieldCheck className="text-gold" size={26} aria-hidden="true" />,
    title: "Safety Above All",
    description: "All treatments are performed using FDA-approved technology with a strong focus on your safety, skin health and long-term wellbeing.",
  },
  {
    icon: <Heart className="text-gold" size={26} aria-hidden="true" />,
    title: "Natural Results",
    description: "We believe the best results are the ones that make you feel like yourself — only better. No overdone, no artificial. Just genuine confidence.",
  },
];

const AWARDS = [
  {
    icon: <Award size={20} className="text-gold" aria-hidden="true" />,
    title: "CDN Awards — Best Student of the Year",
    sub: "Scotland",
  },
  {
    icon: <Star size={20} className="text-gold" aria-hidden="true" />,
    title: "National Charity Award Finalist",
    sub: "Charitable Contributions Across Scotland",
  },
  {
    icon: <GraduationCap size={20} className="text-gold" aria-hidden="true" />,
    title: "Graduate Skin Specialist",
    sub: "Fully Qualified & Insured Clinician",
  },
];

export default function About() {
  return (
    <>
      <PageSEO
        title="About Sumi Bhandari | Sai Skin Care — Rosyth, Dunfermline"
        description="Meet Sumi Bhandari — founder of Sai Skin Care in Rosyth, Dunfermline. A fully qualified, award-winning skin specialist with 10+ years experience, CDN Best Student of the Year in Scotland."
        image="/images/sumi.jpg"
        canonical="https://saiskin.vercel.app/about"
      />

      <PageWrapper>
        <div className="bg-white">

          {/* ── Hero ── */}
          <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-cream" aria-labelledby="about-heading">
            <div className="max-w-3xl mx-auto px-6 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-4">Our Story</p>
              <h1 id="about-heading" className="font-serif text-4xl md:text-6xl font-semibold mb-7 text-dark">
                About Sai Skin Care
              </h1>
              <p className="text-lg md:text-xl text-muted leading-relaxed font-light italic font-serif">
                "Helping every client feel confident, cared for and genuinely at home in their own skin."
              </p>
            </div>
          </section>

          {/* ── Meet Sumi — full profile ── */}
          <section className="py-20 md:py-28 bg-white" aria-labelledby="sumi-heading">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* Photo + award badge */}
                <div className="relative">
                  <div className="aspect-[4/5] bg-cream rounded-5xl overflow-hidden shadow-2xl">
                    <img
                      src="/images/sumi.jpg"
                      alt="Sumi Bhandari — founder and lead skin specialist at Sai Skin Care, Rosyth"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-gold text-white p-7 rounded-4xl shadow-xl hidden md:block">
                    <Award size={26} className="mb-2" aria-hidden="true" />
                    <p className="font-serif font-bold text-lg leading-tight">CDN Award</p>
                    <p className="text-xs uppercase tracking-widest font-semibold mt-0.5 text-white/80">Best Student</p>
                  </div>
                </div>

                {/* Biography */}
                <div className="space-y-7 lg:pt-4">
                  <div>
                    <p className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-3">Meet Your Clinician</p>
                    <h2 id="sumi-heading" className="font-serif text-4xl md:text-5xl font-semibold text-dark leading-tight mb-6">
                      Sumi Bhandari
                    </h2>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-muted/60 font-bold mb-7">
                      Founder &amp; Lead Skin Specialist · Sai Skin Care
                    </p>
                  </div>

                  <div className="space-y-5 text-muted leading-relaxed">
                    <p>
                      Sumi is a fully qualified, graduate skin specialist with over 10 years of experience in advanced skin and hair treatments. Her career has been built on a deep commitment to clinical excellence, continuous learning, and genuine compassion for every client she works with.
                    </p>
                    <p>
                      Recognised across the industry for both her skill and her approach, Sumi was awarded <strong className="text-dark font-semibold">Best Student of the Year in Scotland</strong> at the prestigious CDN Awards — and was named a <strong className="text-dark font-semibold">National Charity Award Finalist</strong> for her extensive charitable contributions across Scotland.
                    </p>
                    <p>
                      At Sai Skin Care, Sumi is known for delivering safe, evidence-based treatments with a strong focus on natural results, client confidence, and truly exceptional care. Whether you're coming in for your first consultation or your tenth treatment, you'll always leave feeling listened to and looked after.
                    </p>
                    <p className="italic font-serif text-base border-l-2 border-gold pl-5 text-dark/70">
                      "I started Sai Skin Care because I wanted a clinic where clients feel genuinely cared for — not rushed, not sold to, just properly looked after. That's still what drives everything we do."
                    </p>
                  </div>

                  {/* Awards grid */}
                  <div className="grid gap-3 pt-4">
                    {AWARDS.map(({ icon, title, sub }) => (
                      <div
                        key={title}
                        className="flex items-center gap-4 bg-cream rounded-2xl px-5 py-4 border border-cream-dark"
                      >
                        <div className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center shrink-0 bg-white">
                          {icon}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-dark leading-snug">{title}</p>
                          <p className="text-xs text-muted mt-0.5">{sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Key stats */}
                  <dl className="grid grid-cols-3 gap-6 pt-6 border-t border-cream-dark">
                    {[
                      { value: '10+',  label: 'Years Experience' },
                      { value: 'FDA',  label: 'Approved Tech'    },
                      { value: 'FREE', label: 'Consultations'    },
                    ].map(({ value, label }) => (
                      <div key={label}>
                        <dt className="sr-only">{label}</dt>
                        <dd>
                          <span className="font-serif text-3xl font-bold text-dark block">{value}</span>
                          <span className="text-[10px] uppercase tracking-widest text-muted/60 font-bold">{label}</span>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </section>

          {/* ── Clinic Vision ── */}
          <section className="py-16 md:py-24 bg-cream" aria-labelledby="vision-heading">
            <div className="max-w-7xl mx-auto px-6">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <p className="text-gold text-xs uppercase tracking-[0.3em] font-bold">Our Vision</p>
                <h2 id="vision-heading" className="font-serif text-3xl md:text-4xl font-semibold text-dark">
                  What Sai Skin Care Stands For
                </h2>
                <p className="text-muted leading-relaxed">
                  Our vision is to be Dunfermline and Fife's most trusted aesthetic clinic — one where cutting-edge technology and genuine human care exist side by side. We're not here to chase trends. We're here to deliver real, lasting results in an environment where you feel completely at ease.
                </p>
                <p className="text-muted leading-relaxed">
                  From your first free consultation to your final treatment session, everything at Sai Skin Care is designed around you — your skin, your goals, your comfort.
                </p>
              </div>
            </div>
          </section>

          {/* ── Values ── */}
          <section className="py-16 md:py-24 bg-white" aria-labelledby="values-heading">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-12">
                <h2 id="values-heading" className="font-serif text-3xl md:text-4xl font-semibold italic mb-4 text-dark">
                  The Sai Skin Care Standard
                </h2>
                <p className="text-muted max-w-lg mx-auto text-sm">
                  Our core values shape every treatment we deliver and every client we welcome.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                {VALUES.map((value) => (
                  <div
                    key={value.title}
                    className="bg-cream border border-cream-dark p-8 md:p-10 rounded-4xl hover:shadow-xl hover:shadow-gold/5 transition-all group"
                  >
                    <div className="mb-5 group-hover:scale-110 transition-transform duration-300 w-fit">
                      {value.icon}
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-3 text-dark">{value.title}</h3>
                    <p className="text-muted leading-relaxed text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="py-24 md:py-32 text-center bg-cream" aria-labelledby="cta-heading">
            <div className="max-w-2xl mx-auto px-6">
              <h2 id="cta-heading" className="font-serif text-3xl md:text-5xl font-semibold text-dark mb-5">
                Ready to Meet Sumi?
              </h2>
              <p className="text-muted mb-12 leading-relaxed text-base">
                Book a free consultation at our Rosyth clinic. Sumi will take the time to understand your skin, answer your questions honestly, and recommend the right treatment — only if it's right for you.
              </p>
              <a
                href={CLINIC.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-white px-12 py-5 rounded-2xl text-base font-semibold transition-all shadow-lg hover:shadow-gold/20"
              >
                Book Your Free Consultation
              </a>
            </div>
          </section>
        </div>
      </PageWrapper>
    </>
  );
}