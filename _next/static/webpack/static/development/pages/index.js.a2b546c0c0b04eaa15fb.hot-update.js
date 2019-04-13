webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/dropzone.js":
/*!********************************!*\
  !*** ./components/dropzone.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DropZone; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _dropzone_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dropzone.scss */ "./components/dropzone.scss");
/* harmony import */ var _dropzone_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_dropzone_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./typography */ "./components/typography.js");





var _jsxFileName = "/git/fonts/conscripter/components/dropzone.js";




var DropZone =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(DropZone, _React$Component);

  function DropZone(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DropZone);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DropZone).call(this, props));
    _this.state = {
      warning: '',
      loading: false
    };
    _this.fileInput = react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();

    _this.onClick = function (e) {
      e.stopPropagation();

      _this.fileInput.current.click();
    };

    _this.onFileAdded = function (e) {
      var file = e.target.files[0];
      e.target.value = null;

      if (file.name.indexOf('.svg') !== file.name.length - '.svg'.length) {
        _this.setState({
          warning: "".concat(file.name, " does not appear to be an SVG file: make sure it is a plain text SVG file.")
        });
      } else {
        _this.setState({
          warning: null,
          loading: true
        });

        var filereader = new FileReader();

        filereader.onload = function () {
          var error;

          try {
            _this.props.onUpload({
              filename: file.name,
              contents: filereader.result
            });
          } catch (e) {
            console.error(e);
            error = e;
          }

          _this.setState({
            warning: error ? error.message : null,
            loading: false
          });
        };

        filereader.readAsText(file);
      }
    };

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DropZone, [{
    key: "renderWarning",
    value: function renderWarning() {
      var warning = this.state.warning;
      if (!warning) return null;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, warning);
    }
  }, {
    key: "render",
    value: function render() {
      var hasWarning = !!this.state.warning;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _dropzone_scss__WEBPACK_IMPORTED_MODULE_6___default.a.container,
        onClick: this.onClick,
        tabIndex: "0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_typography__WEBPACK_IMPORTED_MODULE_7__["default"].Button, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Drag file or click here to upload"), this.renderWarning(), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        className: _dropzone_scss__WEBPACK_IMPORTED_MODULE_6___default.a.input,
        ref: this.fileInput,
        onChange: this.onFileAdded,
        accept: "image/svg+xml",
        type: "file",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }));
    }
  }]);

  return DropZone;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.a2b546c0c0b04eaa15fb.hot-update.js.map