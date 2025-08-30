'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'
import { getTranslation, Locale } from '@/lib/i18n'

interface FooterProps {
  locale: Locale
}

export function Footer({ locale }: FooterProps) {
  const t = getTranslation(locale)
  const isRTL = locale === 'ar'

  return (
    <footer className="bg-primary-auto-text-color" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-4">
               <div className="relative w-16 h-16">
                 <Image
                   src="/LOGO.jpg"
                   alt="Al-Madarij Schools Logo"
                   layout="fill"
                   objectFit="contain"
                 />
               </div>
              <h3 className="font-bold text-xl">
                {isRTL ? 'مدارس المدارج الخاصة' : 'Al-Madarij Private Schools'}
              </h3>
            </div>
            <p className="opacity-80 mb-6 leading-relaxed">
              {isRTL 
                ? 'مدارس المدارج الخاصة تُعنى ببناء شخصية متكاملة تجمع بين القيم، والمهارات، والمعرفة، في بيئة تعليمية آمنة ومحفّزة.'
                : 'Al-Madarij Private Schools cares about building an integrated personality that combines values, skills, and knowledge in a safe and stimulating educational environment.'
              }
            </p>
            
            {/* Social Media */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-sky-500 hover:bg-sky-600 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-lg flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">
              {isRTL ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <nav className="flex flex-col gap-3">
              <Link href="/about" className="opacity-80 hover:opacity-100 transition-opacity">
                {t.nav.about}
              </Link>
              <Link href="/departments" className="opacity-80 hover:opacity-100 transition-opacity">
                {t.nav.departments}
              </Link>
              <Link href="/activities" className="opacity-80 hover:opacity-100 transition-opacity">
                {t.nav.activities}
              </Link>
              <Link href="/gallery" className="opacity-80 hover:opacity-100 transition-opacity">
                {t.nav.gallery}
              </Link>
              <Link href="/registration" className="opacity-80 hover:opacity-100 transition-opacity">
                {isRTL ? 'تسجيل الطلاب' : 'Student Registration'}
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t.home.contact.title}</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>99631199 / 90301188</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>info@almadarij.school</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1" />
                <span>
                  {isRTL 
                    ? 'فرع المعبيلة و فرع الخوض'
                    : 'Al Maabilah & Al Khoudh Branches'
                  }
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center opacity-70">
          <p>
            © 2025 {isRTL ? 'مدارس المدارج الخاصة' : 'Al-Madarij Private Schools'}. 
            {isRTL ? ' جميع الحقوق محفوظة.' : ' All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  )
}