"use client"

import { Heart } from "lucide-react"

const reasons = [
  "Your laugh is contagious",
  "You put up with my nonsense",
  "You make burnt toast taste gourmet",
  "Your terrible dance moves are adorable",
  "You still love me after seeing me at 6am",
  "You pretend my jokes are funny",
  "You share your fries (sometimes)",
  "You are the best big spoon AND little spoon",
  "You smell nice (most of the time)",
  "You make every day an adventure",
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
