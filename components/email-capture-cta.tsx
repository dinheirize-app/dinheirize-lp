"use client";

import { useState } from "react";
import { Loader2, CheckCircle } from "lucide-react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function EmailCaptureCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!EMAIL_REGEX.test(email)) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="waitlist" className="max-w-7xl mx-auto px-6 py-20">
      <div className="relative bg-gradient-to-br from-[#111810] to-[#0A0F0D] rounded-3xl p-10 sm:p-16 md:p-20 text-center border border-primary/20 overflow-hidden">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          aria-hidden="true"
          style={{
            backgroundImage: "radial-gradient(#4ADE80 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] font-black text-primary">
            Lista de Espera
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-off-white leading-tight">
            Pronto para nunca mais se perguntar para onde foi seu dinheiro?
          </h2>

          <p className="text-muted-foreground text-lg">
            Junte-se a quem já está no controle. Grátis para começar.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto pt-2"
            noValidate
          >
            {status === "success" ? (
              <div
                role="alert"
                className="flex items-center justify-center gap-3 bg-primary/10 border border-primary/20 rounded-xl px-6 py-4 text-foreground font-medium"
              >
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />✓
                Você está na lista! Avisaremos em primeiro lugar.
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  className="flex-1 bg-[#0A0F0D] border border-[#3E4A3D]/40 rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  disabled={status === "loading"}
                  aria-label="Seu e-mail"
                  required
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-primary text-[#003914] font-black px-6 py-4 rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap disabled:opacity-60 flex items-center justify-center gap-2"
                  aria-label="Garantir minha vaga grátis na lista de espera"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2
                        className="h-4 w-4 animate-spin"
                        aria-hidden="true"
                      />
                      Enviando...
                    </>
                  ) : (
                    "Garantir minha vaga grátis"
                  )}
                </button>
              </div>
            )}

            {status === "error" && (
              <p role="alert" className="text-red-400 text-sm mt-3">
                Algo deu errado. Tente novamente.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
