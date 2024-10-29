import { PortableTextReactComponents } from 'next-sanity';
import Link from 'next/link';
import { typographyVariants } from '~/components/ui/typography';
import { cn } from './utils';

export const portableTextComponents: Partial<PortableTextReactComponents> = {
  block: {
    h1: ({ children }) => (
      <h1
        className={cn(
          typographyVariants({ variant: 'h1' }),
          'mb-4 mt-6 first:mt-0 last:mb-0',
        )}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        className={cn(
          typographyVariants({ variant: 'h2' }),
          'mb-4 mt-6 first:mt-0 last:mb-0',
        )}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        className={cn(
          typographyVariants({ variant: 'h3' }),
          'mb-4 mt-6 first:mt-0 last:mb-0',
        )}
      >
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p
        className={cn(
          typographyVariants({ variant: 'body' }),
          'my-4 first:mt-0 last:mb-0',
        )}
      >
        {children}
      </p>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const target = (value?.href || '').startsWith('http')
        ? '_blank'
        : undefined;
      return (
        <Link
          className="link-underline"
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noindex nofollow' : ''}
        >
          {children}
        </Link>
      );
    },
  },
};
