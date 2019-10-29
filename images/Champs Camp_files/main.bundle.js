/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/styles/default.less":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/styles/default.less ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700.css);", ""]);
// Module
exports.push([module.i, "#canvas {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  overflow: hidden;\n  background: #272727;\n}\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  -webkit-appearance: none;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n  outline-width: 0;\n  line-height: 1.1;\n  font-family: 'Roboto Condensed', sans-serif;\n  color: #fff;\n}\n*,\n*:before,\n*:after {\n  outline: 0;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n*:not(input.field) {\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\ninput,\ntextarea {\n  -webkit-user-select: text !important;\n  -khtml-user-select: text !important;\n  -moz-user-select: text !important;\n  -ms-user-select: text !important;\n  user-select: text !important;\n}\na {\n  text-decoration: none;\n}\na:hover {\n  text-decoration: underline;\n}\n#react {\n  height: 100%;\n}\n.elev-1 {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n.elev-2 {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n.elev-3 {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n}\n.elev-4 {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n.elev-5 {\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);\n}\n.center {\n  margin: 0 auto;\n  width: 1180px;\n}\n.ui.block {\n  display: block;\n}\n.ui.full-width {\n  width: 100%;\n}\n.ui.flex {\n  display: flex;\n}\n.ui.full {\n  flex: 1;\n}\n.ui.no-stretch {\n  align-items: flex-start;\n}\n.ui.column {\n  flex-direction: column;\n}\n.ui.fdr {\n  flex-direction: row;\n}\n.ui.end {\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n.ui.jsc {\n  justify-content: center;\n}\n.ui.jcsa {\n  justify-content: space-around;\n}\n.ui.jcsb {\n  justify-content: space-between;\n}\n.ui.alc {\n  align-items: center;\n}\n.ui.no-shrink {\n  flex-shrink: 0 !important;\n}\n.ui.f12 {\n  font-size: 12px;\n}\n.ui.f13 {\n  font-size: 13px;\n}\n.ui.f14 {\n  font-size: 14px;\n}\n.ui.f15 {\n  font-size: 15px;\n}\nbutton {\n  position: relative;\n  padding: 0 14px;\n  border: 0;\n  border-radius: 2px;\n  font-size: 13px;\n  text-transform: uppercase;\n  cursor: pointer;\n  height: 28px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  outline: none !important;\n}\nbutton.dark {\n  color: #fff;\n}\nbutton.dark.icon {\n  color: #fff;\n}\nbutton.primary {\n  background: #29828a;\n}\nbutton.no-shadow {\n  box-shadow: none !important;\n}\nbutton:active {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  transition: all 0s;\n}\nbutton.icon {\n  width: 28px;\n  padding: 0;\n  color: #777;\n}\nbutton.big {\n  height: 36px;\n}\nbutton.big.icon {\n  width: 36px;\n}\nbutton.disabled {\n  background: #ddd;\n  opacity: 0.4;\n  pointer-events: none;\n}\nbutton.disabled.primary {\n  background: #29828a;\n}\nbutton.circle {\n  border-radius: 100%;\n}\nbutton.indicator:after {\n  content: \"\";\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  width: 12px;\n  height: 12px;\n  background: #FF0000;\n  border-radius: 100%;\n  border: 2px solid #fff;\n  pointer-events: none;\n}\n.s-alert-error {\n  background: #122a3791;\n  color: #fff;\n  border-radius: 4px;\n  font-size: 12px;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/views/pages/Countdown/Countdown.less":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/views/pages/Countdown/Countdown.less ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".countDown {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  background-size: cover;\n  background-position: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.countDown button {\n  background: #fff;\n  color: #333;\n  margin: 0;\n}\n.countDown .rai-activity-indicator {\n  margin-top: 15px;\n}\n.countDown .linkCont {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 30px;\n  position: relative;\n}\n.countDown .linkCont .link {\n  margin-right: 30px;\n  border: 1px solid #ffffff5e;\n  padding: 7px 15px;\n  -webkit-user-select: text;\n  border-radius: 2px;\n  font-size: 13px;\n}\n.countDown .linkCont button {\n  margin: 0;\n}\n.countDown .linkCont .copied {\n  position: absolute;\n  right: 0;\n  bottom: -17px;\n  font-size: 10px;\n}\n.countDown .header {\n  position: absolute;\n  top: 40px;\n  border-radius: 4px;\n  border: 2px solid #fff3;\n  display: flex;\n  align-items: center;\n  width: 600px;\n  padding: 16px;\n  justify-content: space-between;\n  transition: all 0.5s ease-in-out;\n}\n.countDown .header .userCont {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.countDown .header .userCont .proImg {\n  width: 56px;\n  height: 56px;\n  border: 1px solid #ffffffc7;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-right: 15px;\n}\n.countDown .header .userCont .proImg img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.countDown .header .userName {\n  font-size: 15px;\n  text-transform: uppercase;\n  margin-bottom: 9px;\n}\n.countDown .header .userPoint {\n  text-transform: uppercase;\n  font-size: 13px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.countDown .header .userPoint span {\n  background: #e0e059;\n  color: #b52727;\n  border-radius: 2px;\n  padding: 1px 10px;\n  font-weight: bold;\n  margin-right: 10px;\n  font-size: 16px;\n}\n.countDown .header button {\n  background: #0000003b;\n  color: #fff;\n  margin: 0;\n}\n.countDown button {\n  margin-top: 28px;\n}\n.countDown .goCharacter {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: calc(100% - 180px);\n}\n.countDown .goCharacter .cImg {\n  height: 100%;\n  object-fit: contain;\n  pointer-events: none;\n}\n.countDown .goCharacter .logo {\n  position: absolute;\n  width: 100px;\n  top: -100px;\n  left: 19%;\n  pointer-events: none;\n}\n.countDown .dotaCharacter {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  height: calc(100% - 140px);\n}\n.countDown .dotaCharacter .cImg {\n  height: 100%;\n  object-fit: contain;\n  pointer-events: none;\n}\n.countDown .dotaCharacter .logo {\n  position: absolute;\n  width: 66px;\n  top: -57px;\n  right: 31%;\n  pointer-events: none;\n}\n.countDown .logoCont {\n  position: absolute;\n  bottom: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.countDown .logoCont img {\n  width: 250px;\n  pointer-events: none;\n}\n.countDown .desc {\n  text-transform: uppercase;\n  font-size: 56px;\n  font-weight: 100;\n  margin-bottom: 20px;\n  text-shadow: 2px 2px #0e0e0e;\n}\n.countDown .odometer-block {\n  display: inline-block;\n  justify-content: center;\n  align-items: center;\n  font-size: 2.5vw;\n  text-transform: uppercase;\n  font-weight: 100;\n  text-shadow: 2px 2px #0e0e0e;\n}\n@media (max-width: 480px) {\n  .countDown .linkCont {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 30px;\n    position: relative;\n    flex-direction: column;\n  }\n  .countDown .linkCont .link {\n    margin-right: 30px;\n    border: 1px solid #ffffff5e;\n    padding: 7px 15px;\n    -webkit-user-select: text;\n    border-radius: 2px;\n    font-size: 13px;\n    margin-bottom: 15px;\n    margin-right: 0;\n  }\n  .countDown .linkCont .copied {\n    position: relative;\n    /* right: 0; */\n    /* bottom: -17px; */\n    font-size: 10px;\n    margin-top: 6px;\n    bottom: 0;\n  }\n  .countDown .header {\n    position: absolute;\n    top: 15px;\n    border-radius: 4px;\n    border: none;\n    display: flex;\n    align-items: center;\n    width: calc(100% - 17px);\n    padding: 7px;\n    justify-content: space-between;\n  }\n  .countDown .header .userCont .proImg {\n    width: 43px;\n    height: 43px;\n    border: 1px solid #ffffffc7;\n    border-radius: 8px;\n    overflow: hidden;\n    margin-right: 8px;\n  }\n  .countDown .header .userName {\n    font-size: 13px;\n    text-transform: uppercase;\n    margin-bottom: 9px;\n  }\n  .countDown .header .userPoint {\n    text-transform: uppercase;\n    font-size: 12px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .countDown .header .userPoint span {\n    background: #e0e059;\n    color: #b52727;\n    border-radius: 2px;\n    padding: 1px 10px;\n    font-weight: bold;\n    margin-right: 10px;\n    font-size: 13px;\n  }\n  .countDown .desc {\n    text-transform: uppercase;\n    font-size: 40px;\n    font-weight: 100;\n    margin-bottom: 20px;\n    text-shadow: 2px 2px #0e0e0e;\n  }\n  .countDown .odometer-block {\n    font-size: 17px;\n  }\n  .countDown .logoCont {\n    position: absolute;\n    bottom: 25px;\n    /* display: none; */\n    justify-content: center;\n    align-items: center;\n    z-index: -1;\n  }\n  .countDown .logoCont img {\n    width: 240px;\n    pointer-events: none;\n  }\n  .countDown .goCharacter {\n    display: none;\n  }\n  .countDown .dotaCharacter {\n    display: none;\n  }\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/views/pages/Home/Components/Header/Header.less":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/views/pages/Home/Components/Header/Header.less ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/views/pages/Home/Components/Login/Login.less":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/views/pages/Home/Components/Login/Login.less ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".loginCont {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #122a37;\n}\n.loginCont .login {\n  width: 800px;\n  display: flex;\n  background: #fff;\n  border-radius: 6px;\n  overflow: hidden;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n}\n.loginCont .login .leftSide {\n  background: #122a37;\n}\n.loginCont .login .leftSide img {\n  width: 270px;\n}\n.loginCont .login .side {\n  width: 50%;\n  padding: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.loginCont .login .rightSide .centerCont {\n  width: calc(100% - 100px);\n}\n.loginCont .login .rightSide .centerCont .title {\n  text-transform: uppercase;\n  font-size: 16px;\n  font-weight: 500;\n  margin-bottom: 20px;\n  margin-top: 16px;\n}\n.loginCont .login .rightSide .centerCont .inputCont {\n  width: 100%;\n}\n.loginCont .login .rightSide .centerCont .inputCont .text {\n  font-size: 12px;\n  font-weight: 100;\n  margin-bottom: 4px;\n}\n.loginCont .login .rightSide .centerCont .inputCont input {\n  margin-bottom: 10px;\n  outline: none;\n  border-radius: 4px;\n  border: 1px solid #e6e6e6;\n  background: #f6f6f6;\n  padding: 6px 8px;\n  width: 100%;\n}\n.loginCont .login .rightSide .centerCont button {\n  background: #122a37;\n  color: #fff;\n  width: 100%;\n  margin-top: 15px;\n  border-radius: 27px;\n  font-size: 12px;\n  margin-bottom: 20px;\n}\n.loginCont .login .rightSide .centerCont .signup {\n  font-size: 13px;\n  margin-bottom: 6px;\n  text-align: right;\n}\n.loginCont .login .rightSide .centerCont .forgot {\n  font-size: 13px;\n  margin-bottom: 6px;\n  text-align: right;\n}\n.loginCont .login .rightSide .centerCont .loaderCont {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: -11px;\n  margin-bottom: 15px;\n}\n.loginCont .login .rightSide .centerCont .loaderCont .rai-square {\n  border-radius: 2px;\n}\n.loginCont .back {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #122a37;\n  z-index: -1000;\n  background: #122a3729;\n}\n@media (max-width: 480px) {\n  .loginCont .login {\n    width: calc(100% - 15px);\n    display: flex;\n    background: #fff;\n    border-radius: 6px;\n    overflow: hidden;\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  }\n  .loginCont .login .leftSide {\n    display: none !important;\n  }\n  .loginCont .login .rightSide {\n    width: 100%;\n    /* display: flex; */\n    justify-content: center;\n    align-items: center;\n    padding: 30px 30px;\n  }\n  .loginCont .login .rightSide .centerCont {\n    width: 100%;\n  }\n  .loginCont .login .rightSide .centerCont button {\n    background: #122a37;\n    color: #fff;\n    width: 100%;\n    margin-top: 15px;\n    border-radius: 27px;\n    font-size: 12px;\n    margin-bottom: 20px;\n    /* padding: 12px 0; */\n    height: 37px;\n  }\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/views/pages/Home/Components/Signup/Signup.less":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/views/pages/Home/Components/Signup/Signup.less ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".loginCont {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #122a37;\n}\n.loginCont .login {\n  width: 800px;\n  display: flex;\n  background: #fff;\n  border-radius: 6px;\n  overflow: hidden;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n}\n.loginCont .login .leftSide {\n  background: #122a37;\n}\n.loginCont .login .leftSide img {\n  width: 270px;\n}\n.loginCont .login .side {\n  width: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 30px 20px;\n}\n.loginCont .login .rightSide .centerCont {\n  width: calc(100% - 100px);\n}\n.loginCont .login .rightSide .centerCont .profileCont {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 7px 0;\n  position: relative;\n}\n.loginCont .login .rightSide .centerCont .profileCont .cc {\n  font-size: 11px;\n  position: absolute;\n  top: 18px;\n  left: 7px;\n  color: #777;\n}\n.loginCont .login .rightSide .centerCont .profileCont label {\n  font-size: 11px;\n  background: #e6e6e6;\n  text-transform: uppercase;\n  padding: 0px 22px;\n  border-radius: 13px;\n  display: flex;\n  width: 131px;\n  height: 23px;\n  justify-content: center;\n  align-items: center;\n}\n.loginCont .login .rightSide .centerCont .profileCont label input {\n  display: none;\n}\n.loginCont .login .rightSide .centerCont .profileCont .imgPreview {\n  font-size: 10px;\n  width: 100px;\n  height: 100px;\n  background: #e6e6e6;\n  border-radius: 14px;\n  overflow: hidden;\n}\n.loginCont .login .rightSide .centerCont .profileCont .imgPreview img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.loginCont .login .rightSide .centerCont .title {\n  text-transform: uppercase;\n  font-size: 16px;\n  font-weight: 500;\n  margin-bottom: 20px;\n  margin-top: 16px;\n}\n.loginCont .login .rightSide .centerCont .inputCont {\n  width: 100%;\n}\n.loginCont .login .rightSide .centerCont .inputCont .text {\n  font-size: 12px;\n  font-weight: 100;\n  margin-bottom: 4px;\n}\n.loginCont .login .rightSide .centerCont .inputCont input {\n  margin-bottom: 10px;\n  outline: none;\n  border-radius: 4px;\n  border: 1px solid #e6e6e6;\n  background: #f6f6f6;\n  padding: 6px 8px;\n  width: 100%;\n}\n.loginCont .login .rightSide .centerCont button {\n  background: #122a37;\n  color: #fff;\n  width: 100%;\n  margin-top: 15px;\n  border-radius: 27px;\n  font-size: 12px;\n  margin-bottom: 20px;\n}\n.loginCont .login .rightSide .centerCont .signup {\n  font-size: 13px;\n  margin-bottom: 6px;\n  text-align: right;\n}\n.loginCont .login .rightSide .centerCont .forgot {\n  font-size: 13px;\n  margin-bottom: 6px;\n  text-align: right;\n}\n.loginCont .login .rightSide .centerCont .loaderCont {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: -11px;\n  margin-bottom: 15px;\n}\n.loginCont .login .rightSide .centerCont .loaderCont .rai-square {\n  border-radius: 2px;\n}\n.loginCont .login .rightSide .centerCont .double {\n  display: flex;\n  justify-content: space-between;\n}\n.loginCont .login .rightSide .centerCont .double .inputCont {\n  width: calc(50% - 6px);\n}\n.loginCont .back {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #122a37;\n  z-index: -1000;\n  background: #122a3729;\n}\n@media (max-width: 480px) {\n  .loginCont .login {\n    width: calc(100% - 15px);\n    display: flex;\n    background: #fff;\n    border-radius: 6px;\n    overflow: hidden;\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  }\n  .loginCont .login .leftSide {\n    display: none !important;\n  }\n  .loginCont .login .rightSide {\n    width: 100%;\n    /* display: flex; */\n    justify-content: center;\n    align-items: center;\n    padding: 30px 30px;\n  }\n  .loginCont .login .rightSide .centerCont {\n    width: 100%;\n  }\n  .loginCont .login .rightSide .centerCont button {\n    background: #122a37;\n    color: #fff;\n    width: 100%;\n    margin-top: 15px;\n    border-radius: 27px;\n    font-size: 12px;\n    margin-bottom: 20px;\n    /* padding: 12px 0; */\n    height: 37px;\n  }\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/views/pages/Home/Home.less":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/views/pages/Home/Home.less ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".homePage2 {\n  background: #1a1a1a;\n}\n.homePage2 .header {\n  position: fixed;\n  display: flex;\n  background-color: #1a1a1a;\n  padding-top: 13px;\n  padding-bottom: 13px;\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  z-index: 1;\n  align-items: center;\n}\n.homePage2 .header .headerLogo {\n  padding-left: 15px;\n  display: inline-block;\n}\n.homePage2 .header .menu-list {\n  right: 20px;\n  display: inline-block;\n  float: right;\n}\n.homePage2 .header .menu-list .list {\n  display: flex;\n  margin-left: 900px;\n}\n.homePage2 .header .menu-list .list li {\n  display: inline-block;\n}\n.homePage2 .header .menu-list .list li:last-child {\n  color: red;\n}\n.homePage2 .header .menu-list a {\n  padding: 8px;\n  margin-left: 60px;\n  text-decoration: none;\n}\n.homePage2 .header-bg {\n  width: 100%;\n  height: 800px;\n  position: relative;\n  background-color: #1a1a1a;\n  background: url('/assets/images/bg-logo.png') no-repeat;\n  background-size: 110%;\n  background-position: -150px 100px;\n  display: block;\n}\n.homePage2 .header-bg .display-flex {\n  display: inline-grid;\n  align-content: center;\n  position: absolute;\n  justify-content: center;\n  color: white;\n  height: 80% !important;\n  width: 55%;\n  font-family: \"Exo2 Regular\";\n  letter-spacing: auto;\n}\n.homePage2 .header-bg .display-flex .letter-space {\n  letter-spacing: 3px;\n}\n.homePage2 .header-bg .display-flex .btn-primary {\n  background: #00A99D;\n  border-color: #00A99D;\n  width: 150px;\n  color: white;\n  padding: 6px 0px;\n  border-radius: 15px;\n  text-align: center;\n  font-size: 12px;\n  line-height: 1.42857;\n}\n.homePage2 .header-bg .display-flex h1 {\n  letter-spacing: 20px;\n  font-size: 2.5rem;\n  font-weight: 500;\n  line-height: 1.2;\n  margin: 0;\n}\n.homePage2 .header-bg .display-flex p {\n  letter-spacing: 3px;\n  line-height: 1.5;\n  margin-top: 0;\n}\n.homePage2 .container1 {\n  position: relative;\n  width: 100%;\n}\n.homePage2 .container1 .modes {\n  margin-left: 13%;\n  width: 87%;\n  font-family: 'Roboto Condensed', sans-serif;\n}\n.homePage2 .container1 .modes .platform {\n  letter-spacing: 15px;\n  font-weight: 100;\n  font-size: 40px;\n  margin: 0;\n  margin-bottom: 24px;\n}\n.homePage2 .container1 .modes .row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: -15px;\n}\n.homePage2 .container1 .modes .color {\n  position: relative;\n  width: 25%;\n}\n.homePage2 .container1 .modes .color img {\n  width: 100%;\n  height: 636px;\n  object-fit: cover;\n  position: relative;\n}\n.homePage2 .container1 .modes .color .overlay {\n  position: absolute;\n  display: flex;\n  height: 100%;\n  text-align: left;\n  line-height: 2;\n  opacity: 1;\n  top: 0;\n  transition: 0.2s;\n  color: #fff;\n  background: linear-gradient(-180deg, #020024 0%, #000000 0%, #000000 0%, rgba(255, 253, 253, 0) 100%);\n}\n.homePage2 .container1 .modes .color p {\n  padding: 20px;\n  font-size: 12px;\n  letter-spacing: 2px;\n}\n.homePage2 .container1 .modes .color .vert1 {\n  position: absolute;\n  right: -65px;\n  bottom: 16%;\n  letter-spacing: 8px;\n  -ms-transform: rotate(-90deg);\n  -webkit-transform: rotate(-90deg);\n  transform: rotate(-90deg);\n}\n.homePage2 .container1 .modes .color .vert2 {\n  position: absolute;\n  right: -20px;\n  bottom: 10%;\n  letter-spacing: 8px;\n  -ms-transform: rotate(-90deg);\n  -webkit-transform: rotate(-90deg);\n  transform: rotate(-90deg);\n}\n.homePage2 .container1 .modes .color .vert3 {\n  position: absolute;\n  right: -100px;\n  bottom: 23%;\n  letter-spacing: 8px;\n  -ms-transform: rotate(-90deg);\n  -webkit-transform: rotate(-90deg);\n  transform: rotate(-90deg);\n}\n.homePage2 .container1 .modes .color .vert4 {\n  position: absolute;\n  right: -65px;\n  bottom: 16%;\n  letter-spacing: 8px;\n  -ms-transform: rotate(-90deg);\n  -webkit-transform: rotate(-90deg);\n  transform: rotate(-90deg);\n}\n.homePage2 .slide {\n  width: 100%;\n  position: relative;\n  display: block;\n}\n.homePage2 .slide .caption {\n  position: absolute;\n  bottom: 2%;\n  right: 2%;\n  z-index: 9999;\n  color: #fff;\n}\n.homePage2 .slide .slider .item1 {\n  width: 49.6%;\n  float: left;\n}\n.homePage2 .slide .slider .item1 img {\n  width: 100%;\n  height: 800px;\n  object-fit: cover;\n  display: block;\n  object-position: 100%;\n  vertical-align: middle;\n}\n.homePage2 .slide .slider .item2 {\n  width: 49.6%;\n  float: right;\n}\n.homePage2 .slide .slider .item2 img {\n  width: 100%;\n  height: 800px;\n  object-fit: cover;\n  display: block;\n  object-position: 70%;\n  vertical-align: middle;\n}\n.homePage2 .slide .slider .clear {\n  clear: both;\n}\n.homePage2 .row-games {\n  width: 100%;\n  background: #E6E6E6;\n}\n.homePage2 .row-games h1 {\n  color: #1a1a1a;\n}\n.homePage2 .row-games .padding {\n  padding: 100px;\n  width: 50%;\n}\n.homePage2 .row-games .padding1 {\n  padding: 100px;\n  width: 50%;\n  margin-left: 50%;\n}\n.homePage2 .row-games p {\n  color: #1a1a1a;\n  letter-spacing: 2px;\n  line-height: 1.5;\n}\n.homePage2 .footer {\n  width: 100%;\n  float: right;\n  background: #1a1a1a;\n  color: #fff;\n  padding-top: 60px;\n  padding-bottom: 30px;\n}\n.homePage2 .container {\n  margin-right: auto;\n  margin-left: auto;\n  max-width: 75%;\n}\n.homePage2 .container .row {\n  margin-bottom: 40px;\n  display: flex;\n  flex-wrap: wrap;\n}\n.homePage2 .container .col-lg {\n  width: 25%;\n  border-left: 1px solid #333333;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.homePage2 .container .col-lg nav {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 1rem;\n}\n.homePage2 .container .col-lg h5 {\n  font-weight: 100;\n  letter-spacing: 2px;\n  font-size: 1.25rem;\n  margin: 0px;\n}\n.homePage2 .container .col-lg ul {\n  margin: 0;\n  margin-top: 13px;\n  padding-left: 15px;\n}\n.homePage2 .container .col-lg li {\n  list-style: none;\n  padding-top: 5px;\n  padding-bottom: 30px;\n  font-size: 13px;\n}\n.homePage2 .container .col-lg li:last-child {\n  padding-bottom: 0;\n}\n.homePage2 .container .col-lg p {\n  font-size: 13px;\n  text-align: justify;\n  line-height: 20px;\n}\n.homePage2 .container .col-lg .form {\n  width: 100%;\n}\n.homePage2 .container .col-lg .input-method {\n  width: 80%;\n  border-radius: 3px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  background: #343a40;\n  border: 1px solid #343a40;\n  height: 31px;\n  padding-left: 5px;\n}\n.homePage2 .container .col-lg-last h5 {\n  font-size: 1rem;\n  color: #888;\n  font-weight: 500;\n  margin-bottom: 0.5rem;\n  line-height: 1.2;\n}\n.homePage2 .container .col-lg-last h6 {\n  margin: 0;\n  margin-bottom: 0.5rem;\n  font-size: 16px;\n  font-family: 'Exo2 Regular';\n  letter-spacing: 2px;\n  font-weight: 100;\n}\n.homePage2 .container .col-lg-last h5 {\n  margin: 0;\n  margin-bottom: 0.5rem;\n  font-size: 16px;\n  font-family: 'Exo2 Regular';\n  letter-spacing: 2px;\n  font-weight: 100;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/views/pages/Login/login.less":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/views/pages/Login/login.less ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/views/pages/Main/Main.less":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/views/pages/Main/Main.less ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/views/pages/Main/components/header/header.less":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/views/pages/Main/components/header/header.less ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".Header {\n  width: calc(100% - 150px);\n  height: 50px;\n  background: #153648;\n  position: fixed;\n  right: 0;\n  top: 0;\n  align-items: center;\n  padding-left: 20px;\n  display: flex;\n}\n.Header .search-cont input {\n  background: transparent;\n  border: 1px solid #fff3;\n  outline: none;\n  border-radius: 100px;\n  height: 25px;\n  width: 120px;\n  font-size: 13px;\n  padding-left: 13px;\n  color: #fff;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/views/pages/Main/components/rightside/rightside.less":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/views/pages/Main/components/rightside/rightside.less ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".rightside-cont {\n  background: #122a37;\n  width: 220px;\n  height: calc(100% - 120px);\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  padding: 15px;\n}\n.rightside-cont .title {\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 14px;\n}\n.rightside-cont .statsCont {\n  padding-top: 15px;\n}\n.rightside-cont .statsCont .statsItem {\n  display: flex;\n  align-items: center;\n  margin: 12px 0;\n  width: calc(50% - 5px);\n}\n.rightside-cont .statsCont .statsItem .icon {\n  margin-right: 7px;\n  width: 22px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.rightside-cont .statsCont .statsItem .icon img {\n  width: 22px;\n}\n.rightside-cont .statsCont .statsItem .icon svg {\n  font-size: 15px;\n  color: #d0d0d0;\n}\n.rightside-cont .statsCont .statsItem .text {\n  font-size: 13px;\n  font-weight: bold;\n}\n.rightside-cont .statsCont .statsItem.left {\n  float: left;\n}\n.rightside-cont .statsCont .statsItem.right {\n  float: right;\n}\n.rightside-cont .statsCont .clr {\n  clear: both;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/views/pages/Main/components/sidebar/sidebar.less":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/views/pages/Main/components/sidebar/sidebar.less ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".sidebar-cont {\n  background: #122a37;\n  width: 150px;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n.sidebar-cont .logo {\n  height: 120px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  font-weight: bold;\n  align-items: center;\n}\n.sidebar-cont .logo img {\n  width: 85px;\n}\n.sidebar-cont .menu-cont .menu-item {\n  height: 47px;\n  align-items: center;\n  display: flex;\n  text-transform: uppercase;\n  padding-left: 34px;\n  font-size: 14px;\n  position: relative;\n}\n.sidebar-cont .menu-cont .menu-item.active {\n  border-left: 2px solid #5cc9df;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/views/pages/Main/components/topmenu/topmenu.less":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/views/pages/Main/components/topmenu/topmenu.less ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".top-menu {\n  width: calc(100% - 150px);\n  height: 70px;\n  background: #122a37;\n  position: fixed;\n  right: 0;\n  top: 50px;\n  align-items: center;\n  display: flex;\n}\n.top-menu .choose-cont {\n  height: 100%;\n  width: 70px;\n  background: #122a37;\n}\n.top-menu .choose-cont img {\n  height: 50px;\n  width: 50px;\n  object-fit: contain;\n}\n.top-menu .menu-cont {\n  display: flex;\n}\n.top-menu .menu-cont .menu-items {\n  text-transform: uppercase;\n  font-size: 20px;\n  font-weight: bold;\n  display: flex;\n  height: 70px;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  padding: 0 25px;\n}\n.top-menu .menu-cont .menu-items.active {\n  background: #143648;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/views/pages/Register/Register.less":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/views/pages/Register/Register.less ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".homePage {\n  background: #000;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/views/pages/Reset/reset.less":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/views/pages/Reset/reset.less ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".loginCont {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #122a37;\n}\n.loginCont.reset {\n  background: #315365;\n}\n.loginCont .login {\n  width: 800px;\n  display: flex;\n  background: #fff;\n  border-radius: 6px;\n  overflow: hidden;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n}\n.loginCont .login .leftSide {\n  background: #122a37;\n}\n.loginCont .login .leftSide img {\n  width: 270px;\n}\n.loginCont .login .side {\n  width: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 30px 20px;\n}\n.loginCont .login .rightSide .centerCont {\n  width: calc(100% - 100px);\n}\n.loginCont .login .rightSide .centerCont .profileCont {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 7px 0;\n  position: relative;\n}\n.loginCont .login .rightSide .centerCont .profileCont .cc {\n  font-size: 11px;\n  position: absolute;\n  top: 18px;\n  left: 7px;\n  color: #777;\n}\n.loginCont .login .rightSide .centerCont .profileCont label {\n  font-size: 11px;\n  background: #e6e6e6;\n  text-transform: uppercase;\n  padding: 0px 22px;\n  border-radius: 13px;\n  display: flex;\n  width: 131px;\n  height: 23px;\n  justify-content: center;\n  align-items: center;\n}\n.loginCont .login .rightSide .centerCont .profileCont label input {\n  display: none;\n}\n.loginCont .login .rightSide .centerCont .profileCont .imgPreview {\n  font-size: 10px;\n  width: 100px;\n  height: 100px;\n  background: #e6e6e6;\n  border-radius: 14px;\n  overflow: hidden;\n}\n.loginCont .login .rightSide .centerCont .profileCont .imgPreview img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.loginCont .login .rightSide .centerCont .title {\n  text-transform: uppercase;\n  font-size: 16px;\n  font-weight: 500;\n  margin-bottom: 20px;\n  margin-top: 16px;\n}\n.loginCont .login .rightSide .centerCont .inputCont {\n  width: 100%;\n}\n.loginCont .login .rightSide .centerCont .inputCont .text {\n  font-size: 12px;\n  font-weight: 100;\n  margin-bottom: 4px;\n}\n.loginCont .login .rightSide .centerCont .inputCont input {\n  margin-bottom: 10px;\n  outline: none;\n  border-radius: 4px;\n  border: 1px solid #e6e6e6;\n  background: #f6f6f6;\n  padding: 6px 8px;\n  width: 100%;\n}\n.loginCont .login .rightSide .centerCont button {\n  background: #122a37;\n  color: #fff;\n  width: 100%;\n  margin-top: 15px;\n  border-radius: 27px;\n  font-size: 12px;\n  margin-bottom: 20px;\n}\n.loginCont .login .rightSide .centerCont .signup {\n  font-size: 13px;\n  margin-bottom: 6px;\n  text-align: right;\n}\n.loginCont .login .rightSide .centerCont .forgot {\n  font-size: 13px;\n  margin-bottom: 6px;\n  text-align: right;\n}\n.loginCont .login .rightSide .centerCont .loaderCont {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: -11px;\n  margin-bottom: 15px;\n}\n.loginCont .login .rightSide .centerCont .loaderCont .rai-square {\n  border-radius: 2px;\n}\n.loginCont .login .rightSide .centerCont .double {\n  display: flex;\n  justify-content: space-between;\n}\n.loginCont .login .rightSide .centerCont .double .inputCont {\n  width: calc(50% - 6px);\n}\n.loginCont .back {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #122a37;\n  z-index: -1000;\n  background: #122a3729;\n}\n@media (max-width: 480px) {\n  .loginCont .login {\n    width: calc(100% - 15px);\n    display: flex;\n    background: #fff;\n    border-radius: 6px;\n    overflow: hidden;\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  }\n  .loginCont .login .leftSide {\n    display: none !important;\n  }\n  .loginCont .login .rightSide {\n    width: 100%;\n    /* display: flex; */\n    justify-content: center;\n    align-items: center;\n    padding: 30px 30px;\n  }\n  .loginCont .login .rightSide .centerCont {\n    width: 100%;\n  }\n  .loginCont .login .rightSide .centerCont button {\n    background: #122a37;\n    color: #fff;\n    width: 100%;\n    margin-top: 15px;\n    border-radius: 27px;\n    font-size: 12px;\n    margin-bottom: 20px;\n    /* padding: 12px 0; */\n    height: 37px;\n  }\n}\n", ""]);


/***/ }),

/***/ "./src/api/actions/authActions.js":
/*!****************************************!*\
  !*** ./src/api/actions/authActions.js ***!
  \****************************************/
/*! exports provided: userLogin, createUser, verifyRegister, forgotPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userLogin", function() { return userLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyRegister", function() { return verifyRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forgotPassword", function() { return forgotPassword; });
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../urls */ "./src/api/urls.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header */ "./src/api/header.js");
/* harmony import */ var _fetcher_networkHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fetcher/networkHandler */ "./src/api/fetcher/networkHandler.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var userLogin =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(data) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", Object(_fetcher_networkHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(_urls__WEBPACK_IMPORTED_MODULE_0__["login"], {
              method: "post",
              headers: Object(_header__WEBPACK_IMPORTED_MODULE_1__["header"])(false),
              body: JSON.stringify(data)
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function userLogin(_x) {
    return _ref.apply(this, arguments);
  };
}();
var createUser =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(data) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", Object(_fetcher_networkHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(_urls__WEBPACK_IMPORTED_MODULE_0__["createUser"], {
              method: "post",
              headers: Object(_header__WEBPACK_IMPORTED_MODULE_1__["header"])(false),
              body: JSON.stringify(data)
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function createUser(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var verifyRegister =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(data) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", Object(_fetcher_networkHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(_urls__WEBPACK_IMPORTED_MODULE_0__["verifyRegister"], {
              method: "post",
              headers: Object(_header__WEBPACK_IMPORTED_MODULE_1__["header"])(false),
              body: JSON.stringify(data)
            }));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function verifyRegister(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var forgotPassword =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(data) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", Object(_fetcher_networkHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(_urls__WEBPACK_IMPORTED_MODULE_0__["forgotPassword"], {
              method: "post",
              headers: Object(_header__WEBPACK_IMPORTED_MODULE_1__["header"])(false),
              body: JSON.stringify(data)
            }));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function forgotPassword(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/api/chest.js":
/*!**************************!*\
  !*** ./src/api/chest.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var chest = exports;
var chestList = {};

chest.set = function (data) {
  chestList = _objectSpread({}, chestList, {}, data);
};

chest.get = function (option) {
  return chestList[option];
};

/***/ }),

