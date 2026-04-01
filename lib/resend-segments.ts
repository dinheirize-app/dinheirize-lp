import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const SEGMENTS = {
  WAITLIST: process.env.RESEND_SEGMENT_WAITLIST_ID || '',
  CUSTOMERS: process.env.RESEND_SEGMENT_CUSTOMERS_ID || '',
}

const SEGMENT_NAMES: Record<string, string> = {
  WAITLIST: 'Lista de Espera',
  CUSTOMERS: 'Clientes Ativos',
}

export async function ensureSegmentsExist() {
  const { data: existing } = await resend.segments.list()

  for (const [key, name] of Object.entries(SEGMENT_NAMES)) {
    const found = existing?.data?.find((s) => s.name === name)

    if (found) {
      console.log(`Segment já existe: ${name} (ID: ${found.id})`)
      console.log(`  -> RESEND_SEGMENT_${key}_ID=${found.id}`)
    } else {
      const { data } = await resend.segments.create({ name })
      console.log(`Segment criado: ${name} (ID: ${data?.id})`)
      console.log(`  -> RESEND_SEGMENT_${key}_ID=${data?.id}`)
    }
  }
}

export async function addContactToWaitlist(email: string, name: string) {
  try {
    const segmentId = SEGMENTS.WAITLIST

    const segments = segmentId ? [{ id: segmentId }] : undefined

    const { data, error } = await resend.contacts.create({
      email,
      firstName: name.split(' ')[0] || '',
      lastName: name.split(' ').slice(1).join(' ') || '',
      unsubscribed: false,
      segments,
    })

    if (error) {
      // Duplicado no Resend nao deve falhar
      console.warn('Resend contacts.create warning:', error)
      return null
    }

    return data
  } catch (err) {
    console.error('Erro ao adicionar contato na waitlist:', err)
    return null
  }
}

export async function moveContactToCustomers(email: string) {
  try {
    // Remover do segment "Lista de Espera"
    if (SEGMENTS.WAITLIST) {
      try {
        await resend.contacts.segments.remove({
          email,
          segmentId: SEGMENTS.WAITLIST,
        })
      } catch {
        // Pode nao estar no segment, ignora
      }
    }

    // Adicionar ao segment "Clientes Ativos"
    if (SEGMENTS.CUSTOMERS) {
      await resend.contacts.segments.add({
        email,
        segmentId: SEGMENTS.CUSTOMERS,
      })
    }
  } catch (err) {
    console.error('Erro ao mover contato para Clientes:', err)
  }
}
