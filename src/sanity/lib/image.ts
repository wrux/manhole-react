import createImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import {
  ImageUrlBuilder,
  UseNextSanityImageBuilderOptions,
} from 'next-sanity-image';

import { dataset, projectId } from '../env';

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset });

export const squareImageUrlBuilder = (
  imageUrlBuilder: ImageUrlBuilder,
  options: UseNextSanityImageBuilderOptions,
) =>
  imageUrlBuilder
    .width(
      options.width || Math.min(options.originalImageDimensions.width, 1920),
    )
    .height(
      options.width || Math.min(options.originalImageDimensions.width, 1920),
    )
    .fit('clip');

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};
