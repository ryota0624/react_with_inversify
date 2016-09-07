import { todoActionCreator,TodoActionCreator } from "../../actionCreator/TodoCreator";

export class TodoCommand {
  props: any
  addTodo(text: string) {
    this.props.actionCreator!.add(text)
  }
}

export const todoCommand = new TodoCommand;