import * as flux from "flux";
import { addTodoPayload } from "./action/todoAction";
import { injectable } from "inversify";

export type dispatcherPayload = addTodoPayload;

injectable()(flux.Dispatcher);

@injectable()
export class AppDispatcher extends flux.Dispatcher<dispatcherPayload> { 
  dispatch(action: dispatcherPayload) {
    super.dispatch(action);
    console.log(action)
  }
}

export const dispatcher = new AppDispatcher;
