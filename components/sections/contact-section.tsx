"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Send, Mail, MessageSquare, MapPin, Phone, Github, Linkedin, Instagram, Twitter } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "btlabd52@email.com",
    href: "mailto:btlabd52@email.com",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+62 812 2343 2566",
    href: "https://wa.me/6281223432566",
  },
  {
    icon: MapPin,
    label: "Lokasi",
    value: "Bandung, Indonesia",
    href: "#",
  },
]

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", color: "hover:bg-blue-600" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/abidmauna", color: "hover:bg-pink-600" },
]

export function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
    setFormState({ name: "", email: "", subject: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-cyan-500/5 to-transparent" />
      </div>

      <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-cyan-400 tracking-wider uppercase mb-4">
            {"// Kontak"}
          </h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-white">
            {"Mari"} <span className="gradient-text">Terhubung</span>
          </h3>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Punya proyek yang ingin dibuat atau ingin berbincang? Saya dengan senang hati ingin mendengar dari Anda.
            Isi formulir di bawah atau hubungi saya melalui media sosial.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 border border-cyan-500/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                  <MessageSquare className="w-5 h-5 text-cyan-400" />
                </div>
                <h4 className="text-xl font-semibold text-white">Send a Message</h4>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                      Nama Kamu
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-cyan-500/5 border border-cyan-500/20 text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all"
                      placeholder="Koko Ganteng"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                      Email Kamu
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-cyan-500/5 border border-cyan-500/20 text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all"
                      placeholder="ayoayoo@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm text-gray-400 mb-2">
                    Judul
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-cyan-500/5 border border-cyan-500/20 text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all"
                    placeholder="Diskusi Proyek"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-cyan-500/5 border border-cyan-500/20 text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none"
                    placeholder="Beri tahu saya tentang projek..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
                    submitted
                      ? "bg-green-500 text-white"
                      : "bg-gradient-to-r from-cyan-500 to-cyan-400 text-[#050816] hover:shadow-lg hover:shadow-cyan-500/30"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-[#050816] border-t-transparent rounded-full animate-spin" />
                  ) : submitted ? (
                    <>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Pesan Terkirim !
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Kirim Pesan
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Contact cards */}
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ x: 10 }}
                className="group block glass rounded-2xl p-6 border border-cyan-500/10 hover:border-cyan-500/40 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-xl bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
                    <info.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{info.label}</p>
                    <p className="text-lg text-white font-medium group-hover:text-cyan-400 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="glass rounded-2xl p-6 border border-cyan-500/20"
            >
              <h4 className="text-lg font-semibold text-white mb-4">Connect on Social</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 ${social.color} hover:text-white transition-all`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="glass rounded-2xl p-6 border border-cyan-500/20"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping" />
                </div>
                <div>
                  <p className="text-white font-medium">Saat Ini Tersedia</p>
                  <p className="text-sm text-gray-400">Terbuka untuk freelance & kolaborasi</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
