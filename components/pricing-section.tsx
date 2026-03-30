import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Free",
    price: "0",
    features: [
      "50 lançamentos/mês",
      "3 missões ativas",
      "Streak básico",
    ],
    featured: false,
    buttonText: "Começar grátis",
    buttonHref: "#waitlist",
  },
  {
    name: "WhatsApp",
    price: "9",
    features: [
      "Só o bot, sem limites",
      "Categorização com IA",
      "Relatório semanal",
    ],
    featured: false,
    buttonText: "Assinar",
    buttonHref: "#waitlist",
  },
  {
    name: "Essencial",
    price: "19",
    features: [
      "WhatsApp + painel web",
      "Missões ilimitadas",
      "Alertas inteligentes",
      "Score Dinheirize",
    ],
    featured: true,
    badge: "Mais Popular",
    buttonText: "Começar agora",
    buttonHref: "#waitlist",
  },
  {
    name: "Casal",
    price: "29",
    features: [
      "2 perfis conectados",
      "Dashboard conjunto",
      "Lembretes para os dois",
      "Tudo do Essencial",
    ],
    featured: false,
    buttonText: "Assinar",
    buttonHref: "#waitlist",
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
      <div className="flex flex-nowrap overflow-x-auto pb-4 md:grid md:grid-cols-4 md:overflow-visible gap-4 md:gap-6 items-stretch snap-x snap-mandatory">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "flex-shrink-0 w-[260px] md:w-auto snap-center p-8 rounded-2xl flex flex-col relative",
              plan.featured
                ? "border-2 border-primary bg-[#262B29] shadow-2xl shadow-primary/10 md:scale-105 md:z-10"
                : "border border-[#3E4A3D]/20 bg-card"
            )}
          >
            {plan.badge && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-[#003914] px-4 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                {plan.badge}
              </div>
            )}

            <h4 className={cn("text-lg font-bold mb-1", plan.featured ? "text-primary" : "text-foreground")}>
              {plan.name}
            </h4>

            <div className="mb-6">
              <span className="text-4xl font-black text-foreground">R${plan.price}</span>
              <span className="text-muted-foreground text-sm">/mês</span>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((feat) => (
                <li key={feat} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  {feat}
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
          </div>
        ))}
      </div>
    </section>
  )
}
