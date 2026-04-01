'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle, Loader2 } from 'lucide-react'

function WelcomeContent() {
  const searchParams = useSearchParams()
  const _sessionId = searchParams.get('session_id')

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-card rounded-2xl border border-outline-variant/20 shadow-2xl p-8 text-center">
        <div className="text-6xl mb-6">🎉</div>

        <h1 className="text-3xl font-bold text-foreground mb-3">
          Pagamento Confirmado!
        </h1>
        <p className="text-muted-foreground mb-8">
          Bem-vindo ao Dinheirize! Sua assinatura está ativa.
        </p>

        <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            <span className="text-foreground font-semibold">Plano WhatsApp ativo</span>
          </div>
          <p className="text-sm text-muted-foreground">
            R$ 9,90/mês por 3 meses
          </p>
        </div>

        <Link
          href="/setup"
          className="inline-block w-full bg-primary hover:opacity-90 text-[#003914] font-black py-4 rounded-xl transition-opacity shadow-lg shadow-primary/20"
        >
          Conectar WhatsApp agora →
        </Link>

        <p className="text-sm text-muted-foreground mt-6">
          Enviamos um email com instruções de configuração
        </p>
      </div>
    </div>
  )
}

export default function WelcomePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      }
    >
      <WelcomeContent />
    </Suspense>
  )
}
