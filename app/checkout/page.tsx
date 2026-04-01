'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Check, Loader2, Shield } from 'lucide-react'

const features = [
  'Lançamentos ilimitados no WhatsApp',
  'Categorização automática com IA',
  'Modo Confissão — sem julgamento',
  '"Quanto custa sua hora?"',
  'Score Dinheirize + Streak 🔥',
  'Relatório semanal inteligente',
  'Alerta de padrão de gastos',
]

function CheckoutContent() {
  const searchParams = useSearchParams()
  const email = searchParams.get('email') || ''
  const [loading, setLoading] = useState(false)
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    async function checkIfPaid() {
      if (!email) {
        setChecking(false)
        return
      }

      try {
        const res = await fetch(`/api/check-user?email=${encodeURIComponent(email)}`)
        const data = await res.json()

        if (data.isPaid) {
          window.location.href = `/setup?email=${encodeURIComponent(email)}`
        } else {
          setChecking(false)
        }
      } catch {
        setChecking(false)
      }
    }

    checkIfPaid()
  }, [email])

  async function handleCheckout() {
    setLoading(true)

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const { url, error } = await response.json()

      if (error || !url) {
        alert('Erro ao processar pagamento. Tente novamente.')
        setLoading(false)
        return
      }

      window.location.href = url
    } catch {
      alert('Erro ao processar pagamento. Tente novamente.')
      setLoading(false)
    }
  }

  if (checking) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center space-y-3">
          <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto" />
          <p className="text-muted-foreground">Verificando seu cadastro...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-card rounded-2xl border border-outline-variant/20 shadow-2xl p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="text-primary font-black text-xl">Dinheirize</span>
          <h1 className="text-2xl font-bold text-foreground mt-3">
            Finalize sua assinatura
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Plano WhatsApp — Primeiros 200 usuários
          </p>
        </div>

        {/* Pricing */}
        <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-xl p-6 mb-6 text-center">
          <p className="text-sm text-muted-foreground/60 mb-1">
            De <span className="line-through opacity-60">R$ 14,90</span>/mês
          </p>
          <div>
            <span className="text-5xl font-black text-primary drop-shadow-[0_0_20px_rgba(74,222,128,0.3)]">
              R$ 9,90
            </span>
            <span className="text-muted-foreground text-lg ml-1">/mês</span>
          </div>
          <p className="text-sm text-foreground/70 font-semibold mt-2">
            Por 3 meses (depois R$ 14,90)
          </p>
          <div className="mt-3">
            <span className="inline-block bg-gradient-to-r from-[#C9A84C] to-[#D97706] text-[#0A0F0D] text-xs font-bold px-3 py-1 rounded-full">
              💰 Economize R$ 15 nos primeiros 3 meses
            </span>
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-6">
          {features.map((feat) => (
            <li key={feat} className="flex items-start gap-3 text-sm text-muted-foreground">
              <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
              {feat}
            </li>
          ))}
        </ul>

        {/* Bonus */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
          <p className="text-sm text-foreground">
            <strong>🎁 Bônus:</strong>{' '}
            <span className="text-muted-foreground">
              3 meses grátis do plano Essencial quando lançar (Maio 2026)
            </span>
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={handleCheckout}
          disabled={loading}
          className="w-full bg-primary hover:opacity-90 text-[#003914] font-black py-4 rounded-xl transition-opacity disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
        >
          {loading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Processando...
            </>
          ) : (
            'Assinar agora →'
          )}
        </button>

        {/* Footer */}
        <div className="mt-4 text-center space-y-2">
          <p className="text-xs text-muted-foreground">
            Cupom LAUNCH990 aplicado automaticamente
          </p>
          <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground/60">
            <Shield className="h-3 w-3" />
            Pagamento seguro via Stripe
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      }
    >
      <CheckoutContent />
    </Suspense>
  )
}
