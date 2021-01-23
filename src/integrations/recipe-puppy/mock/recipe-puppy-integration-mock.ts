import { AxiosInstance } from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { IMockIntegration } from '../../../base/base-integration'
import { getRecipePupyResponseMock, INGREDIENT_LIST_MOCK } from './recipe-puppy-objects-mock'

export class RecipePuppyIntegrationMock implements IMockIntegration {
  executeMockAdapter(axiosInstance: AxiosInstance): void {
    const mockAdapter = new MockAdapter(axiosInstance)

    /* Get Recipes */
    mockAdapter.onGet(`/?i=${INGREDIENT_LIST_MOCK}`).reply(200, getRecipePupyResponseMock())
  }
}
