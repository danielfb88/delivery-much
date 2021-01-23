import HTTPStatus from 'http-status'
import { CustomError, IError } from './custom-error'

export class UnavailableServiceError extends CustomError {
  statusCode = HTTPStatus.INTERNAL_SERVER_ERROR
  customMessage: string | undefined

  constructor(customMessage?: string) {
    super('UNAVAILABLE_SERVICE')

    this.customMessage = customMessage
    Object.setPrototypeOf(this, UnavailableServiceError.prototype)
  }

  serializeErrors(): IError[] {
    return [{ message: this.customMessage ?? 'Unavailable external service' }]
  }
}
