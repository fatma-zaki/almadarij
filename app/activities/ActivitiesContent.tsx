'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { getTranslation, Locale, defaultLocale } from '@/lib/i18n'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ActivitiesSection } from '@/components/ActivitiesSection'

export default function Activities() {
  const searchParams = useSearchParams()
  const initialLang = (searchParams.get('lang') || defaultLocale) as Locale
  const [locale, setLocale] = useState<Locale>(initialLang)
  const t = getTranslation(locale)
  const isRTL = locale === 'ar'

  // Optional: Handle locale change from the header
  useEffect(() => {
    const newLocale = (searchParams.get('lang') || defaultLocale) as Locale
    setLocale(newLocale)
  }, [searchParams])

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      <Header locale={locale} onLocaleChange={setLocale} />

      <main className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 min-h-[70vh]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">
            {t.nav.activities /* or t.nav.admission or t.nav.contact etc */}
          </h1>
          <ActivitiesSection locale={locale} />
        </div>
      </main>

      <Footer locale={locale} />
    </div>
  )
}
