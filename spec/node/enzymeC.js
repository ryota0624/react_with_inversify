const React = require("react");

const { Item } = require("../../js/component/Todo/item");
const { Top } = require("../../js/component/Top");

const { Todo } = require("../../js/model/Todo");
const { List } = require("../../js/component/Todo/list");
const { TodoForm } = require("../../js/component/Todo/form");


const { shallow } = require("enzyme");

const wrapper = shallow(React.createElement(Top));
const form = wrapper.childAt(1);
form.setState({ text: "hoge!" });
(form)
(wrapper.html())
