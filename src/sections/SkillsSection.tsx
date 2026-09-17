import FadeIn from '../components/FadeIn'
import { Code2, Layout, Server, Database, ShieldCheck, Cpu } from 'lucide-react'

const SKILL_CATEGORIES = [
  {
    title: 'Languages',
    icon: Code2,
    gradient: 'from-purple-500/20 to-indigo-500/20',
    borderColor: 'border-purple-500/30',
    textColor: 'text-purple-400',
    skills: ['Java', 'Python', 'JavaScript', 'C', 'SQL', 'Kotlin'],
  },
  {
    title: 'Frontend & Mobile',
    icon: Layout,
    gradient: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
    textColor: 'text-blue-400',
    skills: ['React.js', 'React Native', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    title: 'Backend & Frameworks',
    icon: Server,
    gradient: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-500/30',
    textColor: 'text-emerald-400',
    skills: ['Node.js', 'Express.js', 'Spring Boot', 'Flask', 'RESTful APIs', 'Microservices Architecture'],
  },
  {
    title: 'Databases & Cloud',
    icon: Database,
    gradient: 'from-amber-500/20 to-orange-500/20',
    borderColor: 'border-amber-500/30',
    textColor: 'text-amber-400',
    skills: ['PostgreSQL', 'MongoDB', 'SQL', 'AWS (EC2, S3, Lambda, IAM, Beanstalk)', 'Docker', 'CI/CD Pipelines', 'Git'],
  },
  {
    title: 'Security & Tools',
    icon: ShieldCheck,
    gradient: 'from-pink-500/20 to-rose-500/20',
    borderColor: 'border-pink-500/30',
    textColor: 'text-pink-400',
    skills: ['JWT Authentication', 'OAuth', 'Caesar Cipher Encryption', 'Cybersecurity Fundamentals', 'Selenium', 'Linux'],
  },
  {
    title: 'Specializations',
    icon: Cpu,
    gradient: 'from-violet-500/20 to-purple-500/20',
    borderColor: 'border-violet-500/30',
    textColor: 'text-violet-400',
    skills: ['Distributed Systems', 'Scalable Architecture', 'Performance Optimization', 'Full-Stack Development', 'Data Structures & Algorithms', 'ETL Pipelines'],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="relative bg-[#0C0C0C] px-5 py-20 sm:px-8 md:px-10">
      <div className="mx-auto max-w-6xl">
        <FadeIn
          as="h2"
          delay={0}
          y={40}
          className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 140px)' }}
        >
          Skills & Expertise
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category, idx) => {
            const Icon = category.icon
            return (
              <FadeIn key={category.title} delay={idx * 0.08} y={30}>
                <div className={`h-full rounded-3xl border ${category.borderColor} bg-gradient-to-br ${category.gradient} p-6 backdrop-blur-md transition-all hover:scale-[1.02]`}>
                  <div className="mb-4 flex items-center gap-3">
                    <div className={`rounded-xl border ${category.borderColor} bg-black/40 p-3 ${category.textColor}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold uppercase tracking-wider text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-black/30 px-3.5 py-1.5 text-xs font-semibold text-[#D7E2EA] transition-colors hover:border-white/30 hover:bg-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
