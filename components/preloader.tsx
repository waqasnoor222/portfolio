"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function Preloader() {
  const [loading, setLoading] = useState(true)
  const text = "LOADING"

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 1000) // smooth exit
    }

    if (document.readyState === "complete") {
      handleLoad()
    } else {
      document.addEventListener("DOMContentLoaded", handleLoad)
      window.addEventListener("load", handleLoad)
      return () => {
        document.removeEventListener("DOMContentLoaded", handleLoad)
        window.removeEventListener("load", handleLoad)
      }
    }
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0b0b0b]"
        >
          <div className="flex space-x-1 text-white text-[20px] font-[200] tracking-[15px] uppercase">
            {text.split("").map((letter, index) => (
              <span
                key={index}
                className="inline-block animate-loading"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {letter}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
