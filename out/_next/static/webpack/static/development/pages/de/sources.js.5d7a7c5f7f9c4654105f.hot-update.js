webpackHotUpdate("static\\development\\pages\\de\\sources.js",{

/***/ "./components/sourcesItem.tsx":
/*!************************************!*\
  !*** ./components/sourcesItem.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SourcesItem; });\n/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ \"./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js\");\n/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\JW98\\\\OneDrive\\\\Dokumente\\\\Web\\\\Portfolio\\\\components\\\\sourcesItem.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\nvar count = -1;\n\nvar SourcesItem = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(SourcesItem, _React$Component);\n\n  var _super = _createSuper(SourcesItem);\n\n  function SourcesItem(props) {\n    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, SourcesItem);\n\n    return _super.call(this, props);\n  }\n\n  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(SourcesItem, [{\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      count++;\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      count = -1;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return __jsx(\"a\", {\n        href: this.props.href,\n        style: {\n          textAlign: \"center\",\n          display: \"block\",\n          padding: \"30px\",\n          width: \"150px\",\n          margin: \"0px 20px\",\n          backgroundColor: SourcesItem.colors[count > SourcesItem.length ? Math.round(count / SourcesItem.length) : count]\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 7\n        }\n      }, this.props.title);\n    }\n  }]);\n\n  return SourcesItem;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\nObject(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(SourcesItem, \"colors\", [\"#E74C3C\", \"#3498DB\", \"#4caf50\", \"#8E44AD\", \"#F39C12\"]);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vQzovVXNlcnMvSlc5OC9PbmVEcml2ZS9Eb2t1bWVudGUvV2ViL1BvcnRmb2xpby9jb21wb25lbnRzL3NvdXJjZXNJdGVtLnRzeCJdLCJuYW1lcyI6WyJjb3VudCIsIlNvdXJjZXNJdGVtIiwicHJvcHMiLCJocmVmIiwidGV4dEFsaWduIiwiZGlzcGxheSIsInBhZGRpbmciLCJ3aWR0aCIsIm1hcmdpbiIsImJhY2tncm91bmRDb2xvciIsImNvbG9ycyIsImxlbmd0aCIsIk1hdGgiLCJyb3VuZCIsInRpdGxlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFLQSxJQUFJQSxLQUFhLEdBQUcsQ0FBQyxDQUFyQjs7SUFDcUJDLFc7Ozs7O0FBVW5CLHVCQUFZQyxLQUFaLEVBQTBCO0FBQUE7O0FBQUEsNkJBQ2xCQSxLQURrQjtBQUV6Qjs7Ozt5Q0FDb0I7QUFDbkJGLFdBQUs7QUFDTjs7OzJDQUNzQjtBQUNyQkEsV0FBSyxHQUFHLENBQUMsQ0FBVDtBQUNEOzs7NkJBQ1E7QUFDUCxhQUNFO0FBQ0UsWUFBSSxFQUFFLEtBQUtFLEtBQUwsQ0FBV0MsSUFEbkI7QUFFRSxhQUFLLEVBQUU7QUFDTEMsbUJBQVMsRUFBRSxRQUROO0FBRUxDLGlCQUFPLEVBQUUsT0FGSjtBQUdMQyxpQkFBTyxFQUFFLE1BSEo7QUFJTEMsZUFBSyxFQUFFLE9BSkY7QUFLTEMsZ0JBQU0sRUFBRSxVQUxIO0FBTUxDLHlCQUFlLEVBQ2JSLFdBQVcsQ0FBQ1MsTUFBWixDQUNFVixLQUFLLEdBQUdDLFdBQVcsQ0FBQ1UsTUFBcEIsR0FDSUMsSUFBSSxDQUFDQyxLQUFMLENBQ0ViLEtBQUssR0FBR0MsV0FBVyxDQUFDVSxNQUR0QixDQURKLEdBSUlYLEtBTE47QUFQRyxTQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FrQkcsS0FBS0UsS0FBTCxDQUFXWSxLQWxCZCxDQURGO0FBc0JEOzs7O0VBMUNzQ0MsNENBQUssQ0FBQ0MsUzs7a0dBQTFCZixXLFlBR0ssQ0FDdEIsU0FEc0IsRUFFdEIsU0FGc0IsRUFHdEIsU0FIc0IsRUFJdEIsU0FKc0IsRUFLdEIsU0FMc0IsQyIsImZpbGUiOiIuL2NvbXBvbmVudHMvc291cmNlc0l0ZW0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGhyZWY6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG59XHJcbmxldCBjb3VudDogbnVtYmVyID0gLTE7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdXJjZXNJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxyXG4gIFByb3BzXHJcbj4ge1xyXG4gIHByaXZhdGUgc3RhdGljIGNvbG9ycyA9IFtcclxuICAgIFwiI0U3NEMzQ1wiLFxyXG4gICAgXCIjMzQ5OERCXCIsXHJcbiAgICBcIiM0Y2FmNTBcIixcclxuICAgIFwiIzhFNDRBRFwiLFxyXG4gICAgXCIjRjM5QzEyXCIsXHJcbiAgXTtcclxuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgY291bnQrKztcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICBjb3VudCA9IC0xO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YVxyXG4gICAgICAgIGhyZWY9e3RoaXMucHJvcHMuaHJlZn1cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gICAgICAgICAgcGFkZGluZzogXCIzMHB4XCIsXHJcbiAgICAgICAgICB3aWR0aDogXCIxNTBweFwiLFxyXG4gICAgICAgICAgbWFyZ2luOiBcIjBweCAyMHB4XCIsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XHJcbiAgICAgICAgICAgIFNvdXJjZXNJdGVtLmNvbG9yc1tcclxuICAgICAgICAgICAgICBjb3VudCA+IFNvdXJjZXNJdGVtLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgPyBNYXRoLnJvdW5kKFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50IC8gU291cmNlc0l0ZW0ubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIDogY291bnRcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge3RoaXMucHJvcHMudGl0bGV9XHJcbiAgICAgIDwvYT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/sourcesItem.tsx\n");

/***/ })

})