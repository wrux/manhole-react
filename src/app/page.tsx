import PostTeaser from '~/components/ui/common/post-teaser';
import { typographyVariants } from '~/components/ui/typography';
import { client } from '~/sanity/lib/client';
import { POST_TEASER_QUERY } from '~/sanity/lib/queries';

export default async function Home() {
  const posts = await client.fetch(POST_TEASER_QUERY, {
    limit: 99999,
  });

  return (
    <div className="">
      <h1 className={typographyVariants({ variant: 'h1' })}>Homepage</h1>

      <ul className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
        {posts.map((post) => (
          <PostTeaser
            key={post._id}
            title={post.title}
            slug={post.slug}
            mainImage={post?.mainImage}
            sizes="(max-width: 1023px) calc(50vw - 1rem), (max-width: 1279px) calc(33.33vw - 3rem), calc(25vw - 4.5rem)"
          />
        ))}
      </ul>
    </div>
  );
}
