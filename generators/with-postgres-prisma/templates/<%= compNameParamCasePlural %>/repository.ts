import { MyError } from '@boringcodes/utils/error';

import postgres from '../../db/postgres';
import { <%= compNamePascalCase %> } from './types';

const list = async (): Promise<<%= compNamePascalCase %>[]> => {
  // list documents
  return await postgres.<%= compNameCamelCase %>.findMany();
};

const create = async (data: Omit<<%= compNamePascalCase %>, 'id'>): Promise<<%= compNamePascalCase %>> => {
  // create document
  return await postgres.<%= compNameCamelCase %>.create({ data });
};

const get = async (id: number): Promise<<%= compNamePascalCase %>> => {
  // get document
  const document = await postgres.<%= compNameCamelCase %>.findUnique({ where: { id } });
  if (document === null) {
    throw new MyError('Document not found');
  }

  return document;
};

const update = async (id: number, data: Omit<<%= compNamePascalCase %>, 'id'>): Promise<<%= compNamePascalCase %>> => {
  // get document
  const document = await postgres.<%= compNameCamelCase %>.findUnique({ where: { id } });
  if (document === null) {
    throw new MyError('Document not found');
  }

  // update document
  return await postgres.<%= compNameCamelCase %>.update({
    data,
    where: { id },
  });
};

const del = async (id: number): Promise<<%= compNamePascalCase %>> => {
  // get document
  const document = await postgres.<%= compNameCamelCase %>.findUnique({ where: { id } });
  if (document === null) {
    throw new MyError('Document not found');
  }

  // delete document
  await postgres.<%= compNameCamelCase %>.delete({ where: { id } });

  return document;
};

export default { list, create, get, update, del };
