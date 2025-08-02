'use client'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { ArrowRight, ArrowLeft, Play } from 'lucide-react'
import { getTranslation, Locale } from '@/lib/i18n'
import Image from 'next/image'
import { useState } from 'react'

interface HeroSectionProps {
  locale: Locale
}

export function HeroSection({ locale }: HeroSectionProps) {
  const t = getTranslation(locale)
  const isRTL = locale === 'ar'
  const [open, setOpen] = useState(false);

  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-20 left-1/2 w-80 h-80 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`${isRTL ? 'lg:order-2' : 'lg:order-1'} space-y-8`}>
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-primary-800">
                  {t.home.hero.title}
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                {t.home.hero.subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-lg px-8 py-6"
                onClick={() => {
                  const el = document.getElementById('activities');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {t.home.hero.cta}
                {isRTL ? <ArrowLeft className="ml-2 w-5 h-5" /> : <ArrowRight className="mr-2 w-5 h-5" />}
              </Button>
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6 group" onClick={() => setOpen(true)}>
                    <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    {isRTL ? 'شاهد الفيديو' : 'Watch Video'}
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-7xl w-full p-0 bg-transparent border-0 shadow-none flex items-center justify-center">
                  <div className="w-full flex items-center justify-center">
                    <video
                      src="/main-video.mp4"
                      controls
                      autoPlay
                      className="w-full h-[80vh] rounded-xl shadow-2xl border border-white bg-black"
                    >
                      <source src="/main-video.mp4" />
                      <div className="text-white text-center p-4">تعذر تحميل الفيديو</div>
                    </video>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">300+</div>
                <div className="text-sm text-gray-600">{isRTL ? 'طالب' : 'Students'}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">25+</div>
                <div className="text-sm text-gray-600">{isRTL ? 'معلم' : 'Teachers'}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">10+</div>
                <div className="text-sm text-gray-600">{isRTL ? 'سنوات خبرة' : 'Years Experience'}</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className={`${isRTL ? 'lg:order-1' : 'lg:order-2'} relative`}>
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-green-400/20"></div>
              <Image
                src="/hero.jpg"
                alt="School Hero Image"
                fill
                className="object-cover"
                priority
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-bounce">
                <span className="text-2xl">📖</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-primary-400 to-primary-500 rounded-xl shadow-lg flex items-center justify-center animate-pulse">
                <span className="text-xl text-white">🕌</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}