import * as ReactDom from "react-dom";
import * as React from "react";
import { Top } from "./component/top";

export function boot() {
  ReactDom.render(
    <div>
      <Top />
    </div>, document.getElementById("app"));
}