import { type SchemaTypeDefinition } from "sanity";
import location from "./location";
import person from "./person";
import post from "./post";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [location, person, post],
};
