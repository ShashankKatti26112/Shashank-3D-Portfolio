import { useEffect, useRef, useState } from 'react'

const SKILLS_ROW_ONE = [
  'React.js',
  'Node.js',
  'Python',
  'AWS (EC2, S3, Lambda)',
  'PostgreSQL',
  'React Native',
  'Next.js',
  'TypeScript',
  'Docker',
  'MongoDB',
  'Microservices',
]

const SKILLS_ROW_TWO = [
  'Java',
  'Kotlin',
  'Spring Boot',
  'Flask',
  'TensorFlow',
  'Scikit-learn',
  'JWT Auth & OAuth',
  'RESTful APIs',
  'CI/CD Pipelines',
  'Tailwind CSS',
  'Git',
]

const TRIPLE_ONE = [...SKILLS_ROW_ONE, ...SKILLS_ROW_ONE, ...SKILLS_ROW_ONE]
const TRIPLE_TWO = [...SKILLS_ROW_TWO, ...SKILLS_ROW_TWO, ...SKILLS_ROW_TWO]

function SkillRow({
  skills,
  transform,
}: {
  skills: string[]
  transform: string
}) {
  return (
    <div className="flex gap-4" style={{ transform, willChange: 'transform' }}>
      {skills.map((skill, index) => (
        <div
          key={`${skill}-${index}`}
          className="flex shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-3 text-base font-semibold uppercase tracking-wider text-[#D7E2EA] backdrop-blur-md transition-all hover:border-[#B600A8] hover:bg-[#B600A8]/20 sm:text-lg"
        >
          <span className="mr-2 text-purple-400">⚡</span> {skill}
        </div>
      ))}
    </div>
  )
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const sectionTop = sectionRef.current?.offsetTop ?? 0
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.25)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[#0C0C0C] py-12 sm:py-16 md:py-20"
    >
      <div className="flex flex-col gap-4">
        <SkillRow skills={TRIPLE_ONE} transform={`translateX(${offset - 300}px)`} />
        <SkillRow skills={TRIPLE_TWO} transform={`translateX(${-(offset - 300)}px)`} />
      </div>
    </section>
  )
}
