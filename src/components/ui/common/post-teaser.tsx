'use client';

import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '~/sanity/lib/client';
import { squareImageUrlBuilder } from '~/sanity/lib/image';
import { POST_TEASER_QUERYResult } from '~/sanity/types';
import { Card, CardContent } from '../card';
import { typographyVariants } from '../typography';
import LocationList from './location-list';

export type PostTeaserProps = Pick<
  POST_TEASER_QUERYResult[0],
  'locations' | 'mainImage' | 'title' | 'slug'
> & {
  sizes?: string;
};

export default function PostTeaser({
  locations,
  mainImage,
  slug,
  title,
  sizes,
}: PostTeaserProps) {
  const imageProps = useNextSanityImage(client, mainImage, {
    imageBuilder: squareImageUrlBuilder,
  });

  return (
    <Card className="link-box group relative aspect-square overflow-hidden">
      {mainImage && imageProps && (
        <Image
          {...imageProps}
          className="h-full w-full object-cover transition-transform group-hover:scale-105 group-focus:scale-105"
          alt={`Cover image for ${title}`}
          sizes={sizes}
          placeholder="blur"
          blurDataURL={mainImage.asset?.metadata?.lqip || undefined}
          unoptimized
        />
      )}

      <CardContent className="p-space absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
        <div className="space-y-3 text-white">
          {locations && locations.length > 0 && (
            <LocationList
              locations={locations
                .filter((location) => location.type === 'country')
                .map((location) => ({
                  _id: location._id,
                  name: location.name,
                  slug: location.slug,
                  emoji: location?.emoji,
                }))}
            />
          )}
          <h3 className={typographyVariants({ variant: 'h3' })}>
            <Link className="link-overlay link" href={`/post/${slug}`}>
              {title}
            </Link>
          </h3>
        </div>
      </CardContent>
    </Card>
  );
}
