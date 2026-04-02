export const locations = [
  {
    id: "delhi",
    name: "Netaji Subhash Palace (NSP), Delhi",
    address: "Netaji Subhash Place, New Delhi",
    seats: 250,
    connectivity: "Excellent",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    features: ["High-Speed WiFi", "Meeting Rooms", "Conference Hall", "24/7 Access", "Security"],
    coordinates: { lat: 28.6914, lng: 77.1613 },
  },
  {
    id: "gurgaon",
    name: "Udyog Vihar Phase 4, Gurugram",
    address: "76-D, Udyog Vihar Phase 4, Gurugram, Haryana 122016",
    seats: 250,
    connectivity: "Excellent",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
    features: ["High-Speed WiFi", "Meeting Rooms", "Premium Conference Hall", "24/7 Access", "Security"],
    coordinates: { lat: 28.4897, lng: 77.0852 },
  },
]

export const workspaceTypes = [
  {
    id: "day-pass",
    name: "Day Pass",
    description: "Try Fume for a day and see how it feels",
    icon: "Sun",
    price: "₹499",
    period: "per day",
    features: ["Access to shared workspace", "High-speed WiFi", "Free coffee & pantry", "Meeting room access (pay extra)"],
    locations: ["Delhi", "Gurgaon"],
  },
  {
    id: "dedicated",
    name: "Open Dedicated",
    description: "Your go-to spot for your daily grind",
    icon: "Desk",
    price: "₹8,000",
    period: "per month",
    features: ["Dedicated desk", "24/7 access", "Lockable storage", "Free meeting hours", "Premium amenities"],
    locations: ["Delhi", "Gurgaon"],
    popular: true,
  },
  {
    id: "cubicle",
    name: "Cubicle",
    description: "Your personal space within a shared workspace",
    icon: "Box",
    price: "₹12,000",
    period: "per month",
    features: ["Private cubicle", "Sound privacy", "Customizable desk", "Dedicated storage", "Priority booking"],
    locations: ["Delhi", "Gurgaon"],
  },
  {
    id: "private-cabin",
    name: "Private Cabin",
    description: "Give your team the privacy they deserve",
    icon: "DoorClosed",
    price: "₹35,000",
    period: "per month",
    features: ["Private office", "2-8 seats", "Custom branding", "Meeting room quota", "Private pantry"],
    locations: ["Delhi", "Gurgaon"],
  },
  {
    id: "meeting-room",
    name: "Meeting Room",
    description: "Discuss, decide and deliver with your entire team",
    icon: "Users",
    price: "₹500",
    period: "per hour",
    features: ["4-10 seats", "AV equipment", "Whiteboard", "Video conferencing", "Refreshments"],
    locations: ["Delhi", "Gurgaon"],
  },
  {
    id: "conference-room",
    name: "Conference Room",
    description: "Host your important presentations and conferences",
    icon: "Presentation",
    price: "₹1,500",
    period: "per hour",
    features: ["10-20 seats", "Premium AV setup", "Live streaming", "Catering options", "Event support"],
    locations: ["Delhi", "Gurgaon"],
  },
  {
    id: "virtual-office",
    name: "Virtual Office",
    description: "Elevate your work address, not your expenses",
    icon: "Globe",
    price: "₹2,000",
    period: "per month",
    features: ["Prime business address", "Mail handling", "Day pass allowance", "Meeting room credits", "Company verification"],
    locations: ["Delhi", "Gurgaon"],
  },
]

export const amenities = [
  { name: "High-Speed WiFi", icon: "Wifi", description: "Fiber optic connection with 1Gbps speed" },
  { name: "Free Coffee & Beverages", icon: "Coffee", description: "Premium coffee and tea available all day" },
  { name: "Meeting Rooms", icon: "Video", description: "Bookable rooms with AV equipment" },
  { name: "24/7 Access", icon: "Clock", description: "Round-the-clock workspace access" },
  { name: "Parking", icon: "Car", description: "Secure parking for members" },
  { name: "Printer/Scanner", icon: "Printer", description: "Free printing for all members" },
  { name: "Reception", icon: "UserCheck", description: "Professional reception services" },
  { name: "Security", icon: "Shield", description: "24/7 security and CCTV monitoring" },
  { name: "Kitchen/Pantry", icon: "Utensils", description: "Fully stocked kitchenette" },
  { name: "Lockers", icon: "Lock", description: "Personal storage lockers available" },
]

export const testimonials = [
  {
    name: "Akash Bohra",
    role: "RDandX Network LLP, BKC, Mumbai",
    quote: "Our experience at Fume has been exceptional. The quality of facilities, the support, and the relationship we have built with the team has been invaluable to our business growth and development.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    name: "Imran Khan",
    role: "Trustsignal Ventures, Nehru Place, Delhi",
    quote: "We have grown from a team of two to a team of 20 here. We appreciate the effort that has gone into creating a productive and supportive ecosystem for professionals.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
  {
    name: "Priya Sharma",
    role: "TechStart India, Gurugram",
    quote: "One of the best things about Fume is the sense of community. It's a great option for anyone looking for a productive and collaborative workspace.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
]

export const clientLogos = [
  "Asian Paints",
  "Lenskart",
  "HCLTech",
  "NoBroker",
  "MobiKwik",
  "DTDC",
  "Axis Bank",
  "HDFC Life",
]

export const stats = {
  cities: 2,
  hubs: 2,
  desks: "500+",
}

export const navItems = [
  { name: "Home", href: "/" },
  { name: "Locations", href: "/locations" },
  { name: "Workspaces", href: "/workspaces" },
  { name: "Amenities", href: "/amenities" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
]
