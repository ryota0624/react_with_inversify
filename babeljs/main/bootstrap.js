"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.boot = boot;

var _reactDom = require("react-dom");

var ReactDom = _interopRequireWildcard(_reactDom);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _top = require("./component/top");

var _top2 = _interopRequireDefault(_top);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//const HOGE = require("./HOGE")
function boot() {
  ReactDom.render(_react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(_top2.default, null)
  ), document.getElementById("app"));
}