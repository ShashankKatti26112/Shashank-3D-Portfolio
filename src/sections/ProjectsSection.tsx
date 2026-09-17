import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import FadeIn from '../components/FadeIn'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'

type Project = {
  number: string
  category: string
  name: string
  subtitle: string
  tech: string[]
  highlights: string[]
  link?: string
  bgGradient: string
}

const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'Production Mobile & Web App',
    name: 'Ridex Ride-Booking Platform',
    subtitle: 'React Native, Node.js, PostgreSQL, AWS',
    tech: ['React Native', 'Node.js', 'PostgreSQL', 'AWS', 'JWT Auth', 'GPS Tracking'],
    highlights: [
      'Cross-platform ride-booking app with real-time GPS tracking and booking flow',
      'Optimized app performance reducing crash rate by 40% and load time by 35%',
      'Implemented JWT-based authentication securing 5,000+ registered users with zero security incidents',
    ],
    link: 'https://shashankkatti26112.github.io/My-Portfolio',
    bgGradient: 'from-purple-900/40 via-purple-950/20 to-black',
  },
  {
    number: '02',
    category: 'Business Web Application',
    name: 'Vigneshwara Global Tours',
    subtitle: 'Car & Bus Rental Website (React.js, Node.js, PostgreSQL, AWS S3)',
    tech: ['React.js', 'Node.js', 'PostgreSQL', 'AWS S3', 'Payment Gateway'],
    highlights: [
      'Designed & deployed fully responsive rental business website for Bangalore rental firm',
      'Reduced page load time by 45% via image optimization & lazy loading, boosting conversion by 28%',
      'Built dynamic fleet management handling 300+ monthly inquiries with integrated payment gateway',
    ],
    link: 'https://shashankkatti26112.github.io/My-Portfolio',
    bgGradient: 'from-blue-900/40 via-blue-950/20 to-black',
  },
  {
    number: '03',
    category: 'Enterprise Healthcare & Fitness',
    name: 'Practo Healthcare & Epic Life Fitness',
    subtitle: 'Healthcare & Fitness Ecosystem Platforms',
    tech: ['React.js', 'Node.js', 'PostgreSQL', 'API Integration', 'Lighthouse 95%'],
    highlights: [
      'Healthcare appointment booking and fitness ecosystem platforms achieving 95% Lighthouse score',
      'Implemented backend API integrations for real-time data handling, appointment scheduling, & profiles',
      'Intelligent caching strategies reduced redundant API calls by 30% and improved response latency by 25%',
    ],
    link: 'https://shashankkatti26112.github.io/My-Portfolio',
    bgGradient: 'from-emerald-900/40 via-emerald-950/20 to-black',
  },
  {
    number: '04',
    category: 'Full Stack E-Commerce',
    name: 'Quick Cart E-Commerce Platform',
    subtitle: 'Next.js, React, MongoDB, Cloudinary, Clerk',
    tech: ['Next.js', 'React', 'MongoDB', 'Cloudinary', 'Clerk Auth', 'Vercel'],
    highlights: [
      'Full-featured e-commerce platform built with Next.js, React, MongoDB, and Cloudinary',
      'Implemented secure user authentication via Clerk, product management, and shopping cart',
      'Deployed on Vercel with continuous deployment pipeline achieving 95+ Lighthouse score',
    ],
    link: 'https://shashankkatti26112.github.io/My-Portfolio',
    bgGradient: 'from-pink-900/40 via-pink-950/20 to-black',
  },
  {
    number: '05',
    category: 'AI / Machine Learning',
    name: 'ML Recommendation Engine',
    subtitle: 'Python, Scikit-learn, TensorFlow, Flask REST API',
    tech: ['Python', 'Scikit-learn', 'TensorFlow', 'Flask API', 'ML'],
    highlights: [
      'End-to-end ML recommendation engine improving prediction accuracy by 18% and engagement by 22%',
      'Designed Flask REST API for ML model integration reducing inference latency by 25%',
      'Optimized backend pipeline supporting 10,000+ daily high-concurrency requests',
    ],
    link: 'https://shashankkatti26112.github.io/My-Portfolio',
    bgGradient: 'from-amber-900/40 via-amber-950/20 to-black',
  },
  {
    number: '06',
    category: 'Logistics & Healthcare',
    name: 'Fidex Logistics & Doctors Way',
    subtitle: 'Multi-Client Enterprise Platforms',
    tech: ['React.js', 'Node.js', 'PostgreSQL', 'Lead Management'],
    highlights: [
      'Logistics tracking and healthcare appointment booking platforms',
      'Built responsive UI components achieving 95% Lighthouse performance score',
      'Integrated backend APIs for lead management and real-time data handling',
    ],
    link: 'https://shashankkatti26112.github.io/My-Portfolio',
    bgGradient: 'from-cyan-900/40 via-cyan-950/20 to-black',
  },
  {
    number: '07',
    category: 'Cybersecurity & Automation',
    name: 'Caesar Cipher & Vulnerability Detector',
    subtitle: 'Python Security Automation Tools',
    tech: ['Python', 'Caesar Cipher', 'Security Automation', 'Network Monitoring'],
    highlights: [
      'Python-based encryption-decryption suite leveraging Caesar Cipher Algorithm',
      'Built network monitoring and vulnerability detection automation tools',
      'Identified and remediated 30+ security vulnerabilities improving system reliability',
    ],
    link: 'https://shashankkatti26112.github.io/My-Portfolio',
    bgGradient: 'from-rose-900/40 via-rose-950/20 to-black',
  },
]

