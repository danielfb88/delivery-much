import { NextFunction, Request, Response } from 'express'
import * as HTTPStatus from 'http-status'
import BaseController from '../../../../base/base-controller'
import PropertyService from './property-service'

export default class RecipeController extends BaseController {
  protected propertyService: PropertyService

  constructor() {
    super()
    this.propertyService = new PropertyService()
  }

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

      const landlordId = req.headers.userId as string

      const property = await this.propertyService.create({
        address: req.body.address,
        landlord_id: landlordId,
      })

      res.status(HTTPStatus.CREATED).json({
        id: property.id,
        address: property.address,
      })
    } catch (err) {
      next(err)
    }
  }
}
