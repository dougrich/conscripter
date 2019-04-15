webpackHotUpdate("static/development/pages/index.js",{

/***/ "./multiple-error.js":
/*!***************************!*\
  !*** ./multiple-error.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MultipleErrors; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/wrapNativeSuper */ "./node_modules/@babel/runtime-corejs2/helpers/esm/wrapNativeSuper.js");






var MultipleErrors =
/*#__PURE__*/
function (_Error) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(MultipleErrors, _Error);

  function MultipleErrors(message, details) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MultipleErrors);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(MultipleErrors).call(this, message));
    _this.details = details;
    return _this;
  }

  return MultipleErrors;
}(Object(_babel_runtime_corejs2_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(Error));



/***/ }),

/***/ "./node_modules/event-lite/event-lite.js":
false,

/***/ "./node_modules/int64-buffer/int64-buffer.js":
false,

/***/ "./node_modules/msgpack-lite/lib/browser.js":
false,

/***/ "./node_modules/msgpack-lite/lib/buffer-global.js":
false,

/***/ "./node_modules/msgpack-lite/lib/buffer-lite.js":
false,

/***/ "./node_modules/msgpack-lite/lib/bufferish-array.js":
false,

/***/ "./node_modules/msgpack-lite/lib/bufferish-buffer.js":
false,

/***/ "./node_modules/msgpack-lite/lib/bufferish-proto.js":
false,

/***/ "./node_modules/msgpack-lite/lib/bufferish-uint8array.js":
false,

/***/ "./node_modules/msgpack-lite/lib/bufferish.js":
false,

/***/ "./node_modules/msgpack-lite/lib/codec-base.js":
false,

/***/ "./node_modules/msgpack-lite/lib/codec.js":
false,

/***/ "./node_modules/msgpack-lite/lib/decode-buffer.js":
false,

/***/ "./node_modules/msgpack-lite/lib/decode.js":
false,

/***/ "./node_modules/msgpack-lite/lib/decoder.js":
false,

/***/ "./node_modules/msgpack-lite/lib/encode-buffer.js":
false,

/***/ "./node_modules/msgpack-lite/lib/encode.js":
false,

/***/ "./node_modules/msgpack-lite/lib/encoder.js":
false,

/***/ "./node_modules/msgpack-lite/lib/ext-buffer.js":
false,

/***/ "./node_modules/msgpack-lite/lib/ext-packer.js":
false,

/***/ "./node_modules/msgpack-lite/lib/ext-unpacker.js":
false,

/***/ "./node_modules/msgpack-lite/lib/ext.js":
false,

/***/ "./node_modules/msgpack-lite/lib/flex-buffer.js":
false,

/***/ "./node_modules/msgpack-lite/lib/read-core.js":
false,

/***/ "./node_modules/msgpack-lite/lib/read-format.js":
false,

/***/ "./node_modules/msgpack-lite/lib/read-token.js":
false,

/***/ "./node_modules/msgpack-lite/lib/write-core.js":
false,

/***/ "./node_modules/msgpack-lite/lib/write-token.js":
false,

/***/ "./node_modules/msgpack-lite/lib/write-type.js":
false,

