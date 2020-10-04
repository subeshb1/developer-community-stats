const fetch = require('node-fetch');
const contributors = require('../contributors.json')


describe('Check if required attributes is contributors are present and in correct order', () => {

  it('tests if country and name is present in a contributor object', () => {

    const result = Object.entries(contributors)
      .map(([_, information]) => information)
      .every(information => information.name && information.country)
    if (!result) {
      const missing = Object.entries(contributors)
        .map(([_, information]) => information)
        .find(information => !information.name || !information.country)
      console.log("The following object is missing required information `name` or `country`:", missing)
    }
    expect(result).toBe(true)
  });

  it('tests if the contributor name are in ascending order or not', () => {
    let sorted = true;
    Object.entries(contributors)
      .map(([contributorId, _]) => contributorId)
      .reduce((previousId, currentId) => {
        if (!sorted) {
          return
        }
        if (previousId.toLowerCase() > currentId.toLowerCase()) {
          console.log(`${currentId}'s information should come before ${previousId}. Please fix the order.`)
          sorted = false;
        }
        return currentId
      })
    expect(sorted).toBe(true)
  });

  it('Check if github user id exists', () => {
    expect.assertions(1);
    const users = process.env.NEW_USER ? process.env.NEW_USER.split(",") : [];
    return Promise.all(users
      .map((user) => fetch(`https://api.github.com/users/${user}`).then(res => res.status)))
      .then(responses => {
        const result = responses.every(res => res === 200)
        if (!result) {
          console.log(`The newly added users don't Exist: [${users}]`)
        }
        expect(result).toBe(true)
      })
  });
})
