import HTTPStatus from 'http-status'
import { CustomError, IError } from '../../../errors/custom-error'

export class GiphyUnavailableServiceError extends CustomError {
  statusCode = HTTPStatus.INTERNAL_SERVER_ERROR
  reason = 'Giphy Unavailable service'

  constructor() {
    super('UNAVAILABLE_SERVICE')

    Object.setPrototypeOf(this, GiphyUnavailableServiceError.prototype)
  }

  serializeErrors(): IError[] {
    return [{ message: this.reason }]
  }
}
