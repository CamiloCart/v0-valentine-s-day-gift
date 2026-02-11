"use client"

import { useState } from "react"
import { Check, Ticket } from "lucide-react"

const coupons = [
  {
    id: 1,
    title: "Abrazo Gratis",
    description: "Canjeable en cualquier momento, en cualquier lugar. Sin fecha de vencimiento. Nunca.",
    color: "bg-primary",
  },
  {
    id: 2,
    title: "Veto de Pelicula",
    description: "Vos elegis la peli. Sin quejas. No importa si ya la vi o lo q sea.",
    color: "bg-accent",
  },
  {
    id: 3,
    title: "Desayuno en la Cama",
    description: "Un desayuno gourmet servido en la cama. Puede contener cereales(si ando generoso). Acepta con amor.",
    color: "bg-primary",
  },
  {
    id: 4,
    title: "Ganar una Discusion",
    description: "Usa este cupon para ganar automaticamente cualquier pelea. Nunca lo vas a usar pq nunca peleamos pero ok.",
    color: "bg-accent",
  },
  {
    id: 5,
    title: "Piropos Ilimitados",
    description: "24 horas de piropos sin parar. Advertencia: puede volverse insoportable. Y voy a hacer mis mayor esfuerzo en no repetir (minimo 1 cada media hora)",
    color: "bg-primary",
  },
  {
    id: 6,
    title: "Fiesta de Baile",
    description: "Fiesta de baile espontaneadonde quieras. Vos elegis la cancion. NO ME PUEDO NEGAR. SOLO UN(1) uso",
    color: "bg-accent",
  },
]

export function LoveCoupons() {
  const [redeemed, setRedeemed] = useState<Set<number>>(new Set())

  const toggleRedeem = (id: number) => {
    setRedeemed((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
          Cupones de Amor
        </h2>
        <p className="mb-8 text-muted-foreground">
          Arranca uno y canjealo cuando tu corazon lo desee
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coupons.map((coupon) => {
            const isRedeemed = redeemed.has(coupon.id)
            return (
              <button
                key={coupon.id}
                type="button"
                onClick={() => toggleRedeem(coupon.id)}
                className={`group relative overflow-hidden rounded-2xl border-2 transition-all duration-300 text-left ${isRedeemed
                    ? "border-muted bg-muted/50 opacity-70"
                    : "border-primary/20 bg-card hover:border-primary/50 hover:shadow-lg"
                  }`}
              >
                {/* Perforated edge */}
                <div className="absolute left-0 top-0 bottom-0 w-3 flex flex-col justify-around">
                  {Array.from({ length: 6 }, (_, i) => (
                    <div key={i} className="h-2 w-2 rounded-full bg-background" />
                  ))}
                </div>

                <div className="p-5 pl-7">
                  <div className="mb-2 flex items-center gap-2">
                    <Ticket className={`h-5 w-5 ${isRedeemed ? "text-muted-foreground" : "text-primary"}`} />
                    <h3 className={`font-serif text-lg font-bold ${isRedeemed ? "line-through text-muted-foreground" : "text-foreground"}`}>
                      {coupon.title}
                    </h3>
                  </div>
                  <p className={`text-sm leading-relaxed ${isRedeemed ? "text-muted-foreground" : "text-muted-foreground"}`}>
                    {coupon.description}
                  </p>
                  <div className={`mt-3 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold transition-colors ${isRedeemed
                      ? "bg-muted text-muted-foreground"
                      : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                    }`}>
                    {isRedeemed ? (
                      <>
                        <Check className="h-3 w-3" />
                        Canjeado!
                      </>
                    ) : (
                      "Toca para Canjear"
                    )}
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
