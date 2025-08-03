'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Target, Eye, Trophy, Users, Heart, Award, BookOpen } from 'lucide-react'
import { getTranslation, Locale } from '@/lib/i18n'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

export default function AboutContent() {
  const searchParams = useSearchParams()
  const locale = (searchParams.get('lang') || 'ar') as Locale
  const t = getTranslation(locale)
  const isRTL = locale === 'ar'

  const values = [
    {
      icon: Trophy,
      title: t.home.about.values.excellence,
      description: isRTL 
        ? 'يتعلم الطالب في كل وحدة دراسية سورة قرآنية وحديث نبوي لتعزيز الأخلاق والقيم الإسلامية'
        : 'Students learn a Quranic chapter and Hadith in each unit to enhance Islamic morals and values',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: BookOpen,
      title: t.home.about.values.innovation,
      description: isRTL 
        ? 'تُدرَّس من قِبل معلمة متمكنة باستخدام طرق تفاعلية تؤهل الطالب لإتقان اللغة الإنجليزية'
        : 'Taught by qualified teachers using interactive methods to help students master English',
      color: 'from-primary-400 to-primary-500'
    },
    {
      icon: Heart,
      title: t.home.about.values.respect,
      description: isRTL 
        ? 'نضمن تخرج الطفل من التمهيدي وهو قادر على القراءة بطلاقة وسرعة مناسبة'
        : 'We ensure children graduate from kindergarten able to read fluently and at appropriate speed',
      color: 'from-primary-300 to-primary-400'
    },
    {
      icon: Users,
      title: t.home.about.values.responsibility,
      description: isRTL 
        ? 'تشمل السباحة والكاراتيه، لبناء الثقة وتعزيز الصحة الجسدية والنفسية للطلاب'
        : 'Including swimming and karate, to build confidence and enhance students\' physical and mental health',
      color: 'from-primary-600 to-primary-700'
    }
  ]

  const management = [
    {
      name: isRTL ? 'أ. نورا المدارج' : 'Ms. Nora Al-Madarij',
      title: t.about.management.principal,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300',
      experience: isRTL ? '12 سنة خبرة' : '12 years experience',
      education: isRTL ? 'ماجستير في التربية' : 'Master in Education'
    },
    {
      name: isRTL ? 'أ. فاطمة أحمد' : 'Ms. Fatimah Ahmed',
      title: t.about.management.academic,
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300',
      experience: isRTL ? '10 سنوات خبرة' : '10 years experience',
      education: isRTL ? 'ماجستير في المناهج' : 'Master in Curriculum'
    },
    {
      name: isRTL ? 'أ. سارة خالد' : 'Ms. Sarah Khalid',
      title: t.about.management.activities,
      image: 'https://images.pexels.com/photos/3184337/pexels-photo-3184337.jpeg?auto=compress&cs=tinysrgb&w=300',
      experience: isRTL ? '7 سنوات خبرة' : '7 years experience',
      education: isRTL ? 'بكالوريوس لغة إنجليزية' : 'Bachelor in English Language'
    }
  ]

  return (
    <div className="min-h-screen" dir={isRTL ? 'rtl' : 'ltr'}>
      <Header locale={locale} />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                {t.about.title}
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-primary-600 to-primary-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {isRTL 
                  ? 'مدارس المدارج الخاصة هي منارة تعليمية تُعنى ببناء شخصية متكاملة تجمع بين القيم، والمهارات، والمعرفة، في بيئة تعليمية آمنة ومحفّزة'
                  : 'Al-Madarij Private Schools is an educational beacon that cares about building an integrated personality that combines values, skills, and knowledge in a safe and stimulating educational environment'
                }
              </p>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Goals */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Mission */}
              <Card className="text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-primary-500">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {t.about.mission.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t.about.mission.text}
                  </p>
                </CardContent>
              </Card>

              {/* Vision */}
              <Card className="text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-primary-400">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-400 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {t.about.vision.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t.about.vision.text}
                  </p>
                </CardContent>
              </Card>

              {/* Goals */}
              <Card className="text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-primary-600">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {t.about.goals.title}
                  </h3>
                  <ul className="text-gray-600 space-y-2 text-left">
                    {t.about.goals.list.map((goal, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t.home.about.values.title}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-500 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Management Team */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t.about.management.title}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-400 mx-auto"></div>
              <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
                {isRTL 
                  ? 'فريق إداري متخصص وذو خبرة عالية يقود مسيرة التعليم والتطوير في مدارسنا'
                  : 'A specialized management team with high experience leading the education and development journey in our school'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {management.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <Badge variant="secondary" className="mb-3">
                      {member.title}
                    </Badge>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p className="flex items-center justify-center gap-2">
                        <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                        {member.experience}
                      </p>
                      <p className="flex items-center justify-center gap-2">
                        <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                        {member.education}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </div>
  )
}