"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import Container from "./Container"
import Image from "next/image"
import { Button } from "./ui/button"
import { ArrowUpRight, ExternalLink, Github } from "lucide-react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { motion } from 'framer-motion';
import { useSectionAnimation } from '@/hooks/useSectionAnimation';
import { sectionVariants } from '@/components/animations/section-variants';
import { useAnalytics } from "../hooks/useAnalytics";
import darentImage from "@/public/images/portfolio-images/darent-img.png";
import spiderWeb from "@/public/images/portfolio-images/spiders.png";
import raDesertSafariImage from "@/public/images/portfolio-images/ra-desert-safari-img.png"
import hydeParkDigitalsImage from "@/public/images/portfolio-images/hyde-park-digitals.png"
import paraMountZoneImage from "@/public/images/portfolio-images/para-mount-zone.png"
import dishDashImage from "@/public/images/portfolio-images/dish-dash-img.png"
import cieloBeautyImage from "@/public/images/portfolio-images/cielo-beauty.png"
import fourDirectionPropertiesImage from "@/public/images/portfolio-images/four-direction-properties.png"
import klingConsultImage from "@/public/images/portfolio-images/kling-consult.png"
import capitalHausImage from "@/public/images/portfolio-images/capital-haus.png"
import rcResidencesImage from "@/public/images/portfolio-images/rc-residences.png"

const projects = [
    {
    id: 1,
    title: "Spiders",
    description: "Making Everyday Commute Easier, Cheaper & Fun!",
    image: spiderWeb,
    link: "https://spiders.sa/",
    github: "#",
    tags: ["Angular", "Scss", "Bootstrap"],
  },
     {
    id: 2,
    title: "Meezotech",
    description: "Making Everyday Commute Easier, Cheaper & Fun!",
    image: spiderWeb,
    link: "http://meezotech.com/",
    github: "#",
    tags: ["Angular", "Scss", "Bootstrap"],
  },
  // {
  //   id: 1,
  //   title: "Darent",
  //   description: "A modern rental platform built for seamless user experience",
  //   image: darentImage,
  //   link: "https://darent.com/",
  //   github: "#",
  //   tags: ["Laravel", "Vue.js", "Bootstrap"],
  // },
  // {
  //   id: 2,
  //   title: "Dish Dash",
  //   description: "A restaurant web app focused on speed and simplicity",
  //   image: dishDashImage,
  //   link: "https://hamza-awan09.github.io/dish-dash/",
  //   github: "https://github.com/hamza-awan09/dish-dash",
  //   tags: ["React", "Tailwind", "Material UI"],
  // },
  //   {
  //   id: 3,
  //   title: "Para Mount Zone",
  //   description: "A polished website for Paramount Zone UAE, designed to simplify business setup and inspire confidence.",
  //   image: paraMountZoneImage,
  //   link: "https://paramountzone.ae/",
  //   github: "#",
  //   tags: ["Wordpress", "Elementor", "jQuery"],
  // },
  // {
  //   id: 4,
  //   title: "Hyde Park Digitals",
  //   description: "Modern website for Hydepark Digitals, built to engage and inspire.",
  //   image: hydeParkDigitalsImage,
  //   link: "https://hydeparkdigitals.com/",
  //   github: "#",
  //   tags: ["Wordpress", "Elementor", "jQuery"],
  // },
  // {
  //   id: 5,
  //   title: "RA Desert Safari",
  //   description: "A Tourism website focused on speed and simplicity",
  //   image: raDesertSafariImage,
  //   link: "https://radesertsafari.com/",
  //   github: "https://github.com/hamza-awan09/ra-desert-safari",
  //   tags: ["HTML", "CSS", "JavaScript"],
  // },
  // {
  //   id: 6,
  //   title: "kling Consult",
  //   description: "Global IT consultancy powering digital transformation for businesses.",
  //   image: klingConsultImage,
  //   link: "https://www.klingconsult.com/",
  //   github: "#",
  //   tags: ["Wordpress", "jQuery", "Bootstrap"],
  // },
  // {
  //   id: 7,
  //   title: "Capital Haus",
  //   description: "Strategic financial solutions for business growth and investment success.",
  //   image: capitalHausImage,
  //   link: "https://capitalhaus.com/",
  //   github: "#",
  //   tags: ["Wordpress", "jQuery", "Bootstrap"],
  // },
  // {
  //   id: 8,
  //   title: "RC Residences",
  //   description: "Luxury waterfront living in the heart of Business Bay, offering premium apartments and amenities.",
  //   image: rcResidencesImage,
  //   link: "https://rcresidences-businessbay.com/",
  //   github: "#",
  //   tags: ["Wordpress", "jQuery", "Bootstrap"],
  // },
];

export default function RecentWorks() {
  const { ref, isInView } = useSectionAnimation();
  const { trackEvent } = useAnalytics();

  const handleViewProjectClick = (projects: any) => {
    trackEvent("view_project_click", { projectTitle: projects.title });
    window.open(projects.link, "_blank");
  };

  return (
    <motion.section
      id="works"
      className="sm:py-24 py-16 pb-20 bg-gradient-to-b from-background to-muted/20"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants.recentWorks}
    >
      <Container>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-bg-gradient-light text-bg-gradient-dark"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            My Recent Works
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Real projects, real results. See how I transform ideas into clean, responsive web experiences that delight users and deliver impact.
          </motion.p>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.9 }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={32}
            navigation={true}
            pagination={{
              type: "bullets",
              dynamicBullets: true,
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className="recent-work-slider !pb-[50px]"
            breakpoints={{
              576: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2.18,
              },
              1024: {
                slidesPerView: 2.5,
              },
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.id}>
                <motion.div
                  className={`relative group overflow-hidden rounded-3xl bg-card border-2 border-primary/20 shadow-md hover:shadow-1xl hover:border-primary/50 transition-all duration-500`}
                  initial={{ opacity: 0, y: 80, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{
                    delay: 0.8 + (index * 0.15),
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-[300px] object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <motion.div
                      className="absolute top-4 right-4"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="px-3 py-1 bg-green-500/90 text-white text-xs font-medium rounded-full backdrop-blur-sm flex items-center gap-1">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        Live
                      </span>
                    </motion.div>

                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          className="px-2 py-1 bg-black/60 text-white text-xs font-medium rounded-md backdrop-blur-sm"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{
                            delay: 1.0 + (index * 0.15) + (tagIndex * 0.1),
                            duration: 0.5
                          }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <motion.h3
                        className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          delay: 1.1 + (index * 0.15),
                          duration: 0.6
                        }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.div
                        className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0"
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 0, x: 20 } : {}}
                        whileHover={{ opacity: 1, x: 0 }}
                      >
                        <motion.a
                          href={project.github}
                          className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300"
                          onClick={(e) => e.stopPropagation()}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                        <motion.a
                          href={project.link}
                          className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      </motion.div>
                    </div>

                    <motion.p
                      className="text-muted-foreground leading-relaxed mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        delay: 1.2 + (index * 0.15),
                        duration: 0.6
                      }}
                    >
                      {project.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        delay: 1.3 + (index * 0.15),
                        duration: 0.6
                      }}
                    >
                      <Button
                        asChild
                        variant="outline"
                        className="group/btn px-4 py-2 rounded-lg cursor-pointer"
                        onClick={() => {
                          handleViewProjectClick(project);
                        }}
                      >
                        <span className="inline-flex items-center gap-2">
                          View Project
                          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </span>
                      </Button>

                    </motion.div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </Container>
    </motion.section>
  )
}