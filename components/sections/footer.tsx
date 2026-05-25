"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, Twitter, Mail, ArrowUp, Heart } from "lucide-react"

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/abidmauna" },
]

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Tentang Saya", href: "#about" },
  { label: "Keahlian Teknis", href: "#skills" },
  { label: "Proyek", href: "#projects" },
  { label: "Kontak", href: "#contact" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-gray-800">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 border-2 border-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold text-cyan-400">MAM</span>
              </div>
              <span className="text-xl font-semibold text-white">
                Muhamad Abid<span className="text-cyan-400"> Maulana</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Teknik elektronika yang bersemangat dalam menciptakan solusi IoT inovatif.
              Mengubah ide menjadi kenyataan melalui kode dan rangkaian elektronika.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Mari Terhubung</h4>
            <p className="text-gray-400 mb-4">
              Jangan ragu untuk menghubungi saya untuk kolaborasi atau sekadar menyapa!
            </p>
            <a
              href="mailto:ahmad.rizky@email.com"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Mail className="w-4 h-4" />
              btlabd52@email.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-500 text-sm flex items-center gap-1"
          >
            © {currentYear} Muhamad Abid Maulana. Made with
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            in Indonesia
          </motion.p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 glass rounded-xl text-cyan-400 border border-cyan-500/20 hover:border-cyan-500/40 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
