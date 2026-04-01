import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote: "Eu sempre desisti de apps de finanças porque era chato registrar. Com o Dinheirize no WhatsApp, eu só mando uma mensagem e ele organiza tudo.",
    name: "Ricardo Lima",
    role: "Designer",
    initials: "RL",
    bgColor: "bg-primary",
  },
  {
    quote: "Já tentei Mobills, Organizze e GuiaBolso. Todos iguais: bonitos mas eu nunca lembro de usar. O bot me responde na hora, não preciso mudar de app.",
    name: "Ana Silva",
    role: "Engenheira",
    initials: "AS",
    bgColor: "bg-emerald-500",
  },
  {
    quote: "Meu dinheiro sumia e eu não sabia pra onde. Agora o bot me avisa ANTES de acontecer — não depois que já estourou.",
    name: "Marcos Paulo",
    role: "Médico",
    initials: "MP",
    bgColor: "bg-purple-500",
  },
]

function StarRating() {
  return (
    <div className="flex text-[#C9A84C] gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[#111810] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-16 text-center">
          O que dizem os primeiros usuários
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.name}
              className="bg-card border-white/5 rounded-2xl"
            >
              <CardContent className="p-8 space-y-6">
                <StarRating />
                <p className="text-foreground leading-relaxed italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full ${testimonial.bgColor} flex items-center justify-center font-bold text-white text-sm`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
