import { HouseSimple } from '@phosphor-icons/react';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'homepage',
  type: 'document',
  icon: HouseSimple,
  title: 'Homepage',
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
      title: 'Homepage',
    }),
  },
});
