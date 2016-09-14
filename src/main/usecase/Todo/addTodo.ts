import { Usecase } from "../share/usecase";
import Todo, { todoFactory } from "../../domain/model/Todo";
import { TodoRepository } from "../../domain/repository/TodoRepository";

export interface AddTodoUsecaseInput {
  name: string
}
export type AddTodoUsecaseOutput = Promise<boolean>

export interface AddTodoUsecaseDependency {
  todoRepository: TodoRepository
}

export default class AddTodoUsecase extends Usecase<AddTodoUsecaseDependency ,AddTodoUsecaseInput, AddTodoUsecaseOutput> {
  constructor(readonly deps: AddTodoUsecaseDependency) {
    super();
  }

  call(input: AddTodoUsecaseInput): AddTodoUsecaseOutput {
    const todo = todoFactory({ name: input.name });
    return this.deps.todoRepository.store(todo);
  }
}