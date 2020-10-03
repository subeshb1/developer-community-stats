const { default: Item } = require('antd/lib/list/Item')
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
})
