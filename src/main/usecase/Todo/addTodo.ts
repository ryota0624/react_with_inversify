import { Usecase } from "../share/usecase";
import Todo, {todoFactory} from "../../domain/model/Todo";
import { TodoRepository } from "../../domain/repository/TodoRepository";

export interface Input {
  name: string
}
export type Output = Promise<boolean>

export default class AddTodoUsecase implements Usecase<Input, Output> {
  constructor(private todoRepository: TodoRepository) {}
  call(input: Input): Output {
    (input)
    const todo = todoFactory({ name: input.name });
    return this.todoRepository.store(todo);
  }
}