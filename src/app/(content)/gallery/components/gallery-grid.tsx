'use client';

import { Suspense } from 'react';
import TileGrid from '~/components/ui/common/tile-grid';
import { Skeleton } from '~/components/ui/skeleton';
import GalleryItems from './gallery-items';
import { useGalleryContext } from './gallery-provider';

export default function GalleryGrid() {
  const { query } = useGalleryContext();

  return (
    <TileGrid>
      <Suspense fallback={<GalleryPlaceholders />}>
        <GalleryItems query={query} />
      </Suspense>
    </TileGrid>
  );
}

function GalleryPlaceholders() {
  return (
    <>
      <GalleryPlaceholder />
      <GalleryPlaceholder />
      <GalleryPlaceholder />
      <GalleryPlaceholder />
      <GalleryPlaceholder />
      <GalleryPlaceholder />
      <GalleryPlaceholder />
      <GalleryPlaceholder />
      <GalleryPlaceholder />
    </>
  );
}

function GalleryPlaceholder() {
  return (
    <Skeleton className="p-space flex aspect-square w-full flex-col justify-end gap-3 rounded-xl shadow-highlight">
      <Skeleton className="h-6 w-1/3" />
      <Skeleton className="h-8 w-2/3" />
    </Skeleton>
  );
}
