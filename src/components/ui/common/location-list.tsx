import Link from 'next/link';
import { Badge } from '~/components/ui/badge';
import { cn } from '~/lib/utils';

export type LocationListProps = {
  className?: string;
  direction?: 'row' | 'column';
  locations: {
    _id: string;
    emoji: string | null;
    name: string | null;
    slug: string | null;
    type?: 'country' | 'city' | null;
  }[];
};

export default function LocationList({
  className,
  direction = 'column',
  locations,
}: LocationListProps) {
  return (
    <div
      className={cn(
        'flex gap-2',
        direction === 'column' ? 'flex-col' : 'flex-row',
        className,
      )}
    >
      {locations
        .filter((location) => !!location.name && !!location.slug)
        .map((location) => {
          const component = (
            <Badge
              variant="outline"
              className={cn(
                'rounded-full border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs text-zinc-300',
                {
                  'cursor-pointer transition-colors duration-200 hover:bg-zinc-800':
                    location?.type === 'country',
                  'opacity-70': location?.type === 'city',
                },
              )}
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
              {location.name}
            </Badge>
          );

          if (location?.type === 'country') {
            return (
              <Link
                href={`/${location.type}/${location.slug}`}
                key={location._id}
              >
                {component}
              </Link>
            );
          }

          return component;
        })}
    </div>
  );
}
