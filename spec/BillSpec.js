describe('Bill', function() {
  var bill, items;

  beforeEach(function() {
    bill = new Bill(receiptKlass);
    function receiptKlass() {
      this.setInfo = function(price, total){};
      this.addPurchase = function(line){};
    }
    items = { 'Tea': 4, "Cortado": 2 };
  });

  it('calculates a total of a bill with tax added', function() {
    expect(bill.total(items)).toEqual(21.728);
  });

  it('adds lines to receipt while calulating total', function(){
    spyOn(bill.receipt, 'addPurchase');
    spyOn(bill.receipt, 'setInfo');
    bill.total(items);
    expect(bill.receipt.addPurchase).toHaveBeenCalledWith("Tea x 4 = $12");
    expect(bill.receipt.addPurchase).toHaveBeenCalledWith('Cortado x 2 = $8');
    expect(bill.receipt.setInfo).toHaveBeenCalledWith(bill.price, bill.total);
  });

  it('allows customers to pay for their bill', function() {
    bill.total(items);
    bill.pay(27);
    expect(bill.change).toEqual(5.2719999999999985);
  });

  it('throws error if customer does not pay enough', function() {
    bill.total(items);
    expect(function(){ bill.pay(15); }).toThrow('Sorry mate, you are $6.7280000000000015 short...');
  });
});
