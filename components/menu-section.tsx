"use client"

import Image from "next/image"
import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const menuItems = [
  {
    id: 1,
    name: "ベーシックコース",
    duration: "40分",
    price: "4,500",
    description: "初めての方におすすめ。よもぎ蒸しの基本を体験できるスタンダードコース。",
    image: "/images/treatment.jpg",
    popular: false,
  },
  {
    id: 2,
    name: "リラックスコース",
    duration: "60分",
    price: "6,500",
    description: "ゆったりとした時間で深いリラクゼーションを。ハーブティー＆プチマッサージ付き。",
    image: "/images/relaxation.jpg",
    popular: true,
  },
  {
    id: 3,
    name: "プレミアムコース",
    duration: "90分",
    price: "9,800",
    description: "よもぎ蒸し＋フェイシャルケア＋全身マッサージの贅沢なフルコース。",
    image: "/images/herbs.jpg",
    popular: false,
  },
]

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, visible }
}

function AnimatedCard({ item, delay }: { item: typeof menuItems[0]; delay: string }) {
  const { ref, visible } = useInView(0.1)
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${delay} ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
    >
      <Card className="overflow-hidden border-0 shadow-lg bg-card group">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {item.popular && (
            <div className="absolute top-4 right-4 bg-foreground text-background text-xs px-3 py-1 rounded-full">
              人気No.1
            </div>
          )}
        </div>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-serif text-xl font-medium text-foreground">
              {item.name}
            </h3>
            <span className="text-sm text-muted-foreground">{item.duration}</span>
          </div>
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
            {item.description}
          </p>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-semibold text-foreground">
              ¥{item.price}
              <span className="text-sm font-normal text-muted-foreground ml-1">（税込）</span>
            </p>
            <Button variant="outline" size="sm" className="border-foreground text-foreground hover:bg-foreground hover:text-background">
              予約する
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function MenuSection() {
  const header = useInView(0.2)

  return (
    <section id="menu" className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={header.ref}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            header.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <p className="text-muted-foreground font-medium tracking-widest text-sm mb-3">MENU</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            メニュー・料金
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            お客様のお悩みやご要望に合わせて、最適なコースをお選びいただけます
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatedCard item={menuItems[0]} delay="delay-0" />
          <AnimatedCard item={menuItems[1]} delay="delay-150" />
          <AnimatedCard item={menuItems[2]} delay="delay-300" />
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            ※ 初回限定20%OFF・回数券もご用意しております。詳しくはお問い合わせください。
          </p>
        </div>
      </div>
    </section>
  )
}
