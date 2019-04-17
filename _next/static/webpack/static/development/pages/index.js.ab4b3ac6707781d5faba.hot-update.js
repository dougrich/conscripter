webpackHotUpdate("static/development/pages/index.js",{

/***/ "./state/actions.js":
/*!**************************!*\
  !*** ./state/actions.js ***!
  \**************************/
/*! exports provided: fetchFonts, fetchFontResult, fetchFontError, updateSubstitutionGlyph, updateSubstitutionReplace, updateSubstitutionAdvanceWidth, updateSubstitutionDiacritic, removeSubstitution, cancelSubstitution, submitSubstitution, selectSubstitution, download, setFontName, swapSubstitution, save, load, clear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFonts", function() { return fetchFonts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFontResult", function() { return fetchFontResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFontError", function() { return fetchFontError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSubstitutionGlyph", function() { return updateSubstitutionGlyph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSubstitutionReplace", function() { return updateSubstitutionReplace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSubstitutionAdvanceWidth", function() { return updateSubstitutionAdvanceWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSubstitutionDiacritic", function() { return updateSubstitutionDiacritic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeSubstitution", function() { return removeSubstitution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelSubstitution", function() { return cancelSubstitution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitSubstitution", function() { return submitSubstitution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSubstitution", function() { return selectSubstitution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "download", function() { return download; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFontName", function() { return setFontName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swapSubstitution", function() { return swapSubstitution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return clear; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var opentype_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! opentype.js */ "./node_modules/opentype.js/src/opentype.js");
/* harmony import */ var _reducers_fonts_parsePath__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/fonts/parsePath */ "./state/reducers/fonts/parsePath.js");
/* harmony import */ var _reducers_fonts_parsePath__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reducers_fonts_parsePath__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _multiple_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../multiple-error */ "./multiple-error.js");
/* harmony import */ var _encoders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./encoders */ "./state/encoders/index.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actionTypes */ "./state/actionTypes.js");
/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./status */ "./state/status.js");
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! slugify */ "./node_modules/slugify/index.js");
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_8__);









/**
 * Fetches and parses the base font
 * @returns {*} dispatchable event object
 */

function fetchFonts() {
  return function (dispatch) {
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_6__["FETCH_FONTS"]
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
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_6__["FETCH_FONTS"],
    status: _status__WEBPACK_IMPORTED_MODULE_7__["STATUS_OK"],
    buffer: buffer
  };
}
/**
 * Result of fetching the font when an error occurs
 * @returns {*} dispatchable event object
 */

function fetchFontError() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_6__["FETCH_FONTS"],
    status: _status__WEBPACK_IMPORTED_MODULE_7__["STATUS_ERROR"]
  };
}
function updateSubstitutionGlyph(meta, svg) {
  var parser = new _reducers_fonts_parsePath__WEBPACK_IMPORTED_MODULE_3__(meta);

  var _parser$parse = parser.parse(svg),
      commands = _parser$parse.commands,
      warnings = _parser$parse.warnings;

  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_6__["UPDATE_SUBSTITUTION"],
    field: 'glyph/commands',
    warnings: warnings,
    value: parser.simplify(commands)
  };
}
function updateSubstitutionReplace(value) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_6__["UPDATE_SUBSTITUTION"],
    field: 'replace',
    value: value
  };
}
function updateSubstitutionAdvanceWidth(value) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_6__["UPDATE_SUBSTITUTION"],
    field: 'glyph/advanceWidth',
    value: value
  };
}
function updateSubstitutionDiacritic(value) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_6__["UPDATE_SUBSTITUTION"],
    field: 'glyph/diacritic',
    value: value
  };
}
function removeSubstitution(_ref) {
  var active = _ref.active;
  return function (dispatch) {
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_6__["REMOVE_SUBSTITUTION"],
      substitution: active
    });
    dispatch(cancelSubstitution());
  };
}
function cancelSubstitution() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_6__["CANCEL_SUBSTITUTION"]
  };
}
function submitSubstitution(_ref2) {
  var active = _ref2.active,
      currentGlyph = _ref2.currentGlyph,
      currentReplace = _ref2.currentReplace;
  return function (dispatch) {
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_6__["ADD_SUBSTITUTION"],
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
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_6__["SELECT_SUBSTITUTION"],
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
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_6__["DOWNLOAD"]
  };
}
function setFontName(value) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_6__["SET_FONTNAME"],
    value: value
  };
}
function swapSubstitution(a, b) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_6__["SWAP_SUBSTITUTION"],
    a: a,
    b: b
  };
}
function save(state) {
  var data = _encoders__WEBPACK_IMPORTED_MODULE_5__["default"].MSGPACK.encode(state);
  var blob = new Blob([data]);
  var url = window.URL.createObjectURL(blob);
  console.log(url);
  var container = document.createElement('a');
  container.setAttribute('style', 'display: none;');
  container.setAttribute('href', url);
  container.setAttribute('download', slugify__WEBPACK_IMPORTED_MODULE_8___default()(state.fonts.fontname || 'conscripter-custom-font') + '.cwk');
  document.body.appendChild(container);
  container.click();
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_6__["SAVE"]
  };
}
function load() {
  return function (dispatch) {
    var loader = document.createElement('input');
    loader.setAttribute('type', 'file');

    loader.onchange = function (e) {
      var file = e.target.files[0];
      var reader = new FileReader();

      reader.onload = function () {
        try {
          var data = {
            substitutions: [],
            fontname: 'My Custom Font'
          };

          if (file.name.endsWith('.json')) {
            data = _encoders__WEBPACK_IMPORTED_MODULE_5__["default"].JSON.decode(Buffer.from(reader.result).toString('utf8'));
          } else {
            data = _encoders__WEBPACK_IMPORTED_MODULE_5__["default"].MSGPACK.decode(Buffer.from(reader.result));
          }

          dispatch(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
            type: _actionTypes__WEBPACK_IMPORTED_MODULE_6__["LOAD"],
            error: null
          }, data));
        } catch (e) {
          dispatch({
            type: _actionTypes__WEBPACK_IMPORTED_MODULE_6__["LOAD"],
            error: new Error('Unable to parse selected file: did it come from Conscripter?'),
            substitutions: [],
            fontname: 'My Custom Font'
          });
        }
      };

      reader.readAsArrayBuffer(file);
    };

    loader.click();
  };
}
function clear() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_6__["CLEAR"]
  };
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ })

})
//# sourceMappingURL=index.js.ab4b3ac6707781d5faba.hot-update.js.map