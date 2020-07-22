module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "23aj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/layout/layout.tsx + 3 modules
var layout = __webpack_require__("7Ubz");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/lebenslaufItem.tsx
var __jsx = external_react_default.a.createElement;


class lebenslaufItem_LebenslaufItem extends external_react_default.a.Component {
  render() {
    return __jsx(link_default.a, {
      href: this.props.href
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("div", {
      style: {
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        justifyItems: "center"
      }
    }, __jsx("div", null, this.props.icon), __jsx("p", {
      style: {
        display: "inline-block",
        margin: "0px",
        marginLeft: "20px",
        maxWidth: "300px",
        textAlign: "center"
      }
    }, this.props.children))));
  }

}
// EXTERNAL MODULE: external "@material-ui/icons/School"
var School_ = __webpack_require__("RXm+");
var School_default = /*#__PURE__*/__webpack_require__.n(School_);

// EXTERNAL MODULE: external "@material-ui/icons/Work"
var Work_ = __webpack_require__("dWSA");
var Work_default = /*#__PURE__*/__webpack_require__.n(Work_);

// EXTERNAL MODULE: ./components/layout/indexItem.tsx
var indexItem = __webpack_require__("6EAQ");

// CONCATENATED MODULE: ./components/lebenslauf.tsx
var lebenslauf_jsx = external_react_default.a.createElement;





class lebenslauf_Lebenslauf extends external_react_default.a.Component {
  render() {
    return lebenslauf_jsx(indexItem["a" /* default */], {
      title: "Lebenslauf"
    }, lebenslauf_jsx(lebenslaufItem_LebenslaufItem, {
      href: "https://www.fh-dortmund.de/de/index.php",
      icon: lebenslauf_jsx(School_default.a, {
        color: "primary",
        fontSize: "large"
      })
    }, "Studium an der Fachhochschule Dortmund Bsc. Wirtschaftsinformatik", lebenslauf_jsx("ul", {
      style: {
        padding: "0px"
      }
    }, lebenslauf_jsx("li", null, "Algorithmen und Datenstrukturen"), lebenslauf_jsx("li", null, "Java Grundkenntnisse und fortgeschrittenes UI Design mit Swing"), lebenslauf_jsx("li", null, "Moderne Webentwicklung mit HTML, CSS, Javascript und NodeJS"))), lebenslauf_jsx(lebenslaufItem_LebenslaufItem, {
      href: "https://www.adesso.de/de/index.jsp",
      icon: lebenslauf_jsx(School_default.a, {
        color: "primary",
        fontSize: "large"
      })
    }, "Projekt mit der Adesso SE im Bereich Mobile App Development ChatBot", lebenslauf_jsx("ul", {
      style: {
        padding: "0px"
      }
    }, lebenslauf_jsx("li", null, "Entwicklung einer Java Android App"), lebenslauf_jsx("li", null, "Kommunikation mit der Adesso ChatBot Workbench"))), lebenslauf_jsx(lebenslaufItem_LebenslaufItem, {
      href: "https://www.agido.com/",
      icon: lebenslauf_jsx(Work_default.a, {
        color: "primary",
        fontSize: "large"
      })
    }, "Arbeit als Werkstudent Agido GmbH", lebenslauf_jsx("br", null), lebenslauf_jsx("br", null), lebenslauf_jsx("ul", {
      style: {
        padding: "0px"
      }
    }, lebenslauf_jsx("li", null, "Weiterentwicklung Java Swing Client"), lebenslauf_jsx("li", null, "Entwicklung JBoss Backend"))), lebenslauf_jsx(lebenslaufItem_LebenslaufItem, {
      href: "https://www.phoenix-gymnasium-hoerde.de/",
      icon: lebenslauf_jsx(School_default.a, {
        color: "primary",
        fontSize: "large"
      })
    }, "Allgemeine Hochschulreife (Phoenix Gymnasium Dortmund)", lebenslauf_jsx("ul", {
      style: {
        padding: "0px"
      }
    }, lebenslauf_jsx("li", null, "Besuch des Informatik Leistungskurses"), lebenslauf_jsx("li", null, "Entwicklung von Software basierend aus Stifte und M\xE4use SDK"))), lebenslauf_jsx(lebenslaufItem_LebenslaufItem, {
      href: "https://www.berghofer-grundschule.de/%C3%BCber-uns/",
      icon: lebenslauf_jsx(School_default.a, {
        color: "primary",
        fontSize: "large"
      })
    }, "Grundschulabschluss (Busenberg Grundschule)", lebenslauf_jsx("ul", {
      style: {
        padding: "0px"
      }
    }, lebenslauf_jsx("li", null, "Grundausbildung in Wort, Mathematik und Schrift"))));
  }

}
// EXTERNAL MODULE: external "@material-ui/core/Divider"
var Divider_ = __webpack_require__("nybW");
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);

// CONCATENATED MODULE: ./components/skillIttem.tsx
var skillIttem_jsx = external_react_default.a.createElement;


class skillIttem_SkillItem extends external_react_default.a.Component {
  render() {
    return skillIttem_jsx(link_default.a, {
      href: this.props.href,
      passHref: true
    }, skillIttem_jsx("a", {
      target: "_blank"
    }, skillIttem_jsx("div", {
      style: {
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        justifyItems: "center"
      }
    }, skillIttem_jsx("div", null, this.props.icon), skillIttem_jsx("p", {
      style: {
        display: "inline-block",
        margin: "0px",
        marginTop: "10px",
        maxWidth: "300px",
        textAlign: "center"
      }
    }, this.props.children))));
  }

}
// CONCATENATED MODULE: ./components/icons/typescript.icon.tsx

var typescript_icon_jsx = external_react_default.a.createElement;

const TypescriptIcon = props => {
  return typescript_icon_jsx("svg", {
    style: {
      fontSize: props.fontSize === "small" ? "0.5rem" : props.fontSize === "normal" ? "1rem" : "3.5rem"
    },
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 128 128",
    width: "1em",
    height: "1em"
  }, typescript_icon_jsx("path", {
    fill: "#007acc",
    d: "M2,63.91v62.5H127V1.41H2Zm100.73-5a15.56,15.56,0,0,1,7.82,4.5,20.58,20.58,0,0,1,3,4c0,.16-5.4,3.81-8.69,5.85-.12.08-.6-.44-1.13-1.23a7.09,7.09,0,0,0-5.87-3.53c-3.79-.26-6.23,1.73-6.21,5a4.58,4.58,0,0,0,.54,2.34c.83,1.73,2.38,2.76,7.24,4.86,8.95,3.85,12.78,6.39,15.16,10,2.66,4,3.25,10.46,1.45,15.24-2,5.2-6.9,8.73-13.83,9.9a38.32,38.32,0,0,1-9.52-.1A23,23,0,0,1,80,109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34,9.34,0,0,1,1.15-.73L82.5,101l3.59-2.08.75,1.11a16.78,16.78,0,0,0,4.74,4.54c4,2.1,9.46,1.81,12.16-.62a5.43,5.43,0,0,0,.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48,16.48,0,0,1-3.43-6.25,25,25,0,0,1-.22-8c1.33-6.23,6-10.58,12.82-11.87A31.66,31.66,0,0,1,102.73,58.93ZM73.39,64.15l0,5.12H57.16V115.5H45.65V69.26H29.38v-5a49.19,49.19,0,0,1,.14-5.16c.06-.08,10-.12,22-.1L73.33,59Z"
  }));
};

/* harmony default export */ var typescript_icon = (TypescriptIcon);
// CONCATENATED MODULE: ./components/icons/react.icon.tsx

var react_icon_jsx = external_react_default.a.createElement;

