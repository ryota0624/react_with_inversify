import { Usecase } from "../share/usecase";
import Todo, { todoFactory } from "../../domain/model/Todo";
import { TodoRepository } from "../../domain/repository/TodoRepository";

export interface AddTodoUsecaseInput {
  name: string
}
export type AddTodoUsecaseOutput = Promise<boolean>

export default class AddTodoUsecase extends Usecase<AddTodoUsecaseInput, AddTodoUsecaseOutput> {
  constructor(private todoRepository: TodoRepository) {
    super();
   }
  call(input: AddTodoUsecaseInput): AddTodoUsecaseOutput {
    (input)
    const todo = todoFactory({ name: input.name });
    return this.todoRepository.store(todo);
  }
}