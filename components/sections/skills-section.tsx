"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { 
  Cpu, 
  Wifi, 
  CircuitBoard, 
  Code, 
  Layers, 
  Terminal,
  Zap,
  Settings,
  Globe
} from "lucide-react"

const skills = [
  {
    name: "Arduino",
    icon: Cpu,
    level: 95,
    color: "#00d9ff",
    description: "Microcontroller programming & prototyping",
  },
  {
    name: "ESP32",
    icon: Wifi,
    level: 90,
    color: "#00d9ff",
    description: "WiFi/BLE IoT development",
  },
  {
    name: "IoT Development",
    icon: Globe,
    level: 88,
    color: "#00d9ff",
    description: "Connected device ecosystems",
  },
  {
    name: "PCB Design",
    icon: CircuitBoard,
    level: 85,
    color: "#00d9ff",
    description: "Schematic & PCB layout design",
  },
  {
    name: "Embedded Systems",
    icon: Layers,
    level: 92,
    color: "#00d9ff",
    description: "Low-level firmware development",
  },
  {
    name: "C/C++",
    icon: Code,
    level: 90,
    color: "#00d9ff",
    description: "Embedded & systems programming",
  },
  {
    name: "Electronics",
    icon: Zap,
    level: 95,
    color: "#00d9ff",
    description: "Circuit design & analysis",
  },
]

function SkillCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-cyan-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative glass rounded-2xl p-6 border border-cyan-500/10 group-hover:border-cyan-500/40 transition-all duration-500 h-full">
        {/* Icon */}
        <div className="relative mb-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-400/10 flex items-center justify-center group-hover:neon-glow-sm transition-all duration-500">
            <skill.icon className="w-7 h-7 text-cyan-400" />
          </div>
          {/* Glow effect on hover */}
          <div className="absolute inset-0 w-14 h-14 rounded-xl bg-cyan-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Content */}
        <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
          {skill.name}
        </h4>
        <p className="text-sm text-gray-400 mt-2 line-clamp-2">
          {skill.description}
        </p>

        {/* Progress bar */}
        <div className="mt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-gray-500">Proficiency</span>
            <span className="text-xs font-mono text-cyan-400">{skill.level}%</span>
          </div>
          <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400"
              initial={{ width: 0 }}
              animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
              transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl" />
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
            {"// Keahlian Teknis"}
          </h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-white">
            Pengalaman <span className="gradient-text">Saya</span>
          </h3>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Toolkit lengkap untuk membangun proyek elektronika inovatif, solusi IoT, dan aplikasi web modern.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 border border-cyan-500/20 max-w-3xl mx-auto">
            <h4 className="text-xl font-semibold text-white mb-4">
              Selalu Belajar, Selalu Berkembang
            </h4>
            <p className="text-gray-400">
              Teknologi berkembang dengan cepat, dan saya pun demikian. Saya terus mengeksplorasi framework, tools,
              dan metodologi baru untuk tetap berada di garis terdepan dalam pengembangan elektronika dan perangkat lunak.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {["MQTT", "LoRa", "Git"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm glass rounded-full text-cyan-400 border border-cyan-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
