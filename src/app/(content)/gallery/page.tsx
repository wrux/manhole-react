import Link from 'next/link';
import { Suspense } from 'react';
import { PostTeaserPlaceholder } from '~/components/ui/common/post-teaser';
import TileGrid from '~/components/ui/common/tile-grid';
import GalleryItems from './components/gallery-items';
import { GalleryProvider } from './components/gallery-provider';
import { SearchInput } from './components/search-input';

export default async function GalleryPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;

  return (
    <GalleryProvider defaultQuery={query}>
      <div className="my-space container">
        <div className="gap-space mb-space flex items-center">
          <Link
            className="text-lg lg:text-2xl"
            href="/"
            aria-label="Go to homepage"
          >
            <div className="circle" aria-hidden="true" user-select="none"></div>
          </Link>
          <SearchInput />
        </div>
        <TileGrid>
          <Suspense
            fallback={
              <>
                {Array.from({ length: 9 }).map((_, index) => (
                  <PostTeaserPlaceholder key={index} />
                ))}
              </>
            }
          >
            <GalleryItems query={query} />
          </Suspense>
        </TileGrid>
      </div>
    </GalleryProvider>
  );
}
