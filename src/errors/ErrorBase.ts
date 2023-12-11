/* eslint-disable @typescript-eslint/no-explicit-any */
class ErrorBase extends Error {
  private status: number;

  constructor(message = 'Internal server error', status = 500) {
    super();
    this.message = message;
    this.status = status;
  }

  handleResponse(res: any) {
    return res.status(this.status).json({
      message: this.message,
      status: this.status,
    });
  }
}

export default ErrorBase;
