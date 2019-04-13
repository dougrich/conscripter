webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/glyph-preview.js":
/*!*************************************!*\
  !*** ./components/glyph-preview.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GlyphPreview; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glyph_preview_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glyph-preview.scss */ "./components/glyph-preview.scss");
/* harmony import */ var _glyph_preview_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_glyph_preview_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./typography */ "./components/typography.js");
var _jsxFileName = "/git/fonts/conscripter/components/glyph-preview.js";




function GlyphPreview(_ref) {
  var commands = _ref.commands,
      advanceWidth = _ref.advanceWidth,
      unitsPerEm = _ref.unitsPerEm,
      descender = _ref.descender,
      className = _ref.className;
  advanceWidth = Math.max(advanceWidth, 100);
  var widthEm = advanceWidth / unitsPerEm;
  var transform = "translate(-50%, 0%)";

  if (widthEm > 1) {
    transform += " scale(".concat((1 / widthEm).toFixed(2), ")");
  }

  var path = commands.map(function (c) {
    switch (c.type) {
      case 'M':
      case 'L':
        return "".concat(c.type, " ").concat(c.x, " ").concat(unitsPerEm - c.y + descender);

      case 'Z':
        return "".concat(c.type);
    }
  }).join(' ');
  var baseline = (unitsPerEm + descender) / unitsPerEm; // these two depend on the font

  var topline = '0.4em';
  var textCorrection = '0.12em';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2__(_glyph_preview_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _glyph_preview_scss__WEBPACK_IMPORTED_MODULE_1___default.a.subcontainer,
    style: {
      transform: transform,
      transformOrigin: 'bottom center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _glyph_preview_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rule,
    style: {
      top: baseline + 'em',
      background: 'magenta'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _glyph_preview_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rule,
    style: {
      top: topline,
      background: 'lime'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _glyph_preview_scss__WEBPACK_IMPORTED_MODULE_1___default.a.textcontainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2__(_glyph_preview_scss__WEBPACK_IMPORTED_MODULE_1___default.a.faded, _typography__WEBPACK_IMPORTED_MODULE_3__["default"].BaseDemofont),
    style: {
      textAlign: 'right',
      direction: 'rtl',
      paddingTop: textCorrection
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "abcdef"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: _glyph_preview_scss__WEBPACK_IMPORTED_MODULE_1___default.a.glyph,
    height: "1em",
    width: "".concat(widthEm, "em"),
    viewBox: "0 0 ".concat(advanceWidth, " ").concat(unitsPerEm),
    preserveAspectRatio: "xMinYMin slice",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: path,
    fill: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2__(_glyph_preview_scss__WEBPACK_IMPORTED_MODULE_1___default.a.faded, _typography__WEBPACK_IMPORTED_MODULE_3__["default"].BaseDemofont),
    style: {
      textAlign: 'left',
      paddingTop: textCorrection
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "ghijk"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _glyph_preview_scss__WEBPACK_IMPORTED_MODULE_1___default.a.edges,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.c3d98393e76c4b910cf8.hot-update.js.map