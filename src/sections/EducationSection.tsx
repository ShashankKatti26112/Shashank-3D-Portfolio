import FadeIn from '../components/FadeIn'
import { GraduationCap, Award, Trophy, Languages, CheckCircle2 } from 'lucide-react'

const EDUCATION = [
  {
    degree: 'Master of Computer Applications (MCA) in AI/ML',
    institution: 'BMS Institute of Technology and Management, Bangalore',
    dates: 'Feb 2023 – May 2025',
    gpa: '7.16 / 10',
    specialization: 'Artificial Intelligence & Machine Learning',
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: "KLE'S PC Jabin Science College, Hubli",
    dates: 'Jun 2019 – Aug 2022',
    gpa: '7.15 / 10',
    specialization: 'Computer Science & Software Development',
  },
  {
    degree: 'Associate Degree in Science (PCMB)',
    institution: 'ICS Mahesh PU College, Hubli',
    dates: 'Jul 2017 – Apr 2019',
    gpa: 'Science Stream (Physics, Chemistry, Math, Biology)',
    specialization: 'Pre-University Education',
  },
]

const CERTIFICATIONS = [
  'Google Cybersecurity Professional Certificate',
  'Tata Group – Cybersecurity Analyst Job Simulation',
  'Connect and Protect: Networks & Security – Google Cybersecurity',
  'Play It Safe: Manage Security Risks – Google Cybersecurity',
  'Introduction to Zero Trust and Best Practice Frameworks',
  'Java Programming Specialization – Udemy',
  'Google Cloud Professional Certifications',
  'CCNA Certification (In Progress)',
]

const AWARDS = [
  { name: 'AWS ML Zelestra Hackathon', result: 'Participant' },
  { name: 'NSTSCE National Exam', result: 'Third Place' },
  { name: 'Tech Transform Competition', result: 'Logo Designing Winner' },
]

const LANGUAGES = [
  { language: 'English', proficiency: 'Professional Working Proficiency' },
  { language: 'Kannada', proficiency: 'Native / Full Professional Proficiency' },
]

export default function EducationSection() {
  return (
    <section id="education" className="relative bg-[#0C0C0C] px-5 py-20 sm:px-8 md:px-10">
      <div className="mx-auto max-w-6xl">
        <FadeIn
          as="h2"
          delay={0}
          y={40}
          className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 140px)' }}
        >
          Education & Certs
        </FadeIn>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Education List */}
          <FadeIn delay={0.1} y={30}>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8">
              <div className="mb-6 flex items-center gap-3 text-purple-400">
                <GraduationCap className="h-7 w-7" />
                <h3 className="text-2xl font-extrabold uppercase text-white">Education</h3>
              </div>

              <div className="space-y-6">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="border-b border-white/10 pb-6 last:border-none last:pb-0">
                    <span className="text-xs font-semibold uppercase tracking-wider text-pink-400">{edu.dates}</span>
                    <h4 className="text-lg font-bold text-white mt-1">{edu.degree}</h4>
                    <p className="text-sm font-semibold text-purple-300">{edu.institution}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-[#D7E2EA]/70">
                      <span className="rounded-full bg-white/10 px-3 py-1 font-semibold text-white">GPA: {edu.gpa}</span>
                      <span>{edu.specialization}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Certifications List */}
          <FadeIn delay={0.2} y={30}>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8">
              <div className="mb-6 flex items-center gap-3 text-emerald-400">
                <Award className="h-7 w-7" />
                <h3 className="text-2xl font-extrabold uppercase text-white">Certifications & Honors</h3>
              </div>

              <div className="space-y-3">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div key={idx} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 p-3.5">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
                    <span className="text-sm font-semibold text-[#D7E2EA]">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Awards & Languages */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Awards */}
          <FadeIn delay={0.3} y={30}>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8">
              <div className="mb-6 flex items-center gap-3 text-amber-400">
                <Trophy className="h-7 w-7" />
                <h3 className="text-2xl font-extrabold uppercase text-white">Awards & Recognition</h3>
              </div>

              <div className="space-y-4">
                {AWARDS.map((award, idx) => (
                  <div key={idx} className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 p-4">
                    <span className="text-base font-bold text-white">{award.name}</span>
                    <span className="rounded-full bg-amber-500/20 px-3.5 py-1 text-xs font-semibold text-amber-300">
                      {award.result}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Languages */}
          <FadeIn delay={0.4} y={30}>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8">
              <div className="mb-6 flex items-center gap-3 text-cyan-400">
                <Languages className="h-7 w-7" />
                <h3 className="text-2xl font-extrabold uppercase text-white">Languages</h3>
              </div>

              <div className="space-y-4">
                {LANGUAGES.map((lang, idx) => (
                  <div key={idx} className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 p-4">
                    <span className="text-base font-bold text-white">{lang.language}</span>
                    <span className="text-xs font-semibold text-cyan-300">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
