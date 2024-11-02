/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: 'sanity.imagePaletteSwatch';
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: 'sanity.imagePalette';
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: 'sanity.imageDimensions';
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: 'sanity.fileAsset';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: 'geopoint';
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Settings = {
  _id: string;
  _type: 'settings';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  Name?: string;
  seo?: SeoMetaFields;
};

export type Post = {
  _id: string;
  _type: 'post';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  summary?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: 'span';
      _key: string;
    }>;
    style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote';
    listItem?: 'bullet' | 'number';
    markDefs?: Array<{
      href?: string;
      _type: 'link';
      _key: string;
    }>;
    level?: number;
    _type: 'block';
    _key: string;
  }>;
  locations?: Array<{
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: 'location';
  }>;
  credits?: Array<{
    type?: 'author' | 'photo' | 'edit';
    person?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'person';
    };
    note?: string;
    _type: 'credit';
    _key: string;
  }>;
  mainImage?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
  seo?: SeoMetaFields;
};

export type Person = {
  _id: string;
  _type: 'person';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  fullName?: string;
  email?: string;
  website?: string;
};

export type Location = {
  _id: string;
  _type: 'location';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  nameLocalised?: string;
  type?: 'country' | 'city';
  slug?: Slug;
  emoji?: string;
  countryCode?: string;
};

export type Slug = {
  _type: 'slug';
  current?: string;
  source?: string;
};

export type Homepage = {
  _id: string;
  _type: 'homepage';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  seo?: SeoMetaFields;
};

export type MetaTag = {
  _type: 'metaTag';
  metaAttributes?: Array<
    {
      _key: string;
    } & MetaAttribute
  >;
};

export type MetaAttribute = {
  _type: 'metaAttribute';
  attributeKey?: string;
  attributeType?: 'string' | 'image';
  attributeValueImage?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
  attributeValueString?: string;
};

export type SeoMetaFields = {
  _type: 'seoMetaFields';
  nofollowAttributes?: boolean;
  metaTitle?: string;
  metaDescription?: string;
  metaImage?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
  seoKeywords?: Array<string>;
  openGraph?: OpenGraph;
  additionalMetaTags?: Array<
    {
      _key: string;
    } & MetaTag
  >;
  twitter?: Twitter;
};

export type Twitter = {
  _type: 'twitter';
  cardType?: string;
  creator?: string;
  site?: string;
  handle?: string;
};

export type OpenGraph = {
  _type: 'openGraph';
  url?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
  title?: string;
  description?: string;
  siteName?: string;
};

