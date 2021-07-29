const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {

  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = `BREED DESCRIPTION:\n  The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.`;

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });


  //                error value                       description value
  // iff success,     null                          the description from body
  // if failute,      error we get from request         null

  it('invalid/non-existent breed is passed in', (done) => {
    fetchBreedDescription('brian', (err, desc) => {
      const expectedDesc = null;

      // compare returned description
      assert.equal(expectedDesc, desc);

      done();
    });
  });


});