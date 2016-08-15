import * as React from "react";
import { TodoStore } from "../store/TodoStore";
import { List } from "./Todo/list";
import { TodoForm } from "./Todo/Form";


import { kernel } from "../inversify.config";

export class Top extends React.Component<any, any> {
  todoStore: TodoStore = kernel.get<TodoStore>(TodoStore);
  constructor(props) {
    super(props);
    this.onChangeStore = this.onChangeStore.bind(this);
  }
  onChangeStore() {
    this.forceUpdate();
  }
  componentDidMount() {
    this.todoStore.addChangeListener(this.onChangeStore);
  }
  render() {
    return (
      <div>
        <List todos={this.todoStore.findAll()}/>
        <TodoForm />
      </div>
    )
  }
}