export type SanityImageCrop = {
  _type: 'sanity.imageCrop';
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: 'sanity.imageHotspot';
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: 'sanity.imageAsset';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: 'sanity.assetSourceData';
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: 'sanity.imageMetadata';
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | Settings
  | Post
  | Person
  | Location
  | Slug
  | Homepage
  | MetaTag
  | MetaAttribute
  | SeoMetaFields
  | Twitter
  | OpenGraph
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/sanity/lib/queries.ts
// Variable: POST_TEASER_QUERY
// Query: *[_type=="post"]|order(_createdAt desc)[0...$limit] {    _id,    _rev,    _type,    _createdAt,    _updatedAt,    locations[]-> {  _id,  _rev,  _type,  _createdAt,  _updatedAt,  name,  nameLocalised,  type,  emoji,  "slug": slug.current,  type == 'country' => {    countryCode,  },},    mainImage {    ...,    asset -> {      ...,      "alt": altText,      metadata {        lqip,        dimensions      },    },  },    "slug": slug.current,    title,  }
export type POST_TEASER_QUERYResult = Array<{
  _id: string;
  _rev: string;
  _type: 'post';
  _createdAt: string;
  _updatedAt: string;
  locations: Array<
    | {
        _id: string;
        _rev: string;
        _type: 'location';
        _createdAt: string;
        _updatedAt: string;
        name: string | null;
        nameLocalised: string | null;
        type: 'city' | 'country' | null;
        emoji: string | null;
        slug: string | null;
        countryCode: string | null;
      }
    | {
        _id: string;
        _rev: string;
        _type: 'location';
        _createdAt: string;
        _updatedAt: string;
        name: string | null;
        nameLocalised: string | null;
        type: 'city' | 'country' | null;
        emoji: string | null;
        slug: string | null;
      }
  > | null;
  mainImage: {
    asset: {
      _id: string;
      _type: 'sanity.imageAsset';
      _createdAt: string;
      _updatedAt: string;
      _rev: string;
      originalFilename?: string;
      label?: string;
      title?: string;
      description?: string;
      altText?: string;
      sha1hash?: string;
      extension?: string;
      mimeType?: string;
      size?: number;
      assetId?: string;
      uploadId?: string;
      path?: string;
      url?: string;
      metadata: {
        lqip: string | null;
        dimensions: SanityImageDimensions | null;
      } | null;
      source?: SanityAssetSourceData;
      alt: string | null;
    } | null;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  } | null;
  slug: string | null;
  title: string | null;
}>;
// Variable: POST_SLUG_QUERY
// Query: *[_type=="post"].slug.current
export type POST_SLUG_QUERYResult = Array<string | null>;
// Variable: POST_BY_SLUG_QUERY
// Query: *[_type=="post" && slug.current == $slug][0] {    _id,    _rev,    _type,    _createdAt,    _updatedAt,    body,    "bodyHTML": pt::text(body),    credits[] {      ...,      person-> {        _id,        fullName,        website,      },    },    gallery,    locations[]-> {  _id,  _rev,  _type,  _createdAt,  _updatedAt,  name,  nameLocalised,  type,  emoji,  "slug": slug.current,  type == 'country' => {    countryCode,  },},    mainImage {    ...,    asset -> {      ...,      "alt": altText,      metadata {        lqip,        dimensions      },    },  },    "metaDescription": pt::text(summary),    "morePosts": *[_type=="post" && _id != ^._id]|order(_createdAt desc)[0...6] {      _id,      _rev,      _type,      _createdAt,      _updatedAt,      mainImage {    ...,    asset -> {      ...,      "alt": altText,      metadata {        lqip,        dimensions      },    },  },      "slug": slug.current,      title,    },    "slug": slug.current,    summary,    "summaryHTML": pt::text(summary),    title,  }
export type POST_BY_SLUG_QUERYResult = {
  _id: string;
  _rev: string;
  _type: 'post';
  _createdAt: string;
  _updatedAt: string;
  body: null;
  bodyHTML: string;
  credits: Array<{
    type?: 'author' | 'edit' | 'photo';
    person: {
      _id: string;
      fullName: string | null;
      website: string | null;
    } | null;
    note?: string;
    _type: 'credit';
    _key: string;
  }> | null;
  gallery: null;
  locations: Array<
    | {
        _id: string;
        _rev: string;
        _type: 'location';
        _createdAt: string;
        _updatedAt: string;
        name: string | null;
        nameLocalised: string | null;
        type: 'city' | 'country' | null;
        emoji: string | null;
        slug: string | null;
        countryCode: string | null;
      }
    | {
        _id: string;
        _rev: string;
        _type: 'location';
        _createdAt: string;
        _updatedAt: string;
        name: string | null;
        nameLocalised: string | null;
        type: 'city' | 'country' | null;
        emoji: string | null;
        slug: string | null;
      }
  > | null;
  mainImage: {
    asset: {
      _id: string;
      _type: 'sanity.imageAsset';
      _createdAt: string;
      _updatedAt: string;
      _rev: string;
      originalFilename?: string;
      label?: string;
      title?: string;
      description?: string;
      altText?: string;
      sha1hash?: string;
      extension?: string;
      mimeType?: string;
      size?: number;
      assetId?: string;
      uploadId?: string;
      path?: string;
      url?: string;
      metadata: {
        lqip: string | null;
        dimensions: SanityImageDimensions | null;
      } | null;
      source?: SanityAssetSourceData;
      alt: string | null;
    } | null;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  } | null;
  metaDescription: string;
  morePosts: Array<{
    _id: string;
    _rev: string;
    _type: 'post';
    _createdAt: string;
    _updatedAt: string;
    mainImage: {
      asset: {
        _id: string;
        _type: 'sanity.imageAsset';
        _createdAt: string;
        _updatedAt: string;
        _rev: string;
        originalFilename?: string;
        label?: string;
        title?: string;
        description?: string;
        altText?: string;
        sha1hash?: string;
        extension?: string;
        mimeType?: string;
        size?: number;
        assetId?: string;
        uploadId?: string;
        path?: string;
        url?: string;
        metadata: {
          lqip: string | null;
          dimensions: SanityImageDimensions | null;
        } | null;
        source?: SanityAssetSourceData;
        alt: string | null;
      } | null;
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: 'image';
    } | null;
    slug: string | null;
    title: string | null;
  }>;
  slug: string | null;
  summary: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: 'span';
      _key: string;
    }>;
    style?: 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'normal';
    listItem?: 'bullet' | 'number';
    markDefs?: Array<{
      href?: string;
      _type: 'link';
      _key: string;
    }>;
    level?: number;
    _type: 'block';
    _key: string;
  }> | null;
  summaryHTML: string;
  title: string | null;
} | null;
// Variable: POST_SEARCH_QUERY
// Query: *[_type == "post" && (    title match $query ||    locations[]->name match $query ||    summary[].children[].text match $query ||    body[].children[].text match $query  )]  |score(    pt::text(body) match $query,    boost(title match $query, 3),    boost(pt::text(summary) match $query, 5),  )  |order(_score desc)  {    _id,    _rev,    _type,    _createdAt,    _updatedAt,    locations[]-> {  _id,  _rev,  _type,  _createdAt,  _updatedAt,  name,  nameLocalised,  type,  emoji,  "slug": slug.current,  type == 'country' => {    countryCode,  },},    mainImage {    ...,    asset -> {      ...,      "alt": altText,      metadata {        lqip,        dimensions      },    },  },    "slug": slug.current,    title,  }
export type POST_SEARCH_QUERYResult = Array<{
  _id: string;
  _rev: string;
  _type: 'post';
  _createdAt: string;
  _updatedAt: string;
  locations: Array<
    | {
        _id: string;
        _rev: string;
        _type: 'location';
        _createdAt: string;
        _updatedAt: string;
        name: string | null;
        nameLocalised: string | null;
        type: 'city' | 'country' | null;
        emoji: string | null;
        slug: string | null;
        countryCode: string | null;
      }
    | {
        _id: string;
        _rev: string;
        _type: 'location';
        _createdAt: string;
        _updatedAt: string;
        name: string | null;
        nameLocalised: string | null;
        type: 'city' | 'country' | null;
        emoji: string | null;
        slug: string | null;
      }
  > | null;
  mainImage: {
    asset: {
      _id: string;
      _type: 'sanity.imageAsset';
      _createdAt: string;
      _updatedAt: string;
      _rev: string;
      originalFilename?: string;
      label?: string;
      title?: string;
      description?: string;
      altText?: string;
      sha1hash?: string;
      extension?: string;
      mimeType?: string;
      size?: number;
      assetId?: string;
      uploadId?: string;
      path?: string;
      url?: string;
      metadata: {
        lqip: string | null;
        dimensions: SanityImageDimensions | null;
      } | null;
      source?: SanityAssetSourceData;
      alt: string | null;
    } | null;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  } | null;
  slug: string | null;
  title: string | null;
}>;
// Variable: COUNTRY_LIST_QUERY
// Query: *[_type == "location" && type == "country"] {    _id,    _rev,    _type,    _createdAt,    _updatedAt,    name,    nameLocalised,    type,    emoji,    countryCode,    "slug": slug.current,  }
export type COUNTRY_LIST_QUERYResult = Array<{
  _id: string;
  _rev: string;
  _type: 'location';
  _createdAt: string;
  _updatedAt: string;
  name: string | null;
  nameLocalised: string | null;
  type: 'city' | 'country' | null;
  emoji: string | null;
  countryCode: string | null;
  slug: string | null;
}>;
// Variable: COUNTRY_SLUG_QUERY
// Query: *[_type == "location" && type == "country"].slug.current
export type COUNTRY_SLUG_QUERYResult = Array<string | null>;
// Variable: COUNTRY_BY_SLUG_QUERY
// Query: *[_type == "location" && type == "country" && slug.current == $slug][0] {    _id,    _rev,    _type,    _createdAt,    _updatedAt,    name,    nameLocalised,    type,    emoji,    "slug": slug.current,    type == 'country' => {      countryCode,    },    "posts": *[_type=="post" && references(^._id)]|order(_createdAt desc) {      _id,      _rev,      _type,      _createdAt,      _updatedAt,      locations[]-> {  _id,  _rev,  _type,  _createdAt,  _updatedAt,  name,  nameLocalised,  type,  emoji,  "slug": slug.current,  type == 'country' => {    countryCode,  },},      mainImage {    ...,    asset -> {      ...,      "alt": altText,      metadata {        lqip,        dimensions      },    },  },      "slug": slug.current,      title,    },  }
export type COUNTRY_BY_SLUG_QUERYResult =
  | {
      _id: string;
      _rev: string;
      _type: 'location';
      _createdAt: string;
      _updatedAt: string;
      name: string | null;
      nameLocalised: string | null;
      type: 'city' | 'country' | null;
      emoji: string | null;
      slug: string | null;
      countryCode: string | null;
      posts: Array<{
        _id: string;
        _rev: string;
        _type: 'post';
        _createdAt: string;
        _updatedAt: string;
        locations: Array<
          | {
              _id: string;
              _rev: string;
              _type: 'location';
              _createdAt: string;
              _updatedAt: string;
              name: string | null;
              nameLocalised: string | null;
              type: 'city' | 'country' | null;
              emoji: string | null;
              slug: string | null;
              countryCode: string | null;
            }
          | {
              _id: string;
              _rev: string;
              _type: 'location';
              _createdAt: string;
              _updatedAt: string;
              name: string | null;
              nameLocalised: string | null;
              type: 'city' | 'country' | null;
              emoji: string | null;
              slug: string | null;
            }
        > | null;
        mainImage: {
          asset: {
            _id: string;
            _type: 'sanity.imageAsset';
            _createdAt: string;
            _updatedAt: string;
            _rev: string;
            originalFilename?: string;
            label?: string;
            title?: string;
            description?: string;
            altText?: string;
            sha1hash?: string;
            extension?: string;
            mimeType?: string;
            size?: number;
            assetId?: string;
            uploadId?: string;
            path?: string;
            url?: string;
            metadata: {
              lqip: string | null;
              dimensions: SanityImageDimensions | null;
            } | null;
            source?: SanityAssetSourceData;
            alt: string | null;
          } | null;
          hotspot?: SanityImageHotspot;
          crop?: SanityImageCrop;
          _type: 'image';
        } | null;
        slug: string | null;
        title: string | null;
      }>;
    }
  | {
      _id: string;
      _rev: string;
      _type: 'location';
      _createdAt: string;
      _updatedAt: string;
      name: string | null;
      nameLocalised: string | null;
      type: 'city' | 'country' | null;
      emoji: string | null;
      slug: string | null;
      posts: Array<{
        _id: string;
        _rev: string;
        _type: 'post';
        _createdAt: string;
        _updatedAt: string;
        locations: Array<
          | {
              _id: string;
              _rev: string;
              _type: 'location';
              _createdAt: string;
              _updatedAt: string;
              name: string | null;
              nameLocalised: string | null;
              type: 'city' | 'country' | null;
              emoji: string | null;
              slug: string | null;
              countryCode: string | null;
            }
          | {
              _id: string;
              _rev: string;
              _type: 'location';
              _createdAt: string;
              _updatedAt: string;
              name: string | null;
              nameLocalised: string | null;
              type: 'city' | 'country' | null;
              emoji: string | null;
              slug: string | null;
            }
        > | null;
        mainImage: {
          asset: {
            _id: string;
            _type: 'sanity.imageAsset';
            _createdAt: string;
            _updatedAt: string;
            _rev: string;
            originalFilename?: string;
            label?: string;
            title?: string;
            description?: string;
            altText?: string;
            sha1hash?: string;
            extension?: string;
            mimeType?: string;
            size?: number;
            assetId?: string;
            uploadId?: string;
            path?: string;
            url?: string;
            metadata: {
              lqip: string | null;
              dimensions: SanityImageDimensions | null;
            } | null;
            source?: SanityAssetSourceData;
            alt: string | null;
          } | null;
          hotspot?: SanityImageHotspot;
          crop?: SanityImageCrop;
          _type: 'image';
        } | null;
        slug: string | null;
        title: string | null;
      }>;
    }
  | null;
