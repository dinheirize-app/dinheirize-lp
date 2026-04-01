import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get('email')

  if (!email) {
    return NextResponse.json({ isPaid: false })
  }

  const { data, error } = await supabase
    .from('users')
    .select('status')
    .eq('email', email)
    .single()

  if (error || !data) {
    return NextResponse.json({ isPaid: false })
  }

  return NextResponse.json({ isPaid: data.status === 'active' })
}
