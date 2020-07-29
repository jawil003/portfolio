webpackHotUpdate("static\\development\\pages\\de\\sources.js",{

/***/ "./components/sourcesItem.tsx":
/*!************************************!*\
  !*** ./components/sourcesItem.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SourcesItem; });\n/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ \"./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js\");\n/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\JW98\\\\OneDrive\\\\Dokumente\\\\Web\\\\Portfolio\\\\components\\\\sourcesItem.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\nvar count = -1;\n\nvar SourcesItem = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(SourcesItem, _React$Component);\n\n  var _super = _createSuper(SourcesItem);\n\n  function SourcesItem(props) {\n    var _this;\n\n    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, SourcesItem);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"componentWillUnmount\", function () {\n      count = -1;\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(SourcesItem, [{\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      count++;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return __jsx(\"a\", {\n        href: this.props.href,\n        style: {\n          textAlign: \"center\",\n          display: \"block\",\n          padding: \"30px\",\n          width: \"150px\",\n          margin: \"0px 20px\",\n          backgroundColor: SourcesItem.colors[count > SourcesItem.length ? Math.round(count / SourcesItem.length) : count]\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 7\n        }\n      }, this.props.title);\n    }\n  }]);\n\n  return SourcesItem;\n}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);\n\nObject(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(SourcesItem, \"colors\", [\"#E74C3C\", \"#3498DB\", \"#4caf50\", \"#8E44AD\", \"#F39C12\"]);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vQzovVXNlcnMvSlc5OC9PbmVEcml2ZS9Eb2t1bWVudGUvV2ViL1BvcnRmb2xpby9jb21wb25lbnRzL3NvdXJjZXNJdGVtLnRzeCJdLCJuYW1lcyI6WyJjb3VudCIsIlNvdXJjZXNJdGVtIiwicHJvcHMiLCJocmVmIiwidGV4dEFsaWduIiwiZGlzcGxheSIsInBhZGRpbmciLCJ3aWR0aCIsIm1hcmdpbiIsImJhY2tncm91bmRDb2xvciIsImNvbG9ycyIsImxlbmd0aCIsIk1hdGgiLCJyb3VuZCIsInRpdGxlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUtBLElBQUlBLEtBQWEsR0FBRyxDQUFDLENBQXJCOztJQUNxQkMsVzs7Ozs7QUFVbkIsdUJBQVlDLEtBQVosRUFBMEI7QUFBQTs7QUFBQTs7QUFDeEIsOEJBQU1BLEtBQU47O0FBRHdCLCtPQU1ILFlBQU07QUFDM0JGLFdBQUssR0FBRyxDQUFDLENBQVQ7QUFDRCxLQVJ5Qjs7QUFBQTtBQUV6Qjs7Ozt5Q0FDb0I7QUFDbkJBLFdBQUs7QUFDTjs7OzZCQUlRO0FBQ1AsYUFDRTtBQUNFLFlBQUksRUFBRSxLQUFLRSxLQUFMLENBQVdDLElBRG5CO0FBRUUsYUFBSyxFQUFFO0FBQ0xDLG1CQUFTLEVBQUUsUUFETjtBQUVMQyxpQkFBTyxFQUFFLE9BRko7QUFHTEMsaUJBQU8sRUFBRSxNQUhKO0FBSUxDLGVBQUssRUFBRSxPQUpGO0FBS0xDLGdCQUFNLEVBQUUsVUFMSDtBQU1MQyx5QkFBZSxFQUNiUixXQUFXLENBQUNTLE1BQVosQ0FDRVYsS0FBSyxHQUFHQyxXQUFXLENBQUNVLE1BQXBCLEdBQ0lDLElBQUksQ0FBQ0MsS0FBTCxDQUNFYixLQUFLLEdBQUdDLFdBQVcsQ0FBQ1UsTUFEdEIsQ0FESixHQUlJWCxLQUxOO0FBUEcsU0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBa0JHLEtBQUtFLEtBQUwsQ0FBV1ksS0FsQmQsQ0FERjtBQXNCRDs7OztFQTFDc0NDLDRDQUFLLENBQUNDLFM7O2tHQUExQmYsVyxZQUdLLENBQ3RCLFNBRHNCLEVBRXRCLFNBRnNCLEVBR3RCLFNBSHNCLEVBSXRCLFNBSnNCLEVBS3RCLFNBTHNCLEMiLCJmaWxlIjoiLi9jb21wb25lbnRzL3NvdXJjZXNJdGVtLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBocmVmOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxufVxyXG5sZXQgY291bnQ6IG51bWJlciA9IC0xO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3VyY2VzSXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcclxuICBQcm9wc1xyXG4+IHtcclxuICBwcml2YXRlIHN0YXRpYyBjb2xvcnMgPSBbXHJcbiAgICBcIiNFNzRDM0NcIixcclxuICAgIFwiIzM0OThEQlwiLFxyXG4gICAgXCIjNGNhZjUwXCIsXHJcbiAgICBcIiM4RTQ0QURcIixcclxuICAgIFwiI0YzOUMxMlwiLFxyXG4gIF07XHJcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIGNvdW50Kys7XHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ID0gKCkgPT4ge1xyXG4gICAgY291bnQgPSAtMTtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxhXHJcbiAgICAgICAgaHJlZj17dGhpcy5wcm9wcy5ocmVmfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgICAgICBwYWRkaW5nOiBcIjMwcHhcIixcclxuICAgICAgICAgIHdpZHRoOiBcIjE1MHB4XCIsXHJcbiAgICAgICAgICBtYXJnaW46IFwiMHB4IDIwcHhcIixcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcclxuICAgICAgICAgICAgU291cmNlc0l0ZW0uY29sb3JzW1xyXG4gICAgICAgICAgICAgIGNvdW50ID4gU291cmNlc0l0ZW0ubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICA/IE1hdGgucm91bmQoXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQgLyBTb3VyY2VzSXRlbS5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgOiBjb3VudFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7dGhpcy5wcm9wcy50aXRsZX1cclxuICAgICAgPC9hPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/sourcesItem.tsx\n");

/***/ })

})