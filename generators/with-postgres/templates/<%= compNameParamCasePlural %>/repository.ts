import { MyError } from '@boringcodes/utils/error';

import postgres from '../../db/postgres';
import { <%= compNamePascalCase %> } from './types';
import model, { Instance, Model } from './model';

const list = async (): Promise<<%= compNamePascalCase %>[]> => {
  // list instances
  const instances = await getModel().findAll();

  return instances.map(transform);
};

const create = async (object: Omit<<%= compNamePascalCase %>, 'id'>): Promise<<%= compNamePascalCase %>> => {
  // create instance
  const instance = getModel().build(object);
  await instance.save();

  return transform(instance);
};

const get = async (id: number): Promise<<%= compNamePascalCase %>> => {
  // get instance
  const instance = await getModel().findByPk(id);
  if (instance === null) {
    throw new MyError('Instance not found');
  }

  return transform(instance);
};

const update = async (
  id: number,
  object: Omit<<%= compNamePascalCase %>, 'id'>,
): Promise<<%= compNamePascalCase %>> => {
  // get instance
  const instance = await getModel().findByPk(id);
  if (instance === null) {
    throw new MyError('Instance not found');
  }

  // update instance
  instance.set(object);
  await instance.save();

  return transform(instance);
};

const del = async (id: number): Promise<<%= compNamePascalCase %>> => {
  // get instance
  const instance = await getModel().findByPk(id);
  if (instance === null) {
    throw new MyError('Instance not found');
  }

  // delete instance
  await instance.destroy();

  return transform(instance);
};

// get model
const getModel = (): Model => {
  return postgres.getModel(model.name) as Model;
};

// transform instance to <%= compNamePascalCase %>
const transform = (instance: Instance): <%= compNamePascalCase %> => {
  return instance.toJSON() as <%= compNamePascalCase %>;
};

export default { list, create, get, update, del };
