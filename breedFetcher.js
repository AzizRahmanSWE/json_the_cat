const request = require('request');

const fetchBreedDescription = function(breed, cb) {
 
  const url = `https://api.thecatapi.com/v1/breeds/search/?q=${breed}`
  request(url, (error, response, body) => {
    if (error) {
      cb(error, null);
    }
    
    const data = JSON.parse(body);

    if (data.length === 0) {
      cb(`Sorry, ${breed} not found`, null);
    } else {
      cb(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };