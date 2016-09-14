import * as React from "react";
import { TodoDto } from "../../Dtos/TodoDto";
export class Item extends React.PureComponent<{ todo: TodoDto }, any> {
  constructor(props) {
    super(props);
  }
  render() {
    const {todo} = this.props;
    (todo)
    return (
      <li key={String(todo.id)}>{todo.name}</li>
    )
  }
}