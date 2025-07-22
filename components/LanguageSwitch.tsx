'use client'

import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Locale } from '@/lib/i18n'

interface LanguageSwitchProps {
  currentLocale: Locale
}

export function LanguageSwitch({ currentLocale }: LanguageSwitchProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const onLocaleChange = (newLocale: Locale) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set('lang', newLocale);
    router.push(`${pathname}?${newSearchParams.toString()}`);
  };

  return (
    <Select value={currentLocale} onValueChange={onLocaleChange}>
      <SelectTrigger className="w-[100px]">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ar">العربية</SelectItem>
        <SelectItem value="en">English</SelectItem>
      </SelectContent>
    </Select>
  )
}