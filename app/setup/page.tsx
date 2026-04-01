import { MessageCircle } from 'lucide-react'

export default function SetupPage() {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-primary font-black text-xl">Dinheirize</span>
          <h1 className="text-4xl font-bold text-foreground">
            Configure seu WhatsApp
          </h1>
          <p className="text-muted-foreground">
            Leva menos de 2 minutos. Siga os passos abaixo.
          </p>
        </div>

        {/* Step 1 */}
        <div className="bg-card rounded-2xl border border-outline-variant/20 p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-primary text-[#003914] font-black text-sm flex items-center justify-center">
              1
            </span>
            <h2 className="text-xl font-bold text-foreground">
              Salve nosso número
            </h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Adicione este número aos seus contatos:
          </p>
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-primary">
              +55 11 99999-9999
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Salve como &quot;Dinheirize&quot;
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-card rounded-2xl border border-outline-variant/20 p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-primary text-[#003914] font-black text-sm flex items-center justify-center">
              2
            </span>
            <h2 className="text-xl font-bold text-foreground">
              Envie &quot;Oi&quot;
            </h2>
          </div>
          <p className="text-muted-foreground mb-6">
            Inicie a conversa enviando qualquer mensagem. O bot vai te guiar
            pelo cadastro inicial.
          </p>
          <a
            href="https://wa.me/5511999999999?text=Oi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:opacity-90 text-white font-bold py-4 px-8 rounded-xl transition-opacity"
          >
            <MessageCircle className="h-5 w-5" />
            Abrir WhatsApp
          </a>
        </div>

        {/* Tip */}
        <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-xl p-6">
          <p className="text-sm text-[#C9A84C]">
            <strong>💡 Dica:</strong> O bot vai te guiar pelo cadastro inicial.
            Você pode lançar seu primeiro gasto logo na primeira conversa!
          </p>
        </div>
      </div>
    </div>
  )
}
