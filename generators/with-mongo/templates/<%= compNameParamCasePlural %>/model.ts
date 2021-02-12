import {
  Schema,
  Document as MongooseDocument,
  Model as MongooseModel,
} from 'mongoose';

import mongo from '../../db/mongo';
import { <%= compNamePascalCase %> } from './types';
import { ENTITY } from './constants';

interface Document extends MongooseDocument, Omit<<%= compNamePascalCase %>, 'id'> {}
interface Model extends MongooseModel<Document> {}

const schema = new Schema<Document>({
  name: String,
  // TODO: add more fields here
});

export default mongo.createModel<Document, Model>(ENTITY, schema);
export { Model, Document };