const ReactIcon = props => {
  return react_icon_jsx("svg", {
    version: "1.1",
    id: "Layer_2_1_",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    style: {
      fontSize: props.fontSize === "small" ? "0.5rem" : props.fontSize === "normal" ? "1rem" : "3.5rem"
    },
    width: "1em",
    height: "1em",
    viewBox: "160 140 541.9 295.3",
    enableBackground: "new 0 0 841.9 595.3"
  }, react_icon_jsx("g", null, react_icon_jsx("path", {
    fill: "#61DAFB",
    d: "M666.3,296.5c0-32.5-40.7-63.3-103.1-82.4c14.4-63.6,8-114.2-20.2-130.4c-6.5-3.8-14.1-5.6-22.4-5.6v22.3\r c4.6,0,8.3,0.9,11.4,2.6c13.6,7.8,19.5,37.5,14.9,75.7c-1.1,9.4-2.9,19.3-5.1,29.4c-19.6-4.8-41-8.5-63.5-10.9\r c-13.5-18.5-27.5-35.3-41.6-50c32.6-30.3,63.2-46.9,84-46.9l0-22.3c0,0,0,0,0,0c-27.5,0-63.5,19.6-99.9,53.6\r c-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7,0,51.4,16.5,84,46.6c-14,14.7-28,31.4-41.3,49.9c-22.6,2.4-44,6.1-63.6,11\r c-2.3-10-4-19.7-5.2-29c-4.7-38.2,1.1-67.9,14.6-75.8c3-1.8,6.9-2.6,11.5-2.6l0-22.3c0,0,0,0,0,0c-8.4,0-16,1.8-22.6,5.6\r c-28.1,16.2-34.4,66.7-19.9,130.1c-62.2,19.2-102.7,49.9-102.7,82.3c0,32.5,40.7,63.3,103.1,82.4c-14.4,63.6-8,114.2,20.2,130.4\r c6.5,3.8,14.1,5.6,22.5,5.6c27.5,0,63.5-19.6,99.9-53.6c36.4,33.8,72.4,53.2,99.9,53.2c8.4,0,16-1.8,22.6-5.6\r c28.1-16.2,34.4-66.7,19.9-130.1C625.8,359.7,666.3,328.9,666.3,296.5z M536.1,229.8c-3.7,12.9-8.3,26.2-13.5,39.5\r c-4.1-8-8.4-16-13.1-24c-4.6-8-9.5-15.8-14.4-23.4C509.3,224,523,226.6,536.1,229.8z M490.3,336.3c-7.8,13.5-15.8,26.3-24.1,38.2\r c-14.9,1.3-30,2-45.2,2c-15.1,0-30.2-0.7-45-1.9c-8.3-11.9-16.4-24.6-24.2-38c-7.6-13.1-14.5-26.4-20.8-39.8\r c6.2-13.4,13.2-26.8,20.7-39.9c7.8-13.5,15.8-26.3,24.1-38.2c14.9-1.3,30-2,45.2-2c15.1,0,30.2,0.7,45,1.9\r c8.3,11.9,16.4,24.6,24.2,38c7.6,13.1,14.5,26.4,20.8,39.8C504.7,309.8,497.8,323.2,490.3,336.3z M522.6,323.3\r c5.4,13.4,10,26.8,13.8,39.8c-13.1,3.2-26.9,5.9-41.2,8c4.9-7.7,9.8-15.6,14.4-23.7C514.2,339.4,518.5,331.3,522.6,323.3z\r M421.2,430c-9.3-9.6-18.6-20.3-27.8-32c9,0.4,18.2,0.7,27.5,0.7c9.4,0,18.7-0.2,27.8-0.7C439.7,409.7,430.4,420.4,421.2,430z\r M346.8,371.1c-14.2-2.1-27.9-4.7-41-7.9c3.7-12.9,8.3-26.2,13.5-39.5c4.1,8,8.4,16,13.1,24C337.1,355.7,341.9,363.5,346.8,371.1z\r M420.7,163c9.3,9.6,18.6,20.3,27.8,32c-9-0.4-18.2-0.7-27.5-0.7c-9.4,0-18.7,0.2-27.8,0.7C402.2,183.3,411.5,172.6,420.7,163z\r M346.7,221.9c-4.9,7.7-9.8,15.6-14.4,23.7c-4.6,8-8.9,16-13,24c-5.4-13.4-10-26.8-13.8-39.8C318.6,226.7,332.4,224,346.7,221.9z\r M256.2,347.1c-35.4-15.1-58.3-34.9-58.3-50.6c0-15.7,22.9-35.6,58.3-50.6c8.6-3.7,18-7,27.7-10.1c5.7,19.6,13.2,40,22.5,60.9\r c-9.2,20.8-16.6,41.1-22.2,60.6C274.3,354.2,264.9,350.8,256.2,347.1z M310,490c-13.6-7.8-19.5-37.5-14.9-75.7\r c1.1-9.4,2.9-19.3,5.1-29.4c19.6,4.8,41,8.5,63.5,10.9c13.5,18.5,27.5,35.3,41.6,50c-32.6,30.3-63.2,46.9-84,46.9\r C316.8,492.6,313,491.7,310,490z M547.2,413.8c4.7,38.2-1.1,67.9-14.6,75.8c-3,1.8-6.9,2.6-11.5,2.6c-20.7,0-51.4-16.5-84-46.6\r c14-14.7,28-31.4,41.3-49.9c22.6-2.4,44-6.1,63.6-11C544.3,394.8,546.1,404.5,547.2,413.8z M585.7,347.1c-8.6,3.7-18,7-27.7,10.1\r c-5.7-19.6-13.2-40-22.5-60.9c9.2-20.8,16.6-41.1,22.2-60.6c9.9,3.1,19.3,6.5,28.1,10.2c35.4,15.1,58.3,34.9,58.3,50.6\r C644,312.2,621.1,332.1,585.7,347.1z"
  }), react_icon_jsx("polygon", {
    fill: "#61DAFB",
    points: "320.8,78.4 320.8,78.4 320.8,78.4 \t"
  }), react_icon_jsx("circle", {
    fill: "#61DAFB",
    cx: "420.9",
    cy: "296.5",
    r: "45.7"
  }), react_icon_jsx("polygon", {
    fill: "#61DAFB",
    points: "520.5,78.1 520.5,78.1 520.5,78.1 \t"
  })));
};

/* harmony default export */ var react_icon = (ReactIcon);
// CONCATENATED MODULE: ./components/icons/nextjs.icon.tsx

var nextjs_icon_jsx = external_react_default.a.createElement;

