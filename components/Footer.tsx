'use client'

import { Heart, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></span>
              BeautyHub
            </h3>
            <p className="text-gray-400 mb-4">Your destination for premium beauty products and skincare solutions.</p>
            <div className="flex gap-4">
              <a href="#" className="text-pink-500 hover:text-pink-400 transition">Facebook</a>
              <a href="#" className="text-pink-500 hover:text-pink-400 transition">Instagram</a>
              <a href="#" className="text-pink-500 hover:text-pink-400 transition">Twitter</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-pink-500 transition">Home</Link></li>
              <li><Link href="#" className="hover:text-pink-500 transition">Shop</Link></li>
              <li><Link href="#" className="hover:text-pink-500 transition">About Us</Link></li>
              <li><Link href="#" className="hover:text-pink-500 transition">Blog</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-pink-500 transition">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-pink-500 transition">FAQ</Link></li>
              <li><Link href="#" className="hover:text-pink-500 transition">Shipping Info</Link></li>
              <li><Link href="#" className="hover:text-pink-500 transition">Returns</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-pink-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-pink-500" />
                <span>support@beautyhub.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-pink-500 mt-1" />
                <span>123 Beauty Lane, NY 10001, USA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} BeautyHub. All rights reserved.
            </p>
            <ul className="flex gap-6 text-sm">
              <li><Link href="#" className="text-gray-400 hover:text-pink-500 transition">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-pink-500 transition">Terms of Service</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-pink-500 transition">Cookie Policy</Link></li>
            </ul>
          </div>
          <div className="flex items-center justify-center mt-6 text-gray-400 text-sm">
            Made with <Heart size={16} className="text-pink-500 mx-1" /> by BeautyHub
          </div>
        </div>
      </div>
    </footer>
  )
}
