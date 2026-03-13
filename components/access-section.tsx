import { MapPin, Clock, Phone, Mail } from "lucide-react"

const businessInfo = [
  {
    icon: MapPin,
    label: "住所",
    value: "東京都渋谷区神宮前3-1-25 フォレストビル2F",
  },
  {
    icon: Clock,
    label: "営業時間",
    value: "10:00 - 20:00（最終受付 19:00）",
  },
  {
    icon: Phone,
    label: "電話番号",
    value: "03-1234-5678",
  },
  {
    icon: Mail,
    label: "メール",
    value: "info@yomogi-salon.jp",
  },
]

export function AccessSection() {
  return (
    <section id="access" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-muted-foreground font-medium tracking-widest text-sm mb-3">ACCESS</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            アクセス
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Map */}
          <div className="relative aspect-[4/3] lg:aspect-square overflow-hidden rounded-lg bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.169476498936!2d139.70719671525855!3d35.66961798019697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca7bce63b3b%3A0x7e8e47e0f7a4e6aa!2z5riL6LC35bqX!5e0!3m2!1sja!2sjp!4v1635000000000!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="サロンの地図"
              className="absolute inset-0"
            />
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              {businessInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-8">
              <h3 className="font-medium text-foreground mb-4">アクセス方法</h3>
              <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed">
                <li>・ 東京メトロ 表参道駅 A2出口より徒歩5分</li>
                <li>・ JR原宿駅 竹下口より徒歩10分</li>
                <li>・ 明治神宮前駅 5番出口より徒歩7分</li>
              </ul>
            </div>

            <div className="bg-accent/40 rounded-lg p-6">
              <p className="text-sm text-muted-foreground mb-2">定休日</p>
              <p className="text-foreground font-medium">毎週火曜日・第3月曜日</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
