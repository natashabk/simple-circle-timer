"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Circle = _interopRequireDefault(require("./Circle"));

var _useTimer2 = require("../hooks/useTimer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Timer = function Timer(props) {
  var minutes = props.minutes,
      running = props.running,
      setRunning = props.setRunning,
      timeAtLoad = props.timeAtLoad,
      reset = props.reset,
      setReset = props.setReset,
      showMs = props.showMs;

  var _useTimer = (0, _useTimer2.useTimer)(minutes, running, setRunning, timeAtLoad, reset, setReset),
      timeLeft = _useTimer.timeLeft,
      completed = _useTimer.completed;

  if (completed) props.onComplete();
  var mins = Math.floor(timeLeft % 360000 / 60000);
  var secs = Math.floor(timeLeft % 60000 / 1000);
  var mils = Math.floor(timeLeft % 60000 / 10);

  var pad = function pad(num) {
    return ('00' + num).slice(-2);
  };

  var displayTime = "".concat(pad(mins), ":").concat(pad(secs)).concat(showMs ? ":".concat(pad(mils)) : '');
  return /*#__PURE__*/_react["default"].createElement(_Circle["default"], {
    size: props.size,
    fontSize: props.fontSize,
    minutes: props.minutes,
    fill: props.fillColor,
    bgColor: props.bgColor,
    playState: running ? 'running' : 'paused',
    reset: reset
  }, timeLeft > 0 ? displayTime : props.completeMsg);
};

var _default = Timer;
exports["default"] = _default;
Timer.propTypes = {
  size: _propTypes["default"].number,
  fontSize: _propTypes["default"].number,
  minutes: _propTypes["default"].number,
  fillColor: _propTypes["default"].string,
  bgColor: _propTypes["default"].string,
  showMs: _propTypes["default"].bool,
  onComplete: _propTypes["default"].func,
  completeMsg: _propTypes["default"].string,
  running: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].number]),
  setRunning: _propTypes["default"].func,
  timeAtLoad: _propTypes["default"].number,
  reset: _propTypes["default"].bool,
  setReset: _propTypes["default"].func
};
Timer.defaultProps = {
  size: 200,
  fontSize: 40,
  minutes: 1,
  fillColor: '#5bcc69',
  bgColor: 'white',
  showMs: false,
  onComplete: function onComplete() {
    return console.log('Timer complete');
  },
  completeMsg: '✓',
  running: true,
  setRunning: null,
  timeAtLoad: Date.now(),
  reset: false,
  setReset: null
};