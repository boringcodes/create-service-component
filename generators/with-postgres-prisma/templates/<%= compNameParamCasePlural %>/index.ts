import { Router } from 'express';

import { RouteOptions } from '../types';
import { RESOURCE } from './constants';
import controller from './controller';

const path = `/${RESOURCE}`;

const routes = (_: RouteOptions): Router => {
  const router = Router();

  router.param('id', controller.getById);

  router.route('/').get(controller.list).post(controller.create);

  router
    .route('/:id')
    .get(controller.get)
    .patch(controller.update)
    .delete(controller.del);

  return router;
};

export default { path, routes };
