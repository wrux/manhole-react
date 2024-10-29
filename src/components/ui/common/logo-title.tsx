import Link from 'next/link';
import { cn } from '~/lib/utils';
import { typographyVariants } from '../typography';

export type LogoTitleProps = {
  title: string;
};

export default function LogoTitle({ title }: LogoTitleProps) {
  return (
    <div className="gap-space flex items-start">
      <Link className="text-lg" href="/" aria-label="Go to homepage">
        <div className="circle" aria-hidden="true" user-select="none"></div>
      </Link>

      <h1
        className={cn(
          typographyVariants({ variant: 'h2' }),
          'mt-[-0.08em] inline-block',
        )}
      >
        {title}
      </h1>
    </div>
  );
}
