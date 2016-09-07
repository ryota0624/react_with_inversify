import * as React from "react";
export class Item extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { todo } = this.props;
        return (<li key={String(todo.id)}>{todo.text}</li>);
    }
}
