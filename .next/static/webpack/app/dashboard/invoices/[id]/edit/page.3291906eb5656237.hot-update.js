"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/invoices/[id]/edit/page",{

/***/ "(app-pages-browser)/./app/ui/invoices/edit-form.tsx":
/*!***************************************!*\
  !*** ./app/ui/invoices/edit-form.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EditInvoiceForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=CheckIcon,ClockIcon,CurrencyDollarIcon,UserCircleIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/UserCircleIcon.js\");\n/* harmony import */ var _barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=CheckIcon,ClockIcon,CurrencyDollarIcon,UserCircleIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/CurrencyDollarIcon.js\");\n/* harmony import */ var _barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=CheckIcon,ClockIcon,CurrencyDollarIcon,UserCircleIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/ClockIcon.js\");\n/* harmony import */ var _barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=CheckIcon,ClockIcon,CurrencyDollarIcon,UserCircleIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/CheckIcon.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/ui/button */ \"(app-pages-browser)/./app/ui/button.tsx\");\n/* harmony import */ var _app_lib_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/lib/actions */ \"(app-pages-browser)/./app/lib/actions.ts\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction EditInvoiceForm(param) {\n    let { invoice, customers } = param;\n    _s();\n    const initialState = {\n        state: null\n    };\n    const updateInvoiceWithId = _app_lib_actions__WEBPACK_IMPORTED_MODULE_3__.updateInvoice.bind(null, null, invoice.id);\n    const [state, action] = (0,react_dom__WEBPACK_IMPORTED_MODULE_4__.useFormState)(_app_lib_actions__WEBPACK_IMPORTED_MODULE_3__.updateInvoice, initialState);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        action: action,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rounded-md bg-gray-50 p-4 md:p-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"customer\",\n                                className: \"mb-2 block text-sm font-medium\",\n                                children: \"Choose customer\"\n                            }, void 0, false, {\n                                fileName: \"/Users/finlaas/nextjs-dashboard/app/ui/invoices/edit-form.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                        id: \"customer\",\n                                        name: \"customerId\",\n                                        className: \"peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500\",\n                                        defaultValue: invoice.customer_id,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"\",\n                                                disabled: true,\n                                                children: \"Select a customer\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/finlaas/nextjs-dashboard/app/ui/invoices/edit-form.tsx\",\n                                                lineNumber: 41,\n                                                columnNumber: 15\n                                            }, this),\n                                            customers.map((customer)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: customer.id,\n                                                    children: customer.name\n                                                }, customer.id, false, {\n                                                    fileName: \"/Users/finlaas/nextjs-dashboard/app/ui/invoices/edit-form.tsx\",\n                                                    lineNumber: 45,\n                                                    columnNumber: 17\n                                                }, this))\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/finlaas/nextjs-dashboard/app/ui/invoices/edit-form.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        className: \"pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/finlaas/nextjs-dashboard/app/ui/invoices/edit-form.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/finlaas/nextjs-dashboard/app/ui/invoices/edit-form.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/finlaas/nextjs-dashboard/app/ui/invoices/edit-form.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"amount\",\n                                className: \"mb-2 block text-sm font-medium\",\n                                children: \"Choose an amount\"\n                            }, void 0, false, {\n                                fileName: \"/Users/finlaas/nextjs-dashboard/app/ui/invoices/edit-form.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative mt-2 rounded-md\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            id: \"amount\",\n                                            name: \"amount\",\n                                            type: \"number\",\n                                            step: \"0.01\",\n                                            defaultValue: invoice.amount,\n                                            placeholder: \"Enter USD amount\",\n                                            className: \"peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/finlaas/nextjs-dashboard/app/ui/invoices/edit-form.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                            className: \"pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/finlaas/nextjs-dashboard/app/ui/invoices/edit-form.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/finlaas/nextjs-dashboard/app/ui/invoices/edit-form.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/finlaas/nextjs-dashboard/app/ui/invoices/edit-form.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/finlaas/nextjs-dashboard/app/ui/invoices/edit-form.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"legend\", {\n                                className: \"mb-2 block text-sm font-medium\",\n                                children: \"Set the invoice status\"\n                            }, void 0, false, {\n                                fileName: \"/Users/finlaas/nextjs-dashboard/app/ui/invoices/edit-form.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"rounded-md border border-gray-200 bg-white px-[14px] py-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex gap-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    id: \"pending\",\n                                                    name: \"status\",\n                                                    type: \"radio\",\n                                                    value: \"pending\",\n                                                    defaultChecked: invoice.status === \"pending\",\n                                                    className: \"h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/finlaas/nextjs-dashboard/app/ui/invoices/edit-form.tsx\",\n                                                    lineNumber: 83,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"pending\",\n                                                    className: \"ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600\",\n                                                    children: [\n                                                        \"Pending \",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                            className: \"h-4 w-4\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/finlaas/nextjs-dashboard/app/ui/invoices/edit-form.tsx\",\n                                                            lineNumber: 95,\n                                                            columnNumber: 27\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/finlaas/nextjs-dashboard/app/ui/invoices/edit-form.tsx\",\n                                                    lineNumber: 91,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/finlaas/nextjs-dashboard/app/ui/invoices/edit-form.tsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    id: \"paid\",\n                                                    name: \"status\",\n                                                    type: \"radio\",\n                                                    value: \"paid\",\n                                                    defaultChecked: invoice.status === \"paid\",\n                                                    className: \"h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/finlaas/nextjs-dashboard/app/ui/invoices/edit-form.tsx\",\n                                                    lineNumber: 99,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"paid\",\n                                                    className: \"ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white\",\n                                                    children: [\n                                                        \"Paid \",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                            className: \"h-4 w-4\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/finlaas/nextjs-dashboard/app/ui/invoices/edit-form.tsx\",\n                                                            lineNumber: 111,\n                                                            columnNumber: 24\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/finlaas/nextjs-dashboard/app/ui/invoices/edit-form.tsx\",\n                                                    lineNumber: 107,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/finlaas/nextjs-dashboard/app/ui/invoices/edit-form.tsx\",\n                                            lineNumber: 98,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/finlaas/nextjs-dashboard/app/ui/invoices/edit-form.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/finlaas/nextjs-dashboard/app/ui/invoices/edit-form.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/finlaas/nextjs-dashboard/app/ui/invoices/edit-form.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/finlaas/nextjs-dashboard/app/ui/invoices/edit-form.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-6 flex justify-end gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/dashboard/invoices\",\n                        className: \"flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200\",\n                        children: \"Cancel\"\n                    }, void 0, false, {\n                        fileName: \"/Users/finlaas/nextjs-dashboard/app/ui/invoices/edit-form.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        type: \"submit\",\n                        children: \"Edit Invoice\"\n                    }, void 0, false, {\n                        fileName: \"/Users/finlaas/nextjs-dashboard/app/ui/invoices/edit-form.tsx\",\n                        lineNumber: 125,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/finlaas/nextjs-dashboard/app/ui/invoices/edit-form.tsx\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/finlaas/nextjs-dashboard/app/ui/invoices/edit-form.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(EditInvoiceForm, \"8OZn8iIokM1duhUXZQ6EOnlT+kw=\", false, function() {\n    return [\n        react_dom__WEBPACK_IMPORTED_MODULE_4__.useFormState\n    ];\n});\n_c = EditInvoiceForm;\nvar _c;\n$RefreshReg$(_c, \"EditInvoiceForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91aS9pbnZvaWNlcy9lZGl0LWZvcm0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRcUM7QUFDUjtBQUNZO0FBQ1M7QUFDVDtBQUUxQixTQUFTUSxnQkFBZ0IsS0FNdkM7UUFOdUMsRUFDdENDLE9BQU8sRUFDUEMsU0FBUyxFQUlWLEdBTnVDOztJQU90QyxNQUFNQyxlQUFlO1FBQUNDLE9BQU87SUFBSTtJQUNqQyxNQUFNQyxzQkFBc0JQLDJEQUFhQSxDQUFDUSxJQUFJLENBQUMsTUFBTSxNQUFNTCxRQUFRTSxFQUFFO0lBQ3JFLE1BQU0sQ0FBQ0gsT0FBT0ksT0FBTyxHQUFHVCx1REFBWUEsQ0FBQ0QsMkRBQWFBLEVBQUVLO0lBRXBELHFCQUNFLDhEQUFDTTtRQUFLRCxRQUFRQTs7MEJBQ1osOERBQUNFO2dCQUFJQyxXQUFVOztrQ0FFYiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FBTUMsU0FBUTtnQ0FBV0YsV0FBVTswQ0FBaUM7Ozs7OzswQ0FHckUsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ0c7d0NBQ0NQLElBQUc7d0NBQ0hRLE1BQUs7d0NBQ0xKLFdBQVU7d0NBQ1ZLLGNBQWNmLFFBQVFnQixXQUFXOzswREFFakMsOERBQUNDO2dEQUFPQyxPQUFNO2dEQUFHQyxRQUFROzBEQUFDOzs7Ozs7NENBR3pCbEIsVUFBVW1CLEdBQUcsQ0FBQyxDQUFDQyx5QkFDZCw4REFBQ0o7b0RBQXlCQyxPQUFPRyxTQUFTZixFQUFFOzhEQUN6Q2UsU0FBU1AsSUFBSTttREFESE8sU0FBU2YsRUFBRTs7Ozs7Ozs7Ozs7a0RBSzVCLDhEQUFDWiwrSUFBY0E7d0NBQUNnQixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSzlCLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFNQyxTQUFRO2dDQUFTRixXQUFVOzBDQUFpQzs7Ozs7OzBDQUduRSw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNEO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ1k7NENBQ0NoQixJQUFHOzRDQUNIUSxNQUFLOzRDQUNMUyxNQUFLOzRDQUNMQyxNQUFLOzRDQUNMVCxjQUFjZixRQUFReUIsTUFBTTs0Q0FDNUJDLGFBQVk7NENBQ1poQixXQUFVOzs7Ozs7c0RBRVosOERBQUNqQiwrSUFBa0JBOzRDQUFDaUIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBTXBDLDhEQUFDaUI7OzBDQUNDLDhEQUFDQztnQ0FBT2xCLFdBQVU7MENBQWlDOzs7Ozs7MENBR25ELDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDRDs0Q0FBSUMsV0FBVTs7OERBQ2IsOERBQUNZO29EQUNDaEIsSUFBRztvREFDSFEsTUFBSztvREFDTFMsTUFBSztvREFDTEwsT0FBTTtvREFDTlcsZ0JBQWdCN0IsUUFBUThCLE1BQU0sS0FBSztvREFDbkNwQixXQUFVOzs7Ozs7OERBRVosOERBQUNDO29EQUNDQyxTQUFRO29EQUNSRixXQUFVOzt3REFDWDtzRUFDUyw4REFBQ2xCLCtJQUFTQTs0REFBQ2tCLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFHakMsOERBQUNEOzRDQUFJQyxXQUFVOzs4REFDYiw4REFBQ1k7b0RBQ0NoQixJQUFHO29EQUNIUSxNQUFLO29EQUNMUyxNQUFLO29EQUNMTCxPQUFNO29EQUNOVyxnQkFBZ0I3QixRQUFROEIsTUFBTSxLQUFLO29EQUNuQ3BCLFdBQVU7Ozs7Ozs4REFFWiw4REFBQ0M7b0RBQ0NDLFNBQVE7b0RBQ1JGLFdBQVU7O3dEQUNYO3NFQUNNLDhEQUFDbkIsK0lBQVNBOzREQUFDbUIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBT3RDLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNmLGtEQUFJQTt3QkFDSG9DLE1BQUs7d0JBQ0xyQixXQUFVO2tDQUNYOzs7Ozs7a0NBR0QsOERBQUNkLGtEQUFNQTt3QkFBQzJCLE1BQUs7a0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk5QjtHQWxId0J4Qjs7UUFTRUQsbURBQVlBOzs7S0FUZEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3VpL2ludm9pY2VzL2VkaXQtZm9ybS50c3g/NzZmZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IEN1c3RvbWVyRmllbGQsIEludm9pY2VGb3JtIH0gZnJvbSAnQC9hcHAvbGliL2RlZmluaXRpb25zJztcbmltcG9ydCB7XG4gIENoZWNrSWNvbixcbiAgQ2xvY2tJY29uLFxuICBDdXJyZW5jeURvbGxhckljb24sXG4gIFVzZXJDaXJjbGVJY29uLFxufSBmcm9tICdAaGVyb2ljb25zL3JlYWN0LzI0L291dGxpbmUnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0AvYXBwL3VpL2J1dHRvbic7XG5pbXBvcnQgeyB1cGRhdGVJbnZvaWNlIH0gZnJvbSAnQC9hcHAvbGliL2FjdGlvbnMnO1xuaW1wb3J0IHsgdXNlRm9ybVN0YXRlIH0gZnJvbSAncmVhY3QtZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdEludm9pY2VGb3JtKHtcbiAgaW52b2ljZSxcbiAgY3VzdG9tZXJzLFxufToge1xuICBpbnZvaWNlOiBJbnZvaWNlRm9ybTtcbiAgY3VzdG9tZXJzOiBDdXN0b21lckZpZWxkW107XG59KSB7XG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtzdGF0ZTogbnVsbH1cbiAgY29uc3QgdXBkYXRlSW52b2ljZVdpdGhJZCA9IHVwZGF0ZUludm9pY2UuYmluZChudWxsLCBudWxsLCBpbnZvaWNlLmlkKTtcbiAgY29uc3QgW3N0YXRlLCBhY3Rpb25dID0gdXNlRm9ybVN0YXRlKHVwZGF0ZUludm9pY2UsIGluaXRpYWxTdGF0ZSlcblxuICByZXR1cm4gKFxuICAgIDxmb3JtIGFjdGlvbj17YWN0aW9ufT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBiZy1ncmF5LTUwIHAtNCBtZDpwLTZcIj5cbiAgICAgICAgey8qIEN1c3RvbWVyIE5hbWUgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY3VzdG9tZXJcIiBjbGFzc05hbWU9XCJtYi0yIGJsb2NrIHRleHQtc20gZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgIENob29zZSBjdXN0b21lclxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICBpZD1cImN1c3RvbWVyXCJcbiAgICAgICAgICAgICAgbmFtZT1cImN1c3RvbWVySWRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwZWVyIGJsb2NrIHctZnVsbCBjdXJzb3ItcG9pbnRlciByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcHktMiBwbC0xMCB0ZXh0LXNtIG91dGxpbmUtMiBwbGFjZWhvbGRlcjp0ZXh0LWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtpbnZvaWNlLmN1c3RvbWVyX2lkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAgU2VsZWN0IGEgY3VzdG9tZXJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgIHtjdXN0b21lcnMubWFwKChjdXN0b21lcikgPT4gKFxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtjdXN0b21lci5pZH0gdmFsdWU9e2N1c3RvbWVyLmlkfT5cbiAgICAgICAgICAgICAgICAgIHtjdXN0b21lci5uYW1lfVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPFVzZXJDaXJjbGVJY29uIGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgbGVmdC0zIHRvcC0xLzIgaC1bMThweF0gdy1bMThweF0gLXRyYW5zbGF0ZS15LTEvMiB0ZXh0LWdyYXktNTAwXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIEludm9pY2UgQW1vdW50ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFtb3VudFwiIGNsYXNzTmFtZT1cIm1iLTIgYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgQ2hvb3NlIGFuIGFtb3VudFxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtdC0yIHJvdW5kZWQtbWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgaWQ9XCJhbW91bnRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJhbW91bnRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHN0ZXA9XCIwLjAxXCJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2ludm9pY2UuYW1vdW50fVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgVVNEIGFtb3VudFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGVlciBibG9jayB3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHB5LTIgcGwtMTAgdGV4dC1zbSBvdXRsaW5lLTIgcGxhY2Vob2xkZXI6dGV4dC1ncmF5LTUwMFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxDdXJyZW5jeURvbGxhckljb24gY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBsZWZ0LTMgdG9wLTEvMiBoLVsxOHB4XSB3LVsxOHB4XSAtdHJhbnNsYXRlLXktMS8yIHRleHQtZ3JheS01MDAgcGVlci1mb2N1czp0ZXh0LWdyYXktOTAwXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogSW52b2ljZSBTdGF0dXMgKi99XG4gICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICA8bGVnZW5kIGNsYXNzTmFtZT1cIm1iLTIgYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgU2V0IHRoZSBpbnZvaWNlIHN0YXR1c1xuICAgICAgICAgIDwvbGVnZW5kPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIGJnLXdoaXRlIHB4LVsxNHB4XSBweS0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgaWQ9XCJwZW5kaW5nXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwicGVuZGluZ1wiXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17aW52b2ljZS5zdGF0dXMgPT09ICdwZW5kaW5nJ31cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNCB3LTQgY3Vyc29yLXBvaW50ZXIgYm9yZGVyLWdyYXktMzAwIGJnLWdyYXktMTAwIHRleHQtZ3JheS02MDAgZm9jdXM6cmluZy0yXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInBlbmRpbmdcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMiBmbGV4IGN1cnNvci1wb2ludGVyIGl0ZW1zLWNlbnRlciBnYXAtMS41IHJvdW5kZWQtZnVsbCBiZy1ncmF5LTEwMCBweC0zIHB5LTEuNSB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtZ3JheS02MDBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFBlbmRpbmcgPENsb2NrSWNvbiBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgaWQ9XCJwYWlkXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwicGFpZFwiXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17aW52b2ljZS5zdGF0dXMgPT09ICdwYWlkJ31cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNCB3LTQgY3Vyc29yLXBvaW50ZXIgYm9yZGVyLWdyYXktMzAwIGJnLWdyYXktMTAwIHRleHQtZ3JheS02MDAgZm9jdXM6cmluZy0yXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInBhaWRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMiBmbGV4IGN1cnNvci1wb2ludGVyIGl0ZW1zLWNlbnRlciBnYXAtMS41IHJvdW5kZWQtZnVsbCBiZy1ncmVlbi01MDAgcHgtMyBweS0xLjUgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBQYWlkIDxDaGVja0ljb24gY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9maWVsZHNldD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IGZsZXgganVzdGlmeS1lbmQgZ2FwLTRcIj5cbiAgICAgICAgPExpbmtcbiAgICAgICAgICBocmVmPVwiL2Rhc2hib2FyZC9pbnZvaWNlc1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBoLTEwIGl0ZW1zLWNlbnRlciByb3VuZGVkLWxnIGJnLWdyYXktMTAwIHB4LTQgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNjAwIHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOmJnLWdyYXktMjAwXCJcbiAgICAgICAgPlxuICAgICAgICAgIENhbmNlbFxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPkVkaXQgSW52b2ljZTwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkNoZWNrSWNvbiIsIkNsb2NrSWNvbiIsIkN1cnJlbmN5RG9sbGFySWNvbiIsIlVzZXJDaXJjbGVJY29uIiwiTGluayIsIkJ1dHRvbiIsInVwZGF0ZUludm9pY2UiLCJ1c2VGb3JtU3RhdGUiLCJFZGl0SW52b2ljZUZvcm0iLCJpbnZvaWNlIiwiY3VzdG9tZXJzIiwiaW5pdGlhbFN0YXRlIiwic3RhdGUiLCJ1cGRhdGVJbnZvaWNlV2l0aElkIiwiYmluZCIsImlkIiwiYWN0aW9uIiwiZm9ybSIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiaHRtbEZvciIsInNlbGVjdCIsIm5hbWUiLCJkZWZhdWx0VmFsdWUiLCJjdXN0b21lcl9pZCIsIm9wdGlvbiIsInZhbHVlIiwiZGlzYWJsZWQiLCJtYXAiLCJjdXN0b21lciIsImlucHV0IiwidHlwZSIsInN0ZXAiLCJhbW91bnQiLCJwbGFjZWhvbGRlciIsImZpZWxkc2V0IiwibGVnZW5kIiwiZGVmYXVsdENoZWNrZWQiLCJzdGF0dXMiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/ui/invoices/edit-form.tsx\n"));

/***/ })

});