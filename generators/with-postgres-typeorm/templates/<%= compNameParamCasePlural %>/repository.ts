import { getRepository } from 'typeorm';
import { MyError } from '@boringcodes/utils/error';

import { <%= compNamePascalCase %> } from './types';
import Model from './model';

const list = async (): Promise<<%= compNamePascalCase %>[]> => {
  // list documents
  return await getRepository(Model).find();
};

const create = async (data: Omit<<%= compNamePascalCase %>, 'id'>): Promise<<%= compNamePascalCase %>> => {
  // create document
  const document = getRepository(Model).create(data);
  return await getRepository(Model).save(document);
};

const get = async (id: number): Promise<<%= compNamePascalCase %>> => {
  // get document
  const document = await getRepository(Model).findOne(id);
  if (document === undefined) {
    throw new MyError('Document not found');
  }

  return document;
};

const update = async (
  id: number,
  data: Omit<<%= compNamePascalCase %>, 'id'>,
): Promise<<%= compNamePascalCase %>> => {
  // get document
  const document = await getRepository(Model).findOne(id);
  if (document === undefined) {
    throw new MyError('Document not found');
  }

  // update document
  getRepository(Model).merge(document, data);

  return await getRepository(Model).save(document);
};

const del = async (id: number): Promise<<%= compNamePascalCase %>> => {
  // get document
  const document = await getRepository(Model).findOne(id);
  if (document === undefined) {
    throw new MyError('Document not found');
  }

  // delete document
  return await getRepository(Model).remove(document);
};

export default { list, create, get, update, del };
