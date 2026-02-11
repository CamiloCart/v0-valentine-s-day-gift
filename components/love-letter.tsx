"use client"

import { useState } from "react"
import { Mail, MailOpen } from "lucide-react"

export function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="mb-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
          A Very Dramatic Love Letter
        </h2>
        <p className="mb-8 text-muted-foreground">
          Proceed with extreme emotional caution
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
                {isOpen ? "Close Letter" : "Open this letter..."}
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
                *clears throat dramatically*
              </p>
              <p className="mb-4 text-foreground leading-relaxed">
                My Dearest, Most Wonderful, Absolutely Magnificent Human,
              </p>
              <p className="mb-4 text-foreground leading-relaxed">
                From the moment I first saw you, the stars rearranged themselves into a giant neon sign that said
                {' "THIS ONE."'} The birds sang in four-part harmony. A rainbow appeared. Two rainbows, actually.
                And a unicorn winked at me. Okay maybe not the unicorn part, but EVERYTHING ELSE IS TRUE.
              </p>
              <p className="mb-4 text-foreground leading-relaxed">
                You are the peanut butter to my jelly, the WiFi to my phone, the extra fry at the bottom of the bag.
                You are the reason I smile at my phone like a weirdo on the bus.
              </p>
              <p className="mb-4 text-foreground leading-relaxed">
                If love were a sport, I would be the Michael Jordan of loving you. If love were a pizza,
                ours would have ALL the toppings. Even the controversial ones. {"That's"} how much I love you.
              </p>
              <p className="mb-4 text-foreground leading-relaxed">
                In conclusion: you are stuck with me forever. No refunds. No exchanges.
                Just an endless supply of hugs, bad jokes, and someone who thinks {"you're"} the greatest thing
                since sliced bread (and I REALLY love sliced bread).
              </p>
              <p className="mb-2 font-serif text-lg font-bold text-primary">
                Forever & Always & Then Some More,
              </p>
              <p className="font-serif text-lg text-primary italic">
                Your Biggest Fan
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
