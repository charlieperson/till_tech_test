describe('Bill', function() {
  var bill, items;

  beforeEach(function() {
    bill = new Bill(receiptKlass);
    function receiptKlass() {
      this.addLine = function(line){};
    }
    items = { 'Tea': 4, "Cortado": 2 };
  });

  it('calculates a total of a bill', function() {
    expect(bill.total(items)).toEqual(20);
  });

  // it('generates lines for the receipt', function() {
  //   bill.total(items);
  //   expect(bill.receipt).toEqual([ 'Tea x 4 = $ 12', 'Cortado x 2 = $ 8' ]);
  // });

  it('adds lines to receipt while calulating total', function(){
    spyOn(bill.receipt, 'addLine');
    bill.total(items);
    expect(bill.receipt.addLine).toHaveBeenCalledWith("Tea x 4 = $12");
    expect(bill.receipt.addLine).toHaveBeenCalledWith('Cortado x 2 = $8');
  });

  it('allows customers to pay for their bill', function() {
    bill.total(items);
    bill.pay(25);
    expect(bill.change).toEqual(5);
  });

  it('throws error if customer does not pay enough', function() {
    bill.total(items);
    expect(function(){ bill.pay(15); }).toThrow('Sorry mate, you are $5 short...');
  });
});
