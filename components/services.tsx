"use client"

import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import Container from "./Container"
import { motion, AnimatePresence } from "framer-motion";
import { useSectionAnimation } from '@/hooks/useSectionAnimation';
import { sectionVariants } from '@/components/animations/section-variants';

const services = [
  {
    number: "01",
    title: "Angular Frontend Development",
    description:
      "I build fast, responsive, and user-friendly web applications using Angular, TypeScript, HTML, CSS, and Bootstrap. Optimized for performance, scalability, and seamless user experience across all devices.",
  },
  {
    number: "02",
    title: "API Integration & Application Maintenance",
    description:
      "I integrate RESTful APIs and backend services to ensure smooth data flow. I also maintain and enhance Angular applications by fixing bugs, adding features, and improving overall performance and usability.",
  },
  {
    number: "03",
    title: "WordPress Website Development",
    description:
      "I design and customize responsive WordPress websites that are easy to manage and visually appealing. From business sites to landing pages, I deliver clean layouts, optimized themes, and fast-loading pages.",
  },
  {
    number: "04",
    title: "UI/UX Implementation & Conversion",
    description:
      "I convert Figma and Adobe XD designs into pixel-perfect, responsive web layouts using PrimeNG, Tailwind CSS, and modern frontend tools. Every element is built with clean, maintainable code for an optimal user experience.",
  },
  {
    number: "05",
    title: "JavaScript & TypeScript Solutions",
    description:
      "I create dynamic, interactive, and efficient web features using JavaScript and TypeScript. From DOM manipulation to complex frontend logic, I ensure smooth functionality and enhanced user engagement.",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(0)
  const [expandedService, setExpandedService] = useState<number | null>(null)
  const { ref, isInView } = useSectionAnimation();

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index)
  }

  return (
    <motion.section 
      id="services" 
      className="sm:py-24 py-16 dark:bg-[var(--bg-dark-color)] bg-[var(--bg-cream-light-color)]"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants.services}
    >
      <Container>
        <motion.div 
          className="text-center sm:mb-16 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-bg-gradient-light text-bg-gradient-dark"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            My Quality <span>Services</span>
          </motion.h2>
          <motion.p 
            className="dark:text-[var(--text-dark-color)] text-[var(--secondary-color)] max-w-3xl mx-auto text-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            I transform ideas into sleek, high-performing web experiences that captivate users and bring visions to life.
          </motion.p>
        </motion.div>

        {/* Desktop/Tablet Version */}
        <div className="hidden sm:block space-y-4 relative">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              onMouseEnter={() => setActiveService(index)}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                delay: 0.6 + (index * 0.1), 
                duration: 0.7,
                ease: "easeOut"
              }}
            >
              {activeService === index && (
                <motion.div
                  layoutId="highlight"
                  className="absolute inset-0 rounded-xl bg-button-gradient border border-[#8750f7]/30"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}

              <Card className="relative sm:py-4 py-2 border dark:border-[var(--btn-border-color)] border-[var(--text-dark-color)] bg-transparent overflow-hidden cursor-pointer transition-all duration-300">
                <CardContent className="sm:p-4 p-2 flex items-start gap-6 relative z-10">
                  <span
                    className={`text-2xl font-bold flex-shrink-0 transition-colors duration-300 ${activeService === index
                        ? "text-[var(--text-dark-color)]"
                        : "text-primary"
                      }`}
                  >
                    {service.number}
                  </span>

                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-2 transition-all duration-300 ${activeService === index
                        ? "text-[var(--text-dark-color)]"
                        : "dark:text-[var(--text-dark-color)] text-[var(--primary-color)]"
                      }`}>
                      {service.title}
                    </h3>
                    <p className={`text-md transition-all duration-300 ${activeService === index
                        ? "text-[var(--text-dark-color)]"
                        : "dark:text-[var(--text-dark-color)] text-[var(--secondary-color)]"
                      }`}>{service.description}</p>
                  </div>

                  <ArrowUpRight
                    className={`size-8 flex-shrink-0 transition-all duration-300 ${activeService === index
                        ? "text-[var(--text-dark-color)] translate-x-1 -translate-y-1"
                        : "text-primary"
                      }`}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mobile Version */}
        <div className="sm:hidden space-y-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={false}
              animate={{ scale: expandedService === index ? 1.02 : 1 }}
              transition={{ duration: 0.2 }}
            >
              <Card 
                className={`border transition-all duration-300 ${
                  expandedService === index 
                    ? "bg-button-gradient border-[#8750f7]/50 shadow-lg" 
                    : "dark:border-[var(--btn-border-color)] border-[var(--text-dark-color)] bg-transparent"
                }`}
              >
                <CardContent className="p-4">
                  <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleService(index)}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`text-lg font-bold flex-shrink-0 ${
                        expandedService === index 
                          ? "text-[var(--text-dark-color)]" 
                          : "text-primary"
                      }`}>
                        {service.number}
                      </span>
                      <h3 className={`text-lg font-bold ${
                        expandedService === index 
                          ? "text-[var(--text-dark-color)]" 
                          : "dark:text-[var(--text-dark-color)] text-[var(--primary-color)]"
                      }`}>
                        {service.title}
                      </h3>
                    </div>
                    
                    <motion.div
                      animate={{ rotate: expandedService === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`p-1 rounded-full ${
                        expandedService === index 
                          ? "bg-white/20 text-white" 
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      {expandedService === index ? (
                        <ChevronUp className="size-5" />
                      ) : (
                        <ChevronDown className="size-5" />
                      )}
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {expandedService === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <motion.p 
                          initial={{ y: -10 }}
                          animate={{ y: 0 }}
                          transition={{ delay: 0.1 }}
                          className="text-[var(--text-dark-color)] mt-4 text-sm leading-relaxed pt-3 border-t border-white/20"
                        >
                          {service.description}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="sm:hidden text-center mt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <p className="text-sm text-muted-foreground">
            Tap on any service to learn more
          </p>
        </motion.div>
      </Container>
    </motion.section>
  )
}