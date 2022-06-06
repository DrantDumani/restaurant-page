"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/restuarant_bg.png */ "./src/images/restuarant_bg.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/HyliaSerifBeta-Regular.otf */ "./src/fonts/HyliaSerifBeta-Regular.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/OpenSans-Regular.ttf */ "./src/fonts/OpenSans-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n    --bg-color: #000919d9;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center fixed;\r\n    background-size: cover;\r\n    min-height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10vh;\r\n}\r\n\r\n@font-face {\r\n    font-family: \"HyliaSerif\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"opentype\");\r\n}\r\n\r\n@font-face {\r\n    font-family: \"OpenSans\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\");\r\n}\r\n\r\nbody>* {\r\n    background-color: var(--bg-color);\r\n    color: #dedede;\r\n    font-family: \"OpenSans\";\r\n}\r\n\r\n.menu-grid,\r\nheader,\r\nfooter {\r\n    text-align: center;\r\n}\r\n\r\n.title,\r\n.food-name {\r\n    font-family: \"HyliaSerif\";\r\n}\r\n\r\n.title {\r\n    font-size: 48px;\r\n}\r\n\r\n.food-name {\r\n    font-size: 28px;\r\n}\r\n\r\n.btn-list {\r\n    padding: 0;\r\n    list-style-type: none;\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 8px;\r\n}\r\n\r\n.btn-list button {\r\n    background-color: inherit;\r\n    color: inherit;\r\n    font-family: inherit;\r\n    font-size: 24px;\r\n    border: none;\r\n    cursor: pointer;\r\n    transition: 0.7s;\r\n}\r\n\r\n.btn-list button:hover {\r\n    margin-top: -16px;\r\n}\r\n\r\n.courage:hover,\r\n.courage:active,\r\n.courage.clicked {\r\n    color: #65df6f;\r\n}\r\n\r\n.power:hover,\r\n.power:active,\r\n.power.clicked {\r\n    color: #df6565;\r\n}\r\n\r\n.wisdom:hover,\r\n.wisdom:active,\r\n.wisdom.clicked {\r\n    color: #6593df;\r\n}\r\n\r\n#content {\r\n    background-color: var(--bg-color);\r\n    align-self: center;\r\n    padding: 5vh 5vw;\r\n    border-radius: 4px;\r\n    border: 1px solid #4f4949;\r\n    text-align: center;\r\n    font-size: 16px;\r\n}\r\n\r\n.homepage,\r\n.contact {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.homepage,\r\n.menu-grid,\r\n.contact {\r\n    width: clamp(300px, 70vw, 800px);\r\n    transition: opacity 0.5s ease-in;\r\n}\r\n\r\n.homePage-img {\r\n    border-radius: 50%;\r\n    width: min(85%, 300px);\r\n    height: auto;\r\n}\r\n\r\n.menu-grid {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\r\n    gap: 16px;\r\n    padding: 10px 0;\r\n}\r\n\r\n.grid-card {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 16px;\r\n    text-align: center;\r\n    background-color: var(--bg-color);\r\n    transition: all 0.4s ease-in;\r\n}\r\n\r\n.card-img {\r\n    width: 200px;\r\n    height: auto;\r\n    align-self: center;\r\n}\r\n\r\n.grid-card:hover {\r\n    box-shadow: -2px 2px 43px 3px #dedede;\r\n}\r\n\r\n.food-price {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n\r\n.contact-img {\r\n    width: min(85%, 550px);\r\n    border: 1px solid #fff;\r\n    border-radius: 4px;\r\n}\r\n\r\nfooter {\r\n    margin-top: auto;\r\n}\r\n\r\nfooter a {\r\n    text-decoration: none;\r\n    color: #bebaba;\r\n    transition: color 0.4s;\r\n}\r\n\r\nfooter a:hover {\r\n    color: #fcfcfc;\r\n}\r\n\r\n.footer-link>svg {\r\n    vertical-align: bottom;\r\n}\r\n\r\n.invisible {\r\n    opacity: 0;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,SAAS;IACT,iFAA2E;IAC3E,sBAAsB;IACtB,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,yBAAyB;IACzB,+DAAiE;AACrE;;AAEA;IACI,uBAAuB;IACvB,+DAA2D;AAC/D;;AAEA;IACI,iCAAiC;IACjC,cAAc;IACd,uBAAuB;AAC3B;;AAEA;;;IAGI,kBAAkB;AACtB;;AAEA;;IAEI,yBAAyB;AAC7B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,qBAAqB;IACrB,aAAa;IACb,uBAAuB;IACvB,QAAQ;AACZ;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,oBAAoB;IACpB,eAAe;IACf,YAAY;IACZ,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;;;IAGI,cAAc;AAClB;;AAEA;;;IAGI,cAAc;AAClB;;AAEA;;;IAGI,cAAc;AAClB;;AAEA;IACI,iCAAiC;IACjC,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,yBAAyB;IACzB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;;;IAGI,gCAAgC;IAChC,gCAAgC;AACpC;;AAEA;IACI,kBAAkB;IAClB,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,4DAA4D;IAC5D,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,kBAAkB;IAClB,iCAAiC;IACjC,4BAA4B;AAChC;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,sBAAsB;IACtB,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;IACrB,cAAc;IACd,sBAAsB;AAC1B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,UAAU;AACd","sourcesContent":["* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n    --bg-color: #000919d9;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    background: url(\"./images/restuarant_bg.png\") no-repeat center center fixed;\r\n    background-size: cover;\r\n    min-height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10vh;\r\n}\r\n\r\n@font-face {\r\n    font-family: \"HyliaSerif\";\r\n    src: url(\"./fonts/HyliaSerifBeta-Regular.otf\") format(\"opentype\");\r\n}\r\n\r\n@font-face {\r\n    font-family: \"OpenSans\";\r\n    src: url(\"./fonts/OpenSans-Regular.ttf\") format(\"truetype\");\r\n}\r\n\r\nbody>* {\r\n    background-color: var(--bg-color);\r\n    color: #dedede;\r\n    font-family: \"OpenSans\";\r\n}\r\n\r\n.menu-grid,\r\nheader,\r\nfooter {\r\n    text-align: center;\r\n}\r\n\r\n.title,\r\n.food-name {\r\n    font-family: \"HyliaSerif\";\r\n}\r\n\r\n.title {\r\n    font-size: 48px;\r\n}\r\n\r\n.food-name {\r\n    font-size: 28px;\r\n}\r\n\r\n.btn-list {\r\n    padding: 0;\r\n    list-style-type: none;\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 8px;\r\n}\r\n\r\n.btn-list button {\r\n    background-color: inherit;\r\n    color: inherit;\r\n    font-family: inherit;\r\n    font-size: 24px;\r\n    border: none;\r\n    cursor: pointer;\r\n    transition: 0.7s;\r\n}\r\n\r\n.btn-list button:hover {\r\n    margin-top: -16px;\r\n}\r\n\r\n.courage:hover,\r\n.courage:active,\r\n.courage.clicked {\r\n    color: #65df6f;\r\n}\r\n\r\n.power:hover,\r\n.power:active,\r\n.power.clicked {\r\n    color: #df6565;\r\n}\r\n\r\n.wisdom:hover,\r\n.wisdom:active,\r\n.wisdom.clicked {\r\n    color: #6593df;\r\n}\r\n\r\n#content {\r\n    background-color: var(--bg-color);\r\n    align-self: center;\r\n    padding: 5vh 5vw;\r\n    border-radius: 4px;\r\n    border: 1px solid #4f4949;\r\n    text-align: center;\r\n    font-size: 16px;\r\n}\r\n\r\n.homepage,\r\n.contact {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.homepage,\r\n.menu-grid,\r\n.contact {\r\n    width: clamp(300px, 70vw, 800px);\r\n    transition: opacity 0.5s ease-in;\r\n}\r\n\r\n.homePage-img {\r\n    border-radius: 50%;\r\n    width: min(85%, 300px);\r\n    height: auto;\r\n}\r\n\r\n.menu-grid {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\r\n    gap: 16px;\r\n    padding: 10px 0;\r\n}\r\n\r\n.grid-card {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 16px;\r\n    text-align: center;\r\n    background-color: var(--bg-color);\r\n    transition: all 0.4s ease-in;\r\n}\r\n\r\n.card-img {\r\n    width: 200px;\r\n    height: auto;\r\n    align-self: center;\r\n}\r\n\r\n.grid-card:hover {\r\n    box-shadow: -2px 2px 43px 3px #dedede;\r\n}\r\n\r\n.food-price {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n\r\n.contact-img {\r\n    width: min(85%, 550px);\r\n    border: 1px solid #fff;\r\n    border-radius: 4px;\r\n}\r\n\r\nfooter {\r\n    margin-top: auto;\r\n}\r\n\r\nfooter a {\r\n    text-decoration: none;\r\n    color: #bebaba;\r\n    transition: color 0.4s;\r\n}\r\n\r\nfooter a:hover {\r\n    color: #fcfcfc;\r\n}\r\n\r\n.footer-link>svg {\r\n    vertical-align: bottom;\r\n}\r\n\r\n.invisible {\r\n    opacity: 0;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_Hyrule_Castle_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/Hyrule_Castle.png */ "./src/images/Hyrule_Castle.png");


