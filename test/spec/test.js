(function () {
  'use strict';

  var Game = require('./game');

  describe('Give it some context', function () {
    describe('maybe a bit more context here', function () {
      it('should run here few assertions', function () {
        var g = new Game(1, 2);
        g.start();
      });
    });
  });
})();
