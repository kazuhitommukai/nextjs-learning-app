import Image from "next/image"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/relaxation.jpg"
          alt="リラクゼーション"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-background mb-6">
          心と体の調和を取り戻す、
          <br />
          特別なひとときを
        </h2>
        <p className="text-background/90 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          初めての方も、リピーターの方も、
          あなたに合った最適なケアをご提案いたします。
          まずはお気軽にご相談ください。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-background text-foreground hover:bg-background/90 text-base px-8">
            今すぐ予約する
          </Button>
          <Button size="lg" variant="outline" className="border-background text-background hover:bg-background/10 text-base px-8">
            お問い合わせ
          </Button>
        </div>
        <p className="text-background/70 text-sm mt-6">
          ※ 初回限定 20%OFFキャンペーン実施中
        </p>
      </div>
    </section>
  )
}
