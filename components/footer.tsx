"use client"

import Container from "./Container"
import { motion } from 'framer-motion';
import { useSectionAnimation } from '@/hooks/useSectionAnimation';
import { sectionVariants } from '@/components/animations/section-variants';

export default function Footer() {
  const { ref, isInView } = useSectionAnimation(0.1);

  return (
    <motion.footer 
      className="py-16 sm:py-20 lg:py-24 !pb-6"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants.footer}
    >
      <Container>
        <div className="text-center flex flex-col items-center space-y-8">
          {/* Logo */}
          <motion.div 
            className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full bg-gradiant-primary-two flex items-center justify-center"
            initial={{ opacity: 0, scale: 0, y: 30 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ 
              duration: 0.8,
              ease: "backOut"
            }}
          >
            <span className="text-white font-bold text-2xl sm:text-4xl">MW</span>
          </motion.div>

          {/* Navigation Links */}
          <motion.nav 
            className="flex flex-wrap justify-center gap-8 text-sm font-semibold dark:text-[var(--text-dark-color)] text-[var(--secondary-color)]"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              delay: 0.3,
              duration: 0.7
            }}
          >
            {["About", "Services", "Portfolios", "Contact"].map((link, index) => (
              <motion.a
                key={link}
                href="#"
                className="hover:text-[var(--primary-color)] transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  delay: 0.5 + (index * 0.1),
                  duration: 0.5
                }}
              >
                {link}
              </motion.a>
            ))}
          </motion.nav>

          {/* Copyright */}
          <motion.p 
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              delay: 0.8,
              duration: 0.7
            }}
          >
            © 2025 All rights reserved by{" "}
            <span 
              className="text-[var(--primary-color)] font-medium"
            >
              Muhammad Waqas
            </span>
          </motion.p>
        </div>
      </Container>
    </motion.footer>
  )
}