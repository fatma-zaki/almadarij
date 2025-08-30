export const defaultLocale = 'ar' as const
export const locales = ['ar', 'en'] as const

export type Locale = typeof locales[number]

export const translations = {
  ar: {
    // Navigation
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      departments: 'الأقسام الدراسية',
      activities: 'الأنشطة',
      gallery: 'معرض الوسائط',
      news: 'الأخبار',
      contact: 'تواصل معنا'
    },
    // Home page
    home: {
      hero: {
        title: 'مدارس المدارج الخاصة',
        subtitle: 'نُعنى ببناء شخصية متكاملة تجمع بين القيم، والمهارات، والمعرفة، في بيئة تعليمية آمنة ومحفّزة',
        cta: 'اكتشف المزيد'
      },
      about: {
        title: 'نبذة عن مدرستنا',
        description: 'مدارس المدارج الخاصة تُعنى ببناء شخصية متكاملة تجمع بين القيم، والمهارات، والمعرفة، في بيئة تعليمية آمنة ومحفّزة. نُؤمن بأن الطفل هو محور العملية التعليمية، ونقدم له برنامجًا ثريًا يشمل الجوانب الأكاديمية، الدينية، البدنية، واللغوية.',
        values: {
          title: 'قيمنا',
          excellence: 'تحفيظ القرآن وتعزيز القيم',
          innovation: 'اللغة الإنجليزية بمنهج كامبريدج',
          respect: 'إتقان القراءة من التمهيدي',
          responsibility: 'أنشطة بدنية إثرائية'
        }
      },
      departments: {
        title: 'أقسامنا الدراسية',
        kindergarten: 'رياض الأطفال',
        elementary: 'المرحلة الابتدائية',
        middle: 'التمهيدي',
        high: 'برامج إثرائية'
      },
      activities: {
        title: 'أنشطتنا المدرسية',
        sports: 'السباحة والكاراتيه',
        cultural: 'تحفيظ القرآن الكريم',
        scientific: 'الرياضيات والحساب الذهني',
        artistic: 'اللغة الإنجليزية التفاعلية'
      },
      gallery: {
        title: 'معرض الصور والفيديوهات',
        viewAll: 'عرض الكل'
      },
      contact: {
        title: 'تواصل معنا',
        phone: 'الهاتف',
        email: 'البريد الإلكتروني',
        address: 'العنوان'
      }
    },
    // About page
    about: {
      title: 'من نحن',
      mission: {
        title: 'رسالتنا',
        text: 'مدارس المدارج الخاصة تُعنى ببناء شخصية متكاملة تجمع بين القيم، والمهارات، والمعرفة، في بيئة تعليمية آمنة ومحفّزة'
      },
      vision: {
        title: 'رؤيتنا',
        text: 'نُؤمن بأن الطفل هو محور العملية التعليمية، ونقدم له برنامجًا ثريًا يشمل الجوانب الأكاديمية، الدينية، البدنية، واللغوية'
      },
      goals: {
        title: 'خدماتنا الأساسية',
        list: [
          'تحفيظ القرآن وتعزيز القيم - يتعلم الطالب في كل وحدة دراسية سورة قرآنية وحديث نبوي',
          'اللغة الإنجليزية بمنهج كامبريدج - تُدرَّس بطرق تفاعلية تؤهل الطالب لإتقان اللغة',
          'إتقان القراءة من التمهيدي - نضمن تخرج الطفل وهو قادر على القراءة بطلاقة',
          'أنشطة بدنية إثرائية - تشمل السباحة والكاراتيه لبناء الثقة وتعزيز الصحة',
          'تعليم الرياضيات بطرق حديثة - باستخدام الحساب الذهني وطرق تعليمية متنوعة'
        ]
      },
      management: {
        title: 'فريق الإدارة',
        principal: 'مديرة المدرسة',
        academic: 'مديرة الشؤون الأكاديمية',
        activities: 'منسقة الأنشطة'
      }
    },
    common: {
      readMore: 'اقرأ المزيد',
      viewDetails: 'عرض التفاصيل',
      backToHome: 'العودة للرئيسية',
      loading: 'جاري التحميل...',
      submit: 'إرسال',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      message: 'الرسالة',
      phone: 'رقم الهاتف'
    },
    news: {
      categories: {
        events: 'فعاليات',
        achievements: 'إنجازات',
        announcements: 'إعلانات'
      },
      item1: {
        title: 'يوم مفتوح ممتع في مدارس المدارج',
        description: 'نظمنا يوماً مفتوحاً مليئاً بالأنشطة التعليمية والترفيهية التي شارك فيها الطلاب وأولياء الأمور بحماس كبير.'
      },
      item2: {
        title: 'تكريم الطلاب المتفوقين في مسابقة القرآن',
        description: 'تم تكريم طلابنا المتميزين الذين حققوا مراكز متقدمة في مسابقة تحفيظ القرآن الكريم على مستوى المنطقة.'
      },
      item3: {
        title: 'إعلان بدء التسجيل للعام الدراسي الجديد',
        description: 'يسرنا أن نعلن عن فتح باب التسجيل للعام الدراسي القادم. الأماكن محدودة، سارعوا بتسجيل أبنائكم.'
      }
    }
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About Us',
      departments: 'Departments',
      activities: 'Activities', 
      gallery: 'Gallery',
      news: 'News',
      contact: 'Contact'
    },
    // Home page
    home: {
      hero: {
        title: 'Al-Madarij Private Schools',
        subtitle: 'We care about building an integrated personality that combines values, skills, and knowledge in a safe and stimulating educational environment',
        cta: 'Discover More'
      },
      about: {
        title: 'About Our School',
        description: 'Al-Madarij Private Schools cares about building an integrated personality that combines values, skills, and knowledge in a safe and stimulating educational environment. We believe that the child is the center of the educational process, and we provide a rich program that includes academic, religious, physical, and linguistic aspects.',
        values: {
          title: 'Our Values',
          excellence: 'Quran Memorization & Values',
          innovation: 'Cambridge English Program',
          respect: 'Reading Mastery from Kindergarten',
          responsibility: 'Enriching Physical Activities'
        }
      },
      departments: {
        title: 'Our Departments',
        kindergarten: 'Kindergarten',
        elementary: 'Elementary School',
        middle: 'Preparatory',
        high: 'Enrichment Programs'
      },
      activities: {
        title: 'Our School Activities',
        sports: 'Swimming & Karate',
        cultural: 'Quran Memorization',
        scientific: 'Mathematics & Mental Arithmetic',
        artistic: 'Interactive English'
      },
      gallery: {
        title: 'Photo & Video Gallery',
        viewAll: 'View All'
      },
      contact: {
        title: 'Contact Us',
        phone: 'Phone',
        email: 'Email',
        address: 'Address'
      }
    },
    // About page
    about: {
      title: 'About Us',
      mission: {
        title: 'Our Mission',
        text: 'Al-Madarij Private Schools cares about building an integrated personality that combines values, skills, and knowledge in a safe and stimulating educational environment'
      },
      vision: {
        title: 'Our Vision',
        text: 'We believe that the child is the center of the educational process, and we provide a rich program that includes academic, religious, physical, and linguistic aspects'
      },
      goals: {
        title: 'Our Core Services',
        list: [
          'Quran Memorization & Values Enhancement - Students learn a Quranic chapter and Hadith in each unit',
          'Cambridge English Program - Taught using interactive methods to master the language',
          'Reading Mastery from Kindergarten - We ensure children graduate reading fluently',
          'Enriching Physical Activities - Including swimming and karate for confidence and health',
          'Modern Mathematics Teaching - Using mental arithmetic and diverse educational methods'
        ]
      },
      management: {
        title: 'Management Team',
        principal: 'School Principal',
        academic: 'Academic Affairs Director',
        activities: 'Activities Coordinator'
      }
    },
    common: {
      readMore: 'Read More',
      viewDetails: 'View Details',
      backToHome: 'Back to Home',
      loading: 'Loading...',
      submit: 'Submit',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      phone: 'Phone Number'
    },
    news: {
      categories: {
        events: 'Events',
        achievements: 'Achievements',
        announcements: 'Announcements'
      },
      item1: {
        title: 'Fun Open Day at Al-Madarij Schools',
        description: 'We organized an open day full of educational and recreational activities in which students and parents participated with great enthusiasm.'
      },
      item2: {
        title: 'Honoring Outstanding Students in Quran Competition',
        description: 'Our distinguished students who achieved advanced positions in the regional Quran memorization competition were honored.'
      },
      item3: {
        title: 'New Academic Year Registration Announcement',
        description: 'We are pleased to announce the opening of registration for the next academic year. Seats are limited, so hurry to register your children.'
      }
    }
  }
}

export function getTranslation(locale: Locale) {
  return translations[locale] || translations[defaultLocale]
}