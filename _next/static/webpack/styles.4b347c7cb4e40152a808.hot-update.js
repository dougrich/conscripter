webpackHotUpdate("styles",{

/***/ "./components/slider-toggle.scss":
/*!***************************************!*\
  !*** ./components/slider-toggle.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"track":"clwKm5UI_dg","runner":"c3wx3DNoCkH","trackcontainer":"c2n8fCr-0qJ","thumb":"c2WR1G6djPH","thumbactive":"c3-UQRcoGF_"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1555122993507");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.4b347c7cb4e40152a808.hot-update.js.map