"use client"

import Image from "next/image"
import { Heart } from "lucide-react"

export function PhotoGallery() {
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
            Cada foto cuenta nuestra historia
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* First photo - couple selfie */}
          <div className="group relative overflow-hidden rounded-3xl bg-card shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
            <div className="relative aspect-[3/4]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-11-17%20a%20las%2000.55.18_f487cfbc-hGp5Rs8ExHnvk3tBYK4dhpBBoxRtou.jpg"
                alt="Nuestro momento especial juntos"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                <p className="font-serif text-lg text-white">
                  Los momentos mas lindos son con vos
                </p>
              </div>
            </div>
          </div>

          {/* Second photo - walking together */}
          <div className="group relative overflow-hidden rounded-3xl bg-card shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
            <div className="relative aspect-[3/4]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-11-17%20a%20las%2001.04.44_99366c89-wi1TmOmungRyIRwyrZjW9AAsodKfuD.jpg"
                alt="Caminando juntos por las calles"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                <p className="font-serif text-lg text-white">
                  Cada paso es mejor a tu lado
                </p>
              </div>
            </div>
          </div>
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
