import HTTPStatus from 'http-status'
import { CustomError, IError } from '../../../errors/custom-error'

export class RecipePuppyUnavailableServiceError extends CustomError {
  statusCode = HTTPStatus.INTERNAL_SERVER_ERROR
  reason = 'Recipe Puppy Unavailable service'

  constructor() {
    super('UNAVAILABLE_SERVICE')

    Object.setPrototypeOf(this, RecipePuppyUnavailableServiceError.prototype)
  }

  serializeErrors(): IError[] {
    return [{ message: this.reason }]
  }
}
