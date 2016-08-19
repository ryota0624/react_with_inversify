/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />
import "reflect-metadata";
import {TodoStore} from "../../main/store/TodoStore";
import {AppDispatcher} from "../../main/dispatcher";
import {addTodo} from "../../main/action/todoAction";
import {Todo} from "../../main/model/Todo";
describe("TodoStoreのテスト", () => {
  const dispatcher = new AppDispatcher();
  const todoStore = new TodoStore(dispatcher);
  it("findAll default", () => {
    expect(todoStore.findAll().length).toBe(0);
  });

  it("add", () => {
    const todoId = 0;
    const todo = new Todo("test", new Date, todoId);
    dispatcher.dispatch(addTodo(todo));
    expect(todoStore.findById(todoId)[0].text).toBe("test");
  });

  it("findAll after add", () => {
    expect(todoStore.findAll().length).toBe(1);
  });
});