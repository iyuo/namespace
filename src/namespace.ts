import * as iyuo from "@iyuo/context";

export class Namespace {
  public name: string;
  constructor(name: string) {
    this.name = name;
    this.init(name);
  }

  public init(name: string) {
  }
}

export interface NameSpaceContext<T> extends iyuo.Context<T> {
  namespace(name: string): NameSpaceContext<Namespace>;
}

export function namespace(this: any, name: string): NameSpaceContext<Namespace> {
  let ns = this,
    p = name.split(/[\[\]."']/gi).filter(x => !!x);
  for (var i = 0; i < p.length; i++) {
    ns[p[i]] = ns[p[i]] || new Namespace(p[i]);
    ns = ns[p[i]];
  }
  return new iyuo.Context<Namespace>(ns) as NameSpaceContext<Namespace>;
}

(iyuo.Context.prototype as any).namespace = function(name: string): NameSpaceContext<Namespace> {
  return namespace.call(this.context(), name);
};