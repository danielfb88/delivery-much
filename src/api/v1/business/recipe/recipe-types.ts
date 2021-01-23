export interface IRecipe {
  title: string
  ingredients: string[]
  link: string
  gif: string
}

export interface IRecipeResponse {
  keywords: string[]
  recipes: IRecipe[]
}
