export interface IResult {
  title: string
  href: string
  ingredients: string
  thumbnail: string
}

export interface IRecipePuppyResponse {
  title: string
  version: string
  href: string
  results: IResult[]
}
