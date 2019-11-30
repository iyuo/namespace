/**
 * Namespace class
 */
export class Namespace {
  /** The name of the namespace */
  public name: string;
  constructor(name: string) {
    this.name = name;
    this.init();
  }

  public init() {}
}

/**
 * Creates namespace
 * @param this Any object or a function
 * @param name The name, separate by '"[]. symbols, like "my.awesome.namespace[with][details]"
 */
export function namespace(
  this: any,
  name: string
): Namespace {
  let ns = this,
    p = name.split(/[\[\]."']/gi).filter(x => !!x && !!x.trim());
  for (var i = 0; i < p.length; i++) {
    ns[p[i]] = ns[p[i]] || new Namespace(p[i]);
    ns = ns[p[i]];
  }
  return ns;
}