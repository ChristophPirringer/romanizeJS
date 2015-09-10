describe('Romanize', function() {

  it("takes the number of 1 and returns the numeral 'I'", function() {
   expect(Romanize(1)).to.equal('I');
  });


  it("takes the number of 5 and returns the numeral 'V'", function() {
    expect(Romanize(5)).to.equal('V');
  });


});
