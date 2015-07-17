'use strict';

var Card = require('./card');

describe('Card', function () {
  it('should compare to others', function() {
    var c1 = new Card('any', '2', 0)
      , c2 = new Card('any', '5', 3)
      , c3 = new Card('any', '7', 5);

    assert.equal(0, c1.compareTo(c1));
  });
});
