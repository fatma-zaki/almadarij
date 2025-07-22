'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { getTranslation, Locale, defaultLocale } from '@/lib/i18n'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function GalleryPage() {
  const searchParams = useSearchParams()
  const initialLang = (searchParams.get('lang') || defaultLocale) as Locale
  const [locale, setLocale] = useState<Locale>(initialLang)

  useEffect(() => {
    const newLocale = (searchParams.get('lang') || defaultLocale) as Locale
    setLocale(newLocale)
  }, [searchParams])

  const t = getTranslation(locale)
  const isRTL = locale === 'ar'

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      <Header locale={locale} />

      <main className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50 min-h-[70vh]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">
            {t.nav.gallery}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {isRTL
              ? 'معرض الصور قيد التطوير. سيتم إضافة صور ومحتوى مرئي قريبًا.'
              : 'The gallery is under development. Visual content and images will be added soon.'}
          </p>
        </div>
      </main>

      <Footer locale={locale} />
    </div>
  )
}
