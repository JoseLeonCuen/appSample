"use strict";

var React = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _login = _interopRequireDefault(require("./login"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// dependencies
// files
var root = document.getElementById('root');
console.log(root);
console.log("HELLO");
(0, _reactDom.render)(React.createElement("div", null, React.createElement(_login.default, null), React.createElement("span", null, "Hello world")), root);