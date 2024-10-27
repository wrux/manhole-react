import { PortableText } from 'next-sanity';
import { notFound } from 'next/navigation';
import Credits from '~/components/ui/common/credits';
import LocationList from '~/components/ui/common/location-list';
import { typographyVariants } from '~/components/ui/typography';
import { client } from '~/sanity/lib/client';
import { POST_BY_SLUG_QUERY, POST_SLUG_QUERY } from '~/sanity/lib/queries';
import MainImage from './components/main-image';

export async function getStaticPaths() {
  const slugs = await client.fetch(POST_SLUG_QUERY);
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export default async function PostPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = await client.fetch(POST_BY_SLUG_QUERY, { slug });
  if (!post) {
    return notFound();
  }

  // console.log('POST', post);

  return (
    <div className="container my-6 max-w-full">
      <article>
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:order-2 md:col-span-7">
            {post.mainImage && <MainImage image={post.mainImage} />}
          </div>

          <div className="space-y-5 md:order-1 md:col-span-5 md:space-y-8 md:py-8">
            {post?.locations && post?.locations?.length > 0 && (
              <LocationList
                direction="row"
                locations={post.locations.map((location) => ({
                  _id: location._id,
                  name: location.name,
                  slug: location.slug,
                  emoji: location?.emoji,
                }))}
              />
            )}

            <h1 className={typographyVariants({ variant: 'h1' })}>
              {post.title}
            </h1>

            {post?.summary && post.summary.length > 0 && (
              <div className="max-w-[40ch]">
                <PortableText value={post.summary} />
              </div>
            )}

            {post?.credits && post.credits.length > 0 && (
              <Credits
                credits={post.credits.map((credit) => ({
                  _key: credit._key,
                  type: credit.type,
                  person: credit?.person
                    ? {
                        _id: credit.person._id,
                        fullName: credit.person.fullName,
                        website: credit.person.website,
                      }
                    : null,
                  note: credit.note,
                }))}
              />
            )}
          </div>
        </div>
      </article>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6 2xl:grid-cols-4">
        <div>Other posts</div>
        <div>Other posts</div>
        <div>Other posts</div>
        <div>Other posts</div>
        <div>Other posts</div>
      </div>
    </div>
  );
}
