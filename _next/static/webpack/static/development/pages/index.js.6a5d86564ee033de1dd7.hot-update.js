webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/text.js":
/*!****************************!*\
  !*** ./components/text.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _text_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./text.scss */ "./components/text.scss");
/* harmony import */ var _text_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_text_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./label */ "./components/label.js");
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./typography */ "./components/typography.js");





var _jsxFileName = "/git/fonts/conscripter/components/text.js";





var Text = {
  Field:
  /*#__PURE__*/
  function (_React$PureComponent) {
    Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Field, _React$PureComponent);

    function Field() {
      Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Field);

      return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Field).apply(this, arguments));
    }

    Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Field, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            className = _this$props.className,
            label = _this$props.label,
            required = _this$props.required,
            pattern = _this$props.pattern;
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: _text_scss__WEBPACK_IMPORTED_MODULE_6___default.a.textfieldcontainer,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_label__WEBPACK_IMPORTED_MODULE_8__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }, label), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
          required: required,
          pattern: pattern,
          className: classnames__WEBPACK_IMPORTED_MODULE_7__(_text_scss__WEBPACK_IMPORTED_MODULE_6___default.a.textfield, _typography__WEBPACK_IMPORTED_MODULE_9__["default"].Input),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        }));
      }
    }]);

    return Field;
  }(react__WEBPACK_IMPORTED_MODULE_5___default.a.PureComponent),
  Area:
  /*#__PURE__*/
  function (_React$PureComponent2) {
    Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Area, _React$PureComponent2);

    function Area() {
      Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Area);

      return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Area).apply(this, arguments));
    }

    Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Area, [{
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            className = _this$props2.className,
            style = _this$props2.style,
            defaultValue = _this$props2.defaultValue;
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: _text_scss__WEBPACK_IMPORTED_MODULE_6___default.a.textareacontainer,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("textarea", {
          className: classnames__WEBPACK_IMPORTED_MODULE_7__(className, _text_scss__WEBPACK_IMPORTED_MODULE_6___default.a.textarea),
          style: style,
          defaultValue: defaultValue,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }));
      }
    }]);

    return Area;
  }(react__WEBPACK_IMPORTED_MODULE_5___default.a.PureComponent)
};
/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ })

})
//# sourceMappingURL=index.js.6a5d86564ee033de1dd7.hot-update.js.map