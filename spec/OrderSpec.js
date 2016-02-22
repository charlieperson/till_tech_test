describe('Order', function() {
  var order;

  beforeEach(function(){
    order = new Order();
  });

  it('intitializes with empty order', function() {
    expect(order.items).toEqual([]);
  });
});
