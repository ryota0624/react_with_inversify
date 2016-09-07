import React from "react";
import { Todo } from "../../model/Todo";
import { Item } from "./item";
export class List extends React.Component {
  render() {
    const {todos} = this.props; 
    return (
      <ul>
        {todos.map(todo => <Item key={todo.id} todo={todo}/>)}
      </ul>
    )
  }
}