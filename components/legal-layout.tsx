import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface LegalLayoutProps {
  title: string
  lastUpdated: string
  children: React.ReactNode
}

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <main className="min-h-screen bg-background">
      <header className="fixed top-0 w-full z-50 h-16 bg-[#0A0F0D]/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex justify-between items-center max-w-3xl mx-auto px-6 h-full">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Link>
          <span className="text-sm font-bold text-white">Dinheirize</span>
        </div>
      </header>

      <article className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-3">
          {title}
        </h1>
        <p className="text-sm text-muted-foreground mb-12">
          Última atualização: {lastUpdated}
        </p>

        <div className="space-y-10 text-[#C4CDC2] leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mb-4 [&_h2]:mt-2 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-white [&_h3]:mb-2 [&_h3]:mt-6 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:mb-4 [&_strong]:text-white [&_a]:text-primary [&_a:hover]:underline">
          {children}
        </div>

        <div className="mt-16 pt-8 border-t border-[#3E4A3D]/30 text-sm text-muted-foreground">
          <p>
            Dúvidas? Escreve pra{" "}
            <a
              href="mailto:contato@dinheirize.com"
              className="text-primary hover:underline"
            >
              contato@dinheirize.com
            </a>
            .
          </p>
        </div>
      </article>
    </main>
  )
}
