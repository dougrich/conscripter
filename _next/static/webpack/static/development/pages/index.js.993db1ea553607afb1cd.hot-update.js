webpackHotUpdate("static/development/pages/index.js",{

/***/ "./state/reducers/fonts/parsePath.js":
/*!*******************************************!*\
  !*** ./state/reducers/fonts/parsePath.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js"));

var _wrapNativeSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/wrapNativeSuper */ "./node_modules/@babel/runtime-corejs2/helpers/esm/wrapNativeSuper.js"));

var _parseFloat2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js"));

var _isArray = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js"));

var _getIterator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js"));

function basis(t) {
  var w0 = Math.pow(1 - t, 3) * Math.pow(t, 0),
      w1 = 3 * Math.pow(1 - t, 2) * Math.pow(t, 1),
      w2 = 3 * Math.pow(1 - t, 1) * Math.pow(t, 2),
      w3 = Math.pow(1 - t, 0) * Math.pow(t, 3);
  return function (v0, v1, v2, v3) {
    return w0 * v0 + w1 * v1 + w2 * v2 + w3 * v3;
  };
}

var PathParser =
/*#__PURE__*/
function () {
  function PathParser(config) {
    var parse5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : __webpack_require__(/*! parse5 */ "./node_modules/parse5/lib/index.js");
    var svgPathParser = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : __webpack_require__(/*! svg-path-parser */ "./node_modules/svg-path-parser/index.js");
    var svgTransformParser = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : __webpack_require__(/*! svg-transform-parser */ "./node_modules/svg-transform-parser/index.js");
    (0, _classCallCheck2.default)(this, PathParser);
    this.config = config;
    this.parse5 = parse5;
    this.svgPathParser = svgPathParser;
    this.svgTransformParser = svgTransformParser;
  }

  (0, _createClass2.default)(PathParser, [{
    key: "parseTransform",
    value: function parseTransform(transform) {
      var detail = this.svgTransformParser.parse(transform);
      return function (node) {
        var type = node.type,
            x = node.x,
            y = node.y;

        if (detail.translate) {
          var _detail$translate = detail.translate,
              _detail$translate$tx = _detail$translate.tx,
              tx = _detail$translate$tx === void 0 ? 0 : _detail$translate$tx,
              _detail$translate$ty = _detail$translate.ty,
              ty = _detail$translate$ty === void 0 ? 0 : _detail$translate$ty;
          return {
            type: type,
            x: tx + x,
            y: ty + y
          };
        }

        if (detail.matrix) {
          var _detail$matrix = detail.matrix,
              a = _detail$matrix.a,
              b = _detail$matrix.b,
              c = _detail$matrix.c,
              d = _detail$matrix.d,
              e = _detail$matrix.e,
              f = _detail$matrix.f;
          return {
            type: type,
            x: a * x + c * y + e,
            y: b * x + d * y + f
          };
        }
      };
    }
  }, {
    key: "applyTransforms",
    value: function applyTransforms() {
      var transforms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var node = arguments.length > 1 ? arguments[1] : undefined;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator2.default)(transforms), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var t = _step.value;
          node = t(node);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return node;
    }
  }, {
    key: "attributes",
    value: function attributes(node) {
      var attributes = {};

      if (node.attrs) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = (0, _getIterator2.default)(node.attrs), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var attr = _step2.value;
            attributes[attr.name] = attr.value;
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }

      return attributes;
    }
  }, {
    key: "createCommand",
    value: function createCommand(cmd, i, arr) {
      if (cmd.code === 'S') {
        var _arr = arr[i - 1],
            x0 = _arr.x,
            y0 = _arr.y,
            x1 = _arr.x1,
            y1 = _arr.y1;
        console.log(cmd);

        if (x1 == y1 && x1 == null) {
          x1 = x;
          y1 = y;
        }
      }

      if (cmd.code === 'C') {
        var _arr2 = arr[i - 1],
            _x = _arr2.x,
            _y = _arr2.y;
        var x3 = cmd.x,
            y3 = cmd.y,
            _x2 = cmd.x1,
            x2 = cmd.x2,
            _y2 = cmd.y1,
            y2 = cmd.y2; // interpolate - note we skip the start as it should be drawn from the previous node

        var commands = [];

        for (var t = 0.1; t < 1; t += 0.06) {
          var apply = basis(t);
          commands.push({
            type: 'L',
            x: apply(_x, _x2, x2, x3),
            y: apply(_y, _y2, y2, y3)
          });
        } // this ensures we end at the exact end point


        commands.push({
          type: 'L',
          x: x3,
          y: y3
        });
        return commands;
      }

      return {
        type: {
          'H': 'L',
          'V': 'L'
        }[cmd.code] || cmd.code,
        x: cmd.x,
        y: cmd.y
      };
    }
  }, {
    key: "parseChild",
    value: function parseChild(node, commands, warnings) {
      var _this = this;

      var transforms = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
      var attributes = this.attributes(node);

      if (attributes.transform) {
        transforms = [].concat((0, _toConsumableArray2.default)(transforms), [this.parseTransform(attributes.transform)]);
      }

      if (node.nodeName === 'path') {
        // it is a path: pull out the critical attribute
        if (attributes.d) {
          var d = attributes.d;
          var subCommands = this.svgPathParser.makeAbsolute(this.svgPathParser.parseSVG(d));
          commands.push.apply(commands, (0, _toConsumableArray2.default)(subCommands.map(function (cmd, i, arr) {
            return _this.createCommand(cmd, i, arr);
          }).reduce(function (set, v) {
            return (0, _isArray.default)(v) ? [].concat((0, _toConsumableArray2.default)(set), (0, _toConsumableArray2.default)(v)) : [].concat((0, _toConsumableArray2.default)(set), [v]);
          }, []).map(function (cmd) {
            return _this.applyTransforms(transforms, cmd);
          }).map(function (cmd, i, arr) {
            if (cmd.x === arr[0].x && cmd.y === arr[0].y && i === arr.length - 1) {
              return {
                type: 'Z'
              };
            } else {
              return cmd;
            }
          })));

          if (commands[commands.length - 1].type !== 'Z') {
            commands.push({
              type: 'Z'
            });
          }
        }

        if (attributes.fill) {
          var fill = attributes.fill;

          if (fill === 'transparent') {
            warnings.push(PathParser.Codes.WarnEmptyFill);
          } else if (!/^#([0-9a-fA-F]){3,6}$/gi.test(fill)) {
            warnings.push(PathParser.Codes.WarnComplexFill);
          }
        }

        if (attributes.stroke) {
          var stroke = attributes.stroke;

          if (stroke !== 'transparent') {
            warnings.push(PathParser.Codes.WarnNonEmptyStroke);
          }
        }
      }

      if (node.nodeName === 'rect') {
        var width = attributes.width,
            height = attributes.height,
            _attributes$x = attributes.x,
            _x3 = _attributes$x === void 0 ? '0' : _attributes$x,
            _attributes$y = attributes.y,
            _y3 = _attributes$y === void 0 ? '0' : _attributes$y;

        var widthF = (0, _parseFloat2.default)(width);
        var heightF = (0, _parseFloat2.default)(height);
        var xF = (0, _parseFloat2.default)(_x3);
        var yF = (0, _parseFloat2.default)(_y3);
        var _subCommands = [{
          type: 'M',
          x: xF,
          y: yF
        }, {
          type: 'L',
          x: xF + widthF,
          y: yF
        }, {
          type: 'L',
          x: xF + widthF,
          y: yF + heightF
        }, {
          type: 'L',
          x: xF,
          y: yF + heightF
        }, {
          type: 'Z'
        }];
        commands.push.apply(commands, (0, _toConsumableArray2.default)(_subCommands.map(function (cmd) {
          return _this.applyTransforms(transforms, cmd);
        })));
      }

      if (node.nodeName === 'circle') {
        var cx = attributes.cx,
            cy = attributes.cy,
            r = attributes.r;
        var cxF = (0, _parseFloat2.default)(cx);
        var cyF = (0, _parseFloat2.default)(cy);
        var rF = (0, _parseFloat2.default)(r);
        var _subCommands2 = [{
          type: 'M',
          x: cxF + rF,
          y: cyF
        }];
        var incr = 0.076 * Math.PI;

        for (var i = incr; i < Math.PI * 2; i += incr) {
          _subCommands2.push({
            type: 'L',
            x: cxF + Math.cos(i) * rF,
            y: cyF + Math.sin(i) * rF
          });
        }

        _subCommands2.push({
          type: 'Z'
        });

        commands.push.apply(commands, (0, _toConsumableArray2.default)(_subCommands2.map(function (cmd) {
          return _this.applyTransforms(transforms, cmd);
        })));
      }

      if (node.nodeName === 'g') {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = (0, _getIterator2.default)(node.childNodes), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var childNode = _step3.value;
            this.parseChild(childNode, commands, warnings, transforms);
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }
    }
  }, {
    key: "findSvgNode",
    value: function findSvgNode(tree) {
      if (tree.nodeName === 'svg') {
        return tree;
      }

      if (!tree.childNodes) {
        return null;
      }

      for (var i = 0; i < tree.childNodes.length; i++) {
        var svg = this.findSvgNode(tree.childNodes[i]);
        if (svg) return svg;
      }

      return null;
    }
    /**
     * Parses a SVG document into a series of path commands
     * @param {string} svg contents to be parse
     * @returns {{ commands: opentype.PathCommand[]; warnings: { code: string; message: string; }[] }} commands for open type and a list of warning codes: see PathParser.Codes
     */

  }, {
    key: "parse",
    value: function parse(svg) {
      var tree = this.parse5.parse(svg);
      var svgNode = this.findSvgNode(tree);

      if (!svgNode) {
        throw new PathParser.Codes.ErrorNoSVGNode();
      }

      var commands = [];
      var warnings = [];
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = (0, _getIterator2.default)(svgNode.childNodes), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var childNode = _step4.value;
          this.parseChild(childNode, commands, warnings);
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      var _this$config = this.config,
          unitsPerEm = _this$config.unitsPerEm,
          descender = _this$config.descender; // scale commands

      var scale = 1.0;
      var attributes = this.attributes(svgNode);

      if (attributes.height) {
        scale = unitsPerEm / (0, _parseFloat2.default)(attributes.height);
      }

      if (attributes.viewBox) {
        scale = unitsPerEm / (0, _parseFloat2.default)(attributes.viewBox.split(' ')[3]);
      }

      var _arr3 = commands;

      for (var _i = 0; _i < _arr3.length; _i++) {
        var cmd = _arr3[_i];
        if (cmd.x) cmd.x = cmd.x * scale;
        if (cmd.y) cmd.y = unitsPerEm - cmd.y * scale + descender;
      }

      warnings = warnings.filter(function (x, i, arr) {
        return arr.indexOf(x) === i;
      });
      return {
        commands: commands,
        warnings: warnings
      };
    }
  }]);
  return PathParser;
}();

