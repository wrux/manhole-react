import { cn } from '~/lib/utils';
import { typographyVariants } from '../typography';

export type CreditsProps = {
  credits: Array<{
    _key: string;
    type: 'author' | 'photo' | 'edit' | undefined;
    person?: {
      _id: string;
      fullName: string | null;
      website?: string | null;
    } | null;
    note?: string;
  }>;
};

const labels = {
  author: 'Authored by',
  edit: 'Edited by',
  photo: 'Photo by',
};

export default function Credits({ credits }: CreditsProps) {
  if (credits?.length <= 0) return null;

  return (
    <div>
      <p className={cn(typographyVariants({ variant: 'h3' }), 'mb-3')}>
        Credits
      </p>

      <div className="space-y-1.5">
        {credits.map((credit) => {
          const label = labels?.[credit.type];

          return (
            <div key={credit._key}>
              <p>
                {label && (
                  <span className="mr-1 inline font-semibold">{label}</span>
                )}
                {credit?.person?.website ? (
                  <a
                    href={credit?.person?.website}
                    className="link-underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {credit?.person?.fullName}
                    <span className="sr-only">(opens in new tab)</span>
                  </a>
                ) : (
                  <span>{credit?.person?.fullName}</span>
                )}
              </p>
              {credit?.note && <p className="text-sm italic">{credit.note}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
