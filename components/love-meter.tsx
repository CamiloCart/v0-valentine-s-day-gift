"use client"

import { useState } from "react"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const messages = [
  { level: 0, text: "Click to measure your love!", emoji: "?" },
  { level: 20, text: "A sprinkle of love detected...", emoji: "Hmm" },
  { level: 40, text: "Love levels are rising!", emoji: "Ooh" },
  { level: 60, text: "Significant love detected!", emoji: "Wow" },
  { level: 80, text: "CRITICAL LOVE OVERLOAD!", emoji: "OMG" },
  { level: 100, text: "THE LOVE METER IS BROKEN! TOO MUCH LOVE!", emoji: "BOOM" },
]

export function LoveMeter() {
  const [level, setLevel] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number }[]>([])

  const currentMessage = messages.reduce((prev, curr) =>
    level >= curr.level ? curr : prev
  )

  const handlePump = () => {
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 300)

    const newLevel = Math.min(level + Math.floor(Math.random() * 15) + 8, 100)
    setLevel(newLevel)

    const newSparkles = Array.from({ length: 5 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
    }))
    setSparkles((prev) => [...prev, ...newSparkles])
    setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => !newSparkles.find((ns) => ns.id === s.id)))
    }, 1000)
  }

  const reset = () => {
    setLevel(0)
    setSparkles([])
  }

  return (
    <section className="relative px-4 py-16">
      <div className="mx-auto max-w-md text-center">
        <h2 className="mb-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
          Love-O-Meter
        </h2>
        <p className="mb-8 text-muted-foreground">
          How much love is in the air? Pump it up to find out!
        </p>

        <div className="relative mx-auto mb-8 flex flex-col items-center">
          {/* Meter bar */}
          <div className="relative h-64 w-16 overflow-hidden rounded-full border-4 border-primary/30 bg-card">
            <div
              className="absolute bottom-0 w-full rounded-full bg-primary transition-all duration-500 ease-out"
              style={{ height: `${level}%` }}
            />
            {/* Tick marks */}
            {[20, 40, 60, 80].map((tick) => (
              <div
                key={tick}
                className="absolute left-0 right-0 border-t border-primary/20"
                style={{ bottom: `${tick}%` }}
              />
            ))}
          </div>

          {/* Sparkles */}
          {sparkles.map((sparkle) => (
            <div
              key={sparkle.id}
              className="pointer-events-none absolute text-accent"
              style={{
                left: `calc(50% + ${sparkle.x}px)`,
                top: `calc(50% + ${sparkle.y}px)`,
                animation: "sparkle 1s ease-out forwards",
              }}
            >
              <Heart className="h-4 w-4 fill-current" />
            </div>
          ))}

          {/* Level display */}
          <div className="mt-4 text-5xl font-bold text-primary">
            {level}%
          </div>
        </div>

        <p
          className={`mb-6 text-lg font-semibold text-foreground transition-all ${
            isAnimating ? "scale-110" : "scale-100"
          }`}
        >
          <span className="mr-2 text-2xl">{currentMessage.emoji}</span>
          {currentMessage.text}
        </p>

        <div className="flex items-center justify-center gap-4">
          <Button
            onClick={handlePump}
            disabled={level >= 100}
            size="lg"
            className={`bg-primary text-primary-foreground ${
              isAnimating ? "scale-95" : "scale-100"
            } transition-transform`}
          >
            <Heart className={`mr-2 h-5 w-5 ${level >= 100 ? "animate-heartbeat" : ""}`} />
            {level >= 100 ? "MAX LOVE!" : "Pump Love!"}
          </Button>
          {level > 0 && (
            <Button variant="outline" onClick={reset} size="lg">
              Reset
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
