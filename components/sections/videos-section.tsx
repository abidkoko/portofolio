"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Play, X, ExternalLink } from "lucide-react"

const videos = [
  {
    id: 1,
    title: "Smart RC Car Demo",
    description: "Full demonstration of WiFi-controlled RC car with FPV camera streaming and obstacle avoidance.",
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "5:32",
  },
  {
    id: 2,
    title: "ESP32 Security Camera Setup",
    description: "Step-by-step guide on building a motion-activated security camera with cloud integration.",
    thumbnail: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=450&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "12:45",
  },
]

function VideoCard({ video, index, onClick }: { video: typeof videos[0]; index: number; onClick: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="relative glass rounded-2xl overflow-hidden border border-cyan-500/10 group-hover:border-cyan-500/40 transition-all duration-500">
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden">
          <motion.img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
          
          {/* Play button */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0.8, scale: isHovered ? 1.1 : 1 }}
          >
            <div className="w-16 h-16 rounded-full bg-cyan-500/90 flex items-center justify-center neon-glow-sm">
              <Play className="w-7 h-7 text-white ml-1" fill="white" />
            </div>
          </motion.div>

          {/* Duration badge */}
          <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 rounded text-xs text-white font-mono">
            {video.duration}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
            {video.title}
          </h4>
          <p className="mt-2 text-sm text-gray-400 line-clamp-2">
            {video.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

function VideoModal({ video, onClose }: { video: typeof videos[0] | null; onClose: () => void }) {
  if (!video) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-5xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 p-2 rounded-full bg-gray-900/80 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Video */}
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-cyan-500/20">
            <iframe
              src={video.videoUrl}
              title={video.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Info */}
          <div className="mt-4 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-white">{video.title}</h3>
              <p className="text-sm text-gray-400 mt-1">{video.description}</p>
            </div>
            <a
              href={video.videoUrl.replace("embed/", "watch?v=")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              YouTube
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export function VideosSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null)

  return (
    <section id="videos" className="relative py-24 overflow-hidden">
      {/* Background */}
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
            {"// Galeri Video"}
          </h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-white">
            Demonstrasi <span className="gradient-text">Proyek</span>
          </h3>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Lihat proyek saya beraksi—mulai dari demo elektronika hingga tutorial coding dan penjelasan proses pembuatan.
          </p>
        </motion.div>

        {/* Videos grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {videos.map((video, index) => (
            <VideoCard
              key={video.id}
              video={video}
              index={index}
              onClick={() => setSelectedVideo(video)}
            />
          ))}
        </div>
      </div>

      {/* Video modal */}
      {selectedVideo && (
        <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
      )}
    </section>
  )
}
