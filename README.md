# MVPv0.0.2
Repurposed my original MVP meme generating app to an owofier. 

## Quickstart
- npm install 
  - Install dependencies
- npm start
  - Start up the server
- npm test
  - Run Jest/Supertest testing suite

## API Information
| API Endpoints  | Request Type | Input | Output | Description  |
| ------------- | ------------- | ------------- | ------------- | ------------- | 
| /memes | GET  | n/a  | Status Code 200, JSON | Get all phone numbers from DB  |
| /phonenumbers | POST  | name, phoneNumber  | Status Code 200, JSON  | Post a new phone number to DB  |
| /memes | POST  | name, message  | Status Code 200 or 400, JSON  | Send an owofied message|

