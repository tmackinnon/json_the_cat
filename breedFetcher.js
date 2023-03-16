const request = require('request');
const args = process.argv.slice(2);
const breed = args[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function(error, response, body) {
  //for errors:
  if (error) {
    console.log(`Oh no, the following error occured: ${error}`);
    return;
  }

  //change body from string to object
  const data = JSON.parse(body);

  //if no data is found: 
  if (!data.length) {
    console.log('no information found');
    return;
  }

  //happy path: print the description of the cat
  console.log(data[0].description);

});