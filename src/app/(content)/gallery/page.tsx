import Link from 'next/link';
import { client } from '~/sanity/lib/client';
import { POST_SEARCH_QUERY, POST_TEASER_QUERY } from '~/sanity/lib/queries';
import GalleryGrid from './components/gallery-grid';
import { GalleryProvider } from './components/gallery-provider';
import { SearchInput } from './components/search-input';

export default async function GalleryPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;
  let posts = [];

  console.log('SSR');

  if (query && query !== '') {
    posts = await client.fetch(POST_SEARCH_QUERY, {
      query,
    });
  } else {
    posts = await client.fetch(POST_TEASER_QUERY, {
      limit: 9,
    });
  }

  return (
    <GalleryProvider>
      <div className="my-space container">
        <div className="gap-space mb-space flex items-center">
          <Link
            className="text-lg lg:text-2xl"
            href="/"
            aria-label="Go to homepage"
          >
            <div className="circle" aria-hidden="true" user-select="none"></div>
          </Link>

          <p>
            Search term: {query}--{posts?.length || 0}
          </p>

          <SearchInput />

          {/* <FilterDropdowns /> */}
        </div>

        <GalleryGrid />
        {/*
        <TileGrid>
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
        </TileGrid> */}
      </div>
    </GalleryProvider>
  );
}

// function SearchInput() {
//   const ref = useRef<HTMLInputElement>(null);

//   // Update the URL query string when the search input changes.
//   useEffect(() => {
//     const input = ref.current;

//     if (!input) return;

//     const updateQuery = () => {
//       const query = input.value.trim();
//       const url = new URL(window.location.toString());
//       const searchParams = new URLSearchParams(url.search);
//       if (query) {
//         searchParams.set('q', query);
//       } else {
//         searchParams.delete('q');
//       }
//       url.search = searchParams.toString();
//       window.history.pushState({}, '', url);
//     };

//     input.addEventListener('input', updateQuery);
//     return () => input.removeEventListener('input', updateQuery);
//   }, []);

//   return (
//     <input
//       ref={ref}
//       className="focus-visible:ring-highlight flex-1 rounded-full border bg-card px-6 py-2 text-card-foreground shadow-highlight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50"
//       type="search"
//       placeholder="Search"
//     />
//   );
// }

// function FilterDropdowns() {
//   return <p>Filter dropdowns</p>;
// }
