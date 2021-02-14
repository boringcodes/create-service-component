import {
  Model as SequelizeModel,
  ModelAttributes,
  ModelOptions,
  DataTypes,
} from 'sequelize';

import { <%= compNamePascalCase %> } from './types';
import { ENTITY } from './constants';

interface Model extends SequelizeModel<<%= compNamePascalCase %>, Omit<<%= compNamePascalCase %>, 'id'>>, <%= compNamePascalCase %> {}

const name = ENTITY;

const attributes: ModelAttributes<Model> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  // TODO: add more fields
};

const options: ModelOptions<SequelizeModel> = {};

export default { name, attributes, options };
export { Model };
