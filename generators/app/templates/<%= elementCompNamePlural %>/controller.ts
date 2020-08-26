import { Request, Response, NextFunction } from 'express';
import {
  BAD_REQUEST,
  NOT_FOUND,
  INTERNAL_SERVER_ERROR,
} from 'http-status-codes';
import { HttpError } from '@boringcodes/utils/error';

import { ENTITY } from './constants';

interface MyRequest extends Request {
  readonly [ENTITY]: any;
}

const list = async (_: Request, res: Response, next: NextFunction) => {
  try {
    // TODO: list objects
    const objects: any[] = [];

    res.send(objects);
  } catch (err) {
    next(new HttpError(err.code || INTERNAL_SERVER_ERROR, err));
  }
};

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // TODO: create object
    const object = req.body;

    res.send(object);
  } catch (err) {
    next(new HttpError(err.code || INTERNAL_SERVER_ERROR, err));
  }
};

const getById = async (req: Request, _: Response, next: NextFunction) => {
  try {
    if (!req.params.id) {
      throw new HttpError(BAD_REQUEST, 'Invalid resource Id');
    }

    // TODO: get object by id
    const object = {};
    if (!object) {
      return next(new HttpError(NOT_FOUND, 'Resource not found'));
    }
    Object.assign(req, { [ENTITY]: object });

    next();
  } catch (err) {
    next(new HttpError(err.code || INTERNAL_SERVER_ERROR, err));
  }
};

const get = (req: Request, res: Response, next: NextFunction) => {
  try {
    // TODO: get object
    res.send((req as MyRequest)[ENTITY]);
  } catch (err) {
    next(new HttpError(err.code || INTERNAL_SERVER_ERROR, err));
  }
};

const updatePartial = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // TODO: update partial object
    const object = { ...(req as MyRequest)[ENTITY], ...req.body };

    res.send(object);
  } catch (err) {
    next(new HttpError(err.code || INTERNAL_SERVER_ERROR, err));
  }
};

const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // TODO: replace object
    const object = req.body;

    res.send(object);
  } catch (err) {
    next(new HttpError(err.code || INTERNAL_SERVER_ERROR, err));
  }
};

const del = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // TODO: delete object
    const object = (req as MyRequest)[ENTITY];

    res.send(object);
  } catch (err) {
    next(new HttpError(err.code || INTERNAL_SERVER_ERROR, err));
  }
};

export { list, create, getById, get, updatePartial, update, del };
