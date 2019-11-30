import { Context } from "@iyuo/context";
import { namespace, NameSpaceContext } from "../src/namespace"

describe("Simple tests", () => {
  test("Create a context", () => {
    let obj = new Context("Test");
    expect(obj.context()).toBe("Test");
  });

  test("Create a namespace", () => {
    let obj = new Context({});
    expect(namespace.call(obj.context(), 'a.b.c')).toBeDefined();
  });

  test("Create a plugin", () => {
    let obj = new Context({});
    expect((obj as NameSpaceContext<any>).namespace('a.b.c')).toBeDefined();
  });
});
