"use client"

import { ArrowRight, Shield, MessageCircle, CheckCircle, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WhatsAppMockup } from "@/components/whatsapp-mockup"

const avatars = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAnhBAXX4DVkdTpXVyGwHdfbR6njWad7Xhz3wjbL_yItes8NgMRDiHAjYpWaKCML2U2zebdU4ZQQBLXdUGFTIgYRV2ui73BlzM0V96_lJZQOOycD6b6GjndE3SPWtArbEURur_kczff5tDsrqaBJ1za6x7jKvkKVGXBo3QqwiVzI1wibvtd5A5AgybP5eih6wvXXxRAWgHyIuJcKBBPLIVotsYbGSWunvFJhj1kbp2eAV6i3dn_IC_3IaSRiiIBqYj8aBEDwSqR2fQV",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBQ8XsB2XQqun0RTsFFrzNGo1fHfuYBUYP9MErtsbiP1VRv8mRtg4488xIg3WrSRj2QfCZian0nfKgdg3IByVDd6kFSE1Arq2LQAsrnH7KND1ZYf2h62nELLDzb6TNFpdE571ZsgDDLR_0seTlZo8dvdThi3nv4mOr3wEexZY6Edm4RlAAPBxlR0ywumEa_eIlnG1xp8P9o-nEXlNSbw4_JAR4x5a0H_zUv64tmcqcUxejQAvA0j5DbNjp1-eldV1l5qGEySouJi_r3",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDDksCqBIBk_gGJHq7EGkPomXApbqCFLcSXlOtTFxEfe22BtbNE9LakFs5w4GhV5InfUVuHQurWasblXTBIPb8N6GsKG7UYyxIYwjkwtagbSaStQQmMBHbuVzp4nWIuK38Yx2U0x4V7umwWhR2W4wWdrD76SX4ixJuOLB7hc8EA66pJv1q5WAJ3r3LGR0WNFr1yoqF8iOedgRu4YGzYdsRBIKhMk2wUL7nmYnav_27U8P0MTxn9hby1AcbWX1YnNBGZqZ8nv1bbXWPf",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC2XZcgwTbOS_AT6umqbZM4od7ZXQ4wqyqHRQK3fbXCoytOyXN4ZyP6lFcb3LV1o8DgvxgTalWNxR4ZL6LxTrfS1WoBMmx0cQ6tqnHBU64af61tSTekq0JwYwHtM_PoPEEImR0pU7nRBYAp6CRvHlEEPFWjLFsIkRRLup_pOhLv7sfR_tbes5TUlKmQEZB_0i--3xIqLJrxEmV-anSa4bYRmafwOpfFwNZxSE6ZBroQueaDpgBTJmYm2Rg37zlOINiZXl3lxr8BVWV7",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCNm-gKtxUl1leboQpAr6m8fsYKdXkghceOL6gBS8xsFkMLUpgo-PDYpMGii50gSJFiK9yluei3fc5Xgw3rP-Ve-m4BvNfi5yOMUfsAnyckUdhkKhyj6DvaSSZRnaoKT7dctjVj_ScoyimIErudSYgJ0ppRQ9ovEoO83xAU4uSd2yVWS4Ueyggi--lEj1u45O9WNQnsMHMvhLHHob1aDhCnY5FK8UomC3VnSgvZy1xk8lsO7Pm70_Tf07G1TaCyPcw5KpB9T9M3CFCT",
]

export function HeroSection() {
  return (
    <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-outline-variant/20">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">
              COPILOTO FINANCEIRO COM IA
            </span>
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9] text-white text-balance">
            Finalmente no <br />
            <span className="italic font-light text-primary">controle</span> do seu dinheiro.
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
            A primeira inteligência artificial que vive no seu WhatsApp para organizar seus gastos, bater metas e investir com segurança.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              size="lg" 
              className="hero-gradient inner-bezel text-white font-extrabold text-lg shadow-[0px_20px_40px_rgba(22,163,74,0.15)] rounded-xl px-8 py-6 h-auto"
            >
              Começar Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-outline-variant/30 text-white rounded-xl font-bold text-lg hover:bg-white/5 px-8 py-6 h-auto"
            >
              Ver como funciona
            </Button>
          </div>
          
          {/* Urgency */}
          <p className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Flame className="h-4 w-4 text-amber-500" />
            ÚLTIMAS VAGAS DISPONÍVEIS NA VERSÃO BETA
          </p>
          
          {/* Social Proof */}
          <div className="pt-8 space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {avatars.map((avatar, index) => (
                  <img
                    key={index}
                    className="w-10 h-10 rounded-full border-2 border-surface object-cover"
                    src={avatar}
                    alt={`Usuário ${index + 1}`}
                  />
                ))}
              </div>
              <span className="text-sm font-bold text-white">247 pessoas na lista de espera</span>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-2">
              <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                <Shield className="h-4 w-4 text-primary" />
                Dados protegidos
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                <MessageCircle className="h-4 w-4 text-primary" />
                Funciona no WhatsApp
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                <CheckCircle className="h-4 w-4 text-primary" />
                Grátis para começar
              </div>
            </div>
          </div>
        </div>
        
        {/* WhatsApp Mockup */}
        <WhatsAppMockup />
      </div>
    </section>
  )
}
