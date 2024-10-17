"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ImageUrlBuilder,
  useNextSanityImage,
  UseNextSanityImageBuilderOptions,
} from "next-sanity-image";
import { Button } from "../button";
import { POST_TEASER_QUERYResult } from "~/sanity/types";
import { client } from "~/sanity/lib/client";
import { cn } from "~/lib/utils";
import { typographyVariants } from "../typography";

export type PostTeaserProps = Pick<
  POST_TEASER_QUERYResult[0],
  "mainImage" | "title" | "slug"
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
    .fit("clip");

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
    <article className="group flex aspect-square relative overflow-hidden">
      <header className="w-full h-full absolute inset-0 z-[-1] bg-card">
        {mainImage && imageProps && (
          <Image
            {...imageProps}
            className="w-full h-full object-cover"
            alt={`Cover image for ${title}`}
            sizes={sizes}
            placeholder="blur"
            blurDataURL={mainImage.asset?.metadata?.lqip || undefined}
          />
        )}
      </header>
      <main className="bg-background/0 group-hover:backdrop-blur-sm group-focus:backdrop-blur-sm transition-colors group-hover:bg-background/50 group-focus:bg-background/50 link-box w-full flex items-start justify-end flex-col p-4 lg:p-10">
        <h2 className={typographyVariants({ variant: "h2" })}>
          <Link className="link-overlay link" href={`/posts/${slug}`}>
            <span className="drop-shadow-2xl">{title}</span>
          </Link>
        </h2>
      </main>
    </article>
  );
}
