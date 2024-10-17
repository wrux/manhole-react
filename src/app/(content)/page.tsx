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
      <div className="container mb-8 md:mb-12 lg:mb-16">
        <div className="flex flex-col gap-y-8 md:flex-row md:items-end md:justify-between">
          <div className="mx-auto max-w-[50ch] text-center md:mx-0 md:text-left">
            <h1 className={cn(typographyVariants({ variant: 'h1' }), 'mb-8')}>
              <span className="sr-only">Mahole Gallery</span> The Pavement
              Chronicles
            </h1>
            <p className={typographyVariants()}>
              Manhole Gallery is your portal to the world's hidden street art,
              showcasing captivating manhole cover designs from all{' '}
              <em>around</em>
              the flat earth. Explore the artistic and cultural diversity
              beneath your feet with us!
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className={typographyVariants({ variant: 'large' })}>
              Countries mentioned
            </p>
            <p
              className={cn(
                typographyVariants({ variant: 'small' }),
                'flex flex-wrap justify-center gap-2 md:justify-end',
              )}
            >
              {/* {
                countries?.map((country) => (
                  <a
                    class="link"
                    href={`/country/${country.slug}`}
                    aria-label={`View all posts in ${country.name}`}
                    transition:name={`country_list_${country._id}`}
                  >
                    {country.name}
                  </a>
                ))
              } */}
            </p>
          </div>
        </div>
      </div>

      <ul className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6 lg:px-6 2xl:grid-cols-4">
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
    </article>
  );
}
