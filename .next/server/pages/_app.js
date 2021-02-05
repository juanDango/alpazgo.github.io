module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/theme/index.ts":
/*!*******************************!*\
  !*** ./assets/theme/index.ts ***!
  \*******************************/
/*! exports provided: colors, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"colors\", function() { return colors; });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);\n // 2. Add your color mode config\n\nconst config = {\n  initialColorMode: \"dark\",\n  useSystemColorMode: false\n};\nconst colors = {// background: \"#F2F2F2\",\n  // darkBackground: \"#111535\",\n  // success: \"#3DFE96\",\n  // primaryAlt: \"#343B73\",\n  // accent: \"#0057FF\",\n  // primary: {\n  //   100: \"#343B73\",\n  //   200: \"#343B73\",\n  //   300: \"#0C0F2F\",\n  //   400: \"#0C0F2F\",\n  //   500: \"#0C0F2F\",\n  //   600: \"#0C0F2F\",\n  //   700: \"#0C0F2F\",\n  //   800: \"#0C0F2F\",\n  //   900: \"#0C0F2F\", //DEJAR ESTE\n  // },\n  // secondary: {\n  //   100: \"#FFCE85\",\n  //   200: \"#FFCE85\", //DEJAR ESTE\n  //   300: \"#FFCE85\",\n  //   400: \"#FFCE85\",\n  //   500: \"#FFCE85\",\n  //   600: \"#FFCE85\",\n  //   700: \"#FFCE85\",\n  //   800: \"#FFCE85\",\n  //   900: \"#FFCE85\",\n  // },\n};\nconst components = {\n  Button: {},\n  Input: {//TO-DO: move input bg and border style from components to here\n  }\n};\nconst styles = {\n  global: () => ({\n    // styles for the `body`\n    body: {//bg: colors.primary[\"900\"],\n    },\n    \"#__next\": {\n      height: \"100%\"\n    }\n  })\n}; // 3. extend the theme\n\nconst theme = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__[\"extendTheme\"])({\n  config,\n  colors,\n  components,\n  styles\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvdGhlbWUvaW5kZXgudHM/ZTYzYSJdLCJuYW1lcyI6WyJjb25maWciLCJpbml0aWFsQ29sb3JNb2RlIiwidXNlU3lzdGVtQ29sb3JNb2RlIiwiY29sb3JzIiwiY29tcG9uZW50cyIsIkJ1dHRvbiIsIklucHV0Iiwic3R5bGVzIiwiZ2xvYmFsIiwiYm9keSIsImhlaWdodCIsInRoZW1lIiwiZXh0ZW5kVGhlbWUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0NBRUE7O0FBQ0EsTUFBTUEsTUFBTSxHQUFHO0FBQ2JDLGtCQUFnQixFQUFFLE1BREw7QUFFYkMsb0JBQWtCLEVBQUU7QUFGUCxDQUFmO0FBS08sTUFBTUMsTUFBTSxHQUFHLENBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNCb0IsQ0FBZjtBQThCUCxNQUFNQyxVQUFVLEdBQUc7QUFDakJDLFFBQU0sRUFBRSxFQURTO0FBRWpCQyxPQUFLLEVBQUUsQ0FDTDtBQURLO0FBRlUsQ0FBbkI7QUFPQSxNQUFNQyxNQUFNLEdBQUc7QUFDYkMsUUFBTSxFQUFFLE9BQU87QUFDYjtBQUNBQyxRQUFJLEVBQUUsQ0FDSjtBQURJLEtBRk87QUFLYixlQUFXO0FBQ1RDLFlBQU0sRUFBRTtBQURDO0FBTEUsR0FBUDtBQURLLENBQWYsQyxDQVlBOztBQUNBLE1BQU1DLEtBQUssR0FBR0Msb0VBQVcsQ0FBQztBQUFFWixRQUFGO0FBQVVHLFFBQVY7QUFBa0JDLFlBQWxCO0FBQThCRztBQUE5QixDQUFELENBQXpCO0FBQ2VJLG9FQUFmIiwiZmlsZSI6Ii4vYXNzZXRzL3RoZW1lL2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuXG4vLyAyLiBBZGQgeW91ciBjb2xvciBtb2RlIGNvbmZpZ1xuY29uc3QgY29uZmlnID0ge1xuICBpbml0aWFsQ29sb3JNb2RlOiBcImRhcmtcIixcbiAgdXNlU3lzdGVtQ29sb3JNb2RlOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBjb25zdCBjb2xvcnMgPSB7XG4gIC8vIGJhY2tncm91bmQ6IFwiI0YyRjJGMlwiLFxuICAvLyBkYXJrQmFja2dyb3VuZDogXCIjMTExNTM1XCIsXG4gIC8vIHN1Y2Nlc3M6IFwiIzNERkU5NlwiLFxuICAvLyBwcmltYXJ5QWx0OiBcIiMzNDNCNzNcIixcbiAgLy8gYWNjZW50OiBcIiMwMDU3RkZcIixcbiAgLy8gcHJpbWFyeToge1xuICAvLyAgIDEwMDogXCIjMzQzQjczXCIsXG4gIC8vICAgMjAwOiBcIiMzNDNCNzNcIixcbiAgLy8gICAzMDA6IFwiIzBDMEYyRlwiLFxuICAvLyAgIDQwMDogXCIjMEMwRjJGXCIsXG4gIC8vICAgNTAwOiBcIiMwQzBGMkZcIixcbiAgLy8gICA2MDA6IFwiIzBDMEYyRlwiLFxuICAvLyAgIDcwMDogXCIjMEMwRjJGXCIsXG4gIC8vICAgODAwOiBcIiMwQzBGMkZcIixcbiAgLy8gICA5MDA6IFwiIzBDMEYyRlwiLCAvL0RFSkFSIEVTVEVcbiAgLy8gfSxcbiAgLy8gc2Vjb25kYXJ5OiB7XG4gIC8vICAgMTAwOiBcIiNGRkNFODVcIixcbiAgLy8gICAyMDA6IFwiI0ZGQ0U4NVwiLCAvL0RFSkFSIEVTVEVcbiAgLy8gICAzMDA6IFwiI0ZGQ0U4NVwiLFxuICAvLyAgIDQwMDogXCIjRkZDRTg1XCIsXG4gIC8vICAgNTAwOiBcIiNGRkNFODVcIixcbiAgLy8gICA2MDA6IFwiI0ZGQ0U4NVwiLFxuICAvLyAgIDcwMDogXCIjRkZDRTg1XCIsXG4gIC8vICAgODAwOiBcIiNGRkNFODVcIixcbiAgLy8gICA5MDA6IFwiI0ZGQ0U4NVwiLFxuICAvLyB9LFxufTtcblxuY29uc3QgY29tcG9uZW50cyA9IHtcbiAgQnV0dG9uOiB7fSxcbiAgSW5wdXQ6IHtcbiAgICAvL1RPLURPOiBtb3ZlIGlucHV0IGJnIGFuZCBib3JkZXIgc3R5bGUgZnJvbSBjb21wb25lbnRzIHRvIGhlcmVcbiAgfSxcbn07XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgZ2xvYmFsOiAoKSA9PiAoe1xuICAgIC8vIHN0eWxlcyBmb3IgdGhlIGBib2R5YFxuICAgIGJvZHk6IHtcbiAgICAgIC8vYmc6IGNvbG9ycy5wcmltYXJ5W1wiOTAwXCJdLFxuICAgIH0sXG4gICAgXCIjX19uZXh0XCI6IHtcbiAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgfSxcbiAgfSksXG59O1xuXG4vLyAzLiBleHRlbmQgdGhlIHRoZW1lXG5jb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHsgY29uZmlnLCBjb2xvcnMsIGNvbXBvbmVudHMsIHN0eWxlcyB9KTtcbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/theme/index.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var assets_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/theme */ \"./assets/theme/index.ts\");\n\nvar _jsxFileName = \"/Users/antonioaspite/Documents/Programming/personalwebsite/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nfunction App({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"ChakraProvider\"], {\n    theme: assets_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRoZW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxHQUFULENBQWE7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWIsRUFBa0U7QUFDaEUsc0JBQ0UscUVBQUMsK0RBQUQ7QUFBZ0IsU0FBSyxFQUFFQyxvREFBdkI7QUFBQSwyQkFDRSxxRUFBQyxTQUFELG9CQUFlRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7QUFDY0Ysa0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcImFzc2V0cy90aGVtZVwiO1xuXG5mdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIHJldHVybiAoXG4gICAgPENoYWtyYVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@chakra-ui/react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCI/M2I2NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAY2hha3JhLXVpL3JlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@chakra-ui/react\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });