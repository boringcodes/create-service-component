import { Router } from 'express';

import { RouteOptions } from '../types';
import { RESOURCE } from './constants';
import {
  list,
  create,
  getById,
  get,
  updatePartial,
  update,
  del,
} from './controller';

const path = `/${RESOURCE}`;

const routes = (_: RouteOptions): Router => {
  const router = Router();

  router.param('id', getById);

  router.route('/').get(list).post(create);

  router.route('/:id').get(get).patch(updatePartial).put(update).delete(del);

  return router;
};

export default { path, routes };
