import GetTodoListUsecase from "../../../usecase/Todo/getTodoList";
import AddTodoUsecase, {AddTodoUsecaseInput, AddTodoUsecaseOutput} from "../../../usecase/Todo/addTodo";
import { Controller } from "../controller";
import TodoRepository, { todoRepository } from "../../../adaptor/repository/TodoRepositoryOnMemory";
import * as React from "react";
import * as I from "immutable";
import Todo from "../../../domain/model/Todo";
import { TodoDto, todo2Dto } from "../../Dtos/TodoDto";

interface Props {

}
interface State {
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
    new GetTodoListUsecase(todoRepository).call().then(todoList => {
      const todoDtoList = todoList.map(todo => todo2Dto(todo!)).toArray();
      this.setState({ todoList: todoDtoList });
    })
  }

  addTodo(name: string): void {
    const uc = new AddTodoUsecase(todoRepository);
    const ucc = uc.compose(uc).compose(uc);
    this.runUsecase<[[AddTodoUsecaseInput, AddTodoUsecaseInput], AddTodoUsecaseInput]
      , [[AddTodoUsecaseOutput, AddTodoUsecaseOutput], AddTodoUsecaseOutput]>
      (ucc, [[{ name }, { name }], {name}])
  }

  changeHandler() {
    todoRepository.onSub(this.getTodoList);
  }

  removeHandler() {
    todoRepository.removeSub(this.getTodoList);
  }

  abstract render(): JSX.Element;
}