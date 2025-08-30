'use client'
import { Suspense } from "react";
import RegistrationPage from "./RegistrationContent";

export default function RegistrationPageWrapper() {
  return (
    <Suspense fallback={<div>loading....</div>}>
      <RegistrationPage />
    </Suspense>
  )
}
