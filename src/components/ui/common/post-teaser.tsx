'use client';

import {
  ImageUrlBuilder,
  useNextSanityImage,
  UseNextSanityImageBuilderOptions,
} from 'next-sanity-image';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '~/sanity/lib/client';
import { POST_TEASER_QUERYResult } from '~/sanity/types';
import { typographyVariants } from '../typography';

export type PostTeaserProps = Pick<
  POST_TEASER_QUERYResult[0],
  'mainImage' | 'title' | 'slug'
> & {
  sizes?: string;
};

const squareImageUrlBuilder = (
  imageUrlBuilder: ImageUrlBuilder,
  options: UseNextSanityImageBuilderOptions,
) =>
  imageUrlBuilder
    .width(
      options.width || Math.min(options.originalImageDimensions.width, 1920),
    )
    .height(
      options.width || Math.min(options.originalImageDimensions.width, 1920),
    )
    .fit('clip');

export default function PostTeaser({
  mainImage,
  slug,
  title,
  sizes,
}: PostTeaserProps) {
  const imageProps = useNextSanityImage(client, mainImage, {
    imageBuilder: squareImageUrlBuilder,
  });

  return (
    <article className="group relative flex aspect-square overflow-hidden">
      <header className="absolute inset-0 z-[-1] h-full w-full bg-card">
        {mainImage && imageProps && (
          <Image
            {...imageProps}
            className="h-full w-full object-cover"
            alt={`Cover image for ${title}`}
            sizes={sizes}
            placeholder="blur"
            blurDataURL={mainImage.asset?.metadata?.lqip || undefined}
          />
        )}
      </header>
      <main className="link-box flex w-full flex-col items-start justify-end bg-background/0 p-4 transition-colors group-hover:bg-background/50 group-hover:backdrop-blur-sm group-focus:bg-background/50 group-focus:backdrop-blur-sm lg:p-10">
        <h2 className={typographyVariants({ variant: 'h2' })}>
          <Link className="link-overlay link" href={`/posts/${slug}`}>
            <span className="drop-shadow-2xl">{title}</span>
          </Link>
        </h2>
      </main>
    </article>
  );
}
