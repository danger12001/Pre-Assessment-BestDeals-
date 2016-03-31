exports.avocado = function(str){
var deals = str.split(",");
var string = str.replace(/ for/g,"").replace(/R/g,"").split(",").join(" ").replace(/  /g," ").split(" ");
var amount = [];
var price = [];
for(x=0;x<string.length;x++){
  if(x % 2 === 0){
    var amounts = Number(string[x]);
    var prices = Number(string[x + 1]);
  amount.push(amounts);
  price.push(parseFloat(prices));
}
}
var pricePerAvo = [];
var ppaMaps = [];
for(x=0;x<amount.length;x++){
  pricePerAvo.push(price[x]/amount[x]);
  ppaMaps.push({deal: deals[x], pricePerAvo: pricePerAvo[x].toFixed(2)});
}
// console.log(ppaMaps);
return ppaMaps;
};
exports.cheapestDeal = function(ppaMaps){
var cheapestDeal = ppaMaps.sort(function(a,b){
  return a.pricePerAvo - b.pricePerAvo;
});
var cheapestdeal = cheapestDeal[0];
return cheapestdeal;
};
