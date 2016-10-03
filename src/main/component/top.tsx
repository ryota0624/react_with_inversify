import * as React from "react";
import { TodoStore, todoStore } from "../store/TodoStore";
import { List } from "./Todo/list";
import { TodoForm } from "./Todo/form";
import {Todo} from "../model/Todo"


const stores: [TodoStore] = [todoStore];
interface todoFnc {
  todos: Todo[],
  callFilterTodo: (fnc: (todo: Todo) => void) => Todo[],
  connecter: (func: () => void) => () => void
}

function getState(stores: [TodoStore]): todoFnc {
  const todos = stores[0].findAll()
  const callFilterTodo = (fun: (td: Todo) => void) => {
    const filterd = todos.filter(todo => todo.text.length > 4)
    filterd.forEach(fun)
    return filterd
  }
  const connecter = (fun) => {
    stores[0].addChangeListener(fun);
    return () => stores[0].removeChangeListener(fun)
  }
  return ({ todos, callFilterTodo, connecter })
}

export class Top extends React.Component<todoFnc, { todos? }> {
  // public static defaultProps: {todoStore:TodoStore} = {todoStore: todoStore}
  unMount
  constructor(props) {
    super(props);
    this.onChangeStore = this.onChangeStore.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {}
  }
  onChangeStore() {
    this.forceUpdate();
  }
  componentDidMount() {
    this.unMount = this.props.connecter(this.onChange);
  }
  componentWillUnmount() {
    this.unMount()
  }
  render() {
    console.log(todoStore)
    return (
      <div>
        <List todos={this.state.todos || this.props.todos}/>
        <TodoForm />
      </div>
    )
  }

  onChange() {
    console.log(this.props.todos)
    this.setState({ todos: this.props.callFilterTodo((todo) => console.log(todo)) })
  }
}

function ToStores<S, P>(stores: S, getState: (stores: S) => P) {
  return (Component: React.ComponentClass<P>): React.ComponentClass<P> => {
    return class extends React.Component<P, any> {
      render() {
        return <Component {...getState(stores)}/>
      }
    }
  }
}

export default ToStores([todoStore], getState)(Top)