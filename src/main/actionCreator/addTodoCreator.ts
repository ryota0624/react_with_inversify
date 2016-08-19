import { addTodo } from "../action/todoAction";
import { Todo } from "../model/Todo";
import { AppDispatcher, dispatcher } from "../dispatcher";
export function addTodoRequest(text: string) {
  const todo = new Todo(text, new Date, Math.floor(Math.random() * 100))
  setTimeout(() => dispatcher.dispatch(addTodo(todo)), 100);
}
