import * as flux from "flux";
export class AppDispatcher extends flux.Dispatcher {
    dispatch(action) {
        super.dispatch(action);
        console.log(action);
    }
}
export const dispatcher = new AppDispatcher;
