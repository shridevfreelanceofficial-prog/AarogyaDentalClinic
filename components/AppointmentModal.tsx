'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle } from 'lucide-react'

interface AppointmentModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    service: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', phone: '', date: '', service: '', message: '' })
      onClose()
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-6 text-white">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <h2 className="text-2xl font-bold">Book an Appointment</h2>
              <p className="text-white/80 mt-1">Schedule your visit with our expert dentists</p>
            </div>

            {/* Content */}
            <div className="p-6">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Appointment Request Sent!</h3>
                  <p className="text-gray-600">We will contact you shortly to confirm your appointment.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
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
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="form-label">Preferred Date *</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="form-label">Service *</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="form-input"
                      >
                        <option value="">Select a service</option>
                        <option value="root-canal">Root Canal</option>
                        <option value="dental-implant">Dental Implant</option>
                        <option value="crowns-bridges">Crowns & Bridges</option>
                        <option value="teeth-whitening">Teeth Whitening</option>
                        <option value="braces">Braces</option>
                        <option value="extraction">Tooth Extraction</option>
                        <option value="dentures">Dentures</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="form-label">Additional Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="form-input resize-none"
                      placeholder="Any specific concerns or requirements..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full btn-primary py-4 text-lg"
                  >
                    Request Appointment
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
