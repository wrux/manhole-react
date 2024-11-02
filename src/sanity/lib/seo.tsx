import { DOCUMENT_SEO_DATA_BY_IDResult } from '../types';
import { client } from './client';
import { DOCUMENT_SEO_DATA_BY_ID, DOCUMENT_SEO_DATA_BY_SLUG } from './queries';

export const openGraphSize = {
  width: 1200,
  height: 630,
};

export const twitterCardSize = {
  width: 1200,
  height: 675,
};

const FALLBACK_TITLE = 'Manhole Gallery';
const FALLBACK_DESCRIPTION =
  'A collection of manhole covers from around the world.';
const FALLBACK_OG_IMAGE = 'https://manhole.gallery/og-image.png';

export function prepareOGData(result: DOCUMENT_SEO_DATA_BY_IDResult) {
  if (!result)
    return {
      title: FALLBACK_TITLE,
      description: FALLBACK_DESCRIPTION,
      image: FALLBACK_OG_IMAGE,
    };
  return {
    ogTitle: result?.ogTitle || FALLBACK_TITLE,
    ogDescription: result?.ogDescription || FALLBACK_DESCRIPTION,
    ogImage: result?.ogImage || FALLBACK_OG_IMAGE,
  };
}

export function prepareMetaData(result: DOCUMENT_SEO_DATA_BY_IDResult) {
  if (!result) {
    return {
      title: FALLBACK_TITLE,
      description: FALLBACK_DESCRIPTION,
    };
  }
  return {
    title: result?.metaTitle || FALLBACK_TITLE,
    description: result?.metaDescription || FALLBACK_DESCRIPTION,
  };
}

export async function getSeoData({
  id,
  documentType,
  slug,
  reducer,
}: {
  id?: string;
  documentType?: string;
  slug?: string;
  reducer: (data: DOCUMENT_SEO_DATA_BY_IDResult) => {
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    title?: string;
    description?: string;
    image?: string;
  };
}) {
  const document = id
    ? await client.fetch(DOCUMENT_SEO_DATA_BY_ID, { id })
    : await client.fetch(DOCUMENT_SEO_DATA_BY_SLUG, { documentType, slug });
  if (!document) {
    return null;
  }
  return reducer(document);
}
