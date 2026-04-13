'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Our Doctors', href: '/doctors' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact Us', href: '/contact' },
]

const services = [
  'Single Sitting Root Canal',
  'Dental Implants',
  'Crowns & Bridges',
  'Teeth Cleaning & Whitening',
  'Braces (All Types)',
  'Wisdom Tooth Extraction',
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <Image
              src="/images/logo/logo.png"
              alt="Aarogya Dental Clinic"
              width={180}
              height={60}
              className="h-14 w-auto object-contain brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for comprehensive dental care. Expert dentists, modern equipment, and personalized treatment plans for a healthier smile.
            </p>
            <div className="flex gap-4">
              {['facebook', 'instagram', 'twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-primary-500 hover:to-secondary-500 transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <svg className="w-4 h-4 text-primary-500 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Our Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500"></span>
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <svg className="w-4 h-4 text-secondary-500 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Contact Info
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">Office</p>
                  <p className="text-gray-400 text-sm">Vijay Marg Sector 4, New Panvel East, Panvel Navi Mumbai, Maharashtra 410206 India</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <a href="tel:+919766921774" className="text-gray-400 text-sm hover:text-primary-400 transition-colors">
                    + 097669 21774
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a href="mailto:ankitcedees075@gmail.com" className="text-gray-400 text-sm hover:text-primary-400 transition-colors">
                    ankitcedees075@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Aarogya Dental Clinic & Implant Center. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
