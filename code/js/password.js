"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Password;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// dependencies
function Password(props) {
  var warning = {
    must: "The password must:",
    requirements: ["Be at least 9 characters long", "Contain at least one uppercase letter", "Contain at least one special character"]
  };

  function requirements(requirements) {
    return requirements.map(function (req, idx) {
      return React.createElement("li", {
        key: idx
      }, req);
    });
  }

  return React.createElement("div", null, React.createElement("input", {
    type: "password",
    className: "formInput",
    id: "password",
    minLength: "9",
    placeholder: props.label,
    value: props.value,
    onChange: props.update,
    required: true
  }), props.display ? React.createElement("div", {
    className: "invalidPassword"
  }, React.createElement("span", null, warning.must), React.createElement("ul", {
    className: "passwordRequirements"
  }, requirements(warning.requirements))) : null);
}