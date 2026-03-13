"use client"

import Image from "next/image"
import { useRef, useEffect, useState } from "react"

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

export function AboutSection() {
  const header = useInView(0.2)
  const image = useInView(0.15)
  const text = useInView(0.15)

  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={header.ref}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            header.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <p className="text-muted-foreground font-medium tracking-widest text-sm mb-3">ABOUT</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-foreground">
            サロンについて
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            ref={image.ref}
            className={`relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-lg transition-all duration-700 ease-out delay-100 ${
              image.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
          >
            <Image
              src="/images/salon-interior.jpg"
              alt="サロン内観"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Text Content */}
          <div
            ref={text.ref}
            className={`space-y-8 transition-all duration-700 ease-out delay-200 ${
              text.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
          >
            <div>
              <h3 className="font-serif text-2xl lg:text-3xl font-medium text-foreground mb-4">
                伝統と癒しが融合する空間
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                よもぎ蒸しは、韓国で600年以上の歴史を持つ伝統的な民間療法です。
                当サロンでは、厳選した国産よもぎと数十種類のハーブをブレンドし、
                お一人おひとりの体調やお悩みに合わせた施術をご提供しています。
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-accent/40 rounded-lg p-6">
                <p className="font-serif text-3xl font-semibold text-foreground mb-2">100%</p>
                <p className="text-sm text-muted-foreground">国産よもぎ使用</p>
              </div>
              <div className="bg-accent/40 rounded-lg p-6">
                <p className="font-serif text-3xl font-semibold text-foreground mb-2">30+</p>
                <p className="text-sm text-muted-foreground">種類のハーブ</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0 mt-1">
                  <span className="text-foreground text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">完全個室のプライベート空間</h4>
                  <p className="text-sm text-muted-foreground">他のお客様を気にせず、ゆったりとお過ごしいただけます</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0 mt-1">
                  <span className="text-foreground text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">オーガニックハーブティー付き</h4>
                  <p className="text-sm text-muted-foreground">施術後は温かいハーブティーでリラックス</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0 mt-1">
                  <span className="text-foreground text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">丁寧なカウンセリング</h4>
                  <p className="text-sm text-muted-foreground">お悩みに合わせた最適なプランをご提案</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
