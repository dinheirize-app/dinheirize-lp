"use client"

import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Free",
    price: "0",
    priceLabel: "/mês",
    features: [
      { text: "10 lançamentos/mês", highlight: true },
      { text: "Dashboard básico", highlight: false },
      { text: "Suporte comunitário", highlight: false },
    ],
    featured: false,
    buttonText: "Começar Grátis",
  },
  {
    name: "Essencial",
    price: "19,90",
    priceLabel: "/mês",
    features: [
      { text: "Lançamentos ilimitados", highlight: true },
      { text: "IA de análise completa", highlight: true },
      { text: "Alertas inteligentes de gastos", highlight: true },
      { text: "Relatórios em PDF mensais", highlight: true },
    ],
    featured: true,
    buttonText: "Quero este agora",
    badge: "Mais Popular",
  },
  {
    name: "Casal",
    price: "29,90",
    priceLabel: "/mês",
    features: [
      { text: "Tudo do Essencial", highlight: false },
      { text: "2 contas conectadas", highlight: false },
      { text: "Carteira compartilhada", highlight: false },
    ],
    featured: false,
    buttonText: "Assinar Casal",
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="max-w-7xl mx-auto px-6 py-32">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#DFE4E0] mb-4">
          Planos que cabem no seu bolso
        </h2>
        <p className="text-[#879485]">
          Escolha como quer começar sua jornada para a liberdade financeira.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "p-10 rounded-2xl flex flex-col",
              plan.featured
                ? "border-2 border-primary bg-[#262B29] relative shadow-2xl shadow-primary/10 transform scale-105"
                : "border border-[#3E4A3D]/20 bg-[#1C211E]"
            )}
          >
            {plan.badge && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-[#003914] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                {plan.badge}
              </div>
            )}

            <h4
              className={cn(
                "text-xl font-bold mb-2",
                plan.featured ? "text-primary" : "text-[#DFE4E0]"
              )}
            >
              {plan.name}
            </h4>

            <div className="mb-8">
              <span className="text-4xl font-black text-[#DFE4E0]">
                R$ {plan.price}
              </span>
              <span className="text-[#879485]">{plan.priceLabel}</span>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              {plan.features.map((feature) => (
                <li
                  key={feature.text}
                  className={cn(
                    "flex items-center gap-3 text-sm",
                    plan.featured && feature.highlight
                      ? "font-bold text-[#DFE4E0]"
                      : "text-[#879485]"
                  )}
                >
                  <Check
                    className={cn(
                      "h-5 w-5 flex-shrink-0",
                      plan.featured && feature.highlight
                        ? "text-primary"
                        : "text-primary"
                    )}
                    strokeWidth={plan.featured && feature.highlight ? 3 : 2}
                  />
                  {feature.text}
                </li>
              ))}
            </ul>

            <button
              className={cn(
                "w-full py-4 rounded-xl font-bold text-lg transition-all",
                plan.featured
                  ? "bg-primary text-[#003914] hover:opacity-90 shadow-lg shadow-primary/20"
                  : "border border-[#3E4A3D]/30 text-[#DFE4E0] hover:bg-[#262B29]"
              )}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
