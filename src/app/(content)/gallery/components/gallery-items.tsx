import Link from 'next/link';
import { Card, CardContent, CardHeader } from '~/components/ui/card';
import PostTeaser from '~/components/ui/common/post-teaser';
import { typographyVariants } from '~/components/ui/typography';
import { cdnClient } from '~/sanity/lib/client';
import { POST_SEARCH_QUERY, POST_TEASER_QUERY } from '~/sanity/lib/queries';

export default async function GalleryItems({
  query,
}: {
  query: string | null;
}) {
  let posts = [];

  if (query && query !== '') {
    posts = await cdnClient.fetch(POST_SEARCH_QUERY, {
      // @ts-expect-error Query isn't typed using Sanity's query typegen
      query,
    });
  } else {
    posts = await cdnClient.fetch(POST_TEASER_QUERY, {
      limit: 9,
    });
  }

  return (
    <>
      {posts.length > 0 ? (
        posts.map((post) => (
          <PostTeaser
            key={post._id}
            locations={post.locations}
            mainImage={post.mainImage}
            slug={post.slug}
            title={post.title}
          />
        ))
      ) : (
        <Card className="col-span-full">
          <CardHeader>
            <p className={typographyVariants({ variant: 'h3' })}>
              {`No posts found for search "`}
              <span className="font-bold">{query}</span>
              {`".`}
            </p>
          </CardHeader>
          <CardContent>
            <p className={typographyVariants({ variant: 'large' })}>
              {`Please try a different search term or `}
              <Link href="/gallery" title="View all posts">
                view all posts
              </Link>
              {`.`}
            </p>
          </CardContent>
        </Card>
      )}
    </>
  );
}
