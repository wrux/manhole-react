// import Image from "next/image";

import Link from "next/link";
import { Button } from "~/components/ui/button";
import { client } from "~/sanity/lib/client";
import { POST_TEASER_QUERY } from "~/sanity/lib/queries";

export default async function Home() {
  const posts = await client.fetch(POST_TEASER_QUERY, {
    limit: 9,
  });

  return (
    <div>
      <h1>Homepage</h1>

      <ul className="space-y-8">
        {posts.map((post) => (
          <article key={post._id}>
            <h2>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </h2>
            <Button asChild>
              <Link href={`/posts/${post.slug}`}>View Post</Link>
            </Button>
          </article>
        ))}
      </ul>
    </div>
  );
}
