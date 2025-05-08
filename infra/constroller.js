import {
  MethodNotAlloewError,
  InternalServerError,
  ValidationError,
  NotFoundError,
} from "infra/errors.js";

function onNoMatchHandler(req, res) {
  const publicErrorObject = new MethodNotAlloewError();
  return res.status(publicErrorObject.statusCode).json(publicErrorObject);
}

function onErrorHandler(error, req, res) {
  if (error instanceof ValidationError || error instanceof NotFoundError) {
    return res.status(error.statusCode).json(error);
  }

  const publicErrorObject = new InternalServerError({
    cause: error,
    statusCode: error.statusCode,
  });

  console.log(publicErrorObject);

  res.status(publicErrorObject.statusCode).json(publicErrorObject);
}

const controller = {
  errorHandlers: {
    onNoMatch: onNoMatchHandler,
    onError: onErrorHandler,
  },
};

export default controller;
