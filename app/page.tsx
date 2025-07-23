'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/components/HeroSection'
import { DepartmentsSection } from '@/components/DepartmentsSection'
import { ActivitiesSection } from '@/components/ActivitiesSection'
import { GallerySection } from '@/components/GallerySection'
import { ContactSection } from '@/components/ContactSection'
import { Locale } from '@/lib/i18n'
import { useSearchParams } from 'next/navigation'

export default function Home() {
  const searchParams = useSearchParams()
  const locale = (searchParams.get('lang') || 'ar') as Locale

  return (
    <div className="min-h-screen ">
      <Header locale={locale} />
      <main className='m-12'>
        <HeroSection locale={locale} />
        <DepartmentsSection locale={locale} />
        <div id="activities">
          <ActivitiesSection locale={locale} />
        </div>
        <GallerySection locale={locale} />
        <ContactSection locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  )
}