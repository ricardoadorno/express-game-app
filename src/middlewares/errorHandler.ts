import mongoose from 'mongoose';
import ErrorBase from '../errors/ErrorBase';
import { ExpressMiddleware } from '../types/ExpressMiddleware';
import RequestError from '../errors/RequestError';
import NotFoundError from '../errors/NotFoundError';
import ValidationError from '../errors/ValidationError';

const errorHandler: ExpressMiddleware = (err, req, res) => {
  if (err instanceof mongoose.Error.CastError) {
    new RequestError().handleResponse(res);
  } else if (err instanceof mongoose.Error.ValidationError) {
    new ValidationError(err).handleResponse(res);
  } else if (err instanceof NotFoundError) {
    err.handleResponse(res);
  } else {
    new ErrorBase().handleResponse(res);
  }
};

export default errorHandler;
