/* eslint-disable @typescript-eslint/no-explicit-any */
import ErrorBase from './ErrorBase';

class ValidationError extends ErrorBase {
  constructor(error: any) {
    const errorMessages = Object.values(error.errors)
      .map((err: any) => err.message)
      .join(', ');

    super(`Validation error: ${errorMessages}`, 400);
  }
}

export default ValidationError;
