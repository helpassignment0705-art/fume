"use client"

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { workspaceTypes } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const iconMap: Record<string, React.ReactNode> = {
  Sun: <span className="text-4xl">☀️</span>,
  Desk: <span className="text-4xl">🖥️</span>,
  Box: <span className="text-4xl">📦</span>,
  DoorClosed: <span className="text-4xl">🚪</span>,
  Users: <span className="text-4xl">👥</span>,
  Presentation: <span className="text-4xl">📊</span>,
  Globe: <span className="text-4xl">🌐</span>,
};

const imageMap: Record<string, string> = {
  "day-pass": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80",
  "dedicated": "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&q=80",
  "cubicle": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&q=80",
  "private-cabin": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&q=80",
  "meeting-room": "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=400&q=80",
  "conference-room": "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&q=80",
  "virtual-office": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&q=80",
};

function WorkspaceCard({ workspace, isPopular, index }: { workspace: typeof workspaceTypes[0]; isPopular: boolean; index: number }) {
  const icon = iconMap[workspace.icon] || <span className="text-4xl">📍</span>;
  const image = imageMap[workspace.id] || "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col group border-0">
        <div className="relative h-48 overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={image}
              alt={workspace.name}
              fill
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <motion.div 
            className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10"
            whileHover={{ scale: 1.1 }}
          >
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
              {icon}
            </div>
          </motion.div>
        </div>
        <CardHeader className="flex-grow text-center">
          {isPopular && (
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="bg-[#d92365] text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-2 mx-auto"
            >
              Popular
            </motion.div>
          )}
          <CardTitle className="text-xl">{workspace.name}</CardTitle>
          <CardDescription>{workspace.description}</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <div className="mb-4">
            <span className="text-4xl font-bold text-[#d92365]">{workspace.price}</span>
            <span className="text-gray-500 ml-1">/{workspace.period}</span>
          </div>
          
          <ul className="space-y-2 mb-6 text-left">
            {workspace.features.map((feature, i) => (
              <motion.li 
                key={feature} 
                className="flex items-center gap-2 text-sm text-gray-600"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Check className="w-4 h-4 text-[#d92365] flex-shrink-0" />
                {feature}
              </motion.li>
            ))}
          </ul>

          <Link href="/contact" className="block">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#d92365] hover:bg-[#d92365]/90 text-white px-4 py-2 rounded-md font-medium transition-all"
            >
              Book Now
              <ArrowRight className="ml-2 w-4 h-4 inline" />
            </motion.button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function TabButton({ 
  active, 
  onClick, 
  children,
  index
}: { 
  active: boolean; 
  onClick: () => void; 
  children: React.ReactNode;
  index: number
}) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className={`px-8 py-3 font-medium text-sm transition-all rounded-none ${
        active 
          ? "bg-[#d92365] text-white" 
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      {children}
    </motion.button>
  );
}

export default function WorkspacesPage() {
  const hourlySpaces = workspaceTypes.filter(w => w.period.includes("hour"));
  const monthlySpaces = workspaceTypes.filter(w => w.period.includes("month"));
  
  const [activeTab, setActiveTab] = useState("all");

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
            Workspaces
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Flexible workspace solutions for every need - from hourly meeting rooms to monthly private offices
          </motion.p>
        </div>
      </motion.section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex border border-gray-300 overflow-hidden">
              <TabButton active={activeTab === "all"} onClick={() => setActiveTab("all")} index={0}>
                All
              </TabButton>
              <TabButton active={activeTab === "hourly"} onClick={() => setActiveTab("hourly")} index={1}>
                Hourly
              </TabButton>
              <TabButton active={activeTab === "monthly"} onClick={() => setActiveTab("monthly")} index={2}>
                Monthly
              </TabButton>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {(activeTab === "all" ? workspaceTypes : activeTab === "hourly" ? hourlySpaces : monthlySpaces).map((workspace, index) => (
                <WorkspaceCard 
                  key={workspace.id} 
                  workspace={workspace} 
                  isPopular={workspace.popular || false}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
