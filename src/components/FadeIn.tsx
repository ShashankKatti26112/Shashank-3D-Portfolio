import { motion } from 'framer-motion'
import { useMemo, type CSSProperties, type ElementType, type ReactNode } from 'react'

type FadeInProps = {
  as?: ElementType
  delay?: number
  duration?: number
  x?: number
  y?: number
  className?: string
  children: ReactNode
  style?: CSSProperties
  id?: string
}

export default function FadeIn({
  as = 'div',
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  children,
  style,
  id,
}: FadeInProps) {
  const Component = useMemo(() => motion.create(as as keyof HTMLElementTagNameMap), [as])

  return (
    <Component
      id={id}
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </Component>
  )
}