/***/ "./src/api/fetcher/networkHandler.js":
/*!*******************************************!*\
  !*** ./src/api/fetcher/networkHandler.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return networkHandler; });
/* harmony import */ var unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unfetch */ "./node_modules/unfetch/dist/unfetch.mjs");

function networkHandler(url, options) {
  var status = null; //console.log(url);

  return Object(unfetch__WEBPACK_IMPORTED_MODULE_0__["default"])(url, options).then(function (res) {
    //console.log(res);
    status = res.status;
    return res.json();
  }).then(function (json) {
    //console.log(json);
    return {
      payload: json,
      status: status
    };
  })["catch"](function (err) {
    //console.log(err);
    return {
      payload: null,
      status: status
    };
  });
}

/***/ }),

/***/ "./src/api/header.js":
/*!***************************!*\
  !*** ./src/api/header.js ***!
  \***************************/
/*! exports provided: header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "header", function() { return header; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/api/index.js");

function header(authorization, token) {
  if (authorization) {
    return {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
      "Authorization": "Bearer " + token
    };
  } else {
    return {
      "Content-Type": "application/json",
      "cache-control": "no-cache"
    };
  }
}

/***/ }),

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/*! exports provided: chest, authActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chest", function() { return chest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authActions", function() { return authActions; });
var chest = __webpack_require__(/*! ./chest */ "./src/api/chest.js");
var authActions = __webpack_require__(/*! ./actions/authActions */ "./src/api/actions/authActions.js");

/***/ }),

/***/ "./src/api/urls.js":
/*!*************************!*\
  !*** ./src/api/urls.js ***!
  \*************************/
/*! exports provided: login, createUser, verifyRegister, forgotPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyRegister", function() { return verifyRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forgotPassword", function() { return forgotPassword; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/api/index.js");

var host = "http://champs.camp:5000";
var login = host + "/api/login";
var createUser = host + "/api/register";
var verifyRegister = host + "/api/verify_register";
var forgotPassword = host + "/api/forgot_password";

/***/ }),

/***/ "./src/helpers/PrivateRoute/index.js":
/*!*******************************************!*\
  !*** ./src/helpers/PrivateRoute/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _views_pages_Countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../views/pages/Countdown */ "./src/views/pages/Countdown/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var isLogin = false;

var PrivateRoute = function PrivateRoute(_ref) {
  var Component = _ref.component,
      rest = _objectWithoutProperties(_ref, ["component"]);

  if (JSON.parse(localStorage.getItem("User")) !== null) {
    isLogin = true;
    console.log(JSON.parse(localStorage.getItem("User")));
  }

  console.log(rest);

  switch (rest.location.pathname) {
    case '/login':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], _extends({}, rest, {
        render: function render(props) {
          return !isLogin ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, props) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
            to: "/main"
          });
        }
      }));
      break;

    case '/main':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], _extends({}, rest, {
        render: function render(props) {
          return isLogin ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, props) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
            to: "/login"
          });
        }
      }));
      break;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (PrivateRoute);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views */ "./src/views/index.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var _styles_default_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/default.less */ "./src/styles/default.less");
/* harmony import */ var _styles_default_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_default_less__WEBPACK_IMPORTED_MODULE_5__);






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views__WEBPACK_IMPORTED_MODULE_3__["default"], {
  history: history__WEBPACK_IMPORTED_MODULE_4__["createBrowserHistory"]
})), document.getElementById("react"));

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _views_pages_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/pages/Home */ "./src/views/pages/Home/index.js");
/* harmony import */ var _views_pages_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/pages/Main */ "./src/views/pages/Main/index.js");
/* harmony import */ var _views_pages_Countdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/pages/Countdown */ "./src/views/pages/Countdown/index.js");
/* harmony import */ var _views_pages_Register__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/pages/Register */ "./src/views/pages/Register/index.js");
/* harmony import */ var _views_pages_Login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/pages/Login */ "./src/views/pages/Login/index.js");
/* harmony import */ var _views_pages_Reset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/pages/Reset */ "./src/views/pages/Reset/index.js");
/* harmony import */ var _helpers_PrivateRoute__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/PrivateRoute */ "./src/helpers/PrivateRoute/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











var Routes =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Routes, _React$Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, _getPrototypeOf(Routes).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/",
        component: _views_pages_Countdown__WEBPACK_IMPORTED_MODULE_4__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/home",
        component: _views_pages_Home__WEBPACK_IMPORTED_MODULE_2__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_PrivateRoute__WEBPACK_IMPORTED_MODULE_8__["default"], {
        path: "/login",
        component: _views_pages_Login__WEBPACK_IMPORTED_MODULE_6__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_PrivateRoute__WEBPACK_IMPORTED_MODULE_8__["default"], {
        path: "/main",
        component: _views_pages_Main__WEBPACK_IMPORTED_MODULE_3__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_PrivateRoute__WEBPACK_IMPORTED_MODULE_8__["default"], {
        path: "/register",
        component: _views_pages_Register__WEBPACK_IMPORTED_MODULE_5__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/api/reset_password/",
        component: _views_pages_Reset__WEBPACK_IMPORTED_MODULE_7__["default"]
      }));
    }
  }]);

  return Routes;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Routes);

/***/ }),

/***/ "./src/styles/default.less":
/*!*********************************!*\
  !*** ./src/styles/default.less ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./default.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/styles/default.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/views/index.js":
/*!****************************!*\
  !*** ./src/views/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./src/routes/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_activity_dist_react_activity_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-activity/dist/react-activity.css */ "./node_modules/react-activity/dist/react-activity.css");
/* harmony import */ var react_activity_dist_react_activity_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_activity_dist_react_activity_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_s_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-s-alert */ "./node_modules/react-s-alert/index.js");
/* harmony import */ var react_s_alert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_s_alert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_s_alert_dist_s_alert_default_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-s-alert/dist/s-alert-default.css */ "./node_modules/react-s-alert/dist/s-alert-default.css");
/* harmony import */ var react_s_alert_dist_s_alert_default_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_s_alert_dist_s_alert_default_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_s_alert_dist_s_alert_css_effects_slide_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-s-alert/dist/s-alert-css-effects/slide.css */ "./node_modules/react-s-alert/dist/s-alert-css-effects/slide.css");
/* harmony import */ var react_s_alert_dist_s_alert_css_effects_slide_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_s_alert_dist_s_alert_css_effects_slide_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_s_alert_dist_s_alert_css_effects_scale_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-s-alert/dist/s-alert-css-effects/scale.css */ "./node_modules/react-s-alert/dist/s-alert-css-effects/scale.css");
/* harmony import */ var react_s_alert_dist_s_alert_css_effects_scale_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_s_alert_dist_s_alert_css_effects_scale_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_s_alert_dist_s_alert_css_effects_bouncyflip_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-s-alert/dist/s-alert-css-effects/bouncyflip.css */ "./node_modules/react-s-alert/dist/s-alert-css-effects/bouncyflip.css");
/* harmony import */ var react_s_alert_dist_s_alert_css_effects_bouncyflip_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_s_alert_dist_s_alert_css_effects_bouncyflip_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_s_alert_dist_s_alert_css_effects_flip_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-s-alert/dist/s-alert-css-effects/flip.css */ "./node_modules/react-s-alert/dist/s-alert-css-effects/flip.css");
/* harmony import */ var react_s_alert_dist_s_alert_css_effects_flip_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_s_alert_dist_s_alert_css_effects_flip_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_s_alert_dist_s_alert_css_effects_genie_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-s-alert/dist/s-alert-css-effects/genie.css */ "./node_modules/react-s-alert/dist/s-alert-css-effects/genie.css");
/* harmony import */ var react_s_alert_dist_s_alert_css_effects_genie_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_s_alert_dist_s_alert_css_effects_genie_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_s_alert_dist_s_alert_css_effects_jelly_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-s-alert/dist/s-alert-css-effects/jelly.css */ "./node_modules/react-s-alert/dist/s-alert-css-effects/jelly.css");
/* harmony import */ var react_s_alert_dist_s_alert_css_effects_jelly_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_s_alert_dist_s_alert_css_effects_jelly_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_s_alert_dist_s_alert_css_effects_stackslide_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-s-alert/dist/s-alert-css-effects/stackslide.css */ "./node_modules/react-s-alert/dist/s-alert-css-effects/stackslide.css");
/* harmony import */ var react_s_alert_dist_s_alert_css_effects_stackslide_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_s_alert_dist_s_alert_css_effects_stackslide_css__WEBPACK_IMPORTED_MODULE_13__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var firebaseConfig = {
  apiKey: "AIzaSyAnmhZWO-eqUQz0XlfxhscjZaRdW9w00vg",
  authDomain: "champs-camp-dota-bot.firebaseapp.com",
  databaseURL: "https://champs-camp-dota-bot.firebaseio.com",
  projectId: "champs-camp-dota-bot",
  storageBucket: "champs-camp-dota-bot.appspot.com",
  messagingSenderId: "960372772690",
  appId: "1:960372772690:web:561c1d16491414ff"
};
firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.initializeApp(firebaseConfig);











var RootView =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RootView, _React$Component);

  function RootView(props) {
    var _this;

    _classCallCheck(this, RootView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RootView).call(this, props));
    _this.state = {
      ready: false
    };
    return _this;
  }

  _createClass(RootView, [{
    key: "render",
    value: function render() {
      var ready = this.state.ready;
      console.log(this.props.history);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_s_alert__WEBPACK_IMPORTED_MODULE_5___default.a, {
        stack: {
          limit: 1
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["default"], {
        history: this.props.history
      }));
    }
  }]);

  return RootView;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(RootView));

/***/ }),

/***/ "./src/views/pages/Countdown/Countdown.less":
/*!**************************************************!*\
  !*** ./src/views/pages/Countdown/Countdown.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/less-loader/dist/cjs.js!./Countdown.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/views/pages/Countdown/Countdown.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/views/pages/Countdown/index.js":
/*!********************************************!*\
  !*** ./src/views/pages/Countdown/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_date_countdown_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-date-countdown-timer */ "./node_modules/react-date-countdown-timer/build/index.js");
/* harmony import */ var react_date_countdown_timer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_date_countdown_timer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_actions_authActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/actions/authActions */ "./src/api/actions/authActions.js");
/* harmony import */ var react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-addons-css-transition-group */ "./node_modules/react-addons-css-transition-group/index.js");
/* harmony import */ var react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-copy-to-clipboard */ "./node_modules/react-copy-to-clipboard/lib/index.js");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var _Countdown_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Countdown.less */ "./src/views/pages/Countdown/Countdown.less");
/* harmony import */ var _Countdown_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Countdown_less__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Home_Components_Login__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Home/Components/Login */ "./src/views/pages/Home/Components/Login/index.js");
/* harmony import */ var _Home_Components_Signup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Home/Components/Signup */ "./src/views/pages/Home/Components/Signup/index.js");
/* harmony import */ var react_activity__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-activity */ "./node_modules/react-activity/dist/react-activity.js");
/* harmony import */ var react_activity__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_activity__WEBPACK_IMPORTED_MODULE_12__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }















var Countdown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Countdown, _React$Component);

  function Countdown(props) {
    var _this;

    _classCallCheck(this, Countdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Countdown).call(this, props));
    _this.state = {
      loginModal: false,
      signUpModal: false,
      signed: false,
      data: null,
      data2: null,
      loading: false,
      copied: false,
      success: false
    };
    return _this;
  }

  _createClass(Countdown, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var self = this;
      self.setState({
        loading: true,
        loginModal: false,
        signUpModal: false
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var self = this;
      self.setState({
        loading: true,
        loginModal: false,
        signUpModal: false
      });
      firebase_app__WEBPACK_IMPORTED_MODULE_6___default.a.auth().onAuthStateChanged(function (user) {
        if (user) {
          if (JSON.parse(localStorage.getItem("User")) !== null) {
            firebase_app__WEBPACK_IMPORTED_MODULE_6___default.a.firestore().collection("Champ_Users").doc(user.uid).get().then(function (doc) {
              self.setState({
                data2: doc.data(),
                signed: true,
                data: JSON.parse(localStorage.getItem("User")),
                loading: false
              });
            });
          }
        } else {
          self.setState({
            loading: false
          });
        }
      });
    }
  }, {
    key: "showModal",
    value: function showModal() {
      var loginModal = this.state.loginModal;
      if (loginModal) this.setState({
        loginModal: false
      });else this.setState({
        loginModal: true
      });
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this.setState({
        loginModal: false,
        signUpModal: false
      });
    }
  }, {
    key: "goSignUp",
    value: function goSignUp() {
      this.setState({
        loginModal: false,
        signUpModal: true
      });
    }
  }, {
    key: "isLogin",
    value: function isLogin(data) {
      this.setState({
        signed: true,
        data: data,
        loginModal: false,
        signUpModal: false
      });
    }
  }, {
    key: "logOut",
    value: function logOut() {
      var _this2 = this;

      localStorage.setItem("User", null);
      firebase_app__WEBPACK_IMPORTED_MODULE_6___default.a.auth().signOut().then(function () {
        _this2.setState({
          signed: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var self = this;
      var _self$state = self.state,
          loginModal = _self$state.loginModal,
          signUpModal = _self$state.signUpModal,
          signed = _self$state.signed,
          data = _self$state.data,
          data2 = _self$state.data2,
          loading = _self$state.loading;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "countDown",
        style: {
          backgroundImage: "url('/assets/images/countdown_bg.jpg')"
        }
      }, signed ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          transition: 'all 10s ease-in-out'
        },
        className: "header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "left"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "userCont"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "proImg"
      }, data2 !== null ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "".concat(data2.profile_pic)
      }) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "userInfo"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "userName"
      }, data.username), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "userPoint"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, data2 !== null ? data2.point : null), "Champs point")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "right"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return _this3.logOut();
        }
      }, "\u0413\u0430\u0440\u0430\u0445"))) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "goCharacter characters"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "logo",
        src: "/assets/images/go_logo.png"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "cImg",
        src: "/assets/images/terror.png"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dotaCharacter characters"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "logo",
        src: "/assets/images/dota_logo.png"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "cImg",
        src: "/assets/images/PA.png"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "desc"
      }, "\u0411\u0435\u0442\u0430 \u0445\u0443\u0432\u0438\u043B\u0431\u0430\u0440"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_date_countdown_timer__WEBPACK_IMPORTED_MODULE_2___default.a, {
        locales: ['Жил', 'Сар', 'Хоног', 'Цаг', 'Минут', 'Секунд'],
        locales_plural: ['Жил', 'Сар', 'Хоног', 'Цаг', 'Минут', 'Секунд'],
        dateTo: "August 5, 2019 19:00:00 GMT+08:00",
        callback: function callback() {
          return alert('Hello');
        }
      }), signed ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "linkCont"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "link"
      }, "http://champs.camp/register?refid=", data.username), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5__["CopyToClipboard"], {
        text: "http://champs.camp/register?refid=".concat(data.username),
        onCopy: function onCopy() {
          return _this3.setState({
            copied: true
          });
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "\u041B\u0438\u043D\u043A \u0445\u0443\u0443\u043B\u0430\u0445")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "copied"
      }, this.state.copied ? "Амжилттай хуулагдлаа" : null)) : !loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return self.showModal();
        }
      }, "\u041D\u044D\u0432\u0442\u0440\u044D\u0445") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_activity__WEBPACK_IMPORTED_MODULE_12__["Squares"], {
        style: {
          marginTop: '100px'
        },
        color: "#fff",
        size: 20,
        speed: 1,
        animating: true
      }), loginModal ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Home_Components_Login__WEBPACK_IMPORTED_MODULE_10__["default"], {
        isLogin: function isLogin(data) {
          return _this3.isLogin(data);
        },
        goSignUp: function goSignUp() {
          return self.goSignUp();
        },
        closeModal: function closeModal() {
          return self.showModal();
        }
      }) : null, signUpModal ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Home_Components_Signup__WEBPACK_IMPORTED_MODULE_11__["default"], {
        type: "modal",
        closeModal: function closeModal() {
          return self.closeModal();
        }
      }) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "logoCont"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/champs_logo1.png"
      })));
    }
  }]);

  return Countdown;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Countdown);

/***/ }),

/***/ "./src/views/pages/Home/Components/Header/Header.less":
/*!************************************************************!*\
  !*** ./src/views/pages/Home/Components/Header/Header.less ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/less-loader/dist/cjs.js!./Header.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/views/pages/Home/Components/Header/Header.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/views/pages/Home/Components/Header/index.js":
/*!*********************************************************!*\
  !*** ./src/views/pages/Home/Components/Header/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Header_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.less */ "./src/views/pages/Home/Components/Header/Header.less");
/* harmony import */ var _Header_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Header_less__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var showModal = this.props.showModal;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "logo"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/logo2.png"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "menu"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Client \u0442\u0430\u0442\u0430\u0445"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        onClick: function onClick() {
          return showModal();
        }
      }, "\u041D\u044D\u0432\u0442\u0440\u044D\u0445"))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/views/pages/Home/Components/Login/Login.less":
/*!**********************************************************!*\
  !*** ./src/views/pages/Home/Components/Login/Login.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/less-loader/dist/cjs.js!./Login.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/views/pages/Home/Components/Login/Login.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/views/pages/Home/Components/Login/index.js":
/*!********************************************************!*\
  !*** ./src/views/pages/Home/Components/Login/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_date_countdown_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-date-countdown-timer */ "./node_modules/react-date-countdown-timer/build/index.js");
/* harmony import */ var react_date_countdown_timer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_date_countdown_timer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_actions_authActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../api/actions/authActions */ "./src/api/actions/authActions.js");
/* harmony import */ var react_activity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-activity */ "./node_modules/react-activity/dist/react-activity.js");
/* harmony import */ var react_activity__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_activity__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_s_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-s-alert */ "./node_modules/react-s-alert/index.js");
/* harmony import */ var react_s_alert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_s_alert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var _Login_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Login.less */ "./src/views/pages/Home/Components/Login/Login.less");
/* harmony import */ var _Login_less__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Login_less__WEBPACK_IMPORTED_MODULE_8__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function sAlert(text) {
  react_s_alert__WEBPACK_IMPORTED_MODULE_5___default.a.error(text, {
    position: 'top-right',
    effect: 'slide',
    timeout: 3000,
    loading: false
  });
}

function sAlert2(text) {
  react_s_alert__WEBPACK_IMPORTED_MODULE_5___default.a.success(text, {
    position: 'top-right',
    effect: 'slide',
    timeout: 6000,
    loading: false
  });
}

var Login =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login(props) {
    var _this;

    _classCallCheck(this, Login);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Login).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onKeyPress", function (e) {
      if (e.which === 13) {
        _this.login();
      }
    });

    _this.state = {
      username: '',
      pass: '',
      loading: false,
      forgot: false,
      femail: ''
    };
    return _this;
  }

  _createClass(Login, [{
    key: "login",
    value: function login() {
      var _this2 = this;

      var _this$state = this.state,
          username = _this$state.username,
          pass = _this$state.pass,
          loading = _this$state.loading;
      this.setState({
        loading: true
      });
      _api_actions_authActions__WEBPACK_IMPORTED_MODULE_3__["userLogin"]({
        username: username,
        password: pass
      }).then(function (res) {
        switch (res.status) {
          case 400:
            sAlert('Мэдээллээ бүрэн оруулна уу');

            _this2.setState({
              loading: false
            });

            break;

          case 422:
            sAlert('Хэрэглэгч олдсонгүй');

            _this2.setState({
              loading: false
            });

            break;

          case 404:
            sAlert('Хэрэглэгчийн нэр эсвэл нууц үг буруу байна');

            _this2.setState({
              loading: false
            });

            break;

          case 401:
            sAlert('Хэрэглэгчийн нэр эсвэл нууц үг буруу байна');

            _this2.setState({
              loading: false
            });

            break;

          case 200:
            var user = res.payload;
            firebase_app__WEBPACK_IMPORTED_MODULE_6___default.a.auth().signInWithCustomToken(res.payload.firebaseCustomToken).then(function (res) {
              localStorage.setItem('User', JSON.stringify(user));

              _this2.setState({
                loading: false
              });

              if (_this2.props.type === 'login-page') {
                console.log('s');

                _this2.props.history.push("/main/");
              } else {
                _this2.props.isLogin(user);
              }
            })["catch"](function (error) {
              console.log(error.code, error.message);
            });
            break;
        }
      })["catch"](function (err) {//console.log(err)
      });
    }
  }, {
    key: "forgotPassword",
    value: function forgotPassword() {
      this.setState({
        forgot: true
      });
    }
  }, {
    key: "forgot",
    value: function forgot() {
      var _this3 = this;

      this.setState({
        loading: true
      });
      _api_actions_authActions__WEBPACK_IMPORTED_MODULE_3__["forgotPassword"]({
        email: this.state.femail
      }).then(function (res) {
        console.log(res);

        switch (res.status) {
          case 400:
            sAlert('Бүртгэгдээгүй e-mail байна.');

            _this3.setState({
              loading: false
            });

            break;

          case 422:
            sAlert('Хэрэглэгч олдсонгүй');

            _this3.setState({
              loading: false
            });

            break;

          case 404:
            sAlert('Хэрэглэгчийн нэр эсвэл нууц үг буруу байна');

            _this3.setState({
              loading: false
            });

            break;

          case 200:
            sAlert2('Email хаягаа шалгана уу.');

            _this3.setState({
              loading: false
            });

            break;
        }
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var self = this;
      console.log(this.props.history);
      var _self$state = self.state,
          username = _self$state.username,
          pass = _self$state.pass,
          loading = _self$state.loading,
          forgot = _self$state.forgot,
          femail = _self$state.femail;
      var _self$props = self.props,
          closeModal = _self$props.closeModal,
          goSignUp = _self$props.goSignUp;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "loginCont"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "login"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "leftSide side"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/logo_white.png"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "rightSide side"
      }, forgot ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "centerCont"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title"
      }, "\u041D\u0443\u0443\u0446 \u04AF\u0433 \u0441\u044D\u0440\u0433\u044D\u044D\u0445"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "inputCont"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text"
      }, "E-mail \u0445\u0430\u044F\u0433\u0430\u0430 \u043E\u0440\u0443\u0443\u043B\u043D\u0430 \u0443\u0443."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        value: femail,
        onChange: function onChange(event) {
          return self.setState({
            femail: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return self.forgot();
        }
      }, "\u0421\u044D\u0440\u0433\u044D\u044D\u0445"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "loaderCont"
      }, loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_activity__WEBPACK_IMPORTED_MODULE_4__["Squares"], {
        color: "#122a37",
        size: 20,
        speed: 1,
        animating: true
      }) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: function onClick() {
          return self.setState({
            forgot: false
          });
        },
        className: "signup"
      }, "\u0411\u0443\u0446\u0430\u0445")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "centerCont"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title"
      }, "\u041D\u044D\u0432\u0442\u0440\u044D\u0445"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "inputCont"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text"
      }, "\u041D\u044D\u0432\u0442\u0440\u044D\u0445 \u043D\u044D\u0440"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        value: username,
        onChange: function onChange(event) {
          return self.setState({
            username: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "inputCont"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text"
      }, "\u041D\u0443\u0443\u0446 \u04AF\u0433"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        onKeyPress: this.onKeyPress,
        type: "password",
        value: pass,
        onChange: function onChange(event) {
          return self.setState({
            pass: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return !loading ? self.login() : console.log('s');
        }
      }, "\u041D\u044D\u0432\u0442\u0440\u044D\u0445"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "loaderCont"
      }, loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_activity__WEBPACK_IMPORTED_MODULE_4__["Squares"], {
        color: "#122a37",
        size: 20,
        speed: 1,
        animating: true
      }) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: function onClick() {
          return goSignUp();
        },
        className: "signup"
      }, "\u0411\u04AF\u0440\u0442\u0433\u04AF\u04AF\u043B\u044D\u0445"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: function onClick() {
          return _this4.forgotPassword();
        },
        className: "forgot"
      }, "\u041D\u0443\u0443\u0446 \u04AF\u0433\u044D\u044D \u043C\u0430\u0440\u0442\u0441\u0430\u043D \u0443\u0443?")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: function onClick() {
          return closeModal();
        },
        className: "back elev-3"
      }));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Login));

/***/ }),

/***/ "./src/views/pages/Home/Components/Signup/Signup.less":
/*!************************************************************!*\
  !*** ./src/views/pages/Home/Components/Signup/Signup.less ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/less-loader/dist/cjs.js!./Signup.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/views/pages/Home/Components/Signup/Signup.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/views/pages/Home/Components/Signup/index.js":
/*!*********************************************************!*\
  !*** ./src/views/pages/Home/Components/Signup/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_date_countdown_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-date-countdown-timer */ "./node_modules/react-date-countdown-timer/build/index.js");
