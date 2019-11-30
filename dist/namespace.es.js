import '@iyuo/context';

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

export { Namespace };
//# sourceMappingURL=namespace.es.js.map
