/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { Item } from "../../../main/component/Todo/item";
import { Todo } from "../../../main/model/Todo";
import * as React from "react";

import { shallow } from "enzyme";

describe("todo-item", () => {
  it("todo in todoText", () => {
    const todo = new Todo("test", new Date, 0);
    const wrapper = shallow(<Item todo={todo}/>);
    expect(wrapper.text()).toContain("test")
  })
})