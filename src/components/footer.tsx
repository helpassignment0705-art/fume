import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#d92365] to-[#710a73] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/fumenewlogo.png"
                alt="Fume Coworking logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="font-bold text-xl text-white">Fume</span>
            </div>
            <p className="text-sm text-white/80 mb-4">
              Your home office, away from home. Premium coworking spaces in Delhi & Gurgaon.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <span className="text-xs">in</span>
              </a>
              <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <span className="text-xs">ig</span>
              </a>
              <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <span className="text-xs">fb</span>
              </a>
              <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <span className="text-xs">tw</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Locations</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/locations" className="hover:text-white/80 transition-colors">Netaji Subhash Palace, Delhi</Link></li>
              <li><Link href="/locations" className="hover:text-white/80 transition-colors">Udyog Vihar, Gurgaon</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Workspaces</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/workspaces" className="hover:text-white/80 transition-colors">Day Pass</Link></li>
              <li><Link href="/workspaces" className="hover:text-white/80 transition-colors">Dedicated Desk</Link></li>
              <li><Link href="/workspaces" className="hover:text-white/80 transition-colors">Private Cabin</Link></li>
              <li><Link href="/workspaces" className="hover:text-white/80 transition-colors">Meeting Room</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 99999 99999</span>
              </li>
              <li>hello@fumecoworking.in</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-sm">
              <a href="tel:+919999999999" className="flex items-center gap-2 hover:text-white/80">
                <Phone className="w-4 h-4" />
                <span>+91-999-999-9999</span>
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Delhi & Gurgaon</span>
              </span>
            </div>
            <p className="text-sm text-white/80">
              © 2026 Fume Coworking. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
