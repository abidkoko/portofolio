"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { GraduationCap, Briefcase, Calendar, MapPin } from "lucide-react"

const timeline = [
  {
    year: "2026",
    title: "Praktik Kerja Lapangan",
    company: "PT PLN (Persero) GITET Bandung Selatan",
    location: "Bandung, Indonesia",
    description: "Membantu dalam pemeliharaan peralatan transmisi 500 kV dan Berpartisipasi dalam inspeksi sistem grounding dan kelistrikan.",
    type: "Kerja",
  },
  {
    year: "2026",
    title: "Teknik Elektronika",
    company: "SMK Negeri 1 Katapang",
    location: "Bandung, Indonesia",
    description: "Lulus dari SMK Negeri 1 Katpaang.",
    type: "Edukasi",
  },
]

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

      <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-cyan-400 tracking-wider uppercase mb-4">
            {"// Tentang Saya"}
          </h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-white">
            Ketahui Tentang <span className="gradient-text">Saya</span>
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 border border-cyan-500/20">
              <h4 className="text-2xl font-bold text-white mb-6">
                Teknik Elektronika
              </h4>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  {"I'm"} a passionate electronics engineer with over 5 years of experience
                  in designing and developing innovative embedded systems and IoT solutions.
                  My journey started with a curiosity for how things work, leading me to
                  explore the fascinating world of circuits and code.
                </p>
                <p>
                  I specialize in creating smart devices that bridge the physical and digital
                  worlds. From Arduino-based prototypes to production-ready ESP32 systems,
                  I love turning complex problems into elegant, efficient solutions.
                </p>
                <p>
                  Beyond hardware, I also enjoy crafting modern web experiences with
                  React and Next.js, creating intuitive interfaces for IoT dashboards
                  and control systems.
                </p>
              </div>

              {/* Quick info */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: "Lokasi", value: "Indonesia" },
                  { label: "Pengalaman", value: "3 Tahun" },
                  { label: "Spesialisasi", value: "IoT & Embedded" },
                  { label: "Bahasa", value: "ID, EN" },
                ].map((item) => (
                  <div key={item.label} className="p-4 rounded-lg bg-cyan-500/5 border border-cyan-500/10">
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{item.label}</p>
                    <p className="text-white font-medium mt-1">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 mt-6">
              {[
                { value: 5, suffix: "+", label: "Years Exp" },
                { value: 50, suffix: "+", label: "Projects" },
                { value: 20, suffix: "+", label: "Certificates" },
                { value: 100, suffix: "%", label: "Dedication" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="glass rounded-xl p-4 text-center border border-cyan-500/20"
                >
                  <p className="text-2xl font-bold text-cyan-400">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-cyan-400" />
              Pengalaman & Edukasi
            </h4>

            {/* Timeline line */}
            <div className="absolute left-6 top-20 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-cyan-500/50 to-transparent" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="relative pl-16"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-2 w-5 h-5 rounded-full bg-[#050816] border-2 border-cyan-500 flex items-center justify-center">
                    {item.type === "education" ? (
                      <GraduationCap className="w-2.5 h-2.5 text-cyan-400" />
                    ) : (
                      <Briefcase className="w-2.5 h-2.5 text-cyan-400" />
                    )}
                  </div>

                  {/* Content card */}
                  <div className="glass rounded-xl p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-colors group">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="px-3 py-1 text-xs font-mono bg-cyan-500/10 text-cyan-400 rounded-full">
                        {item.year}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </span>
                    </div>
                    <h5 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h5>
                    <p className="text-cyan-400/80 text-sm mt-1">{item.company}</p>
                    <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
