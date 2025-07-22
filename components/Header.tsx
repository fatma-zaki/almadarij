'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LanguageSwitch } from '@/components/LanguageSwitch'
import { getTranslation, Locale } from '@/lib/i18n'

interface HeaderProps {
  locale: Locale
}

export function Header({ locale }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const t = getTranslation(locale)
  const isRTL = locale === 'ar'

  const navItems = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/departments', label: t.nav.departments },
    { href: '/activities', label: t.nav.activities },
    { href: '/gallery', label: t.nav.gallery },
    { href: '/news', label: t.nav.news },
    { href: '/contact', label: t.nav.contact },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`/?lang=${locale}`} className="flex items-center gap-3 font-bold text-xl text-primary">
            <div className="relative w-16 h-16">
              <Image
                src="/LOGO.jpg"
                alt="Al-Madarij Schools Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <span className="hidden sm:inline text-xl">
              {isRTL ? 'مدارس المدارج' : 'Al-Madarij Schools'}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={`${item.href}?lang=${locale}`}
                className="text-gray-700 hover:text-primary font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language Switch & Mobile Menu */}
          <div className="flex items-center gap-4">
            <LanguageSwitch currentLocale={locale} />
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={`${item.href}?lang=${locale}`}
                  className="text-gray-700 hover:text-primary font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}