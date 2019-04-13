webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/links.js":
/*!*****************************!*\
  !*** ./components/links.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./typography */ "./components/typography.js");



var _jsxFileName = "/git/fonts/conscripter/components/links.js",
    _variant,
    _variant2;




var _require = __webpack_require__(/*! ../package.json */ "./package.json"),
    version = _require.version;




function href(route) {
  if (route[0] === '/') {
    return {
      href: route,
      as: "" + route
    };
  } else {
    return {
      href: route
    };
  }
}

var defaultVariant = 'default';

function variant(cases) {
  return function (props) {
    var variant = props.variant;
    var component = cases[variant || defaultVariant];
    assert__WEBPACK_IMPORTED_MODULE_4__(!!component, 'Undefined variant: ' + variant);
    return component(props);
  };
}

function AnchorLink(_ref) {
  var route = _ref.route,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, href(route), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, children));
}

var Home = variant((_variant = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_variant, defaultVariant, function () {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AnchorLink, {
    route: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "App");
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_variant, 'header', function header() {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AnchorLink, {
    route: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_typography__WEBPACK_IMPORTED_MODULE_5__["default"].Header.Display, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }));
}), _variant));

var About = function About() {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AnchorLink, {
    route: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "About");
};

var Privacy = function Privacy() {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AnchorLink, {
    route: "/privacy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Privacy");
};

var Changelog = variant((_variant2 = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_variant2, defaultVariant, function () {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AnchorLink, {
    route: "https://github.com/dougrich/conscripter/blob/master/CHANGELOG.md",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Changelog");
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_variant2, 'versioned', function versioned() {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AnchorLink, {
    route: "https://github.com/dougrich/conscripter/blob/master/CHANGELOG.md",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "New in ", version);
}), _variant2));
var Links = {
  Home: Home,
  About: About,
  Privacy: Privacy,
  Changelog: Changelog
};
/* harmony default export */ __webpack_exports__["default"] = (Links);

/***/ })

})
//# sourceMappingURL=index.js.1d0ed4f3262199bd2f16.hot-update.js.map