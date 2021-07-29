const request = require('request');
const breed = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search/?q=${breed}`;


request(url, (error, response, body) => {
  console.log(`---------------------------------------------`);
  console.log('statuscode: ', response.statusCode);
  console.log(`---------------------------------------------`);

  if (response.statusCode !== 200) {
    console.log(`There is no matching breed description!!!`, error);
  }

  const data = JSON.parse(body);
  
  if (response.statusCode === 200) {
    console.log(`BREED DESCRIPTION:\n  ${data[0].description}`);
  }
  
  // console.log(`---------------------------------------------`);
  // console.log(error);
  // console.log(`---------------------------------------------`);
  // console.log(response);
  // console.log(`---------------------------------------------`);
  // console.log('statuscode:', response.statusCode);
  
  
});


