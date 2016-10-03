import * as React from "react";
import { Todo } from "../../model/Todo";
import { Item } from "./item";
interface listableModel {
  id: number
  key: string
}

interface Props {
  // ItemComponent: new(props: P|listableModel) => React.Component<P&listableModel, any>
  // items: listableModel[]
  todos: Todo[]
}
export class List extends React.Component<Props, {}> {
  render() {
    const {todos} = this.props;
    return (
      <ul>
        {todos.map(itemProp => <Item key={itemProp.id} todo={itemProp}/>)}
      </ul>
    )
  }
}