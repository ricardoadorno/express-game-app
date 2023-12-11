import ErrorBase from './ErrorBase';

class RequestError extends ErrorBase {
  constructor(message = 'Bad request') {
    super(message, 400);
  }
}

export default RequestError;
