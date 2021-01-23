import HTTPStatus from 'http-status'
import { CustomError, IError } from './custom-error'

export class IngredientError extends CustomError {
  statusCode = HTTPStatus.BAD_REQUEST
  customMessage: string | undefined

  constructor(customMessage?: string) {
    super('INGREDIENT_ERROR')

    this.customMessage = customMessage
    Object.setPrototypeOf(this, IngredientError.prototype)
  }

  serializeErrors(): IError[] {
    return [{ message: this.customMessage ?? '' }]
  }
}
