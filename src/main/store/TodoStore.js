import * as Event from "events";
import { todoActionType } from "../constants/constants";
import { dispatcher } from "../dispatcher";
const CHANGE = "change";
export class TodoStore extends Event.EventEmitter {
    constructor(dispatcher) {
        super();
        this.dispatcher = dispatcher;
        this.state = [];
        this.dispatcher.register(this.register.bind(this));
    }
    findAll() {
        return this.state;
    }
    findById(id) {
        const todo = this.state.find((todo) => todo.id == id);
        return todo;
    }
    emitChange() {
        this.emit(CHANGE);
    }
    addChangeListener(fn) {
        this.addListener(CHANGE, fn);
    }
    removeChangeListener(fn) {
        this.removeListener(CHANGE, fn);
    }
    register(action) {
        switch (action.type) {
            case todoActionType.add: {
                this.state = add(this.state, action.todo);
                this.emitChange();
            }
        }
    }
}
function add(state, todo) {
    return state.concat(todo);
}
export const todoStore = new TodoStore(dispatcher);
