"use client"

import { Heart } from "lucide-react"

const reasons = [
  "Tu risa es contagiosa",
  "Bancas todas mis locuras",
  "Haces que la tostada quemada sepa gourmet",
  "Tus pasos de baile horribles son adorables",
  "Me seguis queriendo despues de verme a las 6am",
  "Fingis que mis chistes son graciosos",
  "Compartis tus papas fritas (a veces)",
  "Sos la mejor cucharita grande Y chiquita",
  "Oles bien (la mayor parte del tiempo)",
  "Cada dia con vos es una aventura",
  "Me cebas los mejores mates del universo",
]

export function ReasonsTicker() {
  const doubled = [...reasons, ...reasons]

  return (
    <section className="overflow-hidden border-y-2 border-primary/10 bg-card py-4">
      <div className="flex animate-[scroll_30s_linear_infinite] whitespace-nowrap">
        {doubled.map((reason, i) => (
          <span key={i} className="mx-6 inline-flex items-center gap-2 text-sm font-medium text-foreground">
            <Heart className="h-3 w-3 shrink-0 fill-current text-primary" />
            {reason}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
