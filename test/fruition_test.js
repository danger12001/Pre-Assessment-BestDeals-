var assert = require('assert');
var fruition = require('../fruition');
describe("JSONd", function() {
  it("should return the JSON maps", function() {
    var result = fruition.JSONd();
    assert.deepEqual(result, {
      woolingsworth: {
        apples: 4,
        bananas: 3,
        oranges: 12
      },
      chockers: {
        bananas: 2,
        apples: 5,
        oranges: 4
      },
      picklepay: {
        bananas: 4,
        oranges: 7
      },
      shopwrong: {
        apples: 2,
        bananas: 3
      },
      kwakspar: {
        oranges: 9,
        apples: 4
      }
    });
  });
});
describe("cOrangeSeller", function() {
  it("should return the SELLER of the cheapest ORANGES", function() {
    var result = fruition.cOrangeSeller({
      woolingsworth: {
        apples: 4,
        bananas: 3,
        oranges: 12
      },
      chockers: {
        bananas: 2,
        apples: 5,
        oranges: 4
      },
      picklepay: {
        bananas: 4,
        oranges: 7
      },
      shopwrong: {
        apples: 2,
        bananas: 3
      },
      kwakspar: {
        oranges: 9,
        apples: 4
      }
    });
    assert.equal(result, "chockers");
  });
});
