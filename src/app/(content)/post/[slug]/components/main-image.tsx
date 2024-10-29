'use client';

import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';
import { client } from '~/sanity/lib/client';
import { squareImageUrlBuilder } from '~/sanity/lib/image';
import { type MainImage } from '~/sanity/types.derrived';

export default function MainImage({ image }: { image: MainImage }) {
  const imageProps = useNextSanityImage(client, image, {
    imageBuilder: squareImageUrlBuilder,
  });

  if (!image || !imageProps) {
    return <div>Image not found</div>;
  }

  return (
    <Image
      {...imageProps}
      alt=""
      className="h-full w-full overflow-hidden rounded-xl object-cover"
      unoptimized
      // alt={`Cover image for ${title}`}
      // sizes={sizes}
      // placeholder="blur"
      // blurDataURL={image.asset?.metadata?.lqip || undefined}
    />
  );
}