/***/ "./node_modules/msgpack-lite/lib/write-uint8.js":
false,

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, main, scripts, repository, author, license, bugs, homepage, devDependencies, dependencies, default */
/***/ (function(module) {

module.exports = {"name":"@dougrich/conscripter","version":"0.1.1","description":"Static site that generates functional open type font files for conlang scripts from SVG using substitution","main":"index.js","scripts":{"test":"mocha --require @babel/register \"./state/**/?(*.)spec.js\"","dev":"next","deploy":"npm run export && touch out/.nojekyll && echo 'Publishing...' && gh-pages -d out -t","export":"next build && next export","build":"next build","start":"next start","help":"gh-pages --help"},"repository":{"type":"git","url":"git+https://github.com/dougrich/conscripter.git"},"author":"@dougrich","license":"MIT","bugs":{"url":"https://github.com/dougrich/conscripter/issues"},"homepage":"https://github.com/dougrich/conscripter#readme","devDependencies":{"chai":"^4.2.0","gh-pages":"^2.0.1","mocha":"^6.0.2","svg-transform-parser":"0.0.1"},"dependencies":{"@babel/core":"^7.4.3","@babel/register":"^7.4.0","@zeit/next-sass":"^1.0.1","classnames":"^2.2.6","isomorphic-unfetch":"^3.0.0","next":"^8.0.3","node-sass":"^4.11.0","opentype.js":"^0.11.0","parse5":"^5.1.0","raw-loader":"^2.0.0","react":"^16.8.6","react-dom":"^16.8.6","react-markdown":"^4.0.6","react-redux":"^6.0.1","redux":"^4.0.1","redux-thunk":"^2.3.0","slugify":"^1.3.4","svg-path-parser":"^1.1.0"}};

/***/ }),

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
/* harmony import */ var _components_print_scss__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/print.scss */ "./components/print.scss");
/* harmony import */ var _components_print_scss__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_components_print_scss__WEBPACK_IMPORTED_MODULE_22__);






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
      lineNumber: 29
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
    className: _components_print_scss__WEBPACK_IMPORTED_MODULE_22___default.a.none,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_description__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Make sure to read the ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_links__WEBPACK_IMPORTED_MODULE_21__["default"].Usage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), " to figure out how to use your downloaded font!"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_13__["ButtonBar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    title: "Export OTF for use as font",
    variant: "success",
    onClick: onDownload,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Export", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_typography__WEBPACK_IMPORTED_MODULE_19__["default"].Small, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "(.otf)")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    title: "Save workspace to JSON to use later",
    variant: "default",
    onClick: onSave,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Save", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_typography__WEBPACK_IMPORTED_MODULE_19__["default"].Small, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "(.json)")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    title: "Load workspace from JSON",
    variant: "default",
    onClick: onLoad,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "Load", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_typography__WEBPACK_IMPORTED_MODULE_19__["default"].Small, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "(.json)"))), loadError && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_description__WEBPACK_IMPORTED_MODULE_15__["default"], {
    variant: "danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
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
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ConnectedHelmet, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_github_corner__WEBPACK_IMPORTED_MODULE_14__["default"], {
        url: "https://github.com/dougrich/conscripter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(FontStyle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.container,
        role: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.topaction,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ConnectedTopActionSet, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ConnectedFontName, {
        label: "Font Name",
        placeholder: "Display name for your font",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.workspace,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.panel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.internalpanel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_typography__WEBPACK_IMPORTED_MODULE_19__["default"].Header.Section, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "Substitutions"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ConnectedGlyphGrid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ConnectedSubstitutionEditor, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _index_scss__WEBPACK_IMPORTED_MODULE_7___default.a.panel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_typography__WEBPACK_IMPORTED_MODULE_19__["default"].Header.Section, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, "Preview"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_preview__WEBPACK_IMPORTED_MODULE_12__["default"], {
        defaultValue: PreviewPlaceholder,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_18__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      })));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ }),

/***/ "./state/actionTypes.js":
/*!******************************!*\
  !*** ./state/actionTypes.js ***!
  \******************************/
/*! exports provided: FETCH_FONTS, DOWNLOAD, SET_FONTNAME, ADD_SUBSTITUTION, SWAP_SUBSTITUTION, REMOVE_SUBSTITUTION, SELECT_SUBSTITUTION, UPDATE_SUBSTITUTION, CANCEL_SUBSTITUTION, SAVE, LOAD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_FONTS", function() { return FETCH_FONTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWNLOAD", function() { return DOWNLOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FONTNAME", function() { return SET_FONTNAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SUBSTITUTION", function() { return ADD_SUBSTITUTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWAP_SUBSTITUTION", function() { return SWAP_SUBSTITUTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_SUBSTITUTION", function() { return REMOVE_SUBSTITUTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_SUBSTITUTION", function() { return SELECT_SUBSTITUTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SUBSTITUTION", function() { return UPDATE_SUBSTITUTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANCEL_SUBSTITUTION", function() { return CANCEL_SUBSTITUTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE", function() { return SAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD", function() { return LOAD; });
var FETCH_FONTS = 'fetch_font',
    DOWNLOAD = 'download',
    SET_FONTNAME = 'set_fontname',
    ADD_SUBSTITUTION = 'add_substitution',
    SWAP_SUBSTITUTION = 'swap_substitution',
    REMOVE_SUBSTITUTION = 'remove_substitution',
    SELECT_SUBSTITUTION = 'select_substitution',
    UPDATE_SUBSTITUTION = 'update_substitution',
    CANCEL_SUBSTITUTION = 'cancel_substitution',
    SAVE = 'save',
    LOAD = 'load';

/***/ }),

