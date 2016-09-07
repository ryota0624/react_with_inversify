import React from "react";
import { TodoStore, todoStore } from "../store/TodoStore";
import { List } from "./Todo/list";
import { TodoForm } from "./Todo/form";

import { todoActionCreator,TodoActionCreator } from "../actionCreator/TodoCreator";

export class Top extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeStore = this.onChangeStore.bind(this);
  }
  onChangeStore() {
    this.forceUpdate();
  }
  componentDidMount() {
    this.props.todoStore.addChangeListener(this.onChangeStore);
  }
  addTodo(text) {
    this.props.todoActionCreator.add(text)
  }
  render() {
    return (
      <div>
        <List todos={this.props.todoStore.findAll()}/>
        <TodoForm addTodo={this.addTodo.bind(this)}/>
      </div>
    )
  }
}

Top.defaultProps = {
  todoStore: todoStore,
  todoActionCreator: todoActionCreator
}