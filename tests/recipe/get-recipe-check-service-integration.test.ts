import * as HTTPStatus from 'http-status'
import supertest from 'supertest'
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
        const res = await request(app).get(`${endpoint}/?i='onion,tomato,chili'`).send()

        expect(res.status).toBe(HTTPStatus.OK)

        done()
      })
    })
  })
})
