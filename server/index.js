const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000

const owoText = require('./owo')

// database
const db = require('../database/index')

// Twilio
const auth = require('../twilio.api.js');
const client = require('twilio')(auth.accountSid, auth.authToken);

app.use(bodyParser.json());
//app.use(express.static(__dirname + ' FILL_ME_IN'));

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => (console.log(`listening on port ${PORT}!`)));
}

app.post('/phoneNumber', (req, res) => {
  console.log('phoneNumber info', req.body)
  let info = req.body
  db.addPhonenumber(info, (err, result) => {
    if (err) {
      res.status(400).send({ err })
    } else {
      res.status(200).send({ success: true })
    }
  })
})

app.get('/memes', (req, res) => {
  db.getPhonenumbers((err, result) => {
    if (err) {
      console.error(err);
      res.status(400).send({ err });
    }
    console.log('result is in server', result);
    res.status(200).send(result)
  })
})


app.post('/memes', (req, res) => {
  let { name, message } = req.body
  let owoMsg = owoText(message);

  db.findOne({ name }, (err, result) => {
    if (err) {
      console.error('cannot get numbers', err);
      res.status(400).send(err)
    } else {
      console.log('got info from database', result.phoneNumber);
      let phoneNumber = result.phoneNumber;
      client.messages
        .create({
          body: owoMsg,
          from: '+14157459363',
          to: phoneNumber
        })
        .then(message => {
          console.log(`text sent ${message.body} to ${name}`)
          res.status(200).send({ success: true })
        })
        .catch(err => {
          console.error('cannot send message', err)
          res.status(400).send(err)
        });
    }
  })
})

module.exports = app;