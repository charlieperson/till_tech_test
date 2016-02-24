describe('Bill', function() {
  var bill;

  beforeEach(function() {
    bill = new Bill();
  });

  it('calculates a total of a bill', function() {
    expect(bill.calculateTotal).toBeDefined();
  });
});