function contactPage() {
    const contactDiv = document.createElement("div");
    contactDiv.classList.add('contact')
    
    let restuarantImg = document.createElement("img")
    restuarantImg.src = _images_Hyrule_Castle_png__WEBPACK_IMPORTED_MODULE_0__
    restuarantImg.alt = "Original location"
    restuarantImg.classList.add("contact-img")

    const locationText = document.createElement("p")
    locationText.textContent = "Even one hundred years later, our original location of Hyrule Castle still stands strong. However, you may find us at any location with a cooking pot. We're open 24/7, rain, snow, shine, or blistering heat. Feel free to place an early reservation to obtain a live viewing of the chef's masterful technique."

    const slateContactText = document.createElement("p")
    slateContactText.textContent = "To make a reservation, feel free to contact us via Sheikah Slate. If you do so, please send a photo of your preferred location."
    contactDiv.append(restuarantImg, locationText, slateContactText)
    return contactDiv
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_ChefLink_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/ChefLink.jpg */ "./src/images/ChefLink.jpg");


function homePage() {
    const container = document.createElement("div");
    container.classList.add("invisible", "homepage")
    const restuarantText = document.createElement("p")

    const homePageImg = document.createElement("img")
    homePageImg.src = _images_ChefLink_jpg__WEBPACK_IMPORTED_MODULE_0__
    homePage.alt = "Chef Link's culinary expertise"
    homePageImg.classList.add("homePage-img")
    container.append(homePageImg)

    restuarantText.textContent = "Over one hundred years worth of recipes created purely from naturally growing ingredients. Taste of the wild is certain to deliver to you a refreshing and delicious experience."
    container.append(restuarantText)
    return container
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





function transitionPatch(){
    setTimeout(() => {
        document.querySelector("#content div").classList.remove("invisible")
    }, 100)
}

function createHeader(){
    const header = document.createElement("header")
    const title = document.createElement("h1")
    title.classList.add("title")
    title.textContent = "Taste of the Wild"

    const btnList = document.createElement("ul")
    btnList.classList.add("btn-list")
    const buttonInfo = [
        {text: "Menu", eventFn: _menu__WEBPACK_IMPORTED_MODULE_2__["default"], eventFNStr: "menu", classN: "power",},
        {text: "Home", eventFn: _homepage__WEBPACK_IMPORTED_MODULE_1__["default"], eventFNStr: "homePage", classN: "courage",},
        {text: "Contact", eventFn: _contact__WEBPACK_IMPORTED_MODULE_3__["default"], eventFNStr: "contactPage", classN: "wisdom",}
    ]

    for (let button of buttonInfo){
        const item = document.createElement("li")
        const btn = document.createElement("button")
        btn.textContent = button.text 
        btn.classList.add(button.classN, "header-btn")
        btn.addEventListener("click", (e) => {
            const headerBtns = document.querySelectorAll(".header-btn")
            for (let btn of headerBtns){
                if (btn !== e.target) {
                    btn.classList.remove("clicked")
                    btn.disabled = false
                }
                else {
                    btn.classList.add("clicked")
                    btn.disabled = true
                }
            }
            resetContent().appendChild(button.eventFn())
            transitionPatch()
        })
        item.append(btn)
        btnList.append(item)
    }

    header.append(title, btnList)
    return header
}

function createFooter(){
    const footer = document.createElement("footer")
    const footerText = document.createElement("p")
    footerText.textContent = "2022. Made by Darnell. View more projects "

    const ghLink = document.createElement("a")
    ghLink.classList.add("footer-link")
    ghLink.target = "blank"
    ghLink.href = "https://github.com/DrantDumani"
    footerText.append(ghLink)

    const artCredit = document.createElement("p")
    artCredit.textContent = "Background image created by "

    const creditLink = document.createElement("a")
    creditLink.textContent = "EvZone"
    creditLink.href = "https://alphacoders.com/users/profile/148956/EvZone"
    creditLink.target = "blank"

    const ghSVG = document.createElementNS("http://www.w3.org/2000/svg","svg")
    ghSVG.setAttribute("style", "width:24px;height:24px")
    ghSVG.setAttribute("viewBox", "0 0 24 24")
    
    const svgPath = document.createElementNS("http://www.w3.org/2000/svg","path")
    svgPath.setAttribute("fill", "currentColor")
    svgPath.setAttribute("d", "M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z")
    ghSVG.append(svgPath)
    ghLink.appendChild(ghSVG)

    artCredit.append(creditLink)
    footer.append(footerText, artCredit)
    return footer
}

function resetContent(){
    const contentDiv = document.querySelector("#content");
    while (contentDiv.firstChild){
        contentDiv.removeChild(contentDiv.firstChild)
    }
    return contentDiv
}

document.body.insertBefore(createHeader(), document.querySelector("#content"))
document.body.append(createFooter())

window.addEventListener("load", () => {
    document.querySelector("#content").appendChild((0,_homepage__WEBPACK_IMPORTED_MODULE_1__["default"])())
    transitionPatch()
})

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_clam_chowder_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/clam_chowder.png */ "./src/images/clam_chowder.png");
/* harmony import */ var _images_copious_simmered_fruit_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/copious_simmered_fruit.png */ "./src/images/copious_simmered_fruit.png");
/* harmony import */ var _images_gourmet_meat_curry_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/gourmet_meat_curry.png */ "./src/images/gourmet_meat_curry.png");
/* harmony import */ var _images_heart_soup_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/heart_soup.png */ "./src/images/heart_soup.png");
/* harmony import */ var _images_honeyed_fruits_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/honeyed_fruits.png */ "./src/images/honeyed_fruits.png");
/* harmony import */ var _images_prime_meat_and_rice_bowl_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/prime_meat_and_rice_bowl.png */ "./src/images/prime_meat_and_rice_bowl.png");
/* harmony import */ var _images_seafood_pealla_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/seafood_pealla.png */ "./src/images/seafood_pealla.png");
/* harmony import */ var _images_vegetable_curry_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/vegetable_curry.png */ "./src/images/vegetable_curry.png");









