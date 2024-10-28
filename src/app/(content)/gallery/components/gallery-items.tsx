import PostTeaser from '~/components/ui/common/post-teaser';
import { cdnClient } from '~/sanity/lib/client';
import { POST_SEARCH_QUERY, POST_TEASER_QUERY } from '~/sanity/lib/queries';

export default async function GalleryItems({ query }: { query: string }) {
  let posts = [];

  if (query && query !== '') {
    posts = await cdnClient.fetch(POST_SEARCH_QUERY, {
      query,
    });
  } else {
    posts = await cdnClient.fetch(POST_TEASER_QUERY, {
      limit: 9,
    });
  }

  return (
    <>
      {posts.length > 0 ? (
        posts.map((post) => (
          <PostTeaser
            key={post._id}
            locations={post.locations}
            mainImage={post.mainImage}
            slug={post.slug}
            title={post.title}
          />
        ))
      ) : (
        <div>
          <p>No posts found.</p>
        </div>
      )}
    </>
  );
}
