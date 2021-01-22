import { Router } from 'express'
import { initRecipeRoutes } from './business/recipe/recipe-route'

export default class RoutesV1 {
  getRouter(): Router {
    const v1 = Router()

    v1.route('/health').get((req, res) => res.status(200).send()) // health check

    v1.use('/recipes', initRecipeRoutes())

    return v1
  }
}
