import { addTodo } from "../action/todoAction";
import { Todo } from "../model/Todo";
import { AppDispatcher, dispatcher } from "../dispatcher";
// export function addTodoRequest(text: string) {
//   const todo = new Todo(text, new Date, Math.floor(Math.random() * 100))
//   setTimeout(() => dispatcher.dispatch(addTodo(todo)), 100);
// }

export class TodoActionCreator {
  constructor(private dispatcher: AppDispatcher) {
  }

  add(text: string) {
    const todo = new Todo(text, new Date, Math.floor(Math.random() * 100))
    setTimeout(() => this.dispatcher.dispatch(addTodo(todo)), 100);
  }
}

export const todoActionCreator = new TodoActionCreator(dispatcher);