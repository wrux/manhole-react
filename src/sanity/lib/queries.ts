import { defineQuery } from 'next-sanity';

const imageFragment = `mainImage {
    ...,
    asset -> {
      ...,
      "alt": altText,
      metadata {
        lqip,
        dimensions
      },
    },
  }
`;

const locationsFragment = `locations[]-> {
  _id,
  _rev,
  _type,
  _createdAt,
  _updatedAt,
  name,
  nameLocalised,
  type,
  emoji,
  "slug": slug.current,
  type == 'country' => {
    countryCode,
  },
}`;

export const POST_TEASER_QUERY = defineQuery(`
  *[_type=="post"]|order(_createdAt desc)[0...$limit] {
    _id,
    _rev,
    _type,
    _createdAt,
    _updatedAt,
    ${locationsFragment},
    ${imageFragment},
    "slug": slug.current,
    title,
  }
`);

export const POST_SLUG_QUERY = defineQuery(`
  *[_type=="post"].slug.current
`);

export const POST_BY_SLUG_QUERY = defineQuery(`
  *[_type=="post" && slug.current == $slug][0] {
    _id,
    _rev,
    _type,
    _createdAt,
    _updatedAt,
    body,
    "bodyHTML": pt::text(body),
    credits[] {
      ...,
      person-> {
        _id,
        fullName,
        website,
      },
    },
    gallery,
    ${locationsFragment},
    ${imageFragment},
    "metaDescription": pt::text(summary),
    "morePosts": *[_type=="post" && _id != ^._id]|order(_createdAt desc)[0...6] {
      _id,
      _rev,
      _type,
      _createdAt,
      _updatedAt,
      ${imageFragment},
      "slug": slug.current,
      title,
    },
    "slug": slug.current,
    summary,
    "summaryHTML": pt::text(summary),
    title,
  }
`);

export const COUNTRY_LIST_QUERY = defineQuery(`
  *[_type == "location" && type == "country"] {
    _id,
    _rev,
    _type,
    _createdAt,
    _updatedAt,
    name,
    nameLocalised,
    type,
    emoji,
    countryCode,
    "slug": slug.current,
  }
`);

export const COUNTRY_SLUG_QUERY = defineQuery(`
  *[_type == "location" && type == "country"].slug.current
`);

export const COUNTRY_BY_SLUG_QUERY = defineQuery(`
  *[_type == "location" && type == "country" && slug.current == $slug][0] {
    _id,
    _rev,
    _type,
    _createdAt,
    _updatedAt,
    "slug": slug.current,
    title,
  }
`);
