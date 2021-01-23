import { Router } from 'express'
import RecipeController from './recipe-controller'
import { getRecipeValidation } from './recipe-validation'

export function initRecipeRoutes(): Router {
  const controller = new RecipeController()
  const router = Router()

  router.route('/').get(getRecipeValidation, controller.getRecipe.bind(controller))

  return router
}
