import { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import { PostTeaserPlaceholder } from '~/components/ui/common/post-teaser';
import { getSeoData, prepareMetaData } from '~/sanity/lib/seo';
import GalleryGrid from './components/gallery-grid';
import GalleryItems from './components/gallery-items';
import { GalleryProvider } from './components/gallery-provider';
import { SearchInput } from './components/search-input';

export async function generateMetadata(): Promise<Metadata> {
  const post = await getSeoData({
    id: 'gallery',
    reducer: prepareMetaData,
  });
  return post;
}

export default async function GalleryPage({
  searchParams,
}: {
  searchParams: Promise<{ query: string | null }>;
}) {
  const { query } = await searchParams;

  return (
    <GalleryProvider defaultQuery={query}>
      <div className="container my-space">
        <div className="mb-space flex items-center gap-space">
          <Link
            className="text-lg lg:text-2xl"
            href="/"
            aria-label="Go to homepage"
          >
            <div className="circle" aria-hidden="true" user-select="none"></div>
          </Link>
          <SearchInput />
        </div>
        <GalleryGrid>
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
        </GalleryGrid>
      </div>
    </GalleryProvider>
  );
}
