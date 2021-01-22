import { query } from 'express-validator'

export const getRecipeValidation = [
  query('i').isString().withMessage('Only letters and digits allowed in title.').trim(),
]