function ProjectCard({
  project,
  index,
  total,
}: {
  project: Project
  index: number
  total: number
}) {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  })
  const targetScale = 1 - (total - 1 - index) * 0.02
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div ref={container} className="mb-12 min-h-[60vh]">
      <motion.div
        className={`sticky top-[calc(5rem+var(--card-offset))] flex flex-col gap-6 rounded-[36px] border-2 border-white/10 bg-gradient-to-br ${project.bgGradient} p-6 shadow-2xl backdrop-blur-xl sm:rounded-[44px] sm:p-8 md:top-[calc(6rem+var(--card-offset))] md:rounded-[52px] md:p-10`}
        style={{
          scale,
          ['--card-offset' as string]: `${index * 20}px`,
        }}
      >
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-6">
          <div className="flex min-w-0 flex-1 items-center gap-4 sm:gap-6">
            <span
              className="hero-heading shrink-0 font-black"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
            >
              {project.number}
            </span>
            <div className="flex min-w-0 flex-col">
              <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 sm:text-sm">
                {project.category}
              </span>
              <h3
                className="font-extrabold uppercase leading-tight text-white"
                style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2.2rem)' }}
              >
                {project.name}
              </h3>
              <p className="text-xs font-medium text-[#D7E2EA]/70 sm:text-sm">
                {project.subtitle}
              </p>
            </div>
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-white/20 sm:px-6 sm:py-3 sm:text-sm"
          >
            Live Demo <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Highlights */}
        <div className="flex flex-col gap-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white/50">Key Achievements & Features</h4>
          <ul className="space-y-2.5">
            {project.highlights.map((h, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm font-medium text-[#D7E2EA] sm:text-base leading-relaxed">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400 mt-0.5" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/15 bg-black/40 px-3.5 py-1.5 text-xs font-semibold text-purple-300"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10"
    >
      <FadeIn
        as="h2"
        delay={0}
        y={40}
        className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-24"
        style={{ fontSize: 'clamp(2.5rem, 10vw, 140px)' }}
      >
        Featured Projects
      </FadeIn>
      <div className="mx-auto max-w-5xl">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.number} project={project} index={index} total={PROJECTS.length} />
        ))}
      </div>
    </section>
  )
}
