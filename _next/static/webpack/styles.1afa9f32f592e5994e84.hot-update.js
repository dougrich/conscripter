webpackHotUpdate("styles",{

/***/ "./components/slider.scss":
/*!********************************!*\
  !*** ./components/slider.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"track":"c2tVooTKMNb","runner":"c1EP_XOMii7","trackcontainer":"cz3Im3SjWJT","thumb":"c1KrP_73y5Z","thumbactive":"c3e27D_E5zc"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1555118864695");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.1afa9f32f592e5994e84.hot-update.js.map