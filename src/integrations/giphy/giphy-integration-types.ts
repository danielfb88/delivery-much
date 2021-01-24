export interface IGiphyResponse {
  data: {
    image_url: string
    meta: {
      status: number
      msg: string
      response_id: string
    }
  }
}
