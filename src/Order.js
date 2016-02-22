function Order(){
  this.items = [];
}

Order.prototype.add = function(item, qty){
  console.log(item);
  // choice = {};
  // choice[item]= qty;
  // this.items.push(choice);
  this.items.push({[item]: qty});
};
