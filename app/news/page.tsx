'use client';
import {Suspense} from 'react';
import NewsPage from './News';
export default function NewsWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NewsPage />
    </Suspense>
  );
}