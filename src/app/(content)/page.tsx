import PostTeaser from '~/components/ui/common/post-teaser';
import { typographyVariants } from '~/components/ui/typography';
import { cn } from '~/lib/utils';
import { client } from '~/sanity/lib/client';
import { POST_TEASER_QUERY } from '~/sanity/lib/queries';

export default async function Home() {
  const posts = await client.fetch(POST_TEASER_QUERY, {
    limit: 99999,
  });

  return (
    <article>
      <header className="py-12 md:py-16 lg:py-20">
        <div className="container text-center">
          <h1 className="mb-8 flex flex-col justify-center gap-4 lg:mb-16">
            <div
              className="circle mx-auto text-5xl"
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
          <div className="mx-auto max-w-prose">
            <p className={typographyVariants()}>
              {`Manhole Gallery is your portal to the world's hidden street art,
              showcasing captivating manhole cover designs from all around the
              world. Explore the artistic and cultural diversity beneath your
              feet with us!`}
            </p>
          </div>
        </div>
      </header>

      <main className="container max-w-full">
        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6 2xl:grid-cols-4">
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
        </ul>
      </main>
    </article>
  );
}
