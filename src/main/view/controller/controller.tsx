import * as React from "react";
import { Usecase } from "../../usecase/share/usecase"

export abstract class Controller<Props, State> extends React.Component<Props, State> {
  abstract render(): JSX.Element;
  
  usecaseRunner<Deps, Input, Output>(
    RunUsecase: { new (deps: Deps): Usecase<Deps, Input, Output> },
    deps: Deps,
    input: Input,
    ): Output {
    return (new RunUsecase(deps)).call(input);
  }
}