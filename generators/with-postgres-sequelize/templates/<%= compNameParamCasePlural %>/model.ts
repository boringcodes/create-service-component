import {
  Model as SequelizeModel,
  ModelAttributes,
  ModelOptions,
  ModelCtor,
  DataTypes,
} from 'sequelize';
import pluralize from 'pluralize';

import { <%= compNamePascalCase %> } from './types';
import { ENTITY } from './constants';

interface Document extends SequelizeModel<<%= compNamePascalCase %>, Omit<<%= compNamePascalCase %>, 'id'>>, <%= compNamePascalCase %> {}
interface Model extends ModelCtor<Document> {}

const name = pluralize(ENTITY);

const schema: ModelAttributes<Document> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  // TODO: add more fields
};

const options: ModelOptions<SequelizeModel> = {
  timestamps: false,
};

export default { name, schema, options };
export { Document, Model };
