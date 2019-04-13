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

var Slider =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Slider, _React$PureComponent);

  function Slider(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Slider);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Slider).call(this, props));
    _this.state = {};

    _this.setAbsolute = function (e) {
      console.log(e.clientX);
      console.log(e.currentTarget.parentNode.clientX);
    };

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Slider, [{
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
      var _this$props = this.props,
          label = _this$props.label,
          _this$props$format = _this$props.format,
          format = _this$props$format === void 0 ? noopFormat : _this$props$format,
          value = _this$props.value,
          _this$props$step = _this$props.step,
          step = _this$props$step === void 0 ? 1 : _this$props$step,
          min = _this$props.min,
          max = _this$props.max;
      var pct = (Math.round(value / step) * step - min) / (max - min);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_label__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, label, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_typography__WEBPACK_IMPORTED_MODULE_7__["default"].Small, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, format(value))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _slider_scss__WEBPACK_IMPORTED_MODULE_8___default.a.trackcontainer,
        onClick: this.setAbsolute,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _slider_scss__WEBPACK_IMPORTED_MODULE_8___default.a.track,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _slider_scss__WEBPACK_IMPORTED_MODULE_8___default.a.runner,
        style: this.computeRunnerStyle(pct),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _slider_scss__WEBPACK_IMPORTED_MODULE_8___default.a.thumb,
        style: this.computeThumbStyle(pct),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }))));
    }
  }]);

  return Slider;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.PureComponent);



/***/ })

})
//# sourceMappingURL=index.js.d5a8c87f55daf9dc50d9.hot-update.js.map