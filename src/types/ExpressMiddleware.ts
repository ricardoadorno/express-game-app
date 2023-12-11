import { NextFunction, Request, Response } from 'express';

export type ExpressMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<Response | void> | void;
