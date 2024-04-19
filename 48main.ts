let priceset1 = [1200,1500,1100];
let priceset2 = [11000,16000,1000];
let combinedPrices = [...priceset1,...priceset2].sort((a,b)=>a-b);
console.log(combinedPrices);