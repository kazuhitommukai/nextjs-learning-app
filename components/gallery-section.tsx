"use client"

import Image from "next/image"
import { useState } from "react"

const galleryImages = [
  { src: "/images/hero.jpg", alt: "サロンの雰囲気", span: "col-span-2 row-span-2" },
  { src: "/images/salon-interior.jpg", alt: "サロン内観", span: "col-span-1 row-span-1" },
  { src: "/images/herbs.jpg", alt: "ハーブ", span: "col-span-1 row-span-1" },
  { src: "/images/gallery-1.jpg", alt: "待合スペース", span: "col-span-1 row-span-2" },
  { src: "/images/treatment.jpg", alt: "施術風景", span: "col-span-1 row-span-1" },
  { src: "/images/gallery-2.jpg", alt: "ハーブティー", span: "col-span-1 row-span-1" },
  { src: "/images/relaxation.jpg", alt: "リラクゼーション", span: "col-span-2 row-span-1" },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-muted-foreground font-medium tracking-widest text-sm mb-3">GALLERY</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            ギャラリー
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            癒しと安らぎに満ちた空間をご覧ください
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[150px] md:auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg cursor-pointer group ${image.span}`}
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full aspect-video">
            <Image
              src={selectedImage}
              alt="拡大画像"
              fill
              className="object-contain"
            />
          </div>
          <button
            className="absolute top-6 right-6 text-background text-4xl hover:opacity-70 transition-opacity"
            onClick={() => setSelectedImage(null)}
            aria-label="閉じる"
          >
            ×
          </button>
        </div>
      )}
    </section>
  )
}
