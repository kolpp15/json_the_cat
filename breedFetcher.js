const request = require('request');


//                error value                       description value
// iff success,     null                          the description from body
// if failute,      error we get from request         null

const fetchBreedDescription = function(breedName, callback) {

  const url = `https://api.thecatapi.com/v1/breeds/search/?q=${breedName}`;

  request(url, (error, response, body) => {
    console.log(`---------------------------------------------`);

    if (response.statusCode !== 200) {
      console.log('statuscode: ', response.statusCode);
    } else {
      console.log('Operation successful!');
    }

    console.log(`---------------------------------------------`);
  
    if (error) {
      callback(`@@@@@@@@@@ ERROR ERROR ERROR @@@@@@@@@@`, null);
      return;
    }

    if (response.statusCode !== 200) {
      callback(`@@@@@ CHECK THE ABOVE STATUSCODE @@@@@`, null);
      return;
    }
  
    const data = JSON.parse(body);

    if (!data[0]) {
      callback(`@@@@@ SORRY, THERE'S NO MATCHING BREED @@@@@`, null);
      return;
    }
    callback(null, `BREED DESCRIPTION:\n  ${data[0]['description']}`); // don't need if & return
  });
};



module.exports = { fetchBreedDescription };