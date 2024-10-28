import { PortableText } from 'next-sanity';
import { notFound } from 'next/navigation';
import Credits from '~/components/ui/common/credits';
import LocationList from '~/components/ui/common/location-list';
import LogoTitle from '~/components/ui/common/logo-title';
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

export default async function PostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;

  const { slug } = params;

  const post = await client.fetch(POST_BY_SLUG_QUERY, { slug });
  if (!post) {
    return notFound();
  }

  return (
    <div className="my-space space-y-space container">
      <article>
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:order-2 md:col-span-7">
            {post.mainImage && <MainImage image={post.mainImage} />}
          </div>

          <div className="space-y-space md:order-1 md:col-span-5">
            <LogoTitle title={post?.title || ''} />

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

            {post?.summary && post.summary.length > 0 && (
              <div className="max-w-prose">
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
