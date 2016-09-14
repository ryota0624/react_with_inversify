require("reflect-metadata");

const { Item } = require("../../js/component/Todo/item");
const { Todo } = require("../../js/model/Todo");
const { List } = require("../../js/component/Todo/list");
const { TodoForm } = require("../../js/component/Todo/form");


const React = require("react");
const { shallow } = require("enzyme");

// const todo = new Todo("test", new Date, 0);
// const wrapper = shallow(React.createElement(Item, { todo }));
// const nextTodo = new Todo("next", new Date, 1);
// wrapper.setProps({ todo: nextTodo });
// wrapper.simulate("click");
// // wrapper.forEach(int => (int.props()))

// const todos = [1, 2, 3, 4, 5].map(i => new Todo(`test${i}`, new Date, i));
// const wrapper = shallow(React.createElement(List, { todos }));
// // const i = wrapper.map(i => i.contains(React.createElement(Item, {todo: todos[2]})));
// const i = wrapper.debug()
// (wrapper.instance())
// describe("todo-item", () => {
//   it("todo in todoText", () => {
//     const todo = new Todo("test", new Date, 0);
//     const wrapper = shallow(<Item todo={todo}/>);
//     expect(wrapper.text()).toContain("test")
//   })
// })

const i = shallow(React.createElement(TodoForm));
const c = i.childAt(1)
i.setState({ text: "hogehoge" })
c.simulate("click")
(i.html())