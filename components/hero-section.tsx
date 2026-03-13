import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="よもぎ蒸しサロンの雰囲気"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <p className="text-primary font-medium mb-4 tracking-widest text-sm">
            YOMOGI STEAMING SALON
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-background leading-tight mb-6 text-balance">
            心と体を整える、
            <br />
            本格よもぎ蒸し
          </h1>
          <p className="text-background/90 text-lg lg:text-xl mb-8 leading-relaxed max-w-lg">
            古来より伝わる自然療法で、
            内側からの美しさと健康をサポートします。
            温かな空間で、日常の疲れを癒してください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90 text-base px-8">
              ご予約はこちら
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-background border-background/50 hover:bg-background/10 text-base px-8">
              サロンについて
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-background/70">
          <span className="text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-background/50 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
