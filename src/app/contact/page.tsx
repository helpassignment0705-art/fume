"use client"

import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight, Wifi, Users } from "lucide-react";
import { locations } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const MapWithNoSSR = dynamic(() => import("@/components/ui/location-map"), {
  ssr: false,
  loading: () => (
    <div className="h-80 bg-gray-100 rounded-xl flex items-center justify-center">
      <div className="text-gray-400">Loading map...</div>
    </div>
  ),
})

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <motion.section 
        className="bg-gradient-to-r from-[#d92365] to-[#710a73] text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Have questions? We'd love to hear from you. Get in touch with our team.
          </motion.p>
        </div>
      </motion.section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-6 mb-12">
                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-[#d92365] rounded-lg flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Phone className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-500 text-sm">Mon-Sat: 9AM - 7PM</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-[#d92365] rounded-lg flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Mail className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">hello@fumecoworking.in</p>
                    <p className="text-gray-500 text-sm">We'll respond within 24 hours</p>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                className="bg-gray-50 rounded-xl p-8 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="font-semibold text-gray-900 mb-4">Send us a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <motion.input 
                      whileFocus={{ scale: 1.02 }}
                      type="text" 
                      placeholder="First Name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d92365] focus:border-transparent transition-all"
                    />
                    <motion.input 
                      whileFocus={{ scale: 1.02 }}
                      type="text" 
                      placeholder="Last Name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d92365] focus:border-transparent transition-all"
                    />
                  </div>
                  <motion.input 
                    whileFocus={{ scale: 1.02 }}
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d92365] focus:border-transparent transition-all"
                  />
                  <motion.input 
                    whileFocus={{ scale: 1.02 }}
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d92365] focus:border-transparent transition-all"
                  />
                  <motion.select 
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d92365] focus:border-transparent transition-all"
                  >
                    <option>Select Interest</option>
                    <option>Day Pass</option>
                    <option>Dedicated Desk</option>
                    <option>Private Cabin</option>
                    <option>Meeting Room</option>
                    <option>Virtual Office</option>
                    <option>Event Space</option>
                    <option>Other</option>
                  </motion.select>
                  <motion.textarea 
                    whileFocus={{ scale: 1.02 }}
                    placeholder="Your Message" 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d92365] focus:border-transparent transition-all"
                  ></motion.textarea>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    className="w-full bg-[#d92365] hover:bg-[#d92365]/90 text-white px-4 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Visit Our Spaces</h2>
              
              {/* Interactive Map */}
              <motion.div
                className="mb-8 rounded-xl overflow-hidden shadow-lg border-4 border-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="h-80">
                  <MapWithNoSSR />
                </div>
              </motion.div>

              {/* Location Cards */}
              <div className="space-y-4">
                {locations.map((location, index) => (
                  <motion.div
                    key={location.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300">
                      <div className="relative h-32">
                        <Image 
                          src={location.image}
                          alt={location.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute top-3 right-3 flex gap-2">
                          <span className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 flex items-center gap-1">
                            <Clock className="w-3 h-3" /> 24/7
                          </span>
                        </div>
                        <div className="absolute bottom-3 left-3 text-white">
                          <h3 className="text-lg font-bold flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-[#d92365]" />
                            {location.name}
                          </h3>
                        </div>
                      </div>
                      
                      <CardContent className="p-4">
                        <p className="text-gray-600 text-sm mb-3">{location.address}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex gap-4">
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                              <Users className="w-4 h-4 text-[#d92365]" />
                              <span>{location.seats}+ Seats</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                              <Wifi className="w-4 h-4 text-[#d92365]" />
                              <span>{location.connectivity}</span>
                            </div>
                          </div>
                          
                          <Link href="/locations">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="text-[#d92365] hover:text-[#d92365]/80 font-medium text-sm flex items-center gap-1"
                            >
                              Details
                              <ArrowRight className="w-4 h-4" />
                            </motion.button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-6 p-5 bg-gradient-to-r from-[#d92365]/10 to-[#710a73]/10 rounded-xl border border-[#d92365]/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#d92365] to-[#710a73] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">Operating Hours</h4>
                    <p className="text-gray-600 text-xs">Spaces open 24/7 for members. Book tours 9AM - 7PM.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section 
        className="py-20 bg-gradient-to-r from-[#d92365] to-[#710a73]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl font-bold text-white mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Ready to Experience Fume?
          </motion.h2>
          <motion.p 
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Book a free tour today and discover why professionals choose Fume Coworking
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#d92365] px-8 py-3 rounded-lg font-semibold shadow-lg transition-all"
          >
            Book a Free Tour
            <ArrowRight className="ml-2 w-5 h-5 inline" />
          </motion.button>
        </div>
      </motion.section>
    </div>
  )
}
