import { useEffect, useRef, type ReactNode } from 'react'

type MagnetProps = {
  children: ReactNode
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
  className?: string
}

export default function Magnet({
  children,
  padding = 100,
  strength = 2,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleMouseMove = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const isActive =
        event.clientX >= rect.left - padding &&
        event.clientX <= rect.right + padding &&
        event.clientY >= rect.top - padding &&
        event.clientY <= rect.bottom + padding

      if (isActive) {
        const x = (event.clientX - (rect.left + rect.width / 2)) / strength
        const y = (event.clientY - (rect.top + rect.height / 2)) / strength
        el.style.transition = activeTransition
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`
      } else {
        el.style.transition = inactiveTransition
        el.style.transform = 'translate3d(0px, 0px, 0)'
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [padding, strength, activeTransition, inactiveTransition])

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  )
}
