"use client"

import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

interface StatItem {
  id: number
  value: number
  suffix?: string
  label: string
  duration?: number
}

const statsData: StatItem[] = [
  {
    id: 1,
    value: 5,
    suffix: "+",
    label: "Years of\nExperience",
    duration: 2000
  },
  {
    id: 2,
    value: 50,
    suffix: "+",
    label: "Projects\nCompleted",
    duration: 2500
  },
  {
    id: 3,
    value: 45,
    suffix: "+",
    label: "Happy\nClients",
    duration: 2200
  },
  {
    id: 4,
    value: 10,
    suffix: "+",
    label: "Technologies\nMastered",
    duration: 1800
  }
]

interface CounterProps {
  value: number
  suffix?: string
  duration?: number
}

function Counter({ value, suffix = "", duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = value
      const incrementTime = Math.max(duration / end, 50)
      
      const timer = setInterval(() => {
        start += 1
        setCount(start)
        if (start === end) clearInterval(timer)
      }, incrementTime)

      return () => clearInterval(timer)
    }
  }, [isInView, value, duration])

  return (
    <span ref={ref} className="font-[500] tracking-[3px] whitespace-break-spaces block">
      {count}{suffix}
    </span>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section ref={ref} className="sm:py-16 py-12">
      <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-2 gap-6 lg:gap-8 w-full max-w-6xl mx-auto px-4">
        {statsData.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeOut"
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            className="flex items-center justify-center text-center group cursor-default"
          >
            {/* Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Content */}
            <div className="relative z-10 p-4 sm:p-6 w-full">
              {/* Number */}
              <motion.p 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-[500] tracking-[3px] sm:tracking-[5px] dark:text-[var(--text-dark-color)] text-[var(--btn-color)] mb-2 sm:mb-3"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Counter 
                  value={stat.value} 
                  suffix={stat.suffix}
                  duration={stat.duration}
                />
              </motion.p>
              
              {/* Label */}
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-tight sm:leading-relaxed font-medium whitespace-pre-line">
                {stat.label}
              </p>
              
              {/* Bottom Border Animation */}
              <motion.div 
                className="h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mt-3 sm:mt-4"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}