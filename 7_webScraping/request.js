const request = require('request');

// ek link bhji h jiska html code chaiye and ek callBack function bhi call kia h
// console.log('before')  // just to check Async behaviour 

request('https://www.worldometers.info/coronavirus/', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

// console.log('after')  // just to check Async behaviour 