'use client';

import { Suspense } from 'react';
import TileGrid from '~/components/ui/common/tile-grid';
import GalleryItems from './gallery-items';
import { useGalleryContext } from './gallery-provider';

export default function GalleryGrid() {
  const { query } = useGalleryContext();

  return (
    <TileGrid>
      <Suspense fallback={<p>Loading...</p>}>
        <GalleryItems query={query} />
      </Suspense>
    </TileGrid>
  );
}
