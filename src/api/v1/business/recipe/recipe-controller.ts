import { NextFunction, Request, Response } from 'express'
import * as HTTPStatus from 'http-status'
import BaseController from '../../../../base/base-controller'
import { GiphyIntegration } from '../../../../integrations/giphy/giphy-integration'
import { RecipePuppyIntegration } from '../../../../integrations/recipe-puppy/recipe-puppy-integration'
import { IRecipeResponse } from './recipe-types'
import RecipeService from './recipe_service'

export default class RecipeController extends BaseController {
  protected recipeService: RecipeService

  protected recipePuppyIntegration: RecipePuppyIntegration
  protected giphyIntegration: GiphyIntegration

  constructor() {
    super()
    this.recipeService = new RecipeService()

    this.recipePuppyIntegration = new RecipePuppyIntegration()
    this.giphyIntegration = new GiphyIntegration()
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
        recipes: await this.recipeService.getRecipeList(recipePuppyResponse.results),
      }

      res.status(HTTPStatus.OK).json(response)
    } catch (err) {
      next(err)
    }
  }
}
