'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { getTranslation, Locale, defaultLocale } from '@/lib/i18n'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ContactSection } from '@/components/ContactSection'

export default function ContactPage() {
  const searchParams = useSearchParams()
  const initialLang = (searchParams.get('lang') || defaultLocale) as Locale
  const [locale, setLocale] = useState<Locale>(initialLang)
  const t = getTranslation(locale)
  const isRTL = locale === 'ar'

  useEffect(() => {
    const newLocale = (searchParams.get('lang') || defaultLocale) as Locale
    setLocale(newLocale)
  }, [searchParams])

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      <Header locale={locale} />


      <main className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 min-h-[70vh]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">
            {t.nav.contact}
          </h1>
          <ContactSection locale={locale} />
        </div>
      </main>

      <Footer locale={locale} />
    </div>
  )
}
