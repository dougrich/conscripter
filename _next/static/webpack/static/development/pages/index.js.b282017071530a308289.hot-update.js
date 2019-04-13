webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.scss */ "./pages/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../state */ "./state/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_substitution_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/substitution-editor */ "./components/substitution-editor.js");
/* harmony import */ var _components_glyph_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/glyph-grid */ "./components/glyph-grid.js");
/* harmony import */ var _components_preview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/preview */ "./components/preview.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/button */ "./components/button.js");
/* harmony import */ var _components_github_corner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/github-corner */ "./components/github-corner.js");
/* harmony import */ var _components_description__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/description */ "./components/description.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_typography__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/typography */ "./components/typography.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/text */ "./components/text.js");
/* harmony import */ var _components_links__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/links */ "./components/links.js");






var _jsxFileName = "/git/fonts/conscripter/pages/index.js";
















var store = Object(_state__WEBPACK_IMPORTED_MODULE_8__["createStore"])();
var PreviewPlaceholder = "the quick brown fox jumps over the lazy red dog\n\n123456789";
var FontStyle = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(function (state) {
  return {
    data: state.fonts.datauri
  };
})(function (_ref) {
  var data = _ref.data;
  if (!data) return null;
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("style", {
    id: "test",
    dangerouslySetInnerHTML: {
      __html: '@font-face { font-family: demofont; src: url(\'' + data + '\');} @font-face { font-family: base-demofont; src: url(' + "" + '/static/AVHersheySimplexMedium.otf' + ');}'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  });
});
var ConnectedGlyphGrid = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(function (state) {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__["default"])({}, state.fonts, state.substitution);
}, function (dispatch) {
  return {
    onSubstitutionSelect: function onSubstitutionSelect(substitution) {
      return dispatch(_state__WEBPACK_IMPORTED_MODULE_8__["actions"].selectSubstitution(substitution));
    },
    onSubstitutionSwap: function onSubstitutionSwap(a, b) {
      return dispatch(_state__WEBPACK_IMPORTED_MODULE_8__["actions"].swapSubstitution(a, b));
    }
  };
})(_components_glyph_grid__WEBPACK_IMPORTED_MODULE_11__["default"]);
var ConnectedSubstitutionEditor = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(function (state) {
  var fonts = state.fonts,
      substitution = state.substitution;
  var idx = fonts.substitutions.indexOf(substitution.active);
  var canRemove = idx >= 0;
  var canMoveLeft = idx > 0;
  var canMoveRight = idx < fonts.substitutions.length - 1 && idx >= 0;
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__["default"])({}, fonts, substitution, {
    idx: idx,
    canRemove: canRemove,
    canMoveLeft: canMoveLeft,
    canMoveRight: canMoveRight
  });
}, function (dispatch) {
  return {
    onUpload: function onUpload(_ref2) {
      var contents = _ref2.contents;
      return dispatch(_state__WEBPACK_IMPORTED_MODULE_8__["actions"].updateSubstitutionGlyph(store.getState().fonts.meta, contents));
    },
    onReplaceChange: function onReplaceChange(value) {
      return dispatch(_state__WEBPACK_IMPORTED_MODULE_8__["actions"].updateSubstitutionReplace(value));
    },
    onAdvanceWidthChange: function onAdvanceWidthChange(value) {
      return dispatch(_state__WEBPACK_IMPORTED_MODULE_8__["actions"].updateSubstitutionAdvanceWidth(value));
    },
    onRemove: function onRemove() {
      return dispatch(_state__WEBPACK_IMPORTED_MODULE_8__["actions"].removeSubstitution(store.getState().substitution));
    },
    onSubmit: function onSubmit() {
      return dispatch(_state__WEBPACK_IMPORTED_MODULE_8__["actions"].submitSubstitution(store.getState().substitution));
    },
    onCancel: function onCancel() {
      return dispatch(_state__WEBPACK_IMPORTED_MODULE_8__["actions"].cancelSubstitution());
    },
    onSwap: function onSwap(a, b) {
      return dispatch(_state__WEBPACK_IMPORTED_MODULE_8__["actions"].swapSubstitution(a, b));
    }
  };
})(_components_substitution_editor__WEBPACK_IMPORTED_MODULE_10__["default"]);
var ConnectedTopActionSet = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(function (state) {
  return {
    loadError: state.fonts.error
  };
}, function (dispatch) {
  return {
    onDownload: function onDownload() {
      return dispatch(_state__WEBPACK_IMPORTED_MODULE_8__["actions"].download());
    },
    onSave: function onSave() {
      return dispatch(_state__WEBPACK_IMPORTED_MODULE_8__["actions"].save(store.getState()));
    },
    onLoad: function onLoad() {
      return dispatch(_state__WEBPACK_IMPORTED_MODULE_8__["actions"].load());
    }
  };
})(function (_ref3) {
  var loadError = _ref3.loadError,
      onDownload = _ref3.onDownload,
      onSave = _ref3.onSave,
      onLoad = _ref3.onLoad;
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_description__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Make sure to read the ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_links__WEBPACK_IMPORTED_MODULE_21__["default"].Usage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), " to figure out how to use your downloaded font!"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_13__["ButtonBar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "success",
    onClick: onDownload,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Download"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    title: "Save to File",
    variant: "default",
    onClick: onSave,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Save"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    title: "Load from File",
    variant: "default",
    onClick: onLoad,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Load")), loadError && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_description__WEBPACK_IMPORTED_MODULE_15__["default"], {
    variant: "danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, loadError.message));
});
var ConnectedFontName = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(function (state) {
  return {
    value: state.fonts.fontname
  };
}, function (dispatch) {
  return {
    onChange: function onChange(value) {
      return dispatch(_state__WEBPACK_IMPORTED_MODULE_8__["actions"].setFontName(value));
    }
  };
})(_components_text__WEBPACK_IMPORTED_MODULE_20__["default"].Field);
var ConnectedHelmet = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(function (state) {
  return {
    title: state.fonts.fontname
  };
})(_components_head__WEBPACK_IMPORTED_MODULE_17__["default"]);

var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _React$Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      store.dispatch(_state__WEBPACK_IMPORTED_MODULE_8__["actions"].fetchFonts());
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_9__["Provider"], {
        store: store,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ConnectedHelmet, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_github_corner__WEBPACK_IMPORTED_MODULE_14__["default"], {
        url: "https://github.com/dougrich/conscripter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(FontStyle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.container,
        role: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.topaction,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ConnectedTopActionSet, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ConnectedFontName, {
        label: "Font Name",
        placeholder: "Display name for your font",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.workspace,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.panel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.internalpanel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_typography__WEBPACK_IMPORTED_MODULE_19__["default"].Header.Section, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "Substitutions"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ConnectedGlyphGrid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ConnectedSubstitutionEditor, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.panel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_typography__WEBPACK_IMPORTED_MODULE_19__["default"].Header.Section, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "Preview"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_preview__WEBPACK_IMPORTED_MODULE_12__["default"], {
        defaultValue: PreviewPlaceholder,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_18__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      })));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.b282017071530a308289.hot-update.js.map