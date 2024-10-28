'use client';

import { useEffect, useState } from 'react';
import { useGalleryContext } from './gallery-provider';

const DEBOUNCE_DELAY = 100;

export function SearchInput() {
  const { query, setQuery } = useGalleryContext();
  const [searchTerm, setSearchTerm] = useState(query);

  useEffect(() => {
    const handler = setTimeout(() => {
      setQuery(searchTerm);
    }, DEBOUNCE_DELAY);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, query, setQuery]);

  return (
    <div className="flex flex-1">
      <input
        className="focus-visible:ring-highlight flex-1 rounded-full border bg-card px-6 py-2 text-card-foreground shadow-highlight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50"
        type="search"
        placeholder="Search"
        value={searchTerm}
        onInput={(event) => setSearchTerm(event.currentTarget.value.trim())}
      />
    </div>
  );
}
