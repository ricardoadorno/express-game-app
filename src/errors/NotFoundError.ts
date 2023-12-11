import ErrorBase from './ErrorBase';

class NotFoundError extends ErrorBase {
  constructor(message = 'Not found') {
    super(message, 404);
  }
}

export default NotFoundError;
