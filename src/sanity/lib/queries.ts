import { defineQuery } from 'next-sanity';

// const imageFragment = `{
//   ...,
//   asset -> {
//     ...,
//     "alt": altText,
//     metadata {
//       lqip,
//       dimensions
//     },
//   },
// }`;

export const POST_TEASER_QUERY = defineQuery(`
  *[_type=="post"]|order(_createdAt desc)[0...$limit] {
    _id,
    _rev,
    _type,
    _createdAt,
    _updatedAt,
    locations[]-> {
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
    },
    mainImage {
      ...,
      asset -> {
        ...,
        "alt": altText,
        metadata {
          lqip,
          dimensions
        },
      },
    },
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
    mainImage,
    "slug": slug.current,
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
    countryCode,
    "posts": *[_type=="post" && references(^._id)]|order(_createdAt desc) {
      _id,
      _rev,
      _type,
      _createdAt,
      _updatedAt,
      mainImage,
      "slug": slug.current,
      title,
    },
    "slug": slug.current,
    name,
    nameLocalised,
  }
`);
