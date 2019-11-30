(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.iyuo = {}));
}(this, (function (exports) { 'use strict';

  /**
   * Namespace class
   */
  var Namespace = /** @class */ (function () {
      function Namespace(name) {
          this.name = name;
          this.init();
      }
      Namespace.prototype.init = function () { };
      return Namespace;
  }());
  /**
   * Creates namespace
   * @param this Any object or a function
   * @param name The name, separate by '"[]. symbols, like "my.awesome.namespace[with][details]"
   */
  function namespace(name) {
      var ns = this, p = name.split(/[\[\]."']/gi).filter(function (x) { return !!x && !!x.trim(); });
      for (var i = 0; i < p.length; i++) {
          ns[p[i]] = ns[p[i]] || new Namespace(p[i]);
          ns = ns[p[i]];
      }
      return ns;
  }

  exports.Namespace = Namespace;
  exports.namespace = namespace;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=namespace.js.map
