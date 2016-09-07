import * as ReactDom from "react-dom";
import React from "react";
import Top from "./component/top"
//const HOGE = require("./HOGE")
export function boot() {
  ReactDom.render(
    <div>
      <Top />
    </div>, document.getElementById("app"));
}