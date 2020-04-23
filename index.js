const express = require('express')
const app = express()
const port = 3000
const request = require('request');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

app.get('/', (req, res) => {
	const start = new Date();
	request('http://www.google.com', function (error, response, body) {
  		console.error('error:', error); // Print the error if one occurred
  		console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
		console.log('body:', body); // Print the HTML for the Google homepage.
		
		setTimeout(() => {
			var end = new Date() - start
			res.send("It took "+end+"ms");
		},100+getRandomInt(3000));
		
	});
	
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))