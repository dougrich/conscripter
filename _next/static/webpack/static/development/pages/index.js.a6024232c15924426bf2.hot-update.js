webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/slider.js":
/*!******************************!*\
  !*** ./components/slider.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slider; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./label */ "./components/label.js");
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./typography */ "./components/typography.js");
/* harmony import */ var _slider_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./slider.scss */ "./components/slider.scss");
/* harmony import */ var _slider_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_slider_scss__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/git/fonts/conscripter/components/slider.js";





var noopFormat = function noopFormat(v) {
  return v;
};

var noop = function noop() {};

var Slider =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Slider, _React$PureComponent);

  function Slider(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Slider);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Slider).call(this, props));
    _this.state = {
      isActive: false
    };
    _this.track = react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();

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
    };

    _this.onThumbUp = function () {
      _this.setState({
        isActive: false
      });

      document.removeEventListener('mousemove', _this.onMouseMove);
    };

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Slider, [{
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
      var pct = (Math.round(value / step) * step - min) / (max - min);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_label__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, label, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_typography__WEBPACK_IMPORTED_MODULE_7__["default"].Small, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, format(value))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _slider_scss__WEBPACK_IMPORTED_MODULE_8___default.a.trackcontainer,
        onClick: this.setAbsolute,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _slider_scss__WEBPACK_IMPORTED_MODULE_8___default.a.track,
        ref: this.track,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _slider_scss__WEBPACK_IMPORTED_MODULE_8___default.a.runner,
        style: this.computeRunnerStyle(pct),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _slider_scss__WEBPACK_IMPORTED_MODULE_8___default.a.thumb,
        onMouseDown: this.onThumbDown,
        onMouseUp: this.onThumbUp,
        style: this.computeThumbStyle(pct),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }))));
    }
  }]);

  return Slider;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.PureComponent);



/***/ })

})
//# sourceMappingURL=index.js.a6024232c15924426bf2.hot-update.js.map