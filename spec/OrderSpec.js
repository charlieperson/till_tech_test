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

  it('should not allow item to be added if it is not on menu', function() {
    expect(function(){ order.add("Burger", 1); }).toThrow("Item is not on the menu");
  });

  it('should add item if it is on the menu', function() {
    order.add('Cortado');
    expect('Cortado' in order.items[0]).toEqual(true);
  });

  it('can confirm an order', function() {
    order.add('Cortado');
    order.confirm();
    expect(order.bill.calculateTotal).toHaveBeenCalledWith(this.items);
  });
});
