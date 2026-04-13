'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

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
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-6 text-gray-800">
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Have questions or want to schedule an appointment? We&apos;re here to help you achieve your best smile.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] relative">
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
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1 text-lg">Our Location</h3>
                    <p className="text-gray-600">
                      Vijay Marg Sector 4, New Panvel East,<br />
                      Panvel Navi Mumbai, Maharashtra 410206 India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1 text-lg">Phone</h3>
                    <a href="tel:+919766921774" className="text-gray-600 hover:text-primary-600 transition-colors text-lg">
                      +91 97669 21774
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1 text-lg">Email</h3>
                    <a href="mailto:ankitcedees075@gmail.com" className="text-gray-600 hover:text-primary-600 transition-colors text-lg">
                      ankitcedees075@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1 text-lg">Working Hours</h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 10:00 AM - 8:00 PM<br />
                      Sunday: By Appointment
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-600">We will get back to you as soon as possible.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="form-label">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="form-input"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="form-label">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="form-input"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="form-label">Phone *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="form-input"
                          placeholder="Your phone number"
                        />
                      </div>
                      <div>
                        <label className="form-label">Subject *</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="form-input"
                        >
                          <option value="">Select a subject</option>
                          <option value="appointment">Book Appointment</option>
                          <option value="inquiry">General Inquiry</option>
                          <option value="emergency">Dental Emergency</option>
                          <option value="feedback">Feedback</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="form-label">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="form-input resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full btn-primary py-4 text-lg"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
