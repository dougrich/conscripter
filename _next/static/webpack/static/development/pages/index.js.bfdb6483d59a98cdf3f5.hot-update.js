webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/button.js":
/*!******************************!*\
  !*** ./components/button.js ***!
  \******************************/
/*! exports provided: default, ButtonBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonBar", function() { return ButtonBar; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.scss */ "./components/button.scss");
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_button_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./typography */ "./components/typography.js");

var _jsxFileName = "/git/fonts/conscripter/components/button.js";




function Button(props) {
  var _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'default' : _props$variant,
      className = props.className,
      children = props.children;
  var child = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_typography__WEBPACK_IMPORTED_MODULE_4__["default"].Button, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, children);

  if (variant === 'action') {
    child = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_typography__WEBPACK_IMPORTED_MODULE_4__["default"].Icon, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, children);
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_3__(_button_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btn, className, _button_scss__WEBPACK_IMPORTED_MODULE_2___default.a[variant]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), child);
}
function ButtonBar(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3__(_button_scss__WEBPACK_IMPORTED_MODULE_2___default.a.bar),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, children);
}

/***/ })

})
//# sourceMappingURL=index.js.bfdb6483d59a98cdf3f5.hot-update.js.map