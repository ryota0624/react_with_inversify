import * as ReactDom from "react-dom";
import * as React from "react";
import { Top } from "./component/top";

export function boot() {
  ReactDom.render(<Top />, document.getElementById("app"));
}