import { ImageResponse } from 'next/og';
import OG from '~/components/og';
import { getSeoData, openGraphSize, prepareOGData } from '~/sanity/lib/seo';

export const runtime = 'edge';

export const size = openGraphSize;

export const contentType = 'image/png';

export default async function Image() {
  const OGData = await getSeoData({
    id: 'gallery',
    reducer: prepareOGData,
  });

  return new ImageResponse(<OG {...OGData} />, {
    ...size,
  });
}
