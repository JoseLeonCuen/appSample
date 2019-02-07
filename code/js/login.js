"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _header = _interopRequireDefault(require("./header"));

var _username = _interopRequireDefault(require("./username"));

var _password = _interopRequireDefault(require("./password"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Login =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login(props) {
    var _this;

    _classCallCheck(this, Login);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Login).call(this, props));
    _this.state = {
      title: "Welcome",
      userLabel: "Username",
      passLabel: "Password",
      username: "",
      password: "",
      invalidUsername: false,
      invalidPassword: false,
      tryToSubmit: false,
      button: "Login"
    };
    return _this;
  }

  _createClass(Login, [{
    key: "updateValue",
    value: function updateValue(e) {
      var _this2 = this;

      var value = e.target.value,
          property = e.target.id;
      this.setState(function (state) {
        var newState = _objectSpread({}, state);

        newState[property] = value;
        return newState;
      }, function () {
        if (property == "password") {
          _this2.validateForm();
        }
      });
    }
  }, {
    key: "validateForm",
    value: function validateForm(login) {
      var user = this.state.username,
          validUsername = /[a-zA-Z]{4,}/.test(user),
          pass = this.state.password,
          isLongEnough = /.{9,}/,
          hasSpecialChar = /\W/,
          hasUpperCase = /[A-Z]/,
          tryToSubmit = !!login || this.state.tryToSubmit,
          invalidPassword = !isLongEnough.test(pass) || !hasSpecialChar.test(pass) || !hasUpperCase.test(pass);
      this.setState(function (state) {
        return _objectSpread({}, state, {
          invalidPassword: invalidPassword,
          tryToSubmit: tryToSubmit
        });
      });

      if (!invalidPassword && validUsername && login) {
        login();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement("div", null, React.createElement(_header.default, {
        text: this.state.title
      }), React.createElement("form", null, React.createElement(_username.default, {
        label: this.state.userLabel,
        value: this.state.username,
        update: function update(e) {
          return _this3.updateValue(e);
        }
      }), React.createElement(_password.default, {
        label: this.state.passLabel,
        value: this.state.password,
        update: function update(e) {
          return _this3.updateValue(e);
        },
        display: this.state.invalidPassword && this.state.tryToSubmit
      }), React.createElement("button", {
        type: "button",
        className: "loginButton blueStyle",
        onClick: function onClick() {
          return _this3.validateForm(_this3.props.login);
        }
      }, this.state.button)));
    }
  }]);

  return Login;
}(React.Component);

exports.default = Login;