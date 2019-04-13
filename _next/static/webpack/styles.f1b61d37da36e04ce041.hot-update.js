webpackHotUpdate("styles",{

/***/ "./components/glyph-preview.scss":
/*!***************************************!*\
  !*** ./components/glyph-preview.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"c3dDkVKGyEV","subcontainer":"c2dND6zw-2Z","textcontainer":"c1DkvKvLuYt","glyph":"c3ty2SAJw0T","rule":"cXi8KW69u6n","faded":"c3e4Fqd_8P0","edges":"c2HF_knaWHB"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1555178684832");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.f1b61d37da36e04ce041.hot-update.js.map