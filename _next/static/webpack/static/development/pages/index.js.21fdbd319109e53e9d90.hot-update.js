webpackHotUpdate("static/development/pages/index.js",{

/***/ "./state/reducers/fonts/index.js":
/*!***************************************!*\
  !*** ./state/reducers/fonts/index.js ***!
  \***************************************/
/*! exports provided: reassembleDataUri, fonts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reassembleDataUri", function() { return reassembleDataUri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fonts", function() { return fonts; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actionTypes */ "./state/actionTypes.js");
/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../status */ "./state/status.js");
/* harmony import */ var _assembleDataUri__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assembleDataUri */ "./state/reducers/fonts/assembleDataUri.js");
/* harmony import */ var _assembleDataUri__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assembleDataUri__WEBPACK_IMPORTED_MODULE_4__);





var defaultState = {
  status: _status__WEBPACK_IMPORTED_MODULE_3__["STATUS_PENDING"],
  buffer: null,
  datauri: null,
  substitutions: [],
  fontname: 'My Custom Font'
};
function reassembleDataUri(assembleDataUri, reducer) {
  return function (state, action) {
    var newstate = reducer(state, action);
    var needToRebuildDataUri = !!newstate && !!newstate.buffer && !!newstate.substitutions.length && (!state || state.buffer !== newstate.buffer || state.substitutions !== newstate.substitutions || state.fontname !== newstate.fontname);

    if (needToRebuildDataUri) {
      var buffer = newstate.buffer,
          substitutions = newstate.substitutions,
          fontname = newstate.fontname;
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, newstate, assembleDataUri(buffer, substitutions, fontname));
    }

    return newstate;
  };
}
var fonts = reassembleDataUri(_assembleDataUri__WEBPACK_IMPORTED_MODULE_4__["assembleDataUri"], function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action && action.type === _actionTypes__WEBPACK_IMPORTED_MODULE_2__["FETCH_FONTS"]) {
    switch (action.status) {
      case _status__WEBPACK_IMPORTED_MODULE_3__["STATUS_OK"]:
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
          status: _status__WEBPACK_IMPORTED_MODULE_3__["STATUS_OK"],
          buffer: action.buffer
        });

      case _status__WEBPACK_IMPORTED_MODULE_3__["STATUS_ERROR"]:
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
          status: _status__WEBPACK_IMPORTED_MODULE_3__["STATUS_ERROR"],
          buffer: null,
          datauri: null
        });

      default:
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
          status: _status__WEBPACK_IMPORTED_MODULE_3__["STATUS_PENDING"],
          buffer: null,
          datauri: null
        });
    }
  }

  if (action && action.type === _actionTypes__WEBPACK_IMPORTED_MODULE_2__["ADD_SUBSTITUTION"]) {
    var substitutions = state.substitutions;
    var idx = substitutions.indexOf(action.replace);
    var newsubs;

    if (idx >= 0) {
      newsubs = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(substitutions.slice(0, idx)), [action.substitution], Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(substitutions.slice(idx + 1)));
    } else {
      newsubs = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(substitutions), [action.substitution]);
    }

    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
      substitutions: newsubs
    });
  }

  if (action && action.type === _actionTypes__WEBPACK_IMPORTED_MODULE_2__["REMOVE_SUBSTITUTION"]) {
    var _substitutions = state.substitutions;

    var _idx = _substitutions.indexOf(action.substitution);

    var _newsubs = _substitutions;

    if (_idx >= 0) {
      _newsubs = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_substitutions.slice(0, _idx)), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_substitutions.slice(_idx + 1)));
    }

    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
      substitutions: _newsubs
    });
  }

  if (action && action.type === _actionTypes__WEBPACK_IMPORTED_MODULE_2__["DOWNLOAD"]) {
    var buffer = state.buffer,
        _substitutions2 = state.substitutions,
        fontname = state.fontname;
    Object(_assembleDataUri__WEBPACK_IMPORTED_MODULE_4__["download"])(buffer, _substitutions2, fontname);
    return state;
  }

  if (action && action.type === _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SET_FONTNAME"]) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
      fontname: action.value
    });
  }

  if (action && action.type === _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SWAP_SUBSTITUTION"]) {
    var _substitutions3 = state.substitutions;

    var _newsubs2 = _substitutions3.slice();

    var a = _newsubs2[action.a];
    var b = _newsubs2[action.b];
    _newsubs2[action.a] = b;
    _newsubs2[action.b] = a;
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
      substitutions: _newsubs2
    });
  }

  if (action && action.type === _actionTypes__WEBPACK_IMPORTED_MODULE_2__["LOAD"]) {
    var _substitutions4 = action.substitutions,
        _fontname = action.fontname,
        error = action.error;
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
      error: error,
      substitutions: _substitutions4,
      fontname: _fontname
    });
  }

  return state;
});

/***/ })

})
//# sourceMappingURL=index.js.21fdbd319109e53e9d90.hot-update.js.map