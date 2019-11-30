import { Context } from '@iyuo/context';

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
    return new Context(ns);
}
Context.prototype.namespace = function (name) {
    return namespace.call(this.context(), name);
};

export { Namespace, namespace };
//# sourceMappingURL=namespace.es.js.map
