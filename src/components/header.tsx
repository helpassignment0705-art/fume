"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Phone, MapPin, Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Locations", href: "/locations" },
  { name: "Workspaces", href: "/workspaces" },
  { name: "Amenities", href: "/amenities" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className="sticky top-0 z-50 bg-white"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-gradient-to-r from-[#d92365] to-[#710a73] text-white text-sm">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <a href="tel:+919999999999" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Phone className="w-4 h-4" />
            <span>+91-999-999-9999</span>
          </a>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Delhi & Gurgaon</span>
          </div>
        </div>
      </div>
      
      <motion.nav
        className={`transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}
        style={{ backgroundColor: scrolled ? 'rgba(255,255,255,0.98)' : 'white' }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/fumenewlogo.png"
                  alt="Fume Coworking logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                  priority
                />
              </motion.div>
              <span className="font-bold text-xl text-gray-900">Fume</span>
            </Link>
            
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link 
                    href={item.href}
                    className="text-gray-700 hover:text-[#d92365] transition-colors font-medium relative group"
                  >
                    {item.name}
                    <motion.span
                      className="absolute -bottom-1 left-0 h-0.5 bg-[#d92365]"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.2 }}
                    />
                  </Link>
                </motion.div>
              ))}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-[#d92365] to-[#710a73] text-white px-6 py-2 rounded-md hover:opacity-90 transition-opacity font-medium shadow-md"
                >
                  Book Now
                </Link>
              </motion.div>
            </div>

            <motion.button 
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link 
                      href={item.href}
                      className="block py-2 text-gray-700 hover:text-[#d92365] font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link 
                    href="/contact" 
                    className="block bg-gradient-to-r from-[#d92365] to-[#710a73] text-white px-6 py-2 rounded-md text-center font-medium shadow-md" 
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Book Now
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.header>
  )
}
