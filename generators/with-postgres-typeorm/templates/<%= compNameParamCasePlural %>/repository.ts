import { getRepository } from 'typeorm';
import { MyError } from '@boringcodes/utils/error';

import { <%= compNamePascalCase %> } from './types';
import Model from './model';

const list = async (): Promise<<%= compNamePascalCase %>[]> => {
  // list documents
  const documents = await getRepository(Model).find();

  return documents.map(transform);
};

const create = async (object: Omit<<%= compNamePascalCase %>, 'id'>): Promise<<%= compNamePascalCase %>> => {
  // create document
  const document = getRepository(Model).create(object);
  await getRepository(Model).save(document);

  return transform(document);
};

const get = async (id: number): Promise<<%= compNamePascalCase %>> => {
  // get document
  const document = await getRepository(Model).findOne(id);
  if (document === undefined) {
    throw new MyError('Row not found');
  }

  return transform(document);
};

const update = async (
  id: number,
  object: Omit<<%= compNamePascalCase %>, 'id'>,
): Promise<<%= compNamePascalCase %>> => {
  // get document
  const document = await getRepository(Model).findOne(id);
  if (document === undefined) {
    throw new MyError('Row not found');
  }

  // update document
  getRepository(Model).merge(document, object);
  await getRepository(Model).save(document);

  return transform(document);
};

const del = async (id: number): Promise<<%= compNamePascalCase %>> => {
  // get document
  const document = await getRepository(Model).findOne(id);
  if (document === undefined) {
    throw new MyError('Row not found');
  }

  // delete document
  await getRepository(Model).remove(document);

  return transform(document);
};

// transform document to <%= compNamePascalCase %>
const transform = (document: Model): <%= compNamePascalCase %> => {
  return document;
};

export default { list, create, get, update, del };
