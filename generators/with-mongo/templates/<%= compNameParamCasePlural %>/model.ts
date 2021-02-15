import {
  Schema,
  Document as MongooseDocument,
  Model as MongooseModel,
} from 'mongoose';
import pluralize from 'pluralize';

import { <%= compNamePascalCase %> } from './types';
import { ENTITY } from './constants';

interface Document extends MongooseDocument, Omit<<%= compNamePascalCase %>, 'id'> {}
interface Model extends MongooseModel<Document> {}

const name = pluralize(ENTITY);

const schema = new Schema<Document>({
  name: String,
  // TODO: add more fields
});

export default { name, schema };
export { Document, Model };
