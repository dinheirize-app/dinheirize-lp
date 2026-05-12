export function WhatsAppMockup() {
  return (
    <div className="relative flex justify-center">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full" />
      
      {/* Phone Frame */}
      <div className="relative w-full max-w-[320px] bg-[#1C211E] rounded-[3rem] border-[8px] border-[#262B29] overflow-hidden shadow-2xl">
        {/* WhatsApp Top Bar */}
        <div className="bg-[#075E54] p-4 flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-black flex-shrink-0">
              <img src="/dinheirize-logo.png" alt="Dinheirize" className="w-full h-full object-cover" />
            </div>
          <div>
            <p className="text-sm font-bold text-white">Dz</p>
            <p className="text-[10px] text-white/70">Online agora</p>
          </div>
        </div>
        
        {/* Chat Content */}
        <div className="p-4 space-y-4 h-[500px] overflow-y-auto bg-[#0F1412]">
          {/* User Message 1 */}
          <div className="bg-primary/20 p-3 rounded-2xl rounded-tr-none text-xs text-white max-w-[85%] ml-auto border border-primary/20">
            gastei 45 no almoço
          </div>

          {/* Bot Response 1 */}
          <div className="bg-[#181D1A] p-3 rounded-2xl rounded-tl-none text-xs text-foreground max-w-[85%] border border-white/5 whitespace-pre-line">
            {"✓ Alimentação · R$45,00 · +10 XP 🎯\n⏱ Equivale a 1h26min do seu trabalho\nStreak: 7 dias 🔥\nRegistrado! Continue assim 💪"}
          </div>

          {/* User Message 2 */}
          <div className="bg-primary/20 p-3 rounded-2xl rounded-tr-none text-xs text-white max-w-[85%] ml-auto border border-primary/20">
            torrei 80 numa besteira
          </div>

          {/* Bot Response 2 */}
          <div className="bg-[#181D1A] p-3 rounded-2xl rounded-tl-none text-xs text-foreground max-w-[85%] border border-white/5 whitespace-pre-line">
            {"✓ Outros · R$80,00 · +10 XP 🎯\n⏱ Equivale a 2h34min do seu trabalho\n\nFaz parte! O importante é ter consciência 😉\n+10 XP pela honestidade 🎯\n\n\"O segredo não é ganhar mais, é ser dono do que já ganha.\" — George S. Clason"}
          </div>
        </div>
        
        {/* Input Area */}
        <div className="bg-[#1C211E] p-4 border-t border-white/5">
          <div className="bg-[#0F1412] h-8 rounded-full flex items-center px-4 text-[10px] text-muted-foreground">
            Digite uma mensagem...
          </div>
        </div>
      </div>
    </div>
  )
}
