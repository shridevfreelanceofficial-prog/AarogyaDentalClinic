'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'

const galleryCategories = [
  {
    name: 'Dental Implant Treatment',
    folder: 'Dental_Implant_Treatment',
    images: ['g8.png', 'g9.png', 'g10.png'],
  },
  {
    name: 'Composite Treatment',
    folder: 'Composite_Treatment',
    images: ['g11.png', 'g12.png'],
  },
  {
    name: 'Braces Treatment',
    folder: 'Composite_Treatment',
    images: ['g11.png', 'g12.png'],
  },
  {
    name: 'Treatment Pics',
    folder: 'Treatment_pics',
    images: ['g1.png', 'g2.png', 'g3.png'],
  },
  {
    name: 'Equipment',
    folder: 'Equipment',
    images: ['g4.png', 'g6.png'],
  },
  {
    name: 'Office',
    folder: 'Office',
    images: ['g5.png', 'g7.png'],
  },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const openLightbox = (imagePath: string) => {
    setSelectedImage(imagePath)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 gradient-bg overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-secondary-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-primary-500 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Visual Tour</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-6 text-gray-800">
              Our <span className="gradient-text">Gallery</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Explore our state-of-the-art facility, advanced equipment, and successful treatment outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === null
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {galleryCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          {galleryCategories
            .filter((cat) => selectedCategory === null || cat.name === selectedCategory)
            .map((category, catIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="mb-16"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full" />
                  {category.name}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.images.map((image, imgIndex) => (
                    <motion.div
                      key={image}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: imgIndex * 0.05 }}
                      className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                      onClick={() => openLightbox(`/images/Gallery/${category.folder}/${image}`)}
                    >
                      <Image
                        src={`/images/Gallery/${category.folder}/${image}`}
                        alt={`${category.name} - Image ${imgIndex + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                          <ZoomIn className="w-6 h-6 text-primary-600" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Gallery Image"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
