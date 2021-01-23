import * as HTTPStatus from 'http-status'
import supertest from 'supertest'
import { INGREDIENT_LIST_MOCK } from '../../src/integrations/recipe-puppy/mock/recipe-puppy-objects-mock'
import app from '../../src/main/app'
import '../helpers'

const request = supertest

describe('Get recipe integration tests', () => {
  beforeAll(async done => {
    done()
  })

  describe('GET /recipes', () => {
    const endpoint = '/recipes'

    describe('Check service', () => {
      test('Should get recipes', async done => {
        const res = await request(app).get(`${endpoint}/?i=${INGREDIENT_LIST_MOCK}`).send()

        expect(res.status).toBe(HTTPStatus.OK)

        done()
      })

      test('Should validate external server error', async done => {
        const res = await request(app).get(`${endpoint}/?i=error,error`).send()

        expect(res.status).toBe(HTTPStatus.INTERNAL_SERVER_ERROR)

        done()
      })
    })

    describe('Check inputs', () => {
      test('Should get BAD_REQUEST if more than three ingredients', async done => {
        const res = await request(app).get(`${endpoint}/?i=onion,tomato,salt,chili`).send()

        expect(res.status).toBe(HTTPStatus.BAD_REQUEST)

        done()
      })

      test('Should get BAD_REQUEST with no ingredients', async done => {
        const res = await request(app).get(`${endpoint}/?i=`).send()

        expect(res.status).toBe(HTTPStatus.BAD_REQUEST)

        done()
      })
    })
  })
})
