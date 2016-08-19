import * as React from "react";
import { TodoStore, todoStore } from "../store/TodoStore";
import { List } from "./Todo/list";
import { TodoForm } from "./Todo/form";

export class Top extends React.Component<{
  todoStore?: TodoStore
}, any> {
  public static defaultProps: {todoStore:TodoStore} = {todoStore: todoStore}
  constructor(props) {
    super(props);
    this.onChangeStore = this.onChangeStore.bind(this);
  }
  onChangeStore() {
    this.forceUpdate();
  }
  componentDidMount() {
    this.props.todoStore!.addChangeListener(this.onChangeStore);
  }
  render() {
    return (
      <div>
        <List todos={this.props.todoStore!.findAll()}/>
        <TodoForm />
      </div>
    )
  }
}