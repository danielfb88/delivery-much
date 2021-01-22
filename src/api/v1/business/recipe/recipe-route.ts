import { Router } from 'express'
import { getRecipeValidation } from './property-validation'
import RecipeController from './recipe-controller'

export function initRecipeRoutes(): Router {
  const controller = new RecipeController()
  const router = Router()

  router.route('/').get(getRecipeValidation, controller.getRecipe.bind(controller))

  return router
}
