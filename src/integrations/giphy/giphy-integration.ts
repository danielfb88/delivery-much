import { BaseIntegration } from '../../base/base-integration'
import { MOCK_INTEGRATIONS } from '../integrations.config'
import { GiphyUnavailableServiceError } from './errors/giphy-unavailable-service-error'
import { IGiphyResponse } from './giphy-integration-types'
import { GiphyIntegrationMock } from './mock/giphy-integration-mock'

const { GIPHY_API_KEY, BASE_URL_GIPHY } = process.env

export class GiphyIntegration extends BaseIntegration {
  constructor() {
    super(BASE_URL_GIPHY as string, MOCK_INTEGRATIONS ? new GiphyIntegrationMock() : undefined)
  }

  /**
   * Get gif by tag
   *
   * @param {string} tag
   * @return {*}  {Promise<IGiphyResponse>}
   * @memberof GiphyIntegration
   */
  async getGif(tag: string): Promise<IGiphyResponse> {
    try {
      const result = await this.axiosInstance.get<IGiphyResponse>('/random', {
        params: {
          api_key: GIPHY_API_KEY,
          tag,
        },
      })

      return result.data
    } catch (err) {
      console.error(err)
      throw new GiphyUnavailableServiceError()
    }
  }
}
