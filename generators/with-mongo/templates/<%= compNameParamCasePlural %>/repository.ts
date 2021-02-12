import { MyError } from '@boringcodes/utils/error';

import { <%= compNamePascalCase %> } from './types';
import Model, { Document } from './model';

const transform = (document: Document): <%= compNamePascalCase %> => {
  const { _id, ...restObject } = document.toObject({
    virtuals: true,
    versionKey: false,
  });

  return restObject;
};

const list = async (): Promise<<%= compNamePascalCase %>[]> => {
  // list documents
  const documents = await Model.find();

  return documents.map(transform);
};

const create = async (object: Omit<<%= compNamePascalCase %>, 'id'>): Promise<<%= compNamePascalCase %>> => {
  // create document
  const document = new Model(object);
  await document.save();

  return transform(document);
};

const get = async (id: string): Promise<<%= compNamePascalCase %>> => {
  // get document
  const document = await Model.findById(id).exec();
  if (document === null) {
    throw new MyError('Document not found');
  }

  return transform(document);
};

const updatePartial = async (id: string, object: <%= compNamePascalCase %>): Promise<<%= compNamePascalCase %>> => {
  // get document
  const document = await Model.findById(id).exec();
  if (document === null) {
    throw new MyError('Document not found');
  }

  // update partial document
  document.set(object);
  await document.save();

  return transform(document);
};

const update = async (id: string, object: <%= compNamePascalCase %>): Promise<<%= compNamePascalCase %>> => {
  // get document
  const document = await Model.findById(id).exec();
  if (document === null) {
    throw new MyError('Document not found');
  }

  // update document
  document.overwrite(object);
  await document.save();

  return transform(document);
};

const del = async (id: string): Promise<<%= compNamePascalCase %>> => {
  // get document
  const document = await Model.findById(id).exec();
  if (document === null) {
    throw new MyError('Document not found');
  }

  // delete document
  await Model.deleteOne({ _id: id }).exec();

  return transform(document);
};

export default { list, create, get, updatePartial, update, del };