/* harmony import */ var react_date_countdown_timer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_date_countdown_timer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_actions_authActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../api/actions/authActions */ "./src/api/actions/authActions.js");
/* harmony import */ var _Signup_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Signup.less */ "./src/views/pages/Home/Components/Signup/Signup.less");
/* harmony import */ var _Signup_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Signup_less__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_activity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-activity */ "./node_modules/react-activity/dist/react-activity.js");
/* harmony import */ var react_activity__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_activity__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_s_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-s-alert */ "./node_modules/react-s-alert/index.js");
/* harmony import */ var react_s_alert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_s_alert__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function sAlert(text) {
  react_s_alert__WEBPACK_IMPORTED_MODULE_6___default.a.error(text, {
    position: 'top-right',
    effect: 'slide',
    timeout: 7000,
    loading: false
  });
}

function sAlert2(text) {
  react_s_alert__WEBPACK_IMPORTED_MODULE_6___default.a.success(text, {
    position: 'top-left',
    effect: 'slide',
    timeout: 7000,
    loading: false
  });
}

var SignUp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SignUp, _React$Component);

  function SignUp() {
    var _this;

    _classCallCheck(this, SignUp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SignUp).call(this));

    _defineProperty(_assertThisInitialized(_this), "onKeyPress", function (e) {
      if (e.which === 13) {
        _this.verify();
      }
    });

    _this.state = {
      username: '',
      pass: '',
      file: '',
      imagePreviewUrl: '',
      email: '',
      phone: '',
      success: false,
      pin: '',
      loading: false,
      pass2: ' ',
      isAuth: true,
      redirect: false
    };
    return _this;
  }

  _createClass(SignUp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var self = this;

      if (window.location.search !== "") {
        var url = new URL(window.location.href);
        var c = url.searchParams.get("refid");
        self.setState({
          ref: c
        });
      }
    }
  }, {
    key: "signUp",
    value: function signUp() {
      var _this2 = this;

      this.setState({
        loading: true
      });
      var _this$state = this.state,
          username = _this$state.username,
          pass = _this$state.pass,
          email = _this$state.email,
          phone = _this$state.phone,
          imagePreviewUrl = _this$state.imagePreviewUrl,
          ref = _this$state.ref,
          pass2 = _this$state.pass2;

      if (pass === pass2) {
        if (pass.length < 6) {
          sAlert('Нууц үг 6-аас дээш оронтой байх ёстой.');
          this.setState({
            loading: false
          });
        } else {
          _api_actions_authActions__WEBPACK_IMPORTED_MODULE_3__["createUser"]({
            username: username,
            email: email,
            password: pass,
            phone: phone,
            profile_picture: imagePreviewUrl
          }).then(function (res) {
            console.log(res);

            switch (res.status) {
              case 200:
                _this2.setState({
                  success: true,
                  loading: false
                });

                break;

              case 400:
                if (res.payload.errorMessage === "Phone number is already in use.") {
                  sAlert('Бүртгэлгүй дугаар ашиглана уу.');

                  _this2.setState({
                    loading: false
                  });
                } else if (res.payload.errorMessage === "Username is already in use.") {
                  sAlert('Хэрэглэгчийн нэр бүртгэлтэй байна.');

                  _this2.setState({
                    loading: false
                  });
                } else {
                  sAlert('Мэдээллээ бүрэн оруулна уу');

                  _this2.setState({
                    loading: false
                  });
                }

                break;

              case 422:
                if (res.payload[0].param === 'password') {
                  sAlert('Нууц үг дор хаяж нэг том үсэг, нэг тоо байна.');

                  _this2.setState({
                    loading: false
                  });
                } else if (res.payload[0].param === 'username') {
                  sAlert('Хэрэглэгчийн нэр 4 буюу түүнээс дээш оронтой тусгай тэмдэгт оролцоогүй байх ёстойг анхаарна уу');

                  _this2.setState({
                    loading: false
                  });
                } else if (res.payload[0].param === 'phone') {
                  sAlert('Утасны дугаараа зөв оруулна уу');

                  _this2.setState({
                    loading: false
                  });
                } else {
                  sAlert('Мэдээллээ бүрэн зөв бөглөнө үү');

                  _this2.setState({
                    loading: false
                  });
                }

                break;

              case 404:
                sAlert('Хэрэглэгчийн нэр эсвэл нууц үг буруу байна');

                _this2.setState({
                  loading: false
                });

                break;

              case 429:
                sAlert('Нэг IP хаягнаас олон хандалт ирсэн тул түр хүлээгээд дахин оролдоно уу');

                _this2.setState({
                  loading: false
                });

                break;
            }
          })["catch"](function (err) {
            console.log(err);
          });
        }
      } else {
        sAlert('Нууц үг таарахгүй байна');
        this.setState({
          loading: false
        });
      }
    }
  }, {
    key: "verify",
    value: function verify() {
      var _this3 = this;

      this.setState({
        loading: true
      });
      var _this$state2 = this.state,
          username = _this$state2.username,
          pass = _this$state2.pass,
          email = _this$state2.email,
          phone = _this$state2.phone,
          pin = _this$state2.pin,
          ref = _this$state2.ref;
      _api_actions_authActions__WEBPACK_IMPORTED_MODULE_3__["verifyRegister"]({
        username: username,
        verification_code: pin,
        ref: ref
      }).then(function (res) {
        switch (res.status) {
          case 200:
            sAlert2('Амжилттай бүртгэгдлээ.');

            if (_this3.props.page) {
              _this3.setState({
                loading: false,
                redirect: true
              });
            } else {
              _this3.setState({
                loading: false
              });

              _this3.props.closeModal();
            }

            break;

          case 400:
            sAlert('Нууц үг таарахгүй байна');

            _this3.setState({
              loading: false
            });

            break;
        }
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }, {
    key: "_handleImageChange",
    value: function _handleImageChange(e) {
      var _this4 = this;

      e.preventDefault();
      var reader = new FileReader();
      var file = e.target.files[0];
      console.log(reader);

      reader.onloadend = function () {
        _this4.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      };

      reader.readAsDataURL(file);
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$state3 = this.state,
          username = _this$state3.username,
          pass = _this$state3.pass,
          imagePreviewUrl = _this$state3.imagePreviewUrl,
          file = _this$state3.file,
          email = _this$state3.email,
          phone = _this$state3.phone,
          success = _this$state3.success,
          pin = _this$state3.pin,
          loading = _this$state3.loading,
          pass2 = _this$state3.pass2,
          isAuth = _this$state3.isAuth;
      var _this$props = this.props,
          closeModal = _this$props.closeModal,
          page = _this$props.page;
      var self = this;
      var $imagePreview = null;

      if (imagePreviewUrl) {
        $imagePreview = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: imagePreviewUrl
        });
      } else {
        $imagePreview = null;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "loginCont"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "login"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "leftSide side"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/logo_white.png"
      })), !this.state.redirect ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "rightSide side"
      }, !success ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "centerCont"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title"
      }, "\u0411\u04AF\u0440\u0442\u0433\u04AF\u04AF\u043B\u044D\u0445"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "inputCont"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text"
      }, "\u041D\u044D\u0432\u0442\u0440\u044D\u0445 \u043D\u044D\u0440"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        value: username,
        onChange: function onChange(event) {
          return self.setState({
            username: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "inputCont"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text"
      }, "\u0426\u0430\u0445\u0438\u043C \u0445\u0430\u044F\u0433"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        value: email,
        onChange: function onChange(event) {
          return self.setState({
            email: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "inputCont"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text"
      }, "\u0423\u0442\u0430\u0441\u043D\u044B \u0434\u0443\u0433\u0430\u0430\u0440"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        value: phone,
        onChange: function onChange(event) {
          return self.setState({
            phone: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "inputCont"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text"
      }, "\u041D\u0443\u0443\u0446 \u04AF\u0433"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "password",
        value: pass,
        onChange: function onChange(event) {
          return self.setState({
            pass: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "inputCont"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text"
      }, "\u041D\u0443\u0443\u0446 \u04AF\u0433 \u0434\u0430\u0432\u0442\u0430\u0445"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "password",
        value: pass2,
        onChange: function onChange(event) {
          return self.setState({
            pass2: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "profileCont"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cc"
      }, "\u041F\u0440\u043E\u0444\u0430\u0439\u043B \u0437\u0443\u0440\u0430\u0433"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "custom-file-upload"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "fileInput",
        type: "file",
        onChange: function onChange(e) {
          return _this5._handleImageChange(e);
        },
        accept: "image/*"
      }), "\u0417\u0443\u0440\u0430\u0433 \u0441\u043E\u043D\u0433\u043E\u0445"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "imgPreview"
      }, $imagePreview)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return _this5.signUp();
        }
      }, "\u0411\u04AF\u0440\u0442\u0433\u04AF\u04AF\u043B\u044D\u0445"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "loaderCont"
      }, loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_activity__WEBPACK_IMPORTED_MODULE_5__["Squares"], {
        color: "#122a37",
        size: 20,
        speed: 1,
        animating: true
      }) : null)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "centerCont"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title"
      }, "\u0411\u0430\u0442\u0430\u043B\u0433\u0430\u0430\u0436\u0443\u0443\u043B\u0430\u043B\u0442 (4 \u043E\u0440\u043E\u043D\u0442\u043E\u0439 \u043F\u0438\u043D \u043A\u043E\u0434\u044B\u0433 \u043E\u0440\u0443\u0443\u043B\u043D\u0430 \u0443\u0443)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "inputCont"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text"
      }, "\u041F\u0438\u043D \u043A\u043E\u0434"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        onKeyPress: this.onKeyPress,
        maxLength: 4,
        type: "password",
        value: pin,
        onChange: function onChange(event) {
          return self.setState({
            pin: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return _this5.verify();
        }
      }, "\u0418\u043B\u0433\u044D\u044D\u0445"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "loaderCont"
      }, loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_activity__WEBPACK_IMPORTED_MODULE_5__["Squares"], {
        color: "#122a37",
        size: 20,
        speed: 1,
        animating: true
      }) : null))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
        to: "/"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: function onClick() {
          return !page ? closeModal() : null;
        },
        className: "back elev-3"
      }));
    }
  }]);

  return SignUp;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SignUp);

/***/ }),

/***/ "./src/views/pages/Home/Home.less":
/*!****************************************!*\
  !*** ./src/views/pages/Home/Home.less ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/less-loader/dist/cjs.js!./Home.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/views/pages/Home/Home.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/views/pages/Home/index.js":
/*!***************************************!*\
  !*** ./src/views/pages/Home/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/Header */ "./src/views/pages/Home/Components/Header/index.js");
/* harmony import */ var _Components_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Login */ "./src/views/pages/Home/Components/Login/index.js");
/* harmony import */ var _Components_Signup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/Signup */ "./src/views/pages/Home/Components/Signup/index.js");
/* harmony import */ var _Home_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Home.less */ "./src/views/pages/Home/Home.less");
/* harmony import */ var _Home_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Home_less__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Home =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    var _this;

    _classCallCheck(this, Home);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Home).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          loginModal = _this$state.loginModal,
          signUpModal = _this$state.signUpModal;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "homePage2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "headerLogo"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/logo2.png"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "menu-list"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "\u042D\u0425\u041B\u042D\u041B")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "\u0422\u042D\u041C\u0426\u042D\u042D\u041D")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "\u0411\u0410\u0413\u0418\u0419\u041D \u0422\u0410\u041D\u0418\u041B\u0426\u0423\u0423\u041B\u0413\u0410")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "\u0411\u04AE\u0420\u0422\u0413\u042D\u041B"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "header-bg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "display-flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "HOME", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "OF", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "CHAMPIONS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "letter-space"
      }, "E-SPORT-\u042B\u041D", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " \u0422\u0410\u041C\u0418\u0420\u0427\u0414\u0418\u0419\u041D", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " \u041D\u042D\u0413\u0414\u0421\u042D\u041D \u0421\u04AE\u041B\u0416\u042D\u042D"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        "class": "btn btn-primary btn-circle"
      }, " \u0411\u0410\u0413 \u0411\u0410\u0419\u0413\u0423\u0423\u041B\u0410\u0425 "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modes"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "platform"
      }, "\u041F\u041B\u0410\u0422\u0424\u041E\u0420\u041C\u042B\u041D \u0413\u041E\u0420\u0418\u041C"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "color"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/5.jpg"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u041D\u0430\u0439\u0437\u0443\u0443\u0434\u0442\u0430\u0439\u0433\u0430\u0430 \u0431\u043E\u043B\u043E\u043D \u0433\u0430\u043D\u0446\u0430\u0430\u0440\u0430\u0430 \u0438\u0436\u0438\u043B \u0442\u04AF\u0432\u0448\u043D\u0438\u0439 \u0442\u043E\u0433\u043B\u043E\u0433\u0447\u0438\u0434\u0442\u043E\u0439 \u0442\u0430\u0430\u0440\u0447 \u0431\u043E\u043B\u043E\u043C\u0436\u0438\u0442 \u0445\u0430\u043C\u0433\u0438\u0439\u043D \u0431\u0430\u0433\u0430 ping-\u0442\u044D\u0439 \u0442\u043E\u0433\u043B\u043E\u0445 \u0431\u043E\u043B\u043E\u043C\u0436"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        "class": "vert1"
      }, " MATCH MAKING "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "color"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/2.jpg"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0421\u043E\u043D\u0438\u0440\u0445\u043E\u0433\u0447\u0434\u044B\u043D \u0431\u043E\u043B\u043E\u043D \u043C\u044D\u0440\u0433\u044D\u0436\u043B\u0438\u0439\u043D \u0431\u0430\u0433\u0443\u0443\u0434 \u0445\u043E\u043E\u0440\u043E\u043D\u0434\u043E\u043E \u043D\u04E9\u0445\u04E9\u0440\u0441\u04E9\u0433 \u0442\u043E\u0433\u043B\u043E\u043B\u0442 \u0445\u0438\u0439\u0445, \u0442\u0443\u0440\u0448\u043B\u0430\u0433\u0430 \u0441\u043E\u043B\u0438\u043B\u0446\u043E\u0445, lan-\u0434\u0430\u0445 \u0431\u043E\u043B\u043E\u043C\u0436"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        "class": "vert2"
      }, "SCRIMS"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "color"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/3.jpg"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0422\u043E\u0433\u043B\u043E\u0433\u0447\u0434\u043E\u0434 \u0437\u043E\u0440\u0438\u0443\u043B\u0441\u0430\u043D \u043B\u0438\u0433 \u043D\u044C \u0436\u0438\u043B\u0434 2 \u0443\u0434\u0430\u0430 \u0437\u043E\u0445\u0438\u043E\u0433\u0434\u043E\u0445 \u0431\u04E9\u0433\u04E9\u04E9\u0434 \u043B\u0438\u0433 \u0442\u0443\u0441 \u0431\u04AF\u0440 6\u043D \u0441\u0430\u0440\u044B\u043D \u0445\u0443\u0433\u0430\u0446\u0430\u0430\u043D\u0434 \u04AF\u0440\u0433\u044D\u043B\u0436\u043B\u044D\u043D\u044D. \u041B\u0438\u0433\u0438\u0439\u043D \u0431\u0430\u0433\u0443\u0443\u0434\u044B\u0433 \u0442\u04AF\u0432\u0448\u043D\u044D\u044D\u0440 \u043D\u044C BRONZE SILVER GOLD \u0433\u044D\u0445 3 \u0445\u044D\u0441\u044D\u0433\u0442 \u0445\u0443\u0432\u0430\u0430\u0436 \u043D\u044D\u0433 \u0442\u04AF\u0432\u0448\u043D\u0438\u0439 \u0431\u0430\u0433\u0443\u0443\u0434 \u0445\u043E\u043E\u0440\u043E\u043D\u0434\u043E\u043E 6\u043D \u0441\u0430\u0440\u044B\u043D \u0442\u0443\u0440\u0448 \u04E9\u0440\u0441\u04E9\u043B\u0434\u04E9\u0436 \u043E\u043D\u043E\u043E \u0446\u0443\u0433\u043B\u0443\u0443\u043B\u0430\u0445 \u0437\u0430\u0440\u0447\u043C\u0430\u0430\u0440 \u0430\u0432\u0430\u0440\u0433\u044B\u0433 \u0442\u043E\u0434\u0440\u0443\u0443\u043B\u043D\u0430. \u041B\u0438\u0433 \u0442\u0443\u0441 \u0431\u04AF\u0440 \u0448\u0430\u0433\u043D\u0430\u043B\u044B\u043D \u0441\u0430\u043D\u0442\u0430\u0439 \u0431\u04E9\u0433\u04E9\u04E9\u0434 GOLD \u043B\u0438\u0433\u0438\u0439\u043D \u044D\u0445\u043D\u0438\u0439 16 \u0431\u0430\u0433 \u043D\u044D\u043C\u044D\u043B\u0442\u044D\u044D\u0440 \u0436\u0438\u043B\u0434 \u0433\u0430\u043D\u0446 \u0443\u0434\u0430\u0430 \u0437\u043E\u0445\u0438\u043E\u0433\u0434\u043E\u0445 \u201CCHAMPS CUP\u201D \u0443\u043B\u0441\u044B\u043D \u0430\u0432\u0430\u0440\u0433\u0430\u0434 \u043E\u0440\u043E\u043B\u0446\u043E\u0445 \u0443\u0440\u0438\u043B\u0433\u0430 \u0430\u0432\u043D\u0430."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        "class": "vert3"
      }, " LEAGUES AND LADDERS "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "color"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/4.jpg"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0425\u0443\u0432\u044C \u0445\u04AF\u043D \u0431\u0430 \u0430\u043B\u0431\u0430\u043D \u0431\u0430\u0439\u0433\u0443\u0443\u043B\u043B\u0430\u0433\u0443\u0443\u0434 \u201CORGANIZER\u201D-\u0430\u0430\u0440 \u0431\u04AF\u0440\u0442\u0433\u04AF\u04AF\u043B\u044D\u043D \u0442\u044D\u043C\u0446\u044D\u044D\u043D \u0437\u043E\u0445\u0438\u043E\u043D \u0431\u0430\u0439\u0433\u0443\u0443\u043B\u0430\u0445 \u044D\u0440\u0445\u0442\u044D\u0439 \u0431\u043E\u043B\u043E\u0445 \u0431\u04E9\u0433\u04E9\u04E9\u0434 \u04E9\u0434\u04E9\u0440 \u0431\u04AF\u0440 CS:GO \u0431\u043E\u043B\u043E\u043D DOTA 2 \u0442\u043E\u0433\u043B\u043E\u043E\u043C\u044B\u043D skin, item, CHAMPS CAMP point \u043C\u04E9\u043D \u0438\u0432\u044D\u044D\u043D \u0442\u044D\u0442\u0433\u044D\u0433\u0447\u0434\u044B\u043D \u0448\u0430\u0433\u043D\u0430\u043B\u044B\u043D \u0441\u0430\u043D\u0442\u0430\u0439 \u0442\u044D\u043C\u0446\u044D\u044D\u043D\u04AF\u04AF\u0434 \u0437\u043E\u0445\u0438\u043E\u0433\u0434\u043E\u043D\u043E"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        "class": "vert4"
      }, " TOURNAMENTS ")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "slide"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "slider"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/slide1.jpg"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/slide2.jpg"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clear"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "caption"
      }, "1 / 2")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row-games"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "padding"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, " 128 TICKRATE "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Tickrate \u043D\u044C \u0442\u0430\u043D\u044B \u0442\u043E\u0433\u043B\u043E\u0436 \u0431\u0430\u0439\u0433\u0430\u0430 \u0441\u0435\u0440\u0432\u0435\u0440 \u0434\u044D\u044D\u0440 \u201Cclient\u201D \u0441\u0435\u043A\u0443\u043D\u0434\u044D\u0434 \u0445\u044D\u0434\u044D\u043D \u0443\u0434\u0430\u0430 \u0448\u0438\u043D\u044D\u0447\u043B\u044D\u043B\u0442 \u0445\u0438\u0439\u0433\u0434\u044D\u0436 \u0431\u0430\u0439\u0433\u0430\u0430\u0433 \u0437\u0430\u0430\u0434\u0430\u0433. 64 tickrate-\u0442\u044D\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u043D\u044C \u0441\u0435\u043A\u0443\u043D\u0434\u044D\u0434 64 \u0443\u0434\u0430\u0430 \u0431\u0443\u044E\u0443 128 tickrate-\u0442\u044D\u0439 \u0441\u0435\u0440\u0432\u0435\u0440\u044D\u044D\u0441 2 \u0434\u0430\u0445\u0438\u043D \u0431\u0430\u0433\u0430 \u0443\u0434\u0430\u0430 \u0448\u0438\u043D\u044D\u0447\u043B\u044D\u043B/refresh/ \u0445\u0438\u0439\u0433\u0434\u044D\u0436 \u0431\u0430\u0439\u043D\u0430 \u0433\u044D\u0441\u044D\u043D \u04AF\u0433 \u044E\u043C. \u0418\u0439\u043C\u044D\u044D\u0441 128 tickrate-\u0442\u044D\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u0434\u044D\u044D\u0440 \u0442\u043E\u0433\u043B\u043E\u0436 \u0431\u0430\u0439\u0433\u0430\u0430 \u0442\u043E\u0445\u0438\u043E\u043B\u0434\u043E\u043B\u0434 \u0441\u0435\u043A\u0443\u043D\u0434\u044D\u0434 128 \u0448\u0438\u0440\u0445\u044D\u0433 \u0437\u0443\u0440\u0430\u0433 \u0445\u0430\u0440\u0430\u0433\u0434\u0430\u0445 \u0431\u0430 \u0445\u0438\u0439\u0436 \u0431\u0430\u0439\u0433\u0430\u0430 \u04AF\u0439\u043B\u0434\u044D\u043B\u04AF\u04AF\u0434 \u0438\u043B\u04AF\u04AF \u0442\u043E\u0434\u043E\u0440\u0445\u043E\u0439 \u0431\u043E\u043B\u043E\u0445\u043E\u043E\u0441 \u0433\u0430\u0434\u043D\u0430 \u0431\u0430\u0439\u0433\u0430\u0430 \u0438\u043B\u04AF\u04AF \u043E\u043D\u043E\u043D\u043E \u0433\u044D\u0441\u044D\u043D \u04AF\u0433 \u044E\u043C.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "padding1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, " \u0411\u041E\u041B\u041E\u041C\u0416\u0418\u0422 \u0425\u0410\u041C\u0413\u0418\u0419\u041D \u0411\u0410\u0413\u0410 PING "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Ping \u043D\u044C \u0442\u0443\u0445\u0430\u0439\u043D \u0442\u043E\u0433\u043B\u043E\u0436 \u0431\u0443\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u0431\u0430 \u0442\u043E\u0433\u043B\u043E\u0433\u0447\u0434\u0438\u0439\u043D \u0445\u043E\u043E\u0440\u043E\u043D\u0434 \u0445\u044D\u0434\u0438\u0439 \u0445\u0443\u0433\u0430\u0446\u0430\u0430\u043D\u0434 \u04E9\u0433\u04E9\u0433\u0434\u04E9\u043B \u0441\u043E\u043B\u0438\u043B\u0446\u043E\u0436 \u0431\u0430\u0439\u0433\u0430\u0430\u0433 \u0437\u0430\u0430\u0436 \u0431\u0443\u0439 \u0445\u044D\u043C\u0436\u04AF\u04AF\u0440 \u044E\u043C. \u041C\u044D\u0434\u044D\u044D\u043B\u044D\u043B \u0443\u0434\u0430\u0430\u043D \u0441\u043E\u043B\u0438\u0433\u0434\u043E\u0445 \u0442\u0443\u0441\u0430\u043C \u0442\u043E\u0433\u043B\u043E\u043E\u043C \u0433\u0430\u0446\u0430\u0445/lag, delay/ \u0438\u0445\u0441\u044D\u0445 \u044E\u043C. CHAMPS CAMP \u0441\u0435\u0440\u0432\u0435\u0440 \u043D\u044C \u0434\u043E\u0442\u043E\u043E\u0434\u043E\u0434 \u0431\u0430\u0439\u0440\u0448\u0438\u0436 \u0431\u0443\u0439 \u04E9\u043D\u0434\u04E9\u0440 \u0445\u04AF\u0447\u0438\u043D \u0447\u0430\u0434\u0430\u043B\u0442\u0430\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u0443\u0447\u0440\u0430\u0430\u0441 \u0445\u0430\u043C\u0433\u0438\u0439\u043D \u0431\u0430\u0433\u0430 ping-\u044B\u0433 \u0441\u0430\u043D\u0430\u043B \u0431\u043E\u043B\u0433\u043E\u0436 \u0431\u0430\u0439\u0433\u0430\u0430 \u0431\u0438\u043B\u044D\u044D.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "padding"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, " \u0423\u0425\u0410\u0410\u041B\u0410\u0413 RANKING \u0421\u0418\u0421\u0422\u0415\u041C"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0421\u043E\u043B\u043E \u0442\u043E\u0433\u043B\u043E\u0433\u0447\u0438\u0434 \u0431\u043E\u043B\u043E\u043D \u0431\u0430\u0433\u0443\u0443\u0434\u044B\u0433 \u0430\u043B\u0431\u0430\u043D \u0451\u0441\u043E\u043E\u0440 \u0431\u04AF\u0440\u0442\u0433\u044D\u0436 \u0442\u04AF\u0432\u0448\u0438\u043D\u0433 \u0442\u043E\u0433\u0442\u043E\u043E\u043D \u043D\u044D\u044D\u043B\u0442\u0442\u044D\u0439\u0433\u044D\u044D\u0440 \u0431\u0430\u0439\u0440\u0448\u0443\u0443\u043B\u0430\u0445 \u043D\u044C \u0445\u0443\u0432\u044C \u0442\u043E\u0433\u043B\u043E\u0433\u0447\u0434\u044B\u043D \u0445\u04E9\u0433\u0436\u0438\u043B \u0431\u043E\u043B\u043E\u043D \u0430\u043B\u0431\u0430\u043D \u0451\u0441\u043D\u044B \u0431\u0430\u0433\u0443\u0443\u0434\u044B\u043D \u0445\u043E\u043E\u0440\u043E\u043D\u0434\u044B\u043D \u04E9\u0440\u0441\u04E9\u043B\u0434\u04E9\u04E9\u043D\u0438\u0439\u0433 \u0441\u0430\u0439\u0436\u0440\u0443\u0443\u043B\u0436 rank-\u044B\u0433 \u0443\u043B\u0441\u044B\u043D \u0445\u044D\u043C\u0436\u044D\u044D\u043D\u0434 \u044D\u0440\u044D\u043C\u0431\u044D\u043B\u044D\u043D \u0445\u0430\u0440\u0443\u0443\u043B\u0436 \u0431\u0430\u0433\u0443\u0443\u0434 \u0431\u043E\u043B\u043E\u043D \u0442\u043E\u0433\u043B\u043E\u0447\u0434\u044B\u043D \u0447\u0430\u043D\u0441\u0430\u0430\u0433 \u0442\u043E\u0433\u0442\u043E\u043E\u0445 \u044E\u043C."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "footer"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, " \u0411\u0418\u0414\u041D\u0418\u0419 \u0422\u0423\u0425\u0410\u0419 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u041C\u043E\u043D\u0433\u043E\u043B\u044B\u043D \u0446\u0430\u0445\u0438\u043C \u0441\u043F\u043E\u0440\u0442\u044B\u043D \u0442\u044D\u043C\u0446\u044D\u044D\u043D \u0443\u0440\u0430\u043B\u0434\u0430\u0430\u043D\u044B \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442 \u0446\u0430\u0445\u0438\u043C \u0441\u043F\u043E\u0440\u0442\u044B\u043D \u0442\u0430\u043C\u0438\u0440\u0447\u0434\u044B\u043D \u0443\u0440 \u0447\u0430\u0434\u0432\u0430\u0440\u044B\u043D \u0445\u04E9\u0433\u0436\u0438\u043B, \u043D\u0438\u0439\u0433\u044D\u043C\u0434 \u04AF\u0437\u04AF\u04AF\u043B\u044D\u0445 \u044D\u0435\u0440\u044D\u0433 \u043D\u04E9\u043B\u04E9\u04E9\u0433 \u0431\u0438\u0439 \u0431\u043E\u043B\u0433\u043E\u0436 \u0431\u0443\u0439 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C. "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "form"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "input-method",
        type: "text",
        name: "",
        placeholder: "\u041C\u042D\u0419\u041B \u0425\u0410\u042F\u0413"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, " \u0422\u0423\u0421\u041B\u0410\u041C\u0416 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\u0410\u0416\u0418\u041B\u041B\u0410\u0425 \u0413\u041E\u0420\u0418\u041C"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\u0410\u0421\u0423\u0423\u041B\u0422 \u0425\u0410\u0420\u0418\u0423\u041B\u0422"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\u0425\u041E\u041B\u0411\u041E\u041E \u0411\u0410\u0420\u0418\u0425")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, " \u0422\u041E\u0413\u041B\u041E\u041E\u041C\u041D\u0423\u0423\u0414 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Counter Strike GO"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "DOTA 2")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-last"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, " \u0422\u0423\u0421\u041B\u0410\u041C\u0416\u0418\u0419\u041D \u0410\u0416\u0418\u041B\u0422\u0410\u041D "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, " 99111011 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, " \u0425\u0410\u042F\u0413 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, " \u0423\u041B\u0410\u0410\u041D\u0411\u0410\u0410\u0422\u0410\u0420 \u0425\u041E\u0422, \u0421Y\u0425\u0411\u0410\u0410\u0422\u0410\u0420 \u0414YY\u0420\u042D\u0413 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, " \u041C\u042D\u0419\u041B \u0425\u0410\u042F\u0413 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, " support@champs.camp ")))))));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/views/pages/Login/index.js":
