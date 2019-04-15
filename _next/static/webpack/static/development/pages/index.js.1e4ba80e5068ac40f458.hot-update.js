webpackHotUpdate("static/development/pages/index.js",{

/***/ "./state/actions.js":
/*!**************************!*\
  !*** ./state/actions.js ***!
  \**************************/
/*! exports provided: fetchFonts, fetchFontResult, fetchFontError, updateSubstitutionGlyph, updateSubstitutionReplace, updateSubstitutionAdvanceWidth, removeSubstitution, cancelSubstitution, submitSubstitution, selectSubstitution, download, setFontName, swapSubstitution, save, share, load */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "share", function() { return share; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_fonts_parsePath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/fonts/parsePath */ "./state/reducers/fonts/parsePath.js");
/* harmony import */ var _reducers_fonts_parsePath__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reducers_fonts_parsePath__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var msgpack_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! msgpack-lite */ "./node_modules/msgpack-lite/lib/browser.js");
/* harmony import */ var msgpack_lite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(msgpack_lite__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actionTypes */ "./state/actionTypes.js");
/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./status */ "./state/status.js");
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slugify */ "./node_modules/slugify/index.js");
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_6__);







/**
 * Fetches and parses the base font
 * @returns {*} dispatchable event object
 */

function fetchFonts() {
  return function (dispatch) {
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["FETCH_FONTS"]
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
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["FETCH_FONTS"],
    status: _status__WEBPACK_IMPORTED_MODULE_5__["STATUS_OK"],
    buffer: buffer
  };
}
/**
 * Result of fetching the font when an error occurs
 * @returns {*} dispatchable event object
 */

function fetchFontError() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["FETCH_FONTS"],
    status: _status__WEBPACK_IMPORTED_MODULE_5__["STATUS_ERROR"]
  };
}
function updateSubstitutionGlyph(meta, svg) {
  var parser = new _reducers_fonts_parsePath__WEBPACK_IMPORTED_MODULE_2__(meta);

  var _parser$parse = parser.parse(svg),
      commands = _parser$parse.commands,
      warnings = _parser$parse.warnings;

  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["UPDATE_SUBSTITUTION"],
    field: 'glyph/commands',
    warnings: warnings,
    value: commands
  };
}
function updateSubstitutionReplace(value) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["UPDATE_SUBSTITUTION"],
    field: 'replace',
    value: value
  };
}
function updateSubstitutionAdvanceWidth(value) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["UPDATE_SUBSTITUTION"],
    field: 'glyph/advanceWidth',
    value: value
  };
}
function removeSubstitution(_ref) {
  var active = _ref.active;
  return function (dispatch) {
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["REMOVE_SUBSTITUTION"],
      substitution: active
    });
    dispatch(cancelSubstitution());
  };
}
function cancelSubstitution() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["CANCEL_SUBSTITUTION"]
  };
}
function submitSubstitution(_ref2) {
  var active = _ref2.active,
      currentGlyph = _ref2.currentGlyph,
      currentReplace = _ref2.currentReplace;
  return function (dispatch) {
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["ADD_SUBSTITUTION"],
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
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["SELECT_SUBSTITUTION"],
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
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["DOWNLOAD"]
  };
}
function setFontName(value) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["SET_FONTNAME"],
    value: value
  };
}
function swapSubstitution(a, b) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["SWAP_SUBSTITUTION"],
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
  container.setAttribute('download', slugify__WEBPACK_IMPORTED_MODULE_6___default()(fontname || 'conscripter-custom-font') + '.json');
  container.click();
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["SAVE"]
  };
}
function share(_ref4) {
  var _ref4$fonts = _ref4.fonts,
      substitutions = _ref4$fonts.substitutions,
      fontname = _ref4$fonts.fontname;
  var data = {
    substitutions: substitutions,
    fontname: fontname
  };
  var buf = msgpack_lite__WEBPACK_IMPORTED_MODULE_3__["encode"](data);
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["SHARE"],
    encoded: buf
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
            type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["LOAD"],
            error: null,
            substitutions: substitutions,
            fontname: fontname
          });
        } catch (e) {
          dispatch({
            type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["LOAD"],
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

/***/ })

})
//# sourceMappingURL=index.js.1e4ba80e5068ac40f458.hot-update.js.map