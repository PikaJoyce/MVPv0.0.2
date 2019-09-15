const request = require('supertest');
const app = require('../server/index');

describe('GET Request functional', () => {
  it('GET phone numbers', (done) => {
    request(app)
      .get('/memes')
      .expect('Content-Type', /json/)
      .expect(200, done);
  })

  it('POST phone numbers to the db', (done) => {
    request(app)
      .post('/phoneNumber')
      .send({
        "name": "Andy",
        "phoneNumber": "+14159905511"
      })
      .expect(200, done);
  })
})