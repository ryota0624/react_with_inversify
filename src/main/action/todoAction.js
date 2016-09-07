import { todoActionType } from "../constants/constants";
export function addTodo(todo) {
    return {
        todo,
        type: todoActionType.add
    };
}
