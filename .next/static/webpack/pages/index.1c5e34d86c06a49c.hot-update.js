"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {\n        }));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nvar Home = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    _inherits(Home, Component);\n    var _super = _createSuper(Home);\n    function Home() {\n        _classCallCheck(this, Home);\n        var _this;\n        _this = _super.apply(this, arguments);\n        _defineProperty(_assertThisInitialized(_this), \"state\", {\n            images: [\n                \"/what-makes-serpentix-belting-drawing.png\",\n                \"/what-makes-serpentix-chain-drawing.png\",\n                \"/what-makes-serpentix-drive-drawing.png\",\n                \"/what-makes-serpentix-support-drawing.png\",\n                \"/what-makes-serpentix-tension-drawing.png\",\n                \"/what-makes-serpentix-track-drawing.png\", \n            ],\n            btns: [\n                'Tension',\n                'Track',\n                'Drive',\n                'Support',\n                'Chain',\n                'Bleting'\n            ],\n            actvie: 0\n        });\n        _defineProperty(_assertThisInitialized(_this), \"toggleImages\", function(index) {\n            _this.setState({\n                active: index\n            });\n            console.log(index);\n        });\n        return _this;\n    }\n    _createClass(Home, [\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                var _state = this.state, btns1 = _state.btns, active = _state.active, images = _state.images;\n                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"container-portrait\",\n                    __source: {\n                        fileName: \"/Users/ahmed./Desktop/Websites/conveyor-screen/pages/index.js\",\n                        lineNumber: 45,\n                        columnNumber: 7\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"row\",\n                        __source: {\n                            fileName: \"/Users/ahmed./Desktop/Websites/conveyor-screen/pages/index.js\",\n                            lineNumber: 46,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"header\",\n                                __source: {\n                                    fileName: \"/Users/ahmed./Desktop/Websites/conveyor-screen/pages/index.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                                    className: \"header-list\",\n                                    __source: {\n                                        fileName: \"/Users/ahmed./Desktop/Websites/conveyor-screen/pages/index.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: btns1.map(function(btns, index) {\n                                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                            className: index === active ? \"item actvie\" : \"item\",\n                                            onClick: _this.toggleImages.bind(_this, index),\n                                            __source: {\n                                                fileName: \"/Users/ahmed./Desktop/Websites/conveyor-screen/pages/index.js\",\n                                                lineNumber: 50,\n                                                columnNumber: 19\n                                            },\n                                            __self: _this,\n                                            children: btns\n                                        });\n                                    })\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: \"/what-makes-serpentix-belting-drawing.png\",\n                                width: \"1080px\",\n                                height: \"1920px\",\n                                className: \"conveyor-image\",\n                                __source: {\n                                    fileName: \"/Users/ahmed./Desktop/Websites/conveyor-screen/pages/index.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 11\n                                },\n                                __self: this\n                            })\n                        ]\n                    })\n                }));\n            }\n        }\n    ]);\n    return Home;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFzQztBQUNWO0FBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV4QkksSUFBSSxpQkFBVixRQUFROztjQUFGQSxJQUFJOzhCQUFKQSxJQUFJO2FBQUpBLElBQUk7OEJBQUpBLElBQUk7Ozt1REFFUkMsQ0FBSyxRQUFHLENBQUM7WUFFUEMsTUFBTSxFQUFFLENBQUM7Z0JBQ1AsQ0FBMkM7Z0JBQzNDLENBQXlDO2dCQUN6QyxDQUF5QztnQkFDekMsQ0FBMkM7Z0JBQzNDLENBQTJDO2dCQUMzQyxDQUF5QztZQUUzQyxDQUFDO1lBRURDLElBQUksRUFBRyxDQUFDO2dCQUNOLENBQVM7Z0JBQ1QsQ0FBTztnQkFDUCxDQUFPO2dCQUNQLENBQVM7Z0JBQ1QsQ0FBTztnQkFDUCxDQUFTO1lBQ1gsQ0FBQztZQUNEQyxNQUFNLEVBQUcsQ0FBQztRQUNaLENBQUM7dURBRURDLENBQVksZUFBRyxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDO2tCQUNwQkMsUUFBUSxDQUFDLENBQUM7Z0JBQ2JDLE1BQU0sRUFBRUYsS0FBSztZQUNmLENBQUM7WUFDREcsT0FBTyxDQUFDQyxHQUFHLENBQUNKLEtBQUs7UUFDbkIsQ0FBQzs7O2lCQTlCR04sSUFBSTs7WUFnQ1JXLEdBQU0sRUFBTkEsQ0FBTTttQkFBTkEsUUFBUSxDQUFSQSxNQUFNLEdBQUcsQ0FBQzs7Z0JBQ1IsR0FBSyxDQUlELE1BQVUsR0FBVixJQUFJLENBQUNWLEtBQUssRUFIWkUsS0FBSSxHQUdGLE1BQVUsQ0FIWkEsSUFBSSxFQUNKSyxNQUFNLEdBRUosTUFBVSxDQUZaQSxNQUFNLEVBQ05OLE1BQU0sR0FDSixNQUFVLENBRFpBLE1BQU07Z0JBR1IsTUFBTSxzRUFDSFUsQ0FBRztvQkFBQ0MsU0FBUyxFQUFDLENBQW9COzs7Ozs7O29HQUNoQ0QsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQUs7Ozs7Ozs7O2lHQUNqQkQsQ0FBRztnQ0FBQ0MsU0FBUyxFQUFDLENBQVE7Ozs7Ozs7K0dBQ3BCQyxDQUFFO29DQUFDRCxTQUFTLEVBQUMsQ0FBYTs7Ozs7Ozs4Q0FDeEJWLEtBQUksQ0FBQ1ksR0FBRyxDQUFDLFFBQVEsQ0FBUFosSUFBSSxFQUFFRyxLQUFLO3NEQUNsQixNQUFNLHdEQUFMVSxDQUFFOzRDQUFDSCxTQUFTLEVBQUVQLEtBQUssS0FBS0UsTUFBTSxHQUFHLENBQWEsZUFBRyxDQUFNOzRDQUN4RFMsT0FBTyxRQUFPWixZQUFZLENBQUNhLElBQUksUUFBT1osS0FBSzs7Ozs7OztzREFFeENILElBQUk7Ozs7O2lHQUtkSixtREFBSztnQ0FDTm9CLEdBQUcsRUFBQyxDQUEyQztnQ0FDL0NDLEtBQUssRUFBQyxDQUFRO2dDQUNkQyxNQUFNLEVBQUMsQ0FBUTtnQ0FDZlIsU0FBUyxFQUFDLENBQWdCOzs7Ozs7Ozs7OztZQUtsQyxDQUFDOzs7V0E5REdiLElBQUk7RUFBU0gsNENBQVM7QUFrRTVCLCtEQUFlRyxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiOyBcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0ZSA9IHtcblxuICAgIGltYWdlczogW1xuICAgICAgXCIvd2hhdC1tYWtlcy1zZXJwZW50aXgtYmVsdGluZy1kcmF3aW5nLnBuZ1wiLFxuICAgICAgXCIvd2hhdC1tYWtlcy1zZXJwZW50aXgtY2hhaW4tZHJhd2luZy5wbmdcIixcbiAgICAgIFwiL3doYXQtbWFrZXMtc2VycGVudGl4LWRyaXZlLWRyYXdpbmcucG5nXCIsXG4gICAgICBcIi93aGF0LW1ha2VzLXNlcnBlbnRpeC1zdXBwb3J0LWRyYXdpbmcucG5nXCIsXG4gICAgICBcIi93aGF0LW1ha2VzLXNlcnBlbnRpeC10ZW5zaW9uLWRyYXdpbmcucG5nXCIsXG4gICAgICBcIi93aGF0LW1ha2VzLXNlcnBlbnRpeC10cmFjay1kcmF3aW5nLnBuZ1wiLFxuICAgICAgXG4gICAgXSxcblxuICAgIGJ0bnMgOiBbXG4gICAgICAnVGVuc2lvbicsXG4gICAgICAnVHJhY2snLFxuICAgICAgJ0RyaXZlJyxcbiAgICAgICdTdXBwb3J0JyxcbiAgICAgICdDaGFpbicsXG4gICAgICAnQmxldGluZydcbiAgICBdLFxuICAgIGFjdHZpZSA6IDAsXG4gIH07XG4gIFxuICB0b2dnbGVJbWFnZXMgPSAoaW5kZXgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZTogaW5kZXgsXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coaW5kZXgpXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGJ0bnMsXG4gICAgICBhY3RpdmUsXG4gICAgICBpbWFnZXMsXG4gICAgfSA9IHRoaXMuc3RhdGVcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1wb3J0cmFpdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaGVhZGVyLWxpc3RcIj5cbiAgICAgICAgICAgICAge2J0bnMubWFwKChidG5zLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17aW5kZXggPT09IGFjdGl2ZSA/IFwiaXRlbSBhY3R2aWVcIiA6IFwiaXRlbVwifVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVJbWFnZXMuYmluZCh0aGlzLCBpbmRleCl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtidG5zfVxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3JjPVwiL3doYXQtbWFrZXMtc2VycGVudGl4LWJlbHRpbmctZHJhd2luZy5wbmdcIlxuICAgICAgICAgIHdpZHRoPVwiMTA4MHB4XCJcbiAgICAgICAgICBoZWlnaHQ9XCIxOTIwcHhcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnZleW9yLWltYWdlXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSGVhZCIsIkltYWdlIiwiSG9tZSIsInN0YXRlIiwiaW1hZ2VzIiwiYnRucyIsImFjdHZpZSIsInRvZ2dsZUltYWdlcyIsImluZGV4Iiwic2V0U3RhdGUiLCJhY3RpdmUiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwidWwiLCJtYXAiLCJsaSIsIm9uQ2xpY2siLCJiaW5kIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});