// Variable: DOCUMENT_SEO_DATA_BY_ID
// Query: *[_id == $id][0] {   "ogTitle": coalesce(    seo.openGraph.title,    seo.metaTitle,    title,    name,    *[_id == 'homepage'][0].seo.openGraph.title,  ),  "ogDescription": coalesce(    seo.openGraph.description,    seo.metaDescription,    pt::text(summary),    *[_id == 'homepage'][0].seo.openGraph.description,  ),  "ogImage": coalesce(    seo.openGraph.image,    mainImage,    *[_id == 'homepage'][0].seo.openGraph.image,  ).asset->url + "?w=600&h=600&fit=crop",  "metaTitle": coalesce(    seo.metaTitle,    title,    name,    *[_id == 'homepage'][0].seo.metaTitle,  ),  "metaDescription": coalesce(    seo.metaDescription,    pt::text(summary),    *[_id == 'homepage'][0].seo.metaDescription,  ) }
export type DOCUMENT_SEO_DATA_BY_IDResult =
  | {
      ogTitle: null | string;
      ogDescription: null | string;
      ogImage: null | string;
      metaTitle: null | string;
      metaDescription: null | string;
    }
  | {
      ogTitle: string | null;
      ogDescription: string | null;
      ogImage: string | null;
      metaTitle: string | null;
      metaDescription: string | null;
    }
  | null;
