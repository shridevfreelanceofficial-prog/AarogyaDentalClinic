'use client'

import { motion } from 'framer-motion'

const doctors = [
  {
    name: 'Dr. Vishal Patil',
    title: 'Dentist',
    specialty: 'Oral and Maxillofacial Surgeons',
    description: 'Expert in complex oral surgeries and maxillofacial procedures with years of experience in handling challenging cases.',
  },
  {
    name: 'Dr. Sujay Jain',
    title: 'Dentist',
    specialty: 'Braces Specialist',
    description: 'Specialized in orthodontic treatments, helping patients achieve perfectly aligned smiles through various braces options.',
  },
  {
    name: 'Dr. Harshal Jain',
    title: 'System Analyst',
    specialty: 'Braces Specialist',
    description: 'Combines technical expertise with orthodontic knowledge to provide precise and effective braces treatments.',
  },
]

const founders = [
  {
    name: 'Dr. Anita A. Chaurasia',
    qualification: 'B.D.S.',
    specialty: 'Denture, Esthetic Work and Kids Treatment',
    description: 'Very well qualified and specialized in Denture, Esthetic Work and Kids Treatment.',
    registration: 'A-34617',
    image: '/images/Founders/anita.jpg',
  },
  {
    name: 'Dr. Ankit Chaurasia',
    qualification: 'B.D.S., M.U.H.S.',
    specialty: 'Root Canal, Dental Implant and Crowns & Bridges',
    description: 'Very calm and composed, affectionate and specialized in Root Canal, Dental Implant and Crowns and Bridges.',
    registration: 'A-20454',
    image: '/images/Founders/ankit.jpg',
  },
]

export default function DoctorsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 gradient-bg-reverse overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary-500 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Our Team</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-6 text-gray-800">
              Our <span className="gradient-text">Doctors</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Meet our team of experienced dental professionals dedicated to providing you with exceptional care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800">
              Meet Our <span className="gradient-text">Founders</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-56 h-72 md:h-auto flex-shrink-0">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:bg-gradient-to-r" />
                  </div>
                  <div className="p-6 flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">{founder.name}</h3>
                    <p className="text-primary-600 font-semibold mb-2">{founder.qualification}</p>
                    <div className="inline-block bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm px-3 py-1 rounded-full mb-4">
                      {founder.specialty}
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">{founder.description}</p>
                    <div className="bg-white rounded-lg p-3 inline-block">
                      <p className="text-sm text-gray-500">
                        <span className="font-medium text-gray-700">Reg. No:</span> {founder.registration}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Expert Team</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800">
              Meet Our <span className="gradient-text">Specialists</span>
            </h2>
          </motion.div>

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
                {/* Avatar */}
                <div className="relative h-64 bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center overflow-hidden">
                  <div className="w-28 h-28 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-14 h-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{doctor.name}</h3>
                  <p className="text-primary-600 font-medium mb-2">{doctor.title}</p>
                  <div className="inline-block bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 text-sm px-3 py-1 rounded-full mb-3">
                    {doctor.specialty}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{doctor.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
