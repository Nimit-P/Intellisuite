import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Instagram, Linkedin, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from './ContactForm';

export default function Footer() {
  return (
    <div className="bg-foreground text-white">

      {/* Footer Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Logo and Badges */}
            <Image src='/intellisuiteLogo.png' width={400} height={400} alt='intellisuiteLogo' />

            {/* Product Links */}
            <div>
              <h3 className="font-semibold mb-4 text-gray-400">Product</h3>
              <ul className="space-y-3 text-gray-300">
                <li><Link href="#about-us" className="hover:text-white transition">Platform features</Link></li>
                <li><Link href="#about-us" className="hover:text-white transition">Agency solutions</Link></li>
                <li><Link href="#about-us" className="hover:text-white transition">Data integrations</Link></li>
                <li><Link href="/" className="hover:text-white transition">Compare platforms</Link></li>
                <li><Link href="#reviews" className="hover:text-white transition">Reviews</Link></li>
                <li><Link href="#pricing" className="hover:text-white transition">Pricing</Link></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold mb-4 text-gray-400">Company</h3>
              <ul className="space-y-3 text-gray-300">
                <li><Link href="#team" className="hover:text-white transition">About</Link></li>
                <li>
                  <Link href="/" className="hover:text-white transition inline-flex items-center gap-2">
                    Careers
                    <Badge className="bg-blue-600 hover:bg-blue-700 text-xs">Hiring</Badge>
                  </Link>
                </li>
                <li><Link href="/" className="hover:text-white transition">Media Kit</Link></li>
                {/* <li><Link href="/" className="hover:text-white transition">Contact</Link></li> */}
                <ContactForm />
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-gray-400">Get Started</h3>
              <ul className="space-y-3 text-gray-300">
                <li><Link href="/" className="hover:text-white transition">Start Free Trial</Link></li>
                <li><Link href="#cta" className="hover:text-white transition">Book a Demo</Link></li>
                <li><Link href="/" className="hover:text-white transition">Quick Start Guide</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <a href="https://www.instagram.com/intellisuite.in?igsh=MWpnbTVnbDNuOWUzbQ==" className="text-gray-400 hover:text-white transition">
                  <Instagram className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Linkedin className="w-5 h-5" /></a>
              </div>

              {/* Copyright */}
              <div className="text-gray-400 text-sm">
                © 2025 Intellisuite
              </div>

              {/* Right Links */}
              <div className="flex items-center gap-6">
                <Link href="/" className="text-gray-400 hover:text-white text-sm transition">Terms</Link>
                <Link href="/" className="text-gray-400 hover:text-white text-sm transition">Privacy</Link>
                <button className="flex items-center gap-2 border border-gray-700 rounded-full px-4 py-2 text-sm hover:border-gray-600 transition">
                  <Globe className="w-4 h-4" />
                  <span>English</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}