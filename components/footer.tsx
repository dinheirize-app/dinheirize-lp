import Link from "next/link"
import { Globe, AtSign, Share2 } from "lucide-react"

const productLinks = [
  { label: "Como funciona", href: "#how-it-works" },
  { label: "Recursos", href: "#features" },
  { label: "Planos", href: "#pricing" },
]

const legalLinks = [
  { label: "Privacidade", href: "/privacidade" },
  { label: "Termos", href: "/termos" },
  { label: "Contato", href: "/contato" },
]

export function Footer() {
  return (
    <footer className="bg-[#060A07] w-full py-12 px-6 border-t border-[#3E4A3D]/20 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto text-sm text-[#6B7A6E]">
        {/* Brand Column */}
        <div className="space-y-4">
          <Link href="/" className="text-lg font-bold text-[#FAFCF9]">
            Dinheirize
          </Link>
          <p className="text-xs text-muted-foreground">dinheirize.com</p>
          <p className="max-w-xs">
            A plataforma financeira feita para quem não quer perder tempo com
            planilhas.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="hover:text-primary transition-colors"
              aria-label="Website"
            >
              <Globe className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors"
              aria-label="Email"
            >
              <AtSign className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors"
              aria-label="Compartilhar"
            >
              <Share2 className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Product Links */}
        <div className="flex flex-col gap-4">
          <h5 className="text-[#FAFCF9] font-bold">Produto</h5>
          {productLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Legal Links */}
        <div className="flex flex-col gap-4">
          <h5 className="text-[#FAFCF9] font-bold">Legal</h5>
          {legalLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Support Column */}
        <div className="flex flex-col gap-4">
          <h5 className="text-[#FAFCF9] font-bold">Apoio</h5>
          <p>Feito com amor no Brasil para o mundo.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8 pt-8 border-t border-[#3E4A3D]/20 text-center text-sm text-[#6B7A6E]">
        <p>© 2026 Dinheirize. Seu dinheiro no próximo nível.</p>
      </div>
    </footer>
  )
}
