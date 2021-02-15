import { MyError } from '@boringcodes/utils/error';

import postgres from '../../db/postgres';
import { <%= compNamePascalCase %> } from './types';
import model, { Document, Model } from './model';

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

// get model
const getModel = (): Model => {
  return postgres.getModel(model.name) as Model;
};

// transform document to <%= compNamePascalCase %>
const transform = (document: Document): <%= compNamePascalCase %> => {
  return document.toJSON() as <%= compNamePascalCase %>;
};

export default { list, create, get, update, del };
