import { NextFunction, Request, Response } from 'express'
import * as HTTPStatus from 'http-status'
import BaseController from '../../../../base/base-controller'
import { RecipePuppyIntegration } from '../../../../integrations/recipe-puppy/recipe-puppy-integration'
import { IRecipeResponse } from './recipe-types'

export default class RecipeController extends BaseController {
  protected recipePuppyIntegration: RecipePuppyIntegration

  constructor() {
    super()
    this.recipePuppyIntegration = new RecipePuppyIntegration()
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

      const ingredients = req.query.i as string

      const recipePuppyResponse = await this.recipePuppyIntegration.getRecipes(ingredients)

      const response: IRecipeResponse = {
        keywords: ingredients.split(','),
        recipes: recipePuppyResponse.results.map(result => {
          return {
            gif: result.thumbnail,
            link: result.href,
            title: result.title,
            ingredients: result.ingredients
              .split(',')
              .map(ingredient => ingredient.trim())
              .sort((a, b) => a.localeCompare(b)),
          }
        }),
      }

      res.status(HTTPStatus.OK).json(response)
    } catch (err) {
      next(err)
    }
  }
}
