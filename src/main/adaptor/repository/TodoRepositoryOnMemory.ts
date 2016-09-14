/// <reference path="../../../../node_modules/@types/node/index.d.ts" />

import { TodoRepository } from "../../domain/repository/TodoRepository";
import * as I from "immutable";
import Todo from "../../domain/model/Todo";
import { EventEmitter } from "events";
const CHANGEEVENT = "CHANEG";
export default class TodoRepositoryOnMemory extends EventEmitter implements TodoRepository {
  static list = I.List<Todo>();
  findById(id: number): Promise<Todo> {
    return new Promise<Todo>((resolve, reject) => {
      resolve(TodoRepositoryOnMemory.list.get(id));
    })
  }

  findAll(): Promise<I.List<Todo>> {
    return new Promise<I.List<Todo>>(resolve => resolve(TodoRepositoryOnMemory.list))
  }

  store(todo: Todo): Promise<void> {
    TodoRepositoryOnMemory.list = TodoRepositoryOnMemory.list.push(todo);
    this.emitChange();
    return new Promise<void>(resolve => resolve());
  }

  onSub(fn) {
    this.addListener(CHANGEEVENT, fn);
  }

  removeSub(fn) {
    this.removeListener(CHANGEEVENT, fn);
  }

  emitChange() {
    this.emit(CHANGEEVENT);
  }
}

export const todoRepository = new TodoRepositoryOnMemory;