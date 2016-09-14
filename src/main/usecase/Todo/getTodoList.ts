import { Usecase } from "../share/usecase";
import * as I from "immutable";
import Todo from "../../domain/model/Todo";
import { TodoRepository } from "../../domain/repository/TodoRepository";

export interface GetTodoListUsecaseInput { }
export type GetTodoListUsecaseOutput = Promise<I.List<Todo>>
export interface GetTodoListUsecaseDeps {
  todoRepository: TodoRepository
}

export default class GetTodoListUsecase extends Usecase<GetTodoListUsecaseDeps, GetTodoListUsecaseInput, GetTodoListUsecaseOutput> {
  constructor(readonly deps: GetTodoListUsecaseDeps) {
    super();
  }
  call(input: GetTodoListUsecaseInput): GetTodoListUsecaseOutput {
    return this.deps.todoRepository.findAll();
  }
}