"use client"

import { useState, useEffect } from "react"
import { Loader2, CheckCircle } from "lucide-react"

export function EmailCaptureCTA() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [countdown, setCountdown] = useState({ days: 1, hours: 14, minutes: 52 })

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        let { days, hours, minutes } = prev
        if (minutes > 0) {
          minutes--
        } else if (hours > 0) {
          hours--
          minutes = 59
        } else if (days > 0) {
          days--
          hours = 23
          minutes = 59
        }
        return { days, hours, minutes }
      })
    }, 60000) // Update every minute

    return () => clearInterval(timer)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setStatus("error")
      setErrorMessage("Por favor, insira um email válido.")
      return
    }

    setStatus("loading")

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Success state
    setStatus("success")
    setEmail("")
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="relative bg-gradient-to-br from-[#111810] to-[#0A0F0D] rounded-3xl p-12 md:p-20 text-center border border-primary/20 overflow-hidden">
        {/* Dot Grid Background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(#62df7d 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] font-black text-primary">
            ACESSO ANTECIPADO
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#FAFCF9]">
            Seu dinheiro no próximo nível.
          </h2>

          <p className="text-[#879485] text-lg">
            Junte-se a centenas de pessoas que estão mudando sua relação com as
            finanças hoje.
          </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto pt-4">
            {status === "success" ? (
              <div className="flex items-center justify-center gap-3 bg-primary/10 border border-primary/20 rounded-xl px-6 py-4 text-[#DFE4E0] font-medium">
                <CheckCircle className="h-5 w-5 text-primary" />
                Você está na lista! Fique de olho no seu email.
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (status === "error") setStatus("idle")
                  }}
                  className="flex-1 bg-[#0A0F0D] border border-[#3E4A3D]/30 rounded-xl px-6 py-4 text-[#DFE4E0] placeholder:text-[#6B7A6E] focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  disabled={status === "loading"}
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-primary text-[#003914] font-black px-8 py-4 rounded-xl hover:opacity-90 transition-all whitespace-nowrap disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Garantir Vaga"
                  )}
                </button>
              </div>
            )}

            {status === "error" && (
              <p className="text-[#FAFCF9] text-sm mt-3 bg-red-500/20 rounded-lg px-4 py-2">
                {errorMessage}
              </p>
            )}
          </form>

          {/* Countdown Timer */}
          <div className="flex items-center justify-center gap-4 text-sm font-bold text-primary">
            <div className="bg-[#262B29] px-3 py-1 rounded-lg">
              {String(countdown.days).padStart(2, "0")}d
            </div>
            <div className="bg-[#262B29] px-3 py-1 rounded-lg">
              {String(countdown.hours).padStart(2, "0")}h
            </div>
            <div className="bg-[#262B29] px-3 py-1 rounded-lg">
              {String(countdown.minutes).padStart(2, "0")}m
            </div>
            <span className="text-[#879485] font-medium">
              para o próximo lote
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
