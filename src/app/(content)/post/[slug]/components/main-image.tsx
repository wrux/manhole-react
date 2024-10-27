'use client';

import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';
import { client } from '~/sanity/lib/client';
import { squareImageUrlBuilder } from '~/sanity/lib/image';
import { POST_BY_SLUG_QUERYResult } from '~/sanity/types';

type MainImageType = POST_BY_SLUG_QUERYResult['mainImage'];

export default function MainImage({ image }: { image: MainImageType }) {
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
      // alt={`Cover image for ${title}`}
      // sizes={sizes}
      // placeholder="blur"
      // blurDataURL={image.asset?.metadata?.lqip || undefined}
    />
  );
}
