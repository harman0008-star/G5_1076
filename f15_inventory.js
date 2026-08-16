console.clear();
console.log("Inventory Entry System");

console.log();

const prompt = require("prompt-sync")();



let stock = [];
function addStock(){

{
    let item_code = Number(prompt("Enter item code : "));
    let item_name = (prompt("Enter item name : "));
    let item_price = Number(prompt("Enter item price : "));
    let item_quantity = Number(prompt("Enter item quantity : "));



// object is a collection of pair (property and value)

let item = {
    code: item_code,
    item: item_name,
    price: item_price,
    quantity: item_quantity,
};

stock.push(item);

console.log("\nInventory Updated");
console.log();
}
}
while (true){
    addStock();
    let loop = prompt("Add More Items (0 for No / 1 for Yes) : ");
    loop = parseInt(loop);
    if(loop === 0) break;
}

console.log("\nInventory Entry Completed");
console.log("\nUpdated Stock is as follows");
console.log(stock);

console.log();