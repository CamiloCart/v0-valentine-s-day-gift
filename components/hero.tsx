"use client"

import { Heart } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center px-4 py-20 text-center">
      <div className="relative z-10">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-primary/20 bg-card px-5 py-2 text-sm font-semibold text-primary">
          <Heart className="h-4 w-4 animate-heartbeat fill-current" />
          Happy Valentine{"'"}s Day!
          <Heart className="h-4 w-4 animate-heartbeat fill-current" />
        </div>

        <h1 className="mb-6 font-serif text-5xl font-bold leading-tight text-foreground md:text-7xl lg:text-8xl text-balance">
          You Are My <br />
          <span className="text-primary">Favorite</span>{" "}
          <span className="inline-block animate-wiggle">Person</span>
        </h1>

        <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground leading-relaxed md:text-xl">
          I made you this ridiculously silly website because a regular card
          just wasn{"'"}t extra enough. Scroll down for maximum silliness.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#love-meter"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground transition-all hover:scale-105 active:scale-95"
          >
            <Heart className="h-5 w-5 fill-current" />
            Explore the Silliness
          </a>
          <a
            href="#love-letter"
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-transparent px-8 py-3 font-semibold text-foreground transition-all hover:border-primary/60 hover:bg-secondary"
          >
            Read My Love Letter
          </a>
        </div>

        {/* Bouncing arrow */}
        <div className="mt-12 animate-bounce text-primary">
          <svg className="mx-auto h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
