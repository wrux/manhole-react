import { type SchemaTypeDefinition } from 'sanity';
import homepage from './homepage';
import location from './location';
import person from './person';
import post from './post';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homepage, location, person, post],
};
