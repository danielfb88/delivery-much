import { AxiosInstance } from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { IMockIntegration } from '../../../base/base-integration'
import { getGiphyResponseMock } from './giphy-objects-mock'

export const TAG_MOCK = 'burrito'

export class GiphyIntegrationMock implements IMockIntegration {
  executeMockAdapter(axiosInstance: AxiosInstance): void {
    const mockAdapter = new MockAdapter(axiosInstance)

    /* Get Gif */
    mockAdapter.onGet('/').reply(200, getGiphyResponseMock())
  }
}
