import * as iyuo from "@iyuo/context";
import { Context } from "../src/namespace";

describe("Simple tests", () => {
  test("Create a context", () => {
    let obj = new iyuo.Context("Test");
    expect(obj.context()).toBe("Test");
  });

  test("Create a namespace", () => {
    let obj = new iyuo.Context("Test") as Context<string>;

    expect(obj.namespace('a.b.c')).toBeDefined();
  });
});