const foodArr = [[_images_clam_chowder_png__WEBPACK_IMPORTED_MODULE_0__, "Clam Chowder", "20"], 
[_images_copious_simmered_fruit_png__WEBPACK_IMPORTED_MODULE_1__, "Copious Simmered Fruit", "10"],
[_images_gourmet_meat_curry_png__WEBPACK_IMPORTED_MODULE_2__, "Gourmet Meat Curry", "70"], 
[_images_heart_soup_png__WEBPACK_IMPORTED_MODULE_3__, "Creamy Heart Soup", "40"],
[_images_honeyed_fruits_png__WEBPACK_IMPORTED_MODULE_4__, "Honeyed Fruit", "5"], 
[_images_prime_meat_and_rice_bowl_png__WEBPACK_IMPORTED_MODULE_5__, "Prime Meat and Rice Bowl", "50"],
[_images_seafood_pealla_png__WEBPACK_IMPORTED_MODULE_6__, "Seafood Pealla", "50"], 
[_images_vegetable_curry_png__WEBPACK_IMPORTED_MODULE_7__, "Vegetable Curry", "30"]]

function menu() {
    const div = document.createElement("div");
    div.classList.add("menu-grid", "invisible")

    for (let meal of foodArr){
        const card = document.createElement("div")
        card.classList.add("grid-card")

        const cardImg = document.createElement("img")
        cardImg.classList.add("card-img")
        cardImg.src = meal[0]
        cardImg.alt = meal[1]

        const foodName = document.createElement("span")
        foodName.textContent = meal[1]
        foodName.classList.add("food-name")

        const foodPrice = document.createElement("span")
        foodPrice.classList.add("food-price")
        foodPrice.textContent = `\$${meal[2]}`
        card.append(cardImg, foodName, foodPrice)
        
        div.append(card)
    }
    return div
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ "./src/fonts/HyliaSerifBeta-Regular.otf":
/*!**********************************************!*\
  !*** ./src/fonts/HyliaSerifBeta-Regular.otf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "587194a6240d0f662864.otf";

/***/ }),

