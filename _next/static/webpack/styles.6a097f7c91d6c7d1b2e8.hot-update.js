webpackHotUpdate("styles",{

/***/ "./pages/index.scss":
/*!**************************!*\
  !*** ./pages/index.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"example":"cFAXvXTaJlY","text":"c2ulvVOpLjN","root":"cjesN69IMN1","actions":"cJDBFsuowWo","workspace":"c2p8mQfNZel","panel":"c3-m4RXpPa2","textpanel":"c1uFCkH3tKJ","container":"c2py_lfs-KG","topaction":"ce2Lj1mVDuc","internalpanel":"cq7CgpEqdwJ"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1555094989441");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.6a097f7c91d6c7d1b2e8.hot-update.js.map