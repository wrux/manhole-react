import { ImageResponse } from 'next/og';
import OG from '~/components/og';
import { getSeoData, openGraphSize, prepareOGData } from '~/sanity/lib/seo';

export const runtime = 'edge';

export const size = openGraphSize;

export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
  const OGData = await getSeoData({
    slug: params.slug,
    documentType: 'post',
    reducer: prepareOGData,
  });

  return new ImageResponse(<OG {...OGData} />, {
    ...size,
  });
}
