import NotFoundError from '../errors/NotFoundError';
import type { ExpressMiddleware } from '../types/ExpressMiddleware';

const errorNotFound: ExpressMiddleware = (req, res, next) => {
  const error404 = new NotFoundError();

  next(error404.handleResponse(res));
};

export default errorNotFound;