const NextJSIcon = props => {
  return nextjs_icon_jsx("svg", {
    style: {
      fontSize: props.fontSize === "small" ? "0.5rem" : props.fontSize === "normal" ? "1rem" : "3.5rem"
    },
    height: "1em",
    viewBox: ".5 -.2 1023 1024.1",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, nextjs_icon_jsx("path", {
    d: "m478.5.6c-2.2.2-9.2.9-15.5 1.4-145.3 13.1-281.4 91.5-367.6 212-48 67-78.7 143-90.3 223.5-4.1 28.1-4.6 36.4-4.6 74.5s.5 46.4 4.6 74.5c27.8 192.1 164.5 353.5 349.9 413.3 33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5-102.5-151.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5c-27.8-192.1-164.5-353.5-349.9-413.3-32.7-10.6-67.5-17.9-106.5-22.3-9.6-1-75.7-2.1-84-1.3zm209.4 309.4c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6v-130.7c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z"
  }), nextjs_icon_jsx("path", {
    d: "m784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z"
  }));
};

/* harmony default export */ var nextjs_icon = (NextJSIcon);
// CONCATENATED MODULE: ./components/icons/material-ui.icon.tsx

var material_ui_icon_jsx = external_react_default.a.createElement;

const MaterialUIIcon = props => {
  return material_ui_icon_jsx("svg", {
    style: {
      fontSize: props.fontSize === "small" ? "0.5rem" : props.fontSize === "normal" ? "1rem" : "3.5rem"
    },
    width: "1em",
    height: "1em",
    viewBox: "0 0 256 204",
    version: "1.1",
    preserveAspectRatio: "xMidYMid"
  }, material_ui_icon_jsx("g", null, material_ui_icon_jsx("polygon", {
    fill: "#00B0FF",
    points: "0 110.848 0 0 96 55.424 96 92.3733333 32 55.424 32 129.322667"
  }), material_ui_icon_jsx("polygon", {
    fill: "#0081CB",
    points: "96 55.424 192 0 192 110.848 128 147.797333 96 129.322667 160 92.3733333 160 55.424 96 92.3733333"
  }), material_ui_icon_jsx("polygon", {
    fill: "#00B0FF",
    points: "96 129.322667 96 166.272 160 203.221333 160 166.272"
  }), material_ui_icon_jsx("path", {
    d: "M160,203.221333 L256,147.797333 L256,73.8986667 L224,92.3733333 L224,129.322667 L160,166.272 L160,203.221333 Z M224,55.424 L224,18.4746667 L256,5.68434189e-14 L256,36.9493333 L224,55.424 Z",
    fill: "#0081CB"
  })));
};

/* harmony default export */ var material_ui_icon = (MaterialUIIcon);
// CONCATENATED MODULE: ./components/icons/java.icon.tsx

var java_icon_jsx = external_react_default.a.createElement;

const JavaIcon = props => {
  return java_icon_jsx("svg", {
    style: {
      fontSize: props.fontSize === "small" ? "0.5rem" : props.fontSize === "normal" ? "1rem" : "3.5rem"
    },
    version: "1.1",
    width: "1em",
    height: "1em",
    id: "Layer_1",
    x: "0px",
    y: "0px",
    viewBox: "0 0 511.998 511.998"
  }, java_icon_jsx("g", null, java_icon_jsx("path", {
    style: {
      fill: "#DB380E"
    },
    d: "M253.464,94.869c-23.658,16.639-50.471,35.498-64.838,66.699\r c-24.954,54.435,51.062,113.812,54.311,116.313c0.755,0.581,1.659,0.871,2.56,0.871c0.957,0,1.915-0.327,2.693-0.979\r c1.509-1.262,1.937-3.406,1.031-5.152c-0.275-0.53-27.561-53.53-26.547-91.552c0.359-13.243,18.892-28.266,38.512-44.171\r c17.97-14.568,38.34-31.079,50.258-50.394c26.164-42.516-2.916-84.322-3.213-84.74c-1.155-1.622-3.287-2.209-5.11-1.41\r c-1.821,0.804-2.83,2.773-2.414,4.72c0.059,0.277,5.714,27.923-10.022,56.406C284.203,73.25,269.959,83.268,253.464,94.869z"
  }), java_icon_jsx("path", {
    style: {
      fill: "#DB380E"
    },
    d: "M353.137,113.617c1.669-1.257,2.159-3.55,1.15-5.38c-1.011-1.83-3.211-2.637-5.165-1.895\r c-4.019,1.528-98.416,37.915-98.416,81.88c0,30.307,12.946,46.317,22.399,58.009c3.708,4.586,6.909,8.546,7.964,11.927\r c2.97,9.743-4.066,27.353-7.025,33.317c-0.853,1.714-0.435,3.792,1.016,5.044c0.784,0.677,1.763,1.021,2.743,1.021\r c0.834,0,1.672-0.248,2.396-0.752c1.623-1.128,39.667-28.026,32.844-60.433c-2.542-12.318-8.595-21.318-13.936-29.26\r c-8.274-12.305-14.25-21.193-5.184-37.609C304.545,150.338,352.65,113.981,353.137,113.617z"
  })), java_icon_jsx("g", null, java_icon_jsx("path", {
    style: {
      fill: "#73A1FB"
    },
    d: "M107.418,298.236c-1.618,4.845-0.854,9.651,2.207,13.903c10.233,14.207,46.48,22.029,102.068,22.029\r c0.003,0,0.005,0,0.007,0c7.532,0,15.484-0.148,23.629-0.44c88.875-3.181,121.839-30.869,123.199-32.046\r c1.482-1.283,1.878-3.419,0.957-5.147c-0.922-1.727-2.909-2.595-4.808-2.072c-31.301,8.546-89.748,11.58-130.288,11.58\r c-45.363,0-68.465-3.268-74.121-5.681c2.902-3.985,20.802-11.101,42.983-15.464c2.12-0.416,3.577-2.374,3.367-4.524\r s-2.016-3.79-4.177-3.79C179.439,276.584,114.234,277.628,107.418,298.236z"
  }), java_icon_jsx("path", {
    style: {
      fill: "#73A1FB"
    },
    d: "M404.812,269.718c-18.331,0-35.714,9.188-36.446,9.577c-1.695,0.908-2.555,2.852-2.09,4.72\r c0.467,1.865,2.144,3.176,4.067,3.178c0.389,0,39.102,0.317,42.608,22.436c3.106,19.082-36.629,50-52.202,60.304\r c-1.682,1.113-2.335,3.263-1.554,5.123c0.665,1.583,2.206,2.573,3.868,2.573c0.29,0,0.584-0.03,0.876-0.092\r c3.696-0.791,90.406-19.899,81.238-70.384C439.584,276.213,420.138,269.718,404.812,269.718z"
  }), java_icon_jsx("path", {
    style: {
      fill: "#73A1FB"
    },
    d: "M345.347,363.755c0.302-1.617-0.371-3.262-1.717-4.207l-20.791-14.563\r c-1.014-0.71-2.295-0.933-3.485-0.618c-0.217,0.055-21.959,5.771-53.525,9.276c-12.528,1.405-26.56,2.147-40.582,2.147\r c-31.558,0-52.192-3.708-55.197-6.428c-0.398-0.764-0.272-1.111-0.201-1.304c0.546-1.518,3.472-3.322,5.358-4.036\r c2.083-0.771,3.206-3.033,2.558-5.157c-0.646-2.127-2.837-3.378-4.999-2.859c-20.856,5.033-31.054,12.071-30.312,20.918\r c1.318,15.686,37.65,23.737,68.365,25.865c4.417,0.302,9.194,0.455,14.195,0.455c0.003,0,0.005,0,0.008,0\r c51.074,0,116.55-16.025,117.204-16.188C343.825,366.666,345.044,365.375,345.347,363.755z"
  }), java_icon_jsx("path", {
    style: {
      fill: "#73A1FB"
    },
    d: "M188.602,397.419c1.575-1.024,2.273-2.971,1.714-4.764c-0.557-1.793-2.234-2.971-4.118-2.946\r c-2.795,0.074-27.349,1.182-29.068,16.815c-0.52,4.672,0.818,8.941,3.979,12.686c8.816,10.448,32.614,16.658,72.741,18.984\r c4.747,0.285,9.569,0.428,14.334,0.428c51.015,0,85.373-15.973,86.812-16.653c1.395-0.66,2.315-2.031,2.397-3.571\r s-0.687-3.001-2.003-3.806l-26.275-16.04c-0.912-0.556-2.003-0.74-3.043-0.527c-0.166,0.035-16.849,3.495-42.026,6.913\r c-4.764,0.648-10.73,0.977-17.73,0.977c-25.15,0-53.124-4.109-58.489-6.8C187.749,398.613,187.848,397.975,188.602,397.419z"
  }), java_icon_jsx("path", {
    style: {
      fill: "#73A1FB"
    },
    d: "M224.408,486.85c116.854-0.099,179.571-20.88,191.653-33.957c4.277-4.626,4.739-9.006,4.376-11.867\r c-0.898-7.04-7.311-11.35-8.038-11.818c-1.754-1.128-4.108-0.833-5.476,0.745c-1.365,1.578-1.397,3.884-0.027,5.461\r c0.737,0.948,1.163,2.535-0.992,4.692c-4.83,4.511-53.545,18.204-134.656,22.318c-11.111,0.577-22.765,0.871-34.636,0.873\r c-72.623,0-125.772-9.948-132.749-15.744c2.689-3.864,21.489-10.037,41.482-13.529c2.253-0.393,3.775-2.516,3.426-4.776\r c-0.349-2.259-2.432-3.814-4.709-3.519c-0.564,0.077-2.478,0.191-4.694,0.327c-32.988,2.014-71.109,6.503-73.098,23.5\r c-0.604,5.179,0.935,9.881,4.576,13.973c8.909,10.01,34.516,23.319,153.558,23.319C224.406,486.85,224.406,486.85,224.408,486.85z"
  }), java_icon_jsx("path", {
    style: {
      fill: "#73A1FB"
    },
    d: "M439.013,456.578c-1.652-0.764-3.604-0.378-4.836,0.952c-0.171,0.185-17.74,18.556-70.564,29.344\r c-20.223,4.052-58.183,6.107-112.826,6.107c-54.745,0-106.838-2.154-107.357-2.176c-2.176-0.106-4.037,1.476-4.333,3.618\r c-0.297,2.14,1.083,4.158,3.184,4.658c0.542,0.128,55.135,12.918,129.779,12.918c35.801,0,70.639-2.907,103.548-8.645\r c61.361-10.757,65.657-41.183,65.81-42.473C441.632,459.078,440.662,457.342,439.013,456.578z"
  })), java_icon_jsx("g", null), java_icon_jsx("g", null), java_icon_jsx("g", null), java_icon_jsx("g", null), java_icon_jsx("g", null), java_icon_jsx("g", null), java_icon_jsx("g", null), java_icon_jsx("g", null), java_icon_jsx("g", null), java_icon_jsx("g", null), java_icon_jsx("g", null), java_icon_jsx("g", null), java_icon_jsx("g", null), java_icon_jsx("g", null), java_icon_jsx("g", null));
};

/* harmony default export */ var java_icon = (JavaIcon);
// CONCATENATED MODULE: ./components/icons/hibernate.icon.tsx

var hibernate_icon_jsx = external_react_default.a.createElement;

const HibernateIcon = props => {
  return hibernate_icon_jsx("svg", {
    style: {
      fontSize: props.fontSize === "small" ? "0.5rem" : props.fontSize === "normal" ? "1rem" : "3.5rem"
    },
    width: "1em",
    height: "1em",
    viewBox: "0 0 256 267",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMidYMid"
  }, hibernate_icon_jsx("path", {
    d: "M153.671 178.933l-.932 2.757 49.137 83.342 2.781 1.968L256 178.22l-51.342-89.137-50.986 89.85zM50.273.304L0 89.084l52.234 89.849 49.738-89.85-.134-3.63L52.565 2.11 50.273.304z",
    fill: "#59666C"
  }), hibernate_icon_jsx("path", {
    d: "M50.273.304l51.7 88.78h102.684L152.601.304H50.273zM52.234 178.933L102.864 267h101.793l-50.986-88.067H52.234z",
    fill: "#BCAE79"
  }));
};

/* harmony default export */ var hibernate_icon = (HibernateIcon);
// CONCATENATED MODULE: ./components/icons/mongoDB.icon.tsx

var mongoDB_icon_jsx = external_react_default.a.createElement;

const MongoDBIcon = props => {
  return mongoDB_icon_jsx("svg", {
    style: {
      fontSize: props.fontSize === "small" ? "0.5rem" : props.fontSize === "normal" ? "1rem" : "3.5rem"
    },
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 48 48"
  }, mongoDB_icon_jsx("defs", null, mongoDB_icon_jsx("linearGradient", {
    id: "0",
    x1: "24.2",
    y1: "47.593",
    x2: "25.627",
    y2: "0",
    gradientUnits: "userSpaceOnUse"
  }, mongoDB_icon_jsx("stop", {
    stopColor: "#74cb32"
  }), mongoDB_icon_jsx("stop", {
    offset: "1",
    stopColor: "#abeb6b"
  }))), mongoDB_icon_jsx("circle", {
    r: "24",
    cy: "24",
    cx: "24",
    fill: "url(#0)"
  }), mongoDB_icon_jsx("g", {
    transform: "matrix(.05078 0 0 .05078 10 10)",
    fill: "#283d16"
  }, mongoDB_icon_jsx("path", {
    d: "m413.69 0c0 0-45.37 44.01-94.43 61.759-363.33 131.42-210.1 387.52-205.1 388.36 0 0 20.374-35.48 47.896-55.717 174.64-128.39 210.14-276.17 210.14-276.17 0 0-39.19 177.83-194.56 288.48-34.32 24.426-57.55 84.57-67.39 144.68 0 0 24.325-9.828 34.785-12.49 4.079-26.618 12.607-52.11 27.03-74.875 217.15 25.854 288.27-149.12 297.56-210.14 21.929-144.1-55.928-253.89-55.928-253.89"
  })));
};

/* harmony default export */ var mongoDB_icon = (MongoDBIcon);
// CONCATENATED MODULE: ./components/icons/mySQL.icon.tsx

var mySQL_icon_jsx = external_react_default.a.createElement;

const MySQLIcon = props => {
  return mySQL_icon_jsx("svg", {
    style: {
      fontSize: props.fontSize === "small" ? "0.5rem" : props.fontSize === "normal" ? "1rem" : "3.5rem"
    },
    width: "1em",
    height: "1em",
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    viewBox: "0 0 512.003 512.003"
  }, mySQL_icon_jsx("g", null, mySQL_icon_jsx("path", {
    style: {
      fill: "#546E7A"
    },
    d: "M510.042,495.168c-8.771-12.365-22.979-22.625-38.021-33.49\r c-16.198-11.677-32.833-23.688-41.167-37.646c31.615-6.604,71.615-18.573,73.542-19.146c3.438-1.031,6.135-3.729,7.156-7.167\r c1.031-3.438,0.26-7.167-2.052-9.917c-2.063-2.448-50.49-59.271-128.656-87.146c-3.448-6.906-7.292-15.76-11.76-26\r C337.604,202.429,272.25,52.533,99.823,32.366C86.083,23.085,50.073,0.002,32,0.002c-22.427,0-32,9.573-32,32\r c0,10.917,8.885,23.677,23.375,43.604c7.083,9.74,18.938,26.042,19.292,31.063c0,17.458,20.25,73.979,40.615,98.156\r c-0.583,1.24-1.167,2.458-1.74,3.667C72.521,227.502,64,245.46,64,288.002c0,56.021,26.833,85.333,53.333,85.333\r c16.448,0,24.635-18.667,28.573-40.521c14.615,29.656,38.49,68.292,71.938,91.906c4.823,3.375,11.479,2.229,14.875-2.563\r c3.396-4.823,2.25-11.469-2.563-14.875c-53.042-37.438-81.073-121.74-81.354-122.594c-1.625-4.979-6.729-8.063-11.813-7.219\r c-5.177,0.823-8.99,5.292-8.99,10.531c0,29.292-5.583,60.5-10.667,64c-15.385,0-32-24.469-32-64\r c0-37.74,6.833-52.135,15.479-70.365c1.615-3.406,3.281-6.906,4.938-10.635c1.906-4.302,0.781-9.344-2.781-12.417\r C86.531,180.429,64,120.835,64,106.668c0-10.917-8.885-23.677-23.375-43.604c-7.083-9.74-18.938-26.042-19.292-31.063\r c0-10.667,0-10.667,10.667-10.667c8.646,0,36.823,15.635,57.969,30.135c1.448,0.99,3.125,1.615,4.885,1.802\r c162.115,17.583,222.333,155.708,254.677,229.917c5.448,12.5,10.156,23.302,14.406,31.198c1.281,2.385,3.417,4.188,5.969,5.052\r c53.24,18.042,92.938,51.76,111.542,69.865c-18.167,5.094-47.177,12.844-67.198,16.177c-2.938,0.49-5.542,2.188-7.167,4.677\r c-1.635,2.49-2.156,5.542-1.427,8.427c6.552,26.25,31.698,44.396,53.875,60.396c13.573,9.792,26.385,19.042,33.094,28.521\r c2.083,2.938,5.375,4.5,8.719,4.5c2.135,0,4.281-0.635,6.156-1.958C512.302,506.637,513.448,499.981,510.042,495.168z"
  }), mySQL_icon_jsx("path", {
    style: {
      fill: "#546E7A"
    },
    d: "M96,85.335c0,5.896,4.771,10.667,10.667,10.667c5.885,0,10.667,4.781,10.667,10.667\r c0,5.896,4.771,10.667,10.667,10.667c5.896,0,10.667-4.771,10.667-10.667c0-17.646-14.354-32-32-32\r C100.771,74.668,96,79.439,96,85.335z"
  })), mySQL_icon_jsx("linearGradient", {
    id: "SVGID_1_",
    gradientUnits: "userSpaceOnUse",
    x1: "-48.9542",
    y1: "640.6776",
    x2: "-20.5711",
    y2: "627.4446",
    gradientTransform: "matrix(21.3333 0 0 -21.3333 996.3027 13791.7012)"
  }, mySQL_icon_jsx("stop", {
    offset: "0",
    style: {
      stopColor: "#FFFFFF",
      stopOpacity: 0.2
    }
  }), mySQL_icon_jsx("stop", {
    offset: "1",
    style: {
      stopColor: "#FFFFFF",
      stopOpacity: 0
    }
  })), mySQL_icon_jsx("path", {
    style: {
      fill: "url(#SVGID_1_)"
    },
    d: "M510.042,495.168c-8.771-12.365-22.979-22.625-38.021-33.49\r c-16.198-11.677-32.833-23.688-41.167-37.646c31.615-6.604,71.615-18.573,73.542-19.146c3.438-1.031,6.135-3.729,7.156-7.167\r c1.031-3.438,0.26-7.167-2.052-9.917c-2.063-2.448-50.49-59.271-128.656-87.146c-3.448-6.906-7.292-15.76-11.76-26\r C337.604,202.429,272.25,52.533,99.823,32.366C86.083,23.085,50.073,0.002,32,0.002c-22.427,0-32,9.573-32,32\r c0,10.917,8.885,23.677,23.375,43.604c7.083,9.74,18.938,26.042,19.292,31.063c0,17.458,20.25,73.979,40.615,98.156\r c-0.583,1.24-1.167,2.458-1.74,3.667C72.521,227.502,64,245.46,64,288.002c0,56.021,26.833,85.333,53.333,85.333\r c16.448,0,24.635-18.667,28.573-40.521c14.615,29.656,38.49,68.292,71.938,91.906c4.823,3.375,11.479,2.229,14.875-2.563\r c3.396-4.823,2.25-11.469-2.563-14.875c-53.042-37.438-81.073-121.74-81.354-122.594c-1.625-4.979-6.729-8.063-11.813-7.219\r c-5.177,0.823-8.99,5.292-8.99,10.531c0,29.292-5.583,60.5-10.667,64c-15.385,0-32-24.469-32-64c0-37.74,6.833-52.135,15.479-70.365\r c1.615-3.406,3.281-6.906,4.938-10.635c1.906-4.302,0.781-9.344-2.781-12.417C86.531,180.429,64,120.835,64,106.668\r c0-10.917-8.885-23.677-23.375-43.604c-7.083-9.74-18.938-26.042-19.292-31.063c0-10.667,0-10.667,10.667-10.667\r c8.646,0,36.823,15.635,57.969,30.135c1.448,0.99,3.125,1.615,4.885,1.802c162.115,17.583,222.333,155.708,254.677,229.917\r c5.448,12.5,10.156,23.302,14.406,31.198c1.281,2.385,3.417,4.188,5.969,5.052c53.24,18.042,92.938,51.76,111.542,69.865\r c-18.167,5.094-47.177,12.844-67.198,16.177c-2.938,0.49-5.542,2.188-7.167,4.677c-1.635,2.49-2.156,5.542-1.427,8.427\r c6.552,26.25,31.698,44.396,53.875,60.396c13.573,9.792,26.385,19.042,33.094,28.521c2.083,2.938,5.375,4.5,8.719,4.5\r c2.135,0,4.281-0.635,6.156-1.958C512.302,506.637,513.448,499.981,510.042,495.168z M96,85.335c0,5.896,4.771,10.667,10.667,10.667\r c5.885,0,10.667,4.781,10.667,10.667c0,5.896,4.771,10.667,10.667,10.667c5.896,0,10.667-4.771,10.667-10.667\r c0-17.646-14.354-32-32-32C100.771,74.668,96,79.439,96,85.335z"
  }), mySQL_icon_jsx("g", null), mySQL_icon_jsx("g", null), mySQL_icon_jsx("g", null), mySQL_icon_jsx("g", null), mySQL_icon_jsx("g", null), mySQL_icon_jsx("g", null), mySQL_icon_jsx("g", null), mySQL_icon_jsx("g", null), mySQL_icon_jsx("g", null), mySQL_icon_jsx("g", null), mySQL_icon_jsx("g", null), mySQL_icon_jsx("g", null), mySQL_icon_jsx("g", null), mySQL_icon_jsx("g", null), mySQL_icon_jsx("g", null));
};

/* harmony default export */ var mySQL_icon = (MySQLIcon);
// CONCATENATED MODULE: ./components/icons/nodejs.icon.tsx

var nodejs_icon_jsx = external_react_default.a.createElement;

const NodeJSIcon = props => {
  return nodejs_icon_jsx("svg", {
    style: {
      fontSize: props.fontSize === "small" ? "0.5rem" : props.fontSize === "normal" ? "1rem" : "3.5rem"
    },
    width: "1em",
    height: "1em",
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    viewBox: "0 0 512 512"
  }, nodejs_icon_jsx("path", {
    style: {
      fill: "#F2F2F2"
    },
    d: "M512,256c0,141.385-114.615,256-256,256C125.555,512,17.899,414.438,2.027,288.298\r C0.69,277.723,0,266.94,0,256c0-20.041,2.299-39.549,6.656-58.264C33.029,84.428,134.656,0,256,0\r c121.041,0,222.469,84.01,249.135,196.901c3.5,14.764,5.705,30.02,6.51,45.641C511.885,247.003,512,251.486,512,256z"
  }), nodejs_icon_jsx("polygon", {
    style: {
      fill: "#3B8739"
    },
    points: "243.195,276.559 243.195,210 185.553,176.721 127.912,210 127.912,276.559 185.553,309.838 \r "
  }), nodejs_icon_jsx("path", {
    style: {
      fill: "#333333"
    },
    d: "M470.204,266.459l37.564,21.692l-37.564,21.692l-57.637-33.28v-66.56l57.637-33.28l34.931,20.177\r c3.5,14.764,5.705,30.02,6.51,45.641l-21.358,12.33v-23.186l-20.083-11.588l-20.083,11.588v23.186L470.204,266.459z"
  }), nodejs_icon_jsx("polygon", {
    style: {
      fill: "#66A060"
    },
    points: "481.392,249.74 481.392,236.82 470.203,230.36 459.013,236.82 459.013,249.74 \r 470.203,256.201 "
  }), nodejs_icon_jsx("path", {
    style: {
      fill: "#333333"
    },
    d: "M100.686,210.004v87.771l-38.442-21.932v-44.993L43.05,219.763l-19.195,11.086v44.993L2.027,288.298\r C0.69,277.723,0,266.94,0,256c0-20.041,2.299-39.549,6.656-58.264l36.394-21.013L100.686,210.004z"
  }), nodejs_icon_jsx("rect", {
    x: "127.906",
    y: "210.001",
    transform: "matrix(0.5 0.866 -0.866 0.5 303.4564 -39.0495)",
    style: {
      fill: "#6DA75D"
    },
    width: "115.281",
    height: "66.557"
  }), nodejs_icon_jsx("polygon", {
    style: {
      fill: "#55A344"
    },
    points: "127.912,276.559 147.704,244.283 127.912,210 "
  }), nodejs_icon_jsx("polygon", {
    style: {
      fill: "#639D57"
    },
    points: "223.979,243.277 243.195,210 185.553,176.721 "
  }), nodejs_icon_jsx("path", {
    style: {
      fill: "#333333"
    },
    d: "M346.551,99.579v88.304l-19.32-11.16l-57.647,33.28v66.56l57.647,33.28l57.637-33.28V120.09\r L346.551,99.579z M346.446,254.37l-19.216,11.097l-19.216-11.097v-22.183l19.216-11.097l19.216,11.097V254.37z"
  }), nodejs_icon_jsx("g", null, nodejs_icon_jsx("path", {
    style: {
      fill: "#66A060"
    },
    d: "M282.149,358.717c0,0-1.132-9.729-11.539-9.729c-10.408,0-17.534,1.357-17.534,7.127\r s20.25,5.77,27.943,8.032c7.693,2.262,14.48,8.145,11.086,18.553c-3.394,10.408-13.802,11.539-29.866,11.539\r s-19.685-13.35-19.685-18.553h9.05c0,0-1.132,8.145,9.502,9.502c10.634,1.357,20.802,2.121,22.173-6.108\r c1.81-10.861-34.391-5.43-37.559-16.064c-2.676-8.985-1.132-20.815,16.969-22.626c18.101-1.811,28.056,6.181,28.056,18.101\r L282.149,358.717z"
  }), nodejs_icon_jsx("path", {
    style: {
      fill: "#66A060"
    },
    d: "M194.723,401.131l20.008,11.551c10.053,5.804,22.619-1.451,22.619-13.059v-20.242v-37.253h-8.155\r v55.227c0,6.339-6.862,10.302-12.353,7.131l-13.965-8.062v-58.94l51.043-29.467l51.043,29.467v58.94l-51.043,29.467l-14.704-8.489\r l-9.602,3.872l24.305,14.033l59.198-34.179v-68.351L253.92,298.6l-59.198,34.179v68.352H194.723z"
  })), nodejs_icon_jsx("g", null), nodejs_icon_jsx("g", null), nodejs_icon_jsx("g", null), nodejs_icon_jsx("g", null), nodejs_icon_jsx("g", null), nodejs_icon_jsx("g", null), nodejs_icon_jsx("g", null), nodejs_icon_jsx("g", null), nodejs_icon_jsx("g", null), nodejs_icon_jsx("g", null), nodejs_icon_jsx("g", null), nodejs_icon_jsx("g", null), nodejs_icon_jsx("g", null), nodejs_icon_jsx("g", null), nodejs_icon_jsx("g", null));
};

/* harmony default export */ var nodejs_icon = (NodeJSIcon);
// CONCATENATED MODULE: ./components/icons/swift.icon.tsx

var swift_icon_jsx = external_react_default.a.createElement;

const SwiftIcon = props => {
  return swift_icon_jsx("svg", {
    style: {
      fontSize: props.fontSize === "small" ? "0.5rem" : props.fontSize === "normal" ? "1rem" : "3.5rem"
    },
    width: "1em",
    height: "1em",
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    viewBox: "0 0 512.01 512.01"
  }, swift_icon_jsx("path", {
    style: {
      fill: "#FF5722"
    },
    d: "M315.584,32.005C540.672,182.213,467.68,347.269,467.68,347.269s63.936,70.752,38.24,132.736\r c0,0-26.528-43.296-70.56-43.296c-42.56,0-67.744,43.296-153.664,43.296C90.592,480.005,0,323.397,0,323.397\r c172.224,111.36,289.888,32.448,289.888,32.448C212.128,311.749,47.2,100.581,47.2,100.581\r c143.776,120.032,205.824,151.552,205.824,151.552c-37.312-29.952-141.28-176.736-141.28-176.736\r c83.2,82.528,248.576,197.6,248.576,197.6C407.744,145.829,315.584,32.005,315.584,32.005z"
  }), swift_icon_jsx("g", null), swift_icon_jsx("g", null), swift_icon_jsx("g", null), swift_icon_jsx("g", null), swift_icon_jsx("g", null), swift_icon_jsx("g", null), swift_icon_jsx("g", null), swift_icon_jsx("g", null), swift_icon_jsx("g", null), swift_icon_jsx("g", null), swift_icon_jsx("g", null), swift_icon_jsx("g", null), swift_icon_jsx("g", null), swift_icon_jsx("g", null), swift_icon_jsx("g", null));
};

/* harmony default export */ var swift_icon = (SwiftIcon);
// CONCATENATED MODULE: ./components/icons/spring.icon.tsx

var spring_icon_jsx = external_react_default.a.createElement;

const SpringIcon = props => {
  return spring_icon_jsx("svg", {
    viewBox: "-5 -12 80 80",
    style: {
      fontSize: props.fontSize === "small" ? "0.5rem" : props.fontSize === "normal" ? "1rem" : "3.5rem"
    },
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em"
  }, spring_icon_jsx("path", {
    d: "M58.2 3.365a29.503 29.503 0 0 1-3.419 6.064A32.094 32.094 0 1 0 9.965 55.372l1.186 1.047a32.08 32.08 0 0 0 52.67-22.253c.875-8.17-1.524-18.51-5.62-30.8zM14.53 55.558a2.744 2.744 0 1 1-.404-3.857 2.744 2.744 0 0 1 .404 3.857zm43.538-9.61c-7.92 10.55-24.83 6.99-35.672 7.502 0 0-1.922.113-3.857.43 0 0 .73-.31 1.663-.663 7.614-2.65 11.213-3.16 15.838-5.54 8.708-4.427 17.322-14.122 19.112-24.2-3.313 9.695-13.373 18.032-22.53 21.418-6.276 2.313-17.614 4.566-17.614 4.566l-.457-.245c-7.714-3.75-7.952-20.457 6.077-25.845 6.143-2.366 12.02-1.067 18.654-2.65 7.084-1.683 15.28-6.99 18.615-13.916 3.73 11.08 8.224 28.422.166 39.15z",
    fill: "#68bd45"
  }));
};

/* harmony default export */ var spring_icon = (SpringIcon);
// CONCATENATED MODULE: ./components/skills.tsx
var skills_jsx = external_react_default.a.createElement;














class skills_Skills extends external_react_default.a.Component {
  render() {
    return skills_jsx(indexItem["a" /* default */], {
      title: "Kenntnisse"
    }, skills_jsx(skillIttem_SkillItem, {
      href: "https://www.typescriptlang.org/",
      icon: skills_jsx(typescript_icon, {
        fontSize: "large"
      })
    }, "Typescript"), skills_jsx(skillIttem_SkillItem, {
      href: "https://reactjs.org/",
      icon: skills_jsx(react_icon, {
        fontSize: "large"
      })
    }, "React"), skills_jsx(skillIttem_SkillItem, {
      href: "https://nextjs.org/",
      icon: skills_jsx(nextjs_icon, {
        fontSize: "large"
      })
    }, "NextJs"), skills_jsx(skillIttem_SkillItem, {
      href: "https://material-ui.com/",
      icon: skills_jsx(material_ui_icon, {
        fontSize: "large"
      })
    }, "Material UI"), skills_jsx(skillIttem_SkillItem, {
      href: "https://www.dev-insider.de/was-ist-java-programmierung-a-569186/",
      icon: skills_jsx(java_icon, {
        fontSize: "large"
      })
    }, "Java"), skills_jsx(skillIttem_SkillItem, {
      href: "https://hibernate.org/",
      icon: skills_jsx(hibernate_icon, {
        fontSize: "large"
      })
    }, "Hibernate"), skills_jsx(skillIttem_SkillItem, {
      href: "https://www.mongodb.com/",
      icon: skills_jsx(mongoDB_icon, {
        fontSize: "large"
      })
    }, "MongoDB"), skills_jsx(skillIttem_SkillItem, {
      href: "https://www.mysql.com/",
      icon: skills_jsx(mySQL_icon, {
        fontSize: "large"
      })
    }, "MySQL"), skills_jsx(skillIttem_SkillItem, {
      href: "https://nodejs.org/",
      icon: skills_jsx(nodejs_icon, {
        fontSize: "large"
      })
    }, "NodeJS"), skills_jsx(skillIttem_SkillItem, {
      href: "https://swift.org/",
      icon: skills_jsx(swift_icon, {
        fontSize: "large"
      })
    }, "Swift"), skills_jsx(skillIttem_SkillItem, {
      href: "https://spring.io/",
      icon: skills_jsx(spring_icon, {
        fontSize: "large"
      })
    }, "Spring Boot"));
  }

}
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@material-ui/core/Fab"
var Fab_ = __webpack_require__("ZVwq");
var Fab_default = /*#__PURE__*/__webpack_require__.n(Fab_);

// EXTERNAL MODULE: external "@material-ui/icons/Email"
var Email_ = __webpack_require__("OL+V");
var Email_default = /*#__PURE__*/__webpack_require__.n(Email_);

// EXTERNAL MODULE: external "@material-ui/icons/Twitter"
var Twitter_ = __webpack_require__("s4mK");
var Twitter_default = /*#__PURE__*/__webpack_require__.n(Twitter_);

// EXTERNAL MODULE: external "@material-ui/icons/ExpandLess"
var ExpandLess_ = __webpack_require__("VRH+");
var ExpandLess_default = /*#__PURE__*/__webpack_require__.n(ExpandLess_);

// EXTERNAL MODULE: external "@material-ui/icons/ExpandMore"
var ExpandMore_ = __webpack_require__("3PpT");
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore_);

