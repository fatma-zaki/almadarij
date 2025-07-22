'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Trophy, Palette, Microscope, Music, ArrowRight, ArrowLeft, BookOpen } from 'lucide-react'
import { getTranslation, Locale } from '@/lib/i18n'
import Image from 'next/image'

interface ActivitiesSectionProps {
  locale: Locale
}

export function ActivitiesSection({ locale }: ActivitiesSectionProps) {
  const t = getTranslation(locale)
  const isRTL = locale === 'ar'

  const activities = [
    {
      id: 'swimming-karate',
      title: t.home.activities.sports,
      description: isRTL 
        ? 'برامج السباحة والكاراتيه لبناء الثقة بالنفس وتعزيز الصحة الجسدية والنفسية'
        : 'Swimming and karate programs to build self-confidence and enhance physical and mental health',
      icon: Trophy,
      color: 'from-primary-500 to-primary-600',
      image: '/123.png',
      tags: isRTL ? ['سباحة', 'كاراتيه', 'لياقة بدنية'] : ['Swimming', 'Karate', 'Fitness'],
      participants: '150+'
    },
    {
      id: 'quran',
      title: t.home.activities.cultural,
      description: isRTL 
        ? 'تحفيظ القرآن الكريم مع تعلم الأحاديث النبوية لتعزيز القيم الإسلامية والأخلاق'
        : 'Quran memorization with learning Prophetic traditions to enhance Islamic values and morals',
      icon: BookOpen,
      color: 'from-primary-400 to-primary-500',
      image: 'https://images.pexels.com/photos/8471838/pexels-photo-8471838.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: isRTL ? ['قرآن كريم', 'أحاديث', 'قيم إسلامية'] : ['Holy Quran', 'Hadith', 'Islamic Values'],
      participants: '300+'
    },
    {
      id: 'mathematics',
      title: t.home.activities.scientific,
      description: isRTL 
        ? 'تعليم الرياضيات بطرق حديثة وممتعة مع التركيز على الحساب الذهني وتنمية الذكاء المنطقي'
        : 'Teaching mathematics with modern and fun methods focusing on mental arithmetic and logical intelligence development',
      icon: Microscope,
      color: 'from-primary-300 to-primary-400',
      image: 'https://images.pexels.com/photos/8471844/pexels-photo-8471844.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: isRTL ? ['حساب ذهني', 'رياضيات', 'ذكاء منطقي'] : ['Mental Math', 'Mathematics', 'Logic'],
      participants: '250+'
    },
    {
      id: 'english',
      title: t.home.activities.artistic,
      description: isRTL 
        ? 'تعليم اللغة الإنجليزية بمنهج كامبريدج التفاعلي مع معلمات متخصصات ومؤهلات'
        : 'Teaching English with interactive Cambridge curriculum by specialized and qualified teachers',
      icon: Palette,
      color: 'from-primary-600 to-primary-700',
      image: 'https://images.pexels.com/photos/8471822/pexels-photo-8471822.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: isRTL ? ['كامبريدج', 'تفاعلي', 'محادثة'] : ['Cambridge', 'Interactive', 'Conversation'],
      participants: '280+'
    }
  ]

  return (
    <section className="py-20 bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.home.activities.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-400 mx-auto"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            {isRTL 
              ? 'نقدم برامج متخصصة تهدف إلى بناء شخصية متكاملة تجمع بين القيم والمهارات والمعرفة'
              : 'We offer specialized programs aimed at building an integrated personality that combines values, skills, and knowledge'
            }
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {activities.map((activity, index) => (
            <Card key={activity.id} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${activity.color} opacity-70`}></div>
                
                {/* Icon */}
                <div className="absolute top-6 left-6 w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                  <activity.icon className="w-7 h-7 text-gray-700" />
                </div>
                
                {/* Participants Badge */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-sm font-bold text-gray-700">{activity.participants}</span>
                  <span className="text-xs text-gray-600 ml-1">
                    {isRTL ? 'مشارك' : 'participants'}
                  </span>
                </div>

                {/* Tags */}
                <div className="absolute bottom-4 left-6 flex gap-2 flex-wrap">
                  {activity.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-white/90 text-gray-700">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3 text-gray-900">
                  {activity.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {activity.description}
                </p>
                
                <Button className={`w-full bg-gradient-to-r ${activity.color} hover:scale-105 transition-transform`}>
                  {isRTL ? 'اعرف المزيد' : 'Learn More'}
                  {isRTL ? 
                    <ArrowLeft className="mr-2 w-4 h-4" /> : 
                    <ArrowRight className="ml-2 w-4 h-4" />
                  }
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
            {isRTL ? 'شاهد جميع الأنشطة' : 'View All Activities'}
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