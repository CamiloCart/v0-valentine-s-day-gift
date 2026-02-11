"use client"

import { useState } from "react"
import { Mail, MailOpen } from "lucide-react"

export function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="mb-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
          Una Carta de Amor Muy Dramatica (para mi gusto)
        </h2>
        <p className="mb-8 text-muted-foreground">
          Proceder con extrema precaucion emocional
        </p>

        <div className="relative mx-auto max-w-md">
          {/* Envelope */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`w-full transition-all duration-500 ${isOpen ? "mb-4" : ""
              }`}
          >
            <div className={`flex items-center justify-center gap-3 rounded-2xl border-2 border-primary/30 bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg ${isOpen ? "bg-primary/5" : ""
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
                Mi Queridisima, Maravillosisima, Absolutamente Magnifica Maite,
              </p>
              <p className="mb-4 text-foreground leading-relaxed">
                Desde el momento en que te vi por primera vez, las estrellas se alinearon en un cartel de neon gigante que decia
                {' "Es ella."'} Los pajaros cantaron en armonia a cuatro voces. Aparecio un arcoiris. Volvi a ser feliz y creer en el amor.
                Y un unicornio me guinio el ojo. Bueno, quizas lo del unicornio no, pero TODO LO DEMAS ES VERDAD.
              </p>
              <p className="mb-4 text-foreground leading-relaxed">
                Sos la manteca de mi tostada, el WiFi de mi celular, la papa frita con ketchup de mi hamburguesa doble.
                Sos la razon por la que sonrio mirando el telefono como un boludo en *eleji el lugar q quieras, todos son iguales de validos*.
              </p>
              <p className="mb-4 text-foreground leading-relaxed">
                Si el amor fuera un deporte, yo seria el Messi de amarte. Si el amor fuera una pizza,
                la nuestra tendria TODOS los ingredientes. Hasta los polemicos. Asi de mucho te quiero.
              </p>
              <p className="mb-4 text-foreground leading-relaxed">
                En conclusion: me vas a tener que aguantar para siempre. No se aceptan devoluciones. No hay cambios.
                Solo una cantidad infinita de  chistes malos, y alguien que piensa que sos lo mejor
                que le paso a la humanidad desde que se invento el dulce de leche y el lol.
              </p>
              <p className="mb-4 text-foreground leading-relaxed">
                Ahora de verdad y sin exagerar...
                Te amo, te amo como nunca ame a nadie y se que ya te lo dije pero dejarlo escrito de esta amnera espero que ayude a recordartelo cuando hasta a mi se me olvide decirtelo, porque siempre te estoy amando, incluso cuando no te veo, cuando no te hable, cuando estes lejos, cuando vos no me quieras ver, Siempre te estoy amando. Desde lo mas profundo de mi corazon, y con todo lo que sos, con tu hermoso cuerpo, con tu linda cara, tu personalidad agradable y tu paciencia escasa. Te amo y te quiero en mi vida todo lo que quede de ella. {"<3"}.
              </p>
              <p className="mb-2 font-serif text-lg font-bold text-primary">
                Por Siempre y Para Siempre y Despues Un Poco Mas,
              </p>
              <p className="font-serif text-lg text-primary italic">
                Tu Fan Numero Uno y si todo sale bien futuro marido
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
