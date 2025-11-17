"use client"

import { Download, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import Container from "./Container"
import Image from "next/image"
import waqasImage from "@/public/images/m-waqas.jpg"
import { Linkedin, Twitter, Github, Braces } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSectionAnimation } from '@/hooks/useSectionAnimation';
import { sectionVariants } from '@/components/animations/section-variants';
import Stats from "@/components/stats"

let socialLink = [
  { id: 3, name: "linkedin", icon: <Linkedin className="size-4" />, url: "https://www.linkedin.com/in/waqasnoor222/" },
  { id: 4, name: "github", icon: <Github className="size-4" />, url: "https://github.com/waqasnoor222" },
  { id: 2, name: "hackerrank", icon: <Braces className="size-4" />, url: "https://www.hackerrank.com/profile/hamza_awan2609" },
  { id: 5, name: "whatsapp", icon: <MessageSquare className="size-4" />, url: "wa.me/923412157169" },
  // { id: 1, name: "twitter", icon: <Twitter className="size-4" />, url: "#" },
]

const handleDownloadCV = () => {
  const link = document.createElement('a');
  link.href = '/M-Waqas.pdf';
  link.download = 'M-Waqas_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function Hero() {
  const { ref, isInView } = useSectionAnimation(0.1);

  return (
    <motion.section
      id="resume"
      className="relative pt-[150px] xl:pt-[200px] pb-[30px] md:pb-[50px] overflow-hidden after-gradient overflow-x-hidden"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants.hero}
    >
      <Container>
        <div className="relative">
          <motion.div
            className="absolute top-[40%] left-[45%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center z-1 pointer-events-none md:flex hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="relative">
              <span
                className="font-russo uppercase text-[140px] sm:text-[180px] md:text-[220px] lg:text-[240px] text-transparent block dark:opacity-70 opacity-20"
                style={{
                  WebkitTextStroke: '1.2px #2a1454',
                  animation: 'zoomInOut 6s ease-in-out infinite',
                }}
              >
                HI
              </span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:gap-16 md:gap-10 relative z-10 items-center">
            {/* Left Content */}
            <div>
              <motion.p
                className="text-2xl lg:text-4xl font-bold dark:text-[var(--text-dark-color)] text-[var(--secondary-color)] mb-3"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                I'm Waqas
              </motion.p>

              <motion.h1
                className="text-[34px] sm:text-5xl md:text-[35px] lg:text-[50px] xl:text-[60px] font-bold leading-tight mb-6 md:mb-4 lg:mb-6 text-bg-gradient-light text-bg-gradient-dark"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 1 }}
              >
                Front-End
                <br />
                Developer.
              </motion.h1>

              <motion.div
                className="relative z-20 md:hidden flex items-center justify-center hover:rotate-0 rotate-4 transform transition-all duration-500"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.7 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-[2rem] blur-3xl"></div>
                <div className="relative aspect-square rounded-[2rem] border-[2px] border-primary/20 hover:border-primary/60 overflow-hidden transition-all duration-500">
                  <div className="w-full h-full">
                    <Image
                      src={waqasImage}
                      alt="Muhammad Waqas"
                      width={430}
                      height={500}
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.p
                className="dark:text-[var(--text-dark-color)] text-[var(--secondary-color)] text-sm md:text-md lg:text-lg leading-relaxed lg:mb-10 mb-6 md:mt-0 mt-6"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                I thrive on building simple, effective web solutions. Turning ideas into clean, responsive websites and Angular apps using modern front-end tools, all focused on giving users a smooth and helpful experience.
              </motion.p>

              <motion.div
                className="flex items-center gap-5 mb-20 flex-wrap"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <Button
                  variant="outline"
                  onClick={handleDownloadCV}
                  className="rounded-full !px-[30px] lg:!px-[40px] h-[50px] flex items-center gap-2 lg:text-[16px] text-[14px] cursor-pointer"
                >
                  Download CV
                  <Download className="size-4" />
                </Button>

                <div className="flex gap-4">
                  {socialLink.map((socialLink) => (
                    <motion.a
                      key={socialLink.id}
                      href={socialLink.url}
                      target="_blank"
                      className="w-9 h-9 rounded-full border border-primary hover:border-primary text-[var(--primary-color)] hover:bg-[var(--btn-border-color)] hover:text-[var(--text-dark-color)] flex items-center justify-center transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {socialLink.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Image */}
            <motion.div
              className="relative z-20 hidden md:flex items-center justify-center hover:rotate-0 rotate-4 transform transition-all duration-500"
              initial={{ opacity: 0, x: 50, rotate: 10 }}
              animate={isInView ? { opacity: 1, x: 0, rotate: 4 } : {}}
              transition={{ delay: 1.1, duration: 0.9, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-[2rem] blur-3xl"></div>
              <div className="relative aspect-square rounded-[2rem] border-[2px] border-primary/20 hover:border-primary/60 overflow-hidden transition-all duration-500">
                <div className="w-full h-full">
                  <Image
                    src={waqasImage}
                    alt="Muhammad Waqas"
                    width={430}
                    height={500}
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <Stats />
      </Container>
    </motion.section>
  )
}