(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@iyuo/context')) :
  typeof define === 'function' && define.amd ? define(['exports', '@iyuo/context'], factory) :
  (global = global || self, factory(global.iyuo = {}, global.context));
}(this, (function (exports, context) { 'use strict';

  var Namespace = /** @class */ (function () {
      function Namespace(name) {
          this.name = name;
          this.init(name);
      }
      Namespace.prototype.init = function (name) {
      };
      return Namespace;
  }());
  Context.prototype.namespace = function (name) {
      var ns = this.context(), p = name.split(/[\[\]."']/gi).filter(function (x) { return !!x; });
      for (var i = 0; i < p.length; i++) {
          ns[p[i]] = ns[p[i]] || new Namespace(p[i]);
          ns = ns[p[i]];
      }
      return new Context(ns);
  };

  exports.Namespace = Namespace;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=namespace.js.map
