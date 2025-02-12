import { BookOpen, Camera, Pencil, Person } from '@phosphor-icons/react';
import { format, parseISO } from 'date-fns';
import { defineField, defineType } from 'sanity';

const capitalized = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const icons = {
  author: Person,
  photo: Camera,
  edit: Pencil,
};

export default defineType({
  name: 'post',
  title: 'Post',
  icon: BookOpen,
  type: 'document',
  groups: [
    { name: 'general', title: 'General', default: true },
    { name: 'metadata', title: 'Metadata' },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
      group: 'general',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
      group: 'general',
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      description: 'Post summary without too much detail',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
      group: 'general',
    }),
    defineField({
      name: 'locations',
      title: 'Locations',
      type: 'array',
      of: [
        defineField({
          name: 'location',
          type: 'reference',
          weak: true,
          to: [{ type: 'location' }],
          validation: (rule) => rule.required(),
        }),
      ],
      group: 'general',
    }),
    {
      name: 'credits',
      title: 'Credits',
      type: 'array',
      of: [
        defineField({
          title: 'Credit',
          name: 'credit',
          type: 'object',
          fields: [
            defineField({
              title: 'Type',
              name: 'type',
              type: 'string',
              options: {
                list: [
                  { title: 'Author', value: 'author' },
                  { title: 'Photo', value: 'photo' },
                  { title: 'Edit', value: 'edit' },
                ],
                layout: 'radio',
              },
              initialValue: 'author',
              validation: (rule) => rule.required(),
            }),
            defineField({
              title: 'Person',
              name: 'person',
              type: 'reference',
              weak: true,
              to: [{ type: 'person' }],
              validation: (rule) => rule.required(),
            }),
            defineField({
              title: 'Note',
              name: 'note',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              title: 'person.fullName',
              note: 'note',
              type: 'type',
            },
            prepare: ({
              title,
              note,
              type,
            }: {
              title: string;
              note?: string;
              type: keyof typeof icons;
            }) => ({
              title,
              subtitle: note
                ? `${capitalized(type)}: ${note}`
                : capitalized(type),
              media: icons?.[type],
            }),
          },
        }),
      ],
      group: 'general',
    },
    defineField({
      title: 'Main Image',
      name: 'mainImage',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
      group: 'general',
    }),
    // defineField({
    //   name: 'gallery',
    //   title: 'Gallery',
    //   type: 'array',
    //   of: [
    //     defineField({
    //       title: 'Image',
    //       name: 'image',
    //       type: 'image',
    //       options: { hotspot: true },
    //       fields: [
    //         {
    //           name: 'caption',
    //           type: 'string',
    //           title: 'Caption',
    //         },
    //       ],
    //     }),
    //   ],
    //   group: 'general',
    // }),
  ],
  preview: {
    select: {
      _createdAt: '_createdAt',
      title: 'title',
      media: 'mainImage',
    },
    prepare({ _createdAt, title, media }) {
      return {
        title,
        media,
        subtitle: `Posted on ${format(parseISO(_createdAt), 'LLL d, yyyy')}`,
      };
    },
  },
});
