"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/invoices/page",{

/***/ "(app-pages-browser)/./app/ui/invoices/pagination.tsx":
/*!****************************************!*\
  !*** ./app/ui/invoices/pagination.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Pagination; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowLeftIcon_ArrowRightIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowLeftIcon,ArrowRightIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/ArrowLeftIcon.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowLeftIcon_ArrowRightIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowLeftIcon,ArrowRightIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/ArrowRightIcon.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"(app-pages-browser)/./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Pagination(param) {\n    let { totalPages } = param;\n    _s();\n    // NOTE: comment in this code when you get to this point in the course\n    // const allPages = generatePagination(currentPage, totalPages);\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams)();\n    const currentPage = Number(searchParams.get(\"page\")) || 1;\n    const createPageURL = (pageNumber)=>{\n        const params = new URLSearchParams(searchParams);\n        params.set(\"page\", pageNumber.toString());\n        return \"\".concat(pathname, \"?\").concat(params.toString());\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"inline-flex\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PaginationArrow, {\n                    direction: \"left\",\n                    href: createPageURL(currentPage - 1),\n                    isDisabled: currentPage <= 1\n                }, void 0, false, {\n                    fileName: \"/Users/finlaas/nextjs-dashboard/app/ui/invoices/pagination.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex -space-x-px\",\n                    children: allPages.map((page, index)=>{\n                        let position;\n                        if (index === 0) position = \"first\";\n                        if (index === allPages.length - 1) position = \"last\";\n                        if (allPages.length === 1) position = \"single\";\n                        if (page === \"...\") position = \"middle\";\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PaginationNumber, {\n                            href: createPageURL(page),\n                            page: page,\n                            position: position,\n                            isActive: currentPage === page\n                        }, page, false, {\n                            fileName: \"/Users/finlaas/nextjs-dashboard/app/ui/invoices/pagination.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 15\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/finlaas/nextjs-dashboard/app/ui/invoices/pagination.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PaginationArrow, {\n                    direction: \"right\",\n                    href: createPageURL(currentPage + 1),\n                    isDisabled: currentPage >= totalPages\n                }, void 0, false, {\n                    fileName: \"/Users/finlaas/nextjs-dashboard/app/ui/invoices/pagination.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/finlaas/nextjs-dashboard/app/ui/invoices/pagination.tsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Pagination, \"AxA9T5G2Po78UC4hL8ljCdvMciE=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams\n    ];\n});\n_c = Pagination;\nfunction PaginationNumber(param) {\n    let { page, href, isActive, position } = param;\n    const className = (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"flex h-10 w-10 items-center justify-center text-sm border\", {\n        \"rounded-l-md\": position === \"first\" || position === \"single\",\n        \"rounded-r-md\": position === \"last\" || position === \"single\",\n        \"z-10 bg-blue-600 border-blue-600 text-white\": isActive,\n        \"hover:bg-gray-100\": !isActive && position !== \"middle\",\n        \"text-gray-300\": position === \"middle\"\n    });\n    return isActive || position === \"middle\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: className,\n        children: page\n    }, void 0, false, {\n        fileName: \"/Users/finlaas/nextjs-dashboard/app/ui/invoices/pagination.tsx\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: href,\n        className: className,\n        children: page\n    }, void 0, false, {\n        fileName: \"/Users/finlaas/nextjs-dashboard/app/ui/invoices/pagination.tsx\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, this);\n}\n_c1 = PaginationNumber;\nfunction PaginationArrow(param) {\n    let { href, direction, isDisabled } = param;\n    const className = (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"flex h-10 w-10 items-center justify-center rounded-md border\", {\n        \"pointer-events-none text-gray-300\": isDisabled,\n        \"hover:bg-gray-100\": !isDisabled,\n        \"mr-2 md:mr-4\": direction === \"left\",\n        \"ml-2 md:ml-4\": direction === \"right\"\n    });\n    const icon = direction === \"left\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeftIcon_ArrowRightIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        className: \"w-4\"\n    }, void 0, false, {\n        fileName: \"/Users/finlaas/nextjs-dashboard/app/ui/invoices/pagination.tsx\",\n        lineNumber: 118,\n        columnNumber: 7\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeftIcon_ArrowRightIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        className: \"w-4\"\n    }, void 0, false, {\n        fileName: \"/Users/finlaas/nextjs-dashboard/app/ui/invoices/pagination.tsx\",\n        lineNumber: 120,\n        columnNumber: 7\n    }, this);\n    return isDisabled ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: className,\n        children: icon\n    }, void 0, false, {\n        fileName: \"/Users/finlaas/nextjs-dashboard/app/ui/invoices/pagination.tsx\",\n        lineNumber: 124,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        className: className,\n        href: href,\n        children: icon\n    }, void 0, false, {\n        fileName: \"/Users/finlaas/nextjs-dashboard/app/ui/invoices/pagination.tsx\",\n        lineNumber: 126,\n        columnNumber: 5\n    }, this);\n}\n_c2 = PaginationArrow;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Pagination\");\n$RefreshReg$(_c1, \"PaginationNumber\");\n$RefreshReg$(_c2, \"PaginationArrow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91aS9pbnZvaWNlcy9wYWdpbmF0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUU0RTtBQUNwRDtBQUNLO0FBRWtDO0FBRWhELFNBQVNNLFdBQVcsS0FBc0M7UUFBdEMsRUFBRUMsVUFBVSxFQUEwQixHQUF0Qzs7SUFDakMsc0VBQXNFO0lBRXRFLGdFQUFnRTtJQUVoRSxNQUFNQyxXQUFXSiw0REFBV0E7SUFDNUIsTUFBTUssZUFBZUosZ0VBQWVBO0lBQ3BDLE1BQU1LLGNBQWNDLE9BQU9GLGFBQWFHLEdBQUcsQ0FBQyxZQUFZO0lBRXhELE1BQU1DLGdCQUFnQixDQUFDQztRQUNyQixNQUFNQyxTQUFTLElBQUlDLGdCQUFnQlA7UUFDbkNNLE9BQU9FLEdBQUcsQ0FBQyxRQUFRSCxXQUFXSSxRQUFRO1FBQ3RDLE9BQU8sR0FBZUgsT0FBWlAsVUFBUyxLQUFxQixPQUFsQk8sT0FBT0csUUFBUTtJQUN2QztJQUVBLHFCQUNFO2tCQUdFLDRFQUFDQztZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQ0NDLFdBQVU7b0JBQ1ZDLE1BQU1WLGNBQWNILGNBQWM7b0JBQ2xDYyxZQUFZZCxlQUFlOzs7Ozs7OEJBRzdCLDhEQUFDUztvQkFBSUMsV0FBVTs4QkFDWkssU0FBU0MsR0FBRyxDQUFDLENBQUNDLE1BQU1DO3dCQUNuQixJQUFJQzt3QkFFSixJQUFJRCxVQUFVLEdBQUdDLFdBQVc7d0JBQzVCLElBQUlELFVBQVVILFNBQVNLLE1BQU0sR0FBRyxHQUFHRCxXQUFXO3dCQUM5QyxJQUFJSixTQUFTSyxNQUFNLEtBQUssR0FBR0QsV0FBVzt3QkFDdEMsSUFBSUYsU0FBUyxPQUFPRSxXQUFXO3dCQUUvQixxQkFDRSw4REFBQ0U7NEJBRUNSLE1BQU1WLGNBQWNjOzRCQUNwQkEsTUFBTUE7NEJBQ05FLFVBQVVBOzRCQUNWRyxVQUFVdEIsZ0JBQWdCaUI7MkJBSnJCQTs7Ozs7b0JBT1g7Ozs7Ozs4QkFHRiw4REFBQ047b0JBQ0NDLFdBQVU7b0JBQ1ZDLE1BQU1WLGNBQWNILGNBQWM7b0JBQ2xDYyxZQUFZZCxlQUFlSDs7Ozs7Ozs7Ozs7OztBQUtyQztHQXZEd0JEOztRQUtMRix3REFBV0E7UUFDUEMsNERBQWVBOzs7S0FOZEM7QUF5RHhCLFNBQVN5QixpQkFBaUIsS0FVekI7UUFWeUIsRUFDeEJKLElBQUksRUFDSkosSUFBSSxFQUNKUyxRQUFRLEVBQ1JILFFBQVEsRUFNVCxHQVZ5QjtJQVd4QixNQUFNVCxZQUFZbEIsZ0RBQUlBLENBQ3BCLDZEQUNBO1FBQ0UsZ0JBQWdCMkIsYUFBYSxXQUFXQSxhQUFhO1FBQ3JELGdCQUFnQkEsYUFBYSxVQUFVQSxhQUFhO1FBQ3BELCtDQUErQ0c7UUFDL0MscUJBQXFCLENBQUNBLFlBQVlILGFBQWE7UUFDL0MsaUJBQWlCQSxhQUFhO0lBQ2hDO0lBR0YsT0FBT0csWUFBWUgsYUFBYSx5QkFDOUIsOERBQUNWO1FBQUlDLFdBQVdBO2tCQUFZTzs7Ozs7NkJBRTVCLDhEQUFDeEIsa0RBQUlBO1FBQUNvQixNQUFNQTtRQUFNSCxXQUFXQTtrQkFDMUJPOzs7Ozs7QUFHUDtNQTdCU0k7QUErQlQsU0FBU1YsZ0JBQWdCLEtBUXhCO1FBUndCLEVBQ3ZCRSxJQUFJLEVBQ0pELFNBQVMsRUFDVEUsVUFBVSxFQUtYLEdBUndCO0lBU3ZCLE1BQU1KLFlBQVlsQixnREFBSUEsQ0FDcEIsZ0VBQ0E7UUFDRSxxQ0FBcUNzQjtRQUNyQyxxQkFBcUIsQ0FBQ0E7UUFDdEIsZ0JBQWdCRixjQUFjO1FBQzlCLGdCQUFnQkEsY0FBYztJQUNoQztJQUdGLE1BQU1XLE9BQ0pYLGNBQWMsdUJBQ1osOERBQUN0QixzSEFBYUE7UUFBQ29CLFdBQVU7Ozs7OzZCQUV6Qiw4REFBQ25CLHNIQUFjQTtRQUFDbUIsV0FBVTs7Ozs7O0lBRzlCLE9BQU9JLDJCQUNMLDhEQUFDTDtRQUFJQyxXQUFXQTtrQkFBWWE7Ozs7OzZCQUU1Qiw4REFBQzlCLGtEQUFJQTtRQUFDaUIsV0FBV0E7UUFBV0csTUFBTUE7a0JBQy9CVTs7Ozs7O0FBR1A7TUFqQ1NaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC91aS9pbnZvaWNlcy9wYWdpbmF0aW9uLnRzeD84MDMwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgQXJyb3dMZWZ0SWNvbiwgQXJyb3dSaWdodEljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0LzI0L291dGxpbmUnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgZ2VuZXJhdGVQYWdpbmF0aW9uIH0gZnJvbSAnQC9hcHAvbGliL3V0aWxzJztcbmltcG9ydCB7IHVzZVBhdGhuYW1lLCB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdpbmF0aW9uKHsgdG90YWxQYWdlcyB9OiB7IHRvdGFsUGFnZXM6IG51bWJlciB9KSB7XG4gIC8vIE5PVEU6IGNvbW1lbnQgaW4gdGhpcyBjb2RlIHdoZW4geW91IGdldCB0byB0aGlzIHBvaW50IGluIHRoZSBjb3Vyc2VcblxuICAvLyBjb25zdCBhbGxQYWdlcyA9IGdlbmVyYXRlUGFnaW5hdGlvbihjdXJyZW50UGFnZSwgdG90YWxQYWdlcyk7XG5cbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xuICBjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKTtcbiAgY29uc3QgY3VycmVudFBhZ2UgPSBOdW1iZXIoc2VhcmNoUGFyYW1zLmdldCgncGFnZScpKSB8fCAxO1xuXG4gIGNvbnN0IGNyZWF0ZVBhZ2VVUkwgPSAocGFnZU51bWJlcjogbnVtYmVyIHwgc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhzZWFyY2hQYXJhbXMpO1xuICAgIHBhcmFtcy5zZXQoJ3BhZ2UnLCBwYWdlTnVtYmVyLnRvU3RyaW5nKCkpO1xuICAgIHJldHVybiBgJHtwYXRobmFtZX0/JHtwYXJhbXMudG9TdHJpbmcoKX1gO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiBOT1RFOiBjb21tZW50IGluIHRoaXMgY29kZSB3aGVuIHlvdSBnZXQgdG8gdGhpcyBwb2ludCBpbiB0aGUgY291cnNlICovfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4XCI+XG4gICAgICAgIDxQYWdpbmF0aW9uQXJyb3dcbiAgICAgICAgICBkaXJlY3Rpb249XCJsZWZ0XCJcbiAgICAgICAgICBocmVmPXtjcmVhdGVQYWdlVVJMKGN1cnJlbnRQYWdlIC0gMSl9XG4gICAgICAgICAgaXNEaXNhYmxlZD17Y3VycmVudFBhZ2UgPD0gMX1cbiAgICAgICAgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggLXNwYWNlLXgtcHhcIj5cbiAgICAgICAgICB7YWxsUGFnZXMubWFwKChwYWdlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgbGV0IHBvc2l0aW9uOiAnZmlyc3QnIHwgJ2xhc3QnIHwgJ3NpbmdsZScgfCAnbWlkZGxlJyB8IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSBwb3NpdGlvbiA9ICdmaXJzdCc7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IGFsbFBhZ2VzLmxlbmd0aCAtIDEpIHBvc2l0aW9uID0gJ2xhc3QnO1xuICAgICAgICAgICAgaWYgKGFsbFBhZ2VzLmxlbmd0aCA9PT0gMSkgcG9zaXRpb24gPSAnc2luZ2xlJztcbiAgICAgICAgICAgIGlmIChwYWdlID09PSAnLi4uJykgcG9zaXRpb24gPSAnbWlkZGxlJztcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb25OdW1iZXJcbiAgICAgICAgICAgICAgICBrZXk9e3BhZ2V9XG4gICAgICAgICAgICAgICAgaHJlZj17Y3JlYXRlUGFnZVVSTChwYWdlKX1cbiAgICAgICAgICAgICAgICBwYWdlPXtwYWdlfVxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPXtwb3NpdGlvbn1cbiAgICAgICAgICAgICAgICBpc0FjdGl2ZT17Y3VycmVudFBhZ2UgPT09IHBhZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8UGFnaW5hdGlvbkFycm93XG4gICAgICAgICAgZGlyZWN0aW9uPVwicmlnaHRcIlxuICAgICAgICAgIGhyZWY9e2NyZWF0ZVBhZ2VVUkwoY3VycmVudFBhZ2UgKyAxKX1cbiAgICAgICAgICBpc0Rpc2FibGVkPXtjdXJyZW50UGFnZSA+PSB0b3RhbFBhZ2VzfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFBhZ2luYXRpb25OdW1iZXIoe1xuICBwYWdlLFxuICBocmVmLFxuICBpc0FjdGl2ZSxcbiAgcG9zaXRpb24sXG59OiB7XG4gIHBhZ2U6IG51bWJlciB8IHN0cmluZztcbiAgaHJlZjogc3RyaW5nO1xuICBwb3NpdGlvbj86ICdmaXJzdCcgfCAnbGFzdCcgfCAnbWlkZGxlJyB8ICdzaW5nbGUnO1xuICBpc0FjdGl2ZTogYm9vbGVhbjtcbn0pIHtcbiAgY29uc3QgY2xhc3NOYW1lID0gY2xzeChcbiAgICAnZmxleCBoLTEwIHctMTAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtc20gYm9yZGVyJyxcbiAgICB7XG4gICAgICAncm91bmRlZC1sLW1kJzogcG9zaXRpb24gPT09ICdmaXJzdCcgfHwgcG9zaXRpb24gPT09ICdzaW5nbGUnLFxuICAgICAgJ3JvdW5kZWQtci1tZCc6IHBvc2l0aW9uID09PSAnbGFzdCcgfHwgcG9zaXRpb24gPT09ICdzaW5nbGUnLFxuICAgICAgJ3otMTAgYmctYmx1ZS02MDAgYm9yZGVyLWJsdWUtNjAwIHRleHQtd2hpdGUnOiBpc0FjdGl2ZSxcbiAgICAgICdob3ZlcjpiZy1ncmF5LTEwMCc6ICFpc0FjdGl2ZSAmJiBwb3NpdGlvbiAhPT0gJ21pZGRsZScsXG4gICAgICAndGV4dC1ncmF5LTMwMCc6IHBvc2l0aW9uID09PSAnbWlkZGxlJyxcbiAgICB9LFxuICApO1xuXG4gIHJldHVybiBpc0FjdGl2ZSB8fCBwb3NpdGlvbiA9PT0gJ21pZGRsZScgPyAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e3BhZ2V9PC9kaXY+XG4gICkgOiAoXG4gICAgPExpbmsgaHJlZj17aHJlZn0gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAge3BhZ2V9XG4gICAgPC9MaW5rPlxuICApO1xufVxuXG5mdW5jdGlvbiBQYWdpbmF0aW9uQXJyb3coe1xuICBocmVmLFxuICBkaXJlY3Rpb24sXG4gIGlzRGlzYWJsZWQsXG59OiB7XG4gIGhyZWY6IHN0cmluZztcbiAgZGlyZWN0aW9uOiAnbGVmdCcgfCAncmlnaHQnO1xuICBpc0Rpc2FibGVkPzogYm9vbGVhbjtcbn0pIHtcbiAgY29uc3QgY2xhc3NOYW1lID0gY2xzeChcbiAgICAnZmxleCBoLTEwIHctMTAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgYm9yZGVyJyxcbiAgICB7XG4gICAgICAncG9pbnRlci1ldmVudHMtbm9uZSB0ZXh0LWdyYXktMzAwJzogaXNEaXNhYmxlZCxcbiAgICAgICdob3ZlcjpiZy1ncmF5LTEwMCc6ICFpc0Rpc2FibGVkLFxuICAgICAgJ21yLTIgbWQ6bXItNCc6IGRpcmVjdGlvbiA9PT0gJ2xlZnQnLFxuICAgICAgJ21sLTIgbWQ6bWwtNCc6IGRpcmVjdGlvbiA9PT0gJ3JpZ2h0JyxcbiAgICB9LFxuICApO1xuXG4gIGNvbnN0IGljb24gPVxuICAgIGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gKFxuICAgICAgPEFycm93TGVmdEljb24gY2xhc3NOYW1lPVwidy00XCIgLz5cbiAgICApIDogKFxuICAgICAgPEFycm93UmlnaHRJY29uIGNsYXNzTmFtZT1cInctNFwiIC8+XG4gICAgKTtcblxuICByZXR1cm4gaXNEaXNhYmxlZCA/IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57aWNvbn08L2Rpdj5cbiAgKSA6IChcbiAgICA8TGluayBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaHJlZj17aHJlZn0+XG4gICAgICB7aWNvbn1cbiAgICA8L0xpbms+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQXJyb3dMZWZ0SWNvbiIsIkFycm93UmlnaHRJY29uIiwiY2xzeCIsIkxpbmsiLCJ1c2VQYXRobmFtZSIsInVzZVNlYXJjaFBhcmFtcyIsIlBhZ2luYXRpb24iLCJ0b3RhbFBhZ2VzIiwicGF0aG5hbWUiLCJzZWFyY2hQYXJhbXMiLCJjdXJyZW50UGFnZSIsIk51bWJlciIsImdldCIsImNyZWF0ZVBhZ2VVUkwiLCJwYWdlTnVtYmVyIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwic2V0IiwidG9TdHJpbmciLCJkaXYiLCJjbGFzc05hbWUiLCJQYWdpbmF0aW9uQXJyb3ciLCJkaXJlY3Rpb24iLCJocmVmIiwiaXNEaXNhYmxlZCIsImFsbFBhZ2VzIiwibWFwIiwicGFnZSIsImluZGV4IiwicG9zaXRpb24iLCJsZW5ndGgiLCJQYWdpbmF0aW9uTnVtYmVyIiwiaXNBY3RpdmUiLCJpY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/ui/invoices/pagination.tsx\n"));

/***/ })

});