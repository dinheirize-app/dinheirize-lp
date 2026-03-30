'use client'

import { useInView } from '@/hooks/use-in-view'

export function SectionFade({ children }: { children: React.ReactNode }) {
  const { ref, isInView } = useInView(0.1)

  return (
    <div
      ref={ref}
      className={isInView ? 'section-visible' : 'section-hidden'}
    >
      {children}
    </div>
  )
}
