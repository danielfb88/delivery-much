import { check } from 'express-validator'

export const getRecipeValidation = [
  check('i')
    .custom((value: string) => {
      if (!value) {
        throw new Error()
      }

      return true
    })
    .withMessage('Empty ingredients')

    .custom((value: string) => {
      const listIngredients: String[] = value.split(',')

      if (listIngredients.length > 3) {
        throw new Error()
      }

      return true
    })
    .withMessage('Maximun ingredients'),
]
