import { Kernel } from "inversify";
import { TodoStore } from "./store/TodoStore";
import { AppDispatcher } from "./dispatcher";

export const kernel = new Kernel();
kernel.bind<AppDispatcher>(AppDispatcher).to(AppDispatcher).inSingletonScope();
kernel.bind<TodoStore>(TodoStore).to(TodoStore).inSingletonScope();
