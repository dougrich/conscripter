webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/substitution-editor.js":
/*!*******************************************!*\
  !*** ./components/substitution-editor.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SubstitutionEditor; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _substitution_editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./substitution-editor.scss */ "./components/substitution-editor.scss");
/* harmony import */ var _substitution_editor_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_substitution_editor_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _glyph_preview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./glyph-preview */ "./components/glyph-preview.js");
/* harmony import */ var _dropzone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dropzone */ "./components/dropzone.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./input */ "./components/input.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./button */ "./components/button.js");
/* harmony import */ var _description__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./description */ "./components/description.js");
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./typography */ "./components/typography.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./slider */ "./components/slider.js");






var _jsxFileName = "/git/fonts/conscripter/components/substitution-editor.js";










function surpress(handler) {
  return function (e) {
    e.preventDefault();
    e.stopPropagation();
    handler(e);
  };
}

var SubstitutionEditor =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SubstitutionEditor, _React$PureComponent);

  function SubstitutionEditor() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SubstitutionEditor);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(SubstitutionEditor).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SubstitutionEditor, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          warnings = _this$props.warnings,
          currentGlyph = _this$props.currentGlyph,
          currentReplace = _this$props.currentReplace,
          meta = _this$props.meta,
          canRemove = _this$props.canRemove,
          canMoveLeft = _this$props.canMoveLeft,
          canMoveRight = _this$props.canMoveRight,
          idx = _this$props.idx,
          onUpload = _this$props.onUpload,
          onReplaceChange = _this$props.onReplaceChange,
          onAdvanceWidthChange = _this$props.onAdvanceWidthChange,
          onSubmit = _this$props.onSubmit,
          onRemove = _this$props.onRemove,
          onCancel = _this$props.onCancel,
          onSwap = _this$props.onSwap;

      if (!active) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        ref: this.formRef,
        className: _substitution_editor_scss__WEBPACK_IMPORTED_MODULE_7___default.a.container,
        onSubmit: surpress(onSubmit),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _substitution_editor_scss__WEBPACK_IMPORTED_MODULE_7___default.a.movement,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, canMoveLeft ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "Move up in priority",
        variant: "action",
        onClick: surpress(function () {
          return onSwap(idx, idx - 1);
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_typography__WEBPACK_IMPORTED_MODULE_13__["default"].Icon, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, '<<')) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), canMoveRight ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "Move down in priority",
        variant: "action",
        onClick: surpress(function () {
          return onSwap(idx, idx + 1);
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_typography__WEBPACK_IMPORTED_MODULE_13__["default"].Icon, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, '<<')) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_dropzone__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onUpload: onUpload,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_glyph_preview__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: _substitution_editor_scss__WEBPACK_IMPORTED_MODULE_7___default.a.preview
      }, currentGlyph, meta, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      })), warnings && warnings.length ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_description__WEBPACK_IMPORTED_MODULE_12__["default"], {
        variant: "danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Warning!"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, warnings.map(function (x, i) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, x.message);
      }))) : null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_description__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "Doesn't look like what you expected? Raise an issue on ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "https://github.com/dougrich/conscripter/issues/new",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Github"), " with your SVG to help improve this app.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_input__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: "Replace",
        required: true,
        pattern: "^[a-zA-Z0-9\\.\\-_]+$",
        value: currentReplace,
        onChange: onReplaceChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "This is case sensitive string that will be replaced with this symbol."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "It must be alphanumeric (A-Z, 0-9) or '.', '-', or '_'.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_slider__WEBPACK_IMPORTED_MODULE_14__["default"], {
        label: "Advance Width",
        min: 0,
        max: 2000,
        format: function format(v) {
          return (v / meta.unitsPerEm).toFixed(3) + ' em';
        },
        value: currentGlyph.advanceWidth,
        onChange: onAdvanceWidthChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _substitution_editor_scss__WEBPACK_IMPORTED_MODULE_7___default.a.actions,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, canRemove && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_11__["default"], {
        variant: "danger",
        onClick: surpress(onRemove),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Remove"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_11__["default"], {
        type: "submit",
        variant: "success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Submit"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_11__["default"], {
        type: "cancel",
        onClick: surpress(onCancel),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "Cancel")));
    }
  }]);

  return SubstitutionEditor;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.PureComponent);



/***/ })

})
//# sourceMappingURL=index.js.57a1f73d11cb6b329bf0.hot-update.js.map