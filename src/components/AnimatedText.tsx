import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { useRef, type CSSProperties } from 'react'

type AnimatedTextProps = {
  text: string
  className?: string
  style?: CSSProperties
}

function AnimatedChar({
  char,
  progress,
  range,
}: {
  char: string
  progress: MotionValue<number>
  range: [number, number]
}) {
  const opacity = useTransform(progress, range, [0.2, 1])
  const display = char === ' ' ? '\u00A0' : char

  return (
    <span className="relative inline-block">
      <span className="invisible">{display}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {display}
      </motion.span>
    </span>
  )
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  return (
    <p ref={ref} className={className} style={style}>
      {text.split('').map((char, index) => {
        const start = index / text.length
        const end = Math.min(1, start + 1 / text.length)
        if (char === ' ') {
          return <span key={`space-${index}`}> </span>
        }

        return (
          <AnimatedChar
            key={`${char}-${index}`}
            char={char}
            progress={scrollYProgress}
            range={[start, end]}
          />
        )
      })}
    </p>
  )
}
