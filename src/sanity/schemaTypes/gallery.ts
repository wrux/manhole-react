import { Image } from '@phosphor-icons/react';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'gallery',
  type: 'document',
  icon: Image,
  title: 'Gallery',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Seo',
      name: 'seo',
      type: 'seoMetaFields',
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Gallery',
    }),
  },
});
