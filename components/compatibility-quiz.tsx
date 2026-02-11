"use client"

import { useState } from "react"
import { Heart, ArrowRight, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

const questions = [
  {
    question: "Cual es tu cita ideal?",
    options: [
      "Cena elegante con velitas",
      "Sillon, snacks y una peli",
      "Aventura en un lugar nuevo",
      "Desastre culinario juntos",
    ],
  },
  {
    question: "Elegi un lenguaje del amor:",
    options: [
      "Palabras (me encanta tu cara)",
      "Regalos (toma, te traje una piedra)",
      "Tiempo de calidad (miremos la pared juntos)",
      "Actos de servicio (lave los platos!)",
    ],
  },
  {
    question: "Tu pareja esta triste. Que haces?",
    options: [
      "Hacerle reir hasta que le salga leche por la nariz",
      "Envolverle en una frazada como un matambre",
      "Pedir su comida favorita ya mismo",
      "Todo lo anterior, simultaneamente",
    ],
  },
  {
    question: "Elegi una actividad de pareja:",
    options: [
      "Discutir que pedir de delivery",
      "Dormirse durante una peli a las 21hs",
      "Sacar 47 selfies para una sola foto buena",
      "Pelearse por el aire acondicionado",
    ],
  },
]

const results = [
  {
    title: "MATERIAL DE ALMAS GEMELAS",
    description: "Son 100% compatibles. En realidad 200%. Las matematicas no mienten. Son asquerosamente perfectos el uno para el otro y todos tienen envidia.",
    percentage: 100,
  },
  {
    title: "CONEXION COSMICA DE AMOR",
    description: "El universo literalmente doblo el espacio-tiempo para juntarlos. Las estrellas chocaron. Las galaxias se quedaron boquiabiertas. Asi de serio es.",
    percentage: 99,
  },
  {
    title: "ESTABA ESCRITO",
    description: "Hasta las galletitas de la fortuna tienen envidia de esta pareja. Se complementan como el mate y las facturas.",
    percentage: 98,
  },
  {
    title: "LEYENDAS DEL AMOR",
    description: "Romeo y Julieta? Aburridos. Ustedes son la VERDADERA historia de amor. Sin el final tragico, con mas medialunas.",
    percentage: 97,
  },
]

export function CompatibilityQuiz() {
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex]
    setAnswers(newAnswers)

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1)
    } else {
      setShowResult(true)
    }
  }

  const result = results[Math.floor(Math.random() * results.length)]

  const reset = () => {
    setCurrentQ(0)
    setAnswers([])
    setShowResult(false)
  }

  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="mb-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
          Quiz de Compatibilidad
        </h2>
        <p className="mb-8 text-muted-foreground">
          {"100% cientifico. Definitivamente no esta armado. (Esta re armado.)"}
        </p>

        {showResult ? (
          <div className="rounded-2xl border-2 border-primary/20 bg-card p-8" style={{ animation: "slide-up 0.6s ease-out" }}>
            <div className="mb-4 text-6xl font-bold text-primary font-serif">
              {result.percentage}%
            </div>
            <h3 className="mb-3 font-serif text-2xl font-bold text-foreground">
              {result.title}
            </h3>
            <p className="mb-6 text-muted-foreground leading-relaxed">
              {result.description}
            </p>
            <Heart className="mx-auto mb-6 h-12 w-12 text-primary animate-heartbeat" />
            <Button onClick={reset} variant="outline" size="lg">
              <RotateCcw className="mr-2 h-4 w-4" />
              Hacerlo de Nuevo (Mismo Resultado Igual)
            </Button>
          </div>
        ) : (
          <div className="rounded-2xl border-2 border-primary/20 bg-card p-8" style={{ animation: "slide-up 0.5s ease-out" }}>
            {/* Progress */}
            <div className="mb-6 flex items-center justify-center gap-2">
              {questions.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 w-8 rounded-full transition-colors ${
                    i <= currentQ ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>

            <h3 className="mb-6 font-serif text-xl font-bold text-foreground">
              {questions[currentQ].question}
            </h3>

            <div className="flex flex-col gap-3">
              {questions[currentQ].options.map((option, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleAnswer(i)}
                  className="group flex items-center gap-3 rounded-xl border-2 border-primary/10 bg-background p-4 text-left transition-all hover:border-primary/40 hover:bg-secondary"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {String.fromCharCode(65 + i)}
                  </div>
                  <span className="text-foreground font-medium">{option}</span>
                  <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