/***/ "./state/actions.js":
/*!**************************!*\
  !*** ./state/actions.js ***!
  \**************************/
/*! exports provided: fetchFonts, fetchFontResult, fetchFontError, updateSubstitutionGlyph, updateSubstitutionReplace, updateSubstitutionAdvanceWidth, removeSubstitution, cancelSubstitution, submitSubstitution, selectSubstitution, download, setFontName, swapSubstitution, save, load */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFonts", function() { return fetchFonts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFontResult", function() { return fetchFontResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFontError", function() { return fetchFontError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSubstitutionGlyph", function() { return updateSubstitutionGlyph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSubstitutionReplace", function() { return updateSubstitutionReplace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSubstitutionAdvanceWidth", function() { return updateSubstitutionAdvanceWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeSubstitution", function() { return removeSubstitution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelSubstitution", function() { return cancelSubstitution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitSubstitution", function() { return submitSubstitution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSubstitution", function() { return selectSubstitution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "download", function() { return download; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFontName", function() { return setFontName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swapSubstitution", function() { return swapSubstitution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var opentype_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! opentype.js */ "./node_modules/opentype.js/src/opentype.js");
/* harmony import */ var _reducers_fonts_parsePath__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/fonts/parsePath */ "./state/reducers/fonts/parsePath.js");
/* harmony import */ var _reducers_fonts_parsePath__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reducers_fonts_parsePath__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _multiple_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../multiple-error */ "./multiple-error.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actionTypes */ "./state/actionTypes.js");
/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./status */ "./state/status.js");
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! slugify */ "./node_modules/slugify/index.js");
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_7__);








/**
 * Fetches and parses the base font
 * @returns {*} dispatchable event object
 */

function fetchFonts() {
  return function (dispatch) {
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_5__["FETCH_FONTS"]
    });
    return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()("" + '/static/AVHersheySimplexMedium.otf').then(function (response) {
      if (response.status !== 200) {
        dispatch(fetchFontError());
        throw new Error('Non 200 response');
      } else {
        return response.arrayBuffer();
      }
    }).then(function (buffer) {
      dispatch(fetchFontResult(buffer));
    });
  };
}
/**
 * Result of fetching the font
 * @returns {*} dispatchable event object
 */

function fetchFontResult(buffer) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_5__["FETCH_FONTS"],
    status: _status__WEBPACK_IMPORTED_MODULE_6__["STATUS_OK"],
    buffer: buffer
  };
}
/**
 * Result of fetching the font when an error occurs
 * @returns {*} dispatchable event object
 */

