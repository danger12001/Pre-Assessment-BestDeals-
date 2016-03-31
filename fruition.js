exports.JSONd = function() {
  var JSONd = {
    "woolingsworth": {
      "apples": 4,
      "bananas": 3,
      "oranges": 12
    },
    "chockers": {
      "bananas": 2,
      "apples": 5,
      "oranges": 4
    },
    "picklepay": {
      "bananas": 4,
      "oranges": 7
    },
    "shopwrong": {
      "apples": 2,
      "bananas": 3
    },
    "kwakspar": {
      "oranges": 9,
      "apples": 4
    }
  };
  return JSONd;
};
exports.cOrangeSeller = function(JSONd) {
  var orangeSellers = [];
  for (var shop in JSONd) {
    if (JSONd[shop].hasOwnProperty("oranges")) {
      orangeSellers.push({
        'shop': shop,
        'price': JSONd[shop].oranges
      });
    }
  }
  var cheapestSeller = orangeSellers.sort(function(a,b){
    return a.price - b.price;
  });
  return cheapestSeller[0].shop;
};
exports.AscApples = function(JSONd){
  var appleSellers = [];
  for (var shop in JSONd){
    if(JSONd[shop].hasOwnProperty("apples")){
      appleSellers.push({
        'shop': shop,
        'price': JSONd[shop].apples
      });
    }
  }
  var ascendingOrder = appleSellers.sort(function(a,b){
    return a.price - b.price;
  });
  // console.log(ascendingOrder);
  return ascendingOrder;
};
exports.DscApples = function(JSONd){
  var appleSellers = [];
  for (var shop in JSONd){
    if(JSONd[shop].hasOwnProperty("apples")){
      appleSellers.push({
        'shop': shop,
        'price': JSONd[shop].apples
      });
    }
  }
  var decendingOrder = appleSellers.sort(function(a,b){
    return b.price - a.price;
  });
  // console.log(decendingOrder);
  return decendingOrder;
};