// EXTERNAL MODULE: external "@material-ui/icons/GitHub"
var GitHub_ = __webpack_require__("Px2O");
var GitHub_default = /*#__PURE__*/__webpack_require__.n(GitHub_);

// EXTERNAL MODULE: external "@material-ui/icons/LinkedIn"
var LinkedIn_ = __webpack_require__("V0nV");
var LinkedIn_default = /*#__PURE__*/__webpack_require__.n(LinkedIn_);

// CONCATENATED MODULE: ./components/contact.tsx
var contact_jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const styles = Object(core_["createStyles"])({
  collapse: {
    position: "relative",
    top: "40px",
    paddingBottom: "40px"
  },
  littlefab: {
    marginBottom: "10px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex"
  },
  icon: {
    fill: "white"
  }
});

class contact_Contact extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      open: false
    });
  }

  render() {
    return contact_jsx("div", {
      style: {
        margin: "20px",
        position: "fixed",
        bottom: "0px",
        right: "0px"
      }
    }, contact_jsx(core_["Collapse"], {
      classes: {
        container: this.props.classes.collapse
      },
      in: this.state.open
    }, contact_jsx(core_["Link"], {
      href: "https://de.linkedin.com/",
      target: "_blank"
    }, contact_jsx(Fab_default.a, {
      classes: {
        root: this.props.classes.littlefab
      },
      className: "customAnchor",
      color: "secondary",
      "aria-label": "github",
      size: "small"
    }, contact_jsx(LinkedIn_default.a, {
      classes: {
        root: this.props.classes.icon
      }
    }))), contact_jsx(core_["Link"], {
      href: "https://github.com/jawil003",
      target: "_blank"
    }, contact_jsx(Fab_default.a, {
      classes: {
        root: this.props.classes.littlefab
      },
      color: "secondary",
      "aria-label": "github",
      size: "small"
    }, contact_jsx(GitHub_default.a, {
      classes: {
        root: this.props.classes.icon
      }
    }))), contact_jsx(core_["Link"], {
      href: "https://twitter.com/Willey3x37",
      target: "_blank"
    }, contact_jsx(Fab_default.a, {
      classes: {
        root: this.props.classes.littlefab
      },
      color: "secondary",
      "aria-label": "edit",
      size: "small"
    }, contact_jsx(Twitter_default.a, {
      classes: {
        root: this.props.classes.icon
      }
    }))), contact_jsx(core_["Link"], {
      href: "mailto:jw19980309@gmail.com?subject=WebDev%20Request&body=%23Beschreiben%20Sie%20hier%20welche%20Art%20von%20mobiler%2C%20desktopbasierter%20oder%20Webapplikation%20sie%20ben%C3%B6tigen%0D%0A-%3E%20Privat%20oder%20gesch%C3%A4ftlich%3F%0D%0A-%3E%20Kernfunktionalit%C3%A4ten%0D%0A-%3E%20etc%0D%0A%0D%0A%23Geben%20Sie%20nun%20ihr%20Budget%20an%20(ungef%C3%A4hre%20Angabe%20gen%C3%BCgt)%0D%0A%0D%0A%23Zum%20Schluss%20geben%20Sie%20nun%20mindestens%20eine%20Kontaktm%C3%B6glichkeit%20an%0D%0A-%3E%20Email%0D%0A-%3E%20Whatsapp%0D%0A-%3E%20Discord%0D%0A-%3E%20Telegram"
    }, contact_jsx(Fab_default.a, {
      classes: {
        root: this.props.classes.littlefab
      },
      color: "secondary",
      "aria-label": "edit",
      size: "small"
    }, contact_jsx(Email_default.a, {
      classes: {
        root: this.props.classes.icon
      }
    })))), contact_jsx(Fab_default.a, {
      color: "secondary",
      "aria-label": "edit",
      onClick: () => {
        this.setState({
          open: !this.state.open
        });
      }
    }, this.state.open ? contact_jsx(ExpandLess_default.a, null) : contact_jsx(ExpandMore_default.a, null)));
  }

}

