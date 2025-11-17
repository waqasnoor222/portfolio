"use client"

import { Quote } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const testimonials = [
  {
    text: "Outstanding work! Gerold delivered exactly what we needed with exceptional attention to detail and professionalism.",
    author: "Sarah Johnson",
    title: "CEO, Tech Startup",
    image: "/woman-professional-headshot.jpg",
  },
  {
    text: "The quality of work is top-notch. Gerold is a true professional who delivers results beyond expectations.",
    author: "Michael Chen",
    title: "Product Manager",
    image: "/man-professional-headshot.jpg",
  },
  {
    text: "Incredible attention to detail and professionalism. Would definitely recommend to anyone seeking excellence.",
    author: "Emma Wilson",
    title: "Founder, Creative Agency",
    image: "/woman-professional-headshot.jpg",
  },
]

export default function Testimonials() {
  const swiperRef = useRef(null)

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">My Client's Stories</h2>
        <p className="text-muted-foreground">What my clients say about working with me</p>
      </div>

      <div className="relative overflow-hidden">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={32}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          pagination={{
            el: ".testimonials-pagination",
            clickable: true,
            dynamicBullets: true,
            bulletClass: "swiper-bullet-testimonial",
            bulletActiveClass: "swiper-bullet-active-testimonial",
          }}
          className="testimonials-slider"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-card border border-border rounded-xl p-8 h-full flex flex-col">
                <Quote className="w-6 h-6 text-primary mb-4" />
                <p className="text-foreground mb-6 leading-relaxed flex-1">{testimonial.text}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-bold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .swiper-bullet-testimonial {
          width: 8px !important;
          height: 8px !important;
          background: var(--color-muted-foreground) !important;
          opacity: 0.6 !important;
          border-radius: 50% !important;
          transition: all 0.3s ease !important;
        }
        .swiper-bullet-active-testimonial {
          background: var(--color-primary) !important;
          opacity: 1 !important;
          width: 24px !important;
          border-radius: 4px !important;
        }
      `}</style>
    </section>
  )
}
