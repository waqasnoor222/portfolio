"use client"

import { Briefcase, BookOpen } from "lucide-react"
import Container from "./Container"
import { motion } from 'framer-motion';
import { useSectionAnimation } from '@/hooks/useSectionAnimation';
import { sectionVariants } from '@/components/animations/section-variants';

const experience = [
  {
    year: "2025 – Present",
    title: "Frontend UI Developer (Angular)",
    company: "Path (Pvt.) Ltdt",
  },
   {
    year: "2021 – 2025",
    title: "Frontend Developer (Angular)",
    company: "Meezotech",
  },
]

const education = [
  {
    year: "2022 – Continue",
    title: "Bachelor of Science in Computer Science",
    company: "Federal Urdu University of Arts, Sciences & Technology",
  },
]

export default function Experience() {
  const { ref, isInView } = useSectionAnimation();

  return (
    <motion.section 
      className="sm:py-24 py-16 dark:bg-[var(--bg-dark-color)] bg-[var(--bg-cream-light-color)] overflow-x-hidden"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants.experience}
    >
      <Container>
        <div className="grid md:grid-cols-2 gap-12 md:gap-10 sm:gap-8 gap-6">
          {/* Experience Section */}
          <div>
            <motion.div 
              className="flex items-center gap-4 mb-8 sm:mb-6 mb-5"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Briefcase className="size-10 sm:size-12 text-primary flex-shrink-0" />
              </motion.div>
              <motion.h2 
                className="text-2xl sm:text-3xl xl:text-[2.6rem] font-bold text-bg-gradient-light text-bg-gradient-dark"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                My Experience
              </motion.h2>
            </motion.div>

            <div className="space-y-6 sm:space-y-5 space-y-4">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  className="group p-5 sm:p-6 md:p-7 dark:bg-[var(--primary-color-light)] bg-white rounded-2xl transition-all duration-300 
                  hover:bg-[length:200%_auto] hover:bg-gradient-to-r hover:from-[#8750f7] hover:via-[#2a1454] hover:to-[#8750f7]"
                  initial={{ opacity: 0, x: -40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ 
                    delay: 0.6 + (index * 0.15), 
                    duration: 0.7,
                    ease: "easeOut"
                  }}
                >
                  <p className="text-xs sm:text-sm text-primary font-semibold mb-1 dark:group-hover:text-[var(--text-dark-color)] group-hover:text-white">
                    {item.year}
                  </p>
                  <h3 className="text-base sm:text-lg font-bold dark:text-[var(--text-dark-color)] text-[var(--secondary-color)] mb-1 dark:group-hover:text-[var(--text-dark-color)] group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm dark:text-muted-foreground text-[var(--secondary-color)] dark:group-hover:text-[var(--text-dark-color)] group-hover:text-white">
                    {item.company}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <motion.div 
              className="flex items-center gap-4 mb-8 sm:mb-6 mb-5"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ scale: 0, rotate: 180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <BookOpen className="size-10 sm:size-12 text-primary flex-shrink-0" />
              </motion.div>
              <motion.h2 
                className="text-2xl sm:text-3xl xl:text-[2.6rem] font-bold text-bg-gradient-light text-bg-gradient-dark"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.7 }}
              >
                My Education
              </motion.h2>
            </motion.div>

            <div className="space-y-6 sm:space-y-5 space-y-4">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  className="group p-5 sm:p-6 md:p-7 dark:bg-[var(--primary-color-light)] bg-white rounded-2xl transition-all duration-300 
                  hover:bg-[length:200%_auto] hover:bg-gradient-to-r hover:from-[#8750f7] hover:via-[#2a1454] hover:to-[#8750f7]"
                  initial={{ opacity: 0, x: 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ 
                    delay: 0.7 + (index * 0.15), 
                    duration: 0.7,
                    ease: "easeOut"
                  }}
                >
                  <p className="text-xs sm:text-sm text-primary font-semibold mb-1 dark:group-hover:text-[var(--text-dark-color)] group-hover:text-white">
                    {item.year}
                  </p>
                  <h3 className="text-base sm:text-lg font-bold dark:text-[var(--text-dark-color)] text-[var(--secondary-color)] mb-1 dark:group-hover:text-[var(--text-dark-color)] group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm dark:text-muted-foreground text-[var(--secondary-color)] dark:group-hover:text-[var(--text-dark-color)] group-hover:text-white">
                    {item.company}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </motion.section>
  )
}