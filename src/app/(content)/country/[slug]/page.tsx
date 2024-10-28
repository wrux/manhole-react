import { notFound } from 'next/navigation';
import LogoTitle from '~/components/ui/common/logo-title';
import PostTeaser from '~/components/ui/common/post-teaser';
import TileGrid from '~/components/ui/common/tile-grid';
import { client } from '~/sanity/lib/client';
import {
  COUNTRY_BY_SLUG_QUERY,
  COUNTRY_SLUG_QUERY,
} from '~/sanity/lib/queries';

export async function getStaticPaths() {
  const slugs = await client.fetch(COUNTRY_SLUG_QUERY);
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

  const country = await client.fetch(COUNTRY_BY_SLUG_QUERY, { slug });
  if (!country) {
    return notFound();
  }

  return (
    <article className="my-space container">
      <header className="space-y-space mb-space">
        <LogoTitle title={country?.name || ''} />
      </header>

      <main>
        <TileGrid>
          {country.posts.map((post) => (
            <PostTeaser
              key={post._id}
              locations={post?.locations || []}
              title={post.title}
              slug={post.slug}
              mainImage={post?.mainImage}
              sizes="(max-width: 1023px) calc(50vw - 1rem), (max-width: 1279px) calc(33.33vw - 3rem), calc(25vw - 4.5rem)"
            />
          ))}
        </TileGrid>
      </main>
    </article>
  );
}
