import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { HttpError } from '@boringcodes/utils/error';

import { <%= compNamePascalCase %> } from './types';
import { ENTITY } from './constants';
import repository from './repository';

interface MyRequest extends Request {
  readonly [ENTITY]: <%= compNamePascalCase %>;
}

const getById = async (
  req: Request,
  _: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { id = '' } = req.params;
    if (id === '') {
      throw new HttpError(StatusCodes.BAD_REQUEST, 'Invalid resource Id');
    }

    try {
      // get object by id
      const object = await repository.get(id);

      // assign object to request for using in the next handlers
      Object.assign(req, { [ENTITY]: object });

      next();
    } catch (err) {
      throw new HttpError(StatusCodes.NOT_FOUND, 'Resource not found');
    }
  } catch (err) {
    next(new HttpError(err.code ?? StatusCodes.INTERNAL_SERVER_ERROR, err));
  }
};

const list = async (
  _: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    // list objects
    const objects = await repository.list();

    res.send(objects);
  } catch (err) {
    next(new HttpError(err.code ?? StatusCodes.INTERNAL_SERVER_ERROR, err));
  }
};

const create = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    // create object
    const object = await repository.create(req.body);

    res.send(object);
  } catch (err) {
    next(new HttpError(err.code ?? StatusCodes.INTERNAL_SERVER_ERROR, err));
  }
};

const get = (req: Request, res: Response, next: NextFunction): void => {
  try {
    // get object
    res.send((req as MyRequest)[ENTITY]);
  } catch (err) {
    next(new HttpError(err.code ?? StatusCodes.INTERNAL_SERVER_ERROR, err));
  }
};

const update = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    // update object
    const object = await repository.update(
      (req as MyRequest)[ENTITY].id,
      req.body,
    );

    res.send(object);
  } catch (err) {
    next(new HttpError(err.code ?? StatusCodes.INTERNAL_SERVER_ERROR, err));
  }
};

const del = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    // delete object
    const object = await repository.del((req as MyRequest)[ENTITY].id);

    res.send(object);
  } catch (err) {
    next(new HttpError(err.code ?? StatusCodes.INTERNAL_SERVER_ERROR, err));
  }
};

export default { getById, list, create, get, update, del };
