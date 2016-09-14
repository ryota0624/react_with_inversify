import * as React from "react";
import { Usecase } from "../../usecase/share/usecase"

export abstract class Controller<P, S> extends React.Component<P, S>{
  runUsecase<I, O>(usecase: Usecase<I, O>, input: I): O {
    return usecase.call(input);
  }

  abstract render(): JSX.Element;
}