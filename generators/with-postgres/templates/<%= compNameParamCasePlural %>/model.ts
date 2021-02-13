import { Model as SequelizeModel, ModelCtor, DataTypes } from 'sequelize';

import postgres from '../../db/postgres';
import { <%= compNamePascalCase %> } from './types';
import { ENTITY } from './constants';

interface Instance extends SequelizeModel<<%= compNamePascalCase %>, Omit<<%= compNamePascalCase %>, 'id'>>, <%= compNamePascalCase %> {}
interface Model extends ModelCtor<Instance> {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  // TODO: add more fields here
};

export default postgres.createModel<Instance, Model>(ENTITY, schema, {
  timestamps: false,
});
export { Instance, Model };
