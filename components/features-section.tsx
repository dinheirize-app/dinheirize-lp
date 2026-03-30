import { Smartphone, Brain, Gamepad2, Target, Package, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const mainFeatures = [
  {
    icon: Smartphone,
    title: "Foco total no WhatsApp",
    description: "Esqueça planilhas complexas. Controle tudo de onde você já passa a maior parte do seu dia.",
  },
  {
    icon: Brain,
    title: "IA Generativa Avançada",
    description: "Pergunte \"Quanto gastei em Uber mês passado?\" e receba a resposta na hora, com gráficos simples.",
  },
  {
    icon: Gamepad2,
    title: "Gamificação Nativa",
    description: "Ganhe conquistas ao bater metas de economia. Poupar dinheiro nunca foi tão divertido.",
  },
  {
    icon: Target,
    title: "Gestão de Metas",
    description: "Defina objetivos de curto, médio e longo prazo e deixe a IA cuidar da jornada por você.",
  },
]

const secondaryFeatures = [
  {
    icon: Package,
    title: "Caixinhas Inteligentes",
    description: "Separe seu dinheiro automaticamente para emergências, lazer ou investimentos.",
    iconColor: "text-purple-400",
  },
  {
    icon: Users,
    title: "Plano Casal",
    description: "Conecte duas contas e gerencie o orçamento familiar de forma transparente e privada.",
    iconColor: "text-blue-400",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="text-left mb-16 space-y-4">
        <h2 className="text-4xl font-bold tracking-tight text-white max-w-xl leading-tight text-balance">
          Um arsenal completo para dominar suas finanças.
        </h2>
      </div>
      
      {/* Main Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {mainFeatures.map((feature) => (
          <Card 
            key={feature.title}
            className="bg-[#0A0F0D] border-white/5 hover:border-primary/20 transition-all rounded-2xl group"
          >
            <CardContent className="p-10">
              <feature.icon className="h-10 w-10 text-primary mb-6" />
              <h4 className="text-2xl font-bold text-white mb-4">{feature.title}</h4>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Secondary Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {secondaryFeatures.map((feature) => (
          <Card 
            key={feature.title}
            className="bg-secondary border-white/5 rounded-2xl"
          >
            <CardContent className="p-10">
              <div className="flex items-center gap-4 mb-4">
                <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
                <h4 className="text-xl font-bold text-white">{feature.title}</h4>
              </div>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