PathParser.Codes = {
  ErrorNoSVGNode:
  /*#__PURE__*/
  function (_Error) {
    (0, _inherits2.default)(ErrorNoSVGNode, _Error);

    function ErrorNoSVGNode() {
      var _this2;

      (0, _classCallCheck2.default)(this, ErrorNoSVGNode);
      _this2 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ErrorNoSVGNode).call(this, 'Could not find the root SVG node - is this a well-formated SVG document?'));
      _this2.code === 'ErrorNoSVGNode';
      return _this2;
    }

    return ErrorNoSVGNode;
  }((0, _wrapNativeSuper2.default)(Error)),
  WarnEmptyFill: {
    code: 'WarnEmptyFill',
    message: 'One or more paths have an empty fill, which can have unexpected results. Ensure all shapes have a solid fill and no stroke.'
  },
  WarnComplexFill: {
    code: 'WarnComplexFill',
    message: 'One or more paths have a fill that is not a solid flat color, which can have unexpected results. Ensure all shapes have a solid fill and no stroke.'
  },
  WarnNonEmptyStroke: {
    code: 'WarnNonEmptyStroke',
    message: 'One or more paths have a non-empty stroke, which can have unexpected results. Ensure all shapes have a solid fill and no stroke.'
  }
};
module.exports = PathParser;

/***/ })

})
//# sourceMappingURL=index.js.993db1ea553607afb1cd.hot-update.js.map