///<reference path="../../node_modules/@types/node/index.d.ts" />

import * as Event from "events";
import { Todo } from "../model/Todo";
import { todoActionType } from "../constants/constants";
import { AppDispatcher, dispatcherPayload } from "../dispatcher";

import { injectable, inject } from "inversify";

const CHANGE = "change";

injectable()(Event.EventEmitter);

@injectable()
export class TodoStore extends Event.EventEmitter {
  protected state: Todo[] = [];
  constructor(@inject(AppDispatcher) private dispatcher: AppDispatcher) {
    super();
    this.dispatcher.register(this.register.bind(this));
  }
  
  findAll():Todo[] {
    return this.state;
  }

  findById(id: number): Todo[] {
    const todo = this.state.find((todo) => todo.id == id);
    return todo ? [todo] : [];
  }

  emitChange() {
    this.emit(CHANGE);
  }

  addChangeListener(fn: (any) => any) {
    this.addListener(CHANGE, fn);
  }

  register(action: dispatcherPayload) {
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