import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    emoji: "🤫",
    title: "Modo Confissão",
    description:
      "Gastou numa besteira? Sem julgamento. O bot responde como coach, não como sistema.",
  },
  {
    emoji: "🔍",
    title: "Alerta Invisível",
    description:
      "Toda sexta você gasta R$180 a mais. A IA detecta antes de você perceber.",
  },
  {
    emoji: "⏱️",
    title: "Quanto custa sua hora",
    description:
      "Tênis R$349 = 4h32min do seu trabalho. Muda a relação com o dinheiro.",
  },
  {
    emoji: "⭐",
    title: "Score Dinheirize",
    description:
      "0 a 1000 baseado no seu comportamento. Público, competitivo, viciante.",
    badges: [
      { label: "Já disponível no bot", type: "available" as const },
      { label: "Dashboard visual: Maio 2026", type: "soon" as const },
    ],
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="text-left mb-16 space-y-3">
        <p className="text-sm font-bold text-primary tracking-widest uppercase">Diferenciais</p>
        <h2 className="text-4xl font-bold tracking-tight text-white max-w-xl leading-tight text-balance">
          O que só o Dinheirize tem.
        </h2>
      </div>

      {/* 2×2 Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="bg-card border-white/5 hover:border-primary/20 transition-all duration-300 rounded-2xl group"
          >
            <CardContent className="p-8 sm:p-10 space-y-4">
              <span className="text-4xl" role="img" aria-label={feature.title}>
                {feature.emoji}
              </span>
              <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              {feature.badges && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {feature.badges.map((badge) => (
                    <span
                      key={badge.label}
                      className={
                        badge.type === "available"
                          ? "inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                          : "inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-[#D97706]/10 text-[#D97706] border border-[#D97706]/20"
                      }
                    >
                      {badge.type === "available" ? "🟢" : "🔜"} {badge.label}
                    </span>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
