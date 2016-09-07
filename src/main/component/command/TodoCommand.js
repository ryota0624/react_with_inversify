export class TodoCommand {
    addTodo(text) {
        this.props.actionCreator.add(text);
    }
}
export const todoCommand = new TodoCommand;