/* harmony default export */ var contact = (Object(core_["withStyles"])(styles)(contact_Contact));
// CONCATENATED MODULE: ./components/projectsItem.tsx
var projectsItem_jsx = external_react_default.a.createElement;


class projectsItem_ProjectItem extends external_react_default.a.Component {
  render() {
    return projectsItem_jsx(link_default.a, {
      href: this.props.href,
      passHref: true
    }, projectsItem_jsx("a", {
      target: "_blank"
    }, projectsItem_jsx("div", {
      style: {
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        justifyItems: "center"
      }
    }, projectsItem_jsx("div", null, this.props.icon), projectsItem_jsx("p", {
      style: {
        display: "inline-block",
        margin: "0px",
        marginTop: "1px",
        maxWidth: "300px",
        textAlign: "center"
      }
    }, this.props.children))));
  }

}
// EXTERNAL MODULE: external "@material-ui/icons/Web"
var Web_ = __webpack_require__("8xtb");
var Web_default = /*#__PURE__*/__webpack_require__.n(Web_);

// EXTERNAL MODULE: external "@material-ui/icons/Dns"
var Dns_ = __webpack_require__("lZfH");
var Dns_default = /*#__PURE__*/__webpack_require__.n(Dns_);

// CONCATENATED MODULE: ./components/projects.tsx
var projects_jsx = external_react_default.a.createElement;






