"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import Container from "./Container"
import { motion } from 'framer-motion';
import { useSectionAnimation } from '@/hooks/useSectionAnimation';
import { sectionVariants } from '@/components/animations/section-variants';
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { toast } from "sonner"

export default function Contact() {
  const { ref, isInView } = useSectionAnimation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      toast.success("Message sent successfully!", {
        description: "Thank you! I’ll get back to you soon.",
        duration: 5000,
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Error submitting message!", {
        description: "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 dark:bg-[var(--bg-dark-color)] bg-[var(--bg-cream-light-color)] overflow-x-hidden"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants.contact}
    >
      <Container>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-12 md:gap-10 sm:gap-8 gap-6 items-center md:[&>*:first-child]:order-1 md:[&>*:last-child]:order-2 [&>*:first-child]:order-2 [&>*:last-child]:order-1">

          {/* Contact Form */}
          <motion.div
            className="dark:bg-[var(--primary-color-light)] bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
            animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {/* Heading */}
            <motion.div
              className="text-center space-y-2 sm:space-y-3"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-bg-gradient-light text-bg-gradient-dark"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Let's work together!
              </motion.h2>
              <motion.p
                className="text-sm sm:text-base md:text-lg dark:text-[var(--text-dark-color)] text-[var(--secondary-color)]"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.7 }}
              >
                I design and code beautifully simple things and I love what I do.
              </motion.p>
            </motion.div>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <motion.div
                className="grid sm:grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.0, duration: 0.6 }}
              >
                <Input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  className="border-gray-700 dark:text-[var(--text-dark-color)] text-[var(--secondary-color)]"
                  required
                />
                <Input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  className="border-gray-700 dark:text-[var(--text-dark-color)] text-[var(--secondary-color)]"
                  required
                />
              </motion.div>
              <motion.div
                className="grid sm:grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.1, duration: 0.6 }}
              >
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className="border-gray-700 dark:text-[var(--text-dark-color)] text-[var(--secondary-color)]"
                  required
                />
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="border-gray-700 dark:text-[var(--text-dark-color)] text-[var(--secondary-color)]"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                  <SelectTrigger className="border-gray-700 dark:text-[var(--text-dark-color)] text-[var(--secondary-color)] w-full">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent className="dark:text-[var(--text-dark-color)] text-[var(--secondary-color)] border-gray-700">
                    <SelectItem value="webApp">Web App</SelectItem>
                    <SelectItem value="wordpress">WordPress</SelectItem>
                    <SelectItem value="uiImplementation">UI Implementation</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.3, duration: 0.6 }}
              >
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="border-gray-700 dark:text-[var(--text-dark-color)] text-[var(--secondary-color)] resize-none"
                  rows={5}
                  required
                />
              </motion.div>
              <motion.div
                className="text-center sm:text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                <Button
                  type="submit"
                  className="px-8 w-full sm:w-auto h-[45px] rounded-full font-semibold"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>

                {status && (
                  <p className="text-sm mt-3 text-center text-gray-400">{status}</p>
                )}
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Info Side */}
          <motion.div
            className="space-y-8 sm:space-y-10 text-gray-200 mt-10 lg:mt-0"
            initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
            animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <motion.div
              className="flex gap-4 sm:gap-5"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <div className="w-12 h-12 rounded-full bg-gradiant-primary-two flex items-center justify-center shrink-0">
                <Phone className="size-5 text-white" />
              </div>
              <div>
                <h4 className="text-sm sm:text-md mb-1 dark:text-white text-[var(--secondary-color)]">
                  Phone
                </h4>
                <p className="text-sm sm:text-lg font-semibold dark:text-[var(--text-dark-color)] text-[var(--secondary-color)]">
                  +92 341 2157169
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex gap-4 sm:gap-5"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <div className="w-12 h-12 rounded-full bg-gradiant-primary-two flex items-center justify-center shrink-0">
                <Mail className="size-5 text-white" />
              </div>
              <div>
                <h4 className="text-sm sm:text-md mb-1 dark:text-white text-[var(--secondary-color)]">
                  Email
                </h4>
                <p className="text-sm sm:text-lg font-semibold dark:text-[var(--text-dark-color)] text-[var(--secondary-color)] break-all">
                  waqasnoor222@gmail.com
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex gap-4 sm:gap-5"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              <div className="w-12 h-12 rounded-full bg-gradiant-primary-two flex items-center justify-center shrink-0">
                <MapPin className="size-5 text-white" />
              </div>
              <div>
                <h4 className="text-sm sm:text-md mb-1 dark:text-white text-[var(--secondary-color)]">
                  Address
                </h4>
                <p className="text-sm sm:text-lg font-semibold dark:text-[var(--text-dark-color)] text-[var(--secondary-color)]">
                  Karachi, Pakistan
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  )
}