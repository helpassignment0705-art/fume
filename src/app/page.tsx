"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { AnimatedHero } from "@/components/ui/animated-hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { locations, testimonials, clientLogos } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, MapPin, Check, Star, Building, Award, Sparkles } from "lucide-react";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <div className="min-h-screen">
      <AnimatedHero />

      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Experience top-notch workspaces that have it all
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Fume, we offer more than just workspaces. We offer you an expansive ecosystem to move beyond limits and ideate, collaborate with professionals and succeed every day at work.
            </p>
          </AnimatedSection>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              { icon: Building, title: "Purpose-driven Workspaces", desc: "Spaces shape your thoughts and creativity. Equipped with latest technology and productivity boosting ambiance." },
              { icon: Sparkles, title: "Professional Facility Management", desc: "From routine administrative tasks to employee engagement activities, our team handles everything." },
              { icon: Star, title: "Exclusive Community Perks", desc: "Access to multiple learning and networking opportunities. Get exclusive discounts on best services." },
              { icon: Award, title: "Impeccable Customer Experience", desc: "Experience top-tier support with personalized service, ensuring your workspace needs are seamlessly met." },
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 group cursor-pointer"
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-r from-[#d92365] to-[#710a73] rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-stone-100 overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find your happy workplace
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Premium coworking spaces in the heart of Delhi and Gurgaon
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow group border-0">
                  <div className="relative h-64 overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image 
                        src={location.image}
                        alt={location.name}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-2xl font-bold mb-1">{location.name}</h3>
                      <p className="text-sm text-gray-200 flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {location.address}
                      </p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-[#d92365]">{location.seats}+</p>
                        <p className="text-sm text-gray-500">Seats</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-[#d92365]">{location.connectivity}</p>
                        <p className="text-sm text-gray-500">Connectivity</p>
                      </div>
                      <Link href="/workspaces">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-[#d92365] hover:bg-[#d92365]/90 text-white px-4 py-2 rounded-md transition-colors font-medium"
                        >
                          View Details
                        </motion.button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <AnimatedSection className="text-center">
            <Link href="/locations">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#d92365] hover:bg-[#d92365]/90 text-white px-8 py-3 rounded-lg font-medium shadow-lg transition-all"
              >
                View All Locations
                <ArrowRight className="ml-2 w-5 h-5 inline" />
              </motion.button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proof of the pudding…
            </h2>
            <p className="text-lg text-gray-600">
              Here's what some of our delighted clients have to say
            </p>
          </AnimatedSection>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {featuredTestimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow border border-gray-100"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#d92365] text-[#d92365]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-stone-100 overflow-hidden">
        <AnimatedSection className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">You're amongst the best at Fume</h2>
          </div>
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {clientLogos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, opacity: 1 }}
                className="text-gray-400 font-semibold text-lg grayscale hover:grayscale-0 cursor-pointer"
              >
                {logo}
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#d92365] to-[#710a73] overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Experience Fume?
              </h2>
              <p className="text-lg text-white/90">
                Book a tour today and discover why professionals choose Fume Coworking
              </p>
            </div>

            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-2xl"
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d92365] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d92365] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d92365] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Interest</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d92365] focus:border-transparent transition-all">
                      <option value="">Choose</option>
                      <option>Day Pass</option>
                      <option>Dedicated Desk</option>
                      <option>Private Cabin</option>
                      <option>Meeting Room</option>
                      <option>Virtual Office</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your workspace requirements..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d92365] focus:border-transparent transition-all"
                  />
                </div>

                <Link href="/contact">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full h-12 text-lg bg-[#d92365] hover:bg-[#d92365]/90 text-white rounded-lg shadow-lg transition-all font-medium"
                  >
                    Book a Tour
                    <ArrowRight className="ml-2 w-5 h-5 inline" />
                  </motion.button>
                </Link>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form you agree to receive communication from Fume via Phone call, SMS, Email and WhatsApp.
                </p>
              </form>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
