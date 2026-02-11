"use client"

import { useState } from "react"
import { Heart, Eye } from "lucide-react"

const photos = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-11-17%20a%20las%2000.55.18_f487cfbc-hGp5Rs8ExHnvk3tBYK4dhpBBoxRtou.jpg",
    alt: "Nuestro momento especial juntos",
    caption: "Los momentos mas lindos son con vos",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-11-17%20a%20las%2001.04.44_99366c89-wi1TmOmungRyIRwyrZjW9AAsodKfuD.jpg",
    alt: "Caminando juntos por las calles",
    caption: "Cada paso es mejor a tu lado",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG20251018222452-RuooFl0PTkmoLUr3FRmrYtaiIcrVTw.jpg",
    alt: "Momento dulce en el cafe",
    caption: "Cada beso es una promesa",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG20251018222521-z3TgzV1QfpZ5MdAvNl6QDTGr5hMtB5.jpg",
    alt: "Sonriendo juntos",
    caption: "Tu sonrisa ilumina mi mundo",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG20250912233524-KpStzxHt9anCIshplzn9CxO88alr0Q.jpg",
    alt: "Abrazos en la cocina",
    caption: "Los mejores momentos son los simples",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG20250908150237-yp1b8Y9DH2O1v4wdeX9HvMxfqBCfYp.jpg",
    alt: "Bajo el cielo azul",
    caption: "Un beso que detiene el tiempo",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG20250926174644-nBEAeUw6Af4W6EJRpu1mnCqLr2Ao2H.jpg",
    alt: "Jugando juntos",
    caption: "Siempre haciendo travesuras",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG20250908150338-PX4oNVsxZ7ZHMzbq8oAy8w0qecIyBU.jpg",
    alt: "Dia soleado juntos",
    caption: "Cada dia es mejor con vos",
  },
]

export function PhotoGallery() {
  const [revealedPhotos, setRevealedPhotos] = useState<Set<number>>(new Set())

  const toggleReveal = (index: number) => {
    setRevealedPhotos((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
            <Heart className="h-4 w-4 fill-current text-primary" />
            <span className="text-sm font-semibold text-primary">Nuestros Momentos</span>
          </div>
          <h2 className="mb-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Recuerdos Juntos
          </h2>
          <p className="text-muted-foreground">
            Cada foto cuenta nuestra historia (Toca para revelar)
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {photos.map((photo, index) => {
            const isRevealed = revealedPhotos.has(index)
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-card shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
                onClick={() => toggleReveal(index)}
              >
                <div className="relative aspect-[3/4]">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                      isRevealed ? "blur-0 scale-100" : "blur-2xl scale-110"
                    }`}
                  />
                  
                  {/* Reveal overlay */}
                  {!isRevealed && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-300 group-hover:bg-black/30">
                      <div className="flex flex-col items-center gap-2 text-white">
                        <Eye className="h-8 w-8 animate-pulse" />
                        <p className="text-sm font-semibold">Toca para revelar</p>
                      </div>
                    </div>
                  )}

                  {/* Caption overlay */}
                  {isRevealed && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                        <p className="font-serif text-sm text-white leading-relaxed">
                          {photo.caption}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Decorative hearts */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <Heart className="h-3 w-3 fill-current text-primary animate-heartbeat" />
          <Heart className="h-4 w-4 fill-current text-primary animate-heartbeat" style={{ animationDelay: "0.2s" }} />
          <Heart className="h-3 w-3 fill-current text-primary animate-heartbeat" style={{ animationDelay: "0.4s" }} />
        </div>
      </div>
    </section>
  )
}
