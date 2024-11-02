import { Gear, HouseSimple, Image } from '@phosphor-icons/react';
import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Gallery')
        .id('gallery')
        .icon(Image)
        .child(S.document().schemaType('gallery').documentId('gallery')),
      S.listItem()
        .title('Homepage')
        .id('homepage')
        .icon(HouseSimple)
        .child(S.document().schemaType('homepage').documentId('homepage')),

      S.divider(),

      S.documentTypeListItem('location').title('Location'),
      S.documentTypeListItem('person').title('People'),
      S.documentTypeListItem('post').title('Posts'),

      S.divider(),

      S.listItem()
        .title('Site Settings')
        .id('settings')
        .icon(Gear)
        .child(S.document().schemaType('settings').documentId('settings')),
    ]);
