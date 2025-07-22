'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Phone, Mail, MapPin, Clock, Send, Loader2, CheckCircle, XCircle } from 'lucide-react'
import { getTranslation, Locale } from '@/lib/i18n'
import { Toaster, toast } from 'sonner'

interface ContactSectionProps {
  locale: Locale
}

export function ContactSection({ locale }: ContactSectionProps) {
  const t = getTranslation(locale)
  const isRTL = locale === 'ar'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        toast.success(isRTL ? 'تم إرسال رسالتك بنجاح!' : 'Your message has been sent successfully!')
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setStatus('error')
        toast.error(isRTL ? 'فشل إرسال الرسالة. حاول مرة أخرى.' : 'Failed to send message. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      toast.error(isRTL ? 'حدث خطأ غير متوقع.' : 'An unexpected error occurred.')
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: t.home.contact.phone,
      value: '99631199 / 90301188',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Mail,
      title: t.home.contact.email,
      value: 'almadarij@gmail.com',
      color: 'from-primary-400 to-primary-500'
    },
    {
      icon: MapPin,
      title: t.home.contact.address,
      value: isRTL ? 'فرع المعبيلة و فرع الخوض' : 'Al Maabilah & Al Khoudh Branches',
      color: 'from-primary-300 to-primary-400'
    },
    {
      icon: Clock,
      title: isRTL ? 'ساعات العمل' : 'Working Hours',
      value: isRTL ? 'الأحد - الخميس: 7:00 ص - 2:00 م' : 'Sun - Thu: 7:00 AM - 2:00 PM',
      color: 'from-primary-600 to-primary-700'
    }
  ]

  return (
    <section className="py-20 bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <Toaster richColors position={isRTL ? 'top-left' : 'top-right'} />
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.home.contact.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-500 mx-auto"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            {isRTL 
              ? 'نحن هنا للإجابة على استفساراتكم ومساعدتكم. لا تترددوا في التواصل معنا'
              : 'We are here to answer your questions and help you. Do not hesitate to contact us'
            }
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {/* Contact Information */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center shadow-lg`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">
                        {info.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <Card className="shadow-xl w-full">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {isRTL ? 'أرسل لنا رسالة' : 'Send us a Message'}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.common.name}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={isRTL ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                      className="h-12"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.common.email}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={isRTL ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                      className="h-12"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.common.phone}
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={isRTL ? 'أدخل رقم هاتفك' : 'Enter your phone number'}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      {isRTL ? 'الموضوع' : 'Subject'}
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={isRTL ? 'موضوع الرسالة' : 'Message subject'}
                      className="h-12"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.common.message}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={isRTL ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                    rows={5}
                    className="resize-none"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5 mr-2" />
                  )}
                  {status === 'loading' ? (isRTL ? 'جاري الإرسال...' : 'Sending...') : t.common.submit}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Map Placeholders */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="p-4 text-center bg-gray-50 border-b">
                <h3 className="font-semibold text-xl text-gray-800">
                  {isRTL ? 'فرع المعبيلة الجنوبية' : 'Mabella Branch'}
                </h3>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.234327576233!2d58.1906843760378!3d23.630985578752253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8dfb1505378275%3A0x50772f901a88b50f!2sAl%20Madarij%20Private%20School!5e0!3m2!1sen!2som!4v1721213458428!5m2!1sen!2som"
                className="w-full h-80 border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Card>
            <Card className="overflow-hidden">
              <div className="p-4 text-center bg-gray-50 border-b">
                <h3 className="font-semibold text-xl text-gray-800">
                  {isRTL ? 'فرع الخوض' : 'Al Khoudh Branch'}
                </h3>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.48007204907!2d58.1906360751113!3d23.62337797875709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8dfb5a2c421b0b%3A0x4453712019484a0d!2sAl-Madarij%20Private%20School!5e0!3m2!1sen!2som!4v1721213554471!5m2!1sen!2som"
                className="w-full h-80 border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}