"use client"

import { useState } from "react"
import { Mail, MailOpen } from "lucide-react"

export function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="mb-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
          Una Carta de Amor Muy Dramatica
        </h2>
        <p className="mb-8 text-muted-foreground">
          Proceder con extrema precaucion emocional
        </p>

        <div className="relative mx-auto max-w-md">
          {/* Envelope */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`w-full transition-all duration-500 ${
              isOpen ? "mb-4" : ""
            }`}
          >
            <div className={`flex items-center justify-center gap-3 rounded-2xl border-2 border-primary/30 bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg ${
              isOpen ? "bg-primary/5" : ""
            }`}>
              {isOpen ? (
                <MailOpen className="h-8 w-8 text-primary" />
              ) : (
                <Mail className="h-8 w-8 text-primary" />
              )}
              <span className="font-serif text-lg font-bold text-foreground">
                {isOpen ? "Cerrar Carta" : "Abri esta carta..."}
              </span>
            </div>
          </button>

          {/* Letter content */}
          {isOpen && (
            <div
              className="rounded-2xl border-2 border-primary/20 bg-card p-8 text-left shadow-xl"
              style={{ animation: "slide-up 0.6s ease-out" }}
            >
              <p className="mb-4 font-serif text-sm italic text-muted-foreground">
                *se aclara la garganta dramaticamente*
              </p>
              <p className="mb-4 text-foreground leading-relaxed">
                Mi Queridisimo/a, Maravillosisimo/a, Absolutamente Magnifico/a Ser Humano,
              </p>
              <p className="mb-4 text-foreground leading-relaxed">
                Desde el momento en que te vi por primera vez, las estrellas se reacomodaron en un cartel de neon gigante que decia
                {' "ESTE/A."'} Los pajaros cantaron en armonia a cuatro voces. Aparecio un arcoiris. Dos arcoiris, en realidad.
                Y un unicornio me guinio el ojo. Bueno, quizas lo del unicornio no, pero TODO LO DEMAS ES VERDAD.
              </p>
              <p className="mb-4 text-foreground leading-relaxed">
                Sos la manteca de mi tostada, el WiFi de mi celular, la papa frita extra al fondo de la bolsa.
                Sos la razon por la que sonrio mirando el telefono como un/a boludo/a en el colectivo.
              </p>
              <p className="mb-4 text-foreground leading-relaxed">
                Si el amor fuera un deporte, yo seria el Messi de amarte. Si el amor fuera una pizza,
                la nuestra tendria TODOS los ingredientes. Hasta los polemicos. Asi de mucho te quiero.
              </p>
              <p className="mb-4 text-foreground leading-relaxed">
                En conclusion: me vas a tener que aguantar para siempre. No se aceptan devoluciones. No hay cambios.
                Solo una cantidad infinita de abrazos, chistes malos, y alguien que piensa que sos lo mejor
                que le paso a la humanidad desde que se invento el dulce de leche.
              </p>
              <p className="mb-2 font-serif text-lg font-bold text-primary">
                Por Siempre y Para Siempre y Despues Un Poco Mas,
              </p>
              <p className="font-serif text-lg text-primary italic">
                Tu Fan Numero Uno
              </p>
              <div className="mt-4 flex justify-end">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-primary animate-heartbeat">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
