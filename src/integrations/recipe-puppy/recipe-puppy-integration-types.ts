export interface IRecipePuppyResult {
  title: string
  href: string
  ingredients: string
  thumbnail: string
}

export interface IRecipePuppyResponse {
  title: string
  version: string
  href: string
  results: IRecipePuppyResult[]
}
