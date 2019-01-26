webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MHLayout.js":
/*!********************************!*\
  !*** ./components/MHLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Banner */ "./components/Banner.js");
/* harmony import */ var _components_Box_special__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Box-special */ "./components/Box-special.js");
/* harmony import */ var _components_cta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/cta */ "./components/cta.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_analytics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/analytics */ "./components/utils/analytics.js");
var _jsxFileName = "/Users/erolkaftanoglu/Documents/erol-dev/Monday-hero/hero-site/components/MHLayout.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var Layout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout(props) {
    var _this;

    _classCallCheck(this, Layout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Layout).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleResize", function () {
      return _this.setState({
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth
      });
    });

    _this.state = {
      windowHeight: undefined,
      windowWidth: undefined,
      isPreloads: true,
      isSinglePage: props.isSinglePage ? true : false,
      isBanner: props.isBanner ? true : false,
      BoxSpecial: props.BoxSpecial ? true : false,
      Cta: props.Cta ? true : false
    };
    return _this;
  }

  _createClass(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!window.GA_INITIALIZED) {
        Object(_utils_analytics__WEBPACK_IMPORTED_MODULE_7__["initGA"])();
        window.GA_INITIALIZED = true;
      }

      Object(_utils_analytics__WEBPACK_IMPORTED_MODULE_7__["logPageView"])();
      this.handleResize();
      window.addEventListener('resize', this.handleResize);
      this.setState({
        isPreloads: false
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
    }
  }, {
    key: "render",
    value: function render() {
      var mainStyle = {
        marginTop: this.state.isSinglePage ? '4em' : '-18em'
      }; //-4em

      var landing = classnames__WEBPACK_IMPORTED_MODULE_6___default()({
        'landing': true,
        'is-preloads': this.state.isPreloads
      });
      var isAlt = !this.state.isSinglePage;
      var isReveal = this.state.isSinglePage;

      if (this.state.windowWidth < 800) {
        mainStyle.marginTop = '-4em';
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: landing,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "page-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
        isAlt: isAlt,
        isReveal: isReveal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), this.state.isBanner ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Banner__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }) : '', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        id: "main",
        className: "container",
        style: mainStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, this.props.children), this.state.BoxSpecial ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Box_special__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }) : '', this.state.Cta ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_cta__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }) : '', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: this.props.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      })));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.1ba355a2649dc5c4f344.hot-update.js.map