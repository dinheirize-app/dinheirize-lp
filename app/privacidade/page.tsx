import type { Metadata } from "next"
import { LegalLayout } from "@/components/legal-layout"

export const metadata: Metadata = {
  title: "Política de Privacidade — Dinheirize",
  description:
    "Como o Dinheirize coleta, usa e protege seus dados pessoais. Em conformidade com a LGPD.",
}

export default function PrivacidadePage() {
  return (
    <LegalLayout title="Política de Privacidade" lastUpdated="12 de maio de 2026">
      <section>
        <p>
          Esta Política de Privacidade descreve como o <strong>Dinheirize</strong>{" "}
          coleta, usa, armazena e protege os dados pessoais dos usuários da
          plataforma, em conformidade com a Lei Geral de Proteção de Dados
          (Lei 13.709/2018 — LGPD).
        </p>
        <p>
          Ao utilizar o serviço, você concorda com as práticas descritas neste
          documento. Se não concordar, pedimos que não utilize a plataforma.
        </p>
      </section>

      <section>
        <h2>1. Quem é o controlador dos dados</h2>
        <p>
          O <strong>Dinheirize</strong> é uma plataforma operada por um MEI
          regularmente inscrito no Brasil, atuando como controlador dos dados
          pessoais coletados. A razão social e CNPJ completos podem ser
          solicitados a qualquer momento por e-mail.
        </p>
        {/* TODO antes do lançamento: substituir o parágrafo acima por
            "Operado por <razão social do MEI>, CNPJ XX.XXX.XXX/0001-XX,
            sediado em <cidade/UF>." */}
        <p>
          Contato para assuntos de privacidade:{" "}
          <a href="mailto:contato@dinheirize.com">contato@dinheirize.com</a>.
        </p>
      </section>

      <section>
        <h2>2. Dados que coletamos</h2>

        <h3>2.1. Dados fornecidos pelo usuário</h3>
        <ul>
          <li>
            <strong>Cadastro e contato:</strong> e-mail, número de WhatsApp e
            nome (quando informado).
          </li>
          <li>
            <strong>Dados financeiros pessoais:</strong> renda mensal informada
            no onboarding, contas fixas (nome, valor, dia de vencimento), metas,
            lançamentos de gastos (valor, categoria, descrição, método de
            pagamento).
          </li>
          <li>
            <strong>Mensagens trocadas com o bot:</strong> o conteúdo das
            mensagens enviadas ao bot via WhatsApp é processado para extrair
            informações financeiras.
          </li>
        </ul>

        <h3>2.2. Dados de pagamento</h3>
        <p>
          Pagamentos são processados pelo <strong>Stripe</strong>. O Dinheirize
          não armazena dados completos de cartão de crédito — apenas
          identificadores opacos (customer_id, subscription_id) necessários
          para gerenciar a assinatura.
        </p>

        <h3>2.3. Dados coletados automaticamente</h3>
        <ul>
          <li>
            <strong>Dados de uso:</strong> XP, streak, progresso de metas,
            histórico de atividade dentro da plataforma.
          </li>
          <li>
            <strong>Dados técnicos:</strong> data e hora de mensagens,
            informações de erro/log para manutenção.
          </li>
          <li>
            <strong>Analytics:</strong> via Vercel Analytics, sem cookies de
            terceiros e sem rastreamento individual identificável.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Como usamos seus dados</h2>
        <ul>
          <li>Prestar o serviço (categorizar gastos, calcular XP, enviar lembretes).</li>
          <li>Personalizar a experiência (cálculo de horas-trabalho, recomendações).</li>
          <li>Processar pagamentos e gerenciar assinaturas.</li>
          <li>Enviar comunicações operacionais (lembretes de contas, relatórios).</li>
          <li>Melhorar o produto através de análises agregadas e anônimas.</li>
          <li>Cumprir obrigações legais e responder a autoridades quando exigido.</li>
        </ul>
      </section>

      <section>
        <h2>4. Compartilhamento com terceiros</h2>
        <p>
          O Dinheirize compartilha dados estritamente necessários com os
          seguintes operadores:
        </p>
        <ul>
          <li>
            <strong>OpenAI:</strong> o conteúdo das mensagens é enviado à API da
            OpenAI (GPT-4o Mini) para categorização automática. A OpenAI declara
            não usar dados de API para treinar modelos. Detalhes em{" "}
            <a
              href="https://openai.com/policies/api-data-usage-policies"
              target="_blank"
              rel="noopener noreferrer"
            >
              openai.com/policies
            </a>
            .
          </li>
          <li>
            <strong>Supabase:</strong> banco de dados onde seus dados são
            armazenados (servidores na AWS, criptografia em repouso).
          </li>
          <li>
            <strong>Stripe:</strong> processamento de pagamentos.
          </li>
          <li>
            <strong>Evolution API / WhatsApp:</strong> envio e recebimento de
            mensagens via WhatsApp.
          </li>
          <li>
            <strong>Vercel:</strong> hospedagem da landing page e analytics.
          </li>
          <li>
            <strong>Railway:</strong> hospedagem da infraestrutura do bot.
          </li>
        </ul>
        <p>
          Não vendemos, alugamos ou cedemos seus dados a terceiros para fins
          publicitários.
        </p>
      </section>

      <section>
        <h2>5. Por quanto tempo guardamos seus dados</h2>
        <p>
          Mantemos seus dados pelo tempo em que sua conta estiver ativa. Após o
          cancelamento, conservamos os dados por <strong>60 dias</strong> para
          permitir reativação. Após esse prazo, dados pessoais são excluídos ou
          anonimizados, salvo obrigação legal de retenção (ex: dados fiscais,
          que podem ser mantidos por até 5 anos).
        </p>
      </section>

      <section>
        <h2>6. Seus direitos (LGPD art. 18)</h2>
        <p>Você tem o direito de, a qualquer momento, solicitar:</p>
        <ul>
          <li>Confirmação de que tratamos seus dados.</li>
          <li>Acesso aos seus dados.</li>
          <li>Correção de dados incompletos ou desatualizados.</li>
          <li>Anonimização, bloqueio ou eliminação de dados desnecessários.</li>
          <li>Portabilidade dos dados a outro fornecedor.</li>
          <li>Eliminação dos dados tratados com seu consentimento.</li>
          <li>Informação sobre com quem compartilhamos seus dados.</li>
          <li>Revogação do consentimento.</li>
        </ul>
        <p>
          Para exercer qualquer um desses direitos, envie um e-mail para{" "}
          <a href="mailto:contato@dinheirize.com">contato@dinheirize.com</a>.
          Respondemos em até 15 dias úteis.
        </p>
      </section>

      <section>
        <h2>7. Segurança</h2>
        <p>
          Adotamos medidas técnicas e organizacionais razoáveis para proteger
          seus dados: HTTPS/TLS em todas as conexões, criptografia em repouso
          (Supabase), chaves de serviço com escopo restrito, e logs de acesso.
          Nenhum sistema é 100% imune — em caso de incidente, notificaremos
          você e a ANPD quando exigido pela LGPD.
        </p>
      </section>

      <section>
        <h2>8. Crianças e adolescentes</h2>
        <p>
          O Dinheirize é destinado a maiores de 18 anos. Não coletamos
          conscientemente dados de menores. Se você é responsável por um menor
          e suspeita que ele utilizou o serviço, contate-nos para remoção.
        </p>
      </section>

      <section>
        <h2>9. Alterações nesta política</h2>
        <p>
          Podemos atualizar esta política periodicamente. Mudanças relevantes
          serão comunicadas por e-mail ou pelo bot, com pelo menos 30 dias de
          antecedência. A data da última atualização está no topo desta página.
        </p>
      </section>

      <section>
        <h2>10. Lei aplicável e foro</h2>
        <p>
          Esta política é regida pelas leis da República Federativa do Brasil.
          Fica eleito o foro da comarca da sede do controlador para dirimir
          quaisquer controvérsias, com renúncia a qualquer outro, por mais
          privilegiado que seja.
        </p>
      </section>
    </LegalLayout>
  )
}
