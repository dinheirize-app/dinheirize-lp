import Link from "next/link"
import { Mail } from "lucide-react"

const productLinks = [
  { label: "Como funciona", href: "#how-it-works" },
  { label: "Recursos", href: "#features" },
  { label: "Planos", href: "#pricing" },
  { label: "Entrar na lista", href: "#waitlist" },
]

export function Footer() {
  return (
    <footer className="bg-[#060A07] w-full py-12 px-6 border-t border-[#3E4A3D]/20 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto text-sm text-[#6B7A6E]">
        {/* Brand Column */}
        <div className="space-y-4">
          <Link href="/" className="text-lg font-bold text-[#FAFCF9]">
            Dinheirize
          </Link>
          <p className="max-w-xs">
            O copiloto financeiro no WhatsApp. Pra quem não quer mais perder
            tempo com planilha.
          </p>
        </div>

        {/* Product Links */}
        <div className="flex flex-col gap-4">
          <h5 className="text-[#FAFCF9] font-bold">Produto</h5>
          {productLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-primary transition-colors w-fit"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact Column */}
        <div className="flex flex-col gap-4">
          <h5 className="text-[#FAFCF9] font-bold">Fala com a gente</h5>
          <a
            href="mailto:contato@dinheirize.com"
            className="inline-flex items-center gap-2 hover:text-primary transition-colors w-fit"
          >
            <Mail className="h-4 w-4" />
            contato@dinheirize.com
          </a>
          <p className="text-xs text-muted-foreground/70">
            Feito no Brasil 🇧🇷
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8 pt-8 border-t border-[#3E4A3D]/20 text-center text-xs text-[#6B7A6E]">
        <p>© 2026 Dinheirize. Seu dinheiro no próximo nível.</p>
      </div>
    </footer>
  )
}