const projects_styles = Object(core_["createStyles"])({
  icon: {
    fontSize: "5rem"
  },
  iconWithPadding: {
    fontSize: "5rem",
    padding: "5px"
  }
});

class projects_Project extends external_react_default.a.Component {
  render() {
    return projects_jsx(indexItem["a" /* default */], {
      title: "Projekte"
    }, projects_jsx(projectsItem_ProjectItem, {
      icon: projects_jsx(Web_default.a, {
        color: "primary",
        classes: {
          root: this.props.classes.icon
        }
      }),
      href: "https://github.com/jawil003/Portfolio"
    }, "Portfolio"), projects_jsx(projectsItem_ProjectItem, {
      icon: projects_jsx(Dns_default.a, {
        color: "primary",
        classes: {
          root: this.props.classes.iconWithPadding
        }
      }),
      href: "https://github.com/jawil003/Web-Praktika"
    }, "WebServer"));
  }

}

/* harmony default export */ var projects = (Object(core_["withStyles"])(projects_styles)(projects_Project));
// CONCATENATED MODULE: ./pages/index.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pages_Index; });
var pages_jsx = external_react_default.a.createElement;

function pages_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class pages_Index extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    pages_defineProperty(this, "s", void 0);
  }

  render() {
    return pages_jsx(layout["a" /* Layout */], null, pages_jsx("div", {
      style: {
        display: "grid"
      }
    }, pages_jsx(lebenslauf_Lebenslauf, null), pages_jsx(Divider_default.a, null), pages_jsx(skills_Skills, null), pages_jsx(Divider_default.a, null), pages_jsx(contact, null), pages_jsx(Divider_default.a, null), pages_jsx(projects, null)));
  }

}

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("23aj");


