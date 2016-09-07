"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Top = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _TodoStore = require("../store/TodoStore");

var _list = require("./Todo/list");

var _form = require("./Todo/form");

var _TodoCreator = require("../actionCreator/TodoCreator");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Top = exports.Top = function (_React$Component) {
    _inherits(Top, _React$Component);

    function Top(props) {
        _classCallCheck(this, Top);

        var _this = _possibleConstructorReturn(this, (Top.__proto__ || Object.getPrototypeOf(Top)).call(this, props));

        _this.onChangeStore = _this.onChangeStore.bind(_this);
        return _this;
    }

    _createClass(Top, [{
        key: "onChangeStore",
        value: function onChangeStore() {
            this.forceUpdate();
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.props.todoStore.addChangeListener(this.onChangeStore);
        }
    }, {
        key: "addTodo",
        value: function addTodo(text) {
            this.props.todoActionCreator.add(text);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(_list.List, { todos: this.props.todoStore.findAll() }),
                React.createElement(_form.TodoForm, { addTodo: this.addTodo.bind(this) })
            );
        }
    }]);

    return Top;
}(React.Component);

Top.defaultProps = {
    todoStore: _TodoStore.todoStore,
    todoActionCreator: _TodoCreator.todoActionCreator
};