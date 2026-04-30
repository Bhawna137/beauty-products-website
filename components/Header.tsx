'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart, Heart, User, Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartCount] = useState(0)
  const [wishlistCount] = useState(0)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">B</span>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent hidden sm:inline">BeautyHub</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-pink-600 transition font-medium">
            Home
          </Link>
          <Link href="#" className="text-gray-700 hover:text-pink-600 transition font-medium">
            Shop
          </Link>
          <Link href="#" className="text-gray-700 hover:text-pink-600 transition font-medium">
            About
          </Link>
          <Link href="#" className="text-gray-700 hover:text-pink-600 transition font-medium">
            Contact
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          {/* Wishlist */}
          <button className="relative p-2 hover:bg-gray-100 rounded-full transition">
            <Heart size={24} className="text-gray-700 hover:text-pink-600 transition" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart */}
          <button className="relative p-2 hover:bg-gray-100 rounded-full transition">
            <ShoppingCart size={24} className="text-gray-700 hover:text-pink-600 transition" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* User Account */}
          <button className="p-2 hover:bg-gray-100 rounded-full transition hidden sm:block">
            <User size={24} className="text-gray-700 hover:text-pink-600 transition" />
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-full transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link href="/" className="block text-gray-700 hover:text-pink-600 transition font-medium py-2">
              Home
            </Link>
            <Link href="#" className="block text-gray-700 hover:text-pink-600 transition font-medium py-2">
              Shop
            </Link>
            <Link href="#" className="block text-gray-700 hover:text-pink-600 transition font-medium py-2">
              About
            </Link>
            <Link href="#" className="block text-gray-700 hover:text-pink-600 transition font-medium py-2">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
