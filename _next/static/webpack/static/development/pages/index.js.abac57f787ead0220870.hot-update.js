webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/glyph-grid.js":
/*!**********************************!*\
  !*** ./components/glyph-grid.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GlyphGrid; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _glyph_grid_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./glyph-grid.scss */ "./components/glyph-grid.scss");
/* harmony import */ var _glyph_grid_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_glyph_grid_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _glyph_preview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./glyph-preview */ "./components/glyph-preview.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./button */ "./components/button.js");
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./typography */ "./components/typography.js");



var _jsxFileName = "/git/fonts/conscripter/components/glyph-grid.js";


/**
 * Grid of glyphs, displaying each with the relevant substitutions
 */





function GlyphGrid(_ref) {
  var substitutions = _ref.substitutions,
      meta = _ref.meta,
      active = _ref.active,
      children = _ref.children,
      onSubstitutionSelect = _ref.onSubstitutionSelect,
      onSubstitutionSwap = _ref.onSubstitutionSwap;
  var symbols = [];
  var gridcells = [];
  var foundActive = false;
  var hasActive = active != null;

  if (substitutions.length === 0 && !active) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: _glyph_grid_scss__WEBPACK_IMPORTED_MODULE_4___default.a.grid,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: _glyph_grid_scss__WEBPACK_IMPORTED_MODULE_4___default.a.emptyset,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: function onClick() {
        return onSubstitutionSelect();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "Click here to get started")));
  }

  function Btn(_ref2) {
    var _cx;

    var children = _ref2.children,
        isActive = _ref2.isActive,
        onClick = _ref2.onClick;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
      className: classnames__WEBPACK_IMPORTED_MODULE_6__(_glyph_grid_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container, (_cx = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_cx, _glyph_grid_scss__WEBPACK_IMPORTED_MODULE_4___default.a.activecell, isActive), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_cx, _glyph_grid_scss__WEBPACK_IMPORTED_MODULE_4___default.a.disabled, hasActive), _cx)),
      disabled: hasActive,
      onClick: onClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, children);
  }

  function onDragStart(e) {
    e.dataTransfer.setData('number', _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(e.currentTarget.attributes['data-index'].value));
  }

  function onDragOver(e) {
    if (e.currentTarget.attributes['data-index'].value) {
      e.preventDefault();
    }
  }

  function onDrop(e) {
    var self = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(e.currentTarget.attributes['data-index'].value);

    var other = e.dataTransfer.getData('number');

    if (self !== other) {
      onSubstitutionSwap(self, other);
    }
  }

  var _loop = function _loop(i) {
    var sub = substitutions[i];
    var replace = sub.replace,
        glyph = sub.glyph;
    var key = replace.join('/');
    var isActive = active === sub;
    var button = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Btn, {
      isActive: isActive,
      onClick: function onClick() {
        return onSubstitutionSelect(sub);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: _glyph_grid_scss__WEBPACK_IMPORTED_MODULE_4___default.a.label,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, key), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_glyph_preview__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: _glyph_grid_scss__WEBPACK_IMPORTED_MODULE_4___default.a.preview
    }, glyph, meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    })));
    foundActive = foundActive || isActive;
    gridcells.push({
      key: key,
      index: i,
      button: button,
      isActive: isActive
    });
  };

  for (var i = 0; i < substitutions.length; i++) {
    _loop(i);
  }

  gridcells.push({
    key: 'add',
    button: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Btn, {
      onClick: function onClick() {
        return onSubstitutionSelect();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, "+"),
    isActive: hasActive && !foundActive
  });
  var _arr = gridcells;

  for (var _i = 0; _i < _arr.length; _i++) {
    var _ref4 = _arr[_i];
    var key = _ref4.key,
        index = _ref4.index,
        button = _ref4.button,
        isActive = _ref4.isActive;
    var className = classnames__WEBPACK_IMPORTED_MODULE_6__(_glyph_grid_scss__WEBPACK_IMPORTED_MODULE_4___default.a.gridcell, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _glyph_grid_scss__WEBPACK_IMPORTED_MODULE_4___default.a.inactive, !isActive && hasActive));
    symbols.push(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: className,
      key: key,
      "data-index": index,
      draggable: !hasActive && index != null,
      onDragStart: onDragStart,
      onDrop: onDrop,
      onDragOver: onDragOver,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, button, isActive && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: _glyph_grid_scss__WEBPACK_IMPORTED_MODULE_4___default.a.detailsspacer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: _glyph_grid_scss__WEBPACK_IMPORTED_MODULE_4___default.a.details,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, children))));
  }

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: _glyph_grid_scss__WEBPACK_IMPORTED_MODULE_4___default.a.grid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_typography__WEBPACK_IMPORTED_MODULE_8__["default"].Descriptor, {
    className: _glyph_grid_scss__WEBPACK_IMPORTED_MODULE_4___default.a.textcell,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "High Priority"), symbols, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_typography__WEBPACK_IMPORTED_MODULE_8__["default"].Descriptor, {
    className: _glyph_grid_scss__WEBPACK_IMPORTED_MODULE_4___default.a.textcell,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "Low Priority"));
}

/***/ })

})
//# sourceMappingURL=index.js.abac57f787ead0220870.hot-update.js.map