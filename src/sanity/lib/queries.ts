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

// export const imageFields = groq`
//   _type,
//   crop {
//     _type,
//     right,
//     top,
//     left,
//     bottom
//   },
//   hotspot {
//     _type,
//     x,
//     y,
//     height,
//     width,
//   },
//   asset->{...}
// `;

// export const twitterQuery = groq`
//   _type,
//   site,
//   creator,
//   cardType,
//   handle
// `;

// export const openGraphQuery = groq`
//   _type,
//   siteName,
//   url,
//   description,
//   title,
//   image { ${imageFields} }
// `;

// export const metaAttributesQuery = groq`
//   _type,
//   attributeValueString,
//   attributeType,
//   attributeKey,
//   attributeValueImage{ ${imageFields} }
// `;

// export const seofields = groq`
//   _type,
//   metaTitle,
//   nofollowAttributes,
//   seoKeywords,
//   metaDescription,
//   openGraph{ ${openGraphQuery} },
//   twitter { ${twitterQuery} },
//   additionalMetaTags[]{
//     _type,
//     metaAttributes[]{ ${metaAttributesQuery} },
//   },
// `;

// export const seo = groq`
//   seo { ${seofields} }
// `;

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

export const POST_SEARCH_QUERY = defineQuery(`
  *[_type == "post" && (
    title match $query ||
    locations[]->name match $query ||
    summary[].children[].text match $query ||
    body[].children[].text match $query
  )]
  |score(
    pt::text(body) match $query,
    boost(title match $query, 3),
    boost(pt::text(summary) match $query, 5),
  )
  |order(_score desc)
  {
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
    name,
    nameLocalised,
    type,
    emoji,
    "slug": slug.current,
    type == 'country' => {
      countryCode,
    },
    "posts": *[_type=="post" && references(^._id)]|order(_createdAt desc) {
      _id,
      _rev,
      _type,
      _createdAt,
      _updatedAt,
      ${locationsFragment},
      ${imageFragment},
      "slug": slug.current,
      title,
    },
  }
`);

const SEO_FIELDS = `
  "ogTitle": coalesce(
    seo.openGraph.title,
    seo.metaTitle,
    title,
    name
  ),
  "ogDescription": coalesce(
    seo.openGraph.description,
    seo.metaDescription,
    pt::text(summary)
  ),
  "ogImage": coalesce(
    seo.openGraph.image,
    mainImage,
  ).asset->url + "?w=600&h=600&fit=crop",
  "metaTitle": coalesce(
    seo.metaTitle,
    title,
    name
  ),
  "metaDescription": coalesce(
    seo.metaDescription,
    pt::text(summary)
  )
`;

export const DOCUMENT_SEO_DATA_BY_ID = defineQuery(`
  *[_id == $id][0] { ${SEO_FIELDS} }
`);

export const DOCUMENT_SEO_DATA_BY_SLUG = defineQuery(`
  *[_type == $documentType && slug.current == $slug][0] { ${SEO_FIELDS} }
`);
