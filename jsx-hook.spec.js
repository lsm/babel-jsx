describe('jsx-hook', function() {
  it('should work', function() {
    require('./index')();
    expect(require('./test-module').indexOf('data-reactid')).toBeGreaterThan(-1);
  });
});
