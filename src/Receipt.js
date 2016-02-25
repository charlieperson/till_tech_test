function Receipt(){
  this.lines = [];
}

Receipt.prototype.addLine = function(line){
  this.lines.push(line);
};
