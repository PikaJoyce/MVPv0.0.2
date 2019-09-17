const request = require('supertest');
const app = require('../server/index');

describe('Server functional', () => {
  it('/memes GET phone numbers', (done) => {
    request(app)
      .get('/memes')
      .expect('Content-Type', /json/)
      .expect(200, done);
  })

  xit('/phonenumbers POST phone numbers to the db', (done) => {
    let info = {
      "name": "Andy",
      "phoneNumber": "+14159905511"
    }
    request(app)
      .post('/phoneNumber')
      .send(info)
      .expect({ success: true }, done);
  })

  it('/memes POST owofied messages to recipients', (done) => {
    let testMsg = {
      "name": "Maia",
      "message": "Hi, I hope you feel better!"
    }
    request(app)
      .post('/memes')
      .send(testMsg)
      .expect({ success: true }, done);
  })

})
