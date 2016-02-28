describe('Receipt', function() {
  var receipt;

  beforeEach(function() {
    receipt = new Receipt();
  });

  it('allows lines to be added', function(){
    receipt.addPurchase(["Tea x 4 = $12"]);
    expect(receipt.information.purchases).toEqual([["Tea x 4 = $12"]]);
  });

  it('allows a receipt to be printed', function() {
    receipt.addPurchase(["Tea x 4 = $12"]);
    receipt.addPurchase(["Coratado x 3 = $12"]);
    expect(receipt.printIt()).toEqual([["Tea x 4 = $12"], ["Coratado x 3 = $12"]]);
  });

  it('receives info about the bill', function(){
    receipt.setInfo(20, 21);
    expect(receipt.information.price).toEqual(20);
    expect(receipt.information.total).toEqual(21);
    expect(receipt.information.tax).toEqual(1);
  });
});
