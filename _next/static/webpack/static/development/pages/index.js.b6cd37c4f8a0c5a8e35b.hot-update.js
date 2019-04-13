webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/slider.js":
/*!******************************!*\
  !*** ./components/slider.js ***!
  \******************************/
/*! exports provided: default, Toggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toggle", function() { return Toggle; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./label */ "./components/label.js");
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./typography */ "./components/typography.js");
/* harmony import */ var _slider_toggle_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./slider-toggle.scss */ "./components/slider-toggle.scss");
/* harmony import */ var _slider_toggle_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_slider_toggle_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);






var _jsxFileName = "/git/fonts/conscripter/components/slider.js";






var noopFormat = function noopFormat(v) {
  return v;
};

var noop = function noop() {};

var Slider =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Slider, _React$PureComponent);

  function Slider(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Slider);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Slider).call(this, props));
    _this.state = {
      isActive: false
    };
    _this.track = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();

    _this.setAbsolute = function (e) {
      var _this$props$onChange = _this.props.onChange,
          onChange = _this$props$onChange === void 0 ? noop : _this$props$onChange;
      onChange(_this.computeNewValue(e.clientX));
    };

    _this.onMouseMove = function (e) {
      var newv = _this.computeNewValue(e.clientX);

      var _this$props$onChange2 = _this.props.onChange,
          onChange = _this$props$onChange2 === void 0 ? noop : _this$props$onChange2;

      if (!_this.state.isActive) {
        return;
      }

      onChange(newv);
    };

    _this.onThumbDown = function () {
      _this.setState({
        isActive: true
      });

      document.addEventListener('mousemove', _this.onMouseMove);
      document.addEventListener('mouseup', _this.onThumbUp);
    };

    _this.onThumbUp = function () {
      _this.setState({
        isActive: false
      });

      document.removeEventListener('mousemove', _this.onMouseMove);
      document.removeEventListener('mouseup', _this.onThumbUp);
    };

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Slider, [{
    key: "computeNewValue",
    value: function computeNewValue(clientX) {
      var rect = this.track.current.getBoundingClientRect();
      var newpct = (clientX - rect.left) / rect.width;
      var _this$props = this.props,
          _this$props$min = _this$props.min,
          min = _this$props$min === void 0 ? 0 : _this$props$min,
          _this$props$max = _this$props.max,
          max = _this$props$max === void 0 ? 1 : _this$props$max,
          _this$props$step = _this$props.step,
          step = _this$props$step === void 0 ? 1 : _this$props$step;
      var domainvalue = newpct * (max - min) + min;
      var steppedvalue = Math.round(domainvalue / step) * step;
      var boundvalue = Math.max(min, Math.min(max, steppedvalue));
      return boundvalue;
    }
  }, {
    key: "computeRunnerStyle",
    value: function computeRunnerStyle(pct) {
      return {
        width: "".concat((pct * 100).toFixed(2), "%")
      };
    }
  }, {
    key: "computeThumbStyle",
    value: function computeThumbStyle(pct) {
      var percentage = "".concat((pct * 100).toFixed(2), "%");
      var offset = (pct * 16).toFixed(2) + 'px';
      return {
        left: "calc(".concat(percentage, " - ").concat(offset, ")")
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          label = _this$props2.label,
          _this$props2$format = _this$props2.format,
          format = _this$props2$format === void 0 ? noopFormat : _this$props2$format,
          value = _this$props2.value,
          _this$props2$min = _this$props2.min,
          min = _this$props2$min === void 0 ? 0 : _this$props2$min,
          _this$props2$max = _this$props2.max,
          max = _this$props2$max === void 0 ? 1 : _this$props2$max,
          _this$props2$step = _this$props2.step,
          step = _this$props2$step === void 0 ? 1 : _this$props2$step;
      var isActive = this.state.isActive;
      var pct = (Math.round(value / step) * step - min) / (max - min);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_label__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, label, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_typography__WEBPACK_IMPORTED_MODULE_8__["default"].Small, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, format(value))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _slider_toggle_scss__WEBPACK_IMPORTED_MODULE_9___default.a.trackcontainer,
        onClick: this.setAbsolute,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _slider_toggle_scss__WEBPACK_IMPORTED_MODULE_9___default.a.track,
        ref: this.track,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _slider_toggle_scss__WEBPACK_IMPORTED_MODULE_9___default.a.runner,
        style: this.computeRunnerStyle(pct),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_10__(_slider_toggle_scss__WEBPACK_IMPORTED_MODULE_9___default.a.thumb, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _slider_toggle_scss__WEBPACK_IMPORTED_MODULE_9___default.a.thumbactive, isActive)),
        onMouseDown: this.onThumbDown,
        style: this.computeThumbStyle(pct),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }))));
    }
  }]);

  return Slider;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.PureComponent);


var Toggle =
/*#__PURE__*/
function (_Slider) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Toggle, _Slider);

  function Toggle(props) {
    var _this2;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Toggle);

    _this2 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Toggle).call(this, props));

    _this2.toggle = function () {
      var onChange = _this2.props.onChange;
      onChange(!_this2.props.value);
    };

    return _this2;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Toggle, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          label = _this$props3.label,
          value = _this$props3.value;
      var pct = value ? 1 : 0;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _slider_toggle_scss__WEBPACK_IMPORTED_MODULE_9___default.a.togglecontainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "checkbox",
        value: value,
        className: _slider_toggle_scss__WEBPACK_IMPORTED_MODULE_9___default.a.togglecheckbox,
        onChange: this.toggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_10__(_slider_toggle_scss__WEBPACK_IMPORTED_MODULE_9___default.a.trackcontainer, _slider_toggle_scss__WEBPACK_IMPORTED_MODULE_9___default.a.toggle),
        onClick: this.toggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _slider_toggle_scss__WEBPACK_IMPORTED_MODULE_9___default.a.track,
        ref: this.track,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _slider_toggle_scss__WEBPACK_IMPORTED_MODULE_9___default.a.runner,
        style: this.computeRunnerStyle(pct),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_10__(_slider_toggle_scss__WEBPACK_IMPORTED_MODULE_9___default.a.thumb),
        style: this.computeThumbStyle(pct),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_label__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, label));
    }
  }]);

  return Toggle;
}(Slider);

/***/ })

})
//# sourceMappingURL=index.js.b6cd37c4f8a0c5a8e35b.hot-update.js.map