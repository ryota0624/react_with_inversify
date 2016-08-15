import * as React from "react";
import { Todo } from "../../model/Todo";

export class Item extends React.Component<{todo: Todo}, any> {
  render() {
    const {todo} = this.props;
    return (
      <li id={String(todo.id)}>{todo.text}</li>
    )
  }
}