/*var request = require('request');
//https://private-7cf60-4youseesocialtest.apiary-mock.com/timeline
request('http://polls.apiblueprint.org/timeline', function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});*/
var request = require('request');

request('http://polls.apiblueprint.org/timeline', function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});