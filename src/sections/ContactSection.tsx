import { useState, type FormEvent } from 'react'
import FadeIn from '../components/FadeIn'
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2 } from 'lucide-react'

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 4000)
  }

  return (
    <section id="contact" className="relative bg-[#0C0C0C] px-5 py-20 sm:px-8 md:px-10 border-t border-white/10">
      <div className="mx-auto max-w-6xl">
        <FadeIn
          as="h2"
          delay={0}
          y={40}
          className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 140px)' }}
        >
          Get In Touch
        </FadeIn>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Details & Links */}
          <FadeIn delay={0.1} y={30} className="flex flex-col justify-between space-y-8">
            <div>
              <h3 className="text-2xl font-extrabold uppercase text-white sm:text-3xl">
                Let&apos;s Build Scalable Solutions Together
              </h3>
              <p className="mt-4 text-base font-normal text-[#D7E2EA]/80 leading-relaxed">
                Whether you have an enterprise full-stack web/mobile application, a machine learning pipeline, or seeking a remote Senior Developer ($65,000+), I&apos;m ready to connect!
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:shashankkatti268@gmail.com"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-white transition-all hover:border-purple-500/50 hover:bg-white/10"
              >
                <div className="rounded-xl bg-purple-500/20 p-3 text-purple-400">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/60">Email Address</div>
                  <div className="text-base font-bold sm:text-lg">shashankkatti268@gmail.com</div>
                </div>
              </a>

              <a
                href="tel:+918431202840"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-white transition-all hover:border-pink-500/50 hover:bg-white/10"
              >
                <div className="rounded-xl bg-pink-500/20 p-3 text-pink-400">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/60">Phone Number</div>
                  <div className="text-base font-bold sm:text-lg">+91 8431202840</div>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-white">
                <div className="rounded-xl bg-emerald-500/20 p-3 text-emerald-400">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/60">Location</div>
                  <div className="text-base font-bold sm:text-lg">Bengaluru, India (Remote Available)</div>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://linkedin.com/in/shashankkatti20"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#0A66C2]"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href="https://shashankkatti26112.github.io/My-Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-purple-600"
              >
                <Github className="h-4 w-4" /> GitHub Portfolio
              </a>
            </div>
          </FadeIn>

          {/* Interactive Contact Form */}
          <FadeIn delay={0.2} y={30}>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8">
              {submitted ? (
                <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
                  <CheckCircle2 className="h-16 w-16 text-emerald-400 mb-4 animate-bounce" />
                  <h4 className="text-2xl font-bold text-white">Message Sent Successfully!</h4>
                  <p className="mt-2 text-sm text-[#D7E2EA]/70">
                    Thank you for reaching out, Shashank Katti will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h4 className="text-xl font-bold text-white mb-2">Send a Direct Message</h4>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/30 focus:border-purple-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/30 focus:border-purple-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">Message</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Hi Shashank, I'd like to discuss a project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/30 focus:border-purple-500 focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-base font-bold uppercase tracking-wider text-white transition-all shadow-lg"
                    style={{
                      background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                      boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
                    }}
                  >
                    <Send className="h-5 w-5" /> Send Message
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>

        {/* Footer info */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-white/50">
          <div>© {new Date().getFullYear()} Shashank Katti. All rights reserved.</div>
          <div>Designed & Built with React, TypeScript & Tailwind CSS</div>
        </div>
      </div>
    </section>
  )
}
