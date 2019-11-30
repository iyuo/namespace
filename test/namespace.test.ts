import { Context } from "@iyuo/context";
import { namespace } from "../src/namespace"

describe("Simple tests", () => {
  test("Create a context", () => {
    let obj = new Context("Test");
    expect(obj.context()).toBe("Test");
  });

  test("Create a namespace", () => {
    let obj: any = {};
    let c = new Context(obj);
    expect(namespace.call(c.context(), 'a.b.c')).toBeDefined();
    expect(obj.a).toBeDefined();
    expect(obj.a.b).toBeDefined();
    expect(obj.a.b.c).toBeDefined();
  });

  test("Create a plugin", () => {
    let obj: any = {};
    let c = new Context(obj);
    c.use("uno.dos.tres")
    .map(namespace)
    .use("quatro.cinco.seis")
    .map(namespace);

    expect(obj.uno.dos.tres.quatro.cinco.seis).toBeDefined();
  });
});
