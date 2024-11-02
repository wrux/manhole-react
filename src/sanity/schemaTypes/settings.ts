import { Gear } from '@phosphor-icons/react';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'settings',
  type: 'document',
  icon: Gear,
  title: 'Site Settings',
  fields: [
    defineField({
      name: 'Name',
      type: 'string',
      title: 'Name',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Default Seo',
      name: 'seo',
      type: 'seoMetaFields',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Site Settings',
    }),
  },
});
