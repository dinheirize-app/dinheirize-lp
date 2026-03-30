export function WhatsAppMockup() {
  return (
    <div className="relative flex justify-center">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full" />
      
      {/* Phone Frame */}
      <div className="relative w-full max-w-[320px] bg-[#1C211E] rounded-[3rem] border-[8px] border-[#262B29] overflow-hidden shadow-2xl">
        {/* WhatsApp Top Bar */}
        <div className="bg-[#075E54] p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
            D
          </div>
          <div>
            <p className="text-sm font-bold text-white">Dinheirize IA</p>
            <p className="text-[10px] text-white/70">Online agora</p>
          </div>
        </div>
        
        {/* Chat Content */}
        <div className="p-4 space-y-4 h-[500px] overflow-y-auto bg-[#0F1412]">
          {/* Bot Message */}
          <div className="bg-[#181D1A] p-3 rounded-2xl rounded-tl-none text-xs text-foreground max-w-[85%] border border-white/5">
            Oi! Notei que você gastou R$ 45,00 no iFood hoje. Isso representa 12% do seu orçamento mensal de lazer. Quer que eu ajuste as metas?
          </div>
          
          {/* User Message */}
          <div className="bg-primary/20 p-3 rounded-2xl rounded-tr-none text-xs text-white max-w-[85%] ml-auto border border-primary/20">
            Pode ajustar! E me mostre quanto falta para a minha viagem.
          </div>
          
          {/* Bot Response */}
          <div className="bg-[#181D1A] p-3 rounded-2xl rounded-tl-none text-xs text-foreground max-w-[85%] border border-white/5">
            Feito! Você já poupou 65% do valor (R$ 1.300/R$ 2.000). Se continuar assim, bate a meta em 45 dias!
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
