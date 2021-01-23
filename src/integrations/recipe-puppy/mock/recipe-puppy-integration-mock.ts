import { AxiosInstance } from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { IMockIntegration } from '../../../base/base-integration'
import { getRecipePupyResponseMock } from './recipe-puppy-objects-mock'

export class RecipePuppyIntegrationMock implements IMockIntegration {
  executeMockAdapter(axiosInstance: AxiosInstance): void {
    const mockAdapter = new MockAdapter(axiosInstance)

    /* Get Recipes */
    mockAdapter.onGet('/?i=onion,tomato').reply(200, getRecipePupyResponseMock())
  }
}
