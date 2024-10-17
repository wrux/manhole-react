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
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
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
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Post = {
  _id: string;
  _type: "post";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  summary?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  locations?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "location";
  }>;
  credits?: Array<{
    type?: "author" | "photo" | "edit";
    person?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "person";
    };
    note?: string;
    _type: "credit";
    _key: string;
  }>;
  mainImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
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
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Person = {
  _id: string;
  _type: "person";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  fullName?: string;
  email?: string;
  website?: string;
};

export type Location = {
  _id: string;
  _type: "location";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  nameLocalised?: string;
  type?: "country" | "city";
  slug?: Slug;
  countryCode?: string;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityFileAsset | Geopoint | Post | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata | Person | Location | Slug;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/sanity/lib/queries.ts
// Variable: POST_TEASER_QUERY
// Query: *[_type=="post"]|order(_createdAt desc)[0...$limit] {    _id,    _rev,    _type,    _createdAt,    _updatedAt,    mainImage {      ...,      asset -> {        ...,        "alt": altText,        metadata {          lqip,          dimensions        },      },    },    "slug": slug.current,    title,  }
export type POST_TEASER_QUERYResult = Array<{
  _id: string;
  _rev: string;
  _type: "post";
  _createdAt: string;
  _updatedAt: string;
  mainImage: {
    asset: {
      _id: string;
      _type: "sanity.imageAsset";
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
    _type: "image";
  } | null;
  slug: string | null;
  title: string | null;
}>;
// Variable: POST_SLUG_QUERY
// Query: *[_type=="post"].slug.current
export type POST_SLUG_QUERYResult = Array<string | null>;
// Variable: POST_BY_SLUG_QUERY
// Query: *[_type=="post" && slug.current == $slug][0] {    _id,    _rev,    _type,    _createdAt,    _updatedAt,    mainImage,    "slug": slug.current,    title,  }
export type POST_BY_SLUG_QUERYResult = {
  _id: string;
  _rev: string;
  _type: "post";
  _createdAt: string;
  _updatedAt: string;
  mainImage: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
  slug: string | null;
  title: string | null;
} | null;
// Variable: COUNTRY_SLUG_QUERY
// Query: *[_type == "location" && type == "country"].slug.current
export type COUNTRY_SLUG_QUERYResult = Array<string | null>;
// Variable: COUNTRY_BY_SLUG_QUERY
// Query: *[_type == "location" && type == "country" && slug.current == $slug][0] {    _id,    _rev,    _type,    _createdAt,    _updatedAt,    countryCode,    "posts": *[_type=="post" && references(^._id)]|order(_createdAt desc) {      _id,      _rev,      _type,      _createdAt,      _updatedAt,      mainImage,      "slug": slug.current,      title,    },    "slug": slug.current,    name,    nameLocalised,  }
export type COUNTRY_BY_SLUG_QUERYResult = {
  _id: string;
  _rev: string;
  _type: "location";
  _createdAt: string;
  _updatedAt: string;
  countryCode: string | null;
  posts: Array<{
    _id: string;
    _rev: string;
    _type: "post";
    _createdAt: string;
    _updatedAt: string;
    mainImage: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    } | null;
    slug: string | null;
    title: string | null;
  }>;
  slug: string | null;
  name: string | null;
  nameLocalised: string | null;
} | null;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "\n  *[_type==\"post\"]|order(_createdAt desc)[0...$limit] {\n    _id,\n    _rev,\n    _type,\n    _createdAt,\n    _updatedAt,\n    mainImage {\n      ...,\n      asset -> {\n        ...,\n        \"alt\": altText,\n        metadata {\n          lqip,\n          dimensions\n        },\n      },\n    },\n    \"slug\": slug.current,\n    title,\n  }\n": POST_TEASER_QUERYResult;
    "\n  *[_type==\"post\"].slug.current\n": POST_SLUG_QUERYResult;
    "\n  *[_type==\"post\" && slug.current == $slug][0] {\n    _id,\n    _rev,\n    _type,\n    _createdAt,\n    _updatedAt,\n    mainImage,\n    \"slug\": slug.current,\n    title,\n  }\n": POST_BY_SLUG_QUERYResult;
    "\n  *[_type == \"location\" && type == \"country\"].slug.current\n": COUNTRY_SLUG_QUERYResult;
    "\n  *[_type == \"location\" && type == \"country\" && slug.current == $slug][0] {\n    _id,\n    _rev,\n    _type,\n    _createdAt,\n    _updatedAt,\n    countryCode,\n    \"posts\": *[_type==\"post\" && references(^._id)]|order(_createdAt desc) {\n      _id,\n      _rev,\n      _type,\n      _createdAt,\n      _updatedAt,\n      mainImage,\n      \"slug\": slug.current,\n      title,\n    },\n    \"slug\": slug.current,\n    name,\n    nameLocalised,\n  }\n": COUNTRY_BY_SLUG_QUERYResult;
  }
}
