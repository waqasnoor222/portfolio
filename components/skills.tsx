"use client"

import Image from "next/image"
import nextImg from "@/public/images/skills/next.png"
import reactImg from "@/public/images/skills/react.png"
import jsImg from "@/public/images/skills/js.png"
import htmlImg from "@/public/images/skills/html.png"
import tailwindImg from "@/public/images/skills/tailwind-css.png"
import materialUiImg from "@/public/images/skills/material-ui.png"
import firebaseImg from "@/public/images/skills/firebase.png"
import wordpressImg from "@/public/images/skills/wp.png"
import figmaImg from "@/public/images/skills/figma.png"
import xdImg from "@/public/images/skills/xd.webp"
import Container from "./Container"
import { motion } from 'framer-motion';
import { useSectionAnimation } from '@/hooks/useSectionAnimation';
import { sectionVariants } from '@/components/animations/section-variants';

const skills = [
  { name: "Next", icon: nextImg, percentage: 50 },
  { name: "React", icon: reactImg, percentage: 80 },
  { name: "JavaScript", icon: jsImg, percentage: 93 },
  { name: "HTML", icon: htmlImg, percentage: 99 },
  { name: "Tailwind", icon: tailwindImg, percentage: 80 },
  { name: "Material UI", icon: materialUiImg, percentage: 80 },
  { name: "Firebase", icon: firebaseImg, percentage: 50 },
  { name: "WordPress", icon: wordpressImg, percentage: 90 },
  { name: "Figma to Code", icon: figmaImg, percentage: 90 },
  { name: "XD to Code", icon: xdImg, percentage: 90 },
]

export default function Skills() {
  const { ref, isInView } = useSectionAnimation();

  return (
    <motion.section
      id="skills"
      className="py-16 sm:py-20 lg:py-24"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants.skills}
    >
      <Container>
        <div className="px-4 sm:px-8 md:px-12 lg:px-16">
          <motion.div
            className="text-center mb-10 sm:mb-12"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-bg-gradient-light text-bg-gradient-dark"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              My Skills
            </motion.h2>
            <motion.p
              className="text-sm sm:text-base md:text-lg dark:text-[var(--text-dark-color)] text-[var(--secondary-color)]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Design & Development tools I use
            </motion.p>
          </motion.div>

          {/* Skills Card */}
          <div
            className="
              grid 
              grid-cols-2 
              sm:grid-cols-3 
              md:grid-cols-4 
              lg:grid-cols-5 
              gap-4 sm:gap-6 md:gap-8 
              gap-y-8 sm:gap-y-10 md:gap-y-12
            "
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="text-center space-y-3 sm:space-y-4 transition-all duration-300 ease-in-out"
                initial={{ opacity: 0, scale: 0.5, y: 60 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{
                  delay: 0.6 + (index * 0.08),
                  duration: 0.7,
                  ease: "backOut"
                }}
              >
                <motion.div
                  className="
                    group flex flex-col gap-3 sm:gap-4 items-center justify-center
                    rounded-2xl 
                    dark:bg-[var(--primary-color-light)] 
                    bg-[var(--bg-cream-light-color)] 
                    dark:hover:bg-[var(--secondary-color)] 
                    hover:bg-[var(--secondary-color)] 
                    border border-transparent 
                    hover:border-[var(--btn-border-color)]
                    transition-all duration-300 ease-in-out 
                    transform hover:scale-[1.03] 
                    p-4 sm:p-5 md:p-6 
                    text-center
                  "
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center transition-all duration-300 ease-in-out">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={64}
                      height={64}
                      className="object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300 ease-in-out"
                    />
                  </div>

                  <motion.p
                    className="text-base sm:text-lg font-bold text-muted-foreground group-hover:text-[var(--primary-color)] transition-all duration-300 ease-in-out"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{
                      delay: 0.8 + (index * 0.08),
                      duration: 0.5
                    }}
                  >
                    {skill.percentage}%
                  </motion.p>
                </motion.div>

                <motion.p
                  className="text-sm sm:text-base md:text-md font-medium text-[var(--primary-color)]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: 0.9 + (index * 0.08),
                    duration: 0.5
                  }}
                >
                  {skill.name}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </motion.section>
  )
}