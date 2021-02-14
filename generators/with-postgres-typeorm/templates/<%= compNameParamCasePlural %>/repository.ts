import { getRepository } from 'typeorm';
import { MyError } from '@boringcodes/utils/error';

import { <%= compNamePascalCase %> } from './types';
import Schema from './schema';

const list = async (): Promise<<%= compNamePascalCase %>[]> => {
  // list documents
  const documents = await getRepository(Schema).find();

  return documents.map(transform);
};

const create = async (object: Omit<<%= compNamePascalCase %>, 'id'>): Promise<<%= compNamePascalCase %>> => {
  // create document
  const document = getRepository(Schema).create(object);
  await getRepository(Schema).save(document);

  return transform(document);
};

const get = async (id: number): Promise<<%= compNamePascalCase %>> => {
  // get document
  const document = await getRepository(Schema).findOne(id);
  if (document === undefined) {
    throw new MyError('Document not found');
  }

  return transform(document);
};

const update = async (
  id: number,
  object: Omit<<%= compNamePascalCase %>, 'id'>,
): Promise<<%= compNamePascalCase %>> => {
  // get document
  const document = await getRepository(Schema).findOne(id);
  if (document === undefined) {
    throw new MyError('Document not found');
  }

  // update document
  getRepository(Schema).merge(document, object);
  await getRepository(Schema).save(document);

  return transform(document);
};

const del = async (id: number): Promise<<%= compNamePascalCase %>> => {
  // get document
  const document = await getRepository(Schema).findOne(id);
  if (document === undefined) {
    throw new MyError('Document not found');
  }

  // delete document
  await getRepository(Schema).remove(document);

  return transform(document);
};

// transform document to <%= compNamePascalCase %>
const transform = (document: Schema): <%= compNamePascalCase %> => {
  return document;
};

export default { list, create, get, update, del };