/***/ "./src/fonts/OpenSans-Regular.ttf":
/*!****************************************!*\
  !*** ./src/fonts/OpenSans-Regular.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "57cd57a648021fa1c396.ttf";

/***/ }),

/***/ "./src/images/ChefLink.jpg":
/*!*********************************!*\
  !*** ./src/images/ChefLink.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1a2b2cdf9f9983ee73c2.jpg";

/***/ }),

/***/ "./src/images/Hyrule_Castle.png":
/*!**************************************!*\
  !*** ./src/images/Hyrule_Castle.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "50a7a4399a794b4abe13.png";

/***/ }),

/***/ "./src/images/clam_chowder.png":
/*!*************************************!*\
  !*** ./src/images/clam_chowder.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cbfd6ad3b5fdd6db130f.png";

/***/ }),

/***/ "./src/images/copious_simmered_fruit.png":
/*!***********************************************!*\
  !*** ./src/images/copious_simmered_fruit.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d71383fada84312f20c0.png";

/***/ }),

/***/ "./src/images/gourmet_meat_curry.png":
/*!*******************************************!*\
  !*** ./src/images/gourmet_meat_curry.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9f8e63a916a2d573b773.png";

/***/ }),

/***/ "./src/images/heart_soup.png":
/*!***********************************!*\
  !*** ./src/images/heart_soup.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fa7bc464acfe56f69d97.png";

/***/ }),

/***/ "./src/images/honeyed_fruits.png":
/*!***************************************!*\
  !*** ./src/images/honeyed_fruits.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de0a975a2019681a0262.png";

/***/ }),

/***/ "./src/images/prime_meat_and_rice_bowl.png":
/*!*************************************************!*\
  !*** ./src/images/prime_meat_and_rice_bowl.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "61494963bfc7b23d88cf.png";

/***/ }),

/***/ "./src/images/restuarant_bg.png":
/*!**************************************!*\
  !*** ./src/images/restuarant_bg.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "51ee0bd3e7e0b0821d2a.png";

/***/ }),

/***/ "./src/images/seafood_pealla.png":
/*!***************************************!*\
  !*** ./src/images/seafood_pealla.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "487dc0ce8453d3a9bab2.png";

/***/ }),

