"use client"

import { useEffect, useState } from "react"

export function AnimeBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Gradient Background */}
      <div 
        className="fixed inset-0 -z-10 opacity-30"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #667eea 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradient-shift 15s ease infinite',
        }}
      />

      {/* Anime Stars */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        {Array.from({ length: 30 }, (_, i) => {
          const size = Math.random() * 3 + 2
          const left = Math.random() * 100
          const top = Math.random() * 100
          const delay = Math.random() * 3
          const duration = Math.random() * 2 + 2

          return (
            <div
              key={`star-${i}`}
              className="absolute"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: `${size}px`,
                height: `${size}px`,
                animation: `twinkle ${duration}s ease-in-out ${delay}s infinite`,
              }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                <path d="M12 0l3.09 6.26L22 7.27l-5 4.87 1.18 6.88L12 15.77l-6.18 3.25L7 12.14 2 7.27l6.91-1.01L12 0z" />
              </svg>
            </div>
          )
        })}
      </div>

      {/* Sakura Petals */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {Array.from({ length: 20 }, (_, i) => {
          const left = Math.random() * 100
          const delay = Math.random() * 5
          const duration = Math.random() * 10 + 15
          const size = Math.random() * 20 + 15

          return (
            <div
              key={`sakura-${i}`}
              className="absolute -top-5 opacity-70"
              style={{
                left: `${left}%`,
                animation: `sakura-fall ${duration}s linear ${delay}s infinite`,
              }}
            >
              <svg
                width={size}
                height={size}
                viewBox="0 0 100 100"
                fill="none"
                className="drop-shadow-lg"
              >
                {/* Sakura petal shape */}
                <path
                  d="M50 20 Q30 30 30 50 Q30 70 50 80 Q70 70 70 50 Q70 30 50 20Z"
                  fill="#ff91cc"
                  opacity="0.9"
                />
                <path
                  d="M50 25 Q35 33 35 50 Q35 67 50 75 Q65 67 65 50 Q65 33 50 25Z"
                  fill="#ffb3d9"
                  opacity="0.7"
                />
                <circle cx="50" cy="50" r="5" fill="#ffe0f0" />
              </svg>
            </div>
          )
        })}
      </div>

      {/* Glowing orbs (anime light effects) */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        {Array.from({ length: 5 }, (_, i) => {
          const size = Math.random() * 150 + 100
          const left = Math.random() * 100
          const top = Math.random() * 100
          const hue = Math.random() * 60 + 300 // Pink to purple range

          return (
            <div
              key={`orb-${i}`}
              className="absolute rounded-full blur-3xl"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: `${size}px`,
                height: `${size}px`,
                background: `radial-gradient(circle, hsla(${hue}, 100%, 70%, 0.15) 0%, transparent 70%)`,
              }}
            />
          )
        })}
      </div>
    </>
  )
}
