import { addTodo } from "../action/todoAction";
import { Todo } from "../model/Todo";
import { kernel } from "../inversify.config";
import { AppDispatcher } from "../dispatcher";
export function addTodoRequest(text: string) {
  const todo = new Todo(text, new Date, Math.floor(Math.random() * 100))
  setTimeout(() => kernel.get<AppDispatcher>(AppDispatcher).dispatch(addTodo(todo)), 100);
}