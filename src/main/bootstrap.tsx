import * as ReactDom from "react-dom";
import * as React from "react";
import { Top } from "./view/component/Todo/todoContainer";

export function boot() {
  ReactDom.render(
    <div>
      <Top />
    </div>, document.getElementById("app"));
}