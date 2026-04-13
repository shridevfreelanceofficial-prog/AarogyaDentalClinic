'use client'

import HeroSection from '@/components/home/HeroSection'
import AboutPreview from '@/components/home/AboutPreview'
import ServicesPreview from '@/components/home/ServicesPreview'
import DoctorsPreview from '@/components/home/DoctorsPreview'
import Infrastructure from '@/components/home/Infrastructure'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <DoctorsPreview />
      <Infrastructure />
    </main>
  )
}
