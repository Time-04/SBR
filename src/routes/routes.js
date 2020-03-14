import { Router } from 'express';
import UserMiddleware from '../middlewares/UserMiddleware';
import SessionController from '../app/controllers/SessionController';
import UserController from '../app/controllers/UserController';
import JsonDataBaseController from '../app/controllers/JsonDataBaseController';

const routes = new Router();

routes.get('/appTest', (res, req) => {
  return req.status(200).json({ mesage: 'This application is running fine!' });
});

routes.post(
  '/users',
  UserMiddleware.checkIfUserDoesNotExists,
  UserMiddleware.validateStoreModel,
  UserController.store
);

routes.post(
  '/session',
  UserMiddleware.checkIfUserExists,
  SessionController.store
);

routes.get('/json', JsonDataBaseController.store);

export default routes;
