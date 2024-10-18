import { notFound } from 'next/navigation';
import { client } from '~/sanity/lib/client';
import { POST_BY_SLUG_QUERY, POST_SLUG_QUERY } from '~/sanity/lib/queries';

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

  return (
    <article>
      <h1>POST: {post.title}</h1>
    </article>
  );
}
