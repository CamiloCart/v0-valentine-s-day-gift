"use client"

import { useState } from "react"
import { Check, Ticket } from "lucide-react"

const coupons = [
  {
    id: 1,
    title: "Free Hug",
    description: "Redeemable anytime, anywhere. No expiration date. Ever.",
    color: "bg-primary",
  },
  {
    id: 2,
    title: "Movie Night Veto",
    description: "You get to pick the movie. No complaints. I will not fall asleep (probably).",
    color: "bg-accent",
  },
  {
    id: 3,
    title: "Breakfast in Bed",
    description: "One gourmet breakfast delivered bedside. May contain cereal. Accept with love.",
    color: "bg-primary",
  },
  {
    id: 4,
    title: "One Free Win",
    description: "Use this coupon to automatically win any argument. Use wisely.",
    color: "bg-accent",
  },
  {
    id: 5,
    title: "Unlimited Compliments",
    description: "24 hours of non-stop compliments. Warning: may become annoying.",
    color: "bg-primary",
  },
  {
    id: 6,
    title: "Dance Party",
    description: "Spontaneous kitchen dance party. Song choice is yours. Bad moves guaranteed.",
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
          Love Coupons
        </h2>
        <p className="mb-8 text-muted-foreground">
          Tear one off and redeem whenever your heart desires
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coupons.map((coupon) => {
            const isRedeemed = redeemed.has(coupon.id)
            return (
              <button
                key={coupon.id}
                type="button"
                onClick={() => toggleRedeem(coupon.id)}
                className={`group relative overflow-hidden rounded-2xl border-2 transition-all duration-300 text-left ${
                  isRedeemed
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
                  <div className={`mt-3 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                    isRedeemed
                      ? "bg-muted text-muted-foreground"
                      : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                  }`}>
                    {isRedeemed ? (
                      <>
                        <Check className="h-3 w-3" />
                        Redeemed!
                      </>
                    ) : (
                      "Tap to Redeem"
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
