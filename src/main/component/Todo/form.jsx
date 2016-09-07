import React from "react";
import { Item } from "./item";

export class TodoForm extends React.Component {
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
        <button onClick={this.onSubmit.bind(this)}>btn</button>
      </span>
    )
  }
  onChange(event) {
    this.setState({ text: event.target.value });
  }
  onSubmit() {
    const { text } = this.state
    if (!(text.length > 0)) {
      alert("fail")
      return
    }
    this.props.addTodo(text);
    this.setState({ text: "" })
  }
}
