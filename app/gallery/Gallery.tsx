'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { getTranslation, Locale, defaultLocale } from '@/lib/i18n'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function GalleryPage() {
  const searchParams = useSearchParams()
  const initialLang = (searchParams.get('lang') || defaultLocale) as Locale
  const [locale, setLocale] = useState<Locale>(initialLang)
  // modal: { type: 'image' | 'video', src: string } | null
  const [modal, setModal] = useState<null | { type: 'image' | 'video', src: string }>(null);

  useEffect(() => {
    const newLocale = (searchParams.get('lang') || defaultLocale) as Locale
    setLocale(newLocale)
  }, [searchParams])

  const t = getTranslation(locale)
  const isRTL = locale === 'ar'

  const images = [
    "صورة واتساب بتاريخ 2025-07-23 في 11.59.12_315e23ea.jpg",
    "صورة واتساب بتاريخ 2025-07-23 في 11.59.12_b4860b03.jpg",
    "صورة واتساب بتاريخ 2025-07-23 في 11.59.12_b9af7e2d.jpg",
    "صورة واتساب بتاريخ 2025-07-23 في 11.59.12_cbd52088.jpg",
    "صورة واتساب بتاريخ 2025-07-23 في 11.59.13_3954cc75.jpg",
    "صورة واتساب بتاريخ 2025-07-23 في 11.59.13_d1a34245.jpg",
    "صورة واتساب بتاريخ 2025-07-23 في 11.59.14_0b752679.jpg",
    "صورة واتساب بتاريخ 2025-07-23 في 11.59.14_1b1e9c1a.jpg",
    "صورة واتساب بتاريخ 2025-07-23 في 11.59.14_74a4a13f.jpg",
    "صورة واتساب بتاريخ 2025-07-23 في 11.59.14_7dc0f63e.jpg",
    "صورة واتساب بتاريخ 2025-07-23 في 11.59.15_66c4630f.jpg",
    "صورة واتساب بتاريخ 2025-07-23 في 11.59.15_8015d9b3.jpg",
    "صورة واتساب بتاريخ 2025-07-23 في 11.59.15_950cf321.jpg",
    "صورة واتساب بتاريخ 2025-07-23 في 11.59.17_1b39d19e.jpg",
    "صورة واتساب بتاريخ 2025-07-23 في 11.59.17_350378c4.jpg",
    "صورة واتساب بتاريخ 2025-07-23 في 11.59.17_c27758ce.jpg",
    "صورة واتساب بتاريخ 2025-07-23 في 11.59.18_17f6947e.jpg",
    "صورة واتساب بتاريخ 2025-07-23 في 11.59.18_741f5d89.jpg",
    "صورة واتساب بتاريخ 2025-07-23 في 11.59.18_c5d4ed15.jpg",
    "صورة واتساب بتاريخ 2025-07-23 في 11.59.18_d230e367.jpg",
    "صورة واتساب بتاريخ 2025-07-23 في 11.59.19_0e63bf9a.jpg",
    "صورة واتساب بتاريخ 2025-07-23 في 11.59.19_a9b62a02.jpg",
    "صورة واتساب بتاريخ 2025-07-23 في 11.59.19_c49de002.jpg",
    "writing.jpg",
    "writing2.jpg",
  ];

  const videos = [
    "1.mp4",
    "20.mp4",
    "23.mp4",
    "30.mp4",
    "31.mp4",
    "32.mp4",
    "34.mp4",
    "37.mp4",
    "38.mp4",
    "8.mp4",
    "فيديو واتساب بتاريخ 2025-07-23 في 11.59.14_18b39bf3.mp4",
    "فيديو واتساب بتاريخ 2025-07-23 في 11.59.15_3cec741c.mp4",
    "فيديو واتساب بتاريخ 2025-07-23 في 11.59.16_64c4bf82.mp4",
    "فيديو واتساب بتاريخ 2025-07-23 في 11.59.17_8bebbe32.mp4",
  ];

  const handleImageClick = (src: string) => setModal({ type: 'image', src });
  const handleVideoClick = (src: string) => {
    console.log('تم الضغط على الفيديو', src);
    setModal({ type: 'video', src });
  };
  const closeModal = () => setModal(null);

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      <Header locale={locale} />

      <main className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50 min-h-[70vh]">
        <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-32 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">
            {t.nav.gallery}
          </h1>
          <div className="mb-6 text-left">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">{isRTL ? 'الصور' : 'Images'}</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
            {images.map((img, idx) => (
              <div
                key={img}
                className="rounded-xl overflow-hidden shadow-md bg-white group transition-transform duration-200 hover:scale-105 hover:shadow-xl border border-gray-100 cursor-pointer"
                onClick={() => handleImageClick(`/gallery/${img}`)}
              >
                <div className="aspect-w-16 aspect-h-10 w-full">
                  <img
                    src={`/gallery/${img}`}
                    alt={`gallery-img-${idx}`}
                    className="w-full h-40 object-cover transition-transform duration-200 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Modal for both image and video preview */}
          {modal && (
            <div
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm"
              onClick={closeModal}
            >
              <div
                className="relative max-w-3xl w-full mx-4"
                onClick={e => e.stopPropagation()}
              >
                <button
                  className="absolute top-2 left-2 md:left-auto md:right-2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-80 z-10"
                  onClick={closeModal}
                  aria-label="Close preview"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                {modal.type === 'image' ? (
                  <img
                    src={modal.src}
                    alt="preview"
                    className="w-full max-h-[80vh] object-contain rounded-xl shadow-lg border border-white"
                  />
                ) : (
                  <video
                    src={modal.src}
                    controls
                    autoPlay
                    className="w-full max-h-[80vh] object-contain rounded-xl shadow-lg border border-white bg-black"
                    onClick={e => e.stopPropagation()}
                  >
                    <source src={modal.src} />
                    <div className="text-white text-center p-4">تعذر تحميل الفيديو</div>
                  </video>
                )}
              </div>
            </div>
          )}
          <div className="mb-6 text-left">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">{isRTL ? 'الفيديوهات' : 'Videos'}</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
            {videos.map((vid, idx) => {
              const isPlaying = !!(modal && modal.type === 'video' && modal.src === `/videos/${vid}`);
              return (
                <div
                  key={vid}
                  className="rounded-xl overflow-hidden shadow-md bg-black group transition-transform duration-200 hover:scale-105 hover:shadow-xl border border-gray-100 flex items-center justify-center relative"
                  style={{ minHeight: '10rem' }}
                >
                  {/* علامة فيديو في الزاوية */}
                  <span className="absolute top-3 left-3 z-20 bg-black/70 text-white text-xs px-2 py-1 rounded shadow-lg flex items-center gap-1">
                    <svg className="w-3 h-3 inline-block mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v18l15-9L5 3z" /></svg>
                    فيديو
                  </span>
                  {/* صورة الغلاف وزر التشغيل */}
                  {!isPlaying && (
                    <>
                      <img
                        src={`/gallery/${images[0]}`}
                        alt="video-poster"
                        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
                        draggable={false}
                      />
                      <button
                        className="absolute inset-0 flex items-center justify-center w-full h-full z-10 focus:outline-none"
                        onClick={e => {
                          e.stopPropagation();
                          handleVideoClick(`/videos/${vid}`);
                        }}
                        aria-label="تشغيل الفيديو"
                        tabIndex={0}
                      >
                        <span className="flex items-center justify-center">
                          <span className="animate-pulse rounded-full bg-black/70 hover:bg-black/90 p-8 shadow-2xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                            <svg className="w-14 h-14 text-white animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v18l15-9L5 3z" /></svg>
                          </span>
                        </span>
                      </button>
                    </>
                  )}
                  {/* الفيديو */}
                  <video
                    id={`gallery-video-${idx}`}
                    src={`/videos/${vid}`}
                    controls={isPlaying}
                    poster={`/gallery/${images[0]}`}
                    className={`w-full h-40 object-cover transition-transform duration-200 group-hover:scale-110 bg-black ${isPlaying ? 'block' : 'hidden'}`}
                    preload="none"
                    autoPlay={isPlaying}
                    onClick={e => e.stopPropagation()}
                    onEnded={closeModal}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer locale={locale} />
    </div>
  )
}
