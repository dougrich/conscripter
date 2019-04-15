webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/compressjs/main.js":
/*!*****************************************!*\
  !*** ./node_modules/compressjs/main.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {if (typeof define !== 'function') { var define = __webpack_require__(/*! amdefine */ "./node_modules/webpack/buildin/amd-define.js")(module); }
define(['./lib/freeze','./lib/BitStream','./lib/Stream','./lib/BWT','./lib/Context1Model','./lib/DefSumModel','./lib/FenwickModel','./lib/MTFModel','./lib/NoModel','./lib/Huffman','./lib/RangeCoder','./lib/BWTC','./lib/Bzip2','./lib/Dmc','./lib/Lzjb','./lib/LzjbR','./lib/Lzp3','./lib/PPM','./lib/Simple'], function(freeze,BitStream,Stream,BWT,Context1Model,DefSumModel,FenwickModel,MTFModel,NoModel,Huffman,RangeCoder,BWTC,Bzip2,Dmc,Lzjb,LzjbR,Lzp3,PPM,Simple) {
    'use strict';
    return freeze({
        version: "0.0.1",
        // APIs
        BitStream: BitStream,
        Stream: Stream,
        // transforms
        BWT: BWT,
        // models and coder
        Context1Model: Context1Model,
        DefSumModel: DefSumModel,
        FenwickModel: FenwickModel,
        MTFModel: MTFModel,
        NoModel: NoModel,
        Huffman: Huffman,
        RangeCoder: RangeCoder,
        // compression methods
        BWTC: BWTC,
        Bzip2: Bzip2,
        Dmc: Dmc,
        Lzjb: Lzjb,
        LzjbR: LzjbR,
        Lzp3: Lzp3,
        PPM: PPM,
        Simple: Simple
    });
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-define.js":
/*!***************************************!*\
  !*** (webpack)/buildin/amd-define.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

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
/* harmony import */ var compressjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! compressjs */ "./node_modules/compressjs/main.js");
/* harmony import */ var compressjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(compressjs__WEBPACK_IMPORTED_MODULE_4__);
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
  var parser = new _reducers_fonts_parsePath__WEBPACK_IMPORTED_MODULE_2__(meta);

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

var u8ToBase64 = function u8ToBase64(u8) {
  return btoa(String.fromCharCode.apply(null, u8));
};

var u8FromBase64 = function u8FromBase64(str) {
  return atob(str).split('').map(function (c) {
    return c.charCodeAt(0);
  });
};

function share(_ref4) {
  var _ref4$fonts = _ref4.fonts,
      substitutions = _ref4$fonts.substitutions,
      fontname = _ref4$fonts.fontname;
  var data = {
    substitutions: substitutions,
    fontname: fontname
  };
  var buf = msgpack_lite__WEBPACK_IMPORTED_MODULE_3__["encode"](data);
  var buf2 = compressjs__WEBPACK_IMPORTED_MODULE_4__["BWTC"](buf);
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_5__["SHARE"],
    encoded: u8ToBase64(buf2)
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

/***/ })

})
//# sourceMappingURL=index.js.ffa8d5cf8b6ab8603e42.hot-update.js.map