"use client"

import { useState, useCallback } from "react"
import { Sparkles, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

const adjectives = [
  "deslumbrantemente hermosa",
  "ridiculamente adorable",
  "sospechosamente encantadoa",
  "peligrosamente abrazable",
  "ilegalmente tierna",
  "absurdamente maravillosa",
  "escandalosamente linda",
  "catastroficamente bella",
  "abrumadoramente achuchable",
  "hilarantemente perfecta",
  "impactantemente divina",
  "irrazonablemente dulce",
]

const actions = [
  "El peru llamo, quieren que le devuelva a su flaca mas hermosa",
  "Los cientificos te estan estudiando para entender la ternura maxima",
  "Los cachorros te tienen envidia de lo adorable que sos",
  "La NASA quiere orbitar alrededor de tu resplandor",
  "El sol llamo, quiere que le devuelvas su luz",
  "Los espejos no pueden creer su suerte cuando te miras",
  "Las flores florecen cuando pasas (es verdad, lo vi)",
  "Tu risa podria curar cualquier mal dia en 5 km a la redonda",
  "Los osos de peluche suenian con que los abraces",
  "El diccionario agrego tu foto al lado de 'perfeccion'",
  "Las mariposas sienten mariposas cuando te ven",
  "El WiFi agarra mejor cerca tuyo (probablemente)",
]

const endings = [
  "y no estoy siendo dramatico/a... bueno, quizas un poquito.",
  "esto esta cientificamente probado (fuente: mi corazon).",
  "y si, voy a morir en esta colina.",
  "peleame si no estas de acuerdo. Mejor no. Dame un abrazo.",
  "y todo el universo esta de acuerdo conmigo en esto.",
  "y esto son DATOS, no sentimientos. Bueno, un poquito de sentimientos.",
  "no hay mas nada que decir. Caso cerrado. Gano el amor.",
  "este mensaje fue sponsoreado por mi amor desmedido hacia vos.",
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
      setCompliment(`Sos ${adj}. ${action}, ${ending}`)
      setIsSpinning(false)
    }, 600)
  }, [])

  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="mb-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
          Maquina de Piropos
        </h2>
        <p className="mb-8 text-muted-foreground">
          Advertencia: Los efectos secundarios pueden incluir sonrojarse demasiado
        </p>

        <div className="mb-8 min-h-[120px] flex items-center justify-center rounded-2xl border-2 border-dashed border-primary/30 bg-card p-6">
          {compliment ? (
            <p className="text-lg font-medium text-foreground leading-relaxed" style={{ animation: "slide-up 0.5s ease-out" }}>
              {compliment}
            </p>
          ) : (
            <p className="text-muted-foreground italic">
              Apreta el boton para un piropo totalmente real, para nada exagerado...
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
          {compliment ? "Otro Mas!" : "Generar Piropo"}
        </Button>
      </div>
    </section>
  )
}
