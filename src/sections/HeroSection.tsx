import ContactButton from '../components/ContactButton'
import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'
import { Linkedin, Github, MapPin } from 'lucide-react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const STATS = [
  { label: 'Experience', value: '2.5+ Years' },
  { label: 'Production Apps', value: '4+ Deployed' },
  { label: 'System Uptime', value: '98%' },
  { label: 'ML Inferences', value: '10,000+/Day' },
]

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-x-clip pb-10">
      <FadeIn delay={0} y={-20}>
        <nav className="flex flex-wrap items-center justify-between gap-4 px-6 pt-6 md:px-10 md:pt-8">
          <a
            href="#"
            className="text-lg font-black uppercase tracking-wider text-white md:text-xl"
          >
            SHASHANK KATTI
          </a>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 sm:text-sm md:text-base"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </FadeIn>

      <div className="overflow-hidden px-4 text-center sm:px-6">
        <FadeIn
          as="h1"
          delay={0.15}
          y={40}
          className="hero-heading mt-6 w-full whitespace-nowrap text-[10vw] font-black uppercase leading-none tracking-tight sm:mt-4 sm:text-[11vw] md:-mt-2 md:text-[12vw] lg:text-[13.5vw]"
        >
          SHASHANK KATTI
        </FadeIn>
      </div>

      <div className="relative my-4 flex flex-1 flex-col items-center justify-center">
        <div className="z-10 w-[240px] sm:w-[320px] md:w-[380px] lg:w-[420px]">
          <FadeIn delay={0.3} y={30}>
            <Magnet
              padding={150}
              strength={3}
              activeTransition="transform 0.3s ease-out"
              inactiveTransition="transform 0.6s ease-in-out"
            >
              <div className="relative rounded-full p-2 bg-gradient-to-b from-[#B600A8]/40 via-[#7621B0]/20 to-transparent backdrop-blur-md shadow-2xl">
                <img
                  src="/shashank_avatar.jpg"
                  alt="Shashank Katti portrait"
                  className="w-full rounded-full object-cover shadow-2xl border-2 border-white/20 select-none"
                  draggable={false}
                />
              </div>
            </Magnet>
          </FadeIn>
        </div>

        {/* Hero Role Badge */}
        <FadeIn delay={0.4} y={20} className="mt-6 text-center px-4">
          <p className="inline-block rounded-full border border-white/10 bg-white/5 px-6 py-2 text-xs font-semibold uppercase tracking-widest text-[#D7E2EA] backdrop-blur-sm sm:text-sm md:text-base">
            Full-Stack Software Engineer • React • Node.js • Python • AWS
          </p>
        </FadeIn>
      </div>

      {/* Hero Footer Stats & CTAs */}
      <div className="mt-auto flex flex-col items-center justify-between gap-6 px-6 pb-4 sm:px-10 sm:pb-6 md:flex-row md:items-end">
        <FadeIn delay={0.45} y={20}>
          <div className="flex max-w-sm flex-col gap-1 text-center md:text-left">
            <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D7E2EA]/70 md:justify-start">
              <MapPin className="h-3.5 w-3.5 text-[#B600A8]" /> Bengaluru, India (Remote)
            </div>
            <p
              className="font-light leading-snug tracking-wide text-[#D7E2EA]"
              style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.15rem)' }}
            >
              2.5+ years experience architecting scalable web & mobile applications, ML pipelines, and microservices.
            </p>
          </div>
        </FadeIn>

        {/* Quick Social & Action Links */}
        <FadeIn delay={0.5} y={20} className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://linkedin.com/in/shashankkatti20"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-xs font-medium text-white transition-all hover:bg-white/10 sm:px-5 sm:text-sm"
          >
            <Linkedin className="h-4 w-4 text-[#0A66C2]" /> LinkedIn
          </a>
          <a
            href="https://shashankkatti26112.github.io/My-Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-xs font-medium text-white transition-all hover:bg-white/10 sm:px-5 sm:text-sm"
          >
            <Github className="h-4 w-4 text-purple-400" /> GitHub Portfolio
          </a>
          <ContactButton href="#contact" />
        </FadeIn>
      </div>

      {/* Stats Bar */}
      <FadeIn delay={0.6} y={20} className="mt-8 px-6 sm:px-10">
        <div className="grid grid-cols-2 gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md sm:grid-cols-4 sm:p-6">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-xl font-extrabold text-white sm:text-2xl md:text-3xl">{stat.value}</div>
              <div className="text-xs font-medium uppercase tracking-wider text-[#D7E2EA]/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
