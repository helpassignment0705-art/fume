"use client"

import { motion } from "framer-motion"
import { amenities } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Wifi, Coffee, Video, Clock, Car, Printer, UserCheck, Shield, UtensilsCrossed, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";

const iconComponents: Record<string, React.ReactNode> = {
  Wifi: <Wifi className="w-8 h-8 text-white" />,
  Coffee: <Coffee className="w-8 h-8 text-white" />,
  Video: <Video className="w-8 h-8 text-white" />,
  Clock: <Clock className="w-8 h-8 text-white" />,
  Car: <Car className="w-8 h-8 text-white" />,
  Printer: <Printer className="w-8 h-8 text-white" />,
  UserCheck: <UserCheck className="w-8 h-8 text-white" />,
  Shield: <Shield className="w-8 h-8 text-white" />,
  Utensils: <UtensilsCrossed className="w-8 h-8 text-white" />,
  Lock: <Lock className="w-8 h-8 text-white" />,
};

const container = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const item = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export default function AmenitiesPage() {
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
            Amenities
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Everything you need for a productive and comfortable workday
          </motion.p>
        </div>
      </motion.section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
            variants={container}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {amenities.map((amenity, index) => {
              const IconComponent = iconComponents[amenity.icon] || <Wifi className="w-8 h-8 text-white" />;
              
              return (
                <motion.div key={amenity.name} variants={item}>
                  <motion.div whileHover={{ y: -5 }}>
                    <Card 
                      className="hover:shadow-xl transition-all duration-300 group border border-gray-100 cursor-pointer"
                    >
                      <CardContent className="p-6 text-center">
                        <motion.div 
                          className="w-16 h-16 bg-[#d92365] rounded-full flex items-center justify-center mx-auto mb-4"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {IconComponent}
                        </motion.div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{amenity.name}</h3>
                        <p className="text-gray-600 text-sm">{amenity.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <motion.section 
        className="py-20 bg-stone-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Additional Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Virtual Office Address",
                "Mail Handling & Forwarding",
                "Day Passes for Members",
                "Event Space Booking",
                "Catering Services",
                "Business Registration Support",
                "Legal & Compliance Assistance",
                "High-End Meeting Room Packages"
              ].map((service, index) => (
                <motion.div 
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="w-2 h-2 bg-[#d92365] rounded-full"
                    whileHover={{ scale: 1.5 }}
                  />
                  <span className="text-gray-700">{service}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="py-20 bg-gradient-to-r from-[#d92365] to-[#710a73] text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Ready to experience our workspaces?
          </motion.h2>
          <motion.p 
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Book a tour today and discover why professionals choose Fume
          </motion.p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#d92365] px-8 py-3 rounded-lg font-semibold shadow-lg transition-all"
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
