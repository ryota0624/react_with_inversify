import Todo from "../../domain/model/Todo";
export class TodoDto {
  constructor(
    readonly name: string,
    readonly id: number,
  ) {}
}

export function todo2Dto(todo: Todo) {
  return new TodoDto(todo.name.value, todo.id);
}