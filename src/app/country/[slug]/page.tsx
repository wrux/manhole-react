import { notFound } from "next/navigation";
import { client } from "~/sanity/lib/client";
import {
  COUNTRY_BY_SLUG_QUERY,
  COUNTRY_SLUG_QUERY,
} from "~/sanity/lib/queries";

export async function getStaticPaths() {
  const slugs = await client.fetch(COUNTRY_SLUG_QUERY);
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
  const country = await client.fetch(COUNTRY_BY_SLUG_QUERY, { slug });
  if (!country) {
    return notFound();
  }

  return (
    <article>
      <h1>
        country: {country.name} / {country.nameLocalised}
      </h1>
    </article>
  );
}
