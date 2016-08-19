/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />
import { Todo } from "../../main/model/Todo";
describe("サンプル", () => {
  const todo = new Todo("name", new Date, 0);
  it("hoge", () => expect(todo.text).toBe("name"))
})