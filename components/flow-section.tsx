import Image from "next/image"

const steps = [
  {
    number: "01",
    title: "ご来店・カウンセリング",
    description: "お悩みや体調をお伺いし、最適なハーブブレンドをご提案いたします。",
  },
  {
    number: "02",
    title: "お着替え",
    description: "専用のマントにお着替えいただきます。アメニティもご用意しております。",
  },
  {
    number: "03",
    title: "よもぎ蒸し",
    description: "温かな蒸気に包まれながら、ゆったりとお過ごしください。",
  },
  {
    number: "04",
    title: "リラックスタイム",
    description: "ハーブティーを飲みながら、余韻をお楽しみください。",
  },
]

export function FlowSection() {
  return (
    <section id="flow" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square lg:aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src="/images/treatment.jpg"
                alt="よもぎ蒸し施術"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 lg:bottom-12 lg:-right-12 bg-accent shadow-2xl rounded-lg p-6 max-w-xs">
              <p className="text-foreground font-serif text-4xl font-semibold mb-1">98%</p>
              <p className="text-sm text-foreground/70">のお客様が「また来たい」と回答</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            {/* Section Header */}
            <div className="mb-12">
              <p className="text-muted-foreground font-medium tracking-widest text-sm mb-3">FLOW</p>
              <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-foreground mb-4">
                施術の流れ
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                初めての方も安心してご利用いただけるよう、
                丁寧にご案内いたします。
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={step.number} className="flex gap-6">
                  <div className="shrink-0">
                    <span className="font-serif text-3xl font-semibold text-accent">
                      {step.number}
                    </span>
                  </div>
                  <div className="pb-8 border-b border-border last:border-0">
                    <h3 className="font-medium text-foreground text-lg mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
