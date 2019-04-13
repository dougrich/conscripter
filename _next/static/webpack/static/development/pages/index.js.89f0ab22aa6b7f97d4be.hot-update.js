webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/preview.js":
/*!*******************************!*\
  !*** ./components/preview.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Preview; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _preview_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./preview.scss */ "./components/preview.scss");
/* harmony import */ var _preview_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_preview_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./text */ "./components/text.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./options */ "./components/options.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./slider */ "./components/slider.js");
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./typography */ "./components/typography.js");






var _jsxFileName = "/git/fonts/conscripter/components/preview.js";








var Preview =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Preview, _React$PureComponent);

  function Preview(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Preview);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Preview).call(this, props));
    _this.state = {
      fontSize: 200,
      options: {
        italic: false,
        bold: false,
        invert: false
      }
    };

    _this.setFontSize = function (fontSize) {
      return _this.setState({
        fontSize: fontSize
      });
    };

    _this.setOptions = function (options) {
      return _this.setState({
        options: options
      });
    };

    _this.format = function (v) {
      return (v / 100 * 16).toFixed(1) + ' pt';
    };

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Preview, [{
    key: "render",
    value: function render() {
      var defaultValue = this.props.defaultValue;
      var _this$state = this.state,
          fontSize = _this$state.fontSize,
          options = _this$state.options;
      console.log(_typography__WEBPACK_IMPORTED_MODULE_12__["default"].Demofont);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_8__(_preview_scss__WEBPACK_IMPORTED_MODULE_7___default.a.background, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _preview_scss__WEBPACK_IMPORTED_MODULE_7___default.a.inverted, options.invert)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _preview_scss__WEBPACK_IMPORTED_MODULE_7___default.a.formcontainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_slider__WEBPACK_IMPORTED_MODULE_11__["default"], {
        label: "Font Size",
        min: 100,
        value: fontSize,
        max: 300,
        onChange: this.setFontSize,
        format: this.format,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_options__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: "Font Options",
        value: options,
        onChange: this.setOptions,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_text__WEBPACK_IMPORTED_MODULE_9__["default"].Area, {
        className: classnames__WEBPACK_IMPORTED_MODULE_8__(_preview_scss__WEBPACK_IMPORTED_MODULE_7___default.a.previewText, _typography__WEBPACK_IMPORTED_MODULE_12__["default"].Demofont),
        style: {
          fontSize: fontSize / 100 + 'em',
          fontStyle: options.italic ? 'italic' : 'initial',
          fontWeight: options.bold ? 'bold' : 'normal'
        },
        defaultValue: defaultValue,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }));
    }
  }]);

  return Preview;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.PureComponent);



/***/ })

})
//# sourceMappingURL=index.js.89f0ab22aa6b7f97d4be.hot-update.js.map