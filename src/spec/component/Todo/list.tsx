/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { List } from "../../../main/component/Todo/list";
import { Item } from "../../../main/component/Todo/item";

import { Todo } from "../../../main/model/Todo";
import * as React from "react";

import { shallow } from "enzyme";

describe("todo-list", () => {
  it("todolist", () => {
    const todos = [1, 2, 3, 4, 5].map(i => new Todo(`test${i}`, new Date, i));
    const wrapper = shallow(<List todos={todos}/>);
    expect(wrapper.html()).toContain("test4")
  })
})