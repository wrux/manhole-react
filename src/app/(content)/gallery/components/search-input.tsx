'use client';

import { MagnifyingGlass } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { useGalleryContext } from './gallery-provider';

const DEBOUNCE_DELAY = 100;

export function SearchInput() {
  const { query, setQuery } = useGalleryContext();
  const [searchTerm, setSearchTerm] = useState(query);

  useEffect(() => {
    const handler = setTimeout(() => {
      setQuery(searchTerm || null);
    }, DEBOUNCE_DELAY);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, query, setQuery]);

  return (
    <div className="relative flex flex-1">
      <span className="pointer-events-none absolute left-0 top-1/2 flex h-10 w-16 -translate-y-1/2 items-center justify-center text-xl">
        <MagnifyingGlass className="h-[1em] w-[1em]" />
      </span>
      <input
        className="focus-visible:ring-highlight flex-1 rounded-full border bg-card py-2 pl-12 pr-6 text-card-foreground shadow-highlight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50"
        type="search"
        placeholder="Search"
        value={searchTerm || ''}
        onInput={(event) => setSearchTerm(event.currentTarget.value.trim())}
        tabIndex={1}
      />
    </div>
  );
}
