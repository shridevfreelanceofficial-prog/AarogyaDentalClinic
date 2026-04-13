'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Single Sitting Root Canal',
    description: 'Quick relief from discomfort with our efficient one-visit root canal treatment.',
    icon: ' dental_implant',
  },
  {
    title: 'Dental Implants',
    description: 'Long-lasting solution for missing teeth with natural-looking results.',
    icon: 'implant',
  },
  {
    title: 'Crowns & Bridges',
    description: 'Restore damaged teeth with strength, stability, and natural appearance.',
    icon: 'crown',
  },
]

const serviceIcons = [
  (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m-6 0h6m-6 0V9m6 6V9" />
    </svg>
  ),
  (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
]

export default function ServicesPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 text-gray-800">
            Comprehensive <span className="gradient-text">Dental Care</span>
          </h2>
          <p className="text-gray-600 text-lg">
            We offer a wide range of dental services to meet all your oral health needs under one roof.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {serviceIcons[index]}
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                <ArrowRight className="w-5 h-5 text-primary-600" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-primary inline-flex items-center gap-2">
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
