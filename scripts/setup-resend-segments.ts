import { ensureSegmentsExist } from '../lib/resend-segments'

async function main() {
  console.log('Verificando e criando Segments no Resend...\n')
  await ensureSegmentsExist()
  console.log('\nConcluido! Copie os IDs acima e adicione ao .env.local')
}

main().catch(console.error)
