import { ModelCtor } from 'sequelize';
import { MyError } from '@boringcodes/utils/error';

import { <%= compNamePascalCase %> } from './types';
import model, { Model } from './model';
import postgres from '../../db/postgres';

// get model
const getModel = (): ModelCtor<Model> => {
  return postgres.getModel<Model>(model);
};

const list = async (): Promise<<%= compNamePascalCase %>[]> => {
  // list documents
  const documents = await getModel().findAll();

  return documents.map(transform);
};

const create = async (object: Omit<<%= compNamePascalCase %>, 'id'>): Promise<<%= compNamePascalCase %>> => {
  // create document
  const document = getModel().build(object);
  await document.save();

  return transform(document);
};

const get = async (id: number): Promise<<%= compNamePascalCase %>> => {
  // get document
  const document = await getModel().findByPk(id);
  if (document === null) {
    throw new MyError('Document not found');
  }

  return transform(document);
};

const update = async (
  id: number,
  object: Omit<<%= compNamePascalCase %>, 'id'>,
): Promise<<%= compNamePascalCase %>> => {
  // get document
  const document = await getModel().findByPk(id);
  if (document === null) {
    throw new MyError('Document not found');
  }

  // update document
  document.set(object);
  await document.save();

  return transform(document);
};

const del = async (id: number): Promise<<%= compNamePascalCase %>> => {
  // get document
  const document = await getModel().findByPk(id);
  if (document === null) {
    throw new MyError('Document not found');
  }

  // delete document
  await document.destroy();

  return transform(document);
};

// transform document to <%= compNamePascalCase %>
const transform = (document: Model): <%= compNamePascalCase %> => {
  return document.toJSON() as <%= compNamePascalCase %>;
};

export default { list, create, get, update, del };
