"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#how-it-works", label: "Como funciona" },
  { href: "#features", label: "Recursos" },
  { href: "#pricing", label: "Planos" },
]

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 h-16 bg-[#0A0F0D]/80 backdrop-blur-xl border-b border-white/5">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-full">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 text-2xl font-black tracking-tighter text-white">
          <div className="w-8 h-8 overflow-hidden flex-shrink-0">
              <Image src="/dinheirize-logo.png" alt="Dinheirize logo" width={32} height={32} className="w-full h-full object-cover scale-[1.35]" />
            </div>
          Dinheirize
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground font-medium hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            className="hero-gradient inner-bezel text-white font-bold shadow-[0px_10px_20px_rgba(22,163,74,0.2)] rounded-xl hover:opacity-90 transition-opacity"
            aria-label="Começar grátis no Dinheirize"
            asChild
          >
            <a href="#waitlist">Começar grátis</a>
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0A0F0D]/95 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground font-medium hover:text-primary transition-colors py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#waitlist"
            className="mt-2 text-center bg-primary text-white font-bold py-3 rounded-xl hover:opacity-90 transition-opacity"
            onClick={() => setMobileOpen(false)}
            aria-label="Começar grátis no Dinheirize"
          >
            Começar grátis
          </a>
        </div>
      )}
    </nav>
  )
}
