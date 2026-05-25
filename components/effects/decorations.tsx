"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface SectionDividerProps {
  className?: string
}

export function SectionDivider({ className = "" }: SectionDividerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className={`relative py-8 overflow-hidden ${className}`}>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-500 rounded-full"
      >
        <div className="absolute inset-0 bg-cyan-500 rounded-full animate-ping opacity-75" />
      </motion.div>
    </div>
  )
}

export function GlowingOrb({ 
  size = "md", 
  color = "cyan",
  className = "" 
}: { 
  size?: "sm" | "md" | "lg";
  color?: "cyan" | "blue" | "green";
  className?: string;
}) {
  const sizes = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96",
  }

  const colors = {
    cyan: "bg-cyan-500/20",
    blue: "bg-blue-500/20",
    green: "bg-green-500/20",
  }

  return (
    <div 
      className={`${sizes[size]} ${colors[color]} rounded-full blur-3xl animate-pulse ${className}`}
      style={{ animationDuration: "4s" }}
    />
  )
}

export function GridBackground() {
  return (
    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
  )
}

export function CircuitLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-5"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="circuit"
          x="0"
          y="0"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M10 10h80v80M10 50h40M50 10v40M90 50h-40M50 90v-40"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-cyan-500"
          />
          <circle cx="10" cy="10" r="2" className="fill-cyan-500" />
          <circle cx="90" cy="10" r="2" className="fill-cyan-500" />
          <circle cx="10" cy="90" r="2" className="fill-cyan-500" />
          <circle cx="90" cy="90" r="2" className="fill-cyan-500" />
          <circle cx="50" cy="50" r="3" className="fill-cyan-500" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)" />
    </svg>
  )
}

export function AnimatedText({ 
  text, 
  className = "",
  delay = 0 
}: { 
  text: string; 
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.3,
            delay: delay + index * 0.03,
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  )
}

export function NeonBorder({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-500" />
      <div className="relative">{children}</div>
    </div>
  )
}

export function TypewriterText({ 
  texts, 
  className = "" 
}: { 
  texts: string[]; 
  className?: string;
}) {
  return (
    <span className={className}>
      {/* Typewriter effect is handled by CSS */}
      <span className="border-r-2 border-cyan-400 pr-1 animate-pulse">
        {texts[0]}
      </span>
    </span>
  )
}
