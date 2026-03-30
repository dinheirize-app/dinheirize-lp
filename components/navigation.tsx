"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 h-16 bg-[#0A0F0D]/80 backdrop-blur-xl border-b border-white/5">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-full">
        {/* Brand */}
        <Link href="/" className="text-2xl font-black tracking-tighter text-white">
          Dinheirize
        </Link>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="#features" 
            className="text-muted-foreground font-medium hover:text-primary transition-colors duration-300"
          >
            Recursos
          </Link>
          <Link 
            href="#pricing" 
            className="text-muted-foreground font-medium hover:text-primary transition-colors duration-300"
          >
            Planos
          </Link>
          <Link 
            href="#testimonials" 
            className="text-muted-foreground font-medium hover:text-primary transition-colors duration-300"
          >
            Depoimentos
          </Link>
        </div>
        
        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-white hover:text-primary">
            Entrar
          </Button>
          <Button className="hero-gradient inner-bezel text-white font-bold shadow-[0px_10px_20px_rgba(22,163,74,0.2)] rounded-xl">
            Quero entrar grátis
          </Button>
        </div>
      </div>
    </nav>
  )
}