/***/ }),

/***/ "3PpT":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ "4151":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

var _typeof = __webpack_require__("iZP3");

var _WeakMap = __webpack_require__("G4HQ");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "6EAQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const styles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
  text: {
    marginLeft: "10px"
  }
});

class IndexItem extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("div", {
      style: {
        display: "grid",
        rowGap: "20px",
        alignContent: "center",
        alignItems: "stretch",
        justifyContent: "flex-start",
        justifyItems: "baseline",
        margin: "30px 0px"
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      classes: {
        root: this.props.classes.text
      },
      id: this.props.title.toLowerCase(),
      variant: "h5"
    }, this.props.title), __jsx("div", {
      style: {
        display: "flex",
        gap: "10px",
        gridAutoRows: "auto",
        gridTemplateColumns: "30% 30% 30%",
        alignContent: "center",
        alignItems: "baseline",
        justifyContent: "center",
        margin: "0px 15px",
        flexWrap: "wrap",
        width: "calc(100vw - calc(2*15px)"
      }
    }, this.props.children));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(IndexItem));

/***/ }),

/***/ "7Ubz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./components/error-boundary.tsx
var __jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class error_boundary_ErrorBoundary extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      error: null,
      eventId: null
    });
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error
    });
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return __jsx("div", null, "Error");
    } else {
      return this.props.children;
    }
  }

}
// EXTERNAL MODULE: external "@material-ui/core/Toolbar"
var Toolbar_ = __webpack_require__("Ms0O");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);

