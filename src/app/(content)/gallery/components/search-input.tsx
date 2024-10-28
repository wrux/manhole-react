'use client';

import { useGalleryContext } from './gallery-provider';

export function SearchInput() {
  const { query, setQuery } = useGalleryContext();

  return (
    <input
      className="focus-visible:ring-highlight flex-1 rounded-full border bg-card px-6 py-2 text-card-foreground shadow-highlight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50"
      type="search"
      placeholder="Search"
      value={query}
      // TODO: debounce to prevent lots of requests
      onInput={(event) => setQuery(event.currentTarget.value.trim())}
    />
  );
}
