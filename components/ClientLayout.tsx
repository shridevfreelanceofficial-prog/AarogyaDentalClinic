'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Navbar from './Navbar'
import Footer from './Footer'
import AppointmentModal from './AppointmentModal'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Auto-popup modal on homepage after 5 seconds
  useEffect(() => {
    if (pathname === '/') {
      const alreadyShown = typeof window !== 'undefined' && window.sessionStorage.getItem('appointmentModalShown')
      if (alreadyShown) return

      const timer = setTimeout(() => {
        setIsModalOpen(true)
        window.sessionStorage.setItem('appointmentModalShown', '1')
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Strip */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-2 px-4">
        <div className="container-custom flex justify-between items-center text-sm">
          <a href="tel:+919766921774" className="flex items-center gap-2 hover:text-primary-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="font-medium">97669 21774</span>
          </a>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-primary-600 px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-primary-50 transition-all duration-300 hover:scale-105"
          >
            Book Appointment
          </button>
        </div>
      </div>

      <Navbar isScrolled={isScrolled} openModal={() => setIsModalOpen(true)} />
      
      {children}
      
      <Footer />

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
