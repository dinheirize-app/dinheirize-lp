import { Check, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

const plans = [
  {
    label: "Gratuito",
    name: "Free",
    price: "0",
    period: "/mês",
    features: [
      { text: "10 lançamentos/mês", available: true },
      { text: "1 missão ativa", available: true },
      { text: "Relatório mensal", available: true },
      { text: "Streak básico", available: true },
    ],
    featured: false,
    buttonText: "Começar grátis",
    buttonHref: "#waitlist",
    status: "available" as const,
  },
  {
    label: "Entrada",
    name: "WhatsApp",
    price: "14,90",
    period: "/mês",
    promoPrice: "9,90",
    savingsBadge: "57% mais barato que apps tradicionais",
    features: [
      { text: "Lançamentos ilimitados", available: true },
      { text: "3 missões simultâneas", available: true },
      { text: "Categorização IA", available: true },
      { text: "Relatório semanal", available: true },
      { text: "Modo Confissão", available: true },
      { text: "Quanto custa sua hora", available: true },
      { text: "Alerta de padrão", available: true },
      { text: "Streak com emoji 🔥", available: true },
      { text: "Score Dinheirize", available: true },
    ],
    featured: true,
    badge: "Comece por aqui",
    buttonText: "Assinar agora",
    buttonHref: "#waitlist",
    status: "available" as const,
    statusLabel: "🟢 Disponível agora",
    promo: "🔥 Oferta limitada: 200 vagas — R$9,90/mês nos primeiros 3 meses (cupom LAUNCH990)",
  },
  {
    label: "Completo",
    name: "Essencial",
    price: "29,90",
    period: "/mês",
    savingsBadge: "33% mais barato que a concorrência",
    features: [
      { text: "Tudo do plano WhatsApp", available: true, bold: true as const },
      { text: "Dashboard web + app mobile (PWA)", available: false },
      { text: "Gráficos, ligas e histórico ilimitado", available: false },
    ],
    featured: false,
    buttonText: "Notificar quando lançar",
    buttonHref: "#waitlist",
    status: "soon" as const,
    statusLabel: "🔜 Lançamento: Maio 2026",
    incentive: "💎 Entre na lista e ganhe 3 meses grátis no lançamento",
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="max-w-7xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="text-center mb-16 space-y-3">
        <p className="text-sm font-bold text-primary tracking-widest uppercase">Planos</p>
        <h2 className="text-4xl font-bold text-foreground">
          Planos que cabem no seu bolso
        </h2>
        <p className="text-muted-foreground">
          Comece grátis. Evolua no seu ritmo.
        </p>
      </div>

      {/* Cards — scroll horizontal no mobile */}
      <div className="flex flex-nowrap overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible gap-4 md:gap-6 items-stretch snap-x snap-mandatory">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "flex-shrink-0 w-[280px] md:w-auto snap-center p-8 rounded-2xl flex flex-col relative",
              plan.featured
                ? "border-2 border-primary bg-[#262B29] shadow-2xl shadow-primary/10 md:scale-105 md:z-10"
                : plan.status === "soon"
                  ? "border border-[#3E4A3D]/20 bg-card opacity-85"
                  : "border border-[#3E4A3D]/20 bg-card"
            )}
          >
            {plan.badge && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-[#003914] px-4 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                {plan.badge}
              </div>
            )}

            {/* Plan label */}
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1">
              {plan.label}
            </p>

            <h4 className={cn("text-lg font-bold mb-1", plan.featured ? "text-primary" : "text-foreground")}>
              {plan.name}
            </h4>

            {"promoPrice" in plan && plan.promoPrice ? (
              <div className="mb-4">
                <p className="text-sm text-muted-foreground/50 mb-1">
                  De <span className="line-through opacity-60">R${plan.price}</span>/mês
                </p>
                <span className="text-5xl font-black text-primary drop-shadow-[0_0_20px_rgba(74,222,128,0.3)]">
                  R${plan.promoPrice}
                </span>
                <span className="text-muted-foreground text-lg ml-1">{plan.period}</span>
                <div className="mt-2">
                  <span className="inline-block bg-gradient-to-r from-[#C9A84C] to-[#D97706] text-[#0A0F0D] text-xs font-bold px-3 py-1 rounded-full">
                    💰 Economize R$15 nos primeiros 3 meses
                  </span>
                </div>
              </div>
            ) : (
              <div className="mb-2">
                <span className="text-4xl font-black text-foreground">R${plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
                {"savingsBadge" in plan && plan.savingsBadge && (
                  <p className="text-xs text-[#4ADE80] font-semibold mt-1">
                    {plan.savingsBadge}
                  </p>
                )}
              </div>
            )}

            {/* Status Badge */}
            {plan.statusLabel && (
              <div
                className={cn(
                  "inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full mb-4 w-fit",
                  plan.status === "available"
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "bg-[#D97706]/10 text-[#D97706] border border-[#D97706]/20"
                )}
              >
                {plan.statusLabel}
              </div>
            )}

            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((feat) => (
                <li key={feat.text} className={cn(
                  "flex items-start gap-2.5 text-sm",
                  feat.available ? "text-muted-foreground" : "text-muted-foreground/60"
                )}>
                  {feat.available ? (
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  ) : (
                    <Clock className="h-4 w-4 text-muted-foreground/40 flex-shrink-0 mt-0.5" strokeWidth={2} />
                  )}
                  <span className={"bold" in feat && feat.bold ? "font-bold text-foreground" : ""}>
                    {!feat.available && "⏳ "}{feat.text}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href={plan.buttonHref}
              className={cn(
                "w-full py-3 rounded-xl font-bold text-sm text-center transition-all",
                plan.featured
                  ? "bg-primary text-[#003914] hover:opacity-90 shadow-lg shadow-primary/20"
                  : "border border-[#3E4A3D]/40 text-foreground hover:bg-[#262B29]"
              )}
              aria-label={`${plan.buttonText} — plano ${plan.name}`}
            >
              {plan.buttonText}
            </a>

            {"promo" in plan && plan.promo && (
              <div className="mt-4 text-center">
                <span className="inline-block bg-[#D97706] text-white text-[10px] font-bold px-3 py-1 rounded-full">
                  🔥 Oferta limitada: 200 vagas · cupom LAUNCH990
                </span>
              </div>
            )}

            {plan.incentive && (
              <p className="text-xs text-[#C9A84C] font-semibold mt-4 text-center">
                {plan.incentive}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Teaser de plano futuro */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-2">
          <span className="text-[#7C3AED]">💞</span>
          <span>
            <strong className="text-foreground">Plano Casal</strong> em
            desenvolvimento (2 perfis + dashboard conjunto)
          </span>
        </span>
        <a
          href="#waitlist"
          className="text-primary font-semibold hover:underline"
        >
          Me avise quando lançar →
        </a>
      </div>
    </section>
  )
}
