import { BaseIntegration } from '../../base/base-integration'
import { MOCK_INTEGRATIONS } from '../integrations.config'
import { RecipePuppyUnavailableServiceError } from './errors/recipe-puppy-unavailable-service-error'
import { RecipePuppyIntegrationMock } from './mock/recipe-puppy-integration-mock'
import { IRecipePuppyResponse } from './recipe-puppy-integration-types'

const { BASE_URL_RECIPE_PUPPY } = process.env

export class RecipePuppyIntegration extends BaseIntegration {
  constructor() {
    super(BASE_URL_RECIPE_PUPPY as string, MOCK_INTEGRATIONS ? new RecipePuppyIntegrationMock() : undefined)
  }

  /**
   * Get Recipes
   *
   * @param {string} ingredients
   * @return {*}  {Promise<IRecipePuppyResponse>}
   * @memberof RecipePuppyIntegration
   */
  async getRecipes(ingredients: string): Promise<IRecipePuppyResponse> {
    try {
      const result = await this.axiosInstance.get<IRecipePuppyResponse>('/', {
        params: {
          i: ingredients,
        },
      })

      return result.data
    } catch (err) {
      console.error(err)
      throw new RecipePuppyUnavailableServiceError()
    }
  }
}
