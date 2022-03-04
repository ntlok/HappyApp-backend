import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';

interface ValidationErrors {
  [key: string]: string[];
}

const errorHendler: ErrorRequestHandler = (error, request, response, next) => {
  if(error instanceof ValidationError) {
    let errors: ValidationErrors = {};

    error.inner.forEach(err => {
      errors[err.path] = err.errors;
    });
  }
  
  console.error(error);

  return response.status(500).json({ message: 'internal server Error' })
}

export default errorHendler;