import AnimatedText from '../components/AnimatedText'
import ContactButton from '../components/ContactButton'
import FadeIn from '../components/FadeIn'
import { Mail, Phone, MapPin, Target, CheckCircle2, Github } from 'lucide-react'

const SUMMARY =
  "Proactive Full-Stack Software Engineer with 2.5+ years of hands-on experience designing, building, and deploying scalable web and mobile applications for production environments. Demonstrated expertise in end-to-end solution development using modern technologies (React.js, Node.js, Python, AWS, PostgreSQL). Proven ability to optimize application performance, implement secure authentication, manage databases, and lead cross-functional development initiatives."

const HIGHLIGHTS = [
  '2.5+ Years Full-Stack Experience',
  '4 Production Applications Deployed',
  '98% Production Uptime Maintained',
  '10,000+ Daily ML Inferences Served',
  '95% Lighthouse Score Standard',
  'JWT & OAuth Security Implementation',
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 py-20 sm:px-8 md:px-10"
    >
      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center">
        <div className="flex flex-col items-center gap-8 sm:gap-12">
          <FadeIn
            as="h2"
            delay={0}
            y={40}
            className="hero-heading text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 10vw, 140px)' }}
          >
            About Me
          </FadeIn>

          <AnimatedText
            text={SUMMARY}
            className="max-w-4xl text-center font-medium leading-relaxed text-[#D7E2EA]"
            style={{ fontSize: 'clamp(1rem, 1.8vw, 1.35rem)' }}
          />
        </div>

        {/* Quick Facts Grid */}
        <FadeIn delay={0.2} y={30} className="mt-12 w-full">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <div className="mb-2 flex items-center gap-3 text-purple-400">
                <MapPin className="h-5 w-5" />
                <span className="text-xs font-semibold uppercase tracking-wider text-white/70">Location</span>
              </div>
              <p className="text-lg font-bold text-white">Bengaluru, India</p>
              <p className="text-xs text-[#D7E2EA]/60">Open for Remote Roles Worldwide</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <div className="mb-2 flex items-center gap-3 text-pink-400">
                <Target className="h-5 w-5" />
                <span className="text-xs font-semibold uppercase tracking-wider text-white/70">Target Role</span>
              </div>
              <p className="text-lg font-bold text-white">Senior Developer</p>
              <p className="text-xs text-[#D7E2EA]/60">$65,000+ Compensation Target</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <div className="mb-2 flex items-center gap-3 text-cyan-400">
                <Mail className="h-5 w-5" />
                <span className="text-xs font-semibold uppercase tracking-wider text-white/70">Email</span>
              </div>
              <a href="mailto:shashankkatti268@gmail.com" className="text-sm font-bold text-white hover:underline break-all">
                shashankkatti268@gmail.com
              </a>
              <p className="text-xs text-[#D7E2EA]/60">Direct Contact</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <div className="mb-2 flex items-center gap-3 text-emerald-400">
                <Phone className="h-5 w-5" />
                <span className="text-xs font-semibold uppercase tracking-wider text-white/70">Phone</span>
              </div>
              <a href="tel:+918431202840" className="text-base font-bold text-white hover:underline">
                +91 8431202840
              </a>
              <p className="text-xs text-[#D7E2EA]/60">Call / WhatsApp</p>
            </div>
          </div>
        </FadeIn>

        {/* Highlights List */}
        <FadeIn delay={0.3} y={30} className="mt-10 w-full max-w-4xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {HIGHLIGHTS.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
                <span className="text-sm font-semibold text-[#D7E2EA]">{item}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Action CTAs */}
        <div id="contact" className="mt-12 flex flex-wrap justify-center gap-4">
          <ContactButton href="#contact" />
          <a
            href="https://shashankkatti26112.github.io/My-Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3 text-xs font-medium uppercase tracking-widest text-white transition-all hover:bg-white/10 sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base"
          >
            <Github className="mr-2 h-4 w-4 text-purple-400" /> View GitHub Portfolio
          </a>
        </div>
      </div>
    </section>
  )
}
