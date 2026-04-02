import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default async function Icon() {
  const logoData = await readFile(join(process.cwd(), 'public', 'dinheirize-logo.png'))
  const logoBase64 = `data:image/png;base64,${logoData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#000',
          borderRadius: '6px',
          overflow: 'hidden',
        }}
      >
        <img
          src={logoBase64}
          alt=""
          width={42}
          height={42}
          style={{ objectFit: 'cover' }}
        />
      </div>
    ),
    { ...size }
  )
}
