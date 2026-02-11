"use client"

import { useState, useCallback } from "react"
import { PartyPopper } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Confetti {
  id: number
  x: number
  color: string
  delay: number
  size: number
  rotation: number
}

const colors = [
  "hsl(340, 82%, 52%)",
  "hsl(15, 90%, 58%)",
  "hsl(350, 60%, 70%)",
  "hsl(45, 90%, 60%)",
  "hsl(200, 70%, 55%)",
]

export function ConfettiButton() {
  const [confetti, setConfetti] = useState<Confetti[]>([])
  const [count, setCount] = useState(0)

  const messages = [
    "Sos amado/a!",
    "Sos increible!",
    "Haces el mundo mejor!",
    "Alguien piensa que sos maravilloso/a!",
    "Te mereces todos los abrazos!",
    "Tu sonrisa ilumina la habitacion!",
    "Segui siendo vos, hermoso/a!",
  ]

  const triggerConfetti = useCallback(() => {
    const pieces: Confetti[] = Array.from({ length: 50 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 0.5,
      size: Math.random() * 8 + 4,
      rotation: Math.random() * 360,
    }))
    setConfetti(pieces)
    setCount((c) => c + 1)

    setTimeout(() => setConfetti([]), 3000)
  }, [])

  return (
    <section className="relative px-4 py-16 overflow-hidden">
      {/* Confetti */}
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="pointer-events-none fixed z-50"
          style={{
            left: `${piece.x}%`,
            top: "-20px",
            width: `${piece.size}px`,
            height: `${piece.size * 1.5}px`,
            backgroundColor: piece.color,
            borderRadius: piece.size > 8 ? "50%" : "2px",
            transform: `rotate(${piece.rotation}deg)`,
            animation: `confetti-fall ${2 + Math.random() * 2}s linear ${piece.delay}s forwards`,
          }}
          aria-hidden="true"
        />
      ))}

      <div className="mx-auto max-w-md text-center">
        <h2 className="mb-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
          El Gran Boton
        </h2>
        <p className="mb-8 text-muted-foreground">
          Sabes que queres apretarlo. Dale. Hacelo.
        </p>

        <Button
          onClick={triggerConfetti}
          size="lg"
          className="h-16 bg-primary px-10 text-lg text-primary-foreground shadow-lg transition-all hover:scale-105 active:scale-95"
        >
          <PartyPopper className="mr-3 h-6 w-6" />
          FESTEJEMOS!
        </Button>

        {count > 0 && (
          <div className="mt-6" style={{ animation: "slide-up 0.5s ease-out" }}>
            <p className="text-lg font-bold text-primary">
              {messages[(count - 1) % messages.length]}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Apretaste esto {count} {count === 1 ? "vez" : "veces"}. Dale que va!
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
