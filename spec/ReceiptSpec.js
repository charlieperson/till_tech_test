describe('Receipt', function() {
  var receipt;

  beforeEach(function() {
    receipt = new Receipt();
  });

  it('allows lines to be added', function(){
    receipt.addPurchase(["Tea x 4 = $12"]);
    expect(receipt.information.purchases).toEqual([["Tea x 4 = $12"]]);
  });

  it('receives info about the bill', function(){
    receipt.setInfo(20, 21);
    expect(receipt.information.price).toEqual(20);
    expect(receipt.information.total).toEqual(21);
    expect(receipt.information.tax).toEqual(1);
  });
});
