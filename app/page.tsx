import { FloatingHearts } from "@/components/floating-hearts"
import { Hero } from "@/components/hero"
import { ReasonsTicker } from "@/components/reasons-ticker"
import { PhotoGallery } from "@/components/photo-gallery"
import { LoveMeter } from "@/components/love-meter"
import { ComplimentGenerator } from "@/components/compliment-generator"
import { LoveCoupons } from "@/components/love-coupons"
import { LoveLetter } from "@/components/love-letter"
import { CompatibilityQuiz } from "@/components/compatibility-quiz"
import { ConfettiButton } from "@/components/confetti-button"
import { Heart } from "lucide-react"

function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-3 py-4">
      <div className="h-px w-16 bg-primary/20" />
      <Heart className="h-4 w-4 fill-current text-primary" />
      <div className="h-px w-16 bg-primary/20" />
    </div>
  )
}

export default function ValentinePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <FloatingHearts />

      <Hero />

      <ReasonsTicker />

      <PhotoGallery />

      <SectionDivider />

      <div id="love-meter">
        <LoveMeter />
      </div>

      <SectionDivider />

      <ComplimentGenerator />

      <SectionDivider />

      <LoveCoupons />

      <SectionDivider />

      <div id="love-letter">
        <LoveLetter />
      </div>

      <SectionDivider />

      <CompatibilityQuiz />

      <SectionDivider />

      <ConfettiButton />

      {/* Footer */}
      <footer className="pb-12 pt-16 text-center">
        <p className="font-serif text-2xl font-bold text-primary md:text-3xl text-balance">
          Te quiero hasta la luna y de vuelta
        </p>
        <p className="mt-2 text-muted-foreground">
          ...y despues hasta la luna otra vez, por las dudas.
        </p>
        <div className="mt-6 flex items-center justify-center gap-1">
          {Array.from({ length: 5 }, (_, i) => (
            <Heart
              key={i}
              className="h-5 w-5 fill-current text-primary"
              style={{
                animationDelay: `${i * 0.15}s`,
                animation: "heartbeat 1.2s ease-in-out infinite",
              }}
            />
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          Hecho con una cantidad irrazonable de amor
        </p>
      </footer>
    </main>
  )
}
