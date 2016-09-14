import * as React from "react";
import { List } from "./list";
import { TodoForm } from "./form";

import { IndexPageController } from "../../controller/todo/indexPage";


export class Top extends IndexPageController {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.doC();
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