"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "useTimer", {
  enumerable: true,
  get: function get() {
    return _useTimer.useTimer;
  }
});
exports["default"] = void 0;

var _Timer = _interopRequireDefault(require("./components/Timer"));

var _useTimer = require("./hooks/useTimer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _Timer["default"];
exports["default"] = _default;