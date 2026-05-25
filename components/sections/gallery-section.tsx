"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { X, ZoomIn } from "lucide-react"
import Image from "next/image"

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    title: "PCB Design Workshop",
    category: "Workshop",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=800&fit=crop",
    title: "RC Car Assembly",
    category: "Projek",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&h=600&fit=crop",
    title: "Electronics Lab",
    category: "Lab",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=800&fit=crop",
    title: "Soldering Session",
    category: "Workshop",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=600&fit=crop",
    title: "Arduino Projects",
    category: "Projek",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",
    title: "IoT Devices",
    category: "Projek",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1597424216809-3ba9864aeb18?w=600&h=800&fit=crop",
    title: "Circuit Testing",
    category: "Lab",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    title: "Dashboard Development",
    category: "Pemograman",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=800&h=600&fit=crop",
    title: "Competition Day",
    category: "Acara",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=800&fit=crop",
    title: "Team Collaboration",
    category: "Acara",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=800&h=600&fit=crop",
    title: "Smart Home Setup",
    category: "Projek",
  },
]

const categories = ["All", "Projek", "Lab", "Workshop", "Acara", "Pemograman"]

function GalleryImage({ image, index, onClick }: { image: typeof galleryImages[0]; index: number; onClick: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true })

  // Determine if image should be tall (for masonry effect)
  const isTall = index % 3 === 1

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      className={`group relative cursor-pointer ${isTall ? "row-span-2" : ""}`}
    >
      <div className="relative h-full min-h-[200px] rounded-2xl overflow-hidden border border-cyan-500/10 group-hover:border-cyan-500/40 transition-all duration-500">
        <Image
          src={image.src}
          alt={image.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="text-xs text-cyan-400 font-medium">{image.category}</span>
          <h4 className="text-white font-semibold mt-1">{image.title}</h4>
        </div>

        {/* Zoom icon */}
        <div className="absolute top-4 right-4 p-2 rounded-full bg-cyan-500/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
          <ZoomIn className="w-4 h-4 text-cyan-400" />
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-2xl ring-2 ring-cyan-500/0 group-hover:ring-cyan-500/50 transition-all duration-500" />
      </div>
    </motion.div>
  )
}

function LightboxModal({ image, onClose, onPrev, onNext }: { 
  image: typeof galleryImages[0] | null; 
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  if (!image) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-900/80 text-gray-400 hover:text-white transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Navigation buttons */}
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full glass text-white hover:bg-cyan-500/20 transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full glass text-white hover:bg-cyan-500/20 transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative max-w-5xl max-h-[80vh] w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-cyan-500/20">
            <Image
              src={image.src}
              alt={image.title}
              fill
              className="object-contain"
            />
          </div>
          
          {/* Caption */}
          <div className="mt-4 text-center">
            <span className="text-sm text-cyan-400">{image.category}</span>
            <h3 className="text-xl font-bold text-white mt-1">{image.title}</h3>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export function GallerySection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)
  const [filter, setFilter] = useState("All")

  const filteredImages = filter === "All" 
    ? galleryImages 
    : galleryImages.filter((img) => img.category === filter)

  const handlePrev = () => {
    if (!selectedImage) return
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id)
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1
    setSelectedImage(filteredImages[prevIndex])
  }

  const handleNext = () => {
    if (!selectedImage) return
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id)
    const nextIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1
    setSelectedImage(filteredImages[nextIndex])
  }

  return (
    <section id="gallery" className="relative py-24 overflow-hidden">
      <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-cyan-400 tracking-wider uppercase mb-4">
            {"// Galeri"}
          </h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-white">
            Di balik <span className="gradient-text">Layar</span>
          </h3>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Sekilas tentang ruang kerja, proyek, dan perjalanan saya dalam mewujudkan ide menjadi kenyataan.
          </p>

          {/* Filter buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-cyan-500 text-[#050816]"
                    : "glass text-gray-400 hover:text-white border border-cyan-500/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {filteredImages.map((image, index) => (
            <GalleryImage
              key={image.id}
              image={image}
              index={index}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {selectedImage && (
        <LightboxModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  )
}