// Variable: DOCUMENT_SEO_DATA_BY_SLUG
// Query: *[_type == $documentType && slug.current == $slug][0] {   "ogTitle": coalesce(    seo.openGraph.title,    seo.metaTitle,    title,    name,    *[_id == 'homepage'][0].seo.openGraph.title,  ),  "ogDescription": coalesce(    seo.openGraph.description,    seo.metaDescription,    pt::text(summary),    *[_id == 'homepage'][0].seo.openGraph.description,  ),  "ogImage": coalesce(    seo.openGraph.image,    mainImage,    *[_id == 'homepage'][0].seo.openGraph.image,  ).asset->url + "?w=600&h=600&fit=crop",  "metaTitle": coalesce(    seo.metaTitle,    title,    name,    *[_id == 'homepage'][0].seo.metaTitle,  ),  "metaDescription": coalesce(    seo.metaDescription,    pt::text(summary),    *[_id == 'homepage'][0].seo.metaDescription,  ) }
export type DOCUMENT_SEO_DATA_BY_SLUGResult =
  | {
      ogTitle: null | string;
      ogDescription: null | string;
      ogImage: null | string;
      metaTitle: null | string;
      metaDescription: null | string;
    }
  | {
      ogTitle: string | null;
      ogDescription: string | null;
      ogImage: string | null;
      metaTitle: string | null;
      metaDescription: string | null;
    }
  | null;

