import type { Metadata } from "next"
import { LegalLayout } from "@/components/legal-layout"

export const metadata: Metadata = {
  title: "Termos de Uso — Dinheirize",
  description:
    "Termos e condições para uso da plataforma Dinheirize, copiloto financeiro no WhatsApp.",
}

export default function TermosPage() {
  return (
    <LegalLayout title="Termos de Uso" lastUpdated="12 de maio de 2026">
      <section>
        <p>
          Estes Termos de Uso (&quot;Termos&quot;) regem a utilização da
          plataforma <strong>Dinheirize</strong> (&quot;serviço&quot;,
          &quot;plataforma&quot;), copiloto financeiro acessado via WhatsApp e
          web. Ao se cadastrar ou usar o serviço, você (&quot;usuário&quot;)
          aceita integralmente estes Termos.
        </p>
        <p>
          Se você não concorda com algum ponto, não utilize a plataforma.
        </p>
      </section>

      <section>
        <h2>1. O que é o serviço</h2>
        <p>
          O <strong>Dinheirize</strong> é uma plataforma de organização
          financeira pessoal operada por um MEI regularmente inscrito no
          Brasil. O usuário interage com um bot via WhatsApp, registra gastos
          por mensagem natural, recebe categorização automática, lembretes de
          contas, metas, gamificação (XP, streaks) e relatórios.
        </p>
        {/* TODO antes do lançamento: incluir razão social + CNPJ + cidade/UF */}
        <p>
          <strong>Importante:</strong> o Dinheirize NÃO é uma instituição
          financeira, NÃO presta consultoria de investimentos e NÃO oferece
          aconselhamento financeiro personalizado. As funcionalidades servem
          apenas como ferramenta de organização e visualização de dados que
          você mesmo informa.
        </p>
      </section>

      <section>
        <h2>2. Cadastro e elegibilidade</h2>
        <ul>
          <li>É necessário ter pelo menos 18 anos para usar o serviço.</li>
          <li>
            Você é responsável pela veracidade dos dados informados (e-mail,
            telefone) e por mantê-los atualizados.
          </li>
          <li>
            O cadastro é pessoal e intransferível. Você é responsável pelo uso
            da sua conta, inclusive ações realizadas por terceiros com acesso
            ao seu WhatsApp.
          </li>
          <li>
            Reservamo-nos o direito de recusar cadastro ou suspender contas que
            violem estes Termos.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Planos, preços e pagamento</h2>
        <ul>
          <li>
            O serviço oferece um plano <strong>gratuito</strong> com
            funcionalidades limitadas e planos <strong>pagos</strong> com
            recursos adicionais. Os preços vigentes são exibidos na página de
            planos e podem ser alterados, com aviso prévio de 30 dias para
            assinantes ativos.
          </li>
          <li>
            Planos pagos são cobrados em ciclos <strong>mensais</strong>{" "}
            recorrentes via Stripe, no valor exibido no momento da contratação.
          </li>
          <li>
            Promoções (ex: &quot;primeiros 200 usuários — R$9,90 por 3 meses&quot;)
            têm prazo e quantidade limitados. Após o término, a cobrança passa
            para o valor regular do plano.
          </li>
          <li>
            Em caso de falha no pagamento, a conta pode ser rebaixada ao plano
            gratuito após 7 dias de inadimplência.
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Cancelamento e reembolso</h2>
        <ul>
          <li>
            Você pode cancelar a assinatura a qualquer momento. O cancelamento
            tem efeito ao final do ciclo já pago — não há cobrança proporcional
            por meses parciais.
          </li>
          <li>
            <strong>Direito de arrependimento (CDC art. 49):</strong> nas
            compras feitas à distância, você tem 7 dias corridos a partir da
            contratação para solicitar o reembolso integral, sem necessidade de
            justificativa. Solicitações via{" "}
            <a href="mailto:contato@dinheirize.com">contato@dinheirize.com</a>.
          </li>
          <li>
            Após o prazo de arrependimento, reembolsos só serão concedidos em
            caso de falha do serviço atribuível ao Dinheirize.
          </li>
        </ul>
      </section>

      <section>
        <h2>5. Uso aceitável</h2>
        <p>É vedado ao usuário:</p>
        <ul>
          <li>Usar o serviço para fins ilícitos ou em violação a estes Termos.</li>
          <li>
            Tentar acessar dados de outros usuários, burlar mecanismos de
            segurança ou explorar vulnerabilidades.
          </li>
          <li>
            Fazer engenharia reversa, descompilar ou copiar partes substanciais
            da plataforma.
          </li>
          <li>
            Usar bots, scripts ou automações para envio massivo de mensagens
            que prejudiquem a operação.
          </li>
          <li>
            Enviar conteúdo ofensivo, ilegal ou que viole direitos de terceiros.
          </li>
        </ul>
        <p>
          A violação destas regras pode resultar em suspensão ou encerramento
          imediato da conta, sem reembolso.
        </p>
      </section>

      <section>
        <h2>6. Propriedade intelectual</h2>
        <p>
          A marca, o nome &quot;Dinheirize&quot;, o mascote &quot;Dz&quot;, o
          código-fonte, o design da plataforma e todos os conteúdos produzidos
          pelo Dinheirize são de propriedade exclusiva do controlador. O
          cadastro não transfere nenhuma propriedade intelectual ao usuário —
          apenas concede uma licença limitada, pessoal e revogável de uso.
        </p>
        <p>
          Os dados pessoais e financeiros que você informa continuam sendo
          seus. O Dinheirize age como operador desses dados nos termos da
          Política de Privacidade.
        </p>
      </section>

      <section>
        <h2>7. Disponibilidade e manutenção</h2>
        <p>
          Trabalhamos para manter o serviço disponível 24/7, mas não garantimos
          ininterrupção. Podem ocorrer paradas para manutenção, falhas de
          terceiros (OpenAI, WhatsApp/Meta, Supabase, Stripe) ou eventos de
          força maior. O Dinheirize não é responsável por indisponibilidades
          causadas por terceiros.
        </p>
      </section>

      <section>
        <h2>8. Limitação de responsabilidade</h2>
        <p>
          O serviço é oferecido &quot;como está&quot;. Embora utilizemos
          tecnologia de IA para categorizar gastos, decisões financeiras com
          base nos dados exibidos são responsabilidade exclusiva do usuário. O
          Dinheirize não se responsabiliza por:
        </p>
        <ul>
          <li>
            Decisões de investimento, gastos ou economia tomadas com base em
            relatórios da plataforma.
          </li>
          <li>
            Erros de categorização automática ou interpretação de mensagens
            pela IA.
          </li>
          <li>Perdas indiretas, lucros cessantes ou danos morais.</li>
          <li>
            Conteúdo de terceiros (WhatsApp, OpenAI, Stripe) ou indisponibilidade
            destes serviços.
          </li>
        </ul>
        <p>
          A responsabilidade total do Dinheirize, em qualquer hipótese, fica
          limitada ao valor efetivamente pago pelo usuário nos 3 meses
          anteriores ao evento que gerou a controvérsia.
        </p>
      </section>

      <section>
        <h2>9. Privacidade e dados</h2>
        <p>
          O tratamento de dados pessoais segue a{" "}
          <a href="/privacidade">Política de Privacidade</a>, que faz parte
          integrante destes Termos.
        </p>
      </section>

      <section>
        <h2>10. Alterações dos Termos</h2>
        <p>
          Podemos atualizar estes Termos a qualquer momento. Alterações
          relevantes serão comunicadas por e-mail ou pelo bot com pelo menos 30
          dias de antecedência. O uso continuado após a entrada em vigor
          implica aceitação das mudanças.
        </p>
      </section>

      <section>
        <h2>11. Encerramento</h2>
        <p>
          Você pode encerrar sua conta a qualquer momento solicitando por
          e-mail. O Dinheirize pode encerrar contas que violem estes Termos,
          com ou sem aviso prévio, conforme a gravidade.
        </p>
      </section>

      <section>
        <h2>12. Lei aplicável e foro</h2>
        <p>
          Estes Termos são regidos pelas leis da República Federativa do
          Brasil. Fica eleito o foro da comarca da sede do controlador, com
          renúncia a qualquer outro, para dirimir controvérsias decorrentes
          destes Termos — observada a competência absoluta dos Juizados
          Especiais Cíveis quando aplicável.
        </p>
      </section>
    </LegalLayout>
  )
}
