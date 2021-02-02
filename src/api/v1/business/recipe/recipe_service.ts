/* eslint-disable no-control-regex */
import { GiphyIntegration } from '../../../../integrations/giphy/giphy-integration'
import { IRecipePuppyResult } from '../../../../integrations/recipe-puppy/recipe-puppy-integration-types'
import { sanitizeText } from '../../../../util/util'
import { IRecipe } from './recipe-types'

export default class RecipeService {
  protected giphyIntegration: GiphyIntegration

  constructor() {
    this.giphyIntegration = new GiphyIntegration()
  }

  async getRecipeList(recipePuppyResults: IRecipePuppyResult[]): Promise<IRecipe[]> {
    const listRecipe: IRecipe[] = []

    const promise = recipePuppyResults.map(async result => {
      const title = sanitizeText(result.title)
      const giphyResponse = await this.giphyIntegration.getGif(title)

      listRecipe.push({
        gif: giphyResponse.data.image_url,
        link: result.href,
        title,
        ingredients: result.ingredients
          .split(',')
          .map(ingredient => ingredient.trim())
          .sort((a, b) => a.localeCompare(b)),
      })
    })
    await Promise.all(promise)

    return listRecipe
  }
}
