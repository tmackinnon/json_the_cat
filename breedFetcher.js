const request = require('request');


const fetchBreedDescription = function(breedName, callback) {

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
  //for errors:
  if (error) {
    callback(error, null);
  }

  //change body from string to object
  const data = JSON.parse(body);

  if (data.length > 0) {
    callback(null, data[0].description)
  }

  //if no data is found: 
  if (!data.length) {
    callback(null, `no data available on ${breedName}`);
  }

});
}

module.exports = { fetchBreedDescription };