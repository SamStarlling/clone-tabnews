/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"light\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        try {\n            const saved = localStorage.getItem(\"theme\");\n            if (saved === \"light\" || saved === \"dark\") setTheme(saved);\n        } catch (e) {\n        // ignore (SSR)\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // apply theme class to documentElement\n        if (typeof document !== \"undefined\") {\n            document.documentElement.classList.remove(\"light-theme\", \"dark-theme\");\n            document.documentElement.classList.add(`${theme}-theme`);\n        }\n        try {\n            localStorage.setItem(\"theme\", theme);\n        } catch (e) {}\n    }, [\n        theme\n    ]);\n    const toggleTheme = ()=>setTheme((t)=>t === \"light\" ? \"dark\" : \"light\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps,\n        theme: theme,\n        toggleTheme: toggleTheme\n    }, void 0, false, {\n        fileName: \"/workspaces/clone-tabnews/pages/_app.js\",\n        lineNumber: 27,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQThCO0FBQ2E7QUFFM0MsU0FBU0UsTUFBTSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxFQUFFO0lBQ3ZDLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUVuQ0MsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUk7WUFDRixNQUFNTSxRQUFRQyxhQUFhQyxPQUFPLENBQUM7WUFDbkMsSUFBSUYsVUFBVSxXQUFXQSxVQUFVLFFBQVFELFNBQVNDO1FBQ3RELEVBQUUsT0FBT0csR0FBRztRQUNWLGVBQWU7UUFDakI7SUFDRixHQUFHLEVBQUU7SUFFTFQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLHVDQUF1QztRQUN2QyxJQUFJLE9BQU9VLGFBQWEsYUFBYTtZQUNuQ0EsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxlQUFlO1lBQ3pESCxTQUFTQyxlQUFlLENBQUNDLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLENBQUMsRUFBRVYsTUFBTSxNQUFNLENBQUM7UUFDekQsQ0FBQztRQUNELElBQUk7WUFBRUcsYUFBYVEsT0FBTyxDQUFDLFNBQVNYO1FBQU8sRUFBRSxPQUFPSyxHQUFHLENBQUU7SUFDM0QsR0FBRztRQUFDTDtLQUFNO0lBRVYsTUFBTVksY0FBYyxJQUFNWCxTQUFTLENBQUNZLElBQU9BLE1BQU0sVUFBVSxTQUFTLE9BQU87SUFFM0UscUJBQU8sOERBQUNmO1FBQVcsR0FBR0MsU0FBUztRQUFFQyxPQUFPQTtRQUFPWSxhQUFhQTs7Ozs7O0FBQzlEO0FBRUEsaUVBQWVmLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbG9uZS10YWJuZXdzLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZSgnbGlnaHQnKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNhdmVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJylcbiAgICAgIGlmIChzYXZlZCA9PT0gJ2xpZ2h0JyB8fCBzYXZlZCA9PT0gJ2RhcmsnKSBzZXRUaGVtZShzYXZlZClcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBpZ25vcmUgKFNTUilcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gYXBwbHkgdGhlbWUgY2xhc3MgdG8gZG9jdW1lbnRFbGVtZW50XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdsaWdodC10aGVtZScsICdkYXJrLXRoZW1lJylcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke3RoZW1lfS10aGVtZWApXG4gICAgfVxuICAgIHRyeSB7IGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsIHRoZW1lKSB9IGNhdGNoIChlKSB7IH1cbiAgfSwgW3RoZW1lXSlcblxuICBjb25zdCB0b2dnbGVUaGVtZSA9ICgpID0+IHNldFRoZW1lKCh0KSA9PiAodCA9PT0gJ2xpZ2h0JyA/ICdkYXJrJyA6ICdsaWdodCcpKVxuXG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IHRoZW1lPXt0aGVtZX0gdG9nZ2xlVGhlbWU9e3RvZ2dsZVRoZW1lfSAvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aGVtZSIsInNldFRoZW1lIiwic2F2ZWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwic2V0SXRlbSIsInRvZ2dsZVRoZW1lIiwidCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();