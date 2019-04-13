webpackHotUpdate("static/development/pages/usage.js",{

/***/ "./docs/how-to.md":
/*!************************!*\
  !*** ./docs/how-to.md ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("## SVG Creation\n\nSVGs uploaded will only use the flat, solid fill portion of the image. Strokes and gradient fills are not supported.\n\nThe viewbox or document width and height will be treated as the 'main area' of the glyph. You can leave these bounds - this is useful to place diacritics with letters, as seen in the Abugida example below.\n\n## Font Usage\n\nAfter downloading the font, you should be able to use it in most advanced word editing programs. WordPad or Notepad will not be able to use it.\n\nInkscape, Adobe Illustrator, Adobe Photoshop, Adobe InDesign, and Microsoft Publisher should all support it out of the box.\n\nFor Microsoft Word, you will need to manually turn on `calt` support. This is done by opening the fonts menu and checking the `calt` checkbox.\n\n## Tutorials\n\n### Use Case: Abugida\n\n![Abugida2 - Phadkoreut](/static/how-to/abugida2/phadkoreut.gif)\n\nAbugidas are tricky to do with a simple font tool, so let's look at how to accomplish this. The files are located [here](https://github.com/dougrich/conscripter/tree/master/tests/abugida2). Before going any further, load [this json, abugida2.json](https://raw.githubusercontent.com/dougrich/conscripter/master/tests/abugida2/abugida2.json) into Conscripter using the Load button. This is the completed font.\n\nAbugida2's orthography is really simple.\n\n![Abugida2 - Orthography](/static/how-to/abugida2/orthography.png)\n\n---\n\n__First__, we need to create a consistent set of glyphs in our SVG editor of choice. \n\nI'd recommend creating a `base.svg` or similar that you can base each glyph on, that includes horizontal rules for common areas like the accent mark region and how for down you go.\n\nFor each consonant, draw a path. Once the path is completed, use `Stroke to Path` or similar. In Inkscape this is in `Object > Stroke to Path`. This is important because we only use the _fill_ portion of the SVG to draw the glyph.\n\nSave each consonant into their own file, keeping a consistent positioning for each.\n\nFor each vowel, we need to position the accent mark _before_ the actual glyph. This is done simply by moving the entire glyph to the left of the document.\n\nI'd recommend loading up the example files in your editor to get an idea of how the positioning and layout works, as well as what a flat fill looks like.\n\n---\n\n__Second__, we need to add these into Conscripter.\n\nNavigate to the app. Click the \"Get Started\" button.\n\nAdd one of the `.svg` files you created, set the 'replace' to the characters you'd like it to replace, and set the advance width.\n\n![Abugida2 - Example uploading the d glyph](/static/how-to/abugida2/upload-d.gif)\n\nAfter hitting submit, you can change the version by clicking on the glyph again. You can reorder the glyphs by dragging and dropping or by opening them up.\n\nOrder matters, especially in Abugida2 - try uploading the `p` glyph before the `h` glyph, and then try typing `phadkoreut`. Not how the `ph` looks like a `p` glyph and then the `h` character. The most important glyphs should come before the least important glyphs.\n\n---\n\n__Finally__, once completed, make sure to __name your font__, and then hit `save` to download a copy of everything you've done. This is needed if you want to make changes later. Hit `download` to download the actual `.otf` onto your computer.\n\nInstall the font on your computer (this is operating system dependent, but most will give you an option to install if you double click to run the `.otf`). Close all your editing programs, and re-open them - you should see your font in the list of choices available.\n\nMade it this far? Have feedback on how to improve this tutorial? [Create an issue on Github](https://github.com/dougrich/conscripter/issues/new) to help improve the app!\n\n");

/***/ })

})
//# sourceMappingURL=usage.js.758c91960e60e9f620be.hot-update.js.map