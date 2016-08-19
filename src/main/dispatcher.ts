import * as flux from "flux";
import { addTodoPayload } from "./action/todoAction";

export type dispatcherPayload = addTodoPayload;

export class AppDispatcher extends flux.Dispatcher<dispatcherPayload> { 
  dispatch(action: dispatcherPayload) {
    super.dispatch(action);
    console.log(action)
  }
}
export const dispatcher = new AppDispatcher;
