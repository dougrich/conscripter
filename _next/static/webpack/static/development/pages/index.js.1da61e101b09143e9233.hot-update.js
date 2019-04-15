webpackHotUpdate("static/development/pages/index.js",{

/***/ "./state/reducers/fonts/assembleDataUri.js":
/*!*************************************************!*\
  !*** ./state/reducers/fonts/assembleDataUri.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _getIterator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js"));

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _getPrototypeOf = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js"));

var opentype = __webpack_require__(/*! opentype.js */ "./node_modules/opentype.js/src/opentype.js");

var slugify = __webpack_require__(/*! slugify */ "./node_modules/slugify/index.js");

var defaultFontName = 'conscripter-custom-font';
var fontPrototype = (0, _getPrototypeOf.default)(new opentype.Font({
  familyName: 'test',
  styleName: 'test',
  unitsPerEm: 1000,
  ascender: 800,
  descender: -200,
  glyphs: {}
}));
var defaultGsub = {
  "version": 1,
  "scripts": [{
    "tag": "DFLT",
    "script": {
      "defaultLangSys": {
        "reserved": 0,
        "reqFeatureIndex": 65535,
        "featureIndexes": [0]
      },
      "langSysRecords": []
    }
  }, {
    "tag": "latn",
    "script": {
      "defaultLangSys": {
        "reserved": 0,
        "reqFeatureIndex": 65535,
        "featureIndexes": [0]
      },
      "langSysRecords": []
    }
  }],
  "features": [{
    "tag": "calt",
    "feature": {
      "featureParams": 0,
      "lookupListIndexes": []
    }
  }],
  lookups: []
};

function arrayBufferToBase64(buffer) {
  var binary = '';
  var bytes = new Uint8Array(buffer);
  var len = bytes.byteLength;

  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }

  return window.btoa(binary);
}

function assertBadInput(truthy, message) {
  if (!truthy) {
    var error = new Error(message);
    error.status = 400;
    throw error;
  }
}

function makeSingleSubstitutionLookup(font, character, glyph) {
  var leadingGlyph = font.charToGlyphIndex(character);
  var subtable = {
    substFormat: 1,
    coverage: {
      format: 1,
      glyphs: [leadingGlyph]
    },
    deltaGlyphId: glyph - leadingGlyph
  };
  return {
    lookupType: 1,
    lookupFlag: 0,
    subtables: [subtable]
  };
}

function makeMultiSubstitutionLookup(font, characters, glyph) {
  var components = new Array(characters.length - 1);

  for (var i = 1; i < characters.length; i++) {
    components[i - 1] = font.charToGlyphIndex(characters[i]);
  }

  var leadingGlyph = font.charToGlyphIndex(characters[0]);
  var subtable = {
    substFormat: 1,
    coverage: {
      format: 1,
      glyphs: [leadingGlyph]
    },
    ligatureSets: [[{
      ligGlyph: glyph,
      components: components
    }]]
  };
  return {
    lookupType: 4,
    lookupFlag: 0,
    subtables: [subtable]
  };
}

function addSubstitution(font, characters, glyph) {
  assertBadInput(typeof characters === 'string', 'characters argument must be a string');
  assertBadInput(characters.length >= 1, 'characters argument must be a string >= 1');
  assertBadInput(typeof glyph === 'number', 'glyph argument must be a glyph code');
  assertBadInput((0, _getPrototypeOf.default)(font) === fontPrototype, 'font must be an instance of opentype.Font');
  var gsub = font.tables.gsub = font.tables.gsub || JSON.parse((0, _stringify.default)(defaultGsub));

  if (characters.length > 1) {
    gsub.lookups.push(makeMultiSubstitutionLookup(font, characters, glyph));
  } else {
    gsub.lookups.push(makeSingleSubstitutionLookup(font, characters, glyph));
  }

  gsub.features[0].feature.lookupListIndexes.push(gsub.lookups.length - 1);
}

function addGlyph(font, _ref) {
  var advanceWidth = _ref.advanceWidth,
      commands = _ref.commands;
  var g = new opentype.Glyph({
    index: font.glyphs.length,
    name: "glyph".concat(font.glyphs.lengt)
  });
  g.advanceWidth = advanceWidth;
  g.path = new opentype.Path({
    fill: 'black',
    stroke: null,
    strokeWidth: 1,
    unitsPerEm: font.unitsPerEm
  });
  g.path.commands = commands;
  font.glyphs.push(g.index, g);
  return g;
}

function applySubstitutions(font, substitutions) {
  var fontname = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultFontName;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator2.default)(substitutions), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ref3 = _step.value;
      var replace = _ref3.replace,
          glyph = _ref3.glyph;
      var glyphId = addGlyph(font, glyph);
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = (0, _getIterator2.default)(replace), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var text = _step2.value;
          addSubstitution(font, text, glyphId.index);
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

  font.names = {
    copyright: {
      en: 'Made by Conscripter, a tool for building conlang scripts\n\nLicence: CC0 1.0\n\nBase glyphs are derived from AVHershey Simplex, created in 2016 by Stewart C. Russel (scruss.com), which is in turn dervied from the character stroke coordinates publshed by Allen V. Hershey in \"Calligraphy for Computers\". Additional glyphs included through use of the app may have a different licence.'
    },
    fontFamily: {
      en: fontname
    },
    fontSubfamily: {
      en: 'Medium'
    },
    fullName: {
      en: fontname + 'Medium'
    },
    version: {
      en: 'Version 000.001'
    },
    postScriptName: {
      en: (fontname + 'Medium').replace(/\s/gi, '')
    }
  };
}

function assembleDataUri(buffer, substitutions, fontname) {
  var font = opentype.parse(buffer);
  applySubstitutions(font, substitutions, fontname);
  console.log((0, _stringify.default)(font.tables.gsub, null, ' '));
  return {
    datauri: 'data:font/otf;base64,' + arrayBufferToBase64(font.toArrayBuffer()),
    meta: {
      unitsPerEm: font.unitsPerEm,
      descender: font.descender
    }
  };
}

function download(buffer, substitutions) {
  var fontname = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultFontName;
  var font = opentype.parse(buffer);
  applySubstitutions(font, substitutions, fontname);
  var downloadname = slugify(fontname || defaultFontName) + '.otf';
  font.download(downloadname);
}

module.exports = {
  applySubstitutions: applySubstitutions,
  assembleDataUri: assembleDataUri,
  download: download
};

/***/ })

})
//# sourceMappingURL=index.js.1da61e101b09143e9233.hot-update.js.map