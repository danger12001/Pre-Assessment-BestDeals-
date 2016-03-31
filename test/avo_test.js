var assert = require('assert');
var avo = require('../avo');
describe("pricePerAvo",function(){
  it("avocado",function(){
    var result = avo.avocado("1 for R3, 2 for R7, 3 for R10, 5 for R14.50");
    assert.deepEqual(result,[ { deal: '1 for R3', pricePerAvo: '3.00' },
  { deal: ' 2 for R7', pricePerAvo: '3.50' },
  { deal: ' 3 for R10', pricePerAvo: '3.33' },
  { deal: ' 5 for R14.50', pricePerAvo: '2.90' } ]
);
  });
});
describe("cheapestDeal",function(){
  it("cheapestDeal",function(){
    var result = avo.cheapestDeal([ { deal: '1 for R3', pricePerAvo: '3.00' },
  { deal: ' 2 for R7', pricePerAvo: '3.50' },
  { deal: ' 3 for R10', pricePerAvo: '3.33' },
  { deal: ' 5 for R14.50', pricePerAvo: '2.90' } ]);
    assert.deepEqual(result,{"deal":" 5 for R14.50","pricePerAvo":"2.90"});
  });
});
