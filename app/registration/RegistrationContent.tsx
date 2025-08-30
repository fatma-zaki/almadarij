'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { getTranslation, Locale, defaultLocale } from '@/lib/i18n'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Toaster, toast } from 'sonner'
import { Loader2, CheckCircle, XCircle, User, Phone, Mail, MapPin, Calendar, GraduationCap, Users } from 'lucide-react'

export default function RegistrationPage() {
  const searchParams = useSearchParams()
  const initialLang = (searchParams.get('lang') || defaultLocale) as Locale
  const [locale, setLocale] = useState<Locale>(initialLang)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  useEffect(() => {
    const newLocale = (searchParams.get('lang') || defaultLocale) as Locale
    setLocale(newLocale)
  }, [searchParams])

  const t = getTranslation(locale)
  const isRTL = locale === 'ar'

  const [formData, setFormData] = useState({
    // Student Information
    studentName: '',
    studentNameEn: '',
    birthDate: '',
    gender: '',
    nationality: '',
    previousSchool: '',
    grade: '',
    
    // Parent Information
    fatherName: '',
    fatherPhone: '',
    fatherEmail: '',
    motherName: '',
    motherPhone: '',
    motherEmail: '',
    
    // Contact Information
    address: '',
    emergencyContact: '',
    emergencyPhone: '',
    
    // Additional Information
    medicalConditions: '',
    specialNeeds: '',
    additionalNotes: '',
    
    // Terms
    agreeToTerms: false,
    agreeToPrivacy: false
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    // Validate required fields
    const requiredFields = ['studentName', 'birthDate', 'gender', 'grade', 'fatherName', 'fatherPhone']
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData])
    
    if (missingFields.length > 0) {
      setStatus('error')
      toast.error(isRTL ? 'يرجى ملء جميع الحقول المطلوبة' : 'Please fill in all required fields')
      return
    }

    if (!formData.agreeToTerms || !formData.agreeToPrivacy) {
      setStatus('error')
      toast.error(isRTL ? 'يرجى الموافقة على الشروط والأحكام' : 'Please agree to terms and conditions')
      return
    }

    try {
      const response = await fetch('/api/registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        toast.success(isRTL ? 'تم إرسال طلب التسجيل بنجاح!' : 'Registration request sent successfully!')
        // Reset form
        setFormData({
          studentName: '',
          studentNameEn: '',
          birthDate: '',
          gender: '',
          nationality: '',
          previousSchool: '',
          grade: '',
          fatherName: '',
          fatherPhone: '',
          fatherEmail: '',
          motherName: '',
          motherPhone: '',
          motherEmail: '',
          address: '',
          emergencyContact: '',
          emergencyPhone: '',
          medicalConditions: '',
          specialNeeds: '',
          additionalNotes: '',
          agreeToTerms: false,
          agreeToPrivacy: false
        })
      } else {
        setStatus('error')
        toast.error(isRTL ? 'فشل إرسال طلب التسجيل. حاول مرة أخرى.' : 'Failed to send registration request. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      toast.error(isRTL ? 'حدث خطأ غير متوقع.' : 'An unexpected error occurred.')
    }
  }

  const grades = [
    { value: 'kg1', label: isRTL ? 'روضة أولى' : 'KG1' },
    { value: 'kg2', label: isRTL ? 'روضة ثانية' : 'KG2' },
    { value: 'kg3', label: isRTL ? 'روضة ثالثة' : 'KG3' },
    { value: 'grade1', label: isRTL ? 'الصف الأول' : 'Grade 1' },
    { value: 'grade2', label: isRTL ? 'الصف الثاني' : 'Grade 2' },
    { value: 'grade3', label: isRTL ? 'الصف الثالث' : 'Grade 3' },
    { value: 'grade4', label: isRTL ? 'الصف الرابع' : 'Grade 4' },
    { value: 'grade5', label: isRTL ? 'الصف الخامس' : 'Grade 5' },
    { value: 'grade6', label: isRTL ? 'الصف السادس' : 'Grade 6' },
  ]

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      <Header locale={locale} />
      <Toaster richColors position={isRTL ? 'top-left' : 'top-right'} />

      <main className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 min-h-[70vh]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              {isRTL ? 'تسجيل الطلاب الجدد' : 'Student Registration'}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isRTL 
                ? 'نرحب بكم في مدارس المدارج الخاصة. يرجى ملء النموذج التالي لتسجيل طفلكم'
                : 'Welcome to Al-Madarij Private Schools. Please fill out the form below to register your child'
              }
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
            {/* Student Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  {isRTL ? 'معلومات الطالب' : 'Student Information'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="studentName" className="text-sm font-medium">
                      {isRTL ? 'اسم الطالب (بالعربية) *' : 'Student Name (Arabic) *'}
                    </Label>
                    <Input
                      id="studentName"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="studentNameEn" className="text-sm font-medium">
                      {isRTL ? 'اسم الطالب (بالإنجليزية)' : 'Student Name (English)'}
                    </Label>
                    <Input
                      id="studentNameEn"
                      name="studentNameEn"
                      value={formData.studentNameEn}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="birthDate" className="text-sm font-medium">
                      {isRTL ? 'تاريخ الميلاد *' : 'Date of Birth *'}
                    </Label>
                    <Input
                      id="birthDate"
                      name="birthDate"
                      type="date"
                      value={formData.birthDate}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="gender" className="text-sm font-medium">
                      {isRTL ? 'الجنس *' : 'Gender *'}
                    </Label>
                    <Select value={formData.gender} onValueChange={(value) => handleSelectChange('gender', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder={isRTL ? 'اختر الجنس' : 'Select gender'} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">{isRTL ? 'ذكر' : 'Male'}</SelectItem>
                        <SelectItem value="female">{isRTL ? 'أنثى' : 'Female'}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="nationality" className="text-sm font-medium">
                      {isRTL ? 'الجنسية' : 'Nationality'}
                    </Label>
                    <Input
                      id="nationality"
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="grade" className="text-sm font-medium">
                      {isRTL ? 'الصف المطلوب *' : 'Required Grade *'}
                    </Label>
                    <Select value={formData.grade} onValueChange={(value) => handleSelectChange('grade', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder={isRTL ? 'اختر الصف' : 'Select grade'} />
                      </SelectTrigger>
                      <SelectContent>
                        {grades.map((grade) => (
                          <SelectItem key={grade.value} value={grade.value}>
                            {grade.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="previousSchool" className="text-sm font-medium">
                    {isRTL ? 'المدرسة السابقة' : 'Previous School'}
                  </Label>
                  <Input
                    id="previousSchool"
                    name="previousSchool"
                    value={formData.previousSchool}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Parent Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  {isRTL ? 'معلومات الوالدين' : 'Parent Information'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fatherName" className="text-sm font-medium">
                      {isRTL ? 'اسم الأب *' : 'Father Name *'}
                    </Label>
                    <Input
                      id="fatherName"
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="fatherPhone" className="text-sm font-medium">
                      {isRTL ? 'هاتف الأب *' : 'Father Phone *'}
                    </Label>
                    <Input
                      id="fatherPhone"
                      name="fatherPhone"
                      type="tel"
                      value={formData.fatherPhone}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="fatherEmail" className="text-sm font-medium">
                      {isRTL ? 'بريد الأب الإلكتروني' : 'Father Email'}
                    </Label>
                    <Input
                      id="fatherEmail"
                      name="fatherEmail"
                      type="email"
                      value={formData.fatherEmail}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="motherName" className="text-sm font-medium">
                      {isRTL ? 'اسم الأم' : 'Mother Name'}
                    </Label>
                    <Input
                      id="motherName"
                      name="motherName"
                      value={formData.motherName}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="motherPhone" className="text-sm font-medium">
                      {isRTL ? 'هاتف الأم' : 'Mother Phone'}
                    </Label>
                    <Input
                      id="motherPhone"
                      name="motherPhone"
                      type="tel"
                      value={formData.motherPhone}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="motherEmail" className="text-sm font-medium">
                      {isRTL ? 'بريد الأم الإلكتروني' : 'Mother Email'}
                    </Label>
                    <Input
                      id="motherEmail"
                      name="motherEmail"
                      type="email"
                      value={formData.motherEmail}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {isRTL ? 'معلومات الاتصال' : 'Contact Information'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="address" className="text-sm font-medium">
                    {isRTL ? 'العنوان' : 'Address'}
                  </Label>
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows={3}
                    className="mt-1"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="emergencyContact" className="text-sm font-medium">
                      {isRTL ? 'جهة اتصال للطوارئ' : 'Emergency Contact'}
                    </Label>
                    <Input
                      id="emergencyContact"
                      name="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="emergencyPhone" className="text-sm font-medium">
                      {isRTL ? 'هاتف الطوارئ' : 'Emergency Phone'}
                    </Label>
                    <Input
                      id="emergencyPhone"
                      name="emergencyPhone"
                      type="tel"
                      value={formData.emergencyPhone}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  {isRTL ? 'معلومات إضافية' : 'Additional Information'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="medicalConditions" className="text-sm font-medium">
                    {isRTL ? 'الحالات الطبية' : 'Medical Conditions'}
                  </Label>
                  <Textarea
                    id="medicalConditions"
                    name="medicalConditions"
                    value={formData.medicalConditions}
                    onChange={handleChange}
                    rows={3}
                    placeholder={isRTL ? 'أي حالات طبية أو حساسية...' : 'Any medical conditions or allergies...'}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="specialNeeds" className="text-sm font-medium">
                    {isRTL ? 'الاحتياجات الخاصة' : 'Special Needs'}
                  </Label>
                  <Textarea
                    id="specialNeeds"
                    name="specialNeeds"
                    value={formData.specialNeeds}
                    onChange={handleChange}
                    rows={3}
                    placeholder={isRTL ? 'أي احتياجات تعليمية خاصة...' : 'Any special educational needs...'}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="additionalNotes" className="text-sm font-medium">
                    {isRTL ? 'ملاحظات إضافية' : 'Additional Notes'}
                  </Label>
                  <Textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    rows={3}
                    placeholder={isRTL ? 'أي معلومات إضافية تود إضافتها...' : 'Any additional information you would like to add...'}
                    className="mt-1"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Terms and Conditions */}
            <Card>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3 space-x-reverse">
                  <Checkbox
                    id="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => handleCheckboxChange('agreeToTerms', checked as boolean)}
                  />
                  <Label htmlFor="agreeToTerms" className="text-sm leading-relaxed">
                    {isRTL 
                      ? 'أوافق على شروط وأحكام التسجيل في مدرسة المدارج الخاصة *'
                      : 'I agree to the terms and conditions of registration at Al-Madarij Private Schools *'
                    }
                  </Label>
                </div>
                <div className="flex items-start space-x-3 space-x-reverse">
                  <Checkbox
                    id="agreeToPrivacy"
                    checked={formData.agreeToPrivacy}
                    onCheckedChange={(checked) => handleCheckboxChange('agreeToPrivacy', checked as boolean)}
                  />
                  <Label htmlFor="agreeToPrivacy" className="text-sm leading-relaxed">
                    {isRTL 
                      ? 'أوافق على سياسة الخصوصية وطريقة استخدام البيانات *'
                      : 'I agree to the privacy policy and data usage terms *'
                    }
                  </Label>
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button
                type="submit"
                disabled={status === 'loading'}
                className="px-8 py-3 text-lg"
                size="lg"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    {isRTL ? 'جاري الإرسال...' : 'Sending...'}
                  </>
                ) : (
                  <>
                    {isRTL ? 'إرسال طلب التسجيل' : 'Submit Registration'}
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </main>

      <Footer locale={locale} />
    </div>
  )
}
