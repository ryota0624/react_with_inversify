import * as React from "react";
import { Item } from "./item";
import { TodoDto } from "../../Dtos/TodoDto";
export class List extends React.PureComponent<{todos: TodoDto[]}, any> {
  render() {
    const {todos} = this.props; 
    return (
      <ul>
        {todos.map(todo => <Item key={todo.id} todo={todo}/>)}
      </ul>
    )
  }
}