/*!****************************************!*\
  !*** ./src/views/pages/Login/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Home_Components_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Home/Components/Login */ "./src/views/pages/Home/Components/Login/index.js");
/* harmony import */ var _login_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.less */ "./src/views/pages/Login/login.less");
/* harmony import */ var _login_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_login_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Countdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Countdown */ "./src/views/pages/Countdown/index.js");
/* harmony import */ var _api_actions_authActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../api/actions/authActions */ "./src/api/actions/authActions.js");
/* harmony import */ var react_date_countdown_timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-date-countdown-timer */ "./node_modules/react-date-countdown-timer/build/index.js");
/* harmony import */ var react_date_countdown_timer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_date_countdown_timer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_s_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-s-alert */ "./node_modules/react-s-alert/index.js");
/* harmony import */ var react_s_alert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_s_alert__WEBPACK_IMPORTED_MODULE_7__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










function sAlert(text) {
  react_s_alert__WEBPACK_IMPORTED_MODULE_7___default.a.success(text, {
    position: 'top-right',
    effect: 'slide',
    timeout: 3000,
    loading: false
  });
}

var LoginPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LoginPage, _React$Component);

  function LoginPage(props) {
    var _this;

    _classCallCheck(this, LoginPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoginPage).call(this, props));
    _this.state = {
      loginModal: false,
      signUpModal: true,
      signed: false,
      data: null,
      data2: null,
      loading: false
    };
    return _this;
  }

  _createClass(LoginPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "showModal",
    value: function showModal() {
      var loginModal = this.state.loginModal;
      if (loginModal) this.setState({
        loginModal: false
      });else this.setState({
        loginModal: true
      });
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this.setState({
        loginModal: false,
        signUpModal: false
      });
    }
  }, {
    key: "goSignUp",
    value: function goSignUp() {
      this.setState({
        loginModal: false,
        signUpModal: true
      });
    }
  }, {
    key: "isLogin",
    value: function isLogin(data) {
      this.setState({
        signed: true,
        data: data,
        loginModal: false,
        signUpModal: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var self = this;
      console.log(this.props.history);
      var _self$state = self.state,
          loginModal = _self$state.loginModal,
          signUpModal = _self$state.signUpModal,
          signed = _self$state.signed,
          data = _self$state.data,
          data2 = _self$state.data2;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "countDown",
        style: {
          backgroundImage: "url('/assets/images/countdown_bg.jpg')"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "goCharacter characters"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "logo",
        src: "/assets/images/go_logo.png"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "cImg",
        src: "/assets/images/terror.png"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dotaCharacter characters"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "logo",
        src: "/assets/images/dota_logo.png"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "cImg",
        src: "/assets/images/PA.png"
      })), signUpModal ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Home_Components_Login__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, this.props, {
        type: "login-page",
        isLogin: function isLogin(data) {
          return _this2.isLogin(data);
        },
        goSignUp: function goSignUp() {
          return self.goSignUp();
        },
        closeModal: function closeModal() {
          return self.showModal();
        }
      })) : null);
    }
  }]);

  return LoginPage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (LoginPage);

/***/ }),

/***/ "./src/views/pages/Login/login.less":
/*!******************************************!*\
  !*** ./src/views/pages/Login/login.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/less-loader/dist/cjs.js!./login.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/views/pages/Login/login.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/views/pages/Main/Main.less":
/*!****************************************!*\
  !*** ./src/views/pages/Main/Main.less ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/less-loader/dist/cjs.js!./Main.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/views/pages/Main/Main.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/views/pages/Main/Routes/index.js":
/*!**********************************************!*\
  !*** ./src/views/pages/Main/Routes/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Main = function Main() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "sd");
};

var Routes =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Routes, _React$Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, _getPrototypeOf(Routes).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/main/",
        component: Main
      }));
    }
  }]);

  return Routes;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Routes);

/***/ }),

/***/ "./src/views/pages/Main/components/header/header.less":
/*!************************************************************!*\
  !*** ./src/views/pages/Main/components/header/header.less ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/less-loader/dist/cjs.js!./header.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/views/pages/Main/components/header/header.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/views/pages/Main/components/header/index.js":
/*!*********************************************************!*\
  !*** ./src/views/pages/Main/components/header/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_ink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-ink */ "./node_modules/react-ink/dist/ink.js");
/* harmony import */ var react_ink__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_ink__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





__webpack_require__(/*! ./header.less */ "./src/views/pages/Main/components/header/header.less");

var menuItems = [{
  text: 'Ranking'
}, {
  text: 'Friends'
}, {
  text: 'Team'
}, {
  text: 'Organizer'
}, {
  text: 'Premium'
}];

var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Header).call(this));
    _this.state = {
      selectedMenu: 0
    };
    return _this;
  }

  _createClass(Header, [{
    key: "selectMenu",
    value: function selectMenu(index) {
      this.setState({
        selectedMenu: index
      });
    }
  }, {
    key: "render",
    value: function render() {
      var selectedMenu = this.state.selectedMenu;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "search-cont"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        placeholder: "Search...",
        type: "text"
      })));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/views/pages/Main/components/rightside/index.js":
/*!************************************************************!*\
  !*** ./src/views/pages/Main/components/rightside/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_ink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-ink */ "./node_modules/react-ink/dist/ink.js");
/* harmony import */ var react_ink__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_ink__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






__webpack_require__(/*! ./rightside.less */ "./src/views/pages/Main/components/rightside/rightside.less");

var menuItems = [{
  text: 'Home'
}, {
  text: 'Ranking'
}, {
  text: 'Friends'
}, {
  text: 'Team'
}, {
  text: 'Organizer'
}, {
  text: 'Premium'
}];

var RightSide =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RightSide, _React$Component);

  function RightSide(props) {
    var _this;

    _classCallCheck(this, RightSide);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RightSide).call(this));
    _this.state = {
      selectedMenu: 0
    };
    return _this;
  }

  _createClass(RightSide, [{
    key: "selectMenu",
    value: function selectMenu(index) {
      this.setState({
        selectedMenu: index
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      console.log(event);
    }
  }, {
    key: "render",
    value: function render() {
      var selectedMenu = this.state.selectedMenu;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "rightside-cont"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title"
      }, "Stats"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "statsCont"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "statsItem left"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "star-img",
        src: "/assets/images/silver.png"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text"
      }, "General")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "statsItem right"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "mongolia",
        src: "/assets/images/mongolia.png"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text"
      }, "1342")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "statsItem left"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaChartLine"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text"
      }, "1200")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "statsItem right"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaPlay"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text"
      }, "250")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clr"
      })));
    }
  }]);

  return RightSide;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (RightSide);

/***/ }),

/***/ "./src/views/pages/Main/components/rightside/rightside.less":
/*!******************************************************************!*\
  !*** ./src/views/pages/Main/components/rightside/rightside.less ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/less-loader/dist/cjs.js!./rightside.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/views/pages/Main/components/rightside/rightside.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/views/pages/Main/components/sidebar/index.js":
/*!**********************************************************!*\
  !*** ./src/views/pages/Main/components/sidebar/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_ink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-ink */ "./node_modules/react-ink/dist/ink.js");
/* harmony import */ var react_ink__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_ink__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





__webpack_require__(/*! ./sidebar.less */ "./src/views/pages/Main/components/sidebar/sidebar.less");

var menuItems = [{
  text: 'Home'
}, {
  text: 'Ranking'
}, {
  text: 'Friends'
}, {
  text: 'Team'
}, {
  text: 'Organizer'
}, {
  text: 'Premium'
}];

var SideBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SideBar, _React$Component);

  function SideBar(props) {
    var _this;

    _classCallCheck(this, SideBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SideBar).call(this));
    _this.state = {
      selectedMenu: 0
    };
    return _this;
  }

  _createClass(SideBar, [{
    key: "selectMenu",
    value: function selectMenu(index) {
      this.setState({
        selectedMenu: index
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var selectedMenu = this.state.selectedMenu;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sidebar-cont"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "logo"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/champsicon.png"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "menu-cont"
      }, menuItems.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: i,
          onClick: _this2.selectMenu.bind(_this2, i),
          className: "menu-item ".concat(selectedMenu === i ? 'active' : null)
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_ink__WEBPACK_IMPORTED_MODULE_2___default.a, null), item.text);
      })));
    }
  }]);

  return SideBar;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SideBar);

/***/ }),

/***/ "./src/views/pages/Main/components/sidebar/sidebar.less":
/*!**************************************************************!*\
  !*** ./src/views/pages/Main/components/sidebar/sidebar.less ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/less-loader/dist/cjs.js!./sidebar.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/views/pages/Main/components/sidebar/sidebar.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/views/pages/Main/components/topmenu/index.js":
/*!**********************************************************!*\
  !*** ./src/views/pages/Main/components/topmenu/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_ink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-ink */ "./node_modules/react-ink/dist/ink.js");
/* harmony import */ var react_ink__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_ink__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





__webpack_require__(/*! ./topmenu.less */ "./src/views/pages/Main/components/topmenu/topmenu.less");

var menuItems = [{
  text: 'Play'
}, {
  text: 'League'
}, {
  text: 'Tournament'
}, {
  text: 'Shop'
}];

var TopMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TopMenu, _React$Component);

  function TopMenu(props) {
    var _this;

    _classCallCheck(this, TopMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TopMenu).call(this));
    _this.state = {
      selectedMenu: 0
    };
    return _this;
  }

  _createClass(TopMenu, [{
    key: "selectMenu",
    value: function selectMenu(index) {
      this.setState({
        selectedMenu: index
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var selectedMenu = this.state.selectedMenu;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "top-menu"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "choose-cont ui jsc alc flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/dota.png"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "menu-cont"
      }, menuItems.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          onClick: _this2.selectMenu.bind(_this2, i),
          className: "menu-items ".concat(selectedMenu === i ? 'active' : null)
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_ink__WEBPACK_IMPORTED_MODULE_2___default.a, null), item.text);
      })));
    }
  }]);

  return TopMenu;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TopMenu);

/***/ }),

/***/ "./src/views/pages/Main/components/topmenu/topmenu.less":
/*!**************************************************************!*\
  !*** ./src/views/pages/Main/components/topmenu/topmenu.less ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/less-loader/dist/cjs.js!./topmenu.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/views/pages/Main/components/topmenu/topmenu.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/views/pages/Main/index.js":
/*!***************************************!*\
  !*** ./src/views/pages/Main/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header */ "./src/views/pages/Main/components/header/index.js");
/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sidebar */ "./src/views/pages/Main/components/sidebar/index.js");
/* harmony import */ var _components_rightside__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/rightside */ "./src/views/pages/Main/components/rightside/index.js");
/* harmony import */ var _components_topmenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/topmenu */ "./src/views/pages/Main/components/topmenu/index.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Routes */ "./src/views/pages/Main/Routes/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









__webpack_require__(/*! ./Main.less */ "./src/views/pages/Main/Main.less");

var Main =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Main, _React$Component);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, _getPrototypeOf(Main).apply(this, arguments));
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_topmenu__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_rightside__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mainBoard"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Routes__WEBPACK_IMPORTED_MODULE_6__["default"], null)));
    }
  }]);

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./src/views/pages/Register/Register.less":
/*!************************************************!*\
  !*** ./src/views/pages/Register/Register.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/less-loader/dist/cjs.js!./Register.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/views/pages/Register/Register.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/views/pages/Register/index.js":
/*!*******************************************!*\
  !*** ./src/views/pages/Register/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Home_Components_Signup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Home/Components/Signup */ "./src/views/pages/Home/Components/Signup/index.js");
/* harmony import */ var _Register_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Register.less */ "./src/views/pages/Register/Register.less");
/* harmony import */ var _Register_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Register_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Countdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Countdown */ "./src/views/pages/Countdown/index.js");
/* harmony import */ var _api_actions_authActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../api/actions/authActions */ "./src/api/actions/authActions.js");
/* harmony import */ var react_date_countdown_timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-date-countdown-timer */ "./node_modules/react-date-countdown-timer/build/index.js");
/* harmony import */ var react_date_countdown_timer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_date_countdown_timer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_s_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-s-alert */ "./node_modules/react-s-alert/index.js");
/* harmony import */ var react_s_alert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_s_alert__WEBPACK_IMPORTED_MODULE_7__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










function sAlert(text) {
  react_s_alert__WEBPACK_IMPORTED_MODULE_7___default.a.success(text, {
    position: 'top-right',
    effect: 'slide',
    timeout: 3000,
    loading: false
  });
}

var Register =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Register, _React$Component);

  function Register(props) {
    var _this;

    _classCallCheck(this, Register);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Register).call(this, props));
    _this.state = {
      loginModal: false,
      signUpModal: true,
      signed: false,
      data: null,
      data2: null,
      loading: false
    };
    return _this;
  }

  _createClass(Register, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "showModal",
    value: function showModal() {
      var loginModal = this.state.loginModal;
      if (loginModal) this.setState({
        loginModal: false
      });else this.setState({
        loginModal: true
      });
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this.setState({
        loginModal: false,
        signUpModal: false
      });
    }
  }, {
    key: "goSignUp",
    value: function goSignUp() {
      this.setState({
        loginModal: false,
        signUpModal: true
      });
    }
  }, {
    key: "isLogin",
    value: function isLogin(data) {
      this.setState({
        signed: true,
        data: data,
        loginModal: false,
        signUpModal: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      var _self$state = self.state,
          loginModal = _self$state.loginModal,
          signUpModal = _self$state.signUpModal,
          signed = _self$state.signed,
          data = _self$state.data,
          data2 = _self$state.data2;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "countDown",
        style: {
          backgroundImage: "url('/assets/images/countdown_bg.jpg')"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "goCharacter characters"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "logo",
        src: "/assets/images/go_logo.png"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "cImg",
        src: "/assets/images/terror.png"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dotaCharacter characters"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "logo",
        src: "/assets/images/dota_logo.png"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "cImg",
        src: "/assets/images/PA.png"
      })), signUpModal ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Home_Components_Signup__WEBPACK_IMPORTED_MODULE_2__["default"], {
        page: true,
        closeModal: function closeModal() {
          return self.closeModal();
        }
      }) : null);
    }
  }]);

  return Register;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Register);

/***/ }),

/***/ "./src/views/pages/Reset/index.js":
/*!****************************************!*\
  !*** ./src/views/pages/Reset/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_date_countdown_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-date-countdown-timer */ "./node_modules/react-date-countdown-timer/build/index.js");
/* harmony import */ var react_date_countdown_timer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_date_countdown_timer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_activity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-activity */ "./node_modules/react-activity/dist/react-activity.js");
/* harmony import */ var react_activity__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_activity__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_s_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-s-alert */ "./node_modules/react-s-alert/index.js");
/* harmony import */ var react_s_alert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_s_alert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var _reset_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reset.less */ "./src/views/pages/Reset/reset.less");
/* harmony import */ var _reset_less__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_reset_less__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _api_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../api/header */ "./src/api/header.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











function sAlert(text) {
  react_s_alert__WEBPACK_IMPORTED_MODULE_4___default.a.error(text, {
    position: 'top-right',
    effect: 'slide',
    timeout: 7000,
    loading: false
  });
}

function sAlert2(text) {
  react_s_alert__WEBPACK_IMPORTED_MODULE_4___default.a.success(text, {
    position: 'top-left',
    effect: 'slide',
    timeout: 7000,
    loading: false
  });
}

var Reset =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Reset, _React$Component);

  function Reset(props) {
    var _this;

    _classCallCheck(this, Reset);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Reset).call(this, props));
    _this.state = {
      username: '',
      pass: '',
      loading: false,
      forgot: false,
      femail: '',
      redirect: false
    };
    return _this;
  }

  _createClass(Reset, [{
    key: "reset",
    value: function reset() {
      var _this2 = this;

      this.setState({
        loading: true
      });
      fetch("http://champs.camp:5000/api/reset_password", {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          new_password: this.state.pass,
          token: window.location.search.slice(6)
        })
      }).then(function (res) {
        switch (res.status) {
          case 200:
            sAlert2('Амжилттай солигдлоо.');

            _this2.setState({
              loading: false,
              redirect: true
            });

            break;

          case 422:
            sAlert('Нууц үгийн орон 6-аас дээш байх ёстой');

            _this2.setState({
              loading: false
            });

            break;
        }

        return res.json();
      }).then(function (json) {})["catch"](function (err) {
        console.log(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      var _self$state = self.state,
          username = _self$state.username,
          pass = _self$state.pass,
          loading = _self$state.loading,
          forgot = _self$state.forgot,
          femail = _self$state.femail;
      var _self$props = self.props,
          closeModal = _self$props.closeModal,
          goSignUp = _self$props.goSignUp;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "loginCont reset"
      }, !this.state.redirect ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "login"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "leftSide side"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/logo_white.png"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "rightSide side"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "centerCont"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title"
      }, "\u041D\u0443\u0443\u0446 \u04AF\u0433 \u0441\u043E\u043B\u0438\u0445"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "inputCont"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text"
      }, "\u0428\u0438\u043D\u044D \u043D\u0443\u0443\u0446 \u04AF\u0433 \u043E\u0440\u0443\u0443\u043B\u043D\u0430 \u0443\u0443."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "password",
        value: pass,
        onChange: function onChange(event) {
          return self.setState({
            pass: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return !loading ? self.reset() : console.log('s');
        }
      }, "\u0421\u043E\u043B\u0438\u0445"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "loaderCont"
      }, loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_activity__WEBPACK_IMPORTED_MODULE_3__["Squares"], {
        color: "#122a37",
        size: 20,
        speed: 1,
        animating: true
      }) : null)))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
        to: "/"
      }));
    }
  }]);

  return Reset;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Reset);

/***/ }),

/***/ "./src/views/pages/Reset/reset.less":
/*!******************************************!*\
  !*** ./src/views/pages/Reset/reset.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/less-loader/dist/cjs.js!./reset.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/views/pages/Reset/reset.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 0:
/*!*******************************************!*\
  !*** multi babel-polyfill ./src/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! babel-polyfill */"./node_modules/babel-polyfill/lib/index.js");
