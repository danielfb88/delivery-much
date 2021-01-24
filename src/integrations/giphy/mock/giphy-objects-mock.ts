import faker from 'faker'
import { IGiphyResponse } from '../giphy-integration-types'

export function getGiphyResponseMock(): IGiphyResponse {
  return {
    data: {
      image_url: faker.internet.url(),
      meta: {
        msg: 'OK',
        status: 200,
        response_id: faker.random.uuid(),
      },
    },
  }
}
