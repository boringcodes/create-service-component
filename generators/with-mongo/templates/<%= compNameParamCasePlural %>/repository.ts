import mongoose from 'mongoose';
import { MyError } from '@boringcodes/utils/error';

import { <%= compNamePascalCase %> } from './types';
import model, { Document, Model } from './model';

const list = async (): Promise<<%= compNamePascalCase %>[]> => {
  // list documents
  const documents = await getModel().find();

  return documents.map(transform);
};

const create = async (object: Omit<<%= compNamePascalCase %>, 'id'>): Promise<<%= compNamePascalCase %>> => {
  // create document
  const document = await getModel().create(object);

  return transform(document);
};

const get = async (id: string): Promise<<%= compNamePascalCase %>> => {
  // get document
  const document = await getModel().findById(id).exec();
  if (document === null) {
    throw new MyError('Document not found');
  }

  return transform(document);
};

const update = async (
  id: string,
  object: Omit<<%= compNamePascalCase %>, 'id'>,
): Promise<<%= compNamePascalCase %>> => {
  // get document
  const document = await getModel().findById(id).exec();
  if (document === null) {
    throw new MyError('Document not found');
  }

  // update document
  document.set(object);
  await document.save();

  return transform(document);
};

const del = async (id: string): Promise<<%= compNamePascalCase %>> => {
  // get document
  const document = await getModel().findById(id).exec();
  if (document === null) {
    throw new MyError('Document not found');
  }

  // delete document
  await document.remove();

  return transform(document);
};

// get model
const getModel = (): Model => {
  return mongoose.models[model.name];
};

// transform document to <%= compNamePascalCase %>
const transform = (document: Document): <%= compNamePascalCase %> => {
  const { _id: id, ...restObject } = document.toObject({
    versionKey: false,
  });

  return { ...restObject, id };
};

export default { list, create, get, update, del };
