import { MyError } from '@boringcodes/utils/error';

import { <%= compNamePascalCase %> } from './types';
import Model, { Instance } from './model';

const list = async (): Promise<<%= compNamePascalCase %>[]> => {
  // list instances
  const instances = await Model.findAll();

  return instances.map(transform);
};

const create = async (object: Omit<<%= compNamePascalCase %>, 'id'>): Promise<<%= compNamePascalCase %>> => {
  // create instance
  const instance = Model.build(object);
  await instance.save();

  return transform(instance);
};

const get = async (id: number): Promise<<%= compNamePascalCase %>> => {
  // get instance
  const instance = await Model.findByPk(id);
  if (instance === null) {
    throw new MyError('Instance not found');
  }

  return transform(instance);
};

const updatePartial = async (
  id: number,
  object: Omit<<%= compNamePascalCase %>, 'id'>,
): Promise<<%= compNamePascalCase %>> => {
  // get instance
  const instance = await Model.findByPk(id);
  if (instance === null) {
    throw new MyError('Instance not found');
  }

  // update partial instance
  instance.set(object);
  await instance.save();

  return transform(instance);
};

const update = async (
  id: number,
  object: Omit<<%= compNamePascalCase %>, 'id'>,
): Promise<<%= compNamePascalCase %>> => {
  // get instance
  const instance = await Model.findByPk(id);
  if (instance === null) {
    throw new MyError('Instance not found');
  }

  // update instance
  instance.set({ id, ...object }, { reset: true });
  await instance.save();

  return transform(instance);
};

const del = async (id: number): Promise<<%= compNamePascalCase %>> => {
  // get instance
  const instance = await Model.findByPk(id);
  if (instance === null) {
    throw new MyError('Instance not found');
  }

  // delete instance
  await instance.destroy();

  return transform(instance);
};

// transform instance to json object
const transform = (instance: Instance): <%= compNamePascalCase %> => {
  return instance.toJSON() as <%= compNamePascalCase %>;
};

export default { list, create, get, updatePartial, update, del };
