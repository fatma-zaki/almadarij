'use client';

import { Suspense } from 'react';

import Activities from './ActivitiesContent';

export default function ActivitiesWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Activities />
    </Suspense>
  );
}
