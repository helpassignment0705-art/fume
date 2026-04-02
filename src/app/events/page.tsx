"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const events = [
  {
    id: 1,
    title: "Startup Networking Event",
    description: "Connect with fellow entrepreneurs and startups in the ecosystem. Share ideas, find co-founders, and grow your network.",
    date: "Every Saturday",
    location: "All Locations",
    attendees: "50-100",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    category: "Networking"
  },
  {
    id: 2,
    title: "Press Conferences & Media Events",
    description: "Professional venue for your press conferences and media interactions. Full AV setup and press coordination available.",
    date: "On Request",
    location: "All Locations",
    attendees: "Up to 100",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
    category: "Corporate"
  },
  {
    id: 3,
    title: "Workshops & Training Sessions",
    description: "Host your workshops, training sessions, and skill-building events in our state-of-the-art conference rooms.",
    date: "On Request",
    location: "All Locations",
    attendees: "10-50",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    category: "Education"
  },
  {
    id: 4,
    title: "Product Launches",
    description: "Make your product launch memorable with our premium event spaces equipped with latest technology.",
    date: "On Request",
    location: "Select Locations",
    attendees: "50-200",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
    category: "Corporate"
  },
  {
    id: 5,
    title: "Community Meetups",
    description: "Regular community gatherings to network, learn, and grow together. Features guest speakers and interactive sessions.",
    date: "Monthly",
    location: "All Locations",
    attendees: "30-80",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
    category: "Community"
  },
  {
    id: 6,
    title: "Board Meetings & AGMs",
    description: "Professional and private spaces for your important board meetings, AGMs, and executive meetings.",
    date: "On Request",
    location: "All Locations",
    attendees: "10-30",
    image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800&q=80",
    category: "Corporate"
  },
];

const container = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

export default function EventsPage() {
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
            Events at Fume
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Host your events in our professional spaces - from networking sessions to corporate conferences
          </motion.p>
        </div>
      </motion.section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {events.map((event) => (
              <motion.div key={event.id} variants={item}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-0">
                  <motion.div 
                    className="relative h-48 overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image 
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                    <motion.div 
                      className="absolute top-4 left-4 px-3 py-1 bg-[#d92365] text-white text-sm font-medium rounded-full"
                      whileHover={{ scale: 1.1 }}
                    >
                      {event.category}
                    </motion.div>
                  </motion.div>
                  <CardHeader>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="space-y-2 text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#d92365]" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#d92365]" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#d92365]" />
                        {event.attendees} attendees
                      </div>
                    </div>
                    <Link href="/contact">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-[#d92365] hover:bg-[#d92365]/90 text-white px-4 py-2 rounded-md font-medium transition-all flex items-center justify-center gap-2"
                      >
                        Book Event Space
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
            className="max-w-2xl mx-auto text-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Host Your Event at Fume</h2>
            <p className="text-gray-600 mb-8">
              Looking for the perfect venue? Our spaces are equipped to handle events of all sizes. Contact us to discuss your requirements.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#d92365] hover:bg-[#d92365]/90 text-white px-8 py-3 rounded-lg font-medium shadow-lg transition-all"
              >
                Contact for Event Booking
                <ArrowRight className="ml-2 w-5 h-5 inline" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
