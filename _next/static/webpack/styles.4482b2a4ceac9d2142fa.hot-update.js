webpackHotUpdate("styles",{

/***/ "./components/typography.scss":
/*!************************************!*\
  !*** ./components/typography.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"links":"c3TEuZXOMTR","btn":"c3Vtq6tm1U-","copyright":"c1OmqIvQnJ_","label":"c2m02-foCoL","display":"c1KeA-OW266","sectionheader":"c2VQp48jR5X","icon":"c2dkaOacspC","small":"c22JciRwILQ"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1555124931075");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.4482b2a4ceac9d2142fa.hot-update.js.map