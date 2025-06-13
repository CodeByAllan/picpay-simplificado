import { NextFunction, Request, Response } from 'express';

export const captureErrors = (
  err: any,
  req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const isKnownError =
    typeof err.code === 'number' && err.code >= 400 && err.code < 600;

  const code = isKnownError ? err.code : 500;
  const message = isKnownError ? err.message : 'Unexpected error';
  const name = isKnownError ? err.name : 'UnexpectedError';
  res.status(code).json({
    message: message,
    error: name,
  });
};
