import GetTodoListUsecase, {GetTodoListUsecaseDeps, GetTodoListUsecaseInput, GetTodoListUsecaseOutput} from "../../../usecase/Todo/getTodoList";
import AddTodoUsecase, {AddTodoUsecaseDependency, AddTodoUsecaseInput, AddTodoUsecaseOutput} from "../../../usecase/Todo/addTodo";
import { Usecase } from "../../../usecase/share/usecase";
import TodoRepository, { todoRepository } from "../../../adaptor/repository/TodoRepositoryOnMemory";
import * as React from "react";
import * as I from "immutable";
import Todo from "../../../domain/model/Todo";
import { TodoDto, todo2Dto } from "../../Dtos/TodoDto";
import { Controller } from "../controller";

// const usecase = Usecase.compose(new GetTodoListUsecase(todoRepository), new AddTodoUsecase(todoRepository));

export interface Props {

}
export interface State {
  todoList?: Array<TodoDto>,
}

export abstract class IndexPageController extends Controller<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
    }
    this.getTodoList = this.getTodoList.bind(this);
  }
  getTodoList(): void {
    this.usecaseRunner(GetTodoListUsecase, { todoRepository }, {}).then(todoList => {
      const todoDtoList = todoList.map(todo => todo2Dto(todo!)).toArray();
      this.setState({ todoList: todoDtoList });
    })
  }

  doC() {
    const composedUsecase = Usecase.compose(GetTodoListUsecase, AddTodoUsecase);
    this.usecaseRunner<
      [GetTodoListUsecaseDeps, AddTodoUsecaseDependency],
      [GetTodoListUsecaseInput, AddTodoUsecaseInput],
      [GetTodoListUsecaseOutput, GetTodoListUsecaseOutput]
      >(composedUsecase,
      [{ todoRepository }, { todoRepository }],
      [{}, { name: "string" }]).forEach((i) => {
        i.then((a) => console.log(a))
      });
  }

  addTodo(name: string): void {
    this.usecaseRunner(AddTodoUsecase, { todoRepository }, { name });
  }

  changeHandler() {
    todoRepository.onSub(this.getTodoList);
  }

  removeHandler() {
    todoRepository.removeSub(this.getTodoList);
  }

  abstract render(): JSX.Element;
}