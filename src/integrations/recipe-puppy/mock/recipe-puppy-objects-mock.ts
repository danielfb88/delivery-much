import faker from 'faker'
import { IRecipePuppyResponse } from '../recipe-puppy-integration-types'

function getIngredientsMock(n: number): string[] {
  const listIngredients: string[] = []

  for (let i = 0; i < n; i++) {
    listIngredients.push(faker.random.word())
  }

  return listIngredients
}

export function getRecipePupyResponseMock(): IRecipePuppyResponse {
  return {
    href: faker.internet.url(),
    title: faker.random.words(),
    version: faker.random.number().toString(),
    results: [
      {
        href: faker.internet.url(),
        title: faker.random.words(),
        thumbnail: faker.internet.url(),
        ingredients: getIngredientsMock(faker.random.number({ max: 10 })).toString(),
      },
    ],
  }
}
