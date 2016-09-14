import Todo from "../model/Todo";
import * as I from "immutable";
export interface TodoRepository {
  findById(id: number): Promise<Todo>;
  findAll(): Promise<I.List<Todo>>;
  store(todo: Todo): Promise<void>;
}