"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./circle.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Circle = function Circle(_ref) {
  var children = _ref.children,
      fontSize = _ref.fontSize,
      size = _ref.size,
      bgColor = _ref.bgColor,
      minutes = _ref.minutes,
      fill = _ref.fill,
      playState = _ref.playState,
      reset = _ref.reset;
  var bg = "".concat(fill, "29");
  var sec = minutes * 60;
  var animations = {
    left: "".concat(sec * 0.5, "s linear 0s 1 normal both ").concat(playState, " left"),
    right: "".concat(sec * 0.5, "s linear ").concat(sec * 0.5, "s 1 normal both ").concat(playState, " right"),
    dot: "".concat(sec, "s linear 0s 1 normal both ").concat(playState, " dot")
  };
  var dotspan = {
    width: size * 0.1,
    height: size * 0.1,
    background: fill
  };
  var bar = {
    background: bg,
    clip: "rect(0px, ".concat(size, "px, ").concat(size, "px, ").concat(size * 0.5, "px)")
  };
  var progress = {
    background: fill,
    clip: "rect(0px, ".concat(size * 0.5, "px, ").concat(size, "px, 0px)")
  };

  var leftProg = _objectSpread(_objectSpread({}, progress), {}, {
    animation: animations.left,
    zIndex: 1
  });

  var rightProg = _objectSpread(_objectSpread({}, progress), {}, {
    animation: animations.right
  });

  var dot = {
    marginTop: size * -0.05,
    height: size * 0.1,
    animation: animations.dot
  };
  var inner = {
    width: size * 0.8,
    height: size * 0.8,
    background: bgColor,
    margin: "".concat(size * -0.4, "px 0 0 ").concat(size * -0.4, "px")
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "wrap",
    style: {
      height: size,
      width: size
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "circle inner",
    style: inner
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "circle"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "time",
    style: {
      fontSize: fontSize,
      color: fill
    }
  }, children), /*#__PURE__*/_react["default"].createElement("div", {
    className: "circle",
    style: {
      zIndex: 1,
      boxShadow: 'none'
    }
  }, !reset ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "dot",
    style: dot
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: dotspan
  })) : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "bar",
    style: bar
  }, !reset ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "progress",
    style: leftProg
  }) : null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "bar right",
    style: bar
  }, !reset ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "progress",
    style: rightProg
  }) : null))));
};

var _default = Circle;
exports["default"] = _default;
Circle.propTypes = {
  size: _propTypes["default"].number,
  fontSize: _propTypes["default"].number,
  bgColor: _propTypes["default"].string,
  minutes: _propTypes["default"].number,
  fill: _propTypes["default"].string,
  playState: _propTypes["default"].string,
  reset: _propTypes["default"].bool
};