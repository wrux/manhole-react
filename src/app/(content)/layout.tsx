import Link from 'next/link';
import { Badge } from '~/components/ui/badge';
import { typographyVariants } from '~/components/ui/typography';
import { client } from '~/sanity/lib/client';
import { COUNTRY_LIST_QUERY } from '~/sanity/lib/queries';

export default function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

async function SiteHeader() {
  const countries = await client.fetch(COUNTRY_LIST_QUERY);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/70 py-4 backdrop-blur-lg transition-all duration-300">
      <div className="container flex max-w-full items-center gap-6">
        <Link
          className="block w-full text-lg md:w-auto lg:text-2xl"
          href="/"
          aria-label="Go to homepage"
        >
          <div className="circle" aria-hidden="true" user-select="none"></div>
        </Link>

        <nav
          aria-label="Countries navigation"
          className="flex w-full flex-1 gap-3 overflow-x-auto bg-red-500/10"
        >
          {countries
            .filter((location) => !!location.name && !!location.slug)
            .map((location) => (
              <Link href={`/country/${location.slug}`} key={location._id}>
                <Badge
                  variant="outline"
                  className="cursor-pointer rounded-full border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs text-zinc-300 transition-colors duration-200 hover:bg-zinc-800"
                >
                  {location?.emoji && (
                    <span
                      className="-my-4 mr-2 text-[1.75em] leading-none"
                      role="img"
                      aria-label={`Emoji representing ${location.name}`}
                    >
                      {location.emoji}
                    </span>
                  )}
                  <span className="whitespace-nowrap">{location.name}</span>
                </Badge>
              </Link>
            ))}
        </nav>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="pb-12 pt-8 lg:pb-20 lg:pt-12">
      <div className="container max-w-full">
        <div className="flex items-center gap-4">
          <Link
            className="block w-full text-lg md:w-auto lg:text-2xl"
            href="/"
            aria-label="Go to homepage"
          >
            <div className="circle" aria-hidden="true" user-select="none"></div>
          </Link>

          <p className={typographyVariants({ variant: 'small' })}>
            Manhole Gallery &copy;{' '}
            <a
              href="https://wrux.com"
              target="_blank"
              className="link-underline"
            >
              WRUX
            </a>{' '}
            and{' '}
            <a
              href="https://callum.co.uk"
              target="_blank"
              className="link-underline"
            >
              Callum Bonnyman
            </a>{' '}
            {new Date().getFullYear()}.
          </p>
        </div>
      </div>
    </footer>
  );
}
