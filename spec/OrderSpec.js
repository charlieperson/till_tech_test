describe('Order', function() {
  var order, billKlass;

  beforeEach(function() {
    order = new Order(billKlass);
    function billKlass() {
      this.total = function(items){};
    }
  });

  it('intitializes with empty order', function() {
    expect(order.items).toEqual({});
  });

  it('should take an order', function() {
    order.add("Tea", 1);
    expect(order.items).toEqual({"Tea": 1});
  });

  it('should not allow item to be added if it is not on menu', function() {
    expect(function(){ order.add("Burger", 1); }).toThrow("Item is not on the menu");
  });

  it('should add item if it is on the menu', function() {
    order.add('Cortado', 3);
    expect('Cortado' in order.items).toEqual(true);
  });

  it('can confirm an order', function() {
    spyOn(order.bill, 'total');
    order.add('Cortado', 1);
    order.confirm();
    expect(order.bill.total).toHaveBeenCalledWith({ Cortado: 1 });
  });
});
