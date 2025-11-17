"use client"

import { TextAlignEnd } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Container from "./Container"
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { useAnalytics } from "@/hooks/useAnalytics";

export default function Header() {
  const [isFixed, setIsFixed] = useState(false)
  const [isBouncing, setIsBouncing] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState("home")
  const { trackEvent } = useAnalytics();

  // Scroll spy functionality
  useEffect(() => {
    const sections = ["home", "services", "works", "skills", "resume", "contact"]

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Scroll down — fix & bounce in
      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        if (!isFixed) {
          setIsFixed(true)
          setIsBouncing(true)
          setTimeout(() => setIsBouncing(false), 600)
        }
      }

      // Scroll back to top — bounce out then unfix
      if (currentScrollY < 50 && isFixed) {
        setIsBouncing(true)
        setTimeout(() => {
          setIsFixed(false)
          setIsBouncing(false)
        }, 600)
      }

      setLastScrollY(currentScrollY)

      // Active section detection
      const scrollPosition = currentScrollY + 100

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY, isFixed])

  // Handle click on navigation items
  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Resume", id: "resume" },
    { name: "Services", id: "services" },
    { name: "Works", id: "works" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" }
  ]

  const handleHireMeClick = () => {
    trackEvent("hire_me_click", { label: "Hire Me Button" });
    
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setActiveSection('contact');
    }
  };

  return (
    <header
      className={cn(
        "top-0 left-0 w-full z-50 transition-all duration-500 ease-out",
        isFixed
          ? "fixed dark:bg-[var(--black-color)] bg-[var(--white-color)] shadow-lg"
          : "absolute bg-transparent",
        isBouncing && (isFixed ? "animate-bounceDown" : "animate-bounceUp")
      )}
    >
      {/* Bounce Animations */}
      <style jsx>{`
        @keyframes bounceDown {
          0% {
            transform: translateY(-100%);
          }
          60% {
            transform: translateY(12px);
          }
          80% {
            transform: translateY(-6px);
          }
          100% {
            transform: translateY(0);
          }
        }
        @keyframes bounceUp {
          0% {
            transform: translateY(0);
          }
          60% {
            transform: translateY(-10px);
          }
          80% {
            transform: translateY(6px);
          }
          100% {
            transform: translateY(-100%);
          }
        }
        .animate-bounceDown {
          animation: bounceDown 0.6s ease-out forwards;
        }
        .animate-bounceUp {
          animation: bounceUp 0.6s ease-out forwards;
        }
      `}</style>

      <Container className="flex justify-between items-center py-4 md:py-6">
        {/* Left Section (Logo + Mail) */}
        <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
            <span className="text-white font-bold text-lg sm:text-xl">MW</span>
          </div>
          <span className="dark:text-[var(--text-dark-color)] text-[var(--secondary-color)] text-sm sm:text-[15px] hidden md:flex">
            waqasnoor222@gmail.com
          </span>
        </div>

        {/* Center Navigation */}
        <nav className="hidden lg:flex gap-6 xl:gap-8 items-center flex-1 justify-center">
          {navItems.map((item) => (
            <div key={item.id} className="relative">
              <a
                href={`#${item.id}`}
                className={cn(
                  "transition-colors text-sm xl:text-[15px] font-medium relative py-2 dark:text-[var(--text-dark-color)] text-[var(--secondary-color)] hover:text-primary",
                )}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.id)
                }}
              >
                {item.name}
                <AnimatePresence>
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute rounded-full bottom-[5px] left-0 right-0 h-0.5 nav-item-gradient"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      exit={{ width: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  )}
                </AnimatePresence>
              </a>
            </div>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-6">
            <Button
              className="rounded-full px-8 xl:px-10 h-[45px] xl:h-[50px] text-sm xl:text-[15px] cursor-pointer"
              onClick={() => handleHireMeClick()}
            >
              Hire Me!
            </Button>
          </div>

          {/* Mobile Menu Drawer */}
          <Drawer>
            <DrawerTrigger asChild>
              <Button className="lg:hidden p-2" variant="ghost">
                <TextAlignEnd className="size-6 sm:size-7" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="lg:hidden px-6 pb-10 pt-4">
              <VisuallyHidden>
                <DrawerHeader>
                  <DrawerTitle>Menu</DrawerTitle>
                </DrawerHeader>
              </VisuallyHidden>

              <nav className="flex flex-col items-center gap-4 mt-4">
                {navItems.map((item) => (
                  <DrawerClose asChild key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={cn(
                        "transition-colors py-2 text-md font-medium",
                        activeSection === item.id
                          ? "text-primary font-semibold"
                          : "text-foreground hover:text-primary"
                      )}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(item.id)
                      }}
                    >
                      {item.name}
                    </a>
                  </DrawerClose>
                ))}
              </nav>
            </DrawerContent>
          </Drawer>
        </div>
      </Container>
    </header>
  )
}