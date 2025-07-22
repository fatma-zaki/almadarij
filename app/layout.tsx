import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'مدارس المدارج الخاصة | Al-Madarij Private Schools',
  description: 'مدارس المدارج الخاصة تُعنى ببناء شخصية متكاملة تجمع بين القيم، والمهارات، والمعرفة، في بيئة تعليمية آمنة ومحفّزة | Al-Madarij Private Schools cares about building an integrated personality that combines values, skills, and knowledge',
  keywords: 'مدارس المدارج، تعليم، الرياض، رياض أطفال، ابتدائي، تحفيظ قرآن، كامبريدج، سباحة، كاراتيه, Al-Madarij, education, Riyadh, kindergarten, elementary, Quran, Cambridge, swimming, karate',
  authors: [{ name: 'Al-Madarij Private Schools' }],
  openGraph: {
    title: 'مدارس المدارج الخاصة | Al-Madarij Private Schools',
    description: 'مدارس المدارج الخاصة تُعنى ببناء شخصية متكاملة تجمع بين القيم، والمهارات، والمعرفة',
    type: 'website',
    locale: 'ar_SA',
    alternateLocale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مدارس المدارج الخاصة',
    description: 'مدارس المدارج الخاصة تُعنى ببناء شخصية متكاملة تجمع بين القيم، والمهارات، والمعرفة',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}