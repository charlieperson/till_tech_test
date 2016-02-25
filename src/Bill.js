function Bill(receiptKlass){
  if(receiptKlass) {
    this.receipt = new receiptKlass();
  } else {
    this.receipt = new Receipt();
  }
  this.price = 0;
  this.change = 0;
  this.menu =
  {
    "Cafe Latte": 4.75,
    "Flat White": 4.75,
    "Cappucino": 3.85,
    "Single Espresso": 2.05,
    "Double Espresso": 3.75,
    "Americano": 3.75,
    "Cortado": 4,
    "Tea": 3,
    "Choc Mudcake": 6.40,
    "Choc Mousse": 8.20,
    "Affogato": 14.80,
    "Tiramisu": 11.40,
    "Blueberry Muffin": 4.05,
    "Chocolate Chip Muffin": 4.05,
    "Muffin Of The Day": 4.55
  };
}

Bill.prototype.total = function(items) {
  for (var name in items) {
    var lineTotal = this.menu[name] * items[name];
    this.price += lineTotal;
    var line = [name, items[name], lineTotal].join(" ");
    // var line = [name, "x", items[name], "=", lineTotal].join(
    this.receipt.push(line);
  }
  console.log('Your total is $' + this.price);
  return this.price;
};

Bill.prototype.pay = function(amount){
  if(amount < this.price) {
    var short = this.price - amount;
    throw "Sorry mate, you are $" + short + " short...";
  } else {
    this.change = amount - this.price;
    console.log('Thank you, your change is $' + this.change);
  }
};
