describe('Order', function() {
  var order;

  beforeEach(function(){
    order = new Order();
  });

  it('intitializes with empty order', function() {
    expect(order.items).toEqual([]);
  });

  it('should take an order', function() {
    order.add("Tea", 1);
    expect(order.items[0]).toEqual({"Tea": 1});
  });
});
