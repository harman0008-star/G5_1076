console.clear();
const prompt = require('prompt-sync')();
const store = "Harman Mega Mart";
console.log(store);
console.log();
// inventory
let items = ["item1","item2","item3"];
let prices = [999,1999,2999];
console.log(items.length);

items.push("item4","item5");
prices.push(4999,5999);
// items.pop();

// customer oriented billing
console.log();
console.log(items);
console.log();
console.log("Billing System");
console.log();
console.log("SrNo.\t","Item\t","Price");
for(let i=0 ; i<items.length ; i++)
{
    console.log((i+1)+"\t",items[i],"\t",prices[i]);
}
console.log();
let srno = Number (prompt("Enter Item No. : "));
let Quantity = Number (prompt("Enter Quantity : "));

// billing
let price = prices[srno - 1];
let cost = price * Quantity;

if(cost >= 3000)
{
    discount = cost * 0.05;
}
else if(cost >= 2000)
{
    discount = cost * 0.02;
}
else
{
    discount = cost*0.01;
}
console.log("Your Total Cost is :",cost);
console.log("Your Discount is :",discount);
console.log("Your Bill Amount is :",cost-discount);
console.log();