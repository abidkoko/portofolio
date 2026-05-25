"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Play, X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Smart RC Car with FPV",
    description: "A WiFi-controlled RC car with real-time FPV camera streaming using ESP32-CAM. Features obstacle avoidance, speed control, and a custom mobile app.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    technologies: ["ESP32-CAM", "Arduino", "React Native", "WebSocket"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 2,
    title: "ESP32-CAM Security System",
    description: "Motion-activated security camera with cloud storage, Telegram alerts, and night vision. Includes web dashboard for live monitoring.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    technologies: ["ESP32-CAM", "Firebase", "Node.js", "Telegram Bot"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 3,
    title: "IoT Dashboard Platform",
    description: "Real-time IoT monitoring dashboard with MQTT integration, data visualization, and device management. Supports multiple sensor types.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    technologies: ["React", "Node.js", "MQTT", "InfluxDB", "Grafana"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 4,
    title: "Smart Home Controller",
    description: "Comprehensive smart home system with voice control, scheduling, and energy monitoring. Controls lights, AC, and security systems.",
    image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=800&h=600&fit=crop",
    video: null,
    technologies: ["ESP32", "Home Assistant", "MQTT", "React"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 5,
    title: "Automated Plant Watering",
    description: "IoT-based plant monitoring and automatic watering system with soil moisture sensing, weather integration, and mobile notifications.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
    video: null,
    technologies: ["Arduino", "ESP8266", "Blynk", "Sensors"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 6,
    title: "Custom PCB Power Supply",
    description: "Designed and manufactured a versatile bench power supply with digital display, multiple outputs, and protection circuits.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    video: null,
    technologies: ["KiCad", "SMD", "Buck Converter", "LCD"],
    demoUrl: null,
    githubUrl: "https://github.com",
    featured: false,
  },
]

function ProjectCard({ project, onClick }: { project: typeof projects[0]; onClick: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="group relative cursor-pointer"
      onClick={onClick}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-cyan-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative glass rounded-2xl overflow-hidden border border-cyan-500/10 group-hover:border-cyan-500/40 transition-all duration-500">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
          
          {/* Play button for video projects */}
          {project.video && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-16 h-16 rounded-full bg-cyan-500/90 flex items-center justify-center neon-glow-sm">
                <Play className="w-7 h-7 text-white ml-1" />
              </div>
            </div>
          )}

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-4 left-4 px-3 py-1 text-xs font-medium bg-cyan-500 text-[#050816] rounded-full">
              Unggulan
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h4 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h4>
          <p className="mt-2 text-gray-400 text-sm line-clamp-2">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-cyan-500/10 text-cyan-400 rounded-md border border-cyan-500/20"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 text-xs text-gray-500">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="mt-4 flex gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Demo
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ProjectModal({ project, onClose }: { project: typeof projects[0] | null; onClose: () => void }) {
  if (!project) return null

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
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass rounded-2xl border border-cyan-500/20"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-900/80 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Video or Image */}
          <div className="relative aspect-video">
            {project.video ? (
              <iframe
                src={project.video}
                title={project.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            )}
          </div>

          {/* Content */}
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <p className="mt-4 text-gray-300 leading-relaxed">{project.description}</p>

            {/* Technologies */}
            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-400 mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm bg-cyan-500/10 text-cyan-400 rounded-lg border border-cyan-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex gap-4">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-cyan-500 text-[#050816] font-semibold rounded-lg hover:bg-cyan-400 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 glass border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:border-cyan-500/60 transition-colors"
              >
                <Github className="w-4 h-4" />
                View Code
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [filter, setFilter] = useState<"all" | "featured">("all")

  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.featured)

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-cyan-500/5" />

      <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-cyan-400 tracking-wider uppercase mb-4">
            {"// Proyek"}
          </h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-white">
            Proyek <span className="gradient-text">Unggulan</span>
          </h3>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Kumpulan proyek elektronika, IoT, dan pengembangan web yang menunjukkan keterampilan dan semangat saya dalam inovasi.
          </p>

          {/* Filter buttons */}
          <div className="mt-8 flex justify-center gap-4">
            {["all", "featured"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as "all" | "featured")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === f
                    ? "bg-cyan-500 text-[#050816]"
                    : "glass text-gray-400 hover:text-white border border-cyan-500/20"
                }`}
              >
                {f === "all" ? "Semua Proyek" : "Unggulan"}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Project modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  )
}