module.exports = __webpack_require__(/*! /Users/jumpdol/Downloads/champs-react/src/index.js */"./src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9kZWZhdWx0Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BhZ2VzL0NvdW50ZG93bi9Db3VudGRvd24ubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcGFnZXMvSG9tZS9Db21wb25lbnRzL0hlYWRlci9IZWFkZXIubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcGFnZXMvSG9tZS9Db21wb25lbnRzL0xvZ2luL0xvZ2luLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BhZ2VzL0hvbWUvQ29tcG9uZW50cy9TaWdudXAvU2lnbnVwLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BhZ2VzL0hvbWUvSG9tZS5sZXNzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wYWdlcy9Mb2dpbi9sb2dpbi5sZXNzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wYWdlcy9NYWluL01haW4ubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcGFnZXMvTWFpbi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcGFnZXMvTWFpbi9jb21wb25lbnRzL3JpZ2h0c2lkZS9yaWdodHNpZGUubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcGFnZXMvTWFpbi9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5sZXNzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wYWdlcy9NYWluL2NvbXBvbmVudHMvdG9wbWVudS90b3BtZW51Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BhZ2VzL1JlZ2lzdGVyL1JlZ2lzdGVyLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BhZ2VzL1Jlc2V0L3Jlc2V0Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9hY3Rpb25zL2F1dGhBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9hcGkvY2hlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9mZXRjaGVyL25ldHdvcmtIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcGkvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcGkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL1ByaXZhdGVSb3V0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2RlZmF1bHQubGVzcz9kN2VkIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcGFnZXMvQ291bnRkb3duL0NvdW50ZG93bi5sZXNzPzZmMGEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BhZ2VzL0NvdW50ZG93bi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcGFnZXMvSG9tZS9Db21wb25lbnRzL0hlYWRlci9IZWFkZXIubGVzcz85NzM2Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wYWdlcy9Ib21lL0NvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wYWdlcy9Ib21lL0NvbXBvbmVudHMvTG9naW4vTG9naW4ubGVzcz8xM2FlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wYWdlcy9Ib21lL0NvbXBvbmVudHMvTG9naW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BhZ2VzL0hvbWUvQ29tcG9uZW50cy9TaWdudXAvU2lnbnVwLmxlc3M/MWM4MCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcGFnZXMvSG9tZS9Db21wb25lbnRzL1NpZ251cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcGFnZXMvSG9tZS9Ib21lLmxlc3M/YzhlYSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcGFnZXMvSG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcGFnZXMvTG9naW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BhZ2VzL0xvZ2luL2xvZ2luLmxlc3M/Mjg1YSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcGFnZXMvTWFpbi9NYWluLmxlc3M/M2NhMiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcGFnZXMvTWFpbi9Sb3V0ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BhZ2VzL01haW4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmxlc3M/ODg3OSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcGFnZXMvTWFpbi9jb21wb25lbnRzL2hlYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcGFnZXMvTWFpbi9jb21wb25lbnRzL3JpZ2h0c2lkZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcGFnZXMvTWFpbi9jb21wb25lbnRzL3JpZ2h0c2lkZS9yaWdodHNpZGUubGVzcz8yZTJkIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wYWdlcy9NYWluL2NvbXBvbmVudHMvc2lkZWJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcGFnZXMvTWFpbi9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5sZXNzP2U3OTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BhZ2VzL01haW4vY29tcG9uZW50cy90b3BtZW51L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wYWdlcy9NYWluL2NvbXBvbmVudHMvdG9wbWVudS90b3BtZW51Lmxlc3M/YzFmMCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcGFnZXMvTWFpbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcGFnZXMvUmVnaXN0ZXIvUmVnaXN0ZXIubGVzcz83ZjRmIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wYWdlcy9SZWdpc3Rlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcGFnZXMvUmVzZXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BhZ2VzL1Jlc2V0L3Jlc2V0Lmxlc3M/ZTZmNiJdLCJuYW1lcyI6WyJ1c2VyTG9naW4iLCJkYXRhIiwibmV0d29ya0hhbmRsZXIiLCJ1cmxzIiwibWV0aG9kIiwiaGVhZGVycyIsImhlYWRlciIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY3JlYXRlVXNlciIsInZlcmlmeVJlZ2lzdGVyIiwiZm9yZ290UGFzc3dvcmQiLCJjaGVzdCIsImV4cG9ydHMiLCJjaGVzdExpc3QiLCJzZXQiLCJnZXQiLCJvcHRpb24iLCJ1cmwiLCJvcHRpb25zIiwic3RhdHVzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInBheWxvYWQiLCJlcnIiLCJhdXRob3JpemF0aW9uIiwidG9rZW4iLCJyZXF1aXJlIiwiYXV0aEFjdGlvbnMiLCJob3N0IiwibG9naW4iLCJpc0xvZ2luIiwiUHJpdmF0ZVJvdXRlIiwiQ29tcG9uZW50IiwiY29tcG9uZW50IiwicmVzdCIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicHJvcHMiLCJSZWFjdERPTSIsInJlbmRlciIsImNyZWF0ZUJyb3dzZXJIaXN0b3J5IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlJvdXRlcyIsIkNvdW50ZG93biIsIkhvbWUiLCJMb2dpblBhZ2UiLCJNYWluIiwiUmVnaXN0ZXIiLCJSZXNldCIsIlJlYWN0IiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImZpcmViYXNlIiwiaW5pdGlhbGl6ZUFwcCIsIlJvb3RWaWV3Iiwic3RhdGUiLCJyZWFkeSIsImhpc3RvcnkiLCJsaW1pdCIsIndpdGhSb3V0ZXIiLCJsb2dpbk1vZGFsIiwic2lnblVwTW9kYWwiLCJzaWduZWQiLCJkYXRhMiIsImxvYWRpbmciLCJjb3BpZWQiLCJzdWNjZXNzIiwic2VsZiIsInNldFN0YXRlIiwiYXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInVzZXIiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZG9jIiwidWlkIiwic2V0SXRlbSIsInNpZ25PdXQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ0cmFuc2l0aW9uIiwicHJvZmlsZV9waWMiLCJ1c2VybmFtZSIsInBvaW50IiwibG9nT3V0IiwiYWxlcnQiLCJzaG93TW9kYWwiLCJtYXJnaW5Ub3AiLCJnb1NpZ25VcCIsImNsb3NlTW9kYWwiLCJIZWFkZXIiLCJzQWxlcnQiLCJ0ZXh0IiwiQWxlcnQiLCJlcnJvciIsInBvc2l0aW9uIiwiZWZmZWN0IiwidGltZW91dCIsInNBbGVydDIiLCJMb2dpbiIsImUiLCJ3aGljaCIsInBhc3MiLCJmb3Jnb3QiLCJmZW1haWwiLCJwYXNzd29yZCIsInNpZ25JbldpdGhDdXN0b21Ub2tlbiIsImZpcmViYXNlQ3VzdG9tVG9rZW4iLCJ0eXBlIiwicHVzaCIsImNvZGUiLCJtZXNzYWdlIiwiZW1haWwiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwib25LZXlQcmVzcyIsIlNpZ25VcCIsInZlcmlmeSIsImZpbGUiLCJpbWFnZVByZXZpZXdVcmwiLCJwaG9uZSIsInBpbiIsInBhc3MyIiwiaXNBdXRoIiwicmVkaXJlY3QiLCJ3aW5kb3ciLCJzZWFyY2giLCJVUkwiLCJocmVmIiwiYyIsInNlYXJjaFBhcmFtcyIsInJlZiIsImxlbmd0aCIsInByb2ZpbGVfcGljdHVyZSIsImVycm9yTWVzc2FnZSIsInBhcmFtIiwidmVyaWZpY2F0aW9uX2NvZGUiLCJwYWdlIiwicHJldmVudERlZmF1bHQiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwiZmlsZXMiLCJvbmxvYWRlbmQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiJGltYWdlUHJldmlldyIsIl9oYW5kbGVJbWFnZUNoYW5nZSIsInNpZ25VcCIsIm1lbnVJdGVtcyIsInNlbGVjdGVkTWVudSIsImluZGV4IiwiUmlnaHRTaWRlIiwiU2lkZUJhciIsIm1hcCIsIml0ZW0iLCJpIiwic2VsZWN0TWVudSIsImJpbmQiLCJUb3BNZW51IiwiQWNjZXB0IiwibmV3X3Bhc3N3b3JkIiwic2xpY2UiLCJyZXNldCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlD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QUE7QUFBakIsMENBVkosRUFXSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUVRcUMsT0FBTyxHQUNILDJEQUFDLHNEQUFEO0FBQVMsYUFBSyxFQUFDLFNBQWY7QUFBeUIsWUFBSSxFQUFFLEVBQS9CO0FBQW1DLGFBQUssRUFBRSxDQUExQztBQUE2QyxpQkFBUyxFQUFFO0FBQXhELFFBREcsR0FFTCxJQUpWLENBWEosQ0FESixDQUpKLENBREosR0E0QkksMkRBQUMseURBQUQ7QUFBVSxVQUFFLEVBQUM7QUFBYixRQTlCWixDQURKO0FBb0NIOzs7O0VBeEZlckIsNENBQUssQ0FBQ3ZCLFM7O0FBNEZYc0Isb0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDckhBLGNBQWMsbUJBQU8sQ0FBQyx1T0FBaUg7O0FBRXZJLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyw0R0FBeUQ7O0FBRTlFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBJbXBvcnRzXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK0NvbmRlbnNlZDozMDAsNDAwLDcwMC5jc3MpO1wiLCBcIlwiXSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNjYW52YXMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kOiAjMjcyNzI3O1xcbn1cXG5odG1sLFxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XFxuICBvdXRsaW5lLXdpZHRoOiAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMTtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuKixcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG4gIG91dGxpbmU6IDA7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuKjpub3QoaW5wdXQuZmllbGQpIHtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQgIWltcG9ydGFudDtcXG4gIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dCAhaW1wb3J0YW50O1xcbiAgLW1vei11c2VyLXNlbGVjdDogdGV4dCAhaW1wb3J0YW50O1xcbiAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0ICFpbXBvcnRhbnQ7XFxuICB1c2VyLXNlbGVjdDogdGV4dCAhaW1wb3J0YW50O1xcbn1cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuI3JlYWN0IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmVsZXYtMSB7XFxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XFxufVxcbi5lbGV2LTIge1xcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xcbn1cXG4uZWxldi0zIHtcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xcbn1cXG4uZWxldi00IHtcXG4gIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XFxufVxcbi5lbGV2LTUge1xcbiAgYm94LXNoYWRvdzogMCAxOXB4IDM4cHggcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDE1cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xcbn1cXG4uY2VudGVyIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgd2lkdGg6IDExODBweDtcXG59XFxuLnVpLmJsb2NrIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4udWkuZnVsbC13aWR0aCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnVpLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLnVpLmZ1bGwge1xcbiAgZmxleDogMTtcXG59XFxuLnVpLm5vLXN0cmV0Y2gge1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbi51aS5jb2x1bW4ge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnVpLmZkciB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG4udWkuZW5kIHtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcbi51aS5qc2Mge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi51aS5qY3NhIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4udWkuamNzYiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi51aS5hbGMge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnVpLm5vLXNocmluayB7XFxuICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xcbn1cXG4udWkuZjEyIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLnVpLmYxMyB7XFxuICBmb250LXNpemU6IDEzcHg7XFxufVxcbi51aS5mMTQge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4udWkuZjE1IHtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDAgMTRweDtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuYnV0dG9uLmRhcmsge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbmJ1dHRvbi5kYXJrLmljb24ge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbmJ1dHRvbi5wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQ6ICMyOTgyOGE7XFxufVxcbmJ1dHRvbi5uby1zaGFkb3cge1xcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5idXR0b246YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwcztcXG59XFxuYnV0dG9uLmljb24ge1xcbiAgd2lkdGg6IDI4cHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgY29sb3I6ICM3Nzc7XFxufVxcbmJ1dHRvbi5iaWcge1xcbiAgaGVpZ2h0OiAzNnB4O1xcbn1cXG5idXR0b24uYmlnLmljb24ge1xcbiAgd2lkdGg6IDM2cHg7XFxufVxcbmJ1dHRvbi5kaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kOiAjZGRkO1xcbiAgb3BhY2l0eTogMC40O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbmJ1dHRvbi5kaXNhYmxlZC5wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQ6ICMyOTgyOGE7XFxufVxcbmJ1dHRvbi5jaXJjbGUge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG59XFxuYnV0dG9uLmluZGljYXRvcjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNXB4O1xcbiAgcmlnaHQ6IDVweDtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiAxMnB4O1xcbiAgYmFja2dyb3VuZDogI0ZGMDAwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5zLWFsZXJ0LWVycm9yIHtcXG4gIGJhY2tncm91bmQ6ICMxMjJhMzc5MTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY291bnREb3duIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uY291bnREb3duIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgY29sb3I6ICMzMzM7XFxuICBtYXJnaW46IDA7XFxufVxcbi5jb3VudERvd24gLnJhaS1hY3Rpdml0eS1pbmRpY2F0b3Ige1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuLmNvdW50RG93biAubGlua0NvbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5jb3VudERvd24gLmxpbmtDb250IC5saW5rIHtcXG4gIG1hcmdpbi1yaWdodDogMzBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY1ZTtcXG4gIHBhZGRpbmc6IDdweCAxNXB4O1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuLmNvdW50RG93biAubGlua0NvbnQgYnV0dG9uIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuLmNvdW50RG93biAubGlua0NvbnQgLmNvcGllZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogLTE3cHg7XFxuICBmb250LXNpemU6IDEwcHg7XFxufVxcbi5jb3VudERvd24gLmhlYWRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDQwcHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG4uY291bnREb3duIC5oZWFkZXIgLnVzZXJDb250IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jb3VudERvd24gLmhlYWRlciAudXNlckNvbnQgLnByb0ltZyB7XFxuICB3aWR0aDogNTZweDtcXG4gIGhlaWdodDogNTZweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmZjNztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxufVxcbi5jb3VudERvd24gLmhlYWRlciAudXNlckNvbnQgLnByb0ltZyBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuLmNvdW50RG93biAuaGVhZGVyIC51c2VyTmFtZSB7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbWFyZ2luLWJvdHRvbTogOXB4O1xcbn1cXG4uY291bnREb3duIC5oZWFkZXIgLnVzZXJQb2ludCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmNvdW50RG93biAuaGVhZGVyIC51c2VyUG9pbnQgc3BhbiB7XFxuICBiYWNrZ3JvdW5kOiAjZTBlMDU5O1xcbiAgY29sb3I6ICNiNTI3Mjc7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBwYWRkaW5nOiAxcHggMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4uY291bnREb3duIC5oZWFkZXIgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6ICMwMDAwMDAzYjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4uY291bnREb3duIGJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAyOHB4O1xcbn1cXG4uY291bnREb3duIC5nb0NoYXJhY3RlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxODBweCk7XFxufVxcbi5jb3VudERvd24gLmdvQ2hhcmFjdGVyIC5jSW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLmNvdW50RG93biAuZ29DaGFyYWN0ZXIgLmxvZ28ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgdG9wOiAtMTAwcHg7XFxuICBsZWZ0OiAxOSU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLmNvdW50RG93biAuZG90YUNoYXJhY3RlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTQwcHgpO1xcbn1cXG4uY291bnREb3duIC5kb3RhQ2hhcmFjdGVyIC5jSW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLmNvdW50RG93biAuZG90YUNoYXJhY3RlciAubG9nbyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNjZweDtcXG4gIHRvcDogLTU3cHg7XFxuICByaWdodDogMzElO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5jb3VudERvd24gLmxvZ29Db250IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMjVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jb3VudERvd24gLmxvZ29Db250IGltZyB7XFxuICB3aWR0aDogMjUwcHg7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLmNvdW50RG93biAuZGVzYyB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiA1NnB4O1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAjMGUwZTBlO1xcbn1cXG4uY291bnREb3duIC5vZG9tZXRlci1ibG9jayB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIuNXZ3O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAjMGUwZTBlO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gIC5jb3VudERvd24gLmxpbmtDb250IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5jb3VudERvd24gLmxpbmtDb250IC5saW5rIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmNWU7XFxuICAgIHBhZGRpbmc6IDdweCAxNXB4O1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgfVxcbiAgLmNvdW50RG93biAubGlua0NvbnQgLmNvcGllZCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgLyogcmlnaHQ6IDA7ICovXFxuICAgIC8qIGJvdHRvbTogLTE3cHg7ICovXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogNnB4O1xcbiAgICBib3R0b206IDA7XFxuICB9XFxuICAuY291bnREb3duIC5oZWFkZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxN3B4KTtcXG4gICAgcGFkZGluZzogN3B4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuICAuY291bnREb3duIC5oZWFkZXIgLnVzZXJDb250IC5wcm9JbWcge1xcbiAgICB3aWR0aDogNDNweDtcXG4gICAgaGVpZ2h0OiA0M3B4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmYzc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxuICB9XFxuICAuY291bnREb3duIC5oZWFkZXIgLnVzZXJOYW1lIHtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBtYXJnaW4tYm90dG9tOiA5cHg7XFxuICB9XFxuICAuY291bnREb3duIC5oZWFkZXIgLnVzZXJQb2ludCB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAuY291bnREb3duIC5oZWFkZXIgLnVzZXJQb2ludCBzcGFuIHtcXG4gICAgYmFja2dyb3VuZDogI2UwZTA1OTtcXG4gICAgY29sb3I6ICNiNTI3Mjc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgcGFkZGluZzogMXB4IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gIH1cXG4gIC5jb3VudERvd24gLmRlc2Mge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4ICMwZTBlMGU7XFxuICB9XFxuICAuY291bnREb3duIC5vZG9tZXRlci1ibG9jayB7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gIH1cXG4gIC5jb3VudERvd24gLmxvZ29Db250IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDI1cHg7XFxuICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gIH1cXG4gIC5jb3VudERvd24gLmxvZ29Db250IGltZyB7XFxuICAgIHdpZHRoOiAyNDBweDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB9XFxuICAuY291bnREb3duIC5nb0NoYXJhY3RlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAuY291bnREb3duIC5kb3RhQ2hhcmFjdGVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmxvZ2luQ29udCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6ICMxMjJhMzc7XFxufVxcbi5sb2dpbkNvbnQgLmxvZ2luIHtcXG4gIHdpZHRoOiA4MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xcbn1cXG4ubG9naW5Db250IC5sb2dpbiAubGVmdFNpZGUge1xcbiAgYmFja2dyb3VuZDogIzEyMmEzNztcXG59XFxuLmxvZ2luQ29udCAubG9naW4gLmxlZnRTaWRlIGltZyB7XFxuICB3aWR0aDogMjcwcHg7XFxufVxcbi5sb2dpbkNvbnQgLmxvZ2luIC5zaWRlIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmxvZ2luQ29udCAubG9naW4gLnJpZ2h0U2lkZSAuY2VudGVyQ29udCB7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpO1xcbn1cXG4ubG9naW5Db250IC5sb2dpbiAucmlnaHRTaWRlIC5jZW50ZXJDb250IC50aXRsZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcbn1cXG4ubG9naW5Db250IC5sb2dpbiAucmlnaHRTaWRlIC5jZW50ZXJDb250IC5pbnB1dENvbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5sb2dpbkNvbnQgLmxvZ2luIC5yaWdodFNpZGUgLmNlbnRlckNvbnQgLmlucHV0Q29udCAudGV4dCB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbn1cXG4ubG9naW5Db250IC5sb2dpbiAucmlnaHRTaWRlIC5jZW50ZXJDb250IC5pbnB1dENvbnQgaW5wdXQge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcXG4gIHBhZGRpbmc6IDZweCA4cHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmxvZ2luQ29udCAubG9naW4gLnJpZ2h0U2lkZSAuY2VudGVyQ29udCBidXR0b24ge1xcbiAgYmFja2dyb3VuZDogIzEyMmEzNztcXG4gIGNvbG9yOiAjZmZmO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjdweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5sb2dpbkNvbnQgLmxvZ2luIC5yaWdodFNpZGUgLmNlbnRlckNvbnQgLnNpZ251cCB7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBtYXJnaW4tYm90dG9tOiA2cHg7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuLmxvZ2luQ29udCAubG9naW4gLnJpZ2h0U2lkZSAuY2VudGVyQ29udCAuZm9yZ290IHtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIG1hcmdpbi1ib3R0b206IDZweDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG4ubG9naW5Db250IC5sb2dpbiAucmlnaHRTaWRlIC5jZW50ZXJDb250IC5sb2FkZXJDb250IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgbWFyZ2luLXRvcDogLTExcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG4ubG9naW5Db250IC5sb2dpbiAucmlnaHRTaWRlIC5jZW50ZXJDb250IC5sb2FkZXJDb250IC5yYWktc3F1YXJlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuLmxvZ2luQ29udCAuYmFjayB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6ICMxMjJhMzc7XFxuICB6LWluZGV4OiAtMTAwMDtcXG4gIGJhY2tncm91bmQ6ICMxMjJhMzcyOTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAubG9naW5Db250IC5sb2dpbiB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNXB4KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcXG4gIH1cXG4gIC5sb2dpbkNvbnQgLmxvZ2luIC5sZWZ0U2lkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5sb2dpbkNvbnQgLmxvZ2luIC5yaWdodFNpZGUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDMwcHggMzBweDtcXG4gIH1cXG4gIC5sb2dpbkNvbnQgLmxvZ2luIC5yaWdodFNpZGUgLmNlbnRlckNvbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5sb2dpbkNvbnQgLmxvZ2luIC5yaWdodFNpZGUgLmNlbnRlckNvbnQgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZDogIzEyMmEzNztcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyN3B4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIC8qIHBhZGRpbmc6IDEycHggMDsgKi9cXG4gICAgaGVpZ2h0OiAzN3B4O1xcbiAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubG9naW5Db250IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogIzEyMmEzNztcXG59XFxuLmxvZ2luQ29udCAubG9naW4ge1xcbiAgd2lkdGg6IDgwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XFxufVxcbi5sb2dpbkNvbnQgLmxvZ2luIC5sZWZ0U2lkZSB7XFxuICBiYWNrZ3JvdW5kOiAjMTIyYTM3O1xcbn1cXG4ubG9naW5Db250IC5sb2dpbiAubGVmdFNpZGUgaW1nIHtcXG4gIHdpZHRoOiAyNzBweDtcXG59XFxuLmxvZ2luQ29udCAubG9naW4gLnNpZGUge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAzMHB4IDIwcHg7XFxufVxcbi5sb2dpbkNvbnQgLmxvZ2luIC5yaWdodFNpZGUgLmNlbnRlckNvbnQge1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcXG59XFxuLmxvZ2luQ29udCAubG9naW4gLnJpZ2h0U2lkZSAuY2VudGVyQ29udCAucHJvZmlsZUNvbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDdweCAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubG9naW5Db250IC5sb2dpbiAucmlnaHRTaWRlIC5jZW50ZXJDb250IC5wcm9maWxlQ29udCAuY2Mge1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxOHB4O1xcbiAgbGVmdDogN3B4O1xcbiAgY29sb3I6ICM3Nzc7XFxufVxcbi5sb2dpbkNvbnQgLmxvZ2luIC5yaWdodFNpZGUgLmNlbnRlckNvbnQgLnByb2ZpbGVDb250IGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG4gIGJhY2tncm91bmQ6ICNlNmU2ZTY7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgcGFkZGluZzogMHB4IDIycHg7XFxuICBib3JkZXItcmFkaXVzOiAxM3B4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMzFweDtcXG4gIGhlaWdodDogMjNweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmxvZ2luQ29udCAubG9naW4gLnJpZ2h0U2lkZSAuY2VudGVyQ29udCAucHJvZmlsZUNvbnQgbGFiZWwgaW5wdXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmxvZ2luQ29udCAubG9naW4gLnJpZ2h0U2lkZSAuY2VudGVyQ29udCAucHJvZmlsZUNvbnQgLmltZ1ByZXZpZXcge1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJhY2tncm91bmQ6ICNlNmU2ZTY7XFxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmxvZ2luQ29udCAubG9naW4gLnJpZ2h0U2lkZSAuY2VudGVyQ29udCAucHJvZmlsZUNvbnQgLmltZ1ByZXZpZXcgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcbi5sb2dpbkNvbnQgLmxvZ2luIC5yaWdodFNpZGUgLmNlbnRlckNvbnQgLnRpdGxlIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxufVxcbi5sb2dpbkNvbnQgLmxvZ2luIC5yaWdodFNpZGUgLmNlbnRlckNvbnQgLmlucHV0Q29udCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmxvZ2luQ29udCAubG9naW4gLnJpZ2h0U2lkZSAuY2VudGVyQ29udCAuaW5wdXRDb250IC50ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxufVxcbi5sb2dpbkNvbnQgLmxvZ2luIC5yaWdodFNpZGUgLmNlbnRlckNvbnQgLmlucHV0Q29udCBpbnB1dCB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XFxuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xcbiAgcGFkZGluZzogNnB4IDhweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubG9naW5Db250IC5sb2dpbiAucmlnaHRTaWRlIC5jZW50ZXJDb250IGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiAjMTIyYTM3O1xcbiAgY29sb3I6ICNmZmY7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiAyN3B4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLmxvZ2luQ29udCAubG9naW4gLnJpZ2h0U2lkZSAuY2VudGVyQ29udCAuc2lnbnVwIHtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIG1hcmdpbi1ib3R0b206IDZweDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG4ubG9naW5Db250IC5sb2dpbiAucmlnaHRTaWRlIC5jZW50ZXJDb250IC5mb3Jnb3Qge1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcbi5sb2dpbkNvbnQgLmxvZ2luIC5yaWdodFNpZGUgLmNlbnRlckNvbnQgLmxvYWRlckNvbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBtYXJnaW4tdG9wOiAtMTFweDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcbi5sb2dpbkNvbnQgLmxvZ2luIC5yaWdodFNpZGUgLmNlbnRlckNvbnQgLmxvYWRlckNvbnQgLnJhaS1zcXVhcmUge1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG4ubG9naW5Db250IC5sb2dpbiAucmlnaHRTaWRlIC5jZW50ZXJDb250IC5kb3VibGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmxvZ2luQ29udCAubG9naW4gLnJpZ2h0U2lkZSAuY2VudGVyQ29udCAuZG91YmxlIC5pbnB1dENvbnQge1xcbiAgd2lkdGg6IGNhbGMoNTAlIC0gNnB4KTtcXG59XFxuLmxvZ2luQ29udCAuYmFjayB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6ICMxMjJhMzc7XFxuICB6LWluZGV4OiAtMTAwMDtcXG4gIGJhY2tncm91bmQ6ICMxMjJhMzcyOTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAubG9naW5Db250IC5sb2dpbiB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNXB4KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcXG4gIH1cXG4gIC5sb2dpbkNvbnQgLmxvZ2luIC5sZWZ0U2lkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5sb2dpbkNvbnQgLmxvZ2luIC5yaWdodFNpZGUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDMwcHggMzBweDtcXG4gIH1cXG4gIC5sb2dpbkNvbnQgLmxvZ2luIC5yaWdodFNpZGUgLmNlbnRlckNvbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5sb2dpbkNvbnQgLmxvZ2luIC5yaWdodFNpZGUgLmNlbnRlckNvbnQgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZDogIzEyMmEzNztcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyN3B4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIC8qIHBhZGRpbmc6IDEycHggMDsgKi9cXG4gICAgaGVpZ2h0OiAzN3B4O1xcbiAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaG9tZVBhZ2UyIHtcXG4gIGJhY2tncm91bmQ6ICMxYTFhMWE7XFxufVxcbi5ob21lUGFnZTIgLmhlYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWExYTtcXG4gIHBhZGRpbmctdG9wOiAxM3B4O1xcbiAgcGFkZGluZy1ib3R0b206IDEzcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAxO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhvbWVQYWdlMiAuaGVhZGVyIC5oZWFkZXJMb2dvIHtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmhvbWVQYWdlMiAuaGVhZGVyIC5tZW51LWxpc3Qge1xcbiAgcmlnaHQ6IDIwcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcbi5ob21lUGFnZTIgLmhlYWRlciAubWVudS1saXN0IC5saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tbGVmdDogOTAwcHg7XFxufVxcbi5ob21lUGFnZTIgLmhlYWRlciAubWVudS1saXN0IC5saXN0IGxpIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmhvbWVQYWdlMiAuaGVhZGVyIC5tZW51LWxpc3QgLmxpc3QgbGk6bGFzdC1jaGlsZCB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG4uaG9tZVBhZ2UyIC5oZWFkZXIgLm1lbnUtbGlzdCBhIHtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4uaG9tZVBhZ2UyIC5oZWFkZXItYmcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDgwMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWExYTtcXG4gIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmctbG9nby5wbmcnKSBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDExMCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTUwcHggMTAwcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmhvbWVQYWdlMiAuaGVhZGVyLWJnIC5kaXNwbGF5LWZsZXgge1xcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogODAlICFpbXBvcnRhbnQ7XFxuICB3aWR0aDogNTUlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJFeG8yIFJlZ3VsYXJcXFwiO1xcbiAgbGV0dGVyLXNwYWNpbmc6IGF1dG87XFxufVxcbi5ob21lUGFnZTIgLmhlYWRlci1iZyAuZGlzcGxheS1mbGV4IC5sZXR0ZXItc3BhY2Uge1xcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXG59XFxuLmhvbWVQYWdlMiAuaGVhZGVyLWJnIC5kaXNwbGF5LWZsZXggLmJ0bi1wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQ6ICMwMEE5OUQ7XFxuICBib3JkZXItY29sb3I6ICMwMEE5OUQ7XFxuICB3aWR0aDogMTUwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiA2cHggMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3O1xcbn1cXG4uaG9tZVBhZ2UyIC5oZWFkZXItYmcgLmRpc3BsYXktZmxleCBoMSB7XFxuICBsZXR0ZXItc3BhY2luZzogMjBweDtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XFxuICBtYXJnaW46IDA7XFxufVxcbi5ob21lUGFnZTIgLmhlYWRlci1iZyAuZGlzcGxheS1mbGV4IHAge1xcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBtYXJnaW4tdG9wOiAwO1xcbn1cXG4uaG9tZVBhZ2UyIC5jb250YWluZXIxIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uaG9tZVBhZ2UyIC5jb250YWluZXIxIC5tb2RlcyB7XFxuICBtYXJnaW4tbGVmdDogMTMlO1xcbiAgd2lkdGg6IDg3JTtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XFxufVxcbi5ob21lUGFnZTIgLmNvbnRhaW5lcjEgLm1vZGVzIC5wbGF0Zm9ybSB7XFxuICBsZXR0ZXItc3BhY2luZzogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbn1cXG4uaG9tZVBhZ2UyIC5jb250YWluZXIxIC5tb2RlcyAucm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXJnaW4tbGVmdDogLTE1cHg7XFxufVxcbi5ob21lUGFnZTIgLmNvbnRhaW5lcjEgLm1vZGVzIC5jb2xvciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMjUlO1xcbn1cXG4uaG9tZVBhZ2UyIC5jb250YWluZXIxIC5tb2RlcyAuY29sb3IgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA2MzZweDtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uaG9tZVBhZ2UyIC5jb250YWluZXIxIC5tb2RlcyAuY29sb3IgLm92ZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBsaW5lLWhlaWdodDogMjtcXG4gIG9wYWNpdHk6IDE7XFxuICB0b3A6IDA7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgIzAyMDAyNCAwJSwgIzAwMDAwMCAwJSwgIzAwMDAwMCAwJSwgcmdiYSgyNTUsIDI1MywgMjUzLCAwKSAxMDAlKTtcXG59XFxuLmhvbWVQYWdlMiAuY29udGFpbmVyMSAubW9kZXMgLmNvbG9yIHAge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxufVxcbi5ob21lUGFnZTIgLmNvbnRhaW5lcjEgLm1vZGVzIC5jb2xvciAudmVydDEge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IC02NXB4O1xcbiAgYm90dG9tOiAxNiU7XFxuICBsZXR0ZXItc3BhY2luZzogOHB4O1xcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcbn1cXG4uaG9tZVBhZ2UyIC5jb250YWluZXIxIC5tb2RlcyAuY29sb3IgLnZlcnQyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAtMjBweDtcXG4gIGJvdHRvbTogMTAlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDhweDtcXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcXG59XFxuLmhvbWVQYWdlMiAuY29udGFpbmVyMSAubW9kZXMgLmNvbG9yIC52ZXJ0MyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogLTEwMHB4O1xcbiAgYm90dG9tOiAyMyU7XFxuICBsZXR0ZXItc3BhY2luZzogOHB4O1xcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcbn1cXG4uaG9tZVBhZ2UyIC5jb250YWluZXIxIC5tb2RlcyAuY29sb3IgLnZlcnQ0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAtNjVweDtcXG4gIGJvdHRvbTogMTYlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDhweDtcXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcXG59XFxuLmhvbWVQYWdlMiAuc2xpZGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmhvbWVQYWdlMiAuc2xpZGUgLmNhcHRpb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAyJTtcXG4gIHJpZ2h0OiAyJTtcXG4gIHotaW5kZXg6IDk5OTk7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmhvbWVQYWdlMiAuc2xpZGUgLnNsaWRlciAuaXRlbTEge1xcbiAgd2lkdGg6IDQ5LjYlO1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbi5ob21lUGFnZTIgLnNsaWRlIC5zbGlkZXIgLml0ZW0xIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogODAwcHg7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb2JqZWN0LXBvc2l0aW9uOiAxMDAlO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLmhvbWVQYWdlMiAuc2xpZGUgLnNsaWRlciAuaXRlbTIge1xcbiAgd2lkdGg6IDQ5LjYlO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG4uaG9tZVBhZ2UyIC5zbGlkZSAuc2xpZGVyIC5pdGVtMiBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDgwMHB4O1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG9iamVjdC1wb3NpdGlvbjogNzAlO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLmhvbWVQYWdlMiAuc2xpZGUgLnNsaWRlciAuY2xlYXIge1xcbiAgY2xlYXI6IGJvdGg7XFxufVxcbi5ob21lUGFnZTIgLnJvdy1nYW1lcyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICNFNkU2RTY7XFxufVxcbi5ob21lUGFnZTIgLnJvdy1nYW1lcyBoMSB7XFxuICBjb2xvcjogIzFhMWExYTtcXG59XFxuLmhvbWVQYWdlMiAucm93LWdhbWVzIC5wYWRkaW5nIHtcXG4gIHBhZGRpbmc6IDEwMHB4O1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuLmhvbWVQYWdlMiAucm93LWdhbWVzIC5wYWRkaW5nMSB7XFxuICBwYWRkaW5nOiAxMDBweDtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXJnaW4tbGVmdDogNTAlO1xcbn1cXG4uaG9tZVBhZ2UyIC5yb3ctZ2FtZXMgcCB7XFxuICBjb2xvcjogIzFhMWExYTtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG4uaG9tZVBhZ2UyIC5mb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBiYWNrZ3JvdW5kOiAjMWExYTFhO1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nLXRvcDogNjBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbn1cXG4uaG9tZVBhZ2UyIC5jb250YWluZXIge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXgtd2lkdGg6IDc1JTtcXG59XFxuLmhvbWVQYWdlMiAuY29udGFpbmVyIC5yb3cge1xcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi5ob21lUGFnZTIgLmNvbnRhaW5lciAuY29sLWxnIHtcXG4gIHdpZHRoOiAyNSU7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMzMzMzMzM7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbn1cXG4uaG9tZVBhZ2UyIC5jb250YWluZXIgLmNvbC1sZyBuYXYge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG59XFxuLmhvbWVQYWdlMiAuY29udGFpbmVyIC5jb2wtbGcgaDUge1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBtYXJnaW46IDBweDtcXG59XFxuLmhvbWVQYWdlMiAuY29udGFpbmVyIC5jb2wtbGcgdWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLXRvcDogMTNweDtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG59XFxuLmhvbWVQYWdlMiAuY29udGFpbmVyIC5jb2wtbGcgbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuLmhvbWVQYWdlMiAuY29udGFpbmVyIC5jb2wtbGcgbGk6bGFzdC1jaGlsZCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG59XFxuLmhvbWVQYWdlMiAuY29udGFpbmVyIC5jb2wtbGcgcCB7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxufVxcbi5ob21lUGFnZTIgLmNvbnRhaW5lciAuY29sLWxnIC5mb3JtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uaG9tZVBhZ2UyIC5jb250YWluZXIgLmNvbC1sZyAuaW5wdXQtbWV0aG9kIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcbiAgYmFja2dyb3VuZDogIzM0M2E0MDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzNDNhNDA7XFxuICBoZWlnaHQ6IDMxcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG59XFxuLmhvbWVQYWdlMiAuY29udGFpbmVyIC5jb2wtbGctbGFzdCBoNSB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogIzg4ODtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICBsaW5lLWhlaWdodDogMS4yO1xcbn1cXG4uaG9tZVBhZ2UyIC5jb250YWluZXIgLmNvbC1sZy1sYXN0IGg2IHtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtZmFtaWx5OiAnRXhvMiBSZWd1bGFyJztcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICBmb250LXdlaWdodDogMTAwO1xcbn1cXG4uaG9tZVBhZ2UyIC5jb250YWluZXIgLmNvbC1sZy1sYXN0IGg1IHtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtZmFtaWx5OiAnRXhvMiBSZWd1bGFyJztcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICBmb250LXdlaWdodDogMTAwO1xcbn1cXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuSGVhZGVyIHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxNTBweCk7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kOiAjMTUzNjQ4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLkhlYWRlciAuc2VhcmNoLWNvbnQgaW5wdXQge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmMztcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIHBhZGRpbmctbGVmdDogMTNweDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucmlnaHRzaWRlLWNvbnQge1xcbiAgYmFja2dyb3VuZDogIzEyMmEzNztcXG4gIHdpZHRoOiAyMjBweDtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTIwcHgpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBwYWRkaW5nOiAxNXB4O1xcbn1cXG4ucmlnaHRzaWRlLWNvbnQgLnRpdGxlIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLnJpZ2h0c2lkZS1jb250IC5zdGF0c0NvbnQge1xcbiAgcGFkZGluZy10b3A6IDE1cHg7XFxufVxcbi5yaWdodHNpZGUtY29udCAuc3RhdHNDb250IC5zdGF0c0l0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDEycHggMDtcXG4gIHdpZHRoOiBjYWxjKDUwJSAtIDVweCk7XFxufVxcbi5yaWdodHNpZGUtY29udCAuc3RhdHNDb250IC5zdGF0c0l0ZW0gLmljb24ge1xcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XFxuICB3aWR0aDogMjJweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5yaWdodHNpZGUtY29udCAuc3RhdHNDb250IC5zdGF0c0l0ZW0gLmljb24gaW1nIHtcXG4gIHdpZHRoOiAyMnB4O1xcbn1cXG4ucmlnaHRzaWRlLWNvbnQgLnN0YXRzQ29udCAuc3RhdHNJdGVtIC5pY29uIHN2ZyB7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBjb2xvcjogI2QwZDBkMDtcXG59XFxuLnJpZ2h0c2lkZS1jb250IC5zdGF0c0NvbnQgLnN0YXRzSXRlbSAudGV4dCB7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLnJpZ2h0c2lkZS1jb250IC5zdGF0c0NvbnQgLnN0YXRzSXRlbS5sZWZ0IHtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG4ucmlnaHRzaWRlLWNvbnQgLnN0YXRzQ29udCAuc3RhdHNJdGVtLnJpZ2h0IHtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuLnJpZ2h0c2lkZS1jb250IC5zdGF0c0NvbnQgLmNsciB7XFxuICBjbGVhcjogYm90aDtcXG59XFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNpZGViYXItY29udCB7XFxuICBiYWNrZ3JvdW5kOiAjMTIyYTM3O1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuLnNpZGViYXItY29udCAubG9nbyB7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zaWRlYmFyLWNvbnQgLmxvZ28gaW1nIHtcXG4gIHdpZHRoOiA4NXB4O1xcbn1cXG4uc2lkZWJhci1jb250IC5tZW51LWNvbnQgLm1lbnUtaXRlbSB7XFxuICBoZWlnaHQ6IDQ3cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBwYWRkaW5nLWxlZnQ6IDM0cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5zaWRlYmFyLWNvbnQgLm1lbnUtY29udCAubWVudS1pdGVtLmFjdGl2ZSB7XFxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM1Y2M5ZGY7XFxufVxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50b3AtbWVudSB7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMTUwcHgpO1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgYmFja2dyb3VuZDogIzEyMmEzNztcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiA1MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi50b3AtbWVudSAuY2hvb3NlLWNvbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDcwcHg7XFxuICBiYWNrZ3JvdW5kOiAjMTIyYTM3O1xcbn1cXG4udG9wLW1lbnUgLmNob29zZS1jb250IGltZyB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTBweDtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcbi50b3AtbWVudSAubWVudS1jb250IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi50b3AtbWVudSAubWVudS1jb250IC5tZW51LWl0ZW1zIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAwIDI1cHg7XFxufVxcbi50b3AtbWVudSAubWVudS1jb250IC5tZW51LWl0ZW1zLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiAjMTQzNjQ4O1xcbn1cXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaG9tZVBhZ2Uge1xcbiAgYmFja2dyb3VuZDogIzAwMDtcXG59XFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmxvZ2luQ29udCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6ICMxMjJhMzc7XFxufVxcbi5sb2dpbkNvbnQucmVzZXQge1xcbiAgYmFja2dyb3VuZDogIzMxNTM2NTtcXG59XFxuLmxvZ2luQ29udCAubG9naW4ge1xcbiAgd2lkdGg6IDgwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XFxufVxcbi5sb2dpbkNvbnQgLmxvZ2luIC5sZWZ0U2lkZSB7XFxuICBiYWNrZ3JvdW5kOiAjMTIyYTM3O1xcbn1cXG4ubG9naW5Db250IC5sb2dpbiAubGVmdFNpZGUgaW1nIHtcXG4gIHdpZHRoOiAyNzBweDtcXG59XFxuLmxvZ2luQ29udCAubG9naW4gLnNpZGUge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAzMHB4IDIwcHg7XFxufVxcbi5sb2dpbkNvbnQgLmxvZ2luIC5yaWdodFNpZGUgLmNlbnRlckNvbnQge1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcXG59XFxuLmxvZ2luQ29udCAubG9naW4gLnJpZ2h0U2lkZSAuY2VudGVyQ29udCAucHJvZmlsZUNvbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDdweCAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubG9naW5Db250IC5sb2dpbiAucmlnaHRTaWRlIC5jZW50ZXJDb250IC5wcm9maWxlQ29udCAuY2Mge1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxOHB4O1xcbiAgbGVmdDogN3B4O1xcbiAgY29sb3I6ICM3Nzc7XFxufVxcbi5sb2dpbkNvbnQgLmxvZ2luIC5yaWdodFNpZGUgLmNlbnRlckNvbnQgLnByb2ZpbGVDb250IGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG4gIGJhY2tncm91bmQ6ICNlNmU2ZTY7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgcGFkZGluZzogMHB4IDIycHg7XFxuICBib3JkZXItcmFkaXVzOiAxM3B4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMzFweDtcXG4gIGhlaWdodDogMjNweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmxvZ2luQ29udCAubG9naW4gLnJpZ2h0U2lkZSAuY2VudGVyQ29udCAucHJvZmlsZUNvbnQgbGFiZWwgaW5wdXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmxvZ2luQ29udCAubG9naW4gLnJpZ2h0U2lkZSAuY2VudGVyQ29udCAucHJvZmlsZUNvbnQgLmltZ1ByZXZpZXcge1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJhY2tncm91bmQ6ICNlNmU2ZTY7XFxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmxvZ2luQ29udCAubG9naW4gLnJpZ2h0U2lkZSAuY2VudGVyQ29udCAucHJvZmlsZUNvbnQgLmltZ1ByZXZpZXcgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcbi5sb2dpbkNvbnQgLmxvZ2luIC5yaWdodFNpZGUgLmNlbnRlckNvbnQgLnRpdGxlIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxufVxcbi5sb2dpbkNvbnQgLmxvZ2luIC5yaWdodFNpZGUgLmNlbnRlckNvbnQgLmlucHV0Q29udCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmxvZ2luQ29udCAubG9naW4gLnJpZ2h0U2lkZSAuY2VudGVyQ29udCAuaW5wdXRDb250IC50ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxufVxcbi5sb2dpbkNvbnQgLmxvZ2luIC5yaWdodFNpZGUgLmNlbnRlckNvbnQgLmlucHV0Q29udCBpbnB1dCB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XFxuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xcbiAgcGFkZGluZzogNnB4IDhweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubG9naW5Db250IC5sb2dpbiAucmlnaHRTaWRlIC5jZW50ZXJDb250IGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiAjMTIyYTM3O1xcbiAgY29sb3I6ICNmZmY7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiAyN3B4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLmxvZ2luQ29udCAubG9naW4gLnJpZ2h0U2lkZSAuY2VudGVyQ29udCAuc2lnbnVwIHtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIG1hcmdpbi1ib3R0b206IDZweDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG4ubG9naW5Db250IC5sb2dpbiAucmlnaHRTaWRlIC5jZW50ZXJDb250IC5mb3Jnb3Qge1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcbi5sb2dpbkNvbnQgLmxvZ2luIC5yaWdodFNpZGUgLmNlbnRlckNvbnQgLmxvYWRlckNvbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBtYXJnaW4tdG9wOiAtMTFweDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcbi5sb2dpbkNvbnQgLmxvZ2luIC5yaWdodFNpZGUgLmNlbnRlckNvbnQgLmxvYWRlckNvbnQgLnJhaS1zcXVhcmUge1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG4ubG9naW5Db250IC5sb2dpbiAucmlnaHRTaWRlIC5jZW50ZXJDb250IC5kb3VibGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmxvZ2luQ29udCAubG9naW4gLnJpZ2h0U2lkZSAuY2VudGVyQ29udCAuZG91YmxlIC5pbnB1dENvbnQge1xcbiAgd2lkdGg6IGNhbGMoNTAlIC0gNnB4KTtcXG59XFxuLmxvZ2luQ29udCAuYmFjayB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6ICMxMjJhMzc7XFxuICB6LWluZGV4OiAtMTAwMDtcXG4gIGJhY2tncm91bmQ6ICMxMjJhMzcyOTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAubG9naW5Db250IC5sb2dpbiB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNXB4KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcXG4gIH1cXG4gIC5sb2dpbkNvbnQgLmxvZ2luIC5sZWZ0U2lkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5sb2dpbkNvbnQgLmxvZ2luIC5yaWdodFNpZGUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDMwcHggMzBweDtcXG4gIH1cXG4gIC5sb2dpbkNvbnQgLmxvZ2luIC5yaWdodFNpZGUgLmNlbnRlckNvbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5sb2dpbkNvbnQgLmxvZ2luIC5yaWdodFNpZGUgLmNlbnRlckNvbnQgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZDogIzEyMmEzNztcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyN3B4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIC8qIHBhZGRpbmc6IDEycHggMDsgKi9cXG4gICAgaGVpZ2h0OiAzN3B4O1xcbiAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuIiwiaW1wb3J0ICogYXMgdXJscyBmcm9tIFwiLi4vdXJsc1wiO1xuaW1wb3J0IHsgaGVhZGVyIH0gZnJvbSBcIi4uL2hlYWRlclwiO1xuaW1wb3J0IG5ldHdvcmtIYW5kbGVyIGZyb20gXCIuLi9mZXRjaGVyL25ldHdvcmtIYW5kbGVyXCI7XG5cbmV4cG9ydCBjb25zdCB1c2VyTG9naW4gPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgIHJldHVybiBuZXR3b3JrSGFuZGxlcihcbiAgICAgICAgdXJscy5sb2dpbixcbiAgICAgICAge1xuICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcihmYWxzZSksXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgICAgICB9XG4gICAgKVxufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVVzZXIgPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgIHJldHVybiBuZXR3b3JrSGFuZGxlcihcbiAgICAgICAgdXJscy5jcmVhdGVVc2VyLFxuICAgICAgICB7XG4gICAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyKGZhbHNlKSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgICAgIH1cbiAgICApXG59O1xuXG5leHBvcnQgY29uc3QgdmVyaWZ5UmVnaXN0ZXIgPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgIHJldHVybiBuZXR3b3JrSGFuZGxlcihcbiAgICAgICAgdXJscy52ZXJpZnlSZWdpc3RlcixcbiAgICAgICAge1xuICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcihmYWxzZSksXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgICAgICB9XG4gICAgKVxufTtcblxuZXhwb3J0IGNvbnN0IGZvcmdvdFBhc3N3b3JkID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgICByZXR1cm4gbmV0d29ya0hhbmRsZXIoXG4gICAgICAgIHVybHMuZm9yZ290UGFzc3dvcmQsXG4gICAgICAgIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXIoZmFsc2UpLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICAgICAgfVxuICAgIClcbn07XG5cblxuXG4iLCJsZXQgY2hlc3QgPSBleHBvcnRzO1xubGV0IGNoZXN0TGlzdCA9IHt9O1xuXG5jaGVzdC5zZXQgPSBmdW5jdGlvbihkYXRhKXtcbiAgICBjaGVzdExpc3QgPSB7XG4gICAgICAgIC4uLmNoZXN0TGlzdCxcbiAgICAgICAgLi4uZGF0YVxuICAgIH1cbn07XG5cbmNoZXN0LmdldCA9IGZ1bmN0aW9uKG9wdGlvbil7XG4gICAgcmV0dXJuIGNoZXN0TGlzdFtvcHRpb25dO1xufTsiLCJpbXBvcnQgZmV0Y2ggZnJvbSBcInVuZmV0Y2hcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmV0d29ya0hhbmRsZXIodXJsLG9wdGlvbnMpe1xuXG4gICAgbGV0IHN0YXR1cyA9IG51bGw7XG4gICAgLy9jb25zb2xlLmxvZyh1cmwpO1xuICAgIHJldHVybiBmZXRjaCh1cmwsb3B0aW9ucykudGhlbigocmVzKT0+e1xuICAgICAgICAvL2NvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIHN0YXR1cyA9IHJlcy5zdGF0dXM7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgIH0pLnRoZW4oKGpzb24pPT57XG4gICAgICAgIC8vY29uc29sZS5sb2coanNvbik7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYXlsb2FkOiBqc29uLFxuICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXNcbiAgICAgICAgfVxuICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgIC8vY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBheWxvYWQ6IG51bGwsXG4gICAgICAgICAgICBzdGF0dXM6IHN0YXR1c1xuICAgICAgICB9XG4gICAgfSlcblxufVxuIiwiaW1wb3J0IHsgY2hlc3QgfSBmcm9tIFwiLi9pbmRleFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaGVhZGVyKGF1dGhvcml6YXRpb24sdG9rZW4pe1xuICAgIGlmIChhdXRob3JpemF0aW9uKXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgXCJjYWNoZS1jb250cm9sXCI6IFwibm8tY2FjaGVcIixcbiAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIHRva2VuXG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgXCJjYWNoZS1jb250cm9sXCI6IFwibm8tY2FjaGVcIixcbiAgICAgICAgfTtcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IGNoZXN0ID0gcmVxdWlyZShcIi4vY2hlc3RcIik7XG5leHBvcnQgY29uc3QgYXV0aEFjdGlvbnMgPSByZXF1aXJlKFwiLi9hY3Rpb25zL2F1dGhBY3Rpb25zXCIpO1xuIiwiaW1wb3J0IHsgY2hlc3QgfSBmcm9tIFwiLi9pbmRleFwiO1xuY29uc3QgaG9zdCA9IFwiaHR0cDovL2NoYW1wcy5jYW1wOjUwMDBcIjtcblxuZXhwb3J0IGNvbnN0IGxvZ2luID0gaG9zdCArIFwiL2FwaS9sb2dpblwiO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVVzZXIgPSBob3N0ICsgXCIvYXBpL3JlZ2lzdGVyXCI7XG5leHBvcnQgY29uc3QgdmVyaWZ5UmVnaXN0ZXIgPSBob3N0ICsgXCIvYXBpL3ZlcmlmeV9yZWdpc3RlclwiO1xuZXhwb3J0IGNvbnN0IGZvcmdvdFBhc3N3b3JkID0gaG9zdCArIFwiL2FwaS9mb3Jnb3RfcGFzc3dvcmRcIjtcblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gXCIuLi8uLi92aWV3cy9wYWdlcy9Db3VudGRvd25cIjtcbmxldCBpc0xvZ2luID0gZmFsc2U7XG5cbmNvbnN0IFByaXZhdGVSb3V0ZSA9ICh7Y29tcG9uZW50OiBDb21wb25lbnQsIC4uLnJlc3R9KSA9PiB7XG4gICAgaWYoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlVzZXJcIikpICE9PSBudWxsKSB7XG4gICAgICAgIGlzTG9naW4gPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVXNlclwiKSkpXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHJlc3QpXG4gICAgc3dpdGNoKHJlc3QubG9jYXRpb24ucGF0aG5hbWUpIHtcbiAgICAgICAgY2FzZSAnL2xvZ2luJzpcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFJvdXRlIHsuLi5yZXN0fSByZW5kZXI9e3Byb3BzID0+IChcbiAgICAgICAgICAgICAgICAgICAgIWlzTG9naW4gP1xuICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6IDxSZWRpcmVjdCB0bz1cIi9tYWluXCIgLz5cbiAgICAgICAgICAgICAgICApfSAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJy9tYWluJzpcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFJvdXRlIHsuLi5yZXN0fSByZW5kZXI9e3Byb3BzID0+IChcbiAgICAgICAgICAgICAgICAgICAgaXNMb2dpbiA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDogPFJlZGlyZWN0IHRvPVwiL2xvZ2luXCIgLz5cbiAgICAgICAgICAgICAgICApfSAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpdmF0ZVJvdXRlOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyLCBSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgUm9vdFZpZXcgZnJvbSBcIi4vdmlld3NcIjtcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XG5cbmltcG9ydCBcIi4vc3R5bGVzL2RlZmF1bHQubGVzc1wiXG5cblxuUmVhY3RET00ucmVuZGVyKFxuICAgIDxCcm93c2VyUm91dGVyPlxuICAgICAgICA8Um9vdFZpZXcgaGlzdG9yeT17Y3JlYXRlQnJvd3Nlckhpc3Rvcnl9IC8+XG4gICAgPC9Ccm93c2VyUm91dGVyPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlYWN0XCIpXG4pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm91dGUsIFN3aXRjaCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi4vdmlld3MvcGFnZXMvSG9tZVwiO1xuaW1wb3J0IE1haW4gZnJvbSBcIi4uL3ZpZXdzL3BhZ2VzL01haW5cIjtcbmltcG9ydCBDb3VudGRvd24gZnJvbSBcIi4uL3ZpZXdzL3BhZ2VzL0NvdW50ZG93blwiO1xuaW1wb3J0IFJlZ2lzdGVyIGZyb20gXCIuLi92aWV3cy9wYWdlcy9SZWdpc3RlclwiO1xuaW1wb3J0IExvZ2luUGFnZSBmcm9tIFwiLi4vdmlld3MvcGFnZXMvTG9naW5cIjtcbmltcG9ydCBSZXNldCBmcm9tIFwiLi4vdmlld3MvcGFnZXMvUmVzZXRcIjtcbmltcG9ydCBQcml2YXRlUm91dGUgZnJvbSBcIi4uL2hlbHBlcnMvUHJpdmF0ZVJvdXRlXCI7XG5cbmNsYXNzIFJvdXRlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIGNvbXBvbmVudD17Q291bnRkb3dufSAvPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2hvbWVcIiBjb21wb25lbnQ9e0hvbWV9IC8+XG4gICAgICAgICAgICAgICAgPFByaXZhdGVSb3V0ZSBwYXRoPVwiL2xvZ2luXCIgY29tcG9uZW50PXtMb2dpblBhZ2V9IC8+XG4gICAgICAgICAgICAgICAgPFByaXZhdGVSb3V0ZSBwYXRoPVwiL21haW5cIiBjb21wb25lbnQ9e01haW59IC8+XG4gICAgICAgICAgICAgICAgPFByaXZhdGVSb3V0ZSBwYXRoPVwiL3JlZ2lzdGVyXCIgY29tcG9uZW50PXtSZWdpc3Rlcn0gLz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hcGkvcmVzZXRfcGFzc3dvcmQvXCIgY29tcG9uZW50PXtSZXNldH0gLz5cbiAgICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZXM7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RlZmF1bHQubGVzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGVmYXVsdC5sZXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGVmYXVsdC5sZXNzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgUm91dGVzIGZyb20gXCIuLi9yb3V0ZXNcIjtcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xubGV0IGZpcmViYXNlQ29uZmlnID0ge1xuICAgIGFwaUtleTogXCJBSXphU3lBbm1oWldPLWVxVVF6MFhsZnhoc2NqWmFSZFc5dzAwdmdcIixcbiAgICBhdXRoRG9tYWluOiBcImNoYW1wcy1jYW1wLWRvdGEtYm90LmZpcmViYXNlYXBwLmNvbVwiLFxuICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vY2hhbXBzLWNhbXAtZG90YS1ib3QuZmlyZWJhc2Vpby5jb21cIixcbiAgICBwcm9qZWN0SWQ6IFwiY2hhbXBzLWNhbXAtZG90YS1ib3RcIixcbiAgICBzdG9yYWdlQnVja2V0OiBcImNoYW1wcy1jYW1wLWRvdGEtYm90LmFwcHNwb3QuY29tXCIsXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiOTYwMzcyNzcyNjkwXCIsXG4gICAgYXBwSWQ6IFwiMTo5NjAzNzI3NzI2OTA6d2ViOjU2MWMxZDE2NDkxNDE0ZmZcIlxufTtcblxuZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG5pbXBvcnQgJ3JlYWN0LWFjdGl2aXR5L2Rpc3QvcmVhY3QtYWN0aXZpdHkuY3NzJztcbmltcG9ydCBBbGVydCBmcm9tICdyZWFjdC1zLWFsZXJ0JztcbmltcG9ydCAncmVhY3Qtcy1hbGVydC9kaXN0L3MtYWxlcnQtZGVmYXVsdC5jc3MnO1xuaW1wb3J0ICdyZWFjdC1zLWFsZXJ0L2Rpc3Qvcy1hbGVydC1jc3MtZWZmZWN0cy9zbGlkZS5jc3MnO1xuaW1wb3J0ICdyZWFjdC1zLWFsZXJ0L2Rpc3Qvcy1hbGVydC1jc3MtZWZmZWN0cy9zY2FsZS5jc3MnO1xuaW1wb3J0ICdyZWFjdC1zLWFsZXJ0L2Rpc3Qvcy1hbGVydC1jc3MtZWZmZWN0cy9ib3VuY3lmbGlwLmNzcyc7XG5pbXBvcnQgJ3JlYWN0LXMtYWxlcnQvZGlzdC9zLWFsZXJ0LWNzcy1lZmZlY3RzL2ZsaXAuY3NzJztcbmltcG9ydCAncmVhY3Qtcy1hbGVydC9kaXN0L3MtYWxlcnQtY3NzLWVmZmVjdHMvZ2VuaWUuY3NzJztcbmltcG9ydCAncmVhY3Qtcy1hbGVydC9kaXN0L3MtYWxlcnQtY3NzLWVmZmVjdHMvamVsbHkuY3NzJztcbmltcG9ydCAncmVhY3Qtcy1hbGVydC9kaXN0L3MtYWxlcnQtY3NzLWVmZmVjdHMvc3RhY2tzbGlkZS5jc3MnO1xuXG5jbGFzcyBSb290VmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHJlYWR5OiBmYWxzZSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICBjb25zdCB7IHJlYWR5fSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuaGlzdG9yeSlcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCA+XG4gICAgICAgICAgICAgICAgPEFsZXJ0IHN0YWNrPXt7bGltaXQ6IDF9fSAvPlxuICAgICAgICAgICAgICAgIDxSb3V0ZXMgaGlzdG9yeT17dGhpcy5wcm9wcy5oaXN0b3J5fSAvPlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihSb290Vmlldyk7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0NvdW50ZG93bi5sZXNzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Db3VudGRvd24ubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0NvdW50ZG93bi5sZXNzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7d2l0aFJvdXRlciwgTGluaywgUmVkaXJlY3R9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgRGF0ZUNvdW50ZG93biBmcm9tICdyZWFjdC1kYXRlLWNvdW50ZG93bi10aW1lcic7XG5pbXBvcnQgKiBhcyBhdXRoQWN0aW9ucyBmcm9tICcuLi8uLi8uLi9hcGkvYWN0aW9ucy9hdXRoQWN0aW9ucyc7XG5pbXBvcnQgUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAgZnJvbSAncmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwJztcbmltcG9ydCB7Q29weVRvQ2xpcGJvYXJkfSBmcm9tICdyZWFjdC1jb3B5LXRvLWNsaXBib2FyZCc7XG5cbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuaW1wb3J0ICdmaXJlYmFzZS9hdXRoJztcbmltcG9ydCAnZmlyZWJhc2UvZmlyZXN0b3JlJztcblxuaW1wb3J0IFwiLi9Db3VudGRvd24ubGVzc1wiXG5pbXBvcnQgTG9naW4gZnJvbSBcIi4uL0hvbWUvQ29tcG9uZW50cy9Mb2dpblwiO1xuaW1wb3J0IFNpZ25VcCBmcm9tIFwiLi4vSG9tZS9Db21wb25lbnRzL1NpZ251cFwiO1xuaW1wb3J0IHtTcXVhcmVzfSBmcm9tIFwicmVhY3QtYWN0aXZpdHlcIjtcblxuY2xhc3MgQ291bnRkb3duIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxvZ2luTW9kYWw6ZmFsc2UsXG4gICAgICAgICAgICBzaWduVXBNb2RhbDpmYWxzZSxcbiAgICAgICAgICAgIHNpZ25lZDpmYWxzZSxcbiAgICAgICAgICAgIGRhdGE6bnVsbCxcbiAgICAgICAgICAgIGRhdGEyOm51bGwsXG4gICAgICAgICAgICBsb2FkaW5nOmZhbHNlLFxuICAgICAgICAgICAgY29waWVkOmZhbHNlLFxuICAgICAgICAgICAgc3VjY2VzczpmYWxzZVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBzZWxmLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGxvYWRpbmc6dHJ1ZSxcbiAgICAgICAgICAgIGxvZ2luTW9kYWw6ZmFsc2UsXG4gICAgICAgICAgICBzaWduVXBNb2RhbDpmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbG9hZGluZzp0cnVlLFxuICAgICAgICAgICAgbG9naW5Nb2RhbDpmYWxzZSxcbiAgICAgICAgICAgIHNpZ25VcE1vZGFsOmZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgICAgZmlyZWJhc2UuYXV0aCgpLm9uQXV0aFN0YXRlQ2hhbmdlZChmdW5jdGlvbih1c2VyKSB7XG4gICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgIGlmKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJVc2VyXCIpKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJDaGFtcF9Vc2Vyc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmRvYyh1c2VyLnVpZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGRvYyk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEyOmRvYy5kYXRhKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25lZDp0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOkpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJVc2VyXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzpmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6ZmFsc2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNob3dNb2RhbCgpIHtcbiAgICAgICAgY29uc3QgeyBsb2dpbk1vZGFsIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBpZihsb2dpbk1vZGFsKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbG9naW5Nb2RhbDpmYWxzZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBsb2dpbk1vZGFsOnRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICB9XG4gICAgY2xvc2VNb2RhbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsb2dpbk1vZGFsOmZhbHNlLFxuICAgICAgICAgICAgc2lnblVwTW9kYWw6ZmFsc2UsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnb1NpZ25VcCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsb2dpbk1vZGFsOmZhbHNlLFxuICAgICAgICAgICAgc2lnblVwTW9kYWw6dHJ1ZVxuICAgICAgICB9KVxuICAgIH1cbiAgICBpc0xvZ2luKGRhdGEpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaWduZWQ6dHJ1ZSxcbiAgICAgICAgICAgIGRhdGE6ZGF0YSxcbiAgICAgICAgICAgIGxvZ2luTW9kYWw6ZmFsc2UsXG4gICAgICAgICAgICBzaWduVXBNb2RhbDpmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbG9nT3V0KCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlVzZXJcIixudWxsKTtcbiAgICAgICAgZmlyZWJhc2UuYXV0aCgpLnNpZ25PdXQoKS50aGVuKCgpPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc2lnbmVkOmZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHsgbG9naW5Nb2RhbCwgc2lnblVwTW9kYWwsIHNpZ25lZCwgZGF0YSwgZGF0YTIsIGxvYWRpbmcgfSA9IHNlbGYuc3RhdGU7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnREb3duXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6YHVybCgnL2Fzc2V0cy9pbWFnZXMvY291bnRkb3duX2JnLmpwZycpYH19PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2lnbmVkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RyYW5zaXRpb246J2FsbCAxMHMgZWFzZS1pbi1vdXQnfX0gY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlckNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvSW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhMiAhPT0gbnVsbCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtkYXRhMi5wcm9maWxlX3BpY31gfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApOm51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlckluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJOYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlclBvaW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEyICE9PSBudWxsID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEyLnBvaW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApOm51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoYW1wcyBwb2ludFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+IHRoaXMubG9nT3V0KCl9PtCT0LDRgNCw0YU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApOm51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb0NoYXJhY3RlciBjaGFyYWN0ZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtcImxvZ29cIn0gc3JjPXtcIi9hc3NldHMvaW1hZ2VzL2dvX2xvZ28ucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtcImNJbWdcIn0gc3JjPXtcIi9hc3NldHMvaW1hZ2VzL3RlcnJvci5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvdGFDaGFyYWN0ZXIgY2hhcmFjdGVyc1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17XCJsb2dvXCJ9IHNyYz17XCIvYXNzZXRzL2ltYWdlcy9kb3RhX2xvZ28ucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtcImNJbWdcIn0gc3JjPXtcIi9hc3NldHMvaW1hZ2VzL1BBLnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY1wiPlxuICAgICAgICAgICAgICAgICAgICDQkdC10YLQsCDRhdGD0LLQuNC70LHQsNGAXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPERhdGVDb3VudGRvd24gbG9jYWxlcz17WyfQltC40LsnLCfQodCw0YAnLCfQpdC+0L3QvtCzJywn0KbQsNCzJywn0JzQuNC90YPRgicsJ9Ch0LXQutGD0L3QtCddfSBsb2NhbGVzX3BsdXJhbD17WyfQltC40LsnLCfQodCw0YAnLCfQpdC+0L3QvtCzJywn0KbQsNCzJywn0JzQuNC90YPRgicsJ9Ch0LXQutGD0L3QtCddfSBkYXRlVG89J0F1Z3VzdCA1LCAyMDE5IDE5OjAwOjAwIEdNVCswODowMCcgY2FsbGJhY2s9eygpPT5hbGVydCgnSGVsbG8nKX0gIC8+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzaWduZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtDb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0dHA6Ly9jaGFtcHMuY2FtcC9yZWdpc3Rlcj9yZWZpZD17ZGF0YS51c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkIHRleHQ9e2BodHRwOi8vY2hhbXBzLmNhbXAvcmVnaXN0ZXI/cmVmaWQ9JHtkYXRhLnVzZXJuYW1lfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+IHRoaXMuc2V0U3RhdGUoe2NvcGllZDogdHJ1ZX0pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj7Qm9C40L3QuiDRhdGD0YPQu9Cw0YU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvcGllZFwiPnt0aGlzLnN0YXRlLmNvcGllZCA/IChcItCQ0LzQttC40LvRgtGC0LDQuSDRhdGD0YPQu9Cw0LPQtNC70LDQsFwiKTpudWxsfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICk6KFxuICAgICAgICAgICAgICAgICAgICAgICAgIWxvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+IHNlbGYuc2hvd01vZGFsKCl9PtCd0Y3QstGC0YDRjdGFPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICApOihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3F1YXJlcyBzdHlsZT17e21hcmdpblRvcDonMTAwcHgnfX0gY29sb3I9XCIjZmZmXCIgc2l6ZT17MjB9IHNwZWVkPXsxfSBhbmltYXRpbmc9e3RydWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsb2dpbk1vZGFsID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPExvZ2luIGlzTG9naW49eyhkYXRhKT0+IHRoaXMuaXNMb2dpbihkYXRhKX0gZ29TaWduVXA9eygpPT4gc2VsZi5nb1NpZ25VcCgpfSBjbG9zZU1vZGFsPXsoKT0+IHNlbGYuc2hvd01vZGFsKCl9IC8+XG4gICAgICAgICAgICAgICAgICAgICk6bnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNpZ25VcE1vZGFsID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFNpZ25VcCB0eXBlPVwibW9kYWxcIiBjbG9zZU1vZGFsPXsoKT0+IHNlbGYuY2xvc2VNb2RhbCgpfSAvPlxuICAgICAgICAgICAgICAgICAgICApOm51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvQ29udFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17XCIvYXNzZXRzL2ltYWdlcy9jaGFtcHNfbG9nbzEucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd247IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0hlYWRlci5sZXNzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9IZWFkZXIubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0hlYWRlci5sZXNzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7d2l0aFJvdXRlciwgTGluaywgUmVkaXJlY3R9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmltcG9ydCAnLi9IZWFkZXIubGVzcydcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKXtcbiAgICAgICAgY29uc3QgeyBzaG93TW9kYWwgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2xvZ28yLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbGllbnQg0YLQsNGC0LDRhVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKT0+IHNob3dNb2RhbCgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQndGN0LLRgtGA0Y3RhVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTG9naW4ubGVzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTG9naW4ubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0xvZ2luLmxlc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHt3aXRoUm91dGVyLCBMaW5rLCBSZWRpcmVjdH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBEYXRlQ291bnRkb3duIGZyb20gJ3JlYWN0LWRhdGUtY291bnRkb3duLXRpbWVyJztcbmltcG9ydCAqIGFzIGF1dGhBY3Rpb25zIGZyb20gJy4uLy4uLy4uLy4uLy4uL2FwaS9hY3Rpb25zL2F1dGhBY3Rpb25zJztcbmltcG9ydCB7IFNxdWFyZXMgfSBmcm9tICdyZWFjdC1hY3Rpdml0eSc7XG5pbXBvcnQgQWxlcnQgZnJvbSAncmVhY3Qtcy1hbGVydCc7XG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJztcbmltcG9ydCAnZmlyZWJhc2UvYXV0aCc7XG5pbXBvcnQgXCIuL0xvZ2luLmxlc3NcIlxuXG5mdW5jdGlvbiBzQWxlcnQodGV4dCkge1xuICAgIEFsZXJ0LmVycm9yKHRleHQsIHtcbiAgICAgICAgcG9zaXRpb246ICd0b3AtcmlnaHQnLFxuICAgICAgICBlZmZlY3Q6ICdzbGlkZScsXG4gICAgICAgIHRpbWVvdXQ6IDMwMDAsXG4gICAgICAgIGxvYWRpbmc6ZmFsc2UsXG4gICAgfSk7XG59XG5mdW5jdGlvbiBzQWxlcnQyKHRleHQpIHtcbiAgICBBbGVydC5zdWNjZXNzKHRleHQsIHtcbiAgICAgICAgcG9zaXRpb246ICd0b3AtcmlnaHQnLFxuICAgICAgICBlZmZlY3Q6ICdzbGlkZScsXG4gICAgICAgIHRpbWVvdXQ6IDYwMDAsXG4gICAgICAgIGxvYWRpbmc6ZmFsc2UsXG4gICAgfSk7XG59XG5cbmNsYXNzIExvZ2luIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB1c2VybmFtZTogJycsXG4gICAgICAgICAgICBwYXNzOiAnJyxcbiAgICAgICAgICAgIGxvYWRpbmc6ZmFsc2UsXG4gICAgICAgICAgICBmb3Jnb3Q6ZmFsc2UsXG4gICAgICAgICAgICBmZW1haWw6JydcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvZ2luKCkge1xuICAgICAgICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzLCBsb2FkaW5nIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGxvYWRpbmc6dHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgYXV0aEFjdGlvbnMudXNlckxvZ2luKHtcbiAgICAgICAgICAgIHVzZXJuYW1lOnVzZXJuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQ6cGFzc1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgc3dpdGNoIChyZXMuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgY2FzZSA0MDA6XG4gICAgICAgICAgICAgICAgICAgIHNBbGVydCgn0JzRjdC00Y3RjdC70LvRjdGNINCx0q/RgNGN0L0g0L7RgNGD0YPQu9C90LAg0YPRgycpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6ZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDIyOlxuICAgICAgICAgICAgICAgICAgICBzQWxlcnQoJ9Cl0Y3RgNGN0LPQu9GN0LPRhyDQvtC70LTRgdC+0L3Qs9Kv0LknKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOmZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQwNDpcbiAgICAgICAgICAgICAgICAgICAgc0FsZXJ0KCfQpdGN0YDRjdCz0LvRjdCz0YfQuNC50L0g0L3RjdGAINGN0YHQstGN0Lsg0L3Rg9GD0YYg0q/QsyDQsdGD0YDRg9GDINCx0LDQudC90LAnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOmZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQwMTpcbiAgICAgICAgICAgICAgICAgICAgc0FsZXJ0KCfQpdGN0YDRjdCz0LvRjdCz0YfQuNC50L0g0L3RjdGAINGN0YHQstGN0Lsg0L3Rg9GD0YYg0q/QsyDQsdGD0YDRg9GDINCx0LDQudC90LAnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOmZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDIwMDpcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXIgPSByZXMucGF5bG9hZDtcbiAgICAgICAgICAgICAgICAgICAgZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhDdXN0b21Ub2tlbihyZXMucGF5bG9hZC5maXJlYmFzZUN1c3RvbVRva2VuKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzpmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMucHJvcHMudHlwZSA9PT0gJ2xvZ2luLXBhZ2UnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvbWFpbi9cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pc0xvZ2luKHVzZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLmNvZGUsZXJyb3IubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGVycilcbiAgICAgICAgfSlcbiAgICB9XG4gICAgZm9yZ290UGFzc3dvcmQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZm9yZ290OnRydWVcbiAgICAgICAgfSlcbiAgICB9XG4gICAgZm9yZ290KCApe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGxvYWRpbmc6dHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgYXV0aEFjdGlvbnMuZm9yZ290UGFzc3dvcmQoe1xuICAgICAgICAgICAgZW1haWw6dGhpcy5zdGF0ZS5mZW1haWwsXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChyZXMuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgc0FsZXJ0KCfQkdKv0YDRgtCz0Y3Qs9C00Y3RjdCz0q/QuSBlLW1haWwg0LHQsNC50L3QsC4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6ZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDIyOlxuICAgICAgICAgICAgICAgICAgICAgICAgc0FsZXJ0KCfQpdGN0YDRjdCz0LvRjdCz0Ycg0L7Qu9C00YHQvtC90LPSr9C5Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOmZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQwNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNBbGVydCgn0KXRjdGA0Y3Qs9C70Y3Qs9GH0LjQudC9INC90Y3RgCDRjdGB0LLRjdC7INC90YPRg9GGINKv0LMg0LHRg9GA0YPRgyDQsdCw0LnQvdCwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOmZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDIwMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNBbGVydDIoJ0VtYWlsINGF0LDRj9Cz0LDQsCDRiNCw0LvQs9Cw0L3QsCDRg9GDLicpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOmZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICB9KVxuICAgIH1cbiAgICBvbktleVByZXNzID0gKGUpID0+IHtcbiAgICAgICAgaWYoZS53aGljaCA9PT0gMTMpIHtcbiAgICAgICAgICAgIHRoaXMubG9naW4oKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKXtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmhpc3RvcnkpXG4gICAgICAgIGNvbnN0IHsgdXNlcm5hbWUsIHBhc3MsIGxvYWRpbmcsIGZvcmdvdCwgZmVtYWlsIH0gPSBzZWxmLnN0YXRlO1xuICAgICAgICBjb25zdCB7IGNsb3NlTW9kYWwsIGdvU2lnblVwIH0gPSBzZWxmLnByb3BzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbkNvbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFNpZGUgc2lkZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9sb2dvX3doaXRlLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0U2lkZSBzaWRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yZ290ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlckNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQndGD0YPRhiDSr9CzINGB0Y3RgNCz0Y3RjdGFXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRDb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEUtbWFpbCDRhdCw0Y/Qs9Cw0LAg0L7RgNGD0YPQu9C90LAg0YPRgy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17ZmVtYWlsfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZWxmLnNldFN0YXRlKHtmZW1haWw6ZXZlbnQudGFyZ2V0LnZhbHVlfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PiBzZWxmLmZvcmdvdCgpfT7QodGN0YDQs9GN0Y3RhTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJDb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNxdWFyZXMgY29sb3I9XCIjMTIyYTM3XCIgc2l6ZT17MjB9IHNwZWVkPXsxfSBhbmltYXRpbmc9e3RydWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk6bnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKT0+IHNlbGYuc2V0U3RhdGUoe2ZvcmdvdDpmYWxzZX0pfSBjbGFzc05hbWU9XCJzaWdudXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQkdGD0YbQsNGFXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTooXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyQ29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCd0Y3QstGC0YDRjdGFXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRDb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCd0Y3QstGC0YDRjdGFINC90Y3RgFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt1c2VybmFtZX0gb25DaGFuZ2U9eyhldmVudCkgPT4gc2VsZi5zZXRTdGF0ZSh7dXNlcm5hbWU6ZXZlbnQudGFyZ2V0LnZhbHVlfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRDb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCd0YPRg9GGINKv0LNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25LZXlQcmVzcz17dGhpcy5vbktleVByZXNzfSB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc30gb25DaGFuZ2U9eyhldmVudCkgPT4gc2VsZi5zZXRTdGF0ZSh7cGFzczpldmVudC50YXJnZXQudmFsdWV9KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+ICFsb2FkaW5nID8gKHNlbGYubG9naW4oKSk6KGNvbnNvbGUubG9nKCdzJykpfT7QndGN0LLRgtGA0Y3RhTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJDb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNxdWFyZXMgY29sb3I9XCIjMTIyYTM3XCIgc2l6ZT17MjB9IHNwZWVkPXsxfSBhbmltYXRpbmc9e3RydWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk6bnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKT0+IGdvU2lnblVwKCl9IGNsYXNzTmFtZT1cInNpZ251cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCR0q/RgNGC0LPSr9Kv0LvRjdGFXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCk9PiB0aGlzLmZvcmdvdFBhc3N3b3JkKCl9IGNsYXNzTmFtZT1cImZvcmdvdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCd0YPRg9GGINKv0LPRjdGNINC80LDRgNGC0YHQsNC9INGD0YM/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT4gY2xvc2VNb2RhbCgpfSAgY2xhc3NOYW1lPVwiYmFjayBlbGV2LTNcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihMb2dpbik7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1NpZ251cC5sZXNzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TaWdudXAubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1NpZ251cC5sZXNzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7d2l0aFJvdXRlciwgTGluaywgUmVkaXJlY3R9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgRGF0ZUNvdW50ZG93biBmcm9tICdyZWFjdC1kYXRlLWNvdW50ZG93bi10aW1lcic7XG5pbXBvcnQgKiBhcyBhdXRoQWN0aW9ucyBmcm9tICcuLi8uLi8uLi8uLi8uLi9hcGkvYWN0aW9ucy9hdXRoQWN0aW9ucyc7XG5cbmltcG9ydCBcIi4vU2lnbnVwLmxlc3NcIlxuaW1wb3J0IHtTcXVhcmVzfSBmcm9tIFwicmVhY3QtYWN0aXZpdHlcIjtcbmltcG9ydCBBbGVydCBmcm9tIFwicmVhY3Qtcy1hbGVydFwiO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5pbXBvcnQgJ2ZpcmViYXNlL2F1dGgnO1xuXG5mdW5jdGlvbiBzQWxlcnQodGV4dCkge1xuICAgIEFsZXJ0LmVycm9yKHRleHQsIHtcbiAgICAgICAgcG9zaXRpb246ICd0b3AtcmlnaHQnLFxuICAgICAgICBlZmZlY3Q6ICdzbGlkZScsXG4gICAgICAgIHRpbWVvdXQ6IDcwMDAsXG4gICAgICAgIGxvYWRpbmc6ZmFsc2UsXG4gICAgfSk7XG59XG5mdW5jdGlvbiBzQWxlcnQyKHRleHQpIHtcbiAgICBBbGVydC5zdWNjZXNzKHRleHQsIHtcbiAgICAgICAgcG9zaXRpb246ICd0b3AtbGVmdCcsXG4gICAgICAgIGVmZmVjdDogJ3NsaWRlJyxcbiAgICAgICAgdGltZW91dDogNzAwMCxcbiAgICAgICAgbG9hZGluZzpmYWxzZSxcbiAgICB9KTtcbn1cblxuY2xhc3MgU2lnblVwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgICAgICAgIHBhc3M6ICcnLFxuICAgICAgICAgICAgZmlsZTogJycsXG4gICAgICAgICAgICBpbWFnZVByZXZpZXdVcmw6ICcnLFxuICAgICAgICAgICAgZW1haWw6JycsXG4gICAgICAgICAgICBwaG9uZTonJyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6ZmFsc2UsXG4gICAgICAgICAgICBwaW46JycsXG4gICAgICAgICAgICBsb2FkaW5nOmZhbHNlLFxuICAgICAgICAgICAgcGFzczI6JyAnLFxuICAgICAgICAgICAgaXNBdXRoOnRydWUsXG4gICAgICAgICAgICByZWRpcmVjdDpmYWxzZVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggIT09IFwiXCIpIHtcbiAgICAgICAgICAgIGxldCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgICAgIGxldCBjID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJyZWZpZFwiKTtcbiAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHJlZjpjLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBzaWduVXAoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbG9hZGluZzp0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzLCBlbWFpbCwgcGhvbmUsIGltYWdlUHJldmlld1VybCwgcmVmLCBwYXNzMiB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgaWYocGFzcyA9PT0gcGFzczIpIHtcbiAgICAgICAgICAgaWYocGFzcy5sZW5ndGggPCA2KSB7XG4gICAgICAgICAgICAgICBzQWxlcnQoJ9Cd0YPRg9GGINKv0LMgNi3QsNCw0YEg0LTRjdGN0Ygg0L7RgNC+0L3RgtC+0Lkg0LHQsNC50YUg0ZHRgdGC0L7QuS4nKTtcbiAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6ZmFsc2VcbiAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgYXV0aEFjdGlvbnMuY3JlYXRlVXNlcih7XG4gICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6dXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgICAgZW1haWw6ZW1haWwsXG4gICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6cGFzcyxcbiAgICAgICAgICAgICAgICAgICBwaG9uZTpwaG9uZSxcbiAgICAgICAgICAgICAgICAgICBwcm9maWxlX3BpY3R1cmU6aW1hZ2VQcmV2aWV3VXJsLFxuICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocmVzLnN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyMDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6dHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzpmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0MDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLnBheWxvYWQuZXJyb3JNZXNzYWdlID09PSBcIlBob25lIG51bWJlciBpcyBhbHJlYWR5IGluIHVzZS5cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzQWxlcnQoJ9CR0q/RgNGC0LPRjdC70LPSr9C5INC00YPQs9Cw0LDRgCDQsNGI0LjQs9C70LDQvdCwINGD0YMuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzpmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihyZXMucGF5bG9hZC5lcnJvck1lc3NhZ2UgPT09IFwiVXNlcm5hbWUgaXMgYWxyZWFkeSBpbiB1c2UuXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc0FsZXJ0KCfQpdGN0YDRjdCz0LvRjdCz0YfQuNC50L0g0L3RjdGAINCx0q/RgNGC0LPRjdC70YLRjdC5INCx0LDQudC90LAuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzpmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzQWxlcnQoJ9Cc0Y3QtNGN0Y3Qu9C70Y3RjSDQsdKv0YDRjdC9INC+0YDRg9GD0LvQvdCwINGD0YMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOmZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDIyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5wYXlsb2FkWzBdLnBhcmFtID09PSAncGFzc3dvcmQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNBbGVydCgn0J3Rg9GD0YYg0q/QsyDQtNC+0YAg0YXQsNGP0LYg0L3RjdCzINGC0L7QvCDSr9GB0Y3Qsywg0L3RjdCzINGC0L7QviDQsdCw0LnQvdCwLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6ZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKHJlcy5wYXlsb2FkWzBdLnBhcmFtID09PSAndXNlcm5hbWUnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc0FsZXJ0KCfQpdGN0YDRjdCz0LvRjdCz0YfQuNC50L0g0L3RjdGAIDQg0LHRg9GO0YMg0YLSr9Kv0L3RjdGN0YEg0LTRjdGN0Ygg0L7RgNC+0L3RgtC+0Lkg0YLRg9GB0LPQsNC5INGC0Y3QvNC00Y3Qs9GCINC+0YDQvtC70YbQvtC+0LPSr9C5INCx0LDQudGFINGR0YHRgtC+0LnQsyDQsNC90YXQsNCw0YDQvdCwINGD0YMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOmZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHJlcy5wYXlsb2FkWzBdLnBhcmFtID09PSAncGhvbmUnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc0FsZXJ0KCfQo9GC0LDRgdC90Ysg0LTRg9Cz0LDQsNGA0LDQsCDQt9Op0LIg0L7RgNGD0YPQu9C90LAg0YPRgycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6ZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc0FsZXJ0KCfQnNGN0LTRjdGN0LvQu9GN0Y0g0LHSr9GA0Y3QvSDQt9Op0LIg0LHTqdCz0LvTqdC906kg0q/SrycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6ZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0MDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc0FsZXJ0KCfQpdGN0YDRjdCz0LvRjdCz0YfQuNC50L0g0L3RjdGAINGN0YHQstGN0Lsg0L3Rg9GD0YYg0q/QsyDQsdGD0YDRg9GDINCx0LDQudC90LAnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzpmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0Mjk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc0FsZXJ0KCfQndGN0LMgSVAg0YXQsNGP0LPQvdCw0LDRgSDQvtC70L7QvSDRhdCw0L3QtNCw0LvRgiDQuNGA0YHRjdC9INGC0YPQuyDRgtKv0YAg0YXSr9C70Y3RjdCz0Y3RjdC0INC00LDRhdC40L0g0L7RgNC+0LvQtNC+0L3QviDRg9GDJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6ZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICB9XG4gICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgc0FsZXJ0KCfQndGD0YPRhiDSr9CzINGC0LDQsNGA0LDRhdCz0q/QuSDQsdCw0LnQvdCwJyk7XG4gICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgbG9hZGluZzpmYWxzZVxuICAgICAgICAgICB9KTtcbiAgICAgICB9XG4gICAgfVxuICAgIG9uS2V5UHJlc3MgPSAoZSkgPT4ge1xuICAgICAgICBpZihlLndoaWNoID09PSAxMykge1xuICAgICAgICAgICAgdGhpcy52ZXJpZnkoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2ZXJpZnkoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbG9hZGluZzp0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzLCBlbWFpbCwgcGhvbmUsIHBpbiwgcmVmIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGF1dGhBY3Rpb25zLnZlcmlmeVJlZ2lzdGVyKHtcbiAgICAgICAgICAgIHVzZXJuYW1lOnVzZXJuYW1lLFxuICAgICAgICAgICAgdmVyaWZpY2F0aW9uX2NvZGU6cGluLFxuICAgICAgICAgICAgcmVmOnJlZlxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlcy5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyMDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBzQWxlcnQyKCfQkNC80LbQuNC70YLRgtCw0Lkg0LHSr9GA0YLQs9GN0LPQtNC70Y3RjS4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMucHJvcHMucGFnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOmZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdDp0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOmZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xvc2VNb2RhbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0MDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBzQWxlcnQoJ9Cd0YPRg9GGINKv0LMg0YLQsNCw0YDQsNGF0LPSr9C5INCx0LDQudC90LAnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6ZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgIH0pXG4gICAgfVxuICAgIF9oYW5kbGVJbWFnZUNoYW5nZShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgbGV0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICAgICAgY29uc29sZS5sb2cocmVhZGVyKVxuICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZmlsZTogZmlsZSxcbiAgICAgICAgICAgICAgICBpbWFnZVByZXZpZXdVcmw6IHJlYWRlci5yZXN1bHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpXG4gICAgfVxuICAgIHJlbmRlcigpe1xuICAgICAgICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzLCBpbWFnZVByZXZpZXdVcmwsIGZpbGUgLCBlbWFpbCwgcGhvbmUsIHN1Y2Nlc3MsIHBpbiwgbG9hZGluZywgcGFzczIsIGlzQXV0aH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCB7IGNsb3NlTW9kYWwsIHBhZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgICAgICBsZXQgJGltYWdlUHJldmlldyA9IG51bGw7XG4gICAgICAgIGlmIChpbWFnZVByZXZpZXdVcmwpIHtcbiAgICAgICAgICAgICRpbWFnZVByZXZpZXcgPSAoPGltZyBzcmM9e2ltYWdlUHJldmlld1VybH0gLz4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGltYWdlUHJldmlldyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW5Db250XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRTaWRlIHNpZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvbG9nb193aGl0ZS5wbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuc3RhdGUucmVkaXJlY3QgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFNpZGUgc2lkZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhc3VjY2VzcyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlckNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JHSr9GA0YLQs9Kv0q/Qu9GN0YVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dENvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCd0Y3QstGC0YDRjdGFINC90Y3RgFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dXNlcm5hbWV9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNlbGYuc2V0U3RhdGUoe3VzZXJuYW1lOmV2ZW50LnRhcmdldC52YWx1ZX0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dENvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCm0LDRhdC40Lwg0YXQsNGP0LNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZWxmLnNldFN0YXRlKHtlbWFpbDpldmVudC50YXJnZXQudmFsdWV9KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRDb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQo9GC0LDRgdC90Ysg0LTRg9Cz0LDQsNGAXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtwaG9uZX0gb25DaGFuZ2U9eyhldmVudCkgPT4gc2VsZi5zZXRTdGF0ZSh7cGhvbmU6ZXZlbnQudGFyZ2V0LnZhbHVlfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0Q29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J3Rg9GD0YYg0q/Qs1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNlbGYuc2V0U3RhdGUoe3Bhc3M6ZXZlbnQudGFyZ2V0LnZhbHVlfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0Q29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J3Rg9GD0YYg0q/QsyDQtNCw0LLRgtCw0YVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzMn0gb25DaGFuZ2U9eyhldmVudCkgPT4gc2VsZi5zZXRTdGF0ZSh7cGFzczI6ZXZlbnQudGFyZ2V0LnZhbHVlfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVDb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNjXCI+0J/RgNC+0YTQsNC50Lsg0LfRg9GA0LDQszwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImN1c3RvbS1maWxlLXVwbG9hZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxlSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnRoaXMuX2hhbmRsZUltYWdlQ2hhbmdlKGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCX0YPRgNCw0LMg0YHQvtC90LPQvtGFXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdQcmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyRpbWFnZVByZXZpZXd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PiB0aGlzLnNpZ25VcCgpfT7QkdKv0YDRgtCz0q/Sr9C70Y3RhTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlckNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3F1YXJlcyBjb2xvcj1cIiMxMjJhMzdcIiBzaXplPXsyMH0gc3BlZWQ9ezF9IGFuaW1hdGluZz17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApOm51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApOihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlckNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JHQsNGC0LDQu9Cz0LDQsNC20YPRg9C70LDQu9GCICg0INC+0YDQvtC90YLQvtC5INC/0LjQvSDQutC+0LTRi9CzINC+0YDRg9GD0LvQvdCwINGD0YMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0Q29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/QuNC9INC60L7QtFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25LZXlQcmVzcz17dGhpcy5vbktleVByZXNzfSBtYXhMZW5ndGg9ezR9IHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXtwaW59IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNlbGYuc2V0U3RhdGUoe3BpbjpldmVudC50YXJnZXQudmFsdWV9KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+IHRoaXMudmVyaWZ5KCl9PtCY0LvQs9GN0Y3RhTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlckNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3F1YXJlcyBjb2xvcj1cIiMxMjJhMzdcIiBzaXplPXsyMH0gc3BlZWQ9ezF9IGFuaW1hdGluZz17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApOm51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICk6KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWRpcmVjdCB0bz1cIi9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKT0+ICFwYWdlID8gKGNsb3NlTW9kYWwoKSk6bnVsbH0gIGNsYXNzTmFtZT1cImJhY2sgZWxldi0zXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25VcDsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSG9tZS5sZXNzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Ib21lLmxlc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Ib21lLmxlc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHt3aXRoUm91dGVyLCBMaW5rLCBSZWRpcmVjdH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9Db21wb25lbnRzL0hlYWRlcidcbmltcG9ydCBMb2dpbiBmcm9tICcuL0NvbXBvbmVudHMvTG9naW4nXG5pbXBvcnQgU2lnblVwIGZyb20gJy4vQ29tcG9uZW50cy9TaWdudXAnXG5pbXBvcnQgJy4vSG9tZS5sZXNzJ1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGNvbnN0IHsgbG9naW5Nb2RhbCwgc2lnblVwTW9kYWwgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVQYWdlMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoZWFkZXJMb2dvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9sb2dvMi5wbmdcIj48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhPtCt0KXQm9Ct0Js8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGE+0KLQrdCc0KbQrdCt0J08L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGE+0JHQkNCT0JjQmdCdINCi0JDQndCY0JvQptCj0KPQm9CT0JA8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGE+0JHSrtCg0KLQk9Ct0Js8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWJnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzcGxheS1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+SE9NRTxicj48L2JyPk9GPGJyPjwvYnI+Q0hBTVBJT05TPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxldHRlci1zcGFjZVwiPkUtU1BPUlQt0KvQnTxicj48L2JyPiDQotCQ0JzQmNCg0KfQlNCY0JnQnTxicj48L2JyPiDQndCt0JPQlNCh0K3QnSDQodKu0JvQltCt0K08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1jaXJjbGVcIj4g0JHQkNCTINCR0JDQmdCT0KPQo9Cb0JDQpSA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIxXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwbGF0Zm9ybVwiPtCf0JvQkNCi0KTQntCg0JzQq9CdINCT0J7QoNCY0Jw8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvNS5qcGdcIj48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQndCw0LnQt9GD0YPQtNGC0LDQudCz0LDQsCDQsdC+0LvQvtC9INCz0LDQvdGG0LDQsNGA0LDQsCDQuNC20LjQuyDRgtKv0LLRiNC90LjQuSDRgtC+0LPQu9C+0LPRh9C40LTRgtC+0Lkg0YLQsNCw0YDRhyDQsdC+0LvQvtC80LbQuNGCINGF0LDQvNCz0LjQudC9INCx0LDQs9CwIHBpbmct0YLRjdC5INGC0L7Qs9C70L7RhSDQsdC+0LvQvtC80LZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmVydDFcIj4gTUFUQ0ggTUFLSU5HIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzLzIuanBnXCI+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KHQvtC90LjRgNGF0L7Qs9GH0LTRi9C9INCx0L7Qu9C+0L0g0LzRjdGA0LPRjdC20LvQuNC50L0g0LHQsNCz0YPRg9C0INGF0L7QvtGA0L7QvdC00L7QviDQvdOp0YXTqdGA0YHTqdCzINGC0L7Qs9C70L7Qu9GCINGF0LjQudGFLCDRgtGD0YDRiNC70LDQs9CwINGB0L7Qu9C40LvRhtC+0YUsIGxhbi3QtNCw0YUg0LHQvtC70L7QvNC2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZlcnQyXCI+U0NSSU1TPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvMy5qcGdcIj48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQotC+0LPQu9C+0LPRh9C00L7QtCDQt9C+0YDQuNGD0LvRgdCw0L0g0LvQuNCzINC90Ywg0LbQuNC70LQgMiDRg9C00LDQsCDQt9C+0YXQuNC+0LPQtNC+0YUg0LHTqdCz06nTqdC0INC70LjQsyDRgtGD0YEg0LHSr9GAIDbQvSDRgdCw0YDRi9C9INGF0YPQs9Cw0YbQsNCw0L3QtCDSr9GA0LPRjdC70LbQu9GN0L3RjS4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JvQuNCz0LjQudC9INCx0LDQs9GD0YPQtNGL0LMg0YLSr9Cy0YjQvdGN0Y3RgCDQvdGMIEJST05aRSBTSUxWRVIgR09MRCDQs9GN0YUgMyDRhdGN0YHRjdCz0YIg0YXRg9Cy0LDQsNC2INC90Y3QsyDRgtKv0LLRiNC90LjQuSDQsdCw0LPRg9GD0LQg0YXQvtC+0YDQvtC90LTQvtC+IDbQvSDRgdCw0YDRi9C9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINGC0YPRgNGIINOp0YDRgdOp0LvQtNOp0LYg0L7QvdC+0L4g0YbRg9Cz0LvRg9GD0LvQsNGFINC30LDRgNGH0LzQsNCw0YAg0LDQstCw0YDQs9GL0LMg0YLQvtC00YDRg9GD0LvQvdCwLiDQm9C40LMg0YLRg9GBINCx0q/RgCDRiNCw0LPQvdCw0LvRi9C9INGB0LDQvdGC0LDQuSDQsdOp0LPTqdOp0LQgR09MRCDQu9C40LPQuNC50L0g0Y3RhdC90LjQuSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxNiDQsdCw0LMg0L3RjdC80Y3Qu9GC0Y3RjdGAINC20LjQu9C0INCz0LDQvdGGINGD0LTQsNCwINC30L7RhdC40L7Qs9C00L7RhSDigJxDSEFNUFMgQ1VQ4oCdINGD0LvRgdGL0L0g0LDQstCw0YDQs9Cw0LQg0L7RgNC+0LvRhtC+0YUg0YPRgNC40LvQs9CwINCw0LLQvdCwLiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmVydDNcIj4gTEVBR1VFUyBBTkQgTEFEREVSUyA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy80LmpwZ1wiPjwvaW1nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KXRg9Cy0Ywg0YXSr9C9INCx0LAg0LDQu9Cx0LDQvSDQsdCw0LnQs9GD0YPQu9C70LDQs9GD0YPQtCDigJxPUkdBTklaRVLigJ0t0LDQsNGAINCx0q/RgNGC0LPSr9Kv0LvRjdC9INGC0Y3QvNGG0Y3RjdC9INC30L7RhdC40L7QvSDQsdCw0LnQs9GD0YPQu9Cw0YUg0Y3RgNGF0YLRjdC5INCx0L7Qu9C+0YUg0LHTqdCz06nTqdC0INOp0LTTqdGAINCx0q/RgCBDUzpHTyDQsdC+0LvQvtC9IERPVEEgMiDRgtC+0LPQu9C+0L7QvNGL0L0gc2tpbiwgaXRlbSwgQ0hBTVBTIENBTVAgcG9pbnQg0LzTqdC9INC40LLRjdGN0L0g0YLRjdGC0LPRjdCz0YfQtNGL0L0g0YjQsNCz0L3QsNC70YvQvSDRgdCw0L3RgtCw0Lkg0YLRjdC80YbRjdGN0L3Sr9Kv0LQg0LfQvtGF0LjQvtCz0LTQvtC90L5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmVydDRcIj4gVE9VUk5BTUVOVFMgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9zbGlkZTEuanBnXCI+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3NsaWRlMi5qcGdcIj48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhclwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgMSAvIDJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctZ2FtZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+IDEyOCBUSUNLUkFURSA8L2gxPjxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGlja3JhdGUg0L3RjCDRgtCw0L3RiyDRgtC+0LPQu9C+0LYg0LHQsNC50LPQsNCwINGB0LXRgNCy0LXRgCDQtNGN0Y3RgCDigJxjbGllbnTigJ0g0YHQtdC60YPQvdC00Y3QtCDRhdGN0LTRjdC9INGD0LTQsNCwINGI0LjQvdGN0YfQu9GN0LvRgiDRhdC40LnQs9C00Y3QtiDQsdCw0LnQs9Cw0LDQsyDQt9Cw0LDQtNCw0LMuIFxuICAgICAgICAgICAgICAgICAgICAgICAgNjQgdGlja3JhdGUt0YLRjdC5INGB0LXRgNCy0LXRgCDQvdGMINGB0LXQutGD0L3QtNGN0LQgNjQg0YPQtNCw0LAg0LHRg9GO0YMgMTI4IHRpY2tyYXRlLdGC0Y3QuSDRgdC10YDQstC10YDRjdGN0YEgMiDQtNCw0YXQuNC9INCx0LDQs9CwINGD0LTQsNCwINGI0LjQvdGN0YfQu9GN0LsvcmVmcmVzaC8g0YXQuNC50LPQtNGN0LYg0LHQsNC50L3QsCDQs9GN0YHRjdC9INKv0LMg0Y7QvC4g0JjQudC80Y3RjdGBIDEyOCB0aWNrcmF0ZS3RgtGN0Lkg0YHQtdGA0LLQtdGAINC00Y3RjdGAINGC0L7Qs9C70L7QtiDQsdCw0LnQs9Cw0LAg0YLQvtGF0LjQvtC70LTQvtC70LQg0YHQtdC60YPQvdC00Y3QtCAxMjgg0YjQuNGA0YXRjdCzINC30YPRgNCw0LMg0YXQsNGA0LDQs9C00LDRhSDQsdCwINGF0LjQudC2INCx0LDQudCz0LDQsCDSr9C50LvQtNGN0LvSr9Kv0LQg0LjQu9Kv0q8g0YLQvtC00L7RgNGF0L7QuSDQsdC+0LvQvtGF0L7QvtGBINCz0LDQtNC90LAg0LHQsNC50LPQsNCwINC40LvSr9KvINC+0L3QvtC90L4g0LPRjdGB0Y3QvSDSr9CzINGO0LwuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFkZGluZzFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT4g0JHQntCb0J7QnNCW0JjQoiDQpdCQ0JzQk9CY0JnQnSDQkdCQ0JPQkCBQSU5HIDwvaDE+PGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQaW5nINC90Ywg0YLRg9GF0LDQudC9INGC0L7Qs9C70L7QtiDQsdGD0Lkg0YHQtdGA0LLQtdGAINCx0LAg0YLQvtCz0LvQvtCz0YfQtNC40LnQvSDRhdC+0L7RgNC+0L3QtCDRhdGN0LTQuNC5INGF0YPQs9Cw0YbQsNCw0L3QtCDTqdCz06nQs9C006nQuyDRgdC+0LvQuNC70YbQvtC2INCx0LDQudCz0LDQsNCzINC30LDQsNC2INCx0YPQuSDRhdGN0LzQttKv0q/RgCDRjtC8LiDQnNGN0LTRjdGN0LvRjdC7INGD0LTQsNCw0L0g0YHQvtC70LjQs9C00L7RhSDRgtGD0YHQsNC8INGC0L7Qs9C70L7QvtC8INCz0LDRhtCw0YUvbGFnLCBkZWxheS8g0LjRhdGB0Y3RhSDRjtC8LiBDSEFNUFMgQ0FNUCDRgdC10YDQstC10YAg0L3RjCDQtNC+0YLQvtC+0LTQvtC0INCx0LDQudGA0YjQuNC2INCx0YPQuSDTqdC90LTTqdGAINGF0q/Rh9C40L0g0YfQsNC00LDQu9GC0LDQuSDRgdC10YDQstC10YAg0YPRh9GA0LDQsNGBINGF0LDQvNCz0LjQudC9INCx0LDQs9CwIHBpbmct0YvQsyDRgdCw0L3QsNC7INCx0L7Qu9Cz0L7QtiDQsdCw0LnQs9Cw0LAg0LHQuNC70Y3RjS5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPiDQo9Cl0JDQkNCb0JDQkyBSQU5LSU5HINCh0JjQodCi0JXQnDwvaDE+PGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgINCh0L7Qu9C+INGC0L7Qs9C70L7Qs9GH0LjQtCDQsdC+0LvQvtC9INCx0LDQs9GD0YPQtNGL0LMg0LDQu9Cx0LDQvSDRkdGB0L7QvtGAINCx0q/RgNGC0LPRjdC2INGC0q/QstGI0LjQvdCzINGC0L7Qs9GC0L7QvtC9INC90Y3RjdC70YLRgtGN0LnQs9GN0Y3RgCDQsdCw0LnRgNGI0YPRg9C70LDRhSDQvdGMINGF0YPQstGMINGC0L7Qs9C70L7Qs9GH0LTRi9C9INGF06nQs9C20LjQuyDQsdC+0LvQvtC9INCw0LvQsdCw0L0g0ZHRgdC90Ysg0LHQsNCz0YPRg9C00YvQvSDRhdC+0L7RgNC+0L3QtNGL0L0g06nRgNGB06nQu9C006nTqdC90LjQudCzINGB0LDQudC20YDRg9GD0LvQtiByYW5rLdGL0LMg0YPQu9GB0YvQvSDRhdGN0LzQttGN0Y3QvdC0INGN0YDRjdC80LHRjdC70Y3QvSDRhdCw0YDRg9GD0LvQtiDQsdCw0LPRg9GD0LQg0LHQvtC70L7QvSDRgtC+0LPQu9C+0YfQtNGL0L0g0YfQsNC90YHQsNCw0LMg0YLQvtCz0YLQvtC+0YUg0Y7QvC5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+INCR0JjQlNCd0JjQmSDQotCj0KXQkNCZIDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPtCc0L7QvdCz0L7Qu9GL0L0g0YbQsNGF0LjQvCDRgdC/0L7RgNGC0YvQvSDRgtGN0LzRhtGN0Y3QvSDRg9GA0LDQu9C00LDQsNC90Ysg0YHRgtCw0L3QtNCw0YDRgiDRhtCw0YXQuNC8INGB0L/QvtGA0YLRi9C9INGC0LDQvNC40YDRh9C00YvQvSDRg9GAINGH0LDQtNCy0LDRgNGL0L0g0YXTqdCz0LbQuNC7LCDQvdC40LnQs9GN0LzQtCDSr9C30q/Sr9C70Y3RhSDRjdC10YDRjdCzINC906nQu9Op06nQsyDQsdC40Lkg0LHQvtC70LPQvtC2INCx0YPQuSDQv9C70LDRgtGE0L7RgNC8LiA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXQtbWV0aG9kXCIgdHlwZT0ndGV4dCcgbmFtZT1cIlwiIHBsYWNlaG9sZGVyPVwi0JzQrdCZ0Jsg0KXQkNCv0JNcIj48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT4g0KLQo9Ch0JvQkNCc0JYgPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+0JDQltCY0JvQm9CQ0KUg0JPQntCg0JjQnDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPtCQ0KHQo9Cj0JvQoiDQpdCQ0KDQmNCj0JvQojwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPtCl0J7Qm9CR0J7QniDQkdCQ0KDQmNClPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT4g0KLQntCT0JvQntCe0JzQndCj0KPQlCA8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Db3VudGVyIFN0cmlrZSBHTzwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkRPVEEgMjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy1sYXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+INCi0KPQodCb0JDQnNCW0JjQmdCdINCQ0JbQmNCb0KLQkNCdIDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+IDk5MTExMDExIDwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+INCl0JDQr9CTIDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+INCj0JvQkNCQ0J3QkdCQ0JDQotCQ0KAg0KXQntCiLCDQoVnQpdCR0JDQkNCi0JDQoCDQlFlZ0KDQrdCTIDwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+INCc0K3QmdCbINCl0JDQr9CTIDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+IHN1cHBvcnRAY2hhbXBzLmNhbXAgPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBIb21lOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge3dpdGhSb3V0ZXIsIExpbmssIFJlZGlyZWN0fSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IExvZ2luIGZyb20gXCIuLi9Ib21lL0NvbXBvbmVudHMvTG9naW5cIjtcbmltcG9ydCAnLi9sb2dpbi5sZXNzJ1xuaW1wb3J0IGZpcmViYXNlIGZyb20gXCIuLi9Db3VudGRvd25cIjtcbmltcG9ydCAqIGFzIGF1dGhBY3Rpb25zIGZyb20gXCIuLi8uLi8uLi9hcGkvYWN0aW9ucy9hdXRoQWN0aW9uc1wiO1xuaW1wb3J0IERhdGVDb3VudGRvd24gZnJvbSBcInJlYWN0LWRhdGUtY291bnRkb3duLXRpbWVyXCI7XG5pbXBvcnQgQWxlcnQgZnJvbSBcInJlYWN0LXMtYWxlcnRcIjtcblxuZnVuY3Rpb24gc0FsZXJ0KHRleHQpIHtcbiAgICBBbGVydC5zdWNjZXNzKHRleHQsIHtcbiAgICAgICAgcG9zaXRpb246ICd0b3AtcmlnaHQnLFxuICAgICAgICBlZmZlY3Q6ICdzbGlkZScsXG4gICAgICAgIHRpbWVvdXQ6IDMwMDAsXG4gICAgICAgIGxvYWRpbmc6ZmFsc2UsXG4gICAgfSk7XG59XG5cbmNsYXNzIExvZ2luUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBsb2dpbk1vZGFsOmZhbHNlLFxuICAgICAgICAgICAgc2lnblVwTW9kYWw6dHJ1ZSxcbiAgICAgICAgICAgIHNpZ25lZDpmYWxzZSxcbiAgICAgICAgICAgIGRhdGE6bnVsbCxcbiAgICAgICAgICAgIGRhdGEyOm51bGwsXG4gICAgICAgICAgICBsb2FkaW5nOmZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICAgIH1cblxuICAgIHNob3dNb2RhbCgpIHtcbiAgICAgICAgY29uc3QgeyBsb2dpbk1vZGFsIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBpZihsb2dpbk1vZGFsKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbG9naW5Nb2RhbDpmYWxzZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBsb2dpbk1vZGFsOnRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICB9XG4gICAgY2xvc2VNb2RhbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsb2dpbk1vZGFsOmZhbHNlLFxuICAgICAgICAgICAgc2lnblVwTW9kYWw6ZmFsc2UsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnb1NpZ25VcCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsb2dpbk1vZGFsOmZhbHNlLFxuICAgICAgICAgICAgc2lnblVwTW9kYWw6dHJ1ZVxuICAgICAgICB9KVxuICAgIH1cbiAgICBpc0xvZ2luKGRhdGEpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaWduZWQ6dHJ1ZSxcbiAgICAgICAgICAgIGRhdGE6ZGF0YSxcbiAgICAgICAgICAgIGxvZ2luTW9kYWw6ZmFsc2UsXG4gICAgICAgICAgICBzaWduVXBNb2RhbDpmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmhpc3RvcnkpXG5cbiAgICAgICAgY29uc3QgeyBsb2dpbk1vZGFsLCBzaWduVXBNb2RhbCwgc2lnbmVkLCBkYXRhLCBkYXRhMiB9ID0gc2VsZi5zdGF0ZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnREb3duXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6YHVybCgnL2Fzc2V0cy9pbWFnZXMvY291bnRkb3duX2JnLmpwZycpYH19PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb0NoYXJhY3RlciBjaGFyYWN0ZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtcImxvZ29cIn0gc3JjPXtcIi9hc3NldHMvaW1hZ2VzL2dvX2xvZ28ucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtcImNJbWdcIn0gc3JjPXtcIi9hc3NldHMvaW1hZ2VzL3RlcnJvci5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvdGFDaGFyYWN0ZXIgY2hhcmFjdGVyc1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17XCJsb2dvXCJ9IHNyYz17XCIvYXNzZXRzL2ltYWdlcy9kb3RhX2xvZ28ucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtcImNJbWdcIn0gc3JjPXtcIi9hc3NldHMvaW1hZ2VzL1BBLnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2lnblVwTW9kYWwgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9naW4gey4uLnRoaXMucHJvcHN9IHR5cGU9e1wibG9naW4tcGFnZVwifSBpc0xvZ2luPXsoZGF0YSk9PiB0aGlzLmlzTG9naW4oZGF0YSl9IGdvU2lnblVwPXsoKT0+IHNlbGYuZ29TaWduVXAoKX0gY2xvc2VNb2RhbD17KCk9PiBzZWxmLnNob3dNb2RhbCgpfSAvPlxuICAgICAgICAgICAgICAgICAgICApOm51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBMb2dpblBhZ2U7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xvZ2luLmxlc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xvZ2luLmxlc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2dpbi5sZXNzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL01haW4ubGVzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTWFpbi5sZXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTWFpbi5sZXNzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm91dGUsIFN3aXRjaCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmNvbnN0IE1haW4gPSAoKT0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgPnNkPC9kaXY+XG4gICAgKVxufVxuXG5jbGFzcyBSb3V0ZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9tYWluL1wiIGNvbXBvbmVudD17TWFpbn0vPlxuICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlczsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLmxlc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5sZXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLmxlc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHt3aXRoUm91dGVyLCBMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IEluayBmcm9tICdyZWFjdC1pbmsnXG5yZXF1aXJlKFwiLi9oZWFkZXIubGVzc1wiKTtcbmNvbnN0IG1lbnVJdGVtcyA9IFtcbiAgICB7dGV4dDonUmFua2luZyd9LFxuICAgIHt0ZXh0OidGcmllbmRzJ30sXG4gICAge3RleHQ6J1RlYW0nfSxcbiAgICB7dGV4dDonT3JnYW5pemVyJ30sXG4gICAge3RleHQ6J1ByZW1pdW0nfSxcbl1cblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2VsZWN0ZWRNZW51OjAsXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2VsZWN0TWVudShpbmRleCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNlbGVjdGVkTWVudTogaW5kZXgsXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHJlbmRlcigpe1xuICAgICAgICBjb25zdCB7IHNlbGVjdGVkTWVudSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtY29udFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7d2l0aFJvdXRlciwgTGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBJbmsgZnJvbSAncmVhY3QtaW5rJ1xuaW1wb3J0IHsgRmFDaGFydExpbmUsIEZhUGxheSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcbnJlcXVpcmUoXCIuL3JpZ2h0c2lkZS5sZXNzXCIpO1xuY29uc3QgbWVudUl0ZW1zID0gW1xuICAgIHt0ZXh0OidIb21lJ30sXG4gICAge3RleHQ6J1JhbmtpbmcnfSxcbiAgICB7dGV4dDonRnJpZW5kcyd9LFxuICAgIHt0ZXh0OidUZWFtJ30sXG4gICAge3RleHQ6J09yZ2FuaXplcid9LFxuICAgIHt0ZXh0OidQcmVtaXVtJ30sXG5dXG5cbmNsYXNzIFJpZ2h0U2lkZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlbGVjdGVkTWVudTowLFxuICAgICAgICB9XG4gICAgfVxuICAgIHNlbGVjdE1lbnUoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzZWxlY3RlZE1lbnU6IGluZGV4LFxuICAgICAgICB9KVxuICAgIH1cbiAgICBoYW5kbGVDaGFuZ2UoZXZlbnQpe1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudClcbiAgICB9XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGNvbnN0IHsgc2VsZWN0ZWRNZW51IH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodHNpZGUtY29udFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgU3RhdHNcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRzQ29udFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRzSXRlbSBsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInN0YXItaW1nXCIgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvc2lsdmVyLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdlbmVyYWxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0c0l0ZW0gcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibW9uZ29saWFcIiBzcmM9XCIvYXNzZXRzL2ltYWdlcy9tb25nb2xpYS5wbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMzQyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdHNJdGVtIGxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUNoYXJ0TGluZSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMjAwXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdHNJdGVtIHJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFQbGF5IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI1MFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsclwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFJpZ2h0U2lkZTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmlnaHRzaWRlLmxlc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3JpZ2h0c2lkZS5sZXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmlnaHRzaWRlLmxlc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHt3aXRoUm91dGVyLCBMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IEluayBmcm9tICdyZWFjdC1pbmsnXG5yZXF1aXJlKFwiLi9zaWRlYmFyLmxlc3NcIik7XG5jb25zdCBtZW51SXRlbXMgPSBbXG4gICAge3RleHQ6J0hvbWUnfSxcbiAgICB7dGV4dDonUmFua2luZyd9LFxuICAgIHt0ZXh0OidGcmllbmRzJ30sXG4gICAge3RleHQ6J1RlYW0nfSxcbiAgICB7dGV4dDonT3JnYW5pemVyJ30sXG4gICAge3RleHQ6J1ByZW1pdW0nfSxcbl1cblxuY2xhc3MgU2lkZUJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlbGVjdGVkTWVudTowLFxuICAgICAgICB9XG4gICAgfVxuICAgIHNlbGVjdE1lbnUoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzZWxlY3RlZE1lbnU6IGluZGV4LFxuICAgICAgICB9KVxuICAgIH1cbiAgICByZW5kZXIoKXtcbiAgICAgICAgY29uc3QgeyBzZWxlY3RlZE1lbnUgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItY29udFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2NoYW1wc2ljb24ucG5nXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtY29udFwiPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZW51SXRlbXMubWFwKChpdGVtLGkpPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gb25DbGljaz17dGhpcy5zZWxlY3RNZW51LmJpbmQodGhpcyxpKX0gY2xhc3NOYW1lPXtgbWVudS1pdGVtICR7c2VsZWN0ZWRNZW51ID09PSBpID8gKCdhY3RpdmUnKTpudWxsIH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbmsgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgU2lkZUJhcjsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2lkZWJhci5sZXNzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaWRlYmFyLmxlc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaWRlYmFyLmxlc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHt3aXRoUm91dGVyLCBMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IEluayBmcm9tICdyZWFjdC1pbmsnXG5yZXF1aXJlKFwiLi90b3BtZW51Lmxlc3NcIik7XG5cbmNvbnN0IG1lbnVJdGVtcyA9IFtcbiAgICB7dGV4dDonUGxheSd9LFxuICAgIHt0ZXh0OidMZWFndWUnfSxcbiAgICB7dGV4dDonVG91cm5hbWVudCd9LFxuICAgIHt0ZXh0OidTaG9wJ30sXG5dXG5cbmNsYXNzIFRvcE1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzZWxlY3RlZE1lbnU6MCxcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZWxlY3RNZW51KGluZGV4KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2VsZWN0ZWRNZW51OiBpbmRleCxcbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGNvbnN0IHsgc2VsZWN0ZWRNZW51IH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtbWVudVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hvb3NlLWNvbnQgdWkganNjIGFsYyBmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvZG90YS5wbmdcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbnVJdGVtcy5tYXAoKGl0ZW0saSk9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5zZWxlY3RNZW51LmJpbmQodGhpcyxpKX0gY2xhc3NOYW1lPXtgbWVudS1pdGVtcyAke3NlbGVjdGVkTWVudSA9PT0gaSA/ICgnYWN0aXZlJyk6bnVsbCB9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbmsgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgVG9wTWVudTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9wbWVudS5sZXNzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b3BtZW51Lmxlc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b3BtZW51Lmxlc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHt3aXRoUm91dGVyLCBMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBTaWRlQmFyIGZyb20gJy4vY29tcG9uZW50cy9zaWRlYmFyJztcbmltcG9ydCBSaWdodFNpZGUgZnJvbSAnLi9jb21wb25lbnRzL3JpZ2h0c2lkZSc7XG5pbXBvcnQgVG9wTWVudSBmcm9tICcuL2NvbXBvbmVudHMvdG9wbWVudSc7XG5pbXBvcnQgUm91dGVzIGZyb20gJy4vUm91dGVzJztcbnJlcXVpcmUoXCIuL01haW4ubGVzc1wiKTtcblxuY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgICAgICA8VG9wTWVudSAvPlxuICAgICAgICAgICAgICAgIDxTaWRlQmFyIC8+XG4gICAgICAgICAgICAgICAgPFJpZ2h0U2lkZSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbkJvYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZXMgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE1haW47IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1JlZ2lzdGVyLmxlc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1JlZ2lzdGVyLmxlc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9SZWdpc3Rlci5sZXNzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7d2l0aFJvdXRlciwgTGluaywgUmVkaXJlY3R9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgU2lnblVwIGZyb20gXCIuLi9Ib21lL0NvbXBvbmVudHMvU2lnbnVwXCI7XG5pbXBvcnQgJy4vUmVnaXN0ZXIubGVzcydcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiLi4vQ291bnRkb3duXCI7XG5pbXBvcnQgKiBhcyBhdXRoQWN0aW9ucyBmcm9tIFwiLi4vLi4vLi4vYXBpL2FjdGlvbnMvYXV0aEFjdGlvbnNcIjtcbmltcG9ydCBEYXRlQ291bnRkb3duIGZyb20gXCJyZWFjdC1kYXRlLWNvdW50ZG93bi10aW1lclwiO1xuaW1wb3J0IEFsZXJ0IGZyb20gXCJyZWFjdC1zLWFsZXJ0XCI7XG5cbmZ1bmN0aW9uIHNBbGVydCh0ZXh0KSB7XG4gICAgQWxlcnQuc3VjY2Vzcyh0ZXh0LCB7XG4gICAgICAgIHBvc2l0aW9uOiAndG9wLXJpZ2h0JyxcbiAgICAgICAgZWZmZWN0OiAnc2xpZGUnLFxuICAgICAgICB0aW1lb3V0OiAzMDAwLFxuICAgICAgICBsb2FkaW5nOmZhbHNlLFxuICAgIH0pO1xufVxuXG5jbGFzcyBSZWdpc3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBsb2dpbk1vZGFsOmZhbHNlLFxuICAgICAgICAgICAgc2lnblVwTW9kYWw6dHJ1ZSxcbiAgICAgICAgICAgIHNpZ25lZDpmYWxzZSxcbiAgICAgICAgICAgIGRhdGE6bnVsbCxcbiAgICAgICAgICAgIGRhdGEyOm51bGwsXG4gICAgICAgICAgICBsb2FkaW5nOmZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB9XG5cbiAgICBzaG93TW9kYWwoKSB7XG4gICAgICAgIGNvbnN0IHsgbG9naW5Nb2RhbCB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgaWYobG9naW5Nb2RhbClcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGxvZ2luTW9kYWw6ZmFsc2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbG9naW5Nb2RhbDp0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIGNsb3NlTW9kYWwoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbG9naW5Nb2RhbDpmYWxzZSxcbiAgICAgICAgICAgIHNpZ25VcE1vZGFsOmZhbHNlLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ29TaWduVXAoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbG9naW5Nb2RhbDpmYWxzZSxcbiAgICAgICAgICAgIHNpZ25VcE1vZGFsOnRydWVcbiAgICAgICAgfSlcbiAgICB9XG4gICAgaXNMb2dpbihkYXRhKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2lnbmVkOnRydWUsXG4gICAgICAgICAgICBkYXRhOmRhdGEsXG4gICAgICAgICAgICBsb2dpbk1vZGFsOmZhbHNlLFxuICAgICAgICAgICAgc2lnblVwTW9kYWw6ZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3QgeyBsb2dpbk1vZGFsLCBzaWduVXBNb2RhbCwgc2lnbmVkLCBkYXRhLCBkYXRhMiB9ID0gc2VsZi5zdGF0ZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnREb3duXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6YHVybCgnL2Fzc2V0cy9pbWFnZXMvY291bnRkb3duX2JnLmpwZycpYH19PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb0NoYXJhY3RlciBjaGFyYWN0ZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtcImxvZ29cIn0gc3JjPXtcIi9hc3NldHMvaW1hZ2VzL2dvX2xvZ28ucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtcImNJbWdcIn0gc3JjPXtcIi9hc3NldHMvaW1hZ2VzL3RlcnJvci5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvdGFDaGFyYWN0ZXIgY2hhcmFjdGVyc1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17XCJsb2dvXCJ9IHNyYz17XCIvYXNzZXRzL2ltYWdlcy9kb3RhX2xvZ28ucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtcImNJbWdcIn0gc3JjPXtcIi9hc3NldHMvaW1hZ2VzL1BBLnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2lnblVwTW9kYWwgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2lnblVwIHBhZ2U9e3RydWV9IGNsb3NlTW9kYWw9eygpPT4gc2VsZi5jbG9zZU1vZGFsKCl9IC8+XG4gICAgICAgICAgICAgICAgICAgICk6bnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge3dpdGhSb3V0ZXIsIExpbmssIFJlZGlyZWN0fSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IERhdGVDb3VudGRvd24gZnJvbSAncmVhY3QtZGF0ZS1jb3VudGRvd24tdGltZXInO1xuaW1wb3J0IHsgU3F1YXJlcyB9IGZyb20gJ3JlYWN0LWFjdGl2aXR5JztcbmltcG9ydCBBbGVydCBmcm9tICdyZWFjdC1zLWFsZXJ0JztcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuaW1wb3J0ICdmaXJlYmFzZS9hdXRoJztcbmltcG9ydCBcIi4vcmVzZXQubGVzc1wiXG5pbXBvcnQge2hlYWRlcn0gZnJvbSBcIi4uLy4uLy4uL2FwaS9oZWFkZXJcIjtcblxuZnVuY3Rpb24gc0FsZXJ0KHRleHQpIHtcbiAgICBBbGVydC5lcnJvcih0ZXh0LCB7XG4gICAgICAgIHBvc2l0aW9uOiAndG9wLXJpZ2h0JyxcbiAgICAgICAgZWZmZWN0OiAnc2xpZGUnLFxuICAgICAgICB0aW1lb3V0OiA3MDAwLFxuICAgICAgICBsb2FkaW5nOmZhbHNlLFxuICAgIH0pO1xufVxuZnVuY3Rpb24gc0FsZXJ0Mih0ZXh0KSB7XG4gICAgQWxlcnQuc3VjY2Vzcyh0ZXh0LCB7XG4gICAgICAgIHBvc2l0aW9uOiAndG9wLWxlZnQnLFxuICAgICAgICBlZmZlY3Q6ICdzbGlkZScsXG4gICAgICAgIHRpbWVvdXQ6IDcwMDAsXG4gICAgICAgIGxvYWRpbmc6ZmFsc2UsXG4gICAgfSk7XG59XG5jbGFzcyBSZXNldCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgICAgICAgcGFzczogJycsXG4gICAgICAgICAgICBsb2FkaW5nOmZhbHNlLFxuICAgICAgICAgICAgZm9yZ290OmZhbHNlLFxuICAgICAgICAgICAgZmVtYWlsOicnLFxuICAgICAgICAgICAgcmVkaXJlY3Q6ZmFsc2VcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsb2FkaW5nOnRydWVcbiAgICAgICAgfSlcbiAgICAgICAgZmV0Y2goYGh0dHA6Ly9jaGFtcHMuY2FtcDo1MDAwL2FwaS9yZXNldF9wYXNzd29yZGAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIG5ld19wYXNzd29yZDogdGhpcy5zdGF0ZS5wYXNzLFxuICAgICAgICAgICAgICAgIHRva2VuOndpbmRvdy5sb2NhdGlvbi5zZWFyY2guc2xpY2UoNilcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9KS50aGVuKChyZXMpPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChyZXMuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAyMDA6XG4gICAgICAgICAgICAgICAgICAgIHNBbGVydDIoJ9CQ0LzQttC40LvRgtGC0LDQuSDRgdC+0LvQuNCz0LTQu9C+0L4uJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzpmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0OnRydWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDIyOlxuICAgICAgICAgICAgICAgICAgICBzQWxlcnQoJ9Cd0YPRg9GGINKv0LPQuNC50L0g0L7RgNC+0L0gNi3QsNCw0YEg0LTRjdGN0Ygg0LHQsNC50YUg0ZHRgdGC0L7QuScpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6ZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgICAgfSkudGhlbigoanNvbik9PntcbiAgICAgICAgfSkuY2F0Y2goKGVycik9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHJlbmRlcigpe1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHsgdXNlcm5hbWUsIHBhc3MsIGxvYWRpbmcsIGZvcmdvdCwgZmVtYWlsIH0gPSBzZWxmLnN0YXRlO1xuICAgICAgICBjb25zdCB7IGNsb3NlTW9kYWwsIGdvU2lnblVwIH0gPSBzZWxmLnByb3BzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbkNvbnQgcmVzZXRcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICF0aGlzLnN0YXRlLnJlZGlyZWN0ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFNpZGUgc2lkZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2xvZ29fd2hpdGUucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0U2lkZSBzaWRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyQ29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCd0YPRg9GGINKv0LMg0YHQvtC70LjRhVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0Q29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQqNC40L3RjSDQvdGD0YPRhiDSr9CzINC+0YDRg9GD0LvQvdCwINGD0YMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZWxmLnNldFN0YXRlKHtwYXNzOmV2ZW50LnRhcmdldC52YWx1ZX0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gIWxvYWRpbmcgPyAoc2VsZi5yZXNldCgpKTooY29uc29sZS5sb2coJ3MnKSl9PtCh0L7Qu9C40YU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyQ29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcXVhcmVzIGNvbG9yPVwiIzEyMmEzN1wiIHNpemU9ezIwfSBzcGVlZD17MX0gYW5pbWF0aW5nPXt0cnVlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApOm51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKTooXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVkaXJlY3QgdG89XCIvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFJlc2V0OyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5sZXNzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5sZXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQubGVzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=