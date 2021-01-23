import { check } from 'express-validator'
import { IngredientError } from '../../../../errors/ingredient-error'

export const getRecipeValidation = [
  check('i').custom((value: string) => {
    if (!value) {
      throw new IngredientError('Empty Ingredients')
    }

    const listIngredients: String[] = value.split(',')

    if (listIngredients.length > 3) {
      throw new IngredientError('Maximun 3 ingredients')
    }

    return true
  }),
]
