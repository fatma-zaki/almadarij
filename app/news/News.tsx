'use client'

import { getTranslation, Locale } from '@/lib/i18n'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { Calendar, Tag, ArrowRight, ArrowLeft } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const NewsPage = () => {
  const searchParams = useSearchParams()
  const locale = (searchParams.get('lang') || 'ar') as Locale
  const t = getTranslation(locale)
  const isRTL = locale === 'ar'

  const newsItems = [
    {
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: t.news.categories.events,
      date: isRTL ? '١٥ يوليو ٢٠٢٤' : 'July 15, 2024',
      title: t.news.item1.title,
      description: t.news.item1.description,
    },
    {
      image: 'https://images.pexels.com/photos/8471797/pexels-photo-8471797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: t.news.categories.achievements,
      date: isRTL ? '١٠ يوليو ٢٠٢٤' : 'July 10, 2024',
      title: t.news.item2.title,
      description: t.news.item2.description,
    },
    {
      image: 'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: t.news.categories.announcements,
      date: isRTL ? '٥ يوليو ٢٠٢٤' : 'July 5, 2024',
      title: t.news.item3.title,
      description: t.news.item3.description,
    },
     {
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: t.news.categories.events,
      date: isRTL ? '١٥ يوليو ٢٠٢٤' : 'July 15, 2024',
      title: t.news.item1.title,
      description: t.news.item1.description,
    },
    {
      image: 'https://images.pexels.com/photos/8471797/pexels-photo-8471797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: t.news.categories.achievements,
      date: isRTL ? '١٠ يوليو ٢٠٢٤' : 'July 10, 2024',
      title: t.news.item2.title,
      description: t.news.item2.description,
    },
    {
      image: 'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: t.news.categories.announcements,
      date: isRTL ? '٥ يوليو ٢٠٢٤' : 'July 5, 2024',
      title: t.news.item3.title,
      description: t.news.item3.description,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gray-50" dir={isRTL ? 'rtl' : 'ltr'}>
      <Header locale={locale} />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.nav.news}
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
              {isRTL
                ? 'تابع آخر أخبار وفعاليات مدارس المدارج لتبقى على اطلاع دائم'
                : 'Follow the latest news and events of Al-Madarij Schools to stay informed'}
            </p>
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-xl flex flex-col">
                <div className="relative h-56 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-primary" />
                      <Badge variant="secondary">{item.category}</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex-grow">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-auto">
                    <Button asChild variant="default" className="w-full">
                      <Link href="#">
                        {isRTL ? 'اقرأ المزيد' : 'Read More'}
                        {isRTL ? <ArrowLeft className="ms-2 w-4 h-4" /> : <ArrowRight className="me-2 w-4 h-4" />}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer locale={locale} />
    </div>
  )
}

export default NewsPage
