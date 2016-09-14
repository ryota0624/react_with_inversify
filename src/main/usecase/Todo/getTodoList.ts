import { Usecase } from "../share/usecase";
import * as I from "immutable";
import Todo from "../../domain/model/Todo";
import { TodoRepository } from "../../domain/repository/TodoRepository";

export interface Input {}
export type Output = Promise<I.List<Todo>>

export default class GetTodoListUsecase implements Usecase<null, Output> {
  constructor(private todoRepository: TodoRepository) {}
  call(): Output {
    return this.todoRepository.findAll();
  }
}