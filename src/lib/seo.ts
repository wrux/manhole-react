// import {
//   MetaTag as NextSeoMetaTag,
//   OpenGraph as NextSeoOpenGraph,
// } from 'next-seo/lib/types';
// import {
//   CustomImageType,
//   MetaAttributeType,
//   MetaTagType,
//   OpenGraphType,
// } from '../../../lib/sanity/types';

// export const getOpenGraph = (args: OpenGraphType) => {
//   const { description, image, title, _type, siteName, url } = args;
//   const getImage = image ? resolveImage(image) : null;
//   const values = {
//     _type,
//     description,
//     siteName,
//     url,
//     title,
//     images: [{ url: getImage ?? '' }],
//   };
//   return values as NextSeoOpenGraph;
// };

// export const getMetaObjects = (
//   tags: MetaTagType[],
//   allowIndexing?: boolean,
// ) => {
//   const tagArray: NextSeoMetaTag[] = [];
//   tags.map((tag) => {
//     const excludeTag =
//       !allowIndexing &&
//       !!tag.metaAttributes?.find(
//         (i) =>
//           i?.attributeValueString?.includes('noindex') ||
//           i?.attributeValueString?.includes('nofollow'),
//       );
//     if (!excludeTag) {
//       const metaTag = getMetaAttribute(tag?.metaAttributes);
//       if (metaTag) {
//         tagArray.push(metaTag);
//       }
//     }
//   });
//   return tagArray;
// };

// export const resolveImage = (image?: CustomImageType) => {
//   return image?.asset?.url ?? '';
// };

// export const getMetaAttribute = (attrs: MetaAttributeType[] | undefined) => {
//   if (!attrs) {
//     return null;
//   }
//   const obj: Record<string, string> = {};
//   attrs.map((i) => {
//     Object.assign(obj, {
//       [i?.attributeKey as string]:
//         i.attributeType == 'image'
//           ? resolveImage(i?.attributeValueImage)
//           : i.attributeValueString,
//     });
//   });
//   return obj as unknown as NextSeoMetaTag;
// };
