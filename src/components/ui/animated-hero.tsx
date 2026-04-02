"use client"

import { useEffect, useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function AnimatedHero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = useMemo(
    () => [
      {
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
        title: "Netaji Subhash Palace, Delhi",
        subtitle: "Premium coworking space in the heart of Delhi",
      },
      {
        image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1920&q=80",
        title: "Udyog Vihar, Gurgaon",
        subtitle: "Modern workspace in Gurugram's business hub",
      },
    ],
    []
  )

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearTimeout(timeoutId)
  }, [currentSlide, slides.length])

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gray-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            className="object-cover"
            priority
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-[#d92365]/80 via-[#710a73]/70 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>
      </AnimatePresence>

      <motion.div
        className="relative z-10 container mx-auto px-4"
        initial="initial"
        animate="animate"
      >
        <div className="max-w-3xl">
          <motion.div
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium border border-white/30">
              <MapPin className="w-4 h-4" />
              {slides[currentSlide].title}
            </span>
          </motion.div>

          <motion.h1
            variants={{
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight leading-tight"
          >
            Your Home Office,
            <span className="block text-[#d92365]">
              Away From Home
            </span>
          </motion.h1>

          <motion.p
            variants={{
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mb-8"
          >
            {slides[currentSlide].subtitle}
          </motion.p>

          <motion.div
            variants={{
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#d92365] hover:bg-[#d92365]/90 text-white text-lg px-8 py-3 rounded-lg font-medium shadow-lg transition-all"
              >
                Book a Tour
                <ArrowRight className="ml-2 w-5 h-5 inline" />
              </motion.button>
            </Link>
            <Link href="/workspaces">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,1)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 text-lg px-8 py-3 rounded-lg font-medium shadow-md transition-all"
              >
                View Workspaces
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1 }
            }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex items-center gap-6"
          >
            <a href="tel:+919999999999" className="flex items-center gap-2 text-white hover:text-[#d92365] transition-colors">
              <Phone className="w-5 h-5" />
              <span className="font-medium">+91 98765 43210</span>
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentSlide 
                ? "bg-[#d92365] w-8" 
                : "bg-white/50 hover:bg-white w-3"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </motion.div>

      <motion.div
        className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col gap-3"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide 
                ? "bg-[#d92365] h-8" 
                : "bg-white/30 hover:bg-white/50"
            }`}
            whileHover={{ scale: 1.5 }}
          />
        ))}
      </motion.div>
    </section>
  )
}
