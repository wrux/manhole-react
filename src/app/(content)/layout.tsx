import Link from 'next/link';
import { typographyVariants } from '~/components/ui/typography';

export default function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="pb-12 pt-8 lg:pb-20 lg:pt-12">
      <div className="container">
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
