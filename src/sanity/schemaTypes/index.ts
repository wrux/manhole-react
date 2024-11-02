import { type SchemaTypeDefinition } from 'sanity';
import gallery from './gallery';
import homepage from './homepage';
import location from './location';
import person from './person';
import post from './post';
import settings from './settings';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [gallery, homepage, location, person, post, settings],
};
