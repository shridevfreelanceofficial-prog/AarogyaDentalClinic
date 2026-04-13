'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Single Sitting Root Canal',
    description: 'This procedure treats infection inside the tooth and can often be completed in just one visit, helping you get quick relief from discomfort.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m-6 0h6m-6 0V9m6 6V9" />
      </svg>
    ),
  },
  {
    title: 'Dental Implants',
    description: 'A long-lasting solution for missing teeth, dental implants are placed in the jaw to restore both function and a natural look.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Crowns & Bridges',
    description: 'These restorations are used to repair or replace damaged and missing teeth, providing strength, stability, and a natural appearance.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Teeth Cleaning & Whitening',
    description: 'Professional cleaning removes buildup from teeth, while whitening helps improve their brightness for a cleaner, fresher smile.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Braces (All Types)',
    description: 'Braces gradually align teeth and improve bite, helping you achieve a healthier and more confident smile over time.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Wisdom Tooth Extraction',
    description: 'Removing wisdom teeth can prevent pain, crowding, and other dental issues, ensuring better long-term oral health.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    title: 'Dentures',
    description: 'Dentures offer a reliable way to replace missing teeth, restoring your ability to eat, speak, and smile comfortably.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: 'Laminates And Veneers',
    description: 'These cosmetic treatments enhance the appearance of teeth by covering imperfections and creating a more uniform look.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: 'Full Mouth Rehabilitation',
    description: 'This comprehensive treatment restores the function and appearance of the entire mouth, addressing multiple dental concerns at once.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 gradient-bg overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-secondary-500 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-6 text-gray-800">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Comprehensive dental care solutions tailored to meet your unique needs. From preventive care to advanced treatments, we&apos;ve got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-primary-50/50 to-secondary-50/50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>

                {/* Hover Arrow */}
                <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Book an appointment today and let our expert team help you achieve the smile you&apos;ve always wanted.
            </p>
            <a href="/contact" className="btn-primary inline-flex items-center gap-2 text-lg">
              Book Appointment
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
