'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Baby, Users, BookOpen, GraduationCap, ArrowRight, ArrowLeft } from 'lucide-react'
import { getTranslation, Locale } from '@/lib/i18n'
import Image from 'next/image'

interface DepartmentsSectionProps {
  locale: Locale
}

export function DepartmentsSection({ locale }: DepartmentsSectionProps) {
  const t = getTranslation(locale)
  const isRTL = locale === 'ar'

  const departments = [
    {
      id: 'kindergarten',
      title: t.home.departments.kindergarten,
      description: isRTL 
        ? 'بناء الأسس التعليمية الأولى مع التركيز على القيم الإسلامية والمهارات الأساسية'
        : 'Building the first educational foundations with focus on Islamic values and basic skills',
      icon: Baby,
      color: 'from-primary-400 to-primary-500',
      image: 'https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg?auto=compress&cs=tinysrgb&w=600',
      ages: isRTL ? '3-5 سنوات' : '3-5 years'
    },
    {
      id: 'elementary',
      title: t.home.departments.elementary,
      description: isRTL 
        ? 'تطوير مهارات القراءة والكتابة والرياضيات مع تحفيظ القرآن واللغة الإنجليزية'
        : 'Developing reading, writing, and math skills with Quran memorization and English language',
      icon: Users,
      color: 'from-primary-500 to-primary-600',
      image: 'https://images.pexels.com/photos/8364022/pexels-photo-8364022.jpeg?auto=compress&cs=tinysrgb&w=600',
      ages: isRTL ? '6-11 سنة' : '6-11 years'
    },
    {
      id: 'preparatory',
      title: t.home.departments.middle,
      description: isRTL 
        ? 'إعداد الطفل للمرحلة الابتدائية مع ضمان إتقان القراءة والكتابة'
        : 'Preparing children for elementary school while ensuring reading and writing mastery',
      icon: BookOpen,
      color: 'from-primary-300 to-primary-400',
      image: 'https://images.pexels.com/photos/8471691/pexels-photo-8471691.jpeg?auto=compress&cs=tinysrgb&w=600',
      ages: isRTL ? '5-6 سنوات' : '5-6 years'
    },
    {
      id: 'enrichment',
      title: t.home.departments.high,
      description: isRTL 
        ? 'برامج إضافية تشمل السباحة والكاراتيه والحساب الذهني لتنمية شاملة'
        : 'Additional programs including swimming, karate, and mental arithmetic for comprehensive development',
      icon: GraduationCap,
      color: 'from-primary-600 to-primary-700',
      image: 'https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=600',
      ages: isRTL ? 'جميع الأعمار' : 'All Ages'
    }
  ]

  return (
    <section className="py-20 bg-gray-50" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.home.departments.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-500 mx-auto"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            {isRTL 
              ? 'نقدم برامج تعليمية شاملة تجمع بين التعليم الأكاديمي والقيم الإسلامية والأنشطة الإثرائية'
              : 'We offer comprehensive educational programs that combine academic education, Islamic values, and enriching activities'
            }
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {departments.map((dept, index) => (
            <Card key={dept.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={dept.image}
                  alt={dept.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${dept.color} opacity-80`}></div>
                
                {/* Icon */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center">
                  <dept.icon className="w-6 h-6 text-gray-700" />
                </div>
                
                {/* Age Badge */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-sm font-medium text-gray-700">{dept.ages}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3 text-gray-900">
                  {dept.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {dept.description}
                </p>
                
                <Button variant="outline" className="w-full group">
                  {t.common.viewDetails}
                  {isRTL ? 
                    <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> : 
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  }
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}