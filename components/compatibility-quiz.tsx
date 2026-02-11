"use client"

import { useState } from "react"
import { Heart, ArrowRight, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

const questions = [
  {
    question: "What's your ideal date night?",
    options: [
      "Fancy dinner & candlelight",
      "Couch, snacks & a movie",
      "Adventure somewhere new",
      "Cooking disaster together",
    ],
  },
  {
    question: "Pick a love language:",
    options: [
      "Words (I love your face)",
      "Gifts (Here, I got you a rock)",
      "Quality time (Let's stare at walls together)",
      "Acts of service (I did the dishes!)",
    ],
  },
  {
    question: "Your partner is sad. What do you do?",
    options: [
      "Make them laugh until they snort",
      "Wrap them in a blanket burrito",
      "Order their favorite food immediately",
      "All of the above, simultaneously",
    ],
  },
  {
    question: "Pick a couple activity:",
    options: [
      "Argue about what to eat for dinner",
      "Fall asleep during a movie at 9pm",
      "Take 47 selfies for one good photo",
      "Fight over the thermostat",
    ],
  },
]

const results = [
  {
    title: "SOULMATE MATERIAL",
    description: "You are 100% compatible. Actually 200%. The math doesn't lie. You two are disgustingly perfect for each other and everyone is jealous.",
    percentage: 100,
  },
  {
    title: "COSMIC LOVE CONNECTION",
    description: "The universe literally bent space-time to bring you two together. Stars collided. Galaxies gasped. It's that serious.",
    percentage: 99,
  },
  {
    title: "MEANT TO BE",
    description: "Even fortune cookies are jealous of how perfect this match is. You complete each other like pizza completes life.",
    percentage: 98,
  },
  {
    title: "LOVE LEGENDS",
    description: "Romeo and Juliet? Boring. You two are the REAL love story. Minus the tragic ending, plus more snacks.",
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
          Compatibility Quiz
        </h2>
        <p className="mb-8 text-muted-foreground">
          {"100% scientific. Definitely not rigged. (It's totally rigged.)"}
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
              Take Again (Same Result Though)
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
