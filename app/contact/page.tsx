'use client'
import { Suspense } from "react";
import ContactPage from "./ContactContent";

export default function ContactPageWrapper() {
  return (
    <Suspense fallback={<div>loading....</div>}>
      <ContactPage />
    </Suspense>
  )
}