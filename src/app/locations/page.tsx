"use client"

import { motion } from "framer-motion"
import { locations } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { MapPin, Check, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LocationsPage() {
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
            Our Locations
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Premium coworking spaces in the heart of Delhi and Gurgaon
          </motion.p>
        </div>
      </motion.section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {locations.map((location, index) => (
              <motion.div 
                key={location.id} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-96 lg:h-auto overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <Image 
                        src={location.image}
                        alt={location.name}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </div>
                  
                  <div className="p-8">
                    <motion.div 
                      className="flex items-center gap-2 mb-2 text-[#d92365]"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <MapPin className="w-5 h-5" />
                      <span className="text-sm font-medium">Coworking Space</span>
                    </motion.div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{location.name}</h2>
                    <p className="text-gray-600 mb-6">{location.address}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <motion.div 
                        className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="w-16 h-16 min-w-[64px] bg-[#d92365] rounded-full flex items-center justify-center">
                          <span className="text-lg font-bold text-white whitespace-nowrap">{location.seats}+</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Seats</p>
                        </div>
                      </motion.div>
                      <motion.div 
                        className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="w-16 h-16 min-w-[64px] bg-[#d92365] rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-white text-center leading-tight px-1">{location.connectivity}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">WiFi</p>
                        </div>
                      </motion.div>
                    </div>

                    <h3 className="font-semibold text-gray-900 mb-3">Features</h3>
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {location.features.map((feature, i) => (
                        <motion.div 
                          key={feature} 
                          className="flex items-center gap-2 text-sm text-gray-600"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <Check className="w-4 h-4 text-[#d92365] flex-shrink-0" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>

                    <Link href="/workspaces">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-[#d92365] hover:bg-[#d92365]/90 text-white px-4 py-2 rounded-md font-medium transition-all flex items-center justify-center gap-2"
                      >
                        View Workspaces at This Location
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <motion.section 
        className="py-20 bg-stone-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Visit Us Today
          </motion.h2>
          <motion.p 
            className="text-gray-600 mb-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Book a tour and experience our spaces firsthand
          </motion.p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#d92365] hover:bg-[#d92365]/90 text-white px-8 py-3 rounded-lg font-medium shadow-lg transition-all"
            >
              Book a Tour
              <ArrowRight className="ml-2 w-5 h-5 inline" />
            </motion.button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
