import FadeIn from '../components/FadeIn'
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react'

type Experience = {
  role: string
  company: string
  dates: string
  location: string
  type: string
  bullets: string[]
  tags: string[]
}

const EXPERIENCES: Experience[] = [
  {
    role: 'Full-Stack Software Engineer (Application Developer)',
    company: 'Prime Pro. AI LLC Technologies Pvt Ltd',
    dates: 'Mar 2026 – Present',
    location: 'Bengaluru, India (Remote)',
    type: 'Full-time',
    bullets: [
      'Architected and deployed 4 production full-stack applications serving 1,000+ active users with 98% uptime across healthcare, fitness, and transportation domains.',
      'Ridex Mobile App: Built cross-platform ride-booking platform (React Native, Node.js, PostgreSQL, AWS) with real-time GPS tracking. Reduced crash rate by 40%, improved load time by 35%, and secured 5,000+ users with JWT authentication.',
      'Vigneshwara Global Tours: Designed & deployed car & bus rental website. Reduced page load time by 45% via image optimization & lazy loading (28% conversion boost). Built fleet management handling 300+ monthly inquiries.',
      'Practo Healthcare & Epic Life Fitness Platforms: Developed healthcare appointment booking and fitness platforms achieving 95% Lighthouse performance score with real-time doctor profile management.',
      'Optimized system latency: Implemented intelligent caching strategies reducing redundant API calls by 30% and optimized database queries improving response latency by 25%.',
    ],
    tags: ['React.js', 'React Native', 'Node.js', 'PostgreSQL', 'AWS (EC2, S3)', 'JWT Auth', 'REST APIs', 'Performance Optimization'],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Ultimez Technology Pvt Ltd',
    dates: 'Aug 2025 – Oct 2025 (3 months)',
    location: 'Bengaluru, India',
    type: 'Internship',
    bullets: [
      'Built Quick Cart e-commerce platform using Next.js, React, MongoDB, and Cloudinary.',
      'Implemented secure user authentication via Clerk, product management system, and responsive shopping cart.',
      'Deployed on Vercel with continuous deployment pipeline achieving 95+ Lighthouse performance score.',
    ],
    tags: ['Next.js', 'React', 'MongoDB', 'Cloudinary', 'Clerk Auth', 'Vercel', 'CI/CD'],
  },
  {
    role: 'Machine Learning Engineer Intern',
    company: 'TDS Avenue Codeforge',
    dates: 'Aug 2024 – Sep 2024 (2 months)',
    location: 'Remote',
    type: 'Internship',
    bullets: [
      'Developed end-to-end ML recommendation engine using Python, Scikit-learn, and TensorFlow, improving prediction accuracy by 18% and user engagement by 22%.',
      'Designed Flask REST API for ML model integration reducing inference latency by 25% supporting 10,000+ daily requests.',
    ],
    tags: ['Python', 'Scikit-learn', 'TensorFlow', 'Flask', 'REST API', 'Machine Learning'],
  },
  {
    role: 'Android Developer Intern',
    company: 'Saranyu Technologies',
    dates: 'May 2024 – Jul 2024 (3 months)',
    location: 'Bengaluru, India',
    type: 'Internship',
    bullets: [
      'Developed Android applications in Java & Kotlin with engaging UIs and seamless backend integration.',
      'Implemented key modules improving app stability and responsiveness by 25%. Strengthened mobile architecture and UI/UX design skills.',
    ],
    tags: ['Java', 'Kotlin', 'Android SDK', 'UI/UX', 'Mobile Architecture'],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Pratinik Infotech',
    dates: 'May 2024 – Jul 2024 (3 months)',
    location: 'Remote',
    type: 'Internship',
    bullets: [
      'Built complete web application using ReactJS, NodeJS, ExpressJS, and MongoDB.',
      'Designed responsive UIs and APIs for efficient CRUD operations. Enhanced performance improving response times by 30%.',
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
  },
  {
    role: 'Web Development Intern',
    company: 'CodeAlpha',
    dates: 'Apr 2024 – Jul 2024 (4 months)',
    location: 'Remote',
    type: 'Internship',
    bullets: [
      'Created dynamic Age Calculator with 15% faster load performance.',
      'Added interactive features to To-Do Web App boosting user engagement by 20%. Focused on web optimization, UX design, and JavaScript logic refinement.',
    ],
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Web Optimization', 'UX Design'],
  },
  {
    role: 'Cybersecurity Analyst Intern',
    company: 'Exposys Data Labs',
    dates: 'Oct 2023 – Dec 2023 (3 months)',
    location: 'Remote',
    type: 'Internship',
    bullets: [
      'Developed Python-based encryption-decryption program using Caesar Cipher Algorithm.',
      'Built network monitoring and vulnerability detection automation tools.',
      'Identified and remediated 30+ security vulnerabilities improving system reliability.',
    ],
    tags: ['Python', 'Caesar Cipher', 'Cybersecurity', 'Network Monitoring', 'Vulnerability Remediation'],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative bg-[#0C0C0C] px-5 py-20 sm:px-8 md:px-10">
      <div className="mx-auto max-w-5xl">
        <FadeIn
          as="h2"
          delay={0}
          y={40}
          className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 140px)' }}
        >
          Experience
        </FadeIn>

        <div className="relative border-l-2 border-white/10 pl-6 sm:pl-10 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <FadeIn key={`${exp.company}-${idx}`} delay={idx * 0.1} y={30}>
              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8 transition-all hover:border-[#B600A8]/40">
                {/* Timeline Node Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-8 h-5 w-5 rounded-full border-4 border-[#0C0C0C] bg-[#B600A8] shadow-lg shadow-[#B600A8]/50" />

                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <span className="inline-block rounded-full bg-[#B600A8]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#B600A8] mb-2">
                      {exp.type}
                    </span>
                    <h3 className="text-xl font-extrabold uppercase text-white sm:text-2xl">
                      {exp.role}
                    </h3>
                    <p className="text-base font-semibold text-purple-400 sm:text-lg">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col items-start gap-1 text-xs font-medium text-[#D7E2EA]/70 sm:items-end sm:text-sm">
                    <span className="flex items-center gap-1.5 text-white/90">
                      <Calendar className="h-4 w-4 text-pink-400" /> {exp.dates}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-emerald-400" /> {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-sm text-[#D7E2EA] sm:text-base leading-relaxed">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-purple-400 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-medium text-[#D7E2EA]/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
