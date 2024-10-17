import Link from 'next/link';
import { Badge } from '~/components/ui/badge';
import { cn } from '~/lib/utils';

export type LocationListProps = {
  className?: string;
  locations: {
    _id: string;
    emoji: string | null;
    name: string | null;
    slug: string | null;
  }[];
};

export default function LocationList({
  className,
  locations,
}: LocationListProps) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {locations
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
              {location.name}
            </Badge>
          </Link>
        ))}
    </div>
  );
}
