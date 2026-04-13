'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const images = [
  {
    src: '/images/Gallery/Equipment/g4.png',
    alt: 'Modern Dental Equipment',
  },
  {
    src: '/images/Gallery/Equipment/g6.png',
    alt: 'Advanced Treatment Room',
  },
  {
    src: '/images/Gallery/Treatment_pics/g2.png',
    alt: 'Patient Care Area',
  },
]

export default function Infrastructure() {
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
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Our Facility</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 text-gray-800">
            Clinic <span className="gradient-text">Infrastructure</span>
          </h2>
          <p className="text-gray-600 text-lg">
            State-of-the-art equipment and modern facilities for comfortable and effective treatments.
          </p>
        </motion.div>

        {/* Images Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-semibold">{image.alt}</p>
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
          <Link href="/gallery" className="btn-primary inline-flex items-center gap-2">
            View Full Gallery
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
