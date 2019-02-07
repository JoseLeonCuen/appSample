"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var React = _interopRequireWildcard(require("react"));

var _backArrow = _interopRequireDefault(require("./backArrow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// dependencies
// files
function Header(props) {
  return React.createElement("h1", {
    className: "topHeader blueStyle"
  }, props.logout ? React.createElement(_backArrow.default, {
    logout: props.logout
  }) : null, props.text);
}