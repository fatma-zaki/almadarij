import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Baby,
  Users,
  BookOpen,
  GraduationCap,
  Sparkles,
  ArrowLeft,
  ArrowRight
} from 'lucide-react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface DepartmentsSectionProps {
  locale: string
}

export function DepartmentsSection({ locale }: DepartmentsSectionProps) {
  const isRTL = locale === 'ar'

  const sectionTitle = isRTL ? 'الأقسام الدراسية' : 'Departments'
  const viewDetailsText = isRTL ? 'عرض التفاصيل' : 'View Details'
  const backText = isRTL ? 'رجوع' : 'Back'
  const sectionIntro = isRTL
    ? 'مراحل تعليمية متكاملة تبدأ من الروضة حتى الصف الثاني، مع أنشطة إثرائية متنوعة.'
    : 'Comprehensive education from KG1 to Grade 2, with diverse enrichment activities.'

  const departments = [
    {
      id: 'kg1',
      title: isRTL ? 'الروضة (KG1)' : 'Kindergarten (KG1)',
      shortDesc: isRTL
        ? 'تعليم الحروف، المهارات الاجتماعية، وبداية الإنجليزية، مع حفظ سور من جزء عم.'
        : 'Learning letters, social skills, starting English, and memorizing Surahs from Juz Amma.',
      details: {
        subjects: isRTL
          ? ['اللغة العربية', 'الرياضيات', 'القرآن الكريم', 'اللغة الإنجليزية']
          : ['Arabic Language', 'Mathematics', 'Holy Quran', 'English Language'],
        curricula: isRTL
          ? ['المنهج العماني المطور', 'منهج كامبردج لرياض الأطفال']
          : ['Omani Developed Curriculum', 'Cambridge Early Years Curriculum'],
        activities: isRTL
          ? ['ساحة اللعب اليومية (40 دقيقة)', 'قاعة الأركان التعليمية', 'أنشطة فنية وحركية']
          : ['Daily play area (40 minutes)', 'Educational corners hall', 'Creative and motor activities'],
        environment: isRTL
          ? [
              'بيئة آمنة ومحفزة تعزز حب التعلم والاستكشاف',
              'إشراف كادر تربوي متخصص في الطفولة المبكرة',
              'التعلم من خلال اللعب والأنشطة التفاعلية'
            ]
          : [
              'Safe and engaging environment that nurtures curiosity',
              'Guided by early childhood specialists',
              'Learning through play and interactive activities'
            ],
        outcomes: isRTL
          ? [
              'يتعلم الحروف',
              'يطور مهاراته الاجتماعية',
              'يبدأ تعلم الإنجليزية',
              'يحفظ سورًا من جزء عم',
              'يكتسب الآداب والقيم الإسلامية'
            ]
          : [
              'Learns Arabic letters',
              'Develops social skills',
              'Starts learning English',
              'Memorizes Surahs from Juz Amma',
              'Gains Islamic manners and values'
            ]
      },
      icon: Baby,
      color: 'from-primary-400 to-primary-500',
      image: '/gallery/writing2.jpg',
      ages: isRTL ? 'من 3 سنوات و شهرين' : 'From 3 years & 2 months'
    },
    {
      id: 'kg2',
      title: isRTL ? 'التمهيدي (KG2)' : 'Preparatory (KG2)',
      shortDesc: isRTL
        ? 'إتقان القراءة بالتشكيل، تطوير الإنجليزية، مسائل حسابية بسيطة، وحفظ سور من جزء عم.'
        : 'Reads with tashkeel, develops English, solves basic math problems, and memorizes Surahs from Juz Amma.',
      details: {
        subjects: isRTL
          ? ['اللغة العربية', 'الرياضيات', 'القرآن الكريم', 'اللغة الإنجليزية']
          : ['Arabic Language', 'Mathematics', 'Holy Quran', 'English Language'],
        curricula: isRTL
          ? ['المنهج العماني المطور', 'منهج كامبردج لرياض الأطفال']
          : ['Omani Developed Curriculum', 'Cambridge Early Years Curriculum'],
        activities: isRTL
          ? ['ساحة اللعب اليومية (40 دقيقة)', 'قاعة الأركان التعليمية', 'أنشطة فنية وتنموية']
          : ['Daily play area (40 minutes)', 'Educational corners hall', 'Art and skill-building activities'],
        environment: isRTL
          ? [
              'بيئة تعليمية محفزة وآمنة',
              'تعلم من خلال التفاعل والتجربة',
              'إشراف تربوي متخصص'
            ]
          : [
              'Positive and safe learning environment',
              'Learning through interaction and experience',
              'Guided by specialized educators'
            ],
        outcomes: isRTL
          ? [
              'يقرأ بالتشكيل',
              'يطور مهاراته الاجتماعية',
              'يقرأ ويكتب بالإنجليزية',
              'ينجز مسائل حسابية بسيطة',
              'يحفظ سورًا من جزء عم',
              'يكتسب الآداب الإسلامية'
            ]
          : [
              'Reads with tashkeel',
              'Develops social interaction',
              'Reads and writes in English',
              'Solves basic math problems',
              'Memorizes Surahs from Juz Amma',
              'Gains Islamic etiquette'
            ]
      },
      icon: BookOpen,
      color: 'from-primary-300 to-primary-400',
      image: '/gallery/writing.jpg',
      ages: isRTL ? 'من 4 سنوات و شهرين' : 'From 4 years & 2 months'
    },
    {
      id: 'grade1',
      title: isRTL ? 'الصف الأول' : 'Grade 1',
      shortDesc: isRTL
        ? 'دراسة العلوم، الرياضيات، التقنية، العربية، التربية الإسلامية، والدراسات الاجتماعية.'
        : 'Studies science, math, ICT, Arabic, Islamic Education, and Social Studies.',
      details: {
        curricula: isRTL
          ? ['منهج كامبردج: العلوم، الرياضيات، التقنية', 'المنهج العماني: العربية، التربية الإسلامية، الدراسات الاجتماعية']
          : ['Cambridge Curriculum: Science, Mathematics, ICT', 'Omani Curriculum: Arabic, Islamic Education, Social Studies'],
        environment: isRTL
          ? ['بيئة تعلم مشجعة على التفكير', 'أنشطة عملية لتعزيز المفاهيم', 'تقييم مستمر لقياس التقدم']
          : ['Encouraging environment for critical thinking', 'Hands-on activities to reinforce concepts', 'Continuous assessment to track progress']
      },
      icon: Users,
      color: 'from-primary-500 to-primary-600',
      image: '/kg.png',
      ages: isRTL ? 'من 5 سنوات و شهرين' : 'From 5 years & 2 months'
    },
    {
      id: 'grade2',
      title: isRTL ? 'الصف الثاني' : 'Grade 2',
      shortDesc: isRTL
        ? 'تعزيز التفكير التحليلي والمنطقي باستخدام وسائل تعليمية متنوعة وشراكة مع أولياء الأمور.'
        : 'Enhances analytical and logical thinking using diverse educational tools and parent partnership.',
      details: {
        curricula: isRTL
          ? ['منهج كامبردج: العلوم، الرياضيات، التقنية', 'المنهج العماني: العربية، التربية الإسلامية، الدراسات الاجتماعية']
          : ['Cambridge Curriculum: Science, Mathematics, ICT', 'Omani Curriculum: Arabic, Islamic Education, Social Studies'],
        environment: isRTL
          ? ['تحفيز مهارات التحليل والتفكير', 'استخدام وسائل تعليمية متنوعة', 'تعزيز الشراكة مع أولياء الأمور']
          : ['Promotes analysis and reasoning skills', 'Uses diverse educational tools', 'Strengthens parent-school partnership']
      },
      icon: GraduationCap,
      color: 'from-primary-600 to-primary-700',
      image: '/elem.jpg',
      ages: isRTL ? 'من 6 سنوات و شهرين' : 'From 6 years & 2 months'
    },
    {
      id: 'enrichment',
      title: isRTL ? 'الأنشطة الإثرائية' : 'Enrichment Activities',
      shortDesc: isRTL
        ? 'برامج إضافية تشمل الكاراتيه، الحساب الذهني، السباحة، والصناعات الورقية لتنمية شاملة.'
        : 'Additional programs including karate, mental math, swimming, and paper crafts for overall development.',
      details: {
        activities: isRTL
          ? ['🥋 الكاراتيه - الانضباط والتركيز', '🧠 الحساب الذهني - تنشيط الذهن', '🏊‍♂️ السباحة - اللياقة والأمان', '✂️ الصناعات الورقية - الإبداع والدقة']
          : ['🥋 Karate - Discipline and focus', '🧠 Mental Math - Brain activation', '🏊‍♂️ Swimming - Fitness and safety', '✂️ Paper Crafts - Creativity and precision']
      },
      icon: Sparkles,
      color: 'from-pink-400 to-pink-500',
      image: '/swimming.jpg',
      ages: isRTL ? 'جميع الأعمار' : 'All Ages'
    }
  ]

  const [flippedCards, setFlippedCards] = useState<{ [key: string]: boolean }>({})

  return (
    <section className="py-20 bg-gray-50" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{sectionTitle}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-500 mx-auto"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">{sectionIntro}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {departments.map((dept) => {
            const isFlipped = flippedCards[dept.id] || false
            return (
              <div key={dept.id} className="perspective h-[480px] relative">
                <motion.div
                  className="relative w-full h-full preserve-3d"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.8 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front */}
                  <div className="absolute w-full h-full backface-hidden">
                    <Card className="h-full overflow-hidden">
                      <div className="relative h-48 overflow-hidden bg-gray-200">
                        {dept.image && (
                          <Image src={dept.image} alt={dept.title} fill className="object-cover" />
                        )}
                        <div className={`absolute inset-0 bg-gradient-to-t ${dept.color} opacity-80`}></div>
                        <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center">
                          <dept.icon className="w-6 h-6 text-gray-700" />
                        </div>
                        <div className="absolute bottom-4 right-4 bg-white/90 rounded-lg px-3 py-1">
                          <span className="text-sm font-medium text-gray-700">{dept.ages}</span>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-bold text-xl mb-3">{dept.title}</h3>
                        <p className="text-gray-600 mb-6">{dept.shortDesc}</p>
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={() => setFlippedCards((prev) => ({ ...prev, [dept.id]: true }))}
                        >
                          {viewDetailsText}
                          {isRTL ? <ArrowLeft className="mr-2 w-4 h-4" /> : <ArrowRight className="ml-2 w-4 h-4" />}
                        </Button>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Back */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180">
                    <Card className="h-full p-6 overflow-y-auto">
                      <h3 className="font-bold text-xl mb-4">{dept.title}</h3>

                      {dept.details.subjects && (
                        <>
                          <h4 className="font-semibold mb-2">{isRTL ? 'المواد' : 'Subjects'}:</h4>
                          <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
                            {dept.details.subjects.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </>
                      )}

                      {dept.details.curricula && (
                        <>
                          <h4 className="font-semibold mb-2">{isRTL ? 'المناهج' : 'Curricula'}:</h4>
                          <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
                            {dept.details.curricula.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </>
                      )}

                      {dept.details.activities && (
                        <>
                          <h4 className="font-semibold mb-2">{isRTL ? 'الأنشطة' : 'Activities'}:</h4>
                          <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
                            {dept.details.activities.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </>
                      )}

                      {dept.details.environment && (
                        <>
                          <h4 className="font-semibold mb-2">{isRTL ? 'البيئة التعليمية' : 'Learning Environment'}:</h4>
                          <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
                            {dept.details.environment.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </>
                      )}

                      {dept.details.outcomes && (
                        <>
                          <h4 className="font-semibold mb-2">{isRTL ? 'المخرجات المتوقعة' : 'Expected Outcomes'}:</h4>
                          <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
                            {dept.details.outcomes.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </>
                      )}

                      <Button
                        variant="outline"
                        className="w-full mt-4"
                        onClick={() => setFlippedCards((prev) => ({ ...prev, [dept.id]: false }))}
                      >
                        {backText}
                      </Button>
                    </Card>
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  )
}
