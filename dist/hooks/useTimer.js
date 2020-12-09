"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTimer = void 0;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var timeAtPause = 0;

var useTimer = function useTimer(minutes, running, setRunning, timeAtLoad, reset, setReset) {
  var _useState = (0, _react.useState)(minutes * 60000),
      _useState2 = _slicedToArray(_useState, 2),
      ms = _useState2[0],
      setMs = _useState2[1];

  var _useState3 = (0, _react.useState)(timeAtLoad),
      _useState4 = _slicedToArray(_useState3, 2),
      startTime = _useState4[0],
      setStartTime = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      count = _useState6[0],
      setCount = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      completed = _useState8[0],
      setCompleted = _useState8[1];

  var timeLeft = function timeLeft() {
    if (count === 0) return ms;else return ms + startTime - Date.now();
  };

  (0, _react.useEffect)(function () {
    if (reset) {
      setRunning(0);
      setCount(0);
    }
  }, [reset, setRunning]);
  (0, _react.useEffect)(function () {
    var startTimer = function startTimer() {
      if (timeLeft() > 0) {
        setMs(timeAtPause);
        setStartTime(Date.now());
        if (setRunning) setRunning(true);
      }
    };

    var pauseTimer = function pauseTimer() {
      if (timeLeft() > 0) {
        timeAtPause = timeLeft();
        if (setRunning) setRunning(false);
      }
    };

    var resetTimer = function resetTimer() {
      timeAtPause = minutes * 60000;
      setMs(timeAtPause);
      setStartTime(Date.now());
      if (setReset) setReset(false);
    };

    if (count > 0 && !reset) {
      running ? startTimer() : pauseTimer();
    } else if (reset) resetTimer();else if (count === 0 && running) resetTimer();
  }, [running, minutes, reset]);
  (0, _react.useEffect)(function () {
    if (timeLeft() > 0 && running) {
      var tick = setInterval(function () {
        return setCount(count + 1);
      }, 100);
      return function () {
        return clearInterval(tick);
      };
    } else if (timeLeft() <= 0 && running && !completed) setCompleted(true);
  }, [timeLeft(), running, count]);
  return {
    timeLeft: timeLeft(),
    completed: completed
  };
};

exports.useTimer = useTimer;