'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const doctors = [
  {
    name: 'Dr. Vishal Patil',
    title: 'Dentist',
    specialty: 'Oral and Maxillofacial Surgeons',
  },
  {
    name: 'Dr. Sujay Jain',
    title: 'Dentist',
    specialty: 'Braces Specialist',
  },
  {
    name: 'Dr. Harshal Jain',
    title: 'System Analyst',
    specialty: 'Braces Specialist',
  },
]

export default function DoctorsPreview() {
  return (
    <section className="section-padding gradient-bg-reverse">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Our Team</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 text-gray-800">
            Meet Our <span className="gradient-text">Expert Dentists</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Our experienced team of dental professionals is dedicated to providing you with the highest quality care.
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Avatar Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center overflow-hidden">
                <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{doctor.name}</h3>
                <p className="text-primary-600 font-medium mb-2">{doctor.title}</p>
                <p className="text-gray-600 text-sm">{doctor.specialty}</p>
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
          <Link href="/doctors" className="btn-primary inline-flex items-center gap-2">
            View All Doctors
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
