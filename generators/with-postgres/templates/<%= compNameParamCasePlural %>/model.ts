import {
  Model as SequelizeModel,
  ModelAttributes,
  ModelOptions,
  ModelCtor,
  DataTypes,
} from 'sequelize';

import { <%= compNamePascalCase %> } from './types';
import { ENTITY } from './constants';

interface Instance extends SequelizeModel<<%= compNamePascalCase %>, Omit<<%= compNamePascalCase %>, 'id'>>, <%= compNamePascalCase %> {}
interface Model extends ModelCtor<Instance> {}

const name = ENTITY;

const schema: ModelAttributes<Instance> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  // TODO: add more fields
};

const options: ModelOptions<SequelizeModel> = {};

export default { name, schema, options };
export { Instance, Model };
