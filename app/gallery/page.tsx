'use client';

import { Suspense } from "react";
import GalleryPage from "./Gallery";

export default function GalleryWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GalleryPage />
    </Suspense>
  );
}