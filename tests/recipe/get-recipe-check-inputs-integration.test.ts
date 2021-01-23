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
