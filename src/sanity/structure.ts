import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Homepage')
        .id('homepage')
        .child(S.document().schemaType('homepage').documentId('homepage')),

      S.documentTypeListItem('location').title('Location'),
      S.documentTypeListItem('person').title('People'),
      S.documentTypeListItem('post').title('Posts'),
    ]);
