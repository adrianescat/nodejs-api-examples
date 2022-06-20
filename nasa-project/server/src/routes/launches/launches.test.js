const request = require('supertest');
const app = require('../../app');

describe('Test GET /launches', () => {
  test('it should respond with 200 success', async () => {
    const response = await request(app)
      .get('/launches')
      .expect('Content-Type', /json/)
      .expect(200)
  })
})

describe('Test POST /launches', () => {
  // We create an object to reuse the data in multiple tests and scenarios
  const completeLaunchData = {
    mission: 'USS Enterprise',
    rocket: 'NCC 1701-D',
    target: 'Kepler-186 f',
    launchDate: 'January 4, 2028',
  }

  const launchDataWithoutDate = {
    mission: 'USS Enterprise',
    rocket: 'NCC 1701-D',
    target: 'Kepler-186 f',
  }

  test('it should respond with 201 success', async () => {
    const response = await request(app)
      .post('/launches')
      .send(completeLaunchData)
      .expect('Content-Type', /json/)
      .expect(201);

    const requestDate = new Date(completeLaunchData.launchDate).valueOf();
    const responseDate = new Date(response.body.launchDate).valueOf();

    // We need to match dates separately because the server will respond a different date string
    expect(requestDate).toBe(responseDate);

    expect(response.body).toMatchObject(launchDataWithoutDate)
  })

  test('it should catch missing required properties', () => {

  })

  test('it should catch invalid dates', () => {

  })
})