webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/options.js":
/*!*******************************!*\
  !*** ./components/options.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Options; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _options_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./options.scss */ "./components/options.scss");
/* harmony import */ var _options_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_options_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./label */ "./components/label.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slider */ "./components/slider.js");



var _jsxFileName = "/git/fonts/conscripter/components/options.js";





function Option(_ref) {
  var field = _ref.field,
      value = _ref.value,
      label = _ref.label,
      onChange = _ref.onChange;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_slider__WEBPACK_IMPORTED_MODULE_6__["Toggle"], {
    label: label,
    value: value,
    onChange: onChange.bind(null, field),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  });
}

function Options(_ref2) {
  var value = _ref2.value,
      _ref2$optionLabels = _ref2.optionLabels,
      optionLabels = _ref2$optionLabels === void 0 ? {} : _ref2$optionLabels,
      propsOnChange = _ref2.onChange,
      label = _ref2.label;

  var options = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(value);

  var onChange = function onChange(field, checked) {
    propsOnChange(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, value, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, field, checked)));
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_label__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, label), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: _options_scss__WEBPACK_IMPORTED_MODULE_4___default.a.optionslist,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, options.map(function (o) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Option, {
      onChange: onChange,
      value: value[o],
      label: optionLabels[o] || o,
      key: o,
      field: o,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    });
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.85a55e7f68ba9d2f79d0.hot-update.js.map