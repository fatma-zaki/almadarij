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
  // State to track which video is playing
  const [playingIdx, setPlayingIdx] = useState<number | null>(null);

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
            images.map((img, idx) => (
              <Card key={img} className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={`/gallery/${img}`}
                    alt={`gallery-img-${idx}`}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </Card>
            ))
          ) : (
            videos.map((vid, idx) => {
              const isPlaying = playingIdx === idx;
              return (
                <Card key={vid} className="group overflow-hidden hover:shadow-xl transition-all duration-300 flex items-center justify-center bg-black relative">
                  <div className="relative h-64 w-full flex items-center justify-center">
                    {/* علامة فيديو في الزاوية */}
                    <span className="absolute top-3 left-3 z-20 bg-black/70 text-white text-xs px-2 py-1 rounded shadow-lg flex items-center gap-1">
                      <Play className="w-3 h-3 inline-block mr-1" />
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
                            setPlayingIdx(idx);
                          }}
                          aria-label="تشغيل الفيديو"
                          tabIndex={0}
                        >
                          <span className="flex items-center justify-center">
                            <span className="animate-pulse rounded-full bg-black/70 hover:bg-black/90 p-8 shadow-2xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                              <Play className="w-14 h-14 text-white animate-bounce" />
                            </span>
                          </span>
                        </button>
                      </>
                    )}
                    {/* الفيديو */}
                    <video
                      src={`/videos/${vid}`}
                      controls={isPlaying}
                      poster={`/gallery/${images[0]}`}
                      className={`object-cover w-full h-full bg-black transition-all duration-300 ${isPlaying ? 'block' : 'hidden'}`}
                      preload="none"
                      onEnded={() => setPlayingIdx(null)}
                      autoPlay={isPlaying}
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </Card>
              );
            })
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