// Query TypeMap
import '@sanity/client';
declare module '@sanity/client' {
  interface SanityQueries {
    '\n  *[_type=="post"]|order(_createdAt desc)[0...$limit] {\n    _id,\n    _rev,\n    _type,\n    _createdAt,\n    _updatedAt,\n    locations[]-> {\n  _id,\n  _rev,\n  _type,\n  _createdAt,\n  _updatedAt,\n  name,\n  nameLocalised,\n  type,\n  emoji,\n  "slug": slug.current,\n  type == \'country\' => {\n    countryCode,\n  },\n},\n    mainImage {\n    ...,\n    asset -> {\n      ...,\n      "alt": altText,\n      metadata {\n        lqip,\n        dimensions\n      },\n    },\n  }\n,\n    "slug": slug.current,\n    title,\n  }\n': POST_TEASER_QUERYResult;
    '\n  *[_type=="post"].slug.current\n': POST_SLUG_QUERYResult;
    '\n  *[_type=="post" && slug.current == $slug][0] {\n    _id,\n    _rev,\n    _type,\n    _createdAt,\n    _updatedAt,\n    body,\n    "bodyHTML": pt::text(body),\n    credits[] {\n      ...,\n      person-> {\n        _id,\n        fullName,\n        website,\n      },\n    },\n    gallery,\n    locations[]-> {\n  _id,\n  _rev,\n  _type,\n  _createdAt,\n  _updatedAt,\n  name,\n  nameLocalised,\n  type,\n  emoji,\n  "slug": slug.current,\n  type == \'country\' => {\n    countryCode,\n  },\n},\n    mainImage {\n    ...,\n    asset -> {\n      ...,\n      "alt": altText,\n      metadata {\n        lqip,\n        dimensions\n      },\n    },\n  }\n,\n    "metaDescription": pt::text(summary),\n    "morePosts": *[_type=="post" && _id != ^._id]|order(_createdAt desc)[0...6] {\n      _id,\n      _rev,\n      _type,\n      _createdAt,\n      _updatedAt,\n      mainImage {\n    ...,\n    asset -> {\n      ...,\n      "alt": altText,\n      metadata {\n        lqip,\n        dimensions\n      },\n    },\n  }\n,\n      "slug": slug.current,\n      title,\n    },\n    "slug": slug.current,\n    summary,\n    "summaryHTML": pt::text(summary),\n    title,\n  }\n': POST_BY_SLUG_QUERYResult;
    '\n  *[_type == "post" && (\n    title match $query ||\n    locations[]->name match $query ||\n    summary[].children[].text match $query ||\n    body[].children[].text match $query\n  )]\n  |score(\n    pt::text(body) match $query,\n    boost(title match $query, 3),\n    boost(pt::text(summary) match $query, 5),\n  )\n  |order(_score desc)\n  {\n    _id,\n    _rev,\n    _type,\n    _createdAt,\n    _updatedAt,\n    locations[]-> {\n  _id,\n  _rev,\n  _type,\n  _createdAt,\n  _updatedAt,\n  name,\n  nameLocalised,\n  type,\n  emoji,\n  "slug": slug.current,\n  type == \'country\' => {\n    countryCode,\n  },\n},\n    mainImage {\n    ...,\n    asset -> {\n      ...,\n      "alt": altText,\n      metadata {\n        lqip,\n        dimensions\n      },\n    },\n  }\n,\n    "slug": slug.current,\n    title,\n  }\n': POST_SEARCH_QUERYResult;
    '\n  *[_type == "location" && type == "country"] {\n    _id,\n    _rev,\n    _type,\n    _createdAt,\n    _updatedAt,\n    name,\n    nameLocalised,\n    type,\n    emoji,\n    countryCode,\n    "slug": slug.current,\n  }\n': COUNTRY_LIST_QUERYResult;
    '\n  *[_type == "location" && type == "country"].slug.current\n': COUNTRY_SLUG_QUERYResult;
    '\n  *[_type == "location" && type == "country" && slug.current == $slug][0] {\n    _id,\n    _rev,\n    _type,\n    _createdAt,\n    _updatedAt,\n    name,\n    nameLocalised,\n    type,\n    emoji,\n    "slug": slug.current,\n    type == \'country\' => {\n      countryCode,\n    },\n    "posts": *[_type=="post" && references(^._id)]|order(_createdAt desc) {\n      _id,\n      _rev,\n      _type,\n      _createdAt,\n      _updatedAt,\n      locations[]-> {\n  _id,\n  _rev,\n  _type,\n  _createdAt,\n  _updatedAt,\n  name,\n  nameLocalised,\n  type,\n  emoji,\n  "slug": slug.current,\n  type == \'country\' => {\n    countryCode,\n  },\n},\n      mainImage {\n    ...,\n    asset -> {\n      ...,\n      "alt": altText,\n      metadata {\n        lqip,\n        dimensions\n      },\n    },\n  }\n,\n      "slug": slug.current,\n      title,\n    },\n  }\n': COUNTRY_BY_SLUG_QUERYResult;
    '\n  *[_id == $id][0] { \n  "ogTitle": coalesce(\n    seo.openGraph.title,\n    seo.metaTitle,\n    title,\n    name,\n    *[_id == \'homepage\'][0].seo.openGraph.title,\n  ),\n  "ogDescription": coalesce(\n    seo.openGraph.description,\n    seo.metaDescription,\n    pt::text(summary),\n    *[_id == \'homepage\'][0].seo.openGraph.description,\n  ),\n  "ogImage": coalesce(\n    seo.openGraph.image,\n    mainImage,\n    *[_id == \'homepage\'][0].seo.openGraph.image,\n  ).asset->url + "?w=600&h=600&fit=crop",\n  "metaTitle": coalesce(\n    seo.metaTitle,\n    title,\n    name,\n    *[_id == \'homepage\'][0].seo.metaTitle,\n  ),\n  "metaDescription": coalesce(\n    seo.metaDescription,\n    pt::text(summary),\n    *[_id == \'homepage\'][0].seo.metaDescription,\n  )\n }\n': DOCUMENT_SEO_DATA_BY_IDResult;
    '\n  *[_type == $documentType && slug.current == $slug][0] { \n  "ogTitle": coalesce(\n    seo.openGraph.title,\n    seo.metaTitle,\n    title,\n    name,\n    *[_id == \'homepage\'][0].seo.openGraph.title,\n  ),\n  "ogDescription": coalesce(\n    seo.openGraph.description,\n    seo.metaDescription,\n    pt::text(summary),\n    *[_id == \'homepage\'][0].seo.openGraph.description,\n  ),\n  "ogImage": coalesce(\n    seo.openGraph.image,\n    mainImage,\n    *[_id == \'homepage\'][0].seo.openGraph.image,\n  ).asset->url + "?w=600&h=600&fit=crop",\n  "metaTitle": coalesce(\n    seo.metaTitle,\n    title,\n    name,\n    *[_id == \'homepage\'][0].seo.metaTitle,\n  ),\n  "metaDescription": coalesce(\n    seo.metaDescription,\n    pt::text(summary),\n    *[_id == \'homepage\'][0].seo.metaDescription,\n  )\n }\n': DOCUMENT_SEO_DATA_BY_SLUGResult;
  }
}
