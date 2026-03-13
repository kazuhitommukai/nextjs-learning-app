import Link from "next/link"
import { Instagram, Facebook, Mail } from "lucide-react"

const footerLinks = [
  { href: "#about", label: "サロンについて" },
  { href: "#menu", label: "メニュー" },
  { href: "#flow", label: "施術の流れ" },
  { href: "#gallery", label: "ギャラリー" },
  { href: "#access", label: "アクセス" },
]

const socialLinks = [
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "mailto:info@yomogi-salon.jp", icon: Mail, label: "Email" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="font-serif text-2xl font-semibold tracking-wider">
                YOMOGI 蒸
              </span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              心と体を整える、本格よもぎ蒸しサロン。
              <br />
              古来より伝わる自然療法で、
              <br />
              内側からの美しさと健康をサポートします。
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-medium mb-4">メニュー</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium mb-4">お問い合わせ</h3>
            <div className="space-y-2 text-sm text-background/70 mb-6">
              <p>TEL: 03-1234-5678</p>
              <p>MAIL: info@yomogi-salon.jp</p>
              <p>営業時間: 10:00 - 20:00</p>
              <p>定休日: 火曜日・第3月曜日</p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © 2026 YOMOGI蒸. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/50">
            <Link href="#" className="hover:text-background transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="#" className="hover:text-background transition-colors">
              特定商取引法に基づく表記
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
