import { ComponentProps } from 'react';
import { cn } from '~/lib/utils';

export default function TileGrid({
  className,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div
      {...props}
      className={cn(
        'gap-space grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4',
        className,
      )}
    />
  );
}
