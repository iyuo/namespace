(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@iyuo/context')) :
  typeof define === 'function' && define.amd ? define(['exports', '@iyuo/context'], factory) :
  (global = global || self, factory(global.iyuo = {}, global.iyuo));
}(this, (function (exports, iyuo) { 'use strict';

  var Namespace = /** @class */ (function () {
      function Namespace(name) {
          this.name = name;
          this.init(name);
      }
      Namespace.prototype.init = function (name) {
      };
      return Namespace;
  }());
  function namespace(name) {
      var ns = this, p = name.split(/[\[\]."']/gi).filter(function (x) { return !!x; });
      for (var i = 0; i < p.length; i++) {
          ns[p[i]] = ns[p[i]] || new Namespace(p[i]);
          ns = ns[p[i]];
      }
      return new iyuo.Context(ns);
  }
  iyuo.Context.prototype.namespace = function (name) {
      return namespace.call(this.context(), name);
  };

  exports.Namespace = Namespace;
  exports.namespace = namespace;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=namespace.js.map
