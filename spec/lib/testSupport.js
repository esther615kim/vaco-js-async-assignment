(function () {
  "use strict";

  mocha.setup({ ui: "bdd" });
  window.expect = chai.expect;
  window.assert = chai.assert;

  window.onload = function () {
    window.mochaPhantomJS ? mochaPhantomJS.run() : mocha.run();
  };
})();
