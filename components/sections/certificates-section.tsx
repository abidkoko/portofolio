"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Award, X, ExternalLink, Calendar } from "lucide-react"
import Image from "next/image"

const certificates = [
  {
    id: 1,
    title: "Lomba Kompetensi Siswa (LKS) Bidang Electronics",
    issuer: "Kementrian Menteri Pendidikan Dasar dan Menengah",
    date: "2025",
    image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=800&h=600&fit=crop",
    description: "Juara 1 dalam kompetisi elektronika tingkat Kabupaten/Kota Bandung, menunjukan keunggulan dalam desain rangkaian dan demonstari.",
    credential: "LKS-2025-GOLD-001",
  },
  {
    id: 2,
    title: "ESP32 IoT Development",
    issuer: "Espressif Systems",
    date: "2023",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
    description: "Professional certification in ESP32 development including WiFi, Bluetooth, and sensor integration.",
    credential: "ESP-IOT-PRO-2023",
  },
]

function CertificateCard({ cert, index, onClick }: { cert: typeof certificates[0]; index: number; onClick: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="relative glass rounded-2xl overflow-hidden border border-cyan-500/10 group-hover:border-cyan-500/40 transition-all duration-500">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Image */}
        <div className="relative h-40 overflow-hidden">
          <Image
            src={cert.image}
            alt={cert.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050816] to-transparent" />
          
          {/* Award icon */}
          <div className="absolute top-4 right-4">
            <div className="p-2 rounded-full bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30">
              <Award className="w-4 h-4 text-cyan-400" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
            <Calendar className="w-3 h-3" />
            {cert.date}
          </div>
          <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors line-clamp-1">
            {cert.title}
          </h4>
          <p className="text-sm text-cyan-400/80 mt-1">{cert.issuer}</p>
        </div>
      </div>
    </motion.div>
  )
}

function CertificateModal({ cert, onClose }: { cert: typeof certificates[0] | null; onClose: () => void }) {
  if (!cert) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-2xl glass rounded-2xl border border-cyan-500/20 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-900/80 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image */}
          <div className="relative aspect-[4/3]">
            <Image
              src={cert.image}
              alt={cert.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                <Award className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <p className="text-sm text-cyan-400">{cert.issuer}</p>
                <p className="text-xs text-gray-500">{cert.date}</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white">{cert.title}</h3>
            <p className="mt-4 text-gray-300 leading-relaxed">{cert.description}</p>

            <div className="mt-6 p-4 rounded-lg bg-cyan-500/5 border border-cyan-500/10">
              <p className="text-xs text-gray-500">Credential ID</p>
              <p className="text-sm font-mono text-cyan-400 mt-1">{cert.credential}</p>
            </div>

            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Verifikasi Sertifikat
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export function CertificatesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null)

  return (
    <section id="certificates" className="relative py-24 overflow-hidden">
      <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-cyan-400 tracking-wider uppercase mb-4">
            {"// Sertifikat"}
          </h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-white">
            Sertifikat & <span className="gradient-text">Penghargaan</span>
          </h3>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Pengakuan atas keahlian dan pembelajaran berkelanjutan saya di bidang elektronika,
            pengembangan IoT, dan rekayasa perangkat lunak.
          </p>
        </motion.div>

        {/* Certificates grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <CertificateCard
              key={cert.id}
              cert={cert}
              index={index}
              onClick={() => setSelectedCert(cert)}
            />
          ))}
        </div>
      </div>

      {/* Certificate modal */}
      {selectedCert && (
        <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
      )}
    </section>
  )
}
