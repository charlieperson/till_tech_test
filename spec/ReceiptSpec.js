describe('Receipt', function() {
  var receipt;

  beforeEach(function() {
    receipt = new Receipt();
  });

  it('allows lines to be added', function(){
    receipt.addLine(["Tea x 4 = $12"]);
    expect(receipt.lines).toEqual([["Tea x 4 = $12"]]);
  });
});
