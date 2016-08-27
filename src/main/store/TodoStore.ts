/// <reference path="../../../node_modules/@types/node/index.d.ts" />

import * as Event from "events";
import { Todo } from "../model/Todo";
import { todoActionType } from "../constants/constants";
import { AppDispatcher, dispatcherPayload, dispatcher } from "../dispatcher";
import * as monad from "tsmonad";

const CHANGE = "change";

export class TodoStore extends Event.EventEmitter {
  private state: Todo[] = [];
  constructor(private dispatcher: AppDispatcher) {
    super();
    this.dispatcher.register(this.register.bind(this));
  }
  
  findAll():Todo[] {
    return this.state;
  }

  findById(id: number) :monad.Maybe<Todo> {
    const todo = this.state.find((todo) => todo.id == id);
    return todo ? monad.Maybe.just<Todo>(todo) : monad.Maybe.nothing<Todo>();
  }

  private emitChange() {
    this.emit(CHANGE);
  }

  addChangeListener(fn: (any) => any) {
    this.addListener(CHANGE, fn);
  }

  removeChangeListener(fn: (any) => any) {
    this.removeListener(CHANGE, fn);
  }

  private register(action: dispatcherPayload) {
    switch (action.type) {
      case todoActionType.add: {
        this.state = add(this.state, action.todo);
        this.emitChange();
      }
    }
  }
}

function add(state: Todo[], todo: Todo):Todo[] {
  return state.concat(todo);
}

export const todoStore = new TodoStore(dispatcher);