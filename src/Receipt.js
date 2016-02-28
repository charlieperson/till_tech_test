function Receipt(){
  this.information = {'purchases': []};
}

Receipt.prototype.addPurchase = function(line){
  this.information.purchases.push(line);
};

Receipt.prototype.printIt = function(){
  console.log(this.information);
  console.log('price: ' + this.information.price);
  console.log('tax: ' + this.information.tax);
  console.log('total: ' + this.information.total);
};

Receipt.prototype.setInfo = function(price, total){
  this.information.price = price;
  this.information.total = total;
  this.information.tax = (total - price);
};
