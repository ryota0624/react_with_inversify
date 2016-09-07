"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TodoForm = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _item = require("./item");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoForm = exports.TodoForm = function (_React$Component) {
  _inherits(TodoForm, _React$Component);

  function TodoForm(props) {
    _classCallCheck(this, TodoForm);

    var _this = _possibleConstructorReturn(this, (TodoForm.__proto__ || Object.getPrototypeOf(TodoForm)).call(this, props));

    _this.state = {
      text: ""
    };
    return _this;
  }

  _createClass(TodoForm, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "span",
        null,
        _react2.default.createElement("input", { value: this.state.text, onChange: this.onChange.bind(this) }),
        _react2.default.createElement(
          "button",
          { onClick: this.onSubmit.bind(this) },
          "btn"
        )
      );
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      this.setState({ text: event.target.value });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var text = this.state.text;

      if (!(text.length > 0)) {
        alert("fail");
        return;
      }
      this.props.addTodo(text);
      this.setState({ text: "" });
    }
  }]);

  return TodoForm;
}(_react2.default.Component);