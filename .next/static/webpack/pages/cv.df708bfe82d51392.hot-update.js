"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/cv",{

/***/ "./components/layouts/article.js":
/*!***************************************!*\
  !*** ./components/layouts/article.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _grid_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../grid-item */ \"./components/grid-item.js\");\nvar _this = undefined;\n\n\n\n\nvar variants = {\n    hidden: {\n        opacity: 0,\n        x: 0,\n        y: 20\n    },\n    enter: {\n        opacity: 1,\n        x: 0,\n        y: 0\n    },\n    exit: {\n        opacity: 0,\n        x: -0,\n        y: 20\n    }\n};\nvar Layout = function(param) {\n    var children = param.children, title = param.title;\n    var t = \"\".concat(title, \" - Partha Sarathi Purkayastha\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.article, {\n        initial: \"hidden\",\n        animate: \"enter\",\n        exit: \"exit\",\n        variants: variants,\n        transition: {\n            duration: 0.4,\n            type: \"easeInOut\"\n        },\n        style: {\n            position: \"relative\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: t\n                        }, void 0, false, {\n                            fileName: \"E:\\\\WebD\\\\CV\\\\components\\\\layouts\\\\article.js\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"twitter:title\",\n                            content: t\n                        }, void 0, false, {\n                            fileName: \"E:\\\\WebD\\\\CV\\\\components\\\\layouts\\\\article.js\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            property: \"og:title\",\n                            content: t\n                        }, void 0, false, {\n                            fileName: \"E:\\\\WebD\\\\CV\\\\components\\\\layouts\\\\article.js\",\n                            lineNumber: 27,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\WebD\\\\CV\\\\components\\\\layouts\\\\article.js\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, _this),\n                children,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_grid_item__WEBPACK_IMPORTED_MODULE_2__.GridItemStyle, {}, void 0, false, {\n                    fileName: \"E:\\\\WebD\\\\CV\\\\components\\\\layouts\\\\article.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"E:\\\\WebD\\\\CV\\\\components\\\\layouts\\\\article.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dHMvYXJ0aWNsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQXNDO0FBQ1Y7QUFDZ0I7QUFFNUMsSUFBTUcsUUFBUSxHQUFHO0lBQ2ZDLE1BQU0sRUFBRTtRQUFFQyxPQUFPLEVBQUUsQ0FBQztRQUFFQyxDQUFDLEVBQUUsQ0FBQztRQUFFQyxDQUFDLEVBQUUsRUFBRTtLQUFFO0lBQ25DQyxLQUFLLEVBQUU7UUFBRUgsT0FBTyxFQUFFLENBQUM7UUFBRUMsQ0FBQyxFQUFFLENBQUM7UUFBRUMsQ0FBQyxFQUFFLENBQUM7S0FBRTtJQUNqQ0UsSUFBSSxFQUFFO1FBQUVKLE9BQU8sRUFBRSxDQUFDO1FBQUVDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFBRUMsQ0FBQyxFQUFFLEVBQUU7S0FBRTtDQUNuQztBQUVELElBQU1HLE1BQU0sR0FBRyxnQkFBeUI7UUFBdEJDLFFBQVEsU0FBUkEsUUFBUSxFQUFFQyxLQUFLLFNBQUxBLEtBQUs7SUFDL0IsSUFBTUMsQ0FBQyxHQUFHLEVBQUMsQ0FBUSxNQUE2QixDQUFuQ0QsS0FBSyxFQUFDLCtCQUE2QixDQUFDO0lBQ2pELHFCQUNFLDhEQUFDWix5REFBYztRQUNiZSxPQUFPLEVBQUMsUUFBUTtRQUNoQkMsT0FBTyxFQUFDLE9BQU87UUFDZlAsSUFBSSxFQUFDLE1BQU07UUFDWE4sUUFBUSxFQUFFQSxRQUFRO1FBQ2xCYyxVQUFVLEVBQUU7WUFBRUMsUUFBUSxFQUFFLEdBQUc7WUFBRUMsSUFBSSxFQUFFLFdBQVc7U0FBRTtRQUNoREMsS0FBSyxFQUFFO1lBQUVDLFFBQVEsRUFBRSxVQUFVO1NBQUU7a0JBRS9COztnQkFDR1QsS0FBSyxrQkFDSiw4REFBQ1gsa0RBQUk7O3NDQUNILDhEQUFDVyxPQUFLO3NDQUFFQyxDQUFDOzs7OztpQ0FBUztzQ0FDbEIsOERBQUNTLE1BQUk7NEJBQUNDLElBQUksRUFBQyxlQUFlOzRCQUFDQyxPQUFPLEVBQUVYLENBQUM7Ozs7O2lDQUFJO3NDQUN6Qyw4REFBQ1MsTUFBSTs0QkFBQ0csUUFBUSxFQUFDLFVBQVU7NEJBQUNELE9BQU8sRUFBRVgsQ0FBQzs7Ozs7aUNBQUk7Ozs7Ozt5QkFDbkM7Z0JBRVJGLFFBQVE7OEJBRVQsOERBQUNULHFEQUFhOzs7O3lCQUFHOzt3QkFDaEI7Ozs7O2FBQ1ksQ0FDbEI7Q0FDRjtBQXpCS1EsS0FBQUEsTUFBTTtBQTJCWiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dHMvYXJ0aWNsZS5qcz9lZjc0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBHcmlkSXRlbVN0eWxlIH0gZnJvbSAnLi4vZ3JpZC1pdGVtJ1xuXG5jb25zdCB2YXJpYW50cyA9IHtcbiAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHg6IDAsIHk6IDIwIH0sXG4gIGVudGVyOiB7IG9wYWNpdHk6IDEsIHg6IDAsIHk6IDAgfSxcbiAgZXhpdDogeyBvcGFjaXR5OiAwLCB4OiAtMCwgeTogMjAgfVxufVxuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgdGl0bGUgfSkgPT4ge1xuICBjb25zdCB0ID0gYCR7dGl0bGV9IC0gUGFydGhhIFNhcmF0aGkgUHVya2F5YXN0aGFgXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5hcnRpY2xlXG4gICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgIGFuaW1hdGU9XCJlbnRlclwiXG4gICAgICBleGl0PVwiZXhpdFwiXG4gICAgICB2YXJpYW50cz17dmFyaWFudHN9XG4gICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjQsIHR5cGU6ICdlYXNlSW5PdXQnIH19XG4gICAgICBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fVxuICAgID5cbiAgICAgIDw+XG4gICAgICAgIHt0aXRsZSAmJiAoXG4gICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+e3R9PC90aXRsZT5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17dH0gLz5cbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXt0fSAvPlxuICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgKX1cbiAgICAgICAge2NoaWxkcmVufVxuXG4gICAgICAgIDxHcmlkSXRlbVN0eWxlIC8+XG4gICAgICA8Lz5cbiAgICA8L21vdGlvbi5hcnRpY2xlPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuIl0sIm5hbWVzIjpbIm1vdGlvbiIsIkhlYWQiLCJHcmlkSXRlbVN0eWxlIiwidmFyaWFudHMiLCJoaWRkZW4iLCJvcGFjaXR5IiwieCIsInkiLCJlbnRlciIsImV4aXQiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInRpdGxlIiwidCIsImFydGljbGUiLCJpbml0aWFsIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInR5cGUiLCJzdHlsZSIsInBvc2l0aW9uIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwicHJvcGVydHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layouts/article.js\n");

/***/ })

});