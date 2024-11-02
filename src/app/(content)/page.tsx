import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '~/components/ui/button';
import { Card, CardContent } from '~/components/ui/card';
import PostTeaser from '~/components/ui/common/post-teaser';
import TileGrid from '~/components/ui/common/tile-grid';
import { typographyVariants } from '~/components/ui/typography';
import { cn } from '~/lib/utils';
import { client } from '~/sanity/lib/client';
import { POST_TEASER_QUERY } from '~/sanity/lib/queries';
import { getSeoData, prepareMetaData } from '~/sanity/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  const post = await getSeoData({
    id: 'homepage',
    reducer: prepareMetaData,
  });
  return post;
}

export default async function Home() {
  const posts = await client.fetch(POST_TEASER_QUERY, {
    limit: 10,
  });

  return (
    <article className="container my-space">
      <TileGrid>
        <Card className="col-span-1 sm:col-span-2 xl:col-span-1">
          <CardContent className="flex h-full flex-col gap-3 p-space">
            <h1 className="flex flex-col justify-start gap-4">
              <div
                className="circle text-5xl"
                aria-hidden="true"
                user-select="none"
              ></div>
              <span
                className={cn(typographyVariants({ variant: 'h1' }), 'block')}
              >
                Mahole Gallery
              </span>
              <span className={typographyVariants({ variant: 'overline' })}>
                The Pavement Chronicles
              </span>
            </h1>
            <div className="mt-auto max-w-prose">
              <p className={typographyVariants()}>
                {`Manhole Gallery is your portal to the world's hidden street art,
              showcasing captivating manhole cover designs from all around the
              world.`}
              </p>
            </div>

            <Button asChild size="lg" className="mr-auto">
              <Link href="/gallery">View Full Gallery</Link>
            </Button>
          </CardContent>
        </Card>

        {posts.map((post) => (
          <PostTeaser
            key={post._id}
            locations={post?.locations || []}
            title={post.title}
            slug={post.slug}
            mainImage={post?.mainImage}
            sizes="(max-width: 1023px) calc(50vw - 1rem), (max-width: 1279px) calc(33.33vw - 3rem), calc(25vw - 4.5rem)"
          />
        ))}

        <Card className="col-span-full xl:col-span-1">
          <CardContent className="flex h-full flex-col items-center justify-center gap-3 p-space text-center">
            <div
              className="circle text-3xl"
              aria-hidden="true"
              user-select="none"
            ></div>
            <p className={cn(typographyVariants({ variant: 'h3' }), 'block')}>
              We have many more manhole covers to show you.
            </p>
            <Button asChild size="lg">
              <Link href="/gallery">View Full Gallery</Link>
            </Button>
          </CardContent>
        </Card>
      </TileGrid>
    </article>
  );
}
