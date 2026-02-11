"use client"

import { useState, useCallback } from "react"
import { Sparkles, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

const adjectives = [
  "dazzlingly gorgeous",
  "ridiculously adorable",
  "suspiciously charming",
  "dangerously huggable",
  "illegally cute",
  "absurdly wonderful",
  "outrageously lovable",
  "catastrophically beautiful",
  "overwhelmingly snuggly",
  "hilariously perfect",
  "shockingly delightful",
  "unreasonably sweet",
]

const actions = [
  "Your smile could power a small city for a week",
  "Scientists are studying you to understand peak cuteness",
  "You make puppies jealous of your adorableness",
  "NASA wants to orbit around your radiance",
  "The sun called, it wants its warmth back",
  "Mirrors can't believe their luck when you look at them",
  "Flowers bloom when you walk by (it's true, I saw it)",
  "Your laugh could cure any bad day in a 5-mile radius",
  "Teddy bears wish they could be hugged by you",
  "The dictionary added your photo next to 'perfection'",
  "Butterflies get butterflies when they see you",
  "WiFi signals get stronger near you (probably)",
]

const endings = [
  "and I'm not even being dramatic... okay maybe a little.",
  "this is scientifically proven (source: my heart).",
  "and yes, I will die on this hill.",
  "fight me if you disagree. Actually, don't. Give me a hug instead.",
  "and the whole universe agrees with me on this one.",
  "and that's on FACTS, not feelings. Okay, maybe a little feelings.",
  "I rest my case. Court adjourned. Love wins.",
  "this message was sponsored by my overwhelming love for you.",
]

export function ComplimentGenerator() {
  const [compliment, setCompliment] = useState<string | null>(null)
  const [isSpinning, setIsSpinning] = useState(false)

  const generateCompliment = useCallback(() => {
    setIsSpinning(true)
    setTimeout(() => {
      const adj = adjectives[Math.floor(Math.random() * adjectives.length)]
      const action = actions[Math.floor(Math.random() * actions.length)]
      const ending = endings[Math.floor(Math.random() * endings.length)]
      setCompliment(`You are ${adj}. ${action}, ${ending}`)
      setIsSpinning(false)
    }, 600)
  }, [])

  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="mb-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
          Compliment Machine
        </h2>
        <p className="mb-8 text-muted-foreground">
          Warning: Side effects may include excessive blushing
        </p>

        <div className="mb-8 min-h-[120px] flex items-center justify-center rounded-2xl border-2 border-dashed border-primary/30 bg-card p-6">
          {compliment ? (
            <p className="text-lg font-medium text-foreground leading-relaxed" style={{ animation: "slide-up 0.5s ease-out" }}>
              {compliment}
            </p>
          ) : (
            <p className="text-muted-foreground italic">
              Press the button for a totally real, not-at-all-exaggerated compliment...
            </p>
          )}
        </div>

        <Button
          onClick={generateCompliment}
          size="lg"
          className="bg-primary text-primary-foreground"
        >
          {isSpinning ? (
            <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
          ) : (
            <Sparkles className="mr-2 h-5 w-5" />
          )}
          {compliment ? "Another One!" : "Generate Compliment"}
        </Button>
      </div>
    </section>
  )
}