/***/ "./src/images/vegetable_curry.png":
/*!****************************************!*\
  !*** ./src/images/vegetable_curry.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2f574166c681e1aa01a5.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ1YsQ0FBQyx1REFBVztBQUNaLENBQUMsaUVBQVE7QUFDVCxDQUFDLHVEQUFNO0FBQ1AsQ0FBQyx3REFBUztBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsUUFBUTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvcmVzdHVhcmFudF9iZy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0h5bGlhU2VyaWZCZXRhLVJlZ3VsYXIub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9mb250cy9PcGVuU2Fucy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgLS1iZy1jb2xvcjogIzAwMDkxOWQ5O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxMHZoO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJIeWxpYVNlcmlmXFxcIjtcXHJcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiT3BlblNhbnNcXFwiO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5Pioge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxyXFxuICAgIGNvbG9yOiAjZGVkZWRlO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIk9wZW5TYW5zXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtZ3JpZCxcXHJcXG5oZWFkZXIsXFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUsXFxyXFxuLmZvb2QtbmFtZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSHlsaWFTZXJpZlxcXCI7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb2QtbmFtZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1saXN0IHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5idG4tbGlzdCBidXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuN3M7XFxyXFxufVxcclxcblxcclxcbi5idG4tbGlzdCBidXR0b246aG92ZXIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvdXJhZ2U6aG92ZXIsXFxyXFxuLmNvdXJhZ2U6YWN0aXZlLFxcclxcbi5jb3VyYWdlLmNsaWNrZWQge1xcclxcbiAgICBjb2xvcjogIzY1ZGY2ZjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvd2VyOmhvdmVyLFxcclxcbi5wb3dlcjphY3RpdmUsXFxyXFxuLnBvd2VyLmNsaWNrZWQge1xcclxcbiAgICBjb2xvcjogI2RmNjU2NTtcXHJcXG59XFxyXFxuXFxyXFxuLndpc2RvbTpob3ZlcixcXHJcXG4ud2lzZG9tOmFjdGl2ZSxcXHJcXG4ud2lzZG9tLmNsaWNrZWQge1xcclxcbiAgICBjb2xvcjogIzY1OTNkZjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogNXZoIDV2dztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNGY0OTQ5O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVwYWdlLFxcclxcbi5jb250YWN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ob21lcGFnZSxcXHJcXG4ubWVudS1ncmlkLFxcclxcbi5jb250YWN0IHtcXHJcXG4gICAgd2lkdGg6IGNsYW1wKDMwMHB4LCA3MHZ3LCA4MDBweCk7XFxyXFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZVBhZ2UtaW1nIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICB3aWR0aDogbWluKDg1JSwgMzAwcHgpO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5tZW51LWdyaWQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxyXFxuICAgIGdhcDogMTZweDtcXHJcXG4gICAgcGFkZGluZzogMTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZC1jYXJkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxNnB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaW1nIHtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQtY2FyZDpob3ZlciB7XFxyXFxuICAgIGJveC1zaGFkb3c6IC0ycHggMnB4IDQzcHggM3B4ICNkZWRlZGU7XFxyXFxufVxcclxcblxcclxcbi5mb29kLXByaWNlIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtaW1nIHtcXHJcXG4gICAgd2lkdGg6IG1pbig4NSUsIDU1MHB4KTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6ICNiZWJhYmE7XFxyXFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNHM7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBhOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6ICNmY2ZjZmM7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItbGluaz5zdmcge1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcclxcbn1cXHJcXG5cXHJcXG4uaW52aXNpYmxlIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxpRkFBMkU7SUFDM0Usc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwrREFBaUU7QUFDckU7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsK0RBQTJEO0FBQy9EOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGNBQWM7SUFDZCx1QkFBdUI7QUFDM0I7O0FBRUE7OztJQUdJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7OztJQUdJLGNBQWM7QUFDbEI7O0FBRUE7OztJQUdJLGNBQWM7QUFDbEI7O0FBRUE7OztJQUdJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7O0lBR0ksZ0NBQWdDO0lBQ2hDLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw0REFBNEQ7SUFDNUQsU0FBUztJQUNULGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAgIC0tYmctY29sb3I6ICMwMDA5MTlkOTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFxcXCIuL2ltYWdlcy9yZXN0dWFyYW50X2JnLnBuZ1xcXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxMHZoO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJIeWxpYVNlcmlmXFxcIjtcXHJcXG4gICAgc3JjOiB1cmwoXFxcIi4vZm9udHMvSHlsaWFTZXJpZkJldGEtUmVndWxhci5vdGZcXFwiKSBmb3JtYXQoXFxcIm9wZW50eXBlXFxcIik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIk9wZW5TYW5zXFxcIjtcXHJcXG4gICAgc3JjOiB1cmwoXFxcIi4vZm9udHMvT3BlblNhbnMtUmVndWxhci50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxyXFxufVxcclxcblxcclxcbmJvZHk+KiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXHJcXG4gICAgY29sb3I6ICNkZWRlZGU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiT3BlblNhbnNcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1ncmlkLFxcclxcbmhlYWRlcixcXHJcXG5mb290ZXIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSxcXHJcXG4uZm9vZC1uYW1lIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJIeWxpYVNlcmlmXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vZC1uYW1lIHtcXHJcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWxpc3Qge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1saXN0IGJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC43cztcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1saXN0IGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIG1hcmdpbi10b3A6IC0xNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY291cmFnZTpob3ZlcixcXHJcXG4uY291cmFnZTphY3RpdmUsXFxyXFxuLmNvdXJhZ2UuY2xpY2tlZCB7XFxyXFxuICAgIGNvbG9yOiAjNjVkZjZmO1xcclxcbn1cXHJcXG5cXHJcXG4ucG93ZXI6aG92ZXIsXFxyXFxuLnBvd2VyOmFjdGl2ZSxcXHJcXG4ucG93ZXIuY2xpY2tlZCB7XFxyXFxuICAgIGNvbG9yOiAjZGY2NTY1O1xcclxcbn1cXHJcXG5cXHJcXG4ud2lzZG9tOmhvdmVyLFxcclxcbi53aXNkb206YWN0aXZlLFxcclxcbi53aXNkb20uY2xpY2tlZCB7XFxyXFxuICAgIGNvbG9yOiAjNjU5M2RmO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiA1dmggNXZ3O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0ZjQ5NDk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZXBhZ2UsXFxyXFxuLmNvbnRhY3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVwYWdlLFxcclxcbi5tZW51LWdyaWQsXFxyXFxuLmNvbnRhY3Qge1xcclxcbiAgICB3aWR0aDogY2xhbXAoMzAwcHgsIDcwdncsIDgwMHB4KTtcXHJcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbi5ob21lUGFnZS1pbWcge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIHdpZHRoOiBtaW4oODUlLCAzMDBweCk7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtZ3JpZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXHJcXG4gICAgZ2FwOiAxNnB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5ncmlkLWNhcmQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDE2cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1pbWcge1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZC1jYXJkOmhvdmVyIHtcXHJcXG4gICAgYm94LXNoYWRvdzogLTJweCAycHggNDNweCAzcHggI2RlZGVkZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb2QtcHJpY2Uge1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1pbWcge1xcclxcbiAgICB3aWR0aDogbWluKDg1JSwgNTUwcHgpO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBhIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogI2JlYmFiYTtcXHJcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC40cztcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIGE6aG92ZXIge1xcclxcbiAgICBjb2xvcjogI2ZjZmNmYztcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1saW5rPnN2ZyB7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxyXFxufVxcclxcblxcclxcbi5pbnZpc2libGUge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGNhc3RsZVJlc3RhdXJhbnQgZnJvbSBcIi4vaW1hZ2VzL0h5cnVsZV9DYXN0bGUucG5nXCJcclxuXHJcbmZ1bmN0aW9uIGNvbnRhY3RQYWdlKCkge1xyXG4gICAgY29uc3QgY29udGFjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWN0RGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKVxyXG4gICAgXHJcbiAgICBsZXQgcmVzdHVhcmFudEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcclxuICAgIHJlc3R1YXJhbnRJbWcuc3JjID0gY2FzdGxlUmVzdGF1cmFudFxyXG4gICAgcmVzdHVhcmFudEltZy5hbHQgPSBcIk9yaWdpbmFsIGxvY2F0aW9uXCJcclxuICAgIHJlc3R1YXJhbnRJbWcuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtaW1nXCIpXHJcblxyXG4gICAgY29uc3QgbG9jYXRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgIGxvY2F0aW9uVGV4dC50ZXh0Q29udGVudCA9IFwiRXZlbiBvbmUgaHVuZHJlZCB5ZWFycyBsYXRlciwgb3VyIG9yaWdpbmFsIGxvY2F0aW9uIG9mIEh5cnVsZSBDYXN0bGUgc3RpbGwgc3RhbmRzIHN0cm9uZy4gSG93ZXZlciwgeW91IG1heSBmaW5kIHVzIGF0IGFueSBsb2NhdGlvbiB3aXRoIGEgY29va2luZyBwb3QuIFdlJ3JlIG9wZW4gMjQvNywgcmFpbiwgc25vdywgc2hpbmUsIG9yIGJsaXN0ZXJpbmcgaGVhdC4gRmVlbCBmcmVlIHRvIHBsYWNlIGFuIGVhcmx5IHJlc2VydmF0aW9uIHRvIG9idGFpbiBhIGxpdmUgdmlld2luZyBvZiB0aGUgY2hlZidzIG1hc3RlcmZ1bCB0ZWNobmlxdWUuXCJcclxuXHJcbiAgICBjb25zdCBzbGF0ZUNvbnRhY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgIHNsYXRlQ29udGFjdFRleHQudGV4dENvbnRlbnQgPSBcIlRvIG1ha2UgYSByZXNlcnZhdGlvbiwgZmVlbCBmcmVlIHRvIGNvbnRhY3QgdXMgdmlhIFNoZWlrYWggU2xhdGUuIElmIHlvdSBkbyBzbywgcGxlYXNlIHNlbmQgYSBwaG90byBvZiB5b3VyIHByZWZlcnJlZCBsb2NhdGlvbi5cIlxyXG4gICAgY29udGFjdERpdi5hcHBlbmQocmVzdHVhcmFudEltZywgbG9jYXRpb25UZXh0LCBzbGF0ZUNvbnRhY3RUZXh0KVxyXG4gICAgcmV0dXJuIGNvbnRhY3REaXZcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGFjdFBhZ2UiLCJpbXBvcnQgY2hlZkxpbmsgZnJvbSBcIi4vaW1hZ2VzL0NoZWZMaW5rLmpwZ1wiXHJcblxyXG5mdW5jdGlvbiBob21lUGFnZSgpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImludmlzaWJsZVwiLCBcImhvbWVwYWdlXCIpXHJcbiAgICBjb25zdCByZXN0dWFyYW50VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcblxyXG4gICAgY29uc3QgaG9tZVBhZ2VJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXHJcbiAgICBob21lUGFnZUltZy5zcmMgPSBjaGVmTGlua1xyXG4gICAgaG9tZVBhZ2UuYWx0ID0gXCJDaGVmIExpbmsncyBjdWxpbmFyeSBleHBlcnRpc2VcIlxyXG4gICAgaG9tZVBhZ2VJbWcuY2xhc3NMaXN0LmFkZChcImhvbWVQYWdlLWltZ1wiKVxyXG4gICAgY29udGFpbmVyLmFwcGVuZChob21lUGFnZUltZylcclxuXHJcbiAgICByZXN0dWFyYW50VGV4dC50ZXh0Q29udGVudCA9IFwiT3ZlciBvbmUgaHVuZHJlZCB5ZWFycyB3b3J0aCBvZiByZWNpcGVzIGNyZWF0ZWQgcHVyZWx5IGZyb20gbmF0dXJhbGx5IGdyb3dpbmcgaW5ncmVkaWVudHMuIFRhc3RlIG9mIHRoZSB3aWxkIGlzIGNlcnRhaW4gdG8gZGVsaXZlciB0byB5b3UgYSByZWZyZXNoaW5nIGFuZCBkZWxpY2lvdXMgZXhwZXJpZW5jZS5cIlxyXG4gICAgY29udGFpbmVyLmFwcGVuZChyZXN0dWFyYW50VGV4dClcclxuICAgIHJldHVybiBjb250YWluZXJcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG9tZVBhZ2UiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiXHJcbmltcG9ydCBob21lUGFnZSBmcm9tIFwiLi9ob21lcGFnZVwiXHJcbmltcG9ydCBtZW51IGZyb20gXCIuL21lbnVcIlxyXG5pbXBvcnQgY29udGFjdFBhZ2UgZnJvbSBcIi4vY29udGFjdFwiXHJcblxyXG5mdW5jdGlvbiB0cmFuc2l0aW9uUGF0Y2goKXtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudCBkaXZcIikuY2xhc3NMaXN0LnJlbW92ZShcImludmlzaWJsZVwiKVxyXG4gICAgfSwgMTAwKVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKXtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIilcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXHJcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIilcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJUYXN0ZSBvZiB0aGUgV2lsZFwiXHJcblxyXG4gICAgY29uc3QgYnRuTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKVxyXG4gICAgYnRuTGlzdC5jbGFzc0xpc3QuYWRkKFwiYnRuLWxpc3RcIilcclxuICAgIGNvbnN0IGJ1dHRvbkluZm8gPSBbXHJcbiAgICAgICAge3RleHQ6IFwiTWVudVwiLCBldmVudEZuOiBtZW51LCBldmVudEZOU3RyOiBcIm1lbnVcIiwgY2xhc3NOOiBcInBvd2VyXCIsfSxcclxuICAgICAgICB7dGV4dDogXCJIb21lXCIsIGV2ZW50Rm46IGhvbWVQYWdlLCBldmVudEZOU3RyOiBcImhvbWVQYWdlXCIsIGNsYXNzTjogXCJjb3VyYWdlXCIsfSxcclxuICAgICAgICB7dGV4dDogXCJDb250YWN0XCIsIGV2ZW50Rm46IGNvbnRhY3RQYWdlLCBldmVudEZOU3RyOiBcImNvbnRhY3RQYWdlXCIsIGNsYXNzTjogXCJ3aXNkb21cIix9XHJcbiAgICBdXHJcblxyXG4gICAgZm9yIChsZXQgYnV0dG9uIG9mIGJ1dHRvbkluZm8pe1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcclxuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gYnV0dG9uLnRleHQgXHJcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoYnV0dG9uLmNsYXNzTiwgXCJoZWFkZXItYnRuXCIpXHJcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBoZWFkZXJCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oZWFkZXItYnRuXCIpXHJcbiAgICAgICAgICAgIGZvciAobGV0IGJ0biBvZiBoZWFkZXJCdG5zKXtcclxuICAgICAgICAgICAgICAgIGlmIChidG4gIT09IGUudGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgYnRuLmRpc2FibGVkID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIGJ0bi5kaXNhYmxlZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNldENvbnRlbnQoKS5hcHBlbmRDaGlsZChidXR0b24uZXZlbnRGbigpKVxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uUGF0Y2goKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaXRlbS5hcHBlbmQoYnRuKVxyXG4gICAgICAgIGJ0bkxpc3QuYXBwZW5kKGl0ZW0pXHJcbiAgICB9XHJcblxyXG4gICAgaGVhZGVyLmFwcGVuZCh0aXRsZSwgYnRuTGlzdClcclxuICAgIHJldHVybiBoZWFkZXJcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCl7XHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpXHJcbiAgICBjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgIGZvb3RlclRleHQudGV4dENvbnRlbnQgPSBcIjIwMjIuIE1hZGUgYnkgRGFybmVsbC4gVmlldyBtb3JlIHByb2plY3RzIFwiXHJcblxyXG4gICAgY29uc3QgZ2hMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIilcclxuICAgIGdoTGluay5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyLWxpbmtcIilcclxuICAgIGdoTGluay50YXJnZXQgPSBcImJsYW5rXCJcclxuICAgIGdoTGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vRHJhbnREdW1hbmlcIlxyXG4gICAgZm9vdGVyVGV4dC5hcHBlbmQoZ2hMaW5rKVxyXG5cclxuICAgIGNvbnN0IGFydENyZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICBhcnRDcmVkaXQudGV4dENvbnRlbnQgPSBcIkJhY2tncm91bmQgaW1hZ2UgY3JlYXRlZCBieSBcIlxyXG5cclxuICAgIGNvbnN0IGNyZWRpdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKVxyXG4gICAgY3JlZGl0TGluay50ZXh0Q29udGVudCA9IFwiRXZab25lXCJcclxuICAgIGNyZWRpdExpbmsuaHJlZiA9IFwiaHR0cHM6Ly9hbHBoYWNvZGVycy5jb20vdXNlcnMvcHJvZmlsZS8xNDg5NTYvRXZab25lXCJcclxuICAgIGNyZWRpdExpbmsudGFyZ2V0ID0gXCJibGFua1wiXHJcblxyXG4gICAgY29uc3QgZ2hTVkcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFwic3ZnXCIpXHJcbiAgICBnaFNWRy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndpZHRoOjI0cHg7aGVpZ2h0OjI0cHhcIilcclxuICAgIGdoU1ZHLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgXCIwIDAgMjQgMjRcIilcclxuICAgIFxyXG4gICAgY29uc3Qgc3ZnUGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXCJwYXRoXCIpXHJcbiAgICBzdmdQYXRoLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJjdXJyZW50Q29sb3JcIilcclxuICAgIHN2Z1BhdGguc2V0QXR0cmlidXRlKFwiZFwiLCBcIk0xMiwyQTEwLDEwIDAgMCwwIDIsMTJDMiwxNi40MiA0Ljg3LDIwLjE3IDguODQsMjEuNUM5LjM0LDIxLjU4IDkuNSwyMS4yNyA5LjUsMjFDOS41LDIwLjc3IDkuNSwyMC4xNCA5LjUsMTkuMzFDNi43MywxOS45MSA2LjE0LDE3Ljk3IDYuMTQsMTcuOTdDNS42OCwxNi44MSA1LjAzLDE2LjUgNS4wMywxNi41QzQuMTIsMTUuODggNS4xLDE1LjkgNS4xLDE1LjlDNi4xLDE1Ljk3IDYuNjMsMTYuOTMgNi42MywxNi45M0M3LjUsMTguNDUgOC45NywxOCA5LjU0LDE3Ljc2QzkuNjMsMTcuMTEgOS44OSwxNi42NyAxMC4xNywxNi40MkM3Ljk1LDE2LjE3IDUuNjIsMTUuMzEgNS42MiwxMS41QzUuNjIsMTAuMzkgNiw5LjUgNi42NSw4Ljc5QzYuNTUsOC41NCA2LjIsNy41IDYuNzUsNi4xNUM2Ljc1LDYuMTUgNy41OSw1Ljg4IDkuNSw3LjE3QzEwLjI5LDYuOTUgMTEuMTUsNi44NCAxMiw2Ljg0QzEyLjg1LDYuODQgMTMuNzEsNi45NSAxNC41LDcuMTdDMTYuNDEsNS44OCAxNy4yNSw2LjE1IDE3LjI1LDYuMTVDMTcuOCw3LjUgMTcuNDUsOC41NCAxNy4zNSw4Ljc5QzE4LDkuNSAxOC4zOCwxMC4zOSAxOC4zOCwxMS41QzE4LjM4LDE1LjMyIDE2LjA0LDE2LjE2IDEzLjgxLDE2LjQxQzE0LjE3LDE2LjcyIDE0LjUsMTcuMzMgMTQuNSwxOC4yNkMxNC41LDE5LjYgMTQuNSwyMC42OCAxNC41LDIxQzE0LjUsMjEuMjcgMTQuNjYsMjEuNTkgMTUuMTcsMjEuNUMxOS4xNCwyMC4xNiAyMiwxNi40MiAyMiwxMkExMCwxMCAwIDAsMCAxMiwyWlwiKVxyXG4gICAgZ2hTVkcuYXBwZW5kKHN2Z1BhdGgpXHJcbiAgICBnaExpbmsuYXBwZW5kQ2hpbGQoZ2hTVkcpXHJcblxyXG4gICAgYXJ0Q3JlZGl0LmFwcGVuZChjcmVkaXRMaW5rKVxyXG4gICAgZm9vdGVyLmFwcGVuZChmb290ZXJUZXh0LCBhcnRDcmVkaXQpXHJcbiAgICByZXR1cm4gZm9vdGVyXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0Q29udGVudCgpe1xyXG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICAgIHdoaWxlIChjb250ZW50RGl2LmZpcnN0Q2hpbGQpe1xyXG4gICAgICAgIGNvbnRlbnREaXYucmVtb3ZlQ2hpbGQoY29udGVudERpdi5maXJzdENoaWxkKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbnRlbnREaXZcclxufVxyXG5cclxuZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoY3JlYXRlSGVhZGVyKCksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKSlcclxuZG9jdW1lbnQuYm9keS5hcHBlbmQoY3JlYXRlRm9vdGVyKCkpXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpLmFwcGVuZENoaWxkKGhvbWVQYWdlKCkpXHJcbiAgICB0cmFuc2l0aW9uUGF0Y2goKVxyXG59KSIsImltcG9ydCBjbGFtQ2hvd2RlciBmcm9tIFwiLi9pbWFnZXMvY2xhbV9jaG93ZGVyLnBuZ1wiXHJcbmltcG9ydCBzaW1GcnVpdCBmcm9tIFwiLi9pbWFnZXMvY29waW91c19zaW1tZXJlZF9mcnVpdC5wbmdcIlxyXG5pbXBvcnQgbWVhdEN1cnJ5IGZyb20gXCIuL2ltYWdlcy9nb3VybWV0X21lYXRfY3VycnkucG5nXCJcclxuaW1wb3J0IGhlYXJ0U291cCBmcm9tIFwiLi9pbWFnZXMvaGVhcnRfc291cC5wbmdcIlxyXG5pbXBvcnQgaG9uZXlGcnVpdHMgZnJvbSBcIi4vaW1hZ2VzL2hvbmV5ZWRfZnJ1aXRzLnBuZ1wiXHJcbmltcG9ydCBtZWF0UmljZSBmcm9tIFwiLi9pbWFnZXMvcHJpbWVfbWVhdF9hbmRfcmljZV9ib3dsLnBuZ1wiXHJcbmltcG9ydCBwYWVsbGEgZnJvbSBcIi4vaW1hZ2VzL3NlYWZvb2RfcGVhbGxhLnBuZ1wiXHJcbmltcG9ydCB2ZWdlQ3VycnkgZnJvbSBcIi4vaW1hZ2VzL3ZlZ2V0YWJsZV9jdXJyeS5wbmdcIlxyXG5cclxuY29uc3QgZm9vZEFyciA9IFtbY2xhbUNob3dkZXIsIFwiQ2xhbSBDaG93ZGVyXCIsIFwiMjBcIl0sIFxyXG5bc2ltRnJ1aXQsIFwiQ29waW91cyBTaW1tZXJlZCBGcnVpdFwiLCBcIjEwXCJdLFxyXG5bbWVhdEN1cnJ5LCBcIkdvdXJtZXQgTWVhdCBDdXJyeVwiLCBcIjcwXCJdLCBcclxuW2hlYXJ0U291cCwgXCJDcmVhbXkgSGVhcnQgU291cFwiLCBcIjQwXCJdLFxyXG5baG9uZXlGcnVpdHMsIFwiSG9uZXllZCBGcnVpdFwiLCBcIjVcIl0sIFxyXG5bbWVhdFJpY2UsIFwiUHJpbWUgTWVhdCBhbmQgUmljZSBCb3dsXCIsIFwiNTBcIl0sXHJcbltwYWVsbGEsIFwiU2VhZm9vZCBQZWFsbGFcIiwgXCI1MFwiXSwgXHJcblt2ZWdlQ3VycnksIFwiVmVnZXRhYmxlIEN1cnJ5XCIsIFwiMzBcIl1dXHJcblxyXG5mdW5jdGlvbiBtZW51KCkge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwibWVudS1ncmlkXCIsIFwiaW52aXNpYmxlXCIpXHJcblxyXG4gICAgZm9yIChsZXQgbWVhbCBvZiBmb29kQXJyKXtcclxuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImdyaWQtY2FyZFwiKVxyXG5cclxuICAgICAgICBjb25zdCBjYXJkSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxyXG4gICAgICAgIGNhcmRJbWcuY2xhc3NMaXN0LmFkZChcImNhcmQtaW1nXCIpXHJcbiAgICAgICAgY2FyZEltZy5zcmMgPSBtZWFsWzBdXHJcbiAgICAgICAgY2FyZEltZy5hbHQgPSBtZWFsWzFdXHJcblxyXG4gICAgICAgIGNvbnN0IGZvb2ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcclxuICAgICAgICBmb29kTmFtZS50ZXh0Q29udGVudCA9IG1lYWxbMV1cclxuICAgICAgICBmb29kTmFtZS5jbGFzc0xpc3QuYWRkKFwiZm9vZC1uYW1lXCIpXHJcblxyXG4gICAgICAgIGNvbnN0IGZvb2RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXHJcbiAgICAgICAgZm9vZFByaWNlLmNsYXNzTGlzdC5hZGQoXCJmb29kLXByaWNlXCIpXHJcbiAgICAgICAgZm9vZFByaWNlLnRleHRDb250ZW50ID0gYFxcJCR7bWVhbFsyXX1gXHJcbiAgICAgICAgY2FyZC5hcHBlbmQoY2FyZEltZywgZm9vZE5hbWUsIGZvb2RQcmljZSlcclxuICAgICAgICBcclxuICAgICAgICBkaXYuYXBwZW5kKGNhcmQpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGl2XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbnUiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=