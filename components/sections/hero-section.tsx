"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Download, Play, ChevronDown, Cpu, Zap, Code2 } from "lucide-react"

const roles = [
  "Teknik Elektronika",
  "Pengembang IoT",
  "Electronics Enthusiast",
  "Dasar PLC dan Mikrokontroler",
  "Instalasi/Perakitan Kabel Listrik",
]

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayedText.length < currentRole.length) {
            setDisplayedText(currentRole.slice(0, displayedText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayedText.length > 0) {
            setDisplayedText(displayedText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setRoleIndex((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, roleIndex])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Animated background lights */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">Tersedia untuk Proyek</span>
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">{"Halo, saya"}</span>
                <br />
                <span className="gradient-text text-glow">Muhamad Abid Maulana</span>
              </h1>
            </motion.div>

            {/* Typing subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 h-8"
            >
              <p className="text-xl sm:text-2xl text-cyan-400 font-mono">
                {"< "}{displayedText}
                <span className="animate-pulse">|</span>
                {" />"}
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-6 text-gray-400 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Teknik elektronika yang bersemangat dalam menciptakan solusi IoT inovatif, sistem embedded.
              Mengubah ide menjadi kenyataan melalui kode dan rangkaian elektronika.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="/CV_M_ABID.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-xl font-semibold text-[#050816] overflow-hidden transition-all hover:shadow-lg hover:shadow-cyan-500/30"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download CV
                </span>

                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>

              <motion.button
                onClick={() => scrollToSection("projects")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 glass rounded-xl font-semibold text-cyan-400 border border-cyan-500/30 hover:border-cyan-500/60 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <span className="flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Lihat Proyek
                </span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12 grid grid-cols-3 gap-8"
            >
            </motion.div>
          </motion.div>

          {/* Right content - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated rings */}
              <motion.div
                className="absolute inset-0 -m-8"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full border border-cyan-500/20" />
              </motion.div>
              <motion.div
                className="absolute inset-0 -m-16"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full border border-cyan-500/10 border-dashed" />
              </motion.div>

              {/* Profile card */}
              <motion.div
                whileHover={{ y: -10 }}
                className="relative w-72 sm:w-80 glass rounded-2xl p-6 border border-cyan-500/20"
              >
                {/* Profile image placeholder */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-cyan-500/20 to-cyan-400/10 mb-6">
                  <img
                    src="/pas foto.jpeg"
                    alt="Muhamad Abid Maulana"
                    className="w-full h-full object-cover"
                  />

                  {/* Decorative elements (tetap boleh) */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-cyan-500 rounded-full animate-pulse" />
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                </div>

                {/* Card content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white">Muhamad Abid Maulana</h3>
                  <p className="text-cyan-400 text-sm mt-1">Teknik Elektronika</p>
                </div>

                {/* Tech icons */}
                <div className="mt-6 flex justify-center gap-4">
                  {[Cpu, Zap, Code2].map((Icon, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>
                  ))}
                </div>

                {/* Status */}
                <div className="mt-6 pt-4 border-t border-gray-800">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    Berdomisili di Indonesia
                  </div>
                </div>
              </motion.div>

              {/* Floating tech badges */}
              {[
                { label: "Arduino", x: "-20%", y: "20%" },
                { label: "ESP32", x: "110%", y: "30%" },
                { label: "PLC", x: "-10%", y: "80%" },
              ].map((badge, i) => (
                <motion.div
                  key={badge.label}
                  className="absolute px-3 py-1.5 glass rounded-full text-xs font-medium text-cyan-400 border border-cyan-500/30"
                  style={{ left: badge.x, top: badge.y }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                >
                  {badge.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection("about")}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <span className="text-sm">Geser ke Bawah</span>
            <ChevronDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
