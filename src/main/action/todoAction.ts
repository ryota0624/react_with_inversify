import { todoActionType } from "../constants/constants";
import { Todo } from "../model/Todo";
export interface addTodoPayload {
  todo: Todo;
  type: string;
}

export function addTodo(todo: Todo): addTodoPayload {
  return {
    todo,
    type: todoActionType.add
  }
}