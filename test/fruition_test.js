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
describe("AscApples", function() {
  it("should return the SELLER of apples in ascending order", function() {
    var result = fruition.AscApples({
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
    assert.deepEqual(result, [ { shop: 'shopwrong', price: 2 },
  { shop: 'woolingsworth', price: 4 },
  { shop: 'kwakspar', price: 4 },
  { shop: 'chockers', price: 5 } ]
);
  });
});
describe("DscApples", function() {
  it("should return the SELLER of apples in decending order", function() {
    var result = fruition.DscApples({
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
    assert.deepEqual(result, [ { shop: 'chockers', price: 5 },
  { shop: 'woolingsworth', price: 4 },
  { shop: 'kwakspar', price: 4 },
  { shop: 'shopwrong', price: 2 } ]

);
  });
});
describe("cFruit", function() {
  it("should return the cheapest fruit", function() {
    var result = fruition.cFruit({
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
    assert.equal(result, "bananas,apples"
);
  });
});
