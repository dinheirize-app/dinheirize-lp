"use client";

import { ArrowRight, Shield, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppMockup } from "@/components/whatsapp-mockup";
import { getWaitlistCount, getRemainingSpots, WAITLIST_CAP } from "@/lib/waitlist-count";

const WAITLIST_AVATARS = [
  { initials: "RL", className: "bg-primary text-[#003914]" },
  { initials: "AS", className: "bg-emerald-500 text-white" },
  { initials: "MP", className: "bg-purple-500 text-white" },
  { initials: "JC", className: "bg-blue-500 text-white" },
  { initials: "FM", className: "bg-[#C9A84C] text-[#0A0F0D]" },
] as const;

export function HeroSection() {
  const waitlistCount = getWaitlistCount();
  const remaining = getRemainingSpots();
  const progressPct = Math.round((waitlistCount / WAITLIST_CAP) * 100);

  return (
    <section className="pt-36 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Column */}
        <div className="space-y-8 fade-in-up">
          {/* Beta Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-outline-variant/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-primary uppercase">
              🚀 Beta · Lançamento Abril 2026
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.92] text-white text-balance">
            Finalmente no <br />
            <em className="not-italic italic font-light text-[#4ADE80]">
              controle
            </em>{" "}
            do seu dinheiro.
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
            O copiloto financeiro que fala com você onde você já está — no
            WhatsApp.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Button
              size="lg"
              className="hero-gradient inner-bezel text-white font-extrabold text-base shadow-[0px_20px_40px_rgba(22,163,74,0.2)] rounded-xl px-8 py-6 h-auto hover:opacity-90 transition-opacity"
              aria-label="Começar grátis no Dinheirize"
              asChild
            >
              <a href="#waitlist">
                Começar grátis
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-outline-variant/30 text-white rounded-xl font-bold text-base hover:bg-white/5 px-8 py-6 h-auto transition-colors"
              aria-label="Ver como o Dinheirize funciona"
              asChild
            >
              <a href="#how-it-works">Ver como funciona</a>
            </Button>
          </div>

          {/* VIP Incentive */}
          <div className="px-4 py-3 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/30 space-y-1">
            <p className="text-sm text-[#C9A84C] font-semibold">
              💎 <strong>Primeiros 200:</strong> R$9,90/mês por 3 meses (depois
              R$14,90)
            </p>
            <p className="text-xs text-[#C9A84C]/80">
              + Bônus: 3 meses grátis do Essencial quando lançar em Maio
            </p>
          </div>

          {/* Social Proof */}
          <div className="pt-2 space-y-4">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <div className="flex -space-x-3">
                {WAITLIST_AVATARS.map((avatar) => (
                  <div
                    key={avatar.initials}
                    className={`w-10 h-10 rounded-full border-2 border-[#0A0F0D] flex items-center justify-center text-xs font-extrabold ${avatar.className}`}
                    aria-hidden="true"
                  >
                    {avatar.initials}
                  </div>
                ))}
              </div>
              <span className="text-sm font-bold text-white">
                +{waitlistCount} já garantiram a vaga
              </span>
            </div>

            {/* Progress bar — vagas R$9,90 */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-[11px] font-semibold">
                <span className="text-muted-foreground">
                  Vagas R$9,90/mês
                </span>
                <span className="text-primary">
                  {waitlistCount}/{WAITLIST_CAP} ·{" "}
                  {remaining > 0 ? `${remaining} restando` : "esgotadas"}
                </span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-[#4ADE80] transition-all duration-700"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-5 pt-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                <Shield
                  className="h-4 w-4 text-primary flex-shrink-0"
                  aria-hidden="true"
                />
                Dados protegidos
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                <MessageCircle
                  className="h-4 w-4 text-primary flex-shrink-0"
                  aria-hidden="true"
                />
                Funciona no WhatsApp
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                <CheckCircle
                  className="h-4 w-4 text-primary flex-shrink-0"
                  aria-hidden="true"
                />
                Grátis para começar
              </div>
            </div>
          </div>
        </div>

        {/* Mockup Column */}
        <div className="flex justify-center lg:justify-end">
          <WhatsAppMockup />
        </div>
      </div>
    </section>
  );
}
