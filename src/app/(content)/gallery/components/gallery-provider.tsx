'use client';

import { useRouter } from 'next/navigation';
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

interface QueryContextProps {
  isTyping: boolean;
  setIsTyping: (isTyping: boolean) => void;
  query: string | null;
  setQuery: (query: string | null) => void;
}

const QueryContext = createContext<QueryContextProps | undefined>(undefined);

// Custom hook to use the QueryContext
export const useGalleryContext = (): QueryContextProps => {
  const context = useContext(QueryContext);
  if (!context) {
    throw new Error('useQueryContext must be used within a GalleryProvider');
  }
  return context;
};

interface GalleryProviderProps {
  children: ReactNode;
  defaultQuery: string | null;
}

export const GalleryProvider: React.FC<GalleryProviderProps> = ({
  children,
  defaultQuery,
}) => {
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [query, setQuery] = useState<string | null>(defaultQuery);
  const router = useRouter();

  // Update the URL search parameter whenever the query state changes
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (query) {
      params.set('query', query);
    } else {
      params.delete('query');
    }
    const queryString = params.toString();
    const newUrl = queryString ? `?${queryString}` : window.location.pathname;
    router.push(newUrl);
  }, [query, router]);

  return (
    <QueryContext.Provider value={{ isTyping, setIsTyping, query, setQuery }}>
      {children}
    </QueryContext.Provider>
  );
};
