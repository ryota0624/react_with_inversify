import * as React from "react";
import { Item } from "./item";
import { addTodoRequest } from "../../actionCreator/addTodoCreator";

export class TodoForm extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
  }
  render() {
    return (
      <span>
        <input value={this.state.text} onChange={this.onChange.bind(this)}/>
        <button onClick={this.onSubmit.bind(this)} />
      </span>
    )
  }
  onChange(event: React.FormEvent<any>) {
    this.setState({ text: event.target.value });
  }
  onSubmit() {
    addTodoRequest(this.state.text);
  }
}
