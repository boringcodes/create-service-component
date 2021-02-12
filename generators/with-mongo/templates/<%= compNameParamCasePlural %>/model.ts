import mongoose, {
  Schema,
  Document as MongooseDocument,
  Model as MongooseModel,
} from 'mongoose';

import { <%= compNamePascalCase %> } from './types';
import { ENTITY } from './constants';

interface Document extends MongooseDocument, Omit<<%= compNamePascalCase %>, 'id'> {}
interface Model extends MongooseModel<Document> {}

const schema = new Schema<Document>({
  name: String,
});

export default mongoose.model<Document, Model>(ENTITY, schema);
export { Model, Document };
