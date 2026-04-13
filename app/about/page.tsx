'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail } from 'lucide-react'

const founders = [
  {
    name: 'Dr. Anita A. Chaurasia',
    qualification: 'B.D.S.',
    description: 'Very well qualified and specialized in Denture, Esthetic Work and Kids Treatment.',
    registration: 'A-34617',
    image: '/images/Founders/anita.jpg',
  },
  {
    name: 'Dr. Ankit Chaurasia',
    qualification: 'B.D.S., M.U.H.S.',
    description: 'Very calm and composed, affectionate and specialized in Root Canal, Dental Implant and Crowns and Bridges.',
    registration: 'A-20454',
    image: '/images/Founders/ankit.jpg',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/images/aboutus/hero.png"
          alt="About Aarogya Dental Clinic"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl text-white"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">About Us</h1>
              <p className="text-lg md:text-xl text-gray-200">
                Your trusted partner for comprehensive dental care since 2014
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-800">
                Dedicated to Your <span className="gradient-text">Smile</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At Aarogya Dental Clinic & Implant Center, we believe that everyone deserves a healthy, 
                confident smile. Founded with a vision to provide world-class dental care at affordable 
                prices, we have been serving the community of Panvel and Navi Mumbai for over a decade.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our state-of-the-art facility is equipped with the latest dental technology, enabling us 
                to provide precise diagnoses and effective treatments. From routine check-ups to complex 
                dental implants, our experienced team is committed to delivering personalized care that 
                exceeds your expectations.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We understand that visiting a dentist can be anxiety-inducing for many. That&apos;s why we&apos;ve 
                created a warm, welcoming environment where your comfort is our priority. Our gentle approach 
                and clear communication ensure that you feel at ease throughout your treatment journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Founders */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800">
              Our <span className="gradient-text">Founders</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="md:flex">
                  <div className="relative w-full md:w-48 h-64 md:h-auto flex-shrink-0">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover md:absolute md:inset-0"
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{founder.name}</h3>
                    <p className="text-primary-600 font-medium mb-3">{founder.qualification}</p>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{founder.description}</p>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-sm text-gray-500">
                        <span className="font-medium text-gray-700">Registration No.:</span> {founder.registration}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Location */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Visit Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800">
              Our <span className="gradient-text">Location</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                  <p className="text-gray-600">
                    Vijay Marg Sector 4, New Panvel East, Panvel Navi Mumbai, Maharashtra 410206 India
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                  <a href="tel:+919766921774" className="text-gray-600 hover:text-primary-600 transition-colors">
                    +91 97669 21774
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                  <a href="mailto:ankitcedees075@gmail.com" className="text-gray-600 hover:text-primary-600 transition-colors">
                    ankitcedees075@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg h-[400px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.6789456789012!2d73.12345678901234!3d19.012345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAwJzQ0LjQiTiA3M8KwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
