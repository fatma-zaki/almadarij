'use client';

import { Suspense } from "react";
import Departments from "./DepartmentContent";


export default function DepartmentsWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Departments />
    </Suspense>
  );
}