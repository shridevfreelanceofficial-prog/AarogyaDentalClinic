'use client'

import { motion } from 'framer-motion'
import { Stethoscope, Award, Users, Clock } from 'lucide-react'

const stats = [
  { icon: Award, value: '10+', label: 'Years Experience' },
  { icon: Users, value: '5,000+', label: 'Happy Patients' },
  { icon: Clock, value: '20+', label: 'Daily Patients' },
  { icon: Stethoscope, value: '8+', label: 'Treatments' },
]

export default function AboutPreview() {
  return (
    <section className="section-padding gradient-bg">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6 text-gray-800">
              Our Service Keeps You <span className="gradient-text">Smiling</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              We are dedicated to helping you maintain a healthy, confident smile through quality care and attention.
              At Aarogya Dental Clinic, we combine modern dental technology with compassionate care to provide 
              you with the best possible treatment experience.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our team of experienced dentists specializes in a wide range of treatments, from routine check-ups 
              to complex dental implants. We believe that everyone deserves a beautiful smile, and we&apos;re here 
              to make that happen.
            </p>
            <a href="/about" className="btn-primary inline-flex items-center gap-2">
              Learn More About Us
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mb-4">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
