import * as React from "react";
import { List } from "../component/Todo/list";
import { TodoForm } from "../component/Todo/form";

import { IndexPageController } from "../controller/indexPage";


export class Top extends IndexPageController {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.getTodoList();
    this.changeHandler();
  }

  componentWillUnmount() {
    this.removeHandler();
  }

  render() {
    return (
      <div>
        <List todos={this.state.todoList!}/>
        <TodoForm addTodo={this.addTodo.bind(this)}/>
      </div>
    )
  }
}