// EXTERNAL MODULE: external "@material-ui/core/AppBar"
var AppBar_ = __webpack_require__("4151");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/layout/header.tsx
var header_jsx = external_react_default.a.createElement;





const styles = Object(core_["createStyles"])({
  icon: {
    marginRight: "10px",
    primary: {
      backgrounColor: "green"
    }
  },
  appBar: {
    position: "static"
  }
});

class header_Header extends external_react_["Component"] {
  render() {
    return header_jsx(AppBar_default.a, {
      id: "navigation",
      classes: {
        root: this.props.classes.appBar
      }
    }, header_jsx(Toolbar_default.a, null, header_jsx(core_["Grid"], {
      container: true,
      alignContent: "center",
      justify: "center"
    }, header_jsx(link_default.a, {
      href: "/#lebenslauf",
      as: "/Next-gh-page-example/#lebenslauf"
    }, header_jsx(core_["Button"], {
      color: "inherit"
    }, "Lebenslauf")), header_jsx(link_default.a, {
      href: "/#kenntnisse",
      as: "/Next-gh-page-example/#kenntnisse"
    }, header_jsx(core_["Button"], {
      color: "inherit"
    }, "Kenntnisse")), header_jsx(link_default.a, {
      href: "/#projekte",
      as: "/Next-gh-page-example/#projekte"
    }, header_jsx(core_["Button"], {
      color: "inherit"
    }, "Projekte")), header_jsx(link_default.a, {
      href: "/sources/#navigation",
      as: "/Next-gh-page-example/sources/#navigation"
    }, header_jsx(core_["Button"], {
      color: "inherit"
    }, "Quellen")))));
  }

}

/* harmony default export */ var header = (Object(core_["withStyles"])(styles)(header_Header));
// EXTERNAL MODULE: external "react-typist"
var external_react_typist_ = __webpack_require__("tQzz");
var external_react_typist_default = /*#__PURE__*/__webpack_require__.n(external_react_typist_);

// CONCATENATED MODULE: ./components/layout/intro.tsx
var intro_jsx = external_react_default.a.createElement;

function intro_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const intro_styles = Object(core_["createStyles"])({
  gridContainer: {
    height: "100%",
    gap: "10px"
  },
  copyright: {
    position: "absolute",
    left: "16px",
    top: "16px",
    color: "rgba(255,255,255,0.3)"
  },
  button: {
    color: "white"
  }
});

class intro_Intro extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    intro_defineProperty(this, "state", {
      typing: true
    });

    intro_defineProperty(this, "done", () => {
      setTimeout(() => {
        this.setState({
          typing: !this.state.typing
        });
      }, 2000);
    });
  }

  render() {
    return intro_jsx("div", {
      style: {
        height: "100vh",
        width: "100vw",
        background: `url(/pictures/background_dortmund.jpg) no-repeat center center`,
        backgroundSize: "cover"
      }
    }, intro_jsx("div", {
      style: {
        height: "100%",
        background: "rgba(0,0,0,0.3)"
      }
    }, intro_jsx(core_["Grid"], {
      container: true,
      direction: "column",
      alignContent: "center",
      alignItems: "center",
      justify: "center",
      classes: {
        root: this.props.classes.gridContainer
      }
    }, intro_jsx(core_["Grid"], {
      item: true
    }, intro_jsx(core_["Typography"], {
      variant: "h3",
      component: "h3"
    }, intro_jsx(external_react_typist_default.a, {
      key: this.state.typing,
      onTypingDone: this.done,
      cursor: {}
    }, intro_jsx("span", {
      style: {
        color: "white",
        textShadow: "3px 3px 4px #777"
      }
    }, "Hallo, mein Name ist Jannik"), intro_jsx(external_react_typist_default.a.Backspace, {
      count: 30,
      delay: 2000
    }), intro_jsx("span", {
      style: {
        color: "white",
        textShadow: "3px 3px 4px #777"
      }
    }, "Ich bin Student der Wirtschaftsinformatik"), intro_jsx(external_react_typist_default.a.Backspace, {
      count: 33,
      delay: 2000
    }), intro_jsx("span", {
      style: {
        color: "white",
        textShadow: "3px 3px 4px #777"
      }
    }, "Borussia Dortmund Fan")))), intro_jsx(core_["Grid"], {
      item: true
    }, intro_jsx(link_default.a, {
      href: "/#navigation"
    }, intro_jsx(core_["Button"], {
      variant: "contained",
      color: "primary"
    }, "Lernen wir uns kennen")))), intro_jsx(link_default.a, {
      href: "https://pixabay.com/de/photos/dortmund-dortmunder-u-u-turm-602962/"
    }, intro_jsx("a", {
      target: "_blank",
      className: `${this.props.classes.copyright}`
    }, "Foto von sxss"))));
  }

}

/* harmony default export */ var intro = (Object(core_["withStyles"])(intro_styles)(intro_Intro));
// CONCATENATED MODULE: ./components/layout/layout.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout; });
var layout_jsx = external_react_default.a.createElement;




const Layout = props => {
  return layout_jsx(external_react_default.a.Fragment, null, layout_jsx(intro, null), layout_jsx(header, null), layout_jsx(error_boundary_ErrorBoundary, null, layout_jsx("main", {
    className: "container mt-3"
  }, props.children)));
};

/***/ }),

/***/ "8xtb":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Web");

/***/ }),

/***/ "G4HQ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("lhFH");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "Ms0O":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "OL+V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Email");

/***/ }),

/***/ "Px2O":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/GitHub");

/***/ }),

/***/ "RXm+":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/School");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "V0nV":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LinkedIn");

/***/ }),

/***/ "VRH+":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandLess");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZVwq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fab");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _interopRequireWildcard = __webpack_require__("5Uuq");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("g/15");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getPaths()[0]];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var [href, asPath] = this.getPaths();

    _router.default.prefetch(href, asPath, options);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dWSA":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Work");

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    })).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (false) {}

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : Component.__N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname)).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "lZfH":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Dns");

/***/ }),

/***/ "lhFH":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "nybW":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "s4mK":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Twitter");

/***/ }),

/***/ "tQzz":
/***/ (function(module, exports) {

module.exports = require("react-typist");

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ })

/******/ });