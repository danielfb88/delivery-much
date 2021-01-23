import { NextFunction, Request, Response } from 'express'
import * as HTTPStatus from 'http-status'
import BaseController from '../../../../base/base-controller'

export default class RecipeController extends BaseController {
  /**
   * Get Recipe
   *
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   * @return {*}  {Promise<void>}
   * @memberof RecipeController
   */
  async getRecipe(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      this.checkValidationErrors(req)

      res.status(HTTPStatus.OK).send(':)')
    } catch (err) {
      next(err)
    }
  }
}
