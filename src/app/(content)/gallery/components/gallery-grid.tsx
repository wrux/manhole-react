'use client';

import { PropsWithChildren } from 'react';
import TileGrid from '~/components/ui/common/tile-grid';
import { cn } from '~/lib/utils';
import { useGalleryContext } from './gallery-provider';

export default function GalleryGrid({ children }: PropsWithChildren) {
  const { isTyping } = useGalleryContext();

  return (
    <TileGrid
      className={cn('transition-opacity duration-300', {
        'opacity-50': isTyping,
      })}
    >
      {children}
    </TileGrid>
  );
}
