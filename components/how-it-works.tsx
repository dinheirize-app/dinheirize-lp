import { MessageCircle, Sparkles, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Mande uma mensagem",
    description: "Diga 'gastei 45 no almoço' direto no WhatsApp. Sem formulário, sem app pra abrir.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "A IA cuida do resto",
    description: "Categorização automática, XP creditado, streak atualizado. Em menos de 2 segundos.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Veja seu dinheiro crescer",
    description: "Relatório semanal, missões diárias e alertas antes do problema acontecer.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#111810] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-bold text-primary tracking-widest uppercase">
            Simples assim
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white">
            Como o Dinheirize funciona?
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <Card
              key={step.number}
              className="bg-card border-white/5 rounded-2xl"
            >
              <CardContent className="p-10 space-y-6">
                <div className="text-5xl font-black text-white/5">{step.number}</div>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
