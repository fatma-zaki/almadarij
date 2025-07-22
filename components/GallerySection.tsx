'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Play, Image as ImageIcon, ArrowRight, ArrowLeft, Eye } from 'lucide-react'
import { getTranslation, Locale } from '@/lib/i18n'
import Image from 'next/image'

interface GallerySectionProps {
  locale: Locale
}

export function GallerySection({ locale }: GallerySectionProps) {
  const t = getTranslation(locale)
  const isRTL = locale === 'ar'
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos')

  const photos = [
    {
      id: 1,
      src: '/123.png',
      title: isRTL ? 'الأنشطة التعليمية' : 'Educational Activities',
      category: isRTL ? 'تعليم' : 'Education'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: isRTL ? 'رياض الأطفال' : 'Kindergarten',
      category: isRTL ? 'رياض أطفال' : 'Kindergarten'
    },
    {
      id: 3,
      src: '/sport.png',
      title: isRTL ? 'الأنشطة الرياضية' : 'Sports Activities',
      category: isRTL ? 'رياضة' : 'Sports'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/8471838/pexels-photo-8471838.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: isRTL ? 'الأنشطة الفنية' : 'Art Activities',
      category: isRTL ? 'فنون' : 'Arts'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/8471844/pexels-photo-8471844.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: isRTL ? 'المختبر العلمي' : 'Science Lab',
      category: isRTL ? 'علوم' : 'Science'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/8471822/pexels-photo-8471822.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: isRTL ? 'الأنشطة الثقافية' : 'Cultural Activities',
      category: isRTL ? 'ثقافة' : 'Culture'
    }
  ]

  const videos = [
    {
      id: 1,
      thumbnail: 'https://images.pexels.com/photos/8364022/pexels-photo-8364022.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: isRTL ? 'يوم في مدرستنا' : 'A Day at Our School',
      duration: '3:45',
      category: isRTL ? 'عام' : 'General'
    },
    {
      id: 2,
      thumbnail: 'https://images.pexels.com/photos/8471691/pexels-photo-8471691.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: isRTL ? 'حفل التخرج 2024' : 'Graduation Ceremony 2024',
      duration: '8:12',
      category: isRTL ? 'احتفالات' : 'Celebrations'
    },
    {
      id: 3,
      thumbnail: 'https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: isRTL ? 'المعرض العلمي' : 'Science Fair',
      duration: '5:23',
      category: isRTL ? 'علوم' : 'Science'
    },
    {
      id: 4,
      thumbnail: 'https://images.pexels.com/photos/8364030/pexels-photo-8364030.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: isRTL ? 'البطولة الرياضية' : 'Sports Championship',
      duration: '6:30',
      category: isRTL ? 'رياضة' : 'Sports'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.home.gallery.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            {isRTL 
              ? 'استكشف لحظاتنا المميزة وذكرياتنا الجميلة من خلال مجموعة متنوعة من الصور والفيديوهات'
              : 'Explore our special moments and beautiful memories through a diverse collection of photos and videos'
            }
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl p-2 shadow-lg">
            <Button
              variant={activeTab === 'photos' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('photos')}
              className="px-6 py-3 rounded-lg"
            >
              <ImageIcon className="w-5 h-5 mr-2" />
              {isRTL ? 'الصور' : 'Photos'}
            </Button>
            <Button
              variant={activeTab === 'videos' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('videos')}
              className="px-6 py-3 rounded-lg"
            >
              <Play className="w-5 h-5 mr-2" />
              {isRTL ? 'الفيديوهات' : 'Videos'}
            </Button>
          </div>
        </div>

        {/* Gallery Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {activeTab === 'photos' ? (
            photos.map((photo) => (
              <Card key={photo.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <Badge className="absolute top-4 left-4 bg-white/90 text-gray-700">
                    {photo.category}
                  </Badge>
                  
                  {/* View Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Eye className="w-8 h-8 text-gray-700" />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-semibold text-lg">{photo.title}</h3>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            videos.map((video) => (
              <Card key={video.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-gray-700 ml-1" />
                    </div>
                  </div>
                  
                  {/* Duration & Category */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-white/90 text-gray-700">
                      {video.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-black/60 text-white">
                      {video.duration}
                    </Badge>
                  </div>
                  
                  {/* Title */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg">{video.title}</h3>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg"  variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
            {t.home.gallery.viewAll}
            {isRTL ? 
              <ArrowLeft className="mr-2 w-5 h-5" /> : 
              <ArrowRight className="ml-2 w-5 h-5" />
            }
          </Button>
        </div>
      </div>
    </section>
  )
}