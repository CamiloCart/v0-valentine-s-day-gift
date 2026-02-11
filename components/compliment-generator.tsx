"use client"

import { useState, useCallback, useRef } from "react"
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
  "abrumadoramente inteligente",
  "hilarantemente perfecta",
  "impactantemente divina",
  "irrazonablemente dulce",
]

const actions = [
  "El peru llamo, quieren que le devuelva a su flaca mas hermosa",
  "Los cientificos te estan estudiando para entender la hermosura maxima",
  "Los michis te tienen envidia de lo linda que sos",
  "El sol llamo, quiere que le devuelvas su luz",
  "Los espejos no pueden creer su suerte cuando te miras",
  "Las flores florecen cuando pasas (es verdad, lo vi)",
  "Tu risa es tan hermosa q puede cambiar totalmente mi dia",
  "Los osos de peluche suenian con que los abraces",
  "El diccionario agrego tu foto al lado de 'perfeccion'",
  "Las mariposas sienten mariposas cuando te ven",
  "El WiFi agarra mejor cerca tuyo (probablemente)",
  "Eres la ponmi más skibidi que conozco, mi looksmaxxing queda encantado, cuando te veo me siento el chiki ibai más afortunado. Gracias a ti soy Sigma y mi mewing está en su prime, diría que... El prime no está cansado gracias a ti, contigo descubrí que el Xocas es grandioso ¡wohoo! Si puedo ser toilet sin estar cansado jefe, gracias por ser el {:} de mi {v}, por ti estoy en asendecia. Eres mi lugar favorito como pisos picados jiji y tenerte para mí es como una victoria magistral de Fornite, por ti yo me volveria el titán speakerman! ¡Wohoo! Gracias por ser mi chambeador@ ¡TE AMOOO!"
]

const endings = [
  "y no estoy siendo dramatico... creo...",
  "esto esta cientificamente probado (fuente: mi corazon y tik tok).",
  "y si, Me hundo con este barco",
  "Matame si no te sirvo... Mejor no, dame un beso noma",
  "y todo el universo esta de acuerdo conmigo en esto. Y si no, es el universo el q se equivoca",
  "y esto son DATOS, no sentimientos. Bueno, si hay sentimientos.",
  "no hay mas nada que decir. Caso cerrado. Gano el amor.Y que vivan los novios (nosotros)",
  "este mensaje fue sponsoreado por mi amor hacia vos y la monster de mango.",
]

export function ComplimentGenerator() {
  const [compliment, setCompliment] = useState<string | null>(null)
  const [isSpinning, setIsSpinning] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const generateCompliment = useCallback(() => {
    setIsSpinning(true)
    setTimeout(() => {
      const adj = adjectives[Math.floor(Math.random() * adjectives.length)]
      const actionIndex = Math.floor(Math.random() * actions.length)
      const action = actions[actionIndex]
      const ending = endings[Math.floor(Math.random() * endings.length)]
      setCompliment(`Sos ${adj}. ${action}, ${ending}`)
      setIsSpinning(false)

      // Play audio if action index is 11 (the skibidi compliment)
      if (actionIndex === 11) {
        if (audioRef.current) {
          audioRef.current.currentTime = 0
          audioRef.current.play().catch((error) => {
            console.log("[v0] Audio playback failed:", error)
          })
        }
      }
    }, 600)
  }, [])

  return (
    <section className="px-4 py-16">
      <audio
        ref={audioRef}
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Eres%20la%20pomni%20mas%20skibidi%20que%20conosco-mxlzRTbjK0wv7vVP4c66cu9XEzTn0f.mp3"
        preload="auto"
      />
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
