const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000

// database
const db = require('../database/index')

// Twilio
var twilio = require('twilio');
const auth = require('../twilio.api.js');
const client = new twilio(auth.accountSid, auth.authToken);

app.use(bodyParser.json());
//app.use(express.static(__dirname + ' FILL_ME_IN'));

app.listen(PORT, () => (console.log(`listening on port ${PORT}!`)));

app.post('/memes', (req, res) => {
  let { name, message } = req.body
  console.log('server got a', name, ' and a message', message)

  let phoneNumber;

  db.findOne({ name }, (err, result) => {
    if (err) {
      console.error('cannot get numbers', err);
    } else {
      console.log('got info from database', result.phoneNumber);
      phoneNumber = result.phoneNumber;
    }
  })

  // NOW find an api that gets dank ass memes lmao
  // PUT IT HERE

  // Twilio test message
  // client.messages
  //   .create({
  //     body: message,
  //     from: '+14157459363',
  //     to: phoneNumber
  //   })
  //   .then(message => console.log('text sent', message.sid))
  //   .catch(err => console.error('cannot send message', err));
})

module.exports = app;