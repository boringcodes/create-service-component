import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { HttpError } from '@boringcodes/utils/error';

import { <%= compNamePascalCase %> } from './types';
import { ENTITY } from './constants';

interface MyRequest extends Request {
  readonly [ENTITY]: Required<<%= compNamePascalCase %>>;
}

const getById = (req: Request, _: Response, next: NextFunction): void => {
  try {
    const { id = '' } = req.params;
    if (id === '') {
      throw new HttpError(StatusCodes.BAD_REQUEST, 'Invalid resource Id');
    }

    // TODO: get object by id
    const object = {};
    Object.assign(req, { [ENTITY]: object });

    next();
  } catch (err) {
    next(new HttpError(err.code ?? StatusCodes.INTERNAL_SERVER_ERROR, err));
  }
};

const list = (_: Request, res: Response, next: NextFunction): void => {
  try {
    // TODO: list objects
    const objects: <%= compNamePascalCase %>[] = [];

    res.send(objects);
  } catch (err) {
    next(new HttpError(err.code ?? StatusCodes.INTERNAL_SERVER_ERROR, err));
  }
};

const create = (req: Request, res: Response, next: NextFunction): void => {
  try {
    // TODO: create object
    const object = { ...req.body };

    res.send(object);
  } catch (err) {
    next(new HttpError(err.code ?? StatusCodes.INTERNAL_SERVER_ERROR, err));
  }
};

const get = (req: Request, res: Response, next: NextFunction): void => {
  try {
    // TODO: get object
    res.send((req as MyRequest)[ENTITY]);
  } catch (err) {
    next(new HttpError(err.code ?? StatusCodes.INTERNAL_SERVER_ERROR, err));
  }
};

const updatePartial = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  try {
    // TODO: update partial object
    const object = { ...(req as MyRequest)[ENTITY], ...req.body };

    res.send(object);
  } catch (err) {
    next(new HttpError(err.code ?? StatusCodes.INTERNAL_SERVER_ERROR, err));
  }
};

const update = (req: Request, res: Response, next: NextFunction): void => {
  try {
    // TODO: update object
    const object = { ...req.body };

    res.send(object);
  } catch (err) {
    next(new HttpError(err.code ?? StatusCodes.INTERNAL_SERVER_ERROR, err));
  }
};

const del = (req: Request, res: Response, next: NextFunction): void => {
  try {
    // TODO: delete object
    res.send((req as MyRequest)[ENTITY]);
  } catch (err) {
    next(new HttpError(err.code ?? StatusCodes.INTERNAL_SERVER_ERROR, err));
  }
};

export default { getById, list, create, get, updatePartial, update, del };