function fetchFontError() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_5__["FETCH_FONTS"],
    status: _status__WEBPACK_IMPORTED_MODULE_6__["STATUS_ERROR"]
  };
}
function updateSubstitutionGlyph(meta, svg) {
  var parser = new _reducers_fonts_parsePath__WEBPACK_IMPORTED_MODULE_3__(meta);

  var _parser$parse = parser.parse(svg),
      commands = _parser$parse.commands,
      warnings = _parser$parse.warnings;

  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_5__["UPDATE_SUBSTITUTION"],
    field: 'glyph/commands',
    warnings: warnings,
    value: commands
  };
}
function updateSubstitutionReplace(value) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_5__["UPDATE_SUBSTITUTION"],
    field: 'replace',
    value: value
  };
}
function updateSubstitutionAdvanceWidth(value) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_5__["UPDATE_SUBSTITUTION"],
    field: 'glyph/advanceWidth',
    value: value
  };
}
function removeSubstitution(_ref) {
  var active = _ref.active;
  return function (dispatch) {
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_5__["REMOVE_SUBSTITUTION"],
      substitution: active
    });
    dispatch(cancelSubstitution());
  };
}
function cancelSubstitution() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_5__["CANCEL_SUBSTITUTION"]
  };
}
function submitSubstitution(_ref2) {
  var active = _ref2.active,
      currentGlyph = _ref2.currentGlyph,
      currentReplace = _ref2.currentReplace;
  return function (dispatch) {
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_5__["ADD_SUBSTITUTION"],
      substitution: {
        replace: [currentReplace],
        glyph: currentGlyph
      },
      replace: active
    });
    dispatch(cancelSubstitution());
  };
}
function selectSubstitution(substitution) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_5__["SELECT_SUBSTITUTION"],
    substitution: substitution || {
      replace: [''],
      glyph: {
        advanceWidth: 1000,
        commands: []
      }
    }
  };
}
function download() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_5__["DOWNLOAD"]
  };
}
function setFontName(value) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_5__["SET_FONTNAME"],
    value: value
  };
}
function swapSubstitution(a, b) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_5__["SWAP_SUBSTITUTION"],
    a: a,
    b: b
  };
}
function save(_ref3) {
  var _ref3$fonts = _ref3.fonts,
      substitutions = _ref3$fonts.substitutions,
      fontname = _ref3$fonts.fontname;
  var data = 'data:text/json;charset=utf-8,' + encodeURIComponent(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
    version: '0.1.0',
    substitutions: substitutions,
    fontname: fontname
  }));
  var container = document.createElement('a');
  container.setAttribute('href', data);
  container.setAttribute('download', slugify__WEBPACK_IMPORTED_MODULE_7___default()(fontname || 'conscripter-custom-font') + '.json');
  container.click();
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_5__["SAVE"]
  };
}
function load() {
  return function (dispatch) {
    var loader = document.createElement('input');
    loader.setAttribute('type', 'file');
    loader.setAttribute('accept', 'text/json');

    loader.onchange = function (e) {
      var file = e.target.files[0];
      var reader = new FileReader();

      reader.onload = function () {
        try {
          var _JSON$parse = JSON.parse(reader.result),
              _JSON$parse$substitut = _JSON$parse.substitutions,
              substitutions = _JSON$parse$substitut === void 0 ? [] : _JSON$parse$substitut,
              _JSON$parse$fontname = _JSON$parse.fontname,
              fontname = _JSON$parse$fontname === void 0 ? 'My Custom Font' : _JSON$parse$fontname;

          dispatch({
            type: _actionTypes__WEBPACK_IMPORTED_MODULE_5__["LOAD"],
            error: null,
            substitutions: substitutions,
            fontname: fontname
          });
        } catch (e) {
          dispatch({
            type: _actionTypes__WEBPACK_IMPORTED_MODULE_5__["LOAD"],
            error: new Error('Unable to parse selected JSON: did it come from Conscripter?'),
            substitutions: [],
            fontname: 'My Custom Font'
          });
        }
      };

      reader.readAsText(file);
    };

    loader.click();
  };
}

/***/ }),

/***/ "./state/index.js":
/*!************************!*\
  !*** ./state/index.js ***!
  \************************/
/*! exports provided: createStore, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./state/store.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return _store__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./state/actions.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__; });




/***/ }),

/***/ "./state/reducers/list.js":
/*!********************************!*\
  !*** ./state/reducers/list.js ***!
  \********************************/
/*! exports provided: fonts, substitution */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fonts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fonts */ "./state/reducers/fonts/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fonts", function() { return _fonts__WEBPACK_IMPORTED_MODULE_0__["fonts"]; });

/* harmony import */ var _substitution__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./substitution */ "./state/reducers/substitution.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "substitution", function() { return _substitution__WEBPACK_IMPORTED_MODULE_1__["substitution"]; });




/***/ }),

/***/ "./state/reducers/share.js":
false

})
//# sourceMappingURL=index.js.3ab559de31797a4e95b7.hot-update.js.map