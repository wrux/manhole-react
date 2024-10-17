// import Image from "next/image";

import Link from "next/link";
import { client } from "~/sanity/lib/client";
import { POST_TEASER_QUERY } from "~/sanity/lib/queries";

export default async function Home() {
  const posts = await client.fetch(POST_TEASER_QUERY, {
    limit: 9,
  });

  return (
    <div>
      <h1>Homepage</h1>

      {posts.map((post) => (
        <article key={post._id}>
          <h2>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </h2>
        </article>
      ))}
    </div>
  );
}
