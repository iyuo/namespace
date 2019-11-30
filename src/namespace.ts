import {Context as iyuoContext} from "@iyuo/context";

export declare class Context<T> extends iyuoContext<T> {
  constructor(context: T);
}

export class Namespace {
  public name: string;
  constructor(name: string) {
    this.name = name;
    this.init(name);
  }

  public init(name: string) {
  }
}

export interface Context<T> {
  namespace(name: string): Context<Namespace>;
}

Context.prototype.namespace = function(name: string): Context<Namespace> {
  let ns = this.context(),
    p = name.split(/[\[\]."']/gi).filter(x => !!x);
  for (var i = 0; i < p.length; i++) {
    ns[p[i]] = ns[p[i]] || new Namespace(p[i]);
    ns = ns[p[i]];
  }
  return new Context<Namespace>(ns);
};