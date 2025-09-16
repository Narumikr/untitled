import React, { useState, useEffect, createContext, useMemo, useContext, useRef, useCallback, forwardRef } from 'react';
import { createPortal } from 'react-dom';

function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}

function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = true,
      o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = true, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}

function _arrayLikeToArray$1(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}

function _unsupportedIterableToArray$1(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$1(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$1(r, a) : void 0;
  }
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray$1(r, e) || _nonIterableRest();
}

function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}

function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

var LIGHT_MODE = 'light';
var DARK_MODE = 'dark';
var useThemeMode = function useThemeMode() {
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    isDarkMode = _useState2[0],
    setDarkMode = _useState2[1];
  useEffect(function () {
    if (typeof window === 'undefined') return;
    var darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    var darkModeChangeListener = function darkModeChangeListener(event) {
      setDarkMode(event.matches);
    };
    setDarkMode(darkModeQuery.matches);
    darkModeQuery.addEventListener('change', darkModeChangeListener);
    return function () {
      darkModeQuery.removeEventListener('change', darkModeChangeListener);
    };
  }, []);
  return isDarkMode === null ? LIGHT_MODE : isDarkMode ? DARK_MODE : LIGHT_MODE;
};

function ownKeys$u(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$u(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$u(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$u(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var YourSekaiContext = /*#__PURE__*/createContext(null);
var YourSekaiProvider = function YourSekaiProvider(_ref) {
  var children = _ref.children,
    sekaiTheme = _ref.sekaiTheme;
  var _useState = useState(sekaiTheme),
    _useState2 = _slicedToArray(_useState, 2),
    currentSekaiTheme = _useState2[0],
    setCurrentSekaiTheme = _useState2[1];
  var onSwitchSekaiColor = function onSwitchSekaiColor(sekai) {
    setCurrentSekaiTheme(function (pre) {
      return _objectSpread$u(_objectSpread$u({}, pre), {}, {
        palette: _objectSpread$u(_objectSpread$u({}, pre.palette), {}, {
          sekai: sekai
        })
      });
    });
  };
  var provideValue = {
    sekaiTheme: currentSekaiTheme,
    onSwitchSekaiColor: onSwitchSekaiColor
  };
  var globalStyle = useMemo(function () {
    var _sekaiTheme$typograph, _sekaiTheme$palette, _sekaiTheme$palette2;
    return "\n    * {\n      font-family: ".concat((_sekaiTheme$typograph = sekaiTheme.typography) === null || _sekaiTheme$typograph === void 0 ? void 0 : _sekaiTheme$typograph.fontFamily, ";\n    }\n    body {\n      color: ").concat(((_sekaiTheme$palette = sekaiTheme.palette) === null || _sekaiTheme$palette === void 0 ? void 0 : _sekaiTheme$palette.mode) === DARK_MODE ? '#e0e0e0' : '#212121', ";\n      background: ").concat(((_sekaiTheme$palette2 = sekaiTheme.palette) === null || _sekaiTheme$palette2 === void 0 ? void 0 : _sekaiTheme$palette2.mode) === DARK_MODE ? '#121212' : '#ffffff', ";\n    }\n  ");
  }, [sekaiTheme]);
  return /*#__PURE__*/React.createElement(YourSekaiContext.Provider, {
    value: provideValue
  }, /*#__PURE__*/React.createElement("style", null, globalStyle), children);
};

// prettier-ignore
var COLORS_SEKAI_KEYS = {
  Miku: 'Miku',
  Rin: 'Rin',
  Len: 'Len',
  Luka: 'Luka',
  Meiko: 'Meiko',
  Kaito: 'Kaito',
  Ichika: 'Ichika',
  Saki: 'Saki',
  Honami: 'Honami',
  Shiho: 'Shiho',
  Minori: 'Minori',
  Haruka: 'Haruka',
  Airi: 'Airi',
  Shizuku: 'Shizuku',
  Kohane: 'Kohane',
  An: 'An',
  Akito: 'Akito',
  Toya: 'Toya',
  Tsukasa: 'Tsukasa',
  Emu: 'Emu',
  Nene: 'Nene',
  Rui: 'Rui',
  Kanade: 'Kanade',
  Mafuyu: 'Mafuyu',
  Ena: 'Ena',
  Mizuki: 'Mizuki',
  Virtualsinger: 'Virtualsinger',
  Leoneed: 'Leoneed',
  Moremorejump: 'Moremorejump',
  Vividbadsquad: 'Vividbadsquad',
  Wonderlandsshowtime: 'Wonderlandsshowtime',
  Nightcode: 'Nightcode'
};
// prettier-ignore
var colorsSekai = {
  /** Character */
  Miku: '#33ccba',
  Rin: '#ffcc10',
  Len: '#feee10',
  Luka: '#ffbbcc',
  Meiko: '#dd4544',
  Kaito: '#3367cc',
  Ichika: '#33aaee',
  Saki: '#ffc800',
  Honami: '#ee6666',
  Shiho: '#bbdd22',
  Minori: '#ffc096',
  Haruka: '#99ccff',
  Airi: '#ffaacc',
  Shizuku: '#6be6cd',
  Kohane: '#ff6699',
  An: '#00bbdd',
  Akito: '#ff7722',
  Toya: '#0077dd',
  Tsukasa: '#ffbb00',
  Emu: '#ff66bb',
  Nene: '#33dd99',
  Rui: '#bb88ee',
  Kanade: '#bb6688',
  Mafuyu: '#8888cc',
  Ena: '#ccaa88',
  Mizuki: '#ddaacc',
  /** Unit */
  Virtualsinger: '#f5f5f7',
  Leoneed: '#4455dd',
  Moremorejump: '#88dd44',
  Vividbadsquad: '#ee1166',
  Wonderlandsshowtime: '#ff9900',
  Nightcode: '#884499'
};

var defaultTheme$1 = {
  palette: {
    sekai: COLORS_SEKAI_KEYS.Miku,
    mode: LIGHT_MODE
  }};
var useOptionalSekai = function useOptionalSekai(option) {
  var context = useContext(YourSekaiContext);
  var sekaiColor = context ? colorsSekai[option.sekai || context.sekaiTheme.palette.sekai] : colorsSekai[defaultTheme$1.palette.sekai];
  var modeTheme = context ? option.mode || context.sekaiTheme.palette.mode : defaultTheme$1.palette.mode;
  var isLight = LIGHT_MODE === modeTheme;
  return {
    sekaiColor: sekaiColor,
    modeTheme: modeTheme,
    isLight: isLight
  };
};

var ChevronSvg = function ChevronSvg(_ref) {
  var className = _ref.className,
    sekai = _ref.sekai,
    themeMode = _ref.themeMode,
    _ref$vector = _ref.vector,
    vector = _ref$vector === void 0 ? 'up' : _ref$vector;
  var _useOptionalSekai = useOptionalSekai({
      sekai: sekai,
      mode: themeMode
    }),
    sekaiColor = _useOptionalSekai.sekaiColor,
    isLight = _useOptionalSekai.isLight;
  var color = isLight ? '#212121' : '#e0e0e0';
  var getCoordinate = function getCoordinate(y) {
    return 'up' === vector ? Math.abs(0 - y) : Math.abs(100 - y);
  };
  return /*#__PURE__*/React.createElement("svg", {
    className: clsx(className),
    viewBox: "0 0 100 100",
    width: "100%",
    height: "100%",
    xmlns: "http://www.w3.org/2000/svg"
  }, sekai ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: "45",
    y1: getCoordinate(27.5),
    x2: "85",
    y2: getCoordinate(67.5),
    stroke: sekaiColor,
    strokeWidth: "15"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "55.25",
    y1: getCoordinate(27.5),
    x2: "15",
    y2: getCoordinate(67.5),
    stroke: sekaiColor,
    strokeWidth: "15"
  })) : null, /*#__PURE__*/React.createElement("line", {
    x1: "47.25",
    y1: getCoordinate(30.5),
    x2: "85",
    y2: getCoordinate(67.5),
    stroke: color,
    strokeWidth: "8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "52.75",
    y1: getCoordinate(30.5),
    x2: "15",
    y2: getCoordinate(67.5),
    stroke: color,
    strokeWidth: "8"
  }));
};

/**
 * @description Convert hex color to rgb color
 * @param {string} hex - Hex color string (e.g., #RRGGBB)
 * @returns {string} RGB color string (e.g., rgb(255, 0, 0))
 */
var convertHexToRgb = function convertHexToRgb(hex) {
  if (!/^#([0-9A-Fa-f]{6})$/.test(hex)) {
    throw new Error('Invalid hex color format. Use #RRGGBB');
  }
  var r = parseInt(hex.slice(1, 3), 16);
  var g = parseInt(hex.slice(3, 5), 16);
  var b = parseInt(hex.slice(5, 7), 16);
  return "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
};
/**
 * @description Convert hex color to rgba color
 * @param {string} hex - Hex color string (e.g., #RRGGBB)
 * @param {number} alpha - Alpha value (0 to 1)
 * @returns {string | undefined} RGBA color string (e.g., rgba(255, 0, 0, 0.5))
 */
var convertHexToRgba = function convertHexToRgba(hex) {
  var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  if (!/^#([0-9A-Fa-f]{6})$/.test(hex)) {
    throw new Error('Invalid hex color format. Use #RRGGBB');
  }
  if (alpha < 0 || alpha > 1) {
    throw new Error('Alpha must be between 0 and 1');
  }
  var r = parseInt(hex.slice(1, 3), 16);
  var g = parseInt(hex.slice(3, 5), 16);
  var b = parseInt(hex.slice(5, 7), 16);
  return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(alpha, ")");
};
/**
 * @description Convert hex color to rgba color mixed with black or white
 * @param {string} hex - Hex color string (e.g., #RRGGBB)
 * @param {number} mixRatio - Ratio to mix with black or white (0 to 1)
 * @param {boolean} mixWhite - true to mix with white, false to mix with black
 * @param {number | undefined} alpha - Alpha value (0 to 1), default is 1
 * @returns {string} RGBA color string (e.g., rgba(255, 0, 0, 0.5))
 */
var convertHexToRgbaMixWithBlackOrWhite = function convertHexToRgbaMixWithBlackOrWhite(hex, mixRatio, mixWhite) {
  var alpha = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  if (!/^#([0-9A-Fa-f]{6})$/.test(hex)) {
    throw new Error('Invalid hex color format. Use #RRGGBB');
  }
  if (mixRatio < 0 || mixRatio > 1) {
    throw new Error('mixRatio must be between 0 and 1');
  }
  if (alpha < 0 || alpha > 1) {
    throw new Error('alpha must be between 0 and 1');
  }
  var r = parseInt(hex.slice(1, 3), 16);
  var g = parseInt(hex.slice(3, 5), 16);
  var b = parseInt(hex.slice(5, 7), 16);
  var mixColor = mixWhite ? 255 : 0;
  var mixR = Math.round(r * mixRatio + mixColor * (1 - mixRatio));
  var mixG = Math.round(g * mixRatio + mixColor * (1 - mixRatio));
  var mixB = Math.round(b * mixRatio + mixColor * (1 - mixRatio));
  return "rgb(".concat(mixR, ", ").concat(mixG, ", ").concat(mixB, ", ").concat(alpha, ")");
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$u = "/* Styles for common color */\n/* Styles for z-index */\n/* Styles for common classes */\n.global-module_sekai-text-light__dNCyr {\n  color: #212121;\n}\n\n.global-module_sekai-text-dark__mGqlR {\n  color: #e0e0e0;\n}\n\n.global-module_sekai-color-light__HfMHF {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.global-module_sekai-color-dark__6YhnV {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.global-module_sekai-overlay__mmwzM, .global-module_sekai-overlay-dark__6yGpR, .global-module_sekai-overlay-light__HL9EZ {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.global-module_sekai-overlay-light__HL9EZ {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.global-module_sekai-overlay-dark__6yGpR {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.global-module_sekai-flex-center__g0QI6 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.global-module_sekai-absolute-center__VTxH3 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.global-module_sekai-invisible-scroll__hmrCH {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.global-module_sekai-invisible-scroll__hmrCH::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.global-module_sekai-mb-8__ktEHx {\n  margin-bottom: 8px;\n}\n\n.global-module_sekai-mb-16__6mRfr {\n  margin-bottom: 16px;\n}\n\n.global-module_sekai-mb-24__tgmAP {\n  margin-bottom: 24px;\n}\n\n.global-module_text-xs__8u--w {\n  font-size: 12px;\n}\n\n.global-module_text-sm__eBn36 {\n  font-size: 14px;\n}\n\n.global-module_text-base__MOoLg {\n  font-size: 16px;\n}\n\n.global-module_text-lg__2N5Oe {\n  font-size: 18px;\n}\n\n.global-module_text-xl__jBQ41 {\n  font-size: 20px;\n}\n\n.global-module_text-2xl__ToT7l {\n  font-size: 24px;\n}\n\n.global-module_text-base-bold__4P50L {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.global-module_text-lg-bold__g6LH5 {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.global-module_text-xl-bold__Gofsc {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.global-module_text-2xl-bold__PzJhq {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.global-module_font-bold__pxzrH {\n  font-weight: bold;\n}";
var globalStyles = {"sekai-text-light":"global-module_sekai-text-light__dNCyr","sekai-text-dark":"global-module_sekai-text-dark__mGqlR","sekai-color-light":"global-module_sekai-color-light__HfMHF","sekai-color-dark":"global-module_sekai-color-dark__6YhnV","sekai-overlay":"global-module_sekai-overlay__mmwzM","sekai-overlay-dark":"global-module_sekai-overlay-dark__6yGpR","sekai-overlay-light":"global-module_sekai-overlay-light__HL9EZ","sekai-flex-center":"global-module_sekai-flex-center__g0QI6","sekai-absolute-center":"global-module_sekai-absolute-center__VTxH3","sekai-invisible-scroll":"global-module_sekai-invisible-scroll__hmrCH","sekai-mb-8":"global-module_sekai-mb-8__ktEHx","sekai-mb-16":"global-module_sekai-mb-16__6mRfr","sekai-mb-24":"global-module_sekai-mb-24__tgmAP","text-xs":"global-module_text-xs__8u--w","text-sm":"global-module_text-sm__eBn36","text-base":"global-module_text-base__MOoLg","text-lg":"global-module_text-lg__2N5Oe","text-xl":"global-module_text-xl__jBQ41","text-2xl":"global-module_text-2xl__ToT7l","text-base-bold":"global-module_text-base-bold__4P50L","text-lg-bold":"global-module_text-lg-bold__g6LH5","text-xl-bold":"global-module_text-xl-bold__Gofsc","text-2xl-bold":"global-module_text-2xl-bold__PzJhq","font-bold":"global-module_font-bold__pxzrH"};
styleInject(css_248z$u);

var css_248z$t = ".Accordion-module_sekai-accordion-container__LCxry {\n  width: 100%;\n}\n\n.Accordion-module_sekai-accordion-summary__IkhFf {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  min-height: 40px;\n  font-weight: bold;\n  border: none;\n  padding: 4px 10px;\n}\n.Accordion-module_sekai-accordion-summary__IkhFf:focus-visible {\n  outline: 1px solid var(--sekai-color);\n  background-color: var(--sekai-color-hover);\n}\n.Accordion-module_sekai-accordion-summary__IkhFf .Accordion-module_sekai-accordion-summary-text__EyeSy {\n  margin: 0;\n}\n.Accordion-module_sekai-accordion-summary__IkhFf .Accordion-module_sekai-accordion-summary-icon__yDBmI {\n  width: 18px;\n  height: 18px;\n  transition: transform 0.3s ease-out;\n}\n.Accordion-module_sekai-accordion-summary__IkhFf .Accordion-module_sekai-accordion-summary-icon__yDBmI.Accordion-module_sekai-icon-open__Tj6I0 {\n  transform: rotate(0);\n}\n.Accordion-module_sekai-accordion-summary__IkhFf .Accordion-module_sekai-accordion-summary-icon__yDBmI.Accordion-module_sekai-icon-close__9yyDB {\n  transform: rotate(-180deg);\n}\n\n.Accordion-module_sekai-web-horizon__q2Dio {\n  margin: 0;\n  border: none;\n  width: 100%;\n  height: 1px;\n  background-color: var(--sekai-color);\n}\n\n.Accordion-module_sekai-accordion-details__92WkS {\n  overflow: hidden;\n  padding: 0 10px;\n}\n.Accordion-module_sekai-accordion-details__92WkS .Accordion-module_sekai-detail-text__oPWs- {\n  margin: 0 0 5px 0;\n}";
var styles$t = {"sekai-accordion-container":"Accordion-module_sekai-accordion-container__LCxry","sekai-accordion-summary":"Accordion-module_sekai-accordion-summary__IkhFf","sekai-accordion-summary-text":"Accordion-module_sekai-accordion-summary-text__EyeSy","sekai-accordion-summary-icon":"Accordion-module_sekai-accordion-summary-icon__yDBmI","sekai-icon-open":"Accordion-module_sekai-icon-open__Tj6I0","sekai-icon-close":"Accordion-module_sekai-icon-close__9yyDB","sekai-web-horizon":"Accordion-module_sekai-web-horizon__q2Dio","sekai-accordion-details":"Accordion-module_sekai-accordion-details__92WkS","sekai-detail-text":"Accordion-module_sekai-detail-text__oPWs-"};
styleInject(css_248z$t);

var _excluded$t = ["sekai", "themeMode", "summary", "summaryStyles", "defaultOpen", "details"];
function ownKeys$t(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$t(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$t(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$t(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Accordion = function Accordion(_ref) {
  var sekai = _ref.sekai,
    themeMode = _ref.themeMode,
    summary = _ref.summary,
    summaryStyles = _ref.summaryStyles,
    _ref$defaultOpen = _ref.defaultOpen,
    defaultOpen = _ref$defaultOpen === void 0 ? false : _ref$defaultOpen,
    details = _ref.details,
    rest = _objectWithoutProperties(_ref, _excluded$t);
  var _useOptionalSekai = useOptionalSekai({
      sekai: sekai,
      mode: themeMode
    }),
    sekaiColor = _useOptionalSekai.sekaiColor,
    modeTheme = _useOptionalSekai.modeTheme,
    isLight = _useOptionalSekai.isLight;
  var sekaiColorHover = convertHexToRgba(sekaiColor, isLight ? 0.1 : 0.3);
  var optionStyle = {
    '--sekai-color': sekaiColor,
    '--sekai-color-hover': sekaiColorHover
  };
  var _useState = useState(defaultOpen),
    _useState2 = _slicedToArray(_useState, 2),
    openAccordion = _useState2[0],
    setOpenAccordion = _useState2[1];
  var handleOpenClose = function handleOpenClose() {
    return setOpenAccordion(function (pre) {
      return !pre;
    });
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: clsx(styles$t['sekai-accordion-container'], rest.className),
    style: _objectSpread$t(_objectSpread$t({}, optionStyle), rest.style)
  }), /*#__PURE__*/React.createElement("button", {
    className: clsx(styles$t['sekai-accordion-summary'], globalStyles["sekai-color-".concat(modeTheme)], summaryStyles),
    onClick: handleOpenClose,
    id: "accordion-summary",
    "aria-expanded": openAccordion,
    "aria-controls": "details-contents"
  }, /*#__PURE__*/React.createElement("p", {
    className: styles$t['sekai-accordion-summary-text']
  }, summary), /*#__PURE__*/React.createElement(ChevronSvg, {
    className: clsx(styles$t["sekai-accordion-summary-icon"], openAccordion ? styles$t['sekai-icon-open'] : styles$t['sekai-icon-close']),
    sekai: sekai,
    themeMode: themeMode,
    vector: "up"
  })), /*#__PURE__*/React.createElement("hr", {
    className: styles$t['sekai-web-horizon']
  }), /*#__PURE__*/React.createElement(AccordionDetailsContents, {
    open: openAccordion,
    details: details
  }));
};
var AccordionDetailsContents = function AccordionDetailsContents(_ref2) {
  var open = _ref2.open,
    details = _ref2.details;
  var refDetails = useRef(null);
  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    heightDetails = _useState4[0],
    setHeightDetails = _useState4[1];
  useEffect(function () {
    if (refDetails.current) {
      requestAnimationFrame(function () {
        setHeightDetails(refDetails.current.scrollHeight);
      });
    }
  }, []);
  var animationDetailsStyles = _objectSpread$t(_objectSpread$t({
    maxHeight: open ? heightDetails ? "".concat(heightDetails, "px") : 'none' : '0px',
    opacity: open ? 1 : 0
  }, open && {
    margin: '10px 0'
  }), {}, {
    transition: 'max-height 0.3s ease-out, opacity 0.3s ease-out, margin 0.3s ease-out'
  });
  var renderDetails = function renderDetails(details) {
    if (isString(details)) return /*#__PURE__*/React.createElement(DetailText$1, {
      text: details
    });
    if (isStringArray(details)) {
      return details.map(function (el) {
        return /*#__PURE__*/React.createElement(DetailText$1, {
          key: el,
          text: el
        });
      });
    }
    return details;
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: refDetails,
    id: "details-contents",
    role: "region",
    "aria-labelledby": "accordion-summary",
    className: styles$t['sekai-accordion-details'],
    style: animationDetailsStyles
  }, renderDetails(details));
};
var isString = function isString(el) {
  return typeof el === 'string';
};
var isStringArray = function isStringArray(el) {
  return Array.isArray(el) && el.every(isString);
};
var DetailText$1 = function DetailText(_ref3) {
  var text = _ref3.text;
  return /*#__PURE__*/React.createElement("p", {
    className: styles$t['sekai-detail-text']
  }, text);
};

var css_248z$s = ".Backdrop-module_sekai-backdrop-visible__WBf2v {\n  display: block;\n}\n\n.Backdrop-module_sekai-backdrop-hidden__VY-ZG {\n  display: none;\n}\n\n.Backdrop-module_sekai-backdrop-bg__-4uxN {\n  background: var(--sekai-color-bg);\n}\n\n.Backdrop-module_sekai-backdrop-centered__KN6ki {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}";
var styles$s = {"sekai-backdrop-visible":"Backdrop-module_sekai-backdrop-visible__WBf2v","sekai-backdrop-hidden":"Backdrop-module_sekai-backdrop-hidden__VY-ZG","sekai-backdrop-bg":"Backdrop-module_sekai-backdrop-bg__-4uxN","sekai-backdrop-centered":"Backdrop-module_sekai-backdrop-centered__KN6ki"};
styleInject(css_248z$s);

var _excluded$s = ["sekai", "themeMode", "open", "children", "containerComponent", "centered"];
function ownKeys$s(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$s(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$s(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$s(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Backdrop = function Backdrop(_ref) {
  var sekai = _ref.sekai,
    themeMode = _ref.themeMode,
    open = _ref.open,
    children = _ref.children,
    containerComponent = _ref.containerComponent,
    _ref$centered = _ref.centered,
    centered = _ref$centered === void 0 ? true : _ref$centered,
    rest = _objectWithoutProperties(_ref, _excluded$s);
  var displayBackdrop = open ? 'sekai-backdrop-visible' : 'sekai-backdrop-hidden';
  var portalContainer = containerComponent || document.body;
  var _useOptionalSekai = useOptionalSekai({
      sekai: sekai,
      mode: themeMode
    }),
    sekaiColor = _useOptionalSekai.sekaiColor,
    modeTheme = _useOptionalSekai.modeTheme;
  var sekaiColorBg = convertHexToRgbaMixWithBlackOrWhite(sekaiColor, 0.5, false, 0.8);
  var optionStyle = _objectSpread$s({
    '--sekai-color-bg': sekaiColorBg
  }, containerComponent && {
    position: 'absolute'
  });
  return /*#__PURE__*/createPortal(/*#__PURE__*/React.createElement("div", {
    className: clsx(styles$s[displayBackdrop])
  }, /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: clsx(globalStyles["sekai-overlay-".concat(modeTheme)], _defineProperty(_defineProperty({}, styles$s['sekai-backdrop-bg'], sekai), styles$s['sekai-backdrop-centered'], centered), rest.className),
    style: _objectSpread$s(_objectSpread$s({}, optionStyle), rest.style)
  }), children)), portalContainer);
};

var css_248z$r = ".BasicButton-module_sekai-basic-button__VyCUN, .BasicButton-module_sekai-basic-button-dark__6gtPa, .BasicButton-module_sekai-basic-button-light__4e-cr {\n  padding: 5px 10px;\n  border-radius: 10px;\n  min-height: 40px;\n}\n.BasicButton-module_sekai-basic-button__VyCUN:disabled, .BasicButton-module_sekai-basic-button-dark__6gtPa:disabled, .BasicButton-module_sekai-basic-button-light__4e-cr:disabled {\n  opacity: 0.5;\n}\n.BasicButton-module_sekai-basic-button__VyCUN:disabled:hover, .BasicButton-module_sekai-basic-button-dark__6gtPa:disabled:hover, .BasicButton-module_sekai-basic-button-light__4e-cr:disabled:hover {\n  background-color: transparent;\n}\n\n.BasicButton-module_sekai-basic-button-light__4e-cr {\n  border: 2px solid var(--sekai-color);\n}\n.BasicButton-module_sekai-basic-button-light__4e-cr:hover {\n  background-color: var(--sekai-color-hover);\n}\n.BasicButton-module_sekai-basic-button-light__4e-cr:focus-visible {\n  outline: 1px solid var(--sekai-color);\n}\n\n.BasicButton-module_sekai-basic-button-dark__6gtPa {\n  border: 2px solid var(--sekai-color);\n}\n.BasicButton-module_sekai-basic-button-dark__6gtPa:hover {\n  background-color: var(--sekai-color-hover);\n}\n.BasicButton-module_sekai-basic-button-dark__6gtPa:focus-visible {\n  outline: 1px solid var(--sekai-color);\n}";
var styles$r = {"sekai-basic-button":"BasicButton-module_sekai-basic-button__VyCUN","sekai-basic-button-dark":"BasicButton-module_sekai-basic-button-dark__6gtPa","sekai-basic-button-light":"BasicButton-module_sekai-basic-button-light__4e-cr"};
styleInject(css_248z$r);

var _excluded$r = ["sekai", "withText", "themeMode", "children", "disabled"];
function ownKeys$r(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$r(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$r(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$r(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var BasicButton = function BasicButton(_ref) {
  var sekai = _ref.sekai,
    _ref$withText = _ref.withText,
    withText = _ref$withText === void 0 ? false : _ref$withText,
    themeMode = _ref.themeMode,
    children = _ref.children,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    rest = _objectWithoutProperties(_ref, _excluded$r);
  var _useOptionalSekai = useOptionalSekai({
      sekai: sekai,
      mode: themeMode
    }),
    sekaiColor = _useOptionalSekai.sekaiColor,
    modeTheme = _useOptionalSekai.modeTheme,
    isLight = _useOptionalSekai.isLight;
  var sekaiColorHover = convertHexToRgba(sekaiColor, isLight ? 0.1 : 0.3);
  var optionStyle = _objectSpread$r({
    '--sekai-color': sekaiColor,
    '--sekai-color-hover': sekaiColorHover
  }, withText && {
    color: sekaiColor
  });
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    type: "button",
    className: clsx(styles$r["sekai-basic-button-".concat(modeTheme)], globalStyles["sekai-color-".concat(modeTheme)], rest.className),
    style: _objectSpread$r(_objectSpread$r({}, optionStyle), rest.style),
    disabled: disabled
  }), children);
};

var css_248z$q = "/* Styles for common color */\n/* Styles for z-index */\n/* Styles for common classes */\n.HamburgerButton-module_sekai-text-light__cICvG {\n  color: #212121;\n}\n\n.HamburgerButton-module_sekai-text-dark__7JERo {\n  color: #e0e0e0;\n}\n\n.HamburgerButton-module_sekai-color-light__IRmQz {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.HamburgerButton-module_sekai-color-dark__x8y3p {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.HamburgerButton-module_sekai-overlay__CXS1I, .HamburgerButton-module_sekai-overlay-dark__lqHwY, .HamburgerButton-module_sekai-overlay-light__3bEUx {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.HamburgerButton-module_sekai-overlay-light__3bEUx {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.HamburgerButton-module_sekai-overlay-dark__lqHwY {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.HamburgerButton-module_sekai-flex-center__59gay {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.HamburgerButton-module_sekai-absolute-center__AWHYK {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.HamburgerButton-module_sekai-invisible-scroll__Up0ts {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.HamburgerButton-module_sekai-invisible-scroll__Up0ts::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.HamburgerButton-module_sekai-mb-8__b6Ixu {\n  margin-bottom: 8px;\n}\n\n.HamburgerButton-module_sekai-mb-16__4Pcll {\n  margin-bottom: 16px;\n}\n\n.HamburgerButton-module_sekai-mb-24__MT3YS {\n  margin-bottom: 24px;\n}\n\n.HamburgerButton-module_text-xs__4mzib {\n  font-size: 12px;\n}\n\n.HamburgerButton-module_text-sm__f3MuW {\n  font-size: 14px;\n}\n\n.HamburgerButton-module_text-base__fOob- {\n  font-size: 16px;\n}\n\n.HamburgerButton-module_text-lg__0h-m3 {\n  font-size: 18px;\n}\n\n.HamburgerButton-module_text-xl__HW66u {\n  font-size: 20px;\n}\n\n.HamburgerButton-module_text-2xl__cFQhy {\n  font-size: 24px;\n}\n\n.HamburgerButton-module_text-base-bold__v--S6 {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.HamburgerButton-module_text-lg-bold__FO1Zv {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.HamburgerButton-module_text-xl-bold__uQA-X {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.HamburgerButton-module_text-2xl-bold__7ghvt {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.HamburgerButton-module_font-bold__jXZRO {\n  font-weight: bold;\n}\n\n.HamburgerButton-module_sekai-hamburger-button__10Par, .HamburgerButton-module_sekai-hamburger-button-dark__6slJ0, .HamburgerButton-module_sekai-hamburger-button-light__u2tFo {\n  position: relative;\n  width: 40px;\n  height: 40px;\n  margin: 10px;\n  padding: 0;\n  border: none;\n  border-radius: 50%;\n  background-color: var(--sekai-color-bg);\n}\n.HamburgerButton-module_sekai-hamburger-button__10Par .HamburgerButton-module_sekai-hamburger-line-light__1oRfq, .HamburgerButton-module_sekai-hamburger-button-dark__6slJ0 .HamburgerButton-module_sekai-hamburger-line-light__1oRfq, .HamburgerButton-module_sekai-hamburger-button-light__u2tFo .HamburgerButton-module_sekai-hamburger-line-light__1oRfq {\n  background-color: rgb(77.25, 77.25, 77.25);\n}\n.HamburgerButton-module_sekai-hamburger-button__10Par .HamburgerButton-module_sekai-hamburger-line-dark__wGnsu, .HamburgerButton-module_sekai-hamburger-button-dark__6slJ0 .HamburgerButton-module_sekai-hamburger-line-dark__wGnsu, .HamburgerButton-module_sekai-hamburger-button-light__u2tFo .HamburgerButton-module_sekai-hamburger-line-dark__wGnsu {\n  background-color: rgb(229.5, 229.5, 229.5);\n}\n.HamburgerButton-module_sekai-hamburger-button__10Par span, .HamburgerButton-module_sekai-hamburger-button-dark__6slJ0 span, .HamburgerButton-module_sekai-hamburger-button-light__u2tFo span {\n  position: absolute;\n  display: block;\n  height: 4px;\n  width: 50%;\n  left: 50%;\n  transform: translateX(-50%);\n  transition: transform 0.2s ease-in-out, top 0.2s ease-in-out, opacity 0.2s ease-in-out;\n}\n.HamburgerButton-module_sekai-hamburger-button__10Par span:nth-child(1), .HamburgerButton-module_sekai-hamburger-button-dark__6slJ0 span:nth-child(1), .HamburgerButton-module_sekai-hamburger-button-light__u2tFo span:nth-child(1) {\n  top: 11.3333333333px;\n  transform-origin: center;\n}\n.HamburgerButton-module_sekai-hamburger-button__10Par span:nth-child(1).HamburgerButton-module_sekai-open__BLicz, .HamburgerButton-module_sekai-hamburger-button-dark__6slJ0 span:nth-child(1).HamburgerButton-module_sekai-open__BLicz, .HamburgerButton-module_sekai-hamburger-button-light__u2tFo span:nth-child(1).HamburgerButton-module_sekai-open__BLicz {\n  top: 50%;\n  transform: translate(-50%, -50%) rotate(45deg);\n}\n.HamburgerButton-module_sekai-hamburger-button__10Par span:nth-child(2), .HamburgerButton-module_sekai-hamburger-button-dark__6slJ0 span:nth-child(2), .HamburgerButton-module_sekai-hamburger-button-light__u2tFo span:nth-child(2) {\n  top: calc(50% - 2px);\n}\n.HamburgerButton-module_sekai-hamburger-button__10Par span:nth-child(2).HamburgerButton-module_sekai-open__BLicz, .HamburgerButton-module_sekai-hamburger-button-dark__6slJ0 span:nth-child(2).HamburgerButton-module_sekai-open__BLicz, .HamburgerButton-module_sekai-hamburger-button-light__u2tFo span:nth-child(2).HamburgerButton-module_sekai-open__BLicz {\n  opacity: 0;\n}\n.HamburgerButton-module_sekai-hamburger-button__10Par span:nth-child(3), .HamburgerButton-module_sekai-hamburger-button-dark__6slJ0 span:nth-child(3), .HamburgerButton-module_sekai-hamburger-button-light__u2tFo span:nth-child(3) {\n  top: 24.6666666667px;\n  transform-origin: center;\n}\n.HamburgerButton-module_sekai-hamburger-button__10Par span:nth-child(3).HamburgerButton-module_sekai-open__BLicz, .HamburgerButton-module_sekai-hamburger-button-dark__6slJ0 span:nth-child(3).HamburgerButton-module_sekai-open__BLicz, .HamburgerButton-module_sekai-hamburger-button-light__u2tFo span:nth-child(3).HamburgerButton-module_sekai-open__BLicz {\n  top: 50%;\n  transform: translate(-50%, -50%) rotate(-45deg);\n}\n\n.HamburgerButton-module_sekai-hamburger-button-light__u2tFo:focus-visible {\n  outline: 1px solid rgb(77.25, 77.25, 77.25);\n}\n.HamburgerButton-module_sekai-hamburger-button-light__u2tFo .HamburgerButton-module_sekai-hamburger-line__h-Hvg {\n  background-color: rgb(77.25, 77.25, 77.25);\n}\n\n.HamburgerButton-module_sekai-hamburger-button-dark__6slJ0:focus-visible {\n  outline: 1px solid rgb(229.5, 229.5, 229.5);\n}\n.HamburgerButton-module_sekai-hamburger-button-dark__6slJ0 .HamburgerButton-module_sekai-hamburger-line__h-Hvg {\n  background-color: rgb(229.5, 229.5, 229.5);\n}";
var styles$q = {"sekai-text-light":"HamburgerButton-module_sekai-text-light__cICvG","sekai-text-dark":"HamburgerButton-module_sekai-text-dark__7JERo","sekai-color-light":"HamburgerButton-module_sekai-color-light__IRmQz","sekai-color-dark":"HamburgerButton-module_sekai-color-dark__x8y3p","sekai-overlay":"HamburgerButton-module_sekai-overlay__CXS1I","sekai-overlay-dark":"HamburgerButton-module_sekai-overlay-dark__lqHwY","sekai-overlay-light":"HamburgerButton-module_sekai-overlay-light__3bEUx","sekai-flex-center":"HamburgerButton-module_sekai-flex-center__59gay","sekai-absolute-center":"HamburgerButton-module_sekai-absolute-center__AWHYK","sekai-invisible-scroll":"HamburgerButton-module_sekai-invisible-scroll__Up0ts","sekai-mb-8":"HamburgerButton-module_sekai-mb-8__b6Ixu","sekai-mb-16":"HamburgerButton-module_sekai-mb-16__4Pcll","sekai-mb-24":"HamburgerButton-module_sekai-mb-24__MT3YS","text-xs":"HamburgerButton-module_text-xs__4mzib","text-sm":"HamburgerButton-module_text-sm__f3MuW","text-base":"HamburgerButton-module_text-base__fOob-","text-lg":"HamburgerButton-module_text-lg__0h-m3","text-xl":"HamburgerButton-module_text-xl__HW66u","text-2xl":"HamburgerButton-module_text-2xl__cFQhy","text-base-bold":"HamburgerButton-module_text-base-bold__v--S6","text-lg-bold":"HamburgerButton-module_text-lg-bold__FO1Zv","text-xl-bold":"HamburgerButton-module_text-xl-bold__uQA-X","text-2xl-bold":"HamburgerButton-module_text-2xl-bold__7ghvt","font-bold":"HamburgerButton-module_font-bold__jXZRO","sekai-hamburger-button":"HamburgerButton-module_sekai-hamburger-button__10Par","sekai-hamburger-button-dark":"HamburgerButton-module_sekai-hamburger-button-dark__6slJ0","sekai-hamburger-button-light":"HamburgerButton-module_sekai-hamburger-button-light__u2tFo","sekai-hamburger-line-light":"HamburgerButton-module_sekai-hamburger-line-light__1oRfq","sekai-hamburger-line-dark":"HamburgerButton-module_sekai-hamburger-line-dark__wGnsu","sekai-open":"HamburgerButton-module_sekai-open__BLicz","sekai-hamburger-line":"HamburgerButton-module_sekai-hamburger-line__h-Hvg"};
styleInject(css_248z$q);

var _excluded$q = ["sekai", "themeMode", "open"];
function ownKeys$q(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$q(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$q(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$q(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var HamburgerButton = function HamburgerButton(_ref) {
  var sekai = _ref.sekai,
    themeMode = _ref.themeMode,
    open = _ref.open,
    rest = _objectWithoutProperties(_ref, _excluded$q);
  var _useOptionalSekai = useOptionalSekai({
      sekai: sekai,
      mode: themeMode
    }),
    sekaiColor = _useOptionalSekai.sekaiColor,
    modeTheme = _useOptionalSekai.modeTheme;
  var sekaiColorBg = convertHexToRgba(sekaiColor, 0.8);
  var optionStyle = {
    '--sekai-color-bg': sekaiColorBg
  };
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    type: "button",
    className: clsx(styles$q["sekai-hamburger-button-".concat(modeTheme)], rest.className),
    style: _objectSpread$q(_objectSpread$q({}, optionStyle), rest.style),
    "aria-expanded": open,
    "aria-label": open ? 'Close menu' : 'Open menu'
  }), Array.from({
    length: 3
  }).map(function (_, index) {
    return /*#__PURE__*/React.createElement("span", {
      key: "hamburger-line-".concat(index),
      className: clsx(styles$q['sekai-hamburger-line'], open && styles$q['sekai-open'])
    });
  }));
};

var css_248z$p = "/* Styles for common color */\n/* Styles for z-index */\n/* Styles for common classes */\n.ScrollTopButton-module_sekai-text-light__e3IY5 {\n  color: #212121;\n}\n\n.ScrollTopButton-module_sekai-text-dark__-fu6v {\n  color: #e0e0e0;\n}\n\n.ScrollTopButton-module_sekai-color-light__mzppf {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.ScrollTopButton-module_sekai-color-dark__RNYOy {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.ScrollTopButton-module_sekai-overlay__qyIAR, .ScrollTopButton-module_sekai-overlay-dark__BLV5U, .ScrollTopButton-module_sekai-overlay-light__UOUDA {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.ScrollTopButton-module_sekai-overlay-light__UOUDA {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.ScrollTopButton-module_sekai-overlay-dark__BLV5U {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.ScrollTopButton-module_sekai-flex-center__JqUke {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.ScrollTopButton-module_sekai-absolute-center__iYb9Y {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.ScrollTopButton-module_sekai-invisible-scroll__IroCi {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.ScrollTopButton-module_sekai-invisible-scroll__IroCi::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.ScrollTopButton-module_sekai-mb-8__LyC4M {\n  margin-bottom: 8px;\n}\n\n.ScrollTopButton-module_sekai-mb-16__0qJ3c {\n  margin-bottom: 16px;\n}\n\n.ScrollTopButton-module_sekai-mb-24__NWv6A {\n  margin-bottom: 24px;\n}\n\n.ScrollTopButton-module_text-xs__6gj4a {\n  font-size: 12px;\n}\n\n.ScrollTopButton-module_text-sm__XyTXL {\n  font-size: 14px;\n}\n\n.ScrollTopButton-module_text-base__3cuwI {\n  font-size: 16px;\n}\n\n.ScrollTopButton-module_text-lg__33Ng6 {\n  font-size: 18px;\n}\n\n.ScrollTopButton-module_text-xl__oozs6 {\n  font-size: 20px;\n}\n\n.ScrollTopButton-module_text-2xl__bMW2q {\n  font-size: 24px;\n}\n\n.ScrollTopButton-module_text-base-bold__RoOuy {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.ScrollTopButton-module_text-lg-bold__aHHmt {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.ScrollTopButton-module_text-xl-bold__rQDJN {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.ScrollTopButton-module_text-2xl-bold__lKYFR {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.ScrollTopButton-module_font-bold__eDQ92 {\n  font-weight: bold;\n}\n\n.ScrollTopButton-module_sekai-scroll-top-button__2793F, .ScrollTopButton-module_sekai-scroll-top-button-bottom-left__BN4pP, .ScrollTopButton-module_sekai-scroll-top-button-bottom-right__YS1qa {\n  position: fixed;\n  z-index: 1150;\n  border: none;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  background-color: var(--sekai-color-bg);\n  opacity: 0.5;\n}\n.ScrollTopButton-module_sekai-scroll-top-button__2793F:focus-visible, .ScrollTopButton-module_sekai-scroll-top-button-bottom-left__BN4pP:focus-visible, .ScrollTopButton-module_sekai-scroll-top-button-bottom-right__YS1qa:focus-visible {\n  outline: 2px solid var(--sekai-color);\n  opacity: 1;\n}\n.ScrollTopButton-module_sekai-scroll-top-button__2793F:hover, .ScrollTopButton-module_sekai-scroll-top-button-bottom-left__BN4pP:hover, .ScrollTopButton-module_sekai-scroll-top-button-bottom-right__YS1qa:hover {\n  opacity: 1;\n}\n\n.ScrollTopButton-module_sekai-scroll-top-button-bottom-right__YS1qa {\n  bottom: 20px;\n  right: 20px;\n}\n\n.ScrollTopButton-module_sekai-scroll-top-button-bottom-left__BN4pP {\n  bottom: 20px;\n  left: 20px;\n}\n\n.ScrollTopButton-module_sekai-scroll-top-icon__4W3jF {\n  width: 25px;\n  height: 25px;\n}";
var styles$p = {"sekai-text-light":"ScrollTopButton-module_sekai-text-light__e3IY5","sekai-text-dark":"ScrollTopButton-module_sekai-text-dark__-fu6v","sekai-color-light":"ScrollTopButton-module_sekai-color-light__mzppf","sekai-color-dark":"ScrollTopButton-module_sekai-color-dark__RNYOy","sekai-overlay":"ScrollTopButton-module_sekai-overlay__qyIAR","sekai-overlay-dark":"ScrollTopButton-module_sekai-overlay-dark__BLV5U","sekai-overlay-light":"ScrollTopButton-module_sekai-overlay-light__UOUDA","sekai-flex-center":"ScrollTopButton-module_sekai-flex-center__JqUke","sekai-absolute-center":"ScrollTopButton-module_sekai-absolute-center__iYb9Y","sekai-invisible-scroll":"ScrollTopButton-module_sekai-invisible-scroll__IroCi","sekai-mb-8":"ScrollTopButton-module_sekai-mb-8__LyC4M","sekai-mb-16":"ScrollTopButton-module_sekai-mb-16__0qJ3c","sekai-mb-24":"ScrollTopButton-module_sekai-mb-24__NWv6A","text-xs":"ScrollTopButton-module_text-xs__6gj4a","text-sm":"ScrollTopButton-module_text-sm__XyTXL","text-base":"ScrollTopButton-module_text-base__3cuwI","text-lg":"ScrollTopButton-module_text-lg__33Ng6","text-xl":"ScrollTopButton-module_text-xl__oozs6","text-2xl":"ScrollTopButton-module_text-2xl__bMW2q","text-base-bold":"ScrollTopButton-module_text-base-bold__RoOuy","text-lg-bold":"ScrollTopButton-module_text-lg-bold__aHHmt","text-xl-bold":"ScrollTopButton-module_text-xl-bold__rQDJN","text-2xl-bold":"ScrollTopButton-module_text-2xl-bold__lKYFR","font-bold":"ScrollTopButton-module_font-bold__eDQ92","sekai-scroll-top-button":"ScrollTopButton-module_sekai-scroll-top-button__2793F","sekai-scroll-top-button-bottom-left":"ScrollTopButton-module_sekai-scroll-top-button-bottom-left__BN4pP","sekai-scroll-top-button-bottom-right":"ScrollTopButton-module_sekai-scroll-top-button-bottom-right__YS1qa","sekai-scroll-top-icon":"ScrollTopButton-module_sekai-scroll-top-icon__4W3jF"};
styleInject(css_248z$p);

var _excluded$p = ["sekai", "themeMode", "pos"];
function ownKeys$p(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$p(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$p(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$p(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var ScrollTopButton = function ScrollTopButton(_ref) {
  var sekai = _ref.sekai,
    themeMode = _ref.themeMode,
    _ref$pos = _ref.pos,
    pos = _ref$pos === void 0 ? 'bottom-right' : _ref$pos,
    rest = _objectWithoutProperties(_ref, _excluded$p);
  var _useOptionalSekai = useOptionalSekai({
      sekai: sekai,
      mode: themeMode
    }),
    sekaiColor = _useOptionalSekai.sekaiColor,
    isLight = _useOptionalSekai.isLight;
  var sekaiColorBg = convertHexToRgbaMixWithBlackOrWhite(sekaiColor, 0.5, isLight);
  var optionStyle = {
    '--sekai-color': sekaiColor,
    '--sekai-color-bg': sekaiColorBg
  };
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isVisible = _useState2[0],
    setIsVisible = _useState2[1];
  useEffect(function () {
    var handleScroll = function handleScroll() {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return function () {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  var handleScroll = function handleScroll() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  if (!isVisible) return null;
  return /*#__PURE__*/createPortal(/*#__PURE__*/React.createElement("button", _extends({}, rest, {
    className: clsx(styles$p["sekai-scroll-top-button-".concat(pos)], rest.className),
    style: _objectSpread$p(_objectSpread$p({}, optionStyle), rest.style),
    onClick: handleScroll
  }), /*#__PURE__*/React.createElement(ChevronSvg, {
    className: clsx(styles$p['sekai-scroll-top-icon']),
    sekai: sekai,
    themeMode: themeMode
  })), document.body);
};

var css_248z$o = "/* Styles for common color */\n/* Styles for z-index */\n/* Styles for common classes */\n.StrongButton-module_sekai-text-light__j-tn9 {\n  color: #212121;\n}\n\n.StrongButton-module_sekai-text-dark__9qJtb {\n  color: #e0e0e0;\n}\n\n.StrongButton-module_sekai-color-light__S2FuU {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.StrongButton-module_sekai-color-dark__Nmzlm {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.StrongButton-module_sekai-overlay__YhF8w, .StrongButton-module_sekai-overlay-dark__5Jx1Y, .StrongButton-module_sekai-overlay-light__Q34oR {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.StrongButton-module_sekai-overlay-light__Q34oR {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.StrongButton-module_sekai-overlay-dark__5Jx1Y {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.StrongButton-module_sekai-flex-center__SaKWZ {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.StrongButton-module_sekai-absolute-center__iYQ4r {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.StrongButton-module_sekai-invisible-scroll__qrDva {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.StrongButton-module_sekai-invisible-scroll__qrDva::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.StrongButton-module_sekai-mb-8__JL2yt {\n  margin-bottom: 8px;\n}\n\n.StrongButton-module_sekai-mb-16__T5bZ7 {\n  margin-bottom: 16px;\n}\n\n.StrongButton-module_sekai-mb-24__HnymN {\n  margin-bottom: 24px;\n}\n\n.StrongButton-module_text-xs__4dlFl {\n  font-size: 12px;\n}\n\n.StrongButton-module_text-sm__uHcdn {\n  font-size: 14px;\n}\n\n.StrongButton-module_text-base__oHIAr {\n  font-size: 16px;\n}\n\n.StrongButton-module_text-lg__JIVwn {\n  font-size: 18px;\n}\n\n.StrongButton-module_text-xl__IzaEw {\n  font-size: 20px;\n}\n\n.StrongButton-module_text-2xl__qlFwV {\n  font-size: 24px;\n}\n\n.StrongButton-module_text-base-bold__GuNqJ {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.StrongButton-module_text-lg-bold__KS0lp {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.StrongButton-module_text-xl-bold__j0RVM {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.StrongButton-module_text-2xl-bold__wpWWg {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.StrongButton-module_font-bold__-1M4k {\n  font-weight: bold;\n}\n\n.StrongButton-module_sekai-strong-button__AQ7N0, .StrongButton-module_sekai-strong-button-dark__t7x5O, .StrongButton-module_sekai-strong-button-light__2NC9s {\n  padding: 5px 10px;\n  border-radius: 10px;\n  min-height: 40px;\n  border: 2px solid var(--sekai-color);\n  background-color: var(--sekai-color-bg);\n}\n.StrongButton-module_sekai-strong-button__AQ7N0:hover, .StrongButton-module_sekai-strong-button-dark__t7x5O:hover, .StrongButton-module_sekai-strong-button-light__2NC9s:hover {\n  background-color: var(--sekai-color);\n}\n.StrongButton-module_sekai-strong-button__AQ7N0:disabled, .StrongButton-module_sekai-strong-button-dark__t7x5O:disabled, .StrongButton-module_sekai-strong-button-light__2NC9s:disabled {\n  opacity: 0.6;\n}\n.StrongButton-module_sekai-strong-button__AQ7N0:disabled:hover, .StrongButton-module_sekai-strong-button-dark__t7x5O:disabled:hover, .StrongButton-module_sekai-strong-button-light__2NC9s:disabled:hover {\n  background-color: var(--sekai-color-bg);\n}\n\n.StrongButton-module_sekai-strong-button-light__2NC9s {\n  color: #212121;\n}\n.StrongButton-module_sekai-strong-button-light__2NC9s:disabled {\n  color: rgb(119.58, 119.58, 119.58);\n}\n\n.StrongButton-module_sekai-strong-button-dark__t7x5O {\n  color: #e0e0e0;\n}\n.StrongButton-module_sekai-strong-button-dark__t7x5O:disabled {\n  color: rgb(236.09, 236.09, 236.09);\n}";
var styles$o = {"sekai-text-light":"StrongButton-module_sekai-text-light__j-tn9","sekai-text-dark":"StrongButton-module_sekai-text-dark__9qJtb","sekai-color-light":"StrongButton-module_sekai-color-light__S2FuU","sekai-color-dark":"StrongButton-module_sekai-color-dark__Nmzlm","sekai-overlay":"StrongButton-module_sekai-overlay__YhF8w","sekai-overlay-dark":"StrongButton-module_sekai-overlay-dark__5Jx1Y","sekai-overlay-light":"StrongButton-module_sekai-overlay-light__Q34oR","sekai-flex-center":"StrongButton-module_sekai-flex-center__SaKWZ","sekai-absolute-center":"StrongButton-module_sekai-absolute-center__iYQ4r","sekai-invisible-scroll":"StrongButton-module_sekai-invisible-scroll__qrDva","sekai-mb-8":"StrongButton-module_sekai-mb-8__JL2yt","sekai-mb-16":"StrongButton-module_sekai-mb-16__T5bZ7","sekai-mb-24":"StrongButton-module_sekai-mb-24__HnymN","text-xs":"StrongButton-module_text-xs__4dlFl","text-sm":"StrongButton-module_text-sm__uHcdn","text-base":"StrongButton-module_text-base__oHIAr","text-lg":"StrongButton-module_text-lg__JIVwn","text-xl":"StrongButton-module_text-xl__IzaEw","text-2xl":"StrongButton-module_text-2xl__qlFwV","text-base-bold":"StrongButton-module_text-base-bold__GuNqJ","text-lg-bold":"StrongButton-module_text-lg-bold__KS0lp","text-xl-bold":"StrongButton-module_text-xl-bold__j0RVM","text-2xl-bold":"StrongButton-module_text-2xl-bold__wpWWg","font-bold":"StrongButton-module_font-bold__-1M4k","sekai-strong-button":"StrongButton-module_sekai-strong-button__AQ7N0","sekai-strong-button-dark":"StrongButton-module_sekai-strong-button-dark__t7x5O","sekai-strong-button-light":"StrongButton-module_sekai-strong-button-light__2NC9s"};
styleInject(css_248z$o);

var _excluded$o = ["sekai", "themeMode", "children", "disabled"];
function ownKeys$o(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$o(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$o(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$o(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var StrongButton = function StrongButton(_ref) {
  var sekai = _ref.sekai,
    themeMode = _ref.themeMode,
    children = _ref.children,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    rest = _objectWithoutProperties(_ref, _excluded$o);
  var _useOptionalSekai = useOptionalSekai({
      sekai: sekai,
      mode: themeMode
    }),
    sekaiColor = _useOptionalSekai.sekaiColor,
    modeTheme = _useOptionalSekai.modeTheme;
  var sekaiColorBg = convertHexToRgba(sekaiColor, 0.8);
  var optionStyle = {
    '--sekai-color': sekaiColor,
    '--sekai-color-bg': sekaiColorBg
  };
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    type: "button",
    className: clsx(styles$o["sekai-strong-button-".concat(modeTheme)], rest.className),
    style: _objectSpread$o(_objectSpread$o({}, optionStyle), rest.style),
    disabled: disabled
  }), children);
};

var ArrowSvg = function ArrowSvg(_ref) {
  var className = _ref.className,
    sekai = _ref.sekai,
    themeMode = _ref.themeMode,
    _ref$vector = _ref.vector,
    vector = _ref$vector === void 0 ? 'right' : _ref$vector;
  var _useOptionalSekai = useOptionalSekai({
      sekai: sekai,
      mode: themeMode
    }),
    sekaiColor = _useOptionalSekai.sekaiColor,
    isLight = _useOptionalSekai.isLight;
  var color = isLight ? '#212121' : '#e0e0e0';
  var getCoordinate = function getCoordinate(x) {
    return 'left' === vector ? Math.abs(0 - x) : Math.abs(100 - x);
  };
  return /*#__PURE__*/React.createElement("svg", {
    className: clsx(className),
    viewBox: "0 0 100 100",
    width: "100%",
    height: "100%",
    xmlns: "http://www.w3.org/2000/svg"
  }, sekai ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: getCoordinate(27.5),
    y1: "55.25",
    x2: getCoordinate(67.5),
    y2: "15",
    stroke: sekaiColor,
    strokeWidth: "15"
  }), /*#__PURE__*/React.createElement("line", {
    x1: getCoordinate(27.5),
    y1: "45",
    x2: getCoordinate(67.5),
    y2: "85",
    stroke: sekaiColor,
    strokeWidth: "15"
  })) : null, /*#__PURE__*/React.createElement("line", {
    x1: getCoordinate(30.5),
    y1: "52.75",
    x2: getCoordinate(67.5),
    y2: "15",
    stroke: color,
    strokeWidth: "8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: getCoordinate(30.5),
    y1: "47.25",
    x2: getCoordinate(67.5),
    y2: "85",
    stroke: color,
    strokeWidth: "8"
  }));
};

var css_248z$n = "/* Styles for common color */\n/* Styles for z-index */\n/* Styles for common classes */\n.StylishButton-module_sekai-text-light__3vO89 {\n  color: #212121;\n}\n\n.StylishButton-module_sekai-text-dark__mgUQq {\n  color: #e0e0e0;\n}\n\n.StylishButton-module_sekai-color-light__aJmGs {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.StylishButton-module_sekai-color-dark__fg15e {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.StylishButton-module_sekai-overlay__veq0W, .StylishButton-module_sekai-overlay-dark__765zj, .StylishButton-module_sekai-overlay-light__JvLd- {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.StylishButton-module_sekai-overlay-light__JvLd- {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.StylishButton-module_sekai-overlay-dark__765zj {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.StylishButton-module_sekai-flex-center__t7Ca- {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.StylishButton-module_sekai-absolute-center__H8Cig {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.StylishButton-module_sekai-invisible-scroll__0kP8n {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.StylishButton-module_sekai-invisible-scroll__0kP8n::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.StylishButton-module_sekai-mb-8__PrcBk {\n  margin-bottom: 8px;\n}\n\n.StylishButton-module_sekai-mb-16__cmX8q {\n  margin-bottom: 16px;\n}\n\n.StylishButton-module_sekai-mb-24__gXYSN {\n  margin-bottom: 24px;\n}\n\n.StylishButton-module_text-xs__KBjIE {\n  font-size: 12px;\n}\n\n.StylishButton-module_text-sm__bH8P0 {\n  font-size: 14px;\n}\n\n.StylishButton-module_text-base__Po8ZV {\n  font-size: 16px;\n}\n\n.StylishButton-module_text-lg__tLmNI {\n  font-size: 18px;\n}\n\n.StylishButton-module_text-xl__2vLaD {\n  font-size: 20px;\n}\n\n.StylishButton-module_text-2xl__cLHkH {\n  font-size: 24px;\n}\n\n.StylishButton-module_text-base-bold__BtztQ {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.StylishButton-module_text-lg-bold__E0QKt {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.StylishButton-module_text-xl-bold__ufmfX {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.StylishButton-module_text-2xl-bold__oAI0W {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.StylishButton-module_font-bold__b6nqw {\n  font-weight: bold;\n}\n\n.StylishButton-module_sekai-stylish-button__8HgBf, .StylishButton-module_sekai-stylish-button-dark__pYL1N, .StylishButton-module_sekai-stylish-button-light__Ep9zc {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background-color: inherit;\n  border: none;\n  padding: 5px 10px;\n  border: 2px solid var(--sekai-color);\n  height: 40px;\n}\n.StylishButton-module_sekai-stylish-button__8HgBf:focus-visible, .StylishButton-module_sekai-stylish-button-dark__pYL1N:focus-visible, .StylishButton-module_sekai-stylish-button-light__Ep9zc:focus-visible {\n  outline: 1px solid var(--sekai-color);\n}\n.StylishButton-module_sekai-stylish-button__8HgBf:disabled, .StylishButton-module_sekai-stylish-button-dark__pYL1N:disabled, .StylishButton-module_sekai-stylish-button-light__Ep9zc:disabled {\n  opacity: 0.5;\n}\n.StylishButton-module_sekai-stylish-button__8HgBf:disabled:hover, .StylishButton-module_sekai-stylish-button-dark__pYL1N:disabled:hover, .StylishButton-module_sekai-stylish-button-light__Ep9zc:disabled:hover {\n  background-color: transparent;\n}\n.StylishButton-module_sekai-stylish-button__8HgBf:not(:disabled):hover .StylishButton-module_sekai-stylish-button-decoration__E-7g3, .StylishButton-module_sekai-stylish-button-dark__pYL1N:not(:disabled):hover .StylishButton-module_sekai-stylish-button-decoration__E-7g3, .StylishButton-module_sekai-stylish-button-light__Ep9zc:not(:disabled):hover .StylishButton-module_sekai-stylish-button-decoration__E-7g3 {\n  top: 0;\n  left: 0;\n}\n\n.StylishButton-module_sekai-stylish-button-light__Ep9zc {\n  color: #212121;\n}\n\n.StylishButton-module_sekai-stylish-button-dark__pYL1N {\n  color: #e0e0e0;\n}\n\n.StylishButton-module_sekai-stylish-button-decoration__E-7g3 {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  width: 100%;\n  height: 100%;\n  background-color: var(--sekai-color-hover);\n  transition: all 0.2s ease-in-out;\n}\n\n.StylishButton-module_sekai-stylish-arrow-icon__Kw3g4 {\n  width: 16px;\n  height: 16px;\n}";
var styles$n = {"sekai-text-light":"StylishButton-module_sekai-text-light__3vO89","sekai-text-dark":"StylishButton-module_sekai-text-dark__mgUQq","sekai-color-light":"StylishButton-module_sekai-color-light__aJmGs","sekai-color-dark":"StylishButton-module_sekai-color-dark__fg15e","sekai-overlay":"StylishButton-module_sekai-overlay__veq0W","sekai-overlay-dark":"StylishButton-module_sekai-overlay-dark__765zj","sekai-overlay-light":"StylishButton-module_sekai-overlay-light__JvLd-","sekai-flex-center":"StylishButton-module_sekai-flex-center__t7Ca-","sekai-absolute-center":"StylishButton-module_sekai-absolute-center__H8Cig","sekai-invisible-scroll":"StylishButton-module_sekai-invisible-scroll__0kP8n","sekai-mb-8":"StylishButton-module_sekai-mb-8__PrcBk","sekai-mb-16":"StylishButton-module_sekai-mb-16__cmX8q","sekai-mb-24":"StylishButton-module_sekai-mb-24__gXYSN","text-xs":"StylishButton-module_text-xs__KBjIE","text-sm":"StylishButton-module_text-sm__bH8P0","text-base":"StylishButton-module_text-base__Po8ZV","text-lg":"StylishButton-module_text-lg__tLmNI","text-xl":"StylishButton-module_text-xl__2vLaD","text-2xl":"StylishButton-module_text-2xl__cLHkH","text-base-bold":"StylishButton-module_text-base-bold__BtztQ","text-lg-bold":"StylishButton-module_text-lg-bold__E0QKt","text-xl-bold":"StylishButton-module_text-xl-bold__ufmfX","text-2xl-bold":"StylishButton-module_text-2xl-bold__oAI0W","font-bold":"StylishButton-module_font-bold__b6nqw","sekai-stylish-button":"StylishButton-module_sekai-stylish-button__8HgBf","sekai-stylish-button-dark":"StylishButton-module_sekai-stylish-button-dark__pYL1N","sekai-stylish-button-light":"StylishButton-module_sekai-stylish-button-light__Ep9zc","sekai-stylish-button-decoration":"StylishButton-module_sekai-stylish-button-decoration__E-7g3","sekai-stylish-arrow-icon":"StylishButton-module_sekai-stylish-arrow-icon__Kw3g4"};
styleInject(css_248z$n);

var _excluded$n = ["sekai", "themeMode", "children", "disabled", "arrowIcon"];
function ownKeys$n(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$n(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$n(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$n(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var StylishButton = function StylishButton(_ref) {
  var sekai = _ref.sekai,
    themeMode = _ref.themeMode,
    children = _ref.children,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$arrowIcon = _ref.arrowIcon,
    arrowIcon = _ref$arrowIcon === void 0 ? true : _ref$arrowIcon,
    rest = _objectWithoutProperties(_ref, _excluded$n);
  var _useOptionalSekai = useOptionalSekai({
      sekai: sekai,
      mode: themeMode
    }),
    sekaiColor = _useOptionalSekai.sekaiColor,
    modeTheme = _useOptionalSekai.modeTheme,
    isLight = _useOptionalSekai.isLight;
  var sekaiColorHover = convertHexToRgba(sekaiColor, isLight ? 0.3 : 0.5);
  var optionStyle = {
    '--sekai-color': sekaiColor,
    '--sekai-color-hover': sekaiColorHover
  };
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    type: "button",
    className: clsx(styles$n["sekai-stylish-button-".concat(modeTheme)], rest.className),
    style: _objectSpread$n(_objectSpread$n({}, optionStyle), rest.style),
    disabled: disabled
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$n['sekai-stylish-button-decoration']
  }), children, arrowIcon ? /*#__PURE__*/React.createElement(ArrowSvg, {
    className: styles$n['sekai-stylish-arrow-icon'],
    vector: "right"
  }) : null);
};

var css_248z$m = ".Card-module_sekai-card__yjfwU {\n  box-shadow: 0px 2px 1px -1px var(--sekai-color-shadow), 0px 1px 1px 0px var(--sekai-color-shadow), 0px 1px 3px 0px var(--sekai-color-shadow), 0px -0.5px 1px 0px var(--sekai-color-shadow);\n  border-radius: 5px;\n  background-clip: padding-box;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.Card-module_sekai-card-content__XtdPc {\n  padding: 16px;\n  border-radius: 5px;\n}\n\n.Card-module_sekai-card-title__Os2hg {\n  margin: 0;\n}\n.Card-module_sekai-card-title__Os2hg.Card-module_sekai-underline__oP8Wv {\n  text-decoration: underline;\n  text-decoration-color: var(--sekai-color);\n}";
var styles$m = {"sekai-card":"Card-module_sekai-card__yjfwU","sekai-card-content":"Card-module_sekai-card-content__XtdPc","sekai-card-title":"Card-module_sekai-card-title__Os2hg","sekai-underline":"Card-module_sekai-underline__oP8Wv"};
styleInject(css_248z$m);

var _excluded$m = ["sekai", "themeMode", "children"],
  _excluded2$4 = ["themeMode", "children"],
  _excluded3$2 = ["sekai", "themeMode", "title", "underline"];
function ownKeys$m(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$m(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$m(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$m(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Card = function Card(_ref) {
  var sekai = _ref.sekai,
    themeMode = _ref.themeMode,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, _excluded$m);
  var _useOptionalSekai = useOptionalSekai({
      sekai: sekai,
      mode: themeMode
    }),
    sekaiColor = _useOptionalSekai.sekaiColor,
    modeTheme = _useOptionalSekai.modeTheme;
  var sekaiColoShadow = convertHexToRgba(sekaiColor, 0.25);
  var optionStyle = {
    '--sekai-color': sekaiColor,
    '--sekai-color-shadow': sekaiColoShadow
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: clsx(styles$m['sekai-card'], globalStyles["sekai-color-".concat(modeTheme)], rest.className),
    style: _objectSpread$m(_objectSpread$m({}, optionStyle), rest.style)
  }), children);
};
var CardContent = function CardContent(_ref2) {
  var themeMode = _ref2.themeMode,
    children = _ref2.children,
    rest = _objectWithoutProperties(_ref2, _excluded2$4);
  var _useOptionalSekai2 = useOptionalSekai({
      mode: themeMode
    }),
    modeTheme = _useOptionalSekai2.modeTheme;
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: clsx(styles$m['sekai-card-content'], globalStyles["sekai-color-".concat(modeTheme)], rest.className)
  }), children);
};
var CardTitle = function CardTitle(_ref3) {
  var sekai = _ref3.sekai,
    themeMode = _ref3.themeMode,
    title = _ref3.title,
    underline = _ref3.underline,
    rest = _objectWithoutProperties(_ref3, _excluded3$2);
  var _useOptionalSekai3 = useOptionalSekai({
      sekai: sekai,
      mode: themeMode
    }),
    sekaiColor = _useOptionalSekai3.sekaiColor,
    modeTheme = _useOptionalSekai3.modeTheme;
  var optionStyle = {
    '--sekai-color': sekaiColor
  };
  return /*#__PURE__*/React.createElement("h3", _extends({}, rest, {
    className: clsx(styles$m['sekai-card-title'], globalStyles["sekai-color-".concat(modeTheme)], underline && styles$m['sekai-underline'], rest.className),
    style: _objectSpread$m(_objectSpread$m({}, optionStyle), rest.style)
  }), title);
};

var css_248z$l = "/* Styles for common color */\n/* Styles for z-index */\n/* Styles for common classes */\n.NamePlate-module_sekai-text-light__UsOKl {\n  color: #212121;\n}\n\n.NamePlate-module_sekai-text-dark__CFCQE {\n  color: #e0e0e0;\n}\n\n.NamePlate-module_sekai-color-light__fAjCm {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.NamePlate-module_sekai-color-dark__NNWi1 {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.NamePlate-module_sekai-overlay__Mb-tS, .NamePlate-module_sekai-overlay-dark__1oClF, .NamePlate-module_sekai-overlay-light__Vv7ku {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.NamePlate-module_sekai-overlay-light__Vv7ku {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.NamePlate-module_sekai-overlay-dark__1oClF {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.NamePlate-module_sekai-flex-center__z9JuY {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.NamePlate-module_sekai-absolute-center__7ENL3 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.NamePlate-module_sekai-invisible-scroll__ur4Pi {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.NamePlate-module_sekai-invisible-scroll__ur4Pi::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.NamePlate-module_sekai-mb-8__oS4g0 {\n  margin-bottom: 8px;\n}\n\n.NamePlate-module_sekai-mb-16__zza9A {\n  margin-bottom: 16px;\n}\n\n.NamePlate-module_sekai-mb-24__W9Re8 {\n  margin-bottom: 24px;\n}\n\n.NamePlate-module_text-xs__RzFM0 {\n  font-size: 12px;\n}\n\n.NamePlate-module_text-sm__id2ML {\n  font-size: 14px;\n}\n\n.NamePlate-module_text-base__-1wOX {\n  font-size: 16px;\n}\n\n.NamePlate-module_text-lg__oKBqf {\n  font-size: 18px;\n}\n\n.NamePlate-module_text-xl__4T1N4 {\n  font-size: 20px;\n}\n\n.NamePlate-module_text-2xl__1jJ5S {\n  font-size: 24px;\n}\n\n.NamePlate-module_text-base-bold__jDDaB {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.NamePlate-module_text-lg-bold__x66jd {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.NamePlate-module_text-xl-bold__prQ09 {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.NamePlate-module_text-2xl-bold__DGit4 {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.NamePlate-module_font-bold__7aSB- {\n  font-weight: bold;\n}\n\n.NamePlate-module_sekai-name-plate-light__AtHDl {\n  color: #212121;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.NamePlate-module_sekai-name-plate-dark__P45Rm {\n  color: #e0e0e0;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.NamePlate-module_sekai-name-plate-color__O4oE8 {\n  color: var(--sekai-color);\n  font-size: 1.25em;\n  font-weight: bold;\n}";
var styles$l = {"sekai-text-light":"NamePlate-module_sekai-text-light__UsOKl","sekai-text-dark":"NamePlate-module_sekai-text-dark__CFCQE","sekai-color-light":"NamePlate-module_sekai-color-light__fAjCm","sekai-color-dark":"NamePlate-module_sekai-color-dark__NNWi1","sekai-overlay":"NamePlate-module_sekai-overlay__Mb-tS","sekai-overlay-dark":"NamePlate-module_sekai-overlay-dark__1oClF","sekai-overlay-light":"NamePlate-module_sekai-overlay-light__Vv7ku","sekai-flex-center":"NamePlate-module_sekai-flex-center__z9JuY","sekai-absolute-center":"NamePlate-module_sekai-absolute-center__7ENL3","sekai-invisible-scroll":"NamePlate-module_sekai-invisible-scroll__ur4Pi","sekai-mb-8":"NamePlate-module_sekai-mb-8__oS4g0","sekai-mb-16":"NamePlate-module_sekai-mb-16__zza9A","sekai-mb-24":"NamePlate-module_sekai-mb-24__W9Re8","text-xs":"NamePlate-module_text-xs__RzFM0","text-sm":"NamePlate-module_text-sm__id2ML","text-base":"NamePlate-module_text-base__-1wOX","text-lg":"NamePlate-module_text-lg__oKBqf","text-xl":"NamePlate-module_text-xl__4T1N4","text-2xl":"NamePlate-module_text-2xl__1jJ5S","text-base-bold":"NamePlate-module_text-base-bold__jDDaB","text-lg-bold":"NamePlate-module_text-lg-bold__x66jd","text-xl-bold":"NamePlate-module_text-xl-bold__prQ09","text-2xl-bold":"NamePlate-module_text-2xl-bold__DGit4","font-bold":"NamePlate-module_font-bold__7aSB-","sekai-name-plate-light":"NamePlate-module_sekai-name-plate-light__AtHDl","sekai-name-plate-dark":"NamePlate-module_sekai-name-plate-dark__P45Rm","sekai-name-plate-color":"NamePlate-module_sekai-name-plate-color__O4oE8"};
styleInject(css_248z$l);

var _excluded$l = ["sekai", "themeMode", "text", "colorCount"];
function ownKeys$l(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$l(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$l(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$l(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var NamePlate = function NamePlate(_ref) {
  var sekai = _ref.sekai,
    themeMode = _ref.themeMode,
    text = _ref.text,
    _ref$colorCount = _ref.colorCount,
    colorCount = _ref$colorCount === void 0 ? 1 : _ref$colorCount,
    rest = _objectWithoutProperties(_ref, _excluded$l);
  var _useOptionalSekai = useOptionalSekai({
      sekai: sekai,
      mode: themeMode
    }),
    sekaiColor = _useOptionalSekai.sekaiColor,
    modeTheme = _useOptionalSekai.modeTheme;
  var optionStyle = {
    '--sekai-color': sekaiColor
  };
  var colorText = text.slice(0, colorCount);
  var normalText = text.slice(colorCount);
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: clsx(styles$l["sekai-name-plate-".concat(modeTheme)], rest.className),
    style: _objectSpread$l(_objectSpread$l({}, optionStyle), rest.style)
  }), /*#__PURE__*/React.createElement("span", {
    className: styles$l['sekai-name-plate-color']
  }, colorText), /*#__PURE__*/React.createElement("span", null, normalText));
};

var css_248z$k = "/* Styles for common color */\n/* Styles for z-index */\n/* Styles for common classes */\n.OutlineText-module_sekai-text-light__-uLtm {\n  color: #212121;\n}\n\n.OutlineText-module_sekai-text-dark__qWtUT {\n  color: #e0e0e0;\n}\n\n.OutlineText-module_sekai-color-light__SLEeL {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.OutlineText-module_sekai-color-dark__THKPa {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.OutlineText-module_sekai-overlay__ArXyQ, .OutlineText-module_sekai-overlay-dark__fLHhn, .OutlineText-module_sekai-overlay-light__8wiYq {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.OutlineText-module_sekai-overlay-light__8wiYq {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.OutlineText-module_sekai-overlay-dark__fLHhn {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.OutlineText-module_sekai-flex-center__q2tvV {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.OutlineText-module_sekai-absolute-center__r-UAB {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.OutlineText-module_sekai-invisible-scroll__bB7dW {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.OutlineText-module_sekai-invisible-scroll__bB7dW::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.OutlineText-module_sekai-mb-8__zEzdE {\n  margin-bottom: 8px;\n}\n\n.OutlineText-module_sekai-mb-16__050Re {\n  margin-bottom: 16px;\n}\n\n.OutlineText-module_sekai-mb-24__dy4-6 {\n  margin-bottom: 24px;\n}\n\n.OutlineText-module_text-xs__rS9r6 {\n  font-size: 12px;\n}\n\n.OutlineText-module_text-sm__7c53M {\n  font-size: 14px;\n}\n\n.OutlineText-module_text-base__s7GRb {\n  font-size: 16px;\n}\n\n.OutlineText-module_text-lg__mzpAt {\n  font-size: 18px;\n}\n\n.OutlineText-module_text-xl__KIzox {\n  font-size: 20px;\n}\n\n.OutlineText-module_text-2xl__yM4hH {\n  font-size: 24px;\n}\n\n.OutlineText-module_text-base-bold__kO5lu {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.OutlineText-module_text-lg-bold__r1pwI {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.OutlineText-module_text-xl-bold__vFg7D {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.OutlineText-module_text-2xl-bold__4KGGS {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.OutlineText-module_font-bold__k-KF- {\n  font-weight: bold;\n}\n\n.OutlineText-module_sekai-outline-text-light__o0dTZ {\n  color: #ffffff;\n  font-weight: bold;\n  position: relative;\n}\n.OutlineText-module_sekai-outline-text-light__o0dTZ::before {\n  content: attr(data-text);\n  position: absolute;\n  top: 0;\n  left: 0;\n  text-shadow: 0.75px 0.75px 0 var(--sekai-color), -0.75px 0.75px 0 var(--sekai-color), 0.75px -0.75px 0 var(--sekai-color), -0.75px -0.75px 0 var(--sekai-color), 0.75px 0 0 var(--sekai-color), -0.75px 0 0 var(--sekai-color), 0 0.75px 0 var(--sekai-color), 0 -0.75px 0 var(--sekai-color);\n}\n\n.OutlineText-module_sekai-outline-text-dark__Fk6Uk {\n  color: #121212;\n  font-weight: bold;\n  position: relative;\n}\n.OutlineText-module_sekai-outline-text-dark__Fk6Uk::before {\n  content: attr(data-text);\n  position: absolute;\n  top: 0;\n  left: 0;\n  text-shadow: 0.75px 0.75px 0 var(--sekai-color), -0.75px 0.75px 0 var(--sekai-color), 0.75px -0.75px 0 var(--sekai-color), -0.75px -0.75px 0 var(--sekai-color), 0.75px 0 0 var(--sekai-color), -0.75px 0 0 var(--sekai-color), 0 0.75px 0 var(--sekai-color), 0 -0.75px 0 var(--sekai-color);\n}";
var styles$k = {"sekai-text-light":"OutlineText-module_sekai-text-light__-uLtm","sekai-text-dark":"OutlineText-module_sekai-text-dark__qWtUT","sekai-color-light":"OutlineText-module_sekai-color-light__SLEeL","sekai-color-dark":"OutlineText-module_sekai-color-dark__THKPa","sekai-overlay":"OutlineText-module_sekai-overlay__ArXyQ","sekai-overlay-dark":"OutlineText-module_sekai-overlay-dark__fLHhn","sekai-overlay-light":"OutlineText-module_sekai-overlay-light__8wiYq","sekai-flex-center":"OutlineText-module_sekai-flex-center__q2tvV","sekai-absolute-center":"OutlineText-module_sekai-absolute-center__r-UAB","sekai-invisible-scroll":"OutlineText-module_sekai-invisible-scroll__bB7dW","sekai-mb-8":"OutlineText-module_sekai-mb-8__zEzdE","sekai-mb-16":"OutlineText-module_sekai-mb-16__050Re","sekai-mb-24":"OutlineText-module_sekai-mb-24__dy4-6","text-xs":"OutlineText-module_text-xs__rS9r6","text-sm":"OutlineText-module_text-sm__7c53M","text-base":"OutlineText-module_text-base__s7GRb","text-lg":"OutlineText-module_text-lg__mzpAt","text-xl":"OutlineText-module_text-xl__KIzox","text-2xl":"OutlineText-module_text-2xl__yM4hH","text-base-bold":"OutlineText-module_text-base-bold__kO5lu","text-lg-bold":"OutlineText-module_text-lg-bold__r1pwI","text-xl-bold":"OutlineText-module_text-xl-bold__vFg7D","text-2xl-bold":"OutlineText-module_text-2xl-bold__4KGGS","font-bold":"OutlineText-module_font-bold__k-KF-","sekai-outline-text-light":"OutlineText-module_sekai-outline-text-light__o0dTZ","sekai-outline-text-dark":"OutlineText-module_sekai-outline-text-dark__Fk6Uk"};
styleInject(css_248z$k);

var _excluded$k = ["sekai", "themeMode", "text"];
function ownKeys$k(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$k(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$k(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$k(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var OutlineText = function OutlineText(_ref) {
  var sekai = _ref.sekai,
    themeMode = _ref.themeMode,
    text = _ref.text,
    rest = _objectWithoutProperties(_ref, _excluded$k);
  var _useOptionalSekai = useOptionalSekai({
      sekai: sekai,
      mode: themeMode
    }),
    sekaiColor = _useOptionalSekai.sekaiColor,
    modeTheme = _useOptionalSekai.modeTheme;
  var optionStyle = {
    '--sekai-color': sekaiColor
  };
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    className: clsx(styles$k["sekai-outline-text-".concat(modeTheme)], rest.className),
    style: _objectSpread$k(_objectSpread$k({}, optionStyle), rest.style),
    "data-text": text,
    "aria-label": text
  }), text);
};

var css_248z$j = "/* Styles for common color */\n/* Styles for z-index */\n/* Styles for common classes */\n.PrskLinkCard-module_sekai-text-light__RkMIw {\n  color: #212121;\n}\n\n.PrskLinkCard-module_sekai-text-dark__Qe41g {\n  color: #e0e0e0;\n}\n\n.PrskLinkCard-module_sekai-color-light__pjK4V {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.PrskLinkCard-module_sekai-color-dark__I-4oM {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.PrskLinkCard-module_sekai-overlay__AwRwz, .PrskLinkCard-module_sekai-overlay-dark__Sh6WT, .PrskLinkCard-module_sekai-overlay-light__WtveP {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.PrskLinkCard-module_sekai-overlay-light__WtveP {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.PrskLinkCard-module_sekai-overlay-dark__Sh6WT {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.PrskLinkCard-module_sekai-flex-center__EleVE {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.PrskLinkCard-module_sekai-absolute-center__0nvLE {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.PrskLinkCard-module_sekai-invisible-scroll__3M27K {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.PrskLinkCard-module_sekai-invisible-scroll__3M27K::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.PrskLinkCard-module_sekai-mb-8__pdEzh {\n  margin-bottom: 8px;\n}\n\n.PrskLinkCard-module_sekai-mb-16__n5Pgv {\n  margin-bottom: 16px;\n}\n\n.PrskLinkCard-module_sekai-mb-24__dBYh2 {\n  margin-bottom: 24px;\n}\n\n.PrskLinkCard-module_text-xs__aYVXs {\n  font-size: 12px;\n}\n\n.PrskLinkCard-module_text-sm__GCcUB {\n  font-size: 14px;\n}\n\n.PrskLinkCard-module_text-base__fNN0p {\n  font-size: 16px;\n}\n\n.PrskLinkCard-module_text-lg__BjfPw {\n  font-size: 18px;\n}\n\n.PrskLinkCard-module_text-xl__0PLUa {\n  font-size: 20px;\n}\n\n.PrskLinkCard-module_text-2xl__7kuEG {\n  font-size: 24px;\n}\n\n.PrskLinkCard-module_text-base-bold__-wNYp {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.PrskLinkCard-module_text-lg-bold__X4t8- {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.PrskLinkCard-module_text-xl-bold__yejzn {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.PrskLinkCard-module_text-2xl-bold__eHgRB {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.PrskLinkCard-module_font-bold__8rnLH {\n  font-weight: bold;\n}\n\n.PrskLinkCard-module_sekai-prsk-link-card-button__TknT6 {\n  display: flex;\n  position: relative;\n  border: none;\n  border-radius: 5px;\n  padding: 0;\n}\n.PrskLinkCard-module_sekai-prsk-link-card-button__TknT6:focus-visible {\n  outline: 1px solid var(--sekai-color);\n}\n.PrskLinkCard-module_sekai-prsk-link-card-button__TknT6 .PrskLinkCard-module_sekai-prsk-link-card-title__wuqzq {\n  font-size: 16px;\n  font-weight: 900;\n  color: #e0e0e0;\n  background-color: #636382;\n  padding: 0 5px;\n  margin: 5px;\n  height: -moz-fit-content;\n  height: fit-content;\n  z-index: 2;\n}\n.PrskLinkCard-module_sekai-prsk-link-card-button__TknT6 .PrskLinkCard-module_sekai-prsk-link-card-title__wuqzq.PrskLinkCard-module_sekai-title-effect-light__BwB-D {\n  mix-blend-mode: multiply;\n}\n.PrskLinkCard-module_sekai-prsk-link-card-button__TknT6 .PrskLinkCard-module_sekai-prsk-link-card-title__wuqzq.PrskLinkCard-module_sekai-title-effect-dark__WXiaO {\n  mix-blend-mode: screen;\n}\n.PrskLinkCard-module_sekai-prsk-link-card-button__TknT6 .PrskLinkCard-module_sekai-prsk-link-card-subtext__9Qlvw {\n  position: absolute;\n  opacity: 0.3;\n  left: 0;\n  bottom: 0;\n  line-height: 28px;\n  font-size: 28px;\n  z-index: 0;\n}\n.PrskLinkCard-module_sekai-prsk-link-card-button__TknT6 .PrskLinkCard-module_sekai-prsk-link-card-icon__2-5YL {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 60px;\n  height: 60px;\n  overflow: hidden;\n  border-bottom-right-radius: 5px;\n}\n.PrskLinkCard-module_sekai-prsk-link-card-button__TknT6 .PrskLinkCard-module_sekai-prsk-link-card-icon__2-5YL img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}";
var styles$j = {"sekai-text-light":"PrskLinkCard-module_sekai-text-light__RkMIw","sekai-text-dark":"PrskLinkCard-module_sekai-text-dark__Qe41g","sekai-color-light":"PrskLinkCard-module_sekai-color-light__pjK4V","sekai-color-dark":"PrskLinkCard-module_sekai-color-dark__I-4oM","sekai-overlay":"PrskLinkCard-module_sekai-overlay__AwRwz","sekai-overlay-dark":"PrskLinkCard-module_sekai-overlay-dark__Sh6WT","sekai-overlay-light":"PrskLinkCard-module_sekai-overlay-light__WtveP","sekai-flex-center":"PrskLinkCard-module_sekai-flex-center__EleVE","sekai-absolute-center":"PrskLinkCard-module_sekai-absolute-center__0nvLE","sekai-invisible-scroll":"PrskLinkCard-module_sekai-invisible-scroll__3M27K","sekai-mb-8":"PrskLinkCard-module_sekai-mb-8__pdEzh","sekai-mb-16":"PrskLinkCard-module_sekai-mb-16__n5Pgv","sekai-mb-24":"PrskLinkCard-module_sekai-mb-24__dBYh2","text-xs":"PrskLinkCard-module_text-xs__aYVXs","text-sm":"PrskLinkCard-module_text-sm__GCcUB","text-base":"PrskLinkCard-module_text-base__fNN0p","text-lg":"PrskLinkCard-module_text-lg__BjfPw","text-xl":"PrskLinkCard-module_text-xl__0PLUa","text-2xl":"PrskLinkCard-module_text-2xl__7kuEG","text-base-bold":"PrskLinkCard-module_text-base-bold__-wNYp","text-lg-bold":"PrskLinkCard-module_text-lg-bold__X4t8-","text-xl-bold":"PrskLinkCard-module_text-xl-bold__yejzn","text-2xl-bold":"PrskLinkCard-module_text-2xl-bold__eHgRB","font-bold":"PrskLinkCard-module_font-bold__8rnLH","sekai-prsk-link-card-button":"PrskLinkCard-module_sekai-prsk-link-card-button__TknT6","sekai-prsk-link-card-title":"PrskLinkCard-module_sekai-prsk-link-card-title__wuqzq","sekai-title-effect-light":"PrskLinkCard-module_sekai-title-effect-light__BwB-D","sekai-title-effect-dark":"PrskLinkCard-module_sekai-title-effect-dark__WXiaO","sekai-prsk-link-card-subtext":"PrskLinkCard-module_sekai-prsk-link-card-subtext__9Qlvw","sekai-prsk-link-card-icon":"PrskLinkCard-module_sekai-prsk-link-card-icon__2-5YL"};
styleInject(css_248z$j);

var _excluded$j = ["sekai", "themeMode", "height", "width", "onClick", "title", "subText", "icon"];
var PrskLinkCard = function PrskLinkCard(_ref) {
  var sekai = _ref.sekai,
    themeMode = _ref.themeMode,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 72 : _ref$height,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? 160 : _ref$width,
    onClick = _ref.onClick,
    title = _ref.title,
    subText = _ref.subText,
    icon = _ref.icon,
    rest = _objectWithoutProperties(_ref, _excluded$j);
  var _useOptionalSekai = useOptionalSekai({
      sekai: sekai,
      mode: themeMode
    }),
    modeTheme = _useOptionalSekai.modeTheme;
  var cardSizeStyle = {
    height: "".concat(height, "px"),
    width: "".concat(width, "px")
  };
  return /*#__PURE__*/React.createElement(Card, _extends({}, rest, {
    sekai: sekai,
    themeMode: themeMode
  }), /*#__PURE__*/React.createElement("button", {
    className: clsx(styles$j['sekai-prsk-link-card-button'], globalStyles["sekai-color-".concat(modeTheme)]),
    style: (cardSizeStyle),
    onClick: onClick
  }, /*#__PURE__*/React.createElement(NamePlate, {
    id: "".concat(rest.id ? rest.id : 'prsk-link-card', "-title"),
    className: clsx(styles$j['sekai-prsk-link-card-title'], styles$j["sekai-title-effect-".concat(modeTheme)]),
    sekai: sekai,
    themeMode: themeMode,
    text: title
  }), /*#__PURE__*/React.createElement(OutlineText, {
    id: "".concat(rest.id ? rest.id : 'prsk-link-card', "-subtext"),
    className: styles$j['sekai-prsk-link-card-subtext'],
    sekai: sekai,
    themeMode: themeMode,
    text: subText
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$j['sekai-prsk-link-card-icon']
  }, getImgComponent$2(icon))));
};
var getImgComponent$2 = function getImgComponent(icon) {
  if (typeof icon === 'string') {
    return /*#__PURE__*/React.createElement("img", {
      src: icon,
      alt: ""
    });
  } else {
    return icon;
  }
};

function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray$1(r);
}

function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray$1(r) || _nonIterableSpread();
}

var ClearSvg = function ClearSvg(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    sekai = _ref.sekai,
    themeMode = _ref.themeMode;
  var _useOptionalSekai = useOptionalSekai({
      sekai: sekai,
      mode: themeMode
    }),
    sekaiColor = _useOptionalSekai.sekaiColor,
    isLight = _useOptionalSekai.isLight;
  var color = isLight ? '#212121' : '#e0e0e0';
  return /*#__PURE__*/React.createElement("svg", {
    className: className,
    viewBox: "0 0 100 100",
    width: "100%",
    height: "100%",
    xmlns: "http://www.w3.org/2000/svg"
  }, sekai ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: "15",
    y1: "15",
    x2: "85",
    y2: "85",
    stroke: sekaiColor,
    strokeWidth: "17",
    opacity: "0.7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "85",
    y1: "15",
    x2: "15",
    y2: "85",
    stroke: sekaiColor,
    strokeWidth: "17",
    opacity: "0.7"
  })) : null, /*#__PURE__*/React.createElement("line", {
    x1: "15",
    y1: "15",
    x2: "85",
    y2: "85",
    stroke: color,
    strokeWidth: "10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "85",
    y1: "15",
    x2: "15",
    y2: "85",
    stroke: color,
    strokeWidth: "10"
  }));
};

/**
 * @description Returns a keyboard event handler that triggers the provided event handler only when the Enter key is pressed.
 * @param eventHandler - The function to be called when the Enter key is pressed.
 * @returns A new event handler that calls the provided handler on Enter key press and prevents the default action.
 */
var fireOnEnterKey = function fireOnEnterKey(eventHandler) {
  return function (e) {
    if (e.key === 'Enter') {
      eventHandler(e);
      e.preventDefault();
    }
  };
};
/**
 * @description Returns a keyboard event handler that triggers the provided event handler only when the Escape key is pressed.
 * @param eventHandler - The function to be called when the Escape key is pressed.
 * @returns A keyboard event handler function.
 */
var fireOnEscapeKey = function fireOnEscapeKey(eventHandler) {
  return function (e) {
    e.preventDefault();
    if (e.key === 'Escape') {
      eventHandler(e);
    }
  };
};
/**
 * @description Returns a keyboard event handler that triggers the provided event handler only when the Space key is pressed.
 * @param eventHandler - The function to be called when the Space key is pressed.
 * @returns A keyboard event handler function.
 */
var fireOnSpaceKey = function fireOnSpaceKey(eventHandler) {
  return function (e) {
    e.preventDefault();
    if (e.key === 'Space') {
      eventHandler(e);
    }
  };
};
/**
 * @description Returns a new array with the elements of the input array shuffled in random order.
 * Uses the Fisher-Yates (Knuth) shuffle algorithm to ensure an unbiased shuffle.
 *
 * @typeParam T - The type of elements in the array.
 * @param array - The array to shuffle.
 * @returns A new array containing the shuffled elements.
 */
var shuffleArray = function shuffleArray(array) {
  var shuffledArray = _toConsumableArray(array);
  for (var i = shuffledArray.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref = [shuffledArray[j], shuffledArray[i]];
    shuffledArray[i] = _ref[0];
    shuffledArray[j] = _ref[1];
  }
  return shuffledArray;
};

var css_248z$i = "/* Styles for common color */\n/* Styles for z-index */\n/* Styles for common classes */\n.Dialog-module_sekai-text-light__Gfb2W {\n  color: #212121;\n}\n\n.Dialog-module_sekai-text-dark__djvrs {\n  color: #e0e0e0;\n}\n\n.Dialog-module_sekai-color-light__fIuyC {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.Dialog-module_sekai-color-dark__KrQvz {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.Dialog-module_sekai-overlay__l5u8e, .Dialog-module_sekai-overlay-dark__PTpAS, .Dialog-module_sekai-overlay-light__PYE-2 {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.Dialog-module_sekai-overlay-light__PYE-2 {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.Dialog-module_sekai-overlay-dark__PTpAS {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.Dialog-module_sekai-flex-center__LyhR2 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.Dialog-module_sekai-absolute-center__9eZ-V {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.Dialog-module_sekai-invisible-scroll__yMbwG {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.Dialog-module_sekai-invisible-scroll__yMbwG::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.Dialog-module_sekai-mb-8__-vFZy {\n  margin-bottom: 8px;\n}\n\n.Dialog-module_sekai-mb-16__2odxf {\n  margin-bottom: 16px;\n}\n\n.Dialog-module_sekai-mb-24__sVlha {\n  margin-bottom: 24px;\n}\n\n.Dialog-module_text-xs__5R1Zk {\n  font-size: 12px;\n}\n\n.Dialog-module_text-sm__tH3co {\n  font-size: 14px;\n}\n\n.Dialog-module_text-base__R0M39 {\n  font-size: 16px;\n}\n\n.Dialog-module_text-lg__VCmlG {\n  font-size: 18px;\n}\n\n.Dialog-module_text-xl__j308t {\n  font-size: 20px;\n}\n\n.Dialog-module_text-2xl__WtIYT {\n  font-size: 24px;\n}\n\n.Dialog-module_text-base-bold__m2l8Q {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.Dialog-module_text-lg-bold__GfwOJ {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.Dialog-module_text-xl-bold__CEDAC {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.Dialog-module_text-2xl-bold__7Ow-p {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.Dialog-module_font-bold__qCPhB {\n  font-weight: bold;\n}\n\n.Dialog-module_sekai-container__ksO7t, .Dialog-module_sekai-container-wide__NphhS, .Dialog-module_sekai-container-medium__XUhgC, .Dialog-module_sekai-container-narrow__RgWNL {\n  box-sizing: border-box;\n  max-width: 90vw;\n  border: 2px solid var(--sekai-color);\n  border-radius: 4px;\n  z-index: 1300;\n}\n\n.Dialog-module_sekai-container-narrow__RgWNL {\n  width: 250px;\n}\n\n.Dialog-module_sekai-container-medium__XUhgC {\n  width: 390px;\n}\n\n.Dialog-module_sekai-container-wide__NphhS {\n  width: 600px;\n}\n\n.Dialog-module_sekai-content-wrap__mWRrt {\n  padding: 16px;\n}\n\n/** Dialog Title Header */\n.Dialog-module_sekai-title-header__ATn1B, .Dialog-module_sekai-title-header-wide__5Skds, .Dialog-module_sekai-title-header-medium__61bst, .Dialog-module_sekai-title-header-narrow__uQfFd {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.Dialog-module_sekai-title-header__ATn1B h2, .Dialog-module_sekai-title-header-wide__5Skds h2, .Dialog-module_sekai-title-header-medium__61bst h2, .Dialog-module_sekai-title-header-narrow__uQfFd h2 {\n  margin: 0;\n}\n.Dialog-module_sekai-title-header__ATn1B .Dialog-module_sekai-close-icon__CVbZJ, .Dialog-module_sekai-title-header-wide__5Skds .Dialog-module_sekai-close-icon__CVbZJ, .Dialog-module_sekai-title-header-medium__61bst .Dialog-module_sekai-close-icon__CVbZJ, .Dialog-module_sekai-title-header-narrow__uQfFd .Dialog-module_sekai-close-icon__CVbZJ {\n  border: none;\n  padding: 0;\n  background-color: inherit;\n  aspect-ratio: 1/1;\n}\n\n.Dialog-module_sekai-title-header-narrow__uQfFd {\n  min-height: 32px;\n}\n.Dialog-module_sekai-title-header-narrow__uQfFd h2 {\n  font-size: 1.2em;\n}\n.Dialog-module_sekai-title-header-narrow__uQfFd .Dialog-module_sekai-close-icon__CVbZJ {\n  height: 16px;\n}\n\n.Dialog-module_sekai-title-header-medium__61bst {\n  height: 40px;\n}\n.Dialog-module_sekai-title-header-medium__61bst h2 {\n  font-size: 1.4em;\n}\n.Dialog-module_sekai-title-header-medium__61bst .Dialog-module_sekai-close-icon__CVbZJ {\n  height: 20px;\n}\n\n.Dialog-module_sekai-title-header-wide__5Skds {\n  height: 48px;\n}\n.Dialog-module_sekai-title-header-wide__5Skds .Dialog-module_sekai-close-icon__CVbZJ {\n  height: 24px;\n}\n\n/** Dialog Buttons Area */\n.Dialog-module_sekai-buttons-area__9vRBF {\n  display: flex;\n  width: calc(100% + 4px);\n  margin: 0 -2px -2px;\n  /** Button type : normal */\n  /** Button type : strong */\n}\n.Dialog-module_sekai-buttons-area__9vRBF button {\n  background-color: inherit;\n  padding: 0;\n  min-height: 40px;\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-normal-button-color__mq3H7.Dialog-module_sekai-light__TlNmy, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-light__TlNmy.Dialog-module_sekai-dialog-normal-button-2-1__FBzF9, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-light__TlNmy.Dialog-module_sekai-dialog-normal-button-2-0__iZkb-, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-light__TlNmy.Dialog-module_sekai-dialog-normal-button-1-0__Ui4jg {\n  border: 2px solid var(--sekai-color);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-normal-button-color__mq3H7.Dialog-module_sekai-light__TlNmy:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-light__TlNmy.Dialog-module_sekai-dialog-normal-button-2-1__FBzF9:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-light__TlNmy.Dialog-module_sekai-dialog-normal-button-2-0__iZkb-:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-light__TlNmy.Dialog-module_sekai-dialog-normal-button-1-0__Ui4jg:hover {\n  background-color: var(--sekai-color-hover);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-normal-button-color__mq3H7.Dialog-module_sekai-dark__M58Kq, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dark__M58Kq.Dialog-module_sekai-dialog-normal-button-2-1__FBzF9, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dark__M58Kq.Dialog-module_sekai-dialog-normal-button-2-0__iZkb-, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dark__M58Kq.Dialog-module_sekai-dialog-normal-button-1-0__Ui4jg {\n  border: 2px solid var(--sekai-color);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-normal-button-color__mq3H7.Dialog-module_sekai-dark__M58Kq:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dark__M58Kq.Dialog-module_sekai-dialog-normal-button-2-1__FBzF9:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dark__M58Kq.Dialog-module_sekai-dialog-normal-button-2-0__iZkb-:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dark__M58Kq.Dialog-module_sekai-dialog-normal-button-1-0__Ui4jg:hover {\n  background-color: var(--sekai-color-hover);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-normal-button-color__mq3H7:disabled.Dialog-module_sekai-light__TlNmy, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-2-1__FBzF9:disabled.Dialog-module_sekai-light__TlNmy, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-2-0__iZkb-:disabled.Dialog-module_sekai-light__TlNmy, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-1-0__Ui4jg:disabled.Dialog-module_sekai-light__TlNmy {\n  color: rgb(155.1, 155.1, 155.1);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-normal-button-color__mq3H7:disabled.Dialog-module_sekai-dark__M58Kq, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-2-1__FBzF9:disabled.Dialog-module_sekai-dark__M58Kq, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-2-0__iZkb-:disabled.Dialog-module_sekai-dark__M58Kq, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-1-0__Ui4jg:disabled.Dialog-module_sekai-dark__M58Kq {\n  color: rgb(100.8, 100.8, 100.8);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-normal-button-color__mq3H7:disabled:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-2-1__FBzF9:disabled:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-2-0__iZkb-:disabled:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-1-0__Ui4jg:disabled:hover {\n  background-color: transparent;\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-1-0__Ui4jg {\n  width: 100%;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-2-0__iZkb- {\n  width: 50%;\n  border-bottom-left-radius: 4px;\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-2-0__iZkb-.Dialog-module_sekai-light__TlNmy {\n  border-right: 1px solid var(--sekai-color);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-2-0__iZkb-.Dialog-module_sekai-dark__M58Kq {\n  border-right: 1px solid var(--sekai-color);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-2-1__FBzF9 {\n  width: 50%;\n  border-bottom-right-radius: 4px;\n  border-left: 1px solid var(--sekai-color);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-2-1__FBzF9.Dialog-module_sekai-light__TlNmy {\n  border-left: 1px solid var(--sekai-color);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-2-1__FBzF9.Dialog-module_sekai-dark__M58Kq {\n  border-left: 1px solid var(--sekai-color);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-strong-button-color__gzYAg.Dialog-module_sekai-light__TlNmy, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-light__TlNmy.Dialog-module_sekai-dialog-strong-button-2-1__WxTyF, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-light__TlNmy.Dialog-module_sekai-dialog-strong-button-2-0__z7H34, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-light__TlNmy.Dialog-module_sekai-dialog-strong-button-1-0__gM-wb {\n  border: 2px solid var(--sekai-color);\n  background-color: var(--sekai-color);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-strong-button-color__gzYAg.Dialog-module_sekai-light__TlNmy:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-light__TlNmy.Dialog-module_sekai-dialog-strong-button-2-1__WxTyF:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-light__TlNmy.Dialog-module_sekai-dialog-strong-button-2-0__z7H34:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-light__TlNmy.Dialog-module_sekai-dialog-strong-button-1-0__gM-wb:hover {\n  background-color: var(--sekai-color-strong-hover);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-strong-button-color__gzYAg.Dialog-module_sekai-dark__M58Kq, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dark__M58Kq.Dialog-module_sekai-dialog-strong-button-2-1__WxTyF, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dark__M58Kq.Dialog-module_sekai-dialog-strong-button-2-0__z7H34, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dark__M58Kq.Dialog-module_sekai-dialog-strong-button-1-0__gM-wb {\n  border: 2px solid var(--sekai-color);\n  background-color: var(--sekai-color);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-strong-button-color__gzYAg.Dialog-module_sekai-dark__M58Kq:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dark__M58Kq.Dialog-module_sekai-dialog-strong-button-2-1__WxTyF:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dark__M58Kq.Dialog-module_sekai-dialog-strong-button-2-0__z7H34:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dark__M58Kq.Dialog-module_sekai-dialog-strong-button-1-0__gM-wb:hover {\n  background-color: var(--sekai-color-strong-hover);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-strong-button-color__gzYAg:disabled.Dialog-module_sekai-light__TlNmy, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-strong-button-2-1__WxTyF:disabled.Dialog-module_sekai-light__TlNmy, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-strong-button-2-0__z7H34:disabled.Dialog-module_sekai-light__TlNmy, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-strong-button-1-0__gM-wb:disabled.Dialog-module_sekai-light__TlNmy {\n  color: rgb(155.1, 155.1, 155.1);\n  background-color: var(--sekai-color-disabled);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-strong-button-color__gzYAg:disabled.Dialog-module_sekai-dark__M58Kq, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-strong-button-2-1__WxTyF:disabled.Dialog-module_sekai-dark__M58Kq, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-strong-button-2-0__z7H34:disabled.Dialog-module_sekai-dark__M58Kq, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-strong-button-1-0__gM-wb:disabled.Dialog-module_sekai-dark__M58Kq {\n  color: rgb(100.8, 100.8, 100.8);\n  background-color: var(--sekai-color-disabled);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-strong-button-1-0__gM-wb {\n  width: 100%;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-strong-button-2-0__z7H34 {\n  width: 50%;\n  border-bottom-left-radius: 4px;\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-strong-button-2-0__z7H34.Dialog-module_sekai-light__TlNmy {\n  border-right: 1px solid var(--sekai-color);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-strong-button-2-0__z7H34.Dialog-module_sekai-dark__M58Kq {\n  border-right: 1px solid var(--sekai-color);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-strong-button-2-1__WxTyF {\n  width: 50%;\n  border-bottom-right-radius: 4px;\n  border-left: 1px solid var(--sekai-color);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-strong-button-2-1__WxTyF.Dialog-module_sekai-light__TlNmy {\n  border-left: 1px solid var(--sekai-color);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-strong-button-2-1__WxTyF.Dialog-module_sekai-dark__M58Kq {\n  border-left: 1px solid var(--sekai-color);\n}";
var styles$i = {"sekai-text-light":"Dialog-module_sekai-text-light__Gfb2W","sekai-text-dark":"Dialog-module_sekai-text-dark__djvrs","sekai-color-light":"Dialog-module_sekai-color-light__fIuyC","sekai-color-dark":"Dialog-module_sekai-color-dark__KrQvz","sekai-overlay":"Dialog-module_sekai-overlay__l5u8e","sekai-overlay-dark":"Dialog-module_sekai-overlay-dark__PTpAS","sekai-overlay-light":"Dialog-module_sekai-overlay-light__PYE-2","sekai-flex-center":"Dialog-module_sekai-flex-center__LyhR2","sekai-absolute-center":"Dialog-module_sekai-absolute-center__9eZ-V","sekai-invisible-scroll":"Dialog-module_sekai-invisible-scroll__yMbwG","sekai-mb-8":"Dialog-module_sekai-mb-8__-vFZy","sekai-mb-16":"Dialog-module_sekai-mb-16__2odxf","sekai-mb-24":"Dialog-module_sekai-mb-24__sVlha","text-xs":"Dialog-module_text-xs__5R1Zk","text-sm":"Dialog-module_text-sm__tH3co","text-base":"Dialog-module_text-base__R0M39","text-lg":"Dialog-module_text-lg__VCmlG","text-xl":"Dialog-module_text-xl__j308t","text-2xl":"Dialog-module_text-2xl__WtIYT","text-base-bold":"Dialog-module_text-base-bold__m2l8Q","text-lg-bold":"Dialog-module_text-lg-bold__GfwOJ","text-xl-bold":"Dialog-module_text-xl-bold__CEDAC","text-2xl-bold":"Dialog-module_text-2xl-bold__7Ow-p","font-bold":"Dialog-module_font-bold__qCPhB","sekai-container":"Dialog-module_sekai-container__ksO7t","sekai-container-wide":"Dialog-module_sekai-container-wide__NphhS","sekai-container-medium":"Dialog-module_sekai-container-medium__XUhgC","sekai-container-narrow":"Dialog-module_sekai-container-narrow__RgWNL","sekai-content-wrap":"Dialog-module_sekai-content-wrap__mWRrt","sekai-title-header":"Dialog-module_sekai-title-header__ATn1B","sekai-title-header-wide":"Dialog-module_sekai-title-header-wide__5Skds","sekai-title-header-medium":"Dialog-module_sekai-title-header-medium__61bst","sekai-title-header-narrow":"Dialog-module_sekai-title-header-narrow__uQfFd","sekai-close-icon":"Dialog-module_sekai-close-icon__CVbZJ","sekai-buttons-area":"Dialog-module_sekai-buttons-area__9vRBF","sekai-normal-button-color":"Dialog-module_sekai-normal-button-color__mq3H7","sekai-light":"Dialog-module_sekai-light__TlNmy","sekai-dialog-normal-button-2-1":"Dialog-module_sekai-dialog-normal-button-2-1__FBzF9","sekai-dialog-normal-button-2-0":"Dialog-module_sekai-dialog-normal-button-2-0__iZkb-","sekai-dialog-normal-button-1-0":"Dialog-module_sekai-dialog-normal-button-1-0__Ui4jg","sekai-dark":"Dialog-module_sekai-dark__M58Kq","sekai-strong-button-color":"Dialog-module_sekai-strong-button-color__gzYAg","sekai-dialog-strong-button-2-1":"Dialog-module_sekai-dialog-strong-button-2-1__WxTyF","sekai-dialog-strong-button-2-0":"Dialog-module_sekai-dialog-strong-button-2-0__z7H34","sekai-dialog-strong-button-1-0":"Dialog-module_sekai-dialog-strong-button-1-0__gM-wb"};
styleInject(css_248z$i);

var _excluded$i = ["sekai", "open", "themeMode", "children", "containerComponent", "size", "onClose", "title", "showCloseIcon", "buttons", "dialogButtons"],
  _excluded2$3 = ["sekai", "themeMode", "size", "onClose", "title", "showCloseIcon"],
  _excluded3$1 = ["sekai", "themeMode", "buttons"];
function ownKeys$j(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$j(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$j(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$j(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Dialog = function Dialog(_ref) {
  var sekai = _ref.sekai,
    open = _ref.open,
    themeMode = _ref.themeMode,
    children = _ref.children,
    containerComponent = _ref.containerComponent,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'medium' : _ref$size,
    onClose = _ref.onClose,
    title = _ref.title,
    _ref$showCloseIcon = _ref.showCloseIcon,
    showCloseIcon = _ref$showCloseIcon === void 0 ? false : _ref$showCloseIcon,
    buttons = _ref.buttons,
    dialogButtons = _ref.dialogButtons,
    rest = _objectWithoutProperties(_ref, _excluded$i);
  var portalContainer = containerComponent || document.body;
  var _useOptionalSekai = useOptionalSekai({
      sekai: sekai,
      mode: themeMode
    }),
    sekaiColor = _useOptionalSekai.sekaiColor,
    modeTheme = _useOptionalSekai.modeTheme,
    isLight = _useOptionalSekai.isLight;
  var sekaiColorHover = convertHexToRgba(sekaiColor, isLight ? 0.1 : 0.3);
  var optionStyle = {
    '--sekai-color': sekaiColor,
    '--sekai-color-hover': sekaiColorHover
  };
  useEffect(function () {
    if (!open) return;
    var handleKeyDownEsc = fireOnEscapeKey(onClose);
    document.addEventListener('keydown', handleKeyDownEsc);
    return function () {
      return document.removeEventListener('keydown', handleKeyDownEsc);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
  var overlayProps = {
    open: open,
    themeMode: themeMode,
    containerComponent: containerComponent
  };
  var headerProps = {
    sekai: sekai,
    themeMode: themeMode,
    size: size,
    onClose: onClose,
    title: title,
    showCloseIcon: showCloseIcon
  };
  var buttonsProps = {
    sekai: sekai,
    themeMode: themeMode,
    buttons: buttons
  };
  return /*#__PURE__*/createPortal(/*#__PURE__*/React.createElement(Backdrop, _extends({}, overlayProps, {
    centered: true
  }), /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    role: "dialog",
    className: clsx(globalStyles["sekai-color-".concat(modeTheme)], styles$i["sekai-container-".concat(size)], rest.className),
    style: _objectSpread$j(_objectSpread$j({}, optionStyle), rest.style),
    "aria-label": title || 'Dialog'
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$i['sekai-content-wrap']
  }, /*#__PURE__*/React.createElement(DialogTitleHeader, headerProps), children), dialogButtons || /*#__PURE__*/React.createElement(DialogButtons, buttonsProps))), portalContainer);
};
var DialogTitleHeader = function DialogTitleHeader(_ref2) {
  var sekai = _ref2.sekai,
    themeMode = _ref2.themeMode,
    size = _ref2.size,
    onClose = _ref2.onClose,
    title = _ref2.title,
    showCloseIcon = _ref2.showCloseIcon,
    rest = _objectWithoutProperties(_ref2, _excluded2$3);
  if (!title && !showCloseIcon) return null;
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: clsx(styles$i["sekai-title-header-".concat(size)], rest.className)
  }), /*#__PURE__*/React.createElement("h2", null, title), showCloseIcon ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: styles$i['sekai-close-icon'],
    onClick: onClose
  }, /*#__PURE__*/React.createElement(ClearSvg, {
    sekai: sekai,
    themeMode: themeMode
  })) : null);
};
var DialogButtons = function DialogButtons(_ref3) {
  var sekai = _ref3.sekai,
    themeMode = _ref3.themeMode,
    buttons = _ref3.buttons,
    rest = _objectWithoutProperties(_ref3, _excluded3$1);
  var _useOptionalSekai2 = useOptionalSekai({
      sekai: sekai,
      mode: themeMode
    }),
    sekaiColor = _useOptionalSekai2.sekaiColor,
    modeTheme = _useOptionalSekai2.modeTheme,
    isLight = _useOptionalSekai2.isLight;
  if (!buttons || !buttons.length) return null;
  var buttonLength = buttons.length;
  var sekaiColorHover = convertHexToRgba(sekaiColor, isLight ? 0.1 : 0.3);
  var sekaiColorStrongHover = convertHexToRgba(sekaiColor, 0.8);
  var sekaiColorStrongDisabled = convertHexToRgba(sekaiColor, 0.5);
  var optionStyle = {
    '--sekai-color': sekaiColor,
    '--sekai-color-hover': sekaiColorHover,
    '--sekai-color-strong-hover': sekaiColorStrongHover,
    '--sekai-color-disabled': sekaiColorStrongDisabled
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: clsx(styles$i['sekai-buttons-area'], rest.className)
  }), _toConsumableArray(buttons.slice(0, 2)).map(function (el, index) {
    return /*#__PURE__*/React.createElement("button", {
      id: "".concat(rest.id ? rest.id : 'dialog-button', "-").concat(index + 1),
      key: el.text,
      type: "button",
      onClick: el.onClick,
      disabled: Boolean(el.disabled),
      "aria-label": el.ariaLabel || el.text,
      className: clsx(globalStyles["sekai-color-".concat(modeTheme)], styles$i["sekai-dialog-".concat(el.type || 'normal', "-button-").concat(buttonLength, "-").concat(index)], styles$i["sekai-".concat(modeTheme)], el.buttonStyle || ''),
      style: optionStyle
    }, el.text);
  }));
};

var RestoreSvg = function RestoreSvg(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    sekai = _ref.sekai,
    themeMode = _ref.themeMode;
  var _useOptionalSekai = useOptionalSekai({
      sekai: sekai,
      mode: themeMode
    }),
    sekaiColor = _useOptionalSekai.sekaiColor,
    isLight = _useOptionalSekai.isLight;
  var color = isLight ? '#212121' : '#e0e0e0';
  return /*#__PURE__*/React.createElement("svg", {
    className: className,
    viewBox: "0 0 100 100",
    width: "100%",
    height: "100%",
    xmlns: "http://www.w3.org/2000/svg"
  }, sekai ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: "11",
    y1: "27",
    x2: "77",
    y2: "27",
    stroke: sekaiColor,
    strokeWidth: "17",
    opacity: "0.7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "76",
    y1: "26",
    x2: "76",
    y2: "87",
    stroke: sekaiColor,
    strokeWidth: "17",
    opacity: "0.7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "77",
    y1: "86",
    x2: "11",
    y2: "86",
    stroke: sekaiColor,
    strokeWidth: "17",
    opacity: "0.7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "87",
    x2: "12",
    y2: "26",
    stroke: sekaiColor,
    strokeWidth: "17",
    opacity: "0.7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "26",
    y1: "10",
    x2: "91",
    y2: "10",
    stroke: sekaiColor,
    strokeWidth: "17",
    opacity: "0.7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "92",
    y1: "10",
    x2: "92",
    y2: "72",
    stroke: sekaiColor,
    strokeWidth: "17",
    opacity: "0.7"
  })) : null, /*#__PURE__*/React.createElement("line", {
    x1: "11",
    y1: "27",
    x2: "77",
    y2: "27",
    stroke: color,
    strokeWidth: "8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "76",
    y1: "26",
    x2: "76",
    y2: "87",
    stroke: color,
    strokeWidth: "8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "77",
    y1: "86",
    x2: "11",
    y2: "86",
    stroke: color,
    strokeWidth: "8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "87",
    x2: "12",
    y2: "26",
    stroke: color,
    strokeWidth: "8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "26",
    y1: "10",
    x2: "91",
    y2: "10",
    stroke: color,
    strokeWidth: "8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "92",
    y1: "10",
    x2: "92",
    y2: "72",
    stroke: color,
    strokeWidth: "8"
  }));
};

var SquareSvg = function SquareSvg(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    sekai = _ref.sekai,
    themeMode = _ref.themeMode;
  var _useOptionalSekai = useOptionalSekai({
      sekai: sekai,
      mode: themeMode
    }),
    sekaiColor = _useOptionalSekai.sekaiColor,
    isLight = _useOptionalSekai.isLight;
  var color = isLight ? '#212121' : '#e0e0e0';
  return /*#__PURE__*/React.createElement("svg", {
    className: className,
    viewBox: "0 0 100 100",
    width: "100%",
    height: "100%",
    xmlns: "http://www.w3.org/2000/svg"
  }, sekai ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: "15",
    y1: "16",
    x2: "85",
    y2: "16",
    stroke: sekaiColor,
    strokeWidth: "17",
    opacity: "0.7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "84",
    y1: "15",
    x2: "84",
    y2: "85",
    stroke: sekaiColor,
    strokeWidth: "17",
    opacity: "0.7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "85",
    y1: "84",
    x2: "15",
    y2: "84",
    stroke: sekaiColor,
    strokeWidth: "17",
    opacity: "0.7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "16",
    y1: "85",
    x2: "16",
    y2: "15",
    stroke: sekaiColor,
    strokeWidth: "17",
    opacity: "0.7"
  })) : null, /*#__PURE__*/React.createElement("line", {
    x1: "15",
    y1: "16",
    x2: "85",
    y2: "16",
    stroke: color,
    strokeWidth: "8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "84",
    y1: "15",
    x2: "84",
    y2: "85",
    stroke: color,
    strokeWidth: "8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "85",
    y1: "84",
    x2: "15",
    y2: "84",
    stroke: color,
    strokeWidth: "8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "16",
    y1: "85",
    x2: "16",
    y2: "15",
    stroke: color,
    strokeWidth: "8"
  }));
};

var css_248z$h = "/* Styles for common color */\n/* Styles for z-index */\n/* Styles for common classes */\n.WindowDialog-module_sekai-text-light__bDOW- {\n  color: #212121;\n}\n\n.WindowDialog-module_sekai-text-dark__NRTnJ {\n  color: #e0e0e0;\n}\n\n.WindowDialog-module_sekai-color-light__Vi0yu {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.WindowDialog-module_sekai-color-dark__-SEYV {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.WindowDialog-module_sekai-overlay__bh-pe, .WindowDialog-module_sekai-overlay-dark__3ERVw, .WindowDialog-module_sekai-overlay-light__Iakad {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.WindowDialog-module_sekai-overlay-light__Iakad {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.WindowDialog-module_sekai-overlay-dark__3ERVw {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.WindowDialog-module_sekai-flex-center__jiQfS {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.WindowDialog-module_sekai-absolute-center__YDDZG {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.WindowDialog-module_sekai-invisible-scroll__xGKTT {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.WindowDialog-module_sekai-invisible-scroll__xGKTT::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.WindowDialog-module_sekai-mb-8__FI2P4 {\n  margin-bottom: 8px;\n}\n\n.WindowDialog-module_sekai-mb-16__P-YTY {\n  margin-bottom: 16px;\n}\n\n.WindowDialog-module_sekai-mb-24__hyGJD {\n  margin-bottom: 24px;\n}\n\n.WindowDialog-module_text-xs__2bFXM {\n  font-size: 12px;\n}\n\n.WindowDialog-module_text-sm__PvS3r {\n  font-size: 14px;\n}\n\n.WindowDialog-module_text-base__Whr8z {\n  font-size: 16px;\n}\n\n.WindowDialog-module_text-lg__o3ha- {\n  font-size: 18px;\n}\n\n.WindowDialog-module_text-xl__-Uv-T {\n  font-size: 20px;\n}\n\n.WindowDialog-module_text-2xl__OMc9E {\n  font-size: 24px;\n}\n\n.WindowDialog-module_text-base-bold__FEWVt {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.WindowDialog-module_text-lg-bold__EZl4w {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.WindowDialog-module_text-xl-bold__SIpPo {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.WindowDialog-module_text-2xl-bold__0MyE4 {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.WindowDialog-module_font-bold__2E6zw {\n  font-weight: bold;\n}\n\n.WindowDialog-module_sekai-dialog-visible__CvDyO {\n  display: block;\n}\n\n.WindowDialog-module_sekai-dialog-hidden__-ijUy {\n  display: none;\n}\n\n.WindowDialog-module_sekai-window-dialog__V1i79, .WindowDialog-module_sekai-window-dialog-dark__k8rf7, .WindowDialog-module_sekai-window-dialog-light__kxjSA {\n  position: fixed;\n  box-sizing: border-box;\n  background-color: var(--sekai-color-bg);\n  outline: 1px solid var(--sekai-color);\n  z-index: 1300;\n}\n\n.WindowDialog-module_sekai-window-dialog-light__kxjSA {\n  border: 2px solid #ffffff;\n}\n\n.WindowDialog-module_sekai-window-dialog-dark__k8rf7 {\n  border: 2px solid #121212;\n}\n\n.WindowDialog-module_sekai-window-dialog-size__f3mm0, .WindowDialog-module_sekai-window-dialog-size-wide__4RQfQ, .WindowDialog-module_sekai-window-dialog-size-medium__P0x3G, .WindowDialog-module_sekai-window-dialog-size-narrow__esz-T {\n  max-width: 90vw;\n}\n\n.WindowDialog-module_sekai-window-dialog-size-narrow__esz-T {\n  width: 250px;\n}\n\n.WindowDialog-module_sekai-window-dialog-size-medium__P0x3G {\n  width: 390px;\n}\n\n.WindowDialog-module_sekai-window-dialog-size-wide__4RQfQ {\n  width: 600px;\n}\n\n.WindowDialog-module_sekai-window-dialog-fullscreen__1aTpL {\n  width: 100%;\n  height: 100%;\n  top: 0 !important;\n  left: 0 !important;\n}\n\n.WindowDialog-module_sekai-window-dialog-container__yF-8s {\n  padding: 16px;\n}\n\n.WindowDialog-module_sekai-window-dialog-header__Zvx7I {\n  display: flex;\n  justify-content: end;\n  gap: 4px;\n  height: 32px;\n  background-color: var(--sekai-color-header);\n}\n.WindowDialog-module_sekai-window-dialog-header__Zvx7I .WindowDialog-module_sekai-window-dialog-button__VagIh {\n  background-color: inherit;\n  border: none;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.WindowDialog-module_sekai-window-dialog-header__Zvx7I .WindowDialog-module_sekai-window-dialog-button__VagIh:hover {\n  background-color: var(--sekai-color);\n}\n.WindowDialog-module_sekai-window-dialog-header__Zvx7I .WindowDialog-module_sekai-window-dialog-button__VagIh:focus-visible {\n  outline: 2px solid var(--sekai-color);\n  outline-offset: -2px;\n}\n.WindowDialog-module_sekai-window-dialog-header__Zvx7I .WindowDialog-module_sekai-window-dialog-button__VagIh .WindowDialog-module_sekai-window-dialog-icon__Ah6yr {\n  width: 18px;\n  height: 18px;\n  background-size: contain;\n  background-repeat: no-repeat;\n}";
var styles$h = {"sekai-text-light":"WindowDialog-module_sekai-text-light__bDOW-","sekai-text-dark":"WindowDialog-module_sekai-text-dark__NRTnJ","sekai-color-light":"WindowDialog-module_sekai-color-light__Vi0yu","sekai-color-dark":"WindowDialog-module_sekai-color-dark__-SEYV","sekai-overlay":"WindowDialog-module_sekai-overlay__bh-pe","sekai-overlay-dark":"WindowDialog-module_sekai-overlay-dark__3ERVw","sekai-overlay-light":"WindowDialog-module_sekai-overlay-light__Iakad","sekai-flex-center":"WindowDialog-module_sekai-flex-center__jiQfS","sekai-absolute-center":"WindowDialog-module_sekai-absolute-center__YDDZG","sekai-invisible-scroll":"WindowDialog-module_sekai-invisible-scroll__xGKTT","sekai-mb-8":"WindowDialog-module_sekai-mb-8__FI2P4","sekai-mb-16":"WindowDialog-module_sekai-mb-16__P-YTY","sekai-mb-24":"WindowDialog-module_sekai-mb-24__hyGJD","text-xs":"WindowDialog-module_text-xs__2bFXM","text-sm":"WindowDialog-module_text-sm__PvS3r","text-base":"WindowDialog-module_text-base__Whr8z","text-lg":"WindowDialog-module_text-lg__o3ha-","text-xl":"WindowDialog-module_text-xl__-Uv-T","text-2xl":"WindowDialog-module_text-2xl__OMc9E","text-base-bold":"WindowDialog-module_text-base-bold__FEWVt","text-lg-bold":"WindowDialog-module_text-lg-bold__EZl4w","text-xl-bold":"WindowDialog-module_text-xl-bold__SIpPo","text-2xl-bold":"WindowDialog-module_text-2xl-bold__0MyE4","font-bold":"WindowDialog-module_font-bold__2E6zw","sekai-dialog-visible":"WindowDialog-module_sekai-dialog-visible__CvDyO","sekai-dialog-hidden":"WindowDialog-module_sekai-dialog-hidden__-ijUy","sekai-window-dialog":"WindowDialog-module_sekai-window-dialog__V1i79","sekai-window-dialog-dark":"WindowDialog-module_sekai-window-dialog-dark__k8rf7","sekai-window-dialog-light":"WindowDialog-module_sekai-window-dialog-light__kxjSA","sekai-window-dialog-size":"WindowDialog-module_sekai-window-dialog-size__f3mm0","sekai-window-dialog-size-wide":"WindowDialog-module_sekai-window-dialog-size-wide__4RQfQ","sekai-window-dialog-size-medium":"WindowDialog-module_sekai-window-dialog-size-medium__P0x3G","sekai-window-dialog-size-narrow":"WindowDialog-module_sekai-window-dialog-size-narrow__esz-T","sekai-window-dialog-fullscreen":"WindowDialog-module_sekai-window-dialog-fullscreen__1aTpL","sekai-window-dialog-container":"WindowDialog-module_sekai-window-dialog-container__yF-8s","sekai-window-dialog-header":"WindowDialog-module_sekai-window-dialog-header__Zvx7I","sekai-window-dialog-button":"WindowDialog-module_sekai-window-dialog-button__VagIh","sekai-window-dialog-icon":"WindowDialog-module_sekai-window-dialog-icon__Ah6yr"};
styleInject(css_248z$h);

var _excluded$h = ["sekai", "themeMode", "open", "children", "containerComponent", "size", "onClose"],
  _excluded2$2 = ["onMouseDown", "isFullscreen", "setIsFullscreen"];
function ownKeys$i(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$i(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$i(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$i(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var WindowDialog = function WindowDialog(_ref) {
  var sekai = _ref.sekai,
    themeMode = _ref.themeMode,
    open = _ref.open,
    children = _ref.children,
    containerComponent = _ref.containerComponent,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'medium' : _ref$size,
    onClose = _ref.onClose,
    rest = _objectWithoutProperties(_ref, _excluded$h);
  var portalContainer = containerComponent || document.body;
  var _useOptionalSekai = useOptionalSekai({
      sekai: sekai,
      mode: themeMode
    }),
    sekaiColor = _useOptionalSekai.sekaiColor,
    modeTheme = _useOptionalSekai.modeTheme,
    isLight = _useOptionalSekai.isLight;
  var displayDialog = open ? 'sekai-dialog-visible' : 'sekai-dialog-hidden';
  var sekaiColorBg = convertHexToRgbaMixWithBlackOrWhite(sekaiColor, 0.3, isLight);
  var sekaiColorHeader = convertHexToRgbaMixWithBlackOrWhite(sekaiColor, 0.5, isLight);
  var windowInitCoordinate = function windowInitCoordinate() {
    return {
      x: '50%',
      y: '50%'
    };
  };
  var _useState = useState(function () {
      return windowInitCoordinate();
    }),
    _useState2 = _slicedToArray(_useState, 2),
    position = _useState2[0],
    setPosition = _useState2[1];
  var modalRef = useRef(null);
  var _useState3 = useState({
      x: 0,
      y: 0
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    dragOffset = _useState4[0],
    setDragOffset = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    dragging = _useState6[0],
    setDragging = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isFullscreen = _useState8[0],
    setIsFullscreen = _useState8[1];
  var onMouseDown = function onMouseDown(e) {
    var _modalRef$current;
    var rect = (_modalRef$current = modalRef.current) === null || _modalRef$current === void 0 ? void 0 : _modalRef$current.getBoundingClientRect();
    if (!rect) return;
    setDragging(true);
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };
  var closeWindow = function closeWindow() {
    onClose();
    setPosition(windowInitCoordinate());
    setIsFullscreen(false);
  };
  var onMouseMove = useCallback(function (e) {
    if (!dragging || isFullscreen) return;
    var portalRect = portalContainer.getBoundingClientRect();
    var x = e.clientX - portalRect.left - dragOffset.x;
    var y = e.clientY - portalRect.top - dragOffset.y;
    setPosition({
      x: "".concat(x, "px"),
      y: "".concat(y, "px")
    });
  }, [dragOffset.x, dragOffset.y, dragging, isFullscreen, portalContainer]);
  var onMouseUp = function onMouseUp() {
    return setDragging(false);
  };
  useEffect(function () {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return function () {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [dragging, onMouseMove]);
  var optionStyle = useMemo(function () {
    return _objectSpread$i(_objectSpread$i({
      '--sekai-color': sekaiColor,
      '--sekai-color-bg': sekaiColorBg,
      '--sekai-color-header': sekaiColorHeader
    }, containerComponent && {
      position: 'absolute'
    }), {}, {
      'left': position.x,
      'top': position.y,
      'transform': position.x === '50%' ? 'translate(-50%, -50%)' : 'none'
    });
  }, [containerComponent, position.x, position.y, sekaiColor, sekaiColorBg, sekaiColorHeader]);
  return /*#__PURE__*/createPortal(/*#__PURE__*/React.createElement("div", _extends({}, rest, {
    ref: modalRef,
    role: "dialog",
    className: clsx(styles$h["sekai-window-dialog-".concat(modeTheme)], _defineProperty(_defineProperty({}, styles$h["sekai-window-dialog-size-".concat(size)], !isFullscreen), styles$h['sekai-window-dialog-fullscreen'], isFullscreen), styles$h[displayDialog], rest.className),
    style: _objectSpread$i(_objectSpread$i({}, optionStyle), rest.style)
  }), /*#__PURE__*/React.createElement(WindowHeader, {
    sekai: sekai,
    themeMode: themeMode,
    onClose: closeWindow,
    onMouseDown: onMouseDown,
    isFullscreen: isFullscreen,
    setIsFullscreen: setIsFullscreen
  }), /*#__PURE__*/React.createElement("div", {
    className: clsx(styles$h['sekai-window-dialog-container'])
  }, children)), portalContainer);
};
var WindowHeader = function WindowHeader(_ref2) {
  var onMouseDown = _ref2.onMouseDown,
    isFullscreen = _ref2.isFullscreen,
    setIsFullscreen = _ref2.setIsFullscreen,
    rest = _objectWithoutProperties(_ref2, _excluded2$2);
  var onClick = function onClick() {
    setIsFullscreen(!isFullscreen);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "button",
    tabIndex: 0,
    className: styles$h['sekai-window-dialog-header'],
    onMouseDown: onMouseDown
  }, /*#__PURE__*/React.createElement("button", {
    className: styles$h['sekai-window-dialog-button'],
    onClick: onClick
  }, isFullscreen ? /*#__PURE__*/React.createElement(RestoreSvg, _extends({}, rest, {
    className: clsx(styles$h['sekai-window-dialog-icon'])
  })) : /*#__PURE__*/React.createElement(SquareSvg, _extends({}, rest, {
    className: clsx(styles$h['sekai-window-dialog-icon'])
  }))), /*#__PURE__*/React.createElement("button", {
    className: styles$h['sekai-window-dialog-button'],
    onClick: rest.onClose
  }, /*#__PURE__*/React.createElement(ClearSvg, _extends({}, rest, {
    className: clsx(styles$h['sekai-window-dialog-icon'])
  }))));
};

var YELLOW$1 = '#dbc884';
var GOLD = '#bba58e';
var DARK_YELLOW = '#5d5041';
var XoMikuSvg = function XoMikuSvg(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'type1' : _ref$type;
  var isType1 = type === 'type1';
  return /*#__PURE__*/React.createElement("svg", {
    className: className,
    viewBox: "0 0 100 100",
    width: "100%",
    height: "100%",
    xmlns: "http://www.w3.org/2000/svg"
  }, isType1 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ThreeDimensionalParts$1, null), /*#__PURE__*/React.createElement("line", {
    x1: "85",
    y1: "15",
    x2: "15",
    y2: "85",
    stroke: YELLOW$1,
    strokeWidth: "25"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "22",
    y1: "22",
    x2: "87",
    y2: "85",
    stroke: YELLOW$1,
    strokeWidth: "30"
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(LowerLeftLine, null), /*#__PURE__*/React.createElement(LowerRightLine, null)));
};
var ThreeDimensionalParts$1 = function ThreeDimensionalParts() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("g", {
    transform: "translate(2,2)"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "85",
    y1: "15",
    x2: "15",
    y2: "85",
    stroke: GOLD,
    strokeWidth: "27"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(3,3)"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "20",
    y1: "20",
    x2: "87",
    y2: "85",
    stroke: GOLD,
    strokeWidth: "30"
  })));
};
var LowerRightLine = function LowerRightLine() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: "15",
    y1: "15",
    x2: "85",
    y2: "85",
    stroke: DARK_YELLOW,
    strokeWidth: "30"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "16",
    y1: "16",
    x2: "84",
    y2: "84",
    stroke: YELLOW$1,
    strokeWidth: "28"
  }));
};
var LowerLeftLine = function LowerLeftLine() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: "85",
    y1: "15",
    x2: "15",
    y2: "85",
    stroke: DARK_YELLOW,
    strokeWidth: "30"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "84",
    y1: "16",
    x2: "16",
    y2: "84",
    stroke: YELLOW$1,
    strokeWidth: "28"
  }));
};

var css_248z$g = "/* Styles for common color */\n/* Styles for z-index */\n/* Styles for common classes */\n.XoMikuDialog-module_sekai-text-light__emRFN {\n  color: #212121;\n}\n\n.XoMikuDialog-module_sekai-text-dark__FERt4 {\n  color: #e0e0e0;\n}\n\n.XoMikuDialog-module_sekai-color-light__-AXg1 {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.XoMikuDialog-module_sekai-color-dark__UNXDy {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.XoMikuDialog-module_sekai-overlay__pwArn, .XoMikuDialog-module_sekai-overlay-dark__LJxz-, .XoMikuDialog-module_sekai-overlay-light__jfBTr {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.XoMikuDialog-module_sekai-overlay-light__jfBTr {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.XoMikuDialog-module_sekai-overlay-dark__LJxz- {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.XoMikuDialog-module_sekai-flex-center__3uIaw {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.XoMikuDialog-module_sekai-absolute-center__lQvfv {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.XoMikuDialog-module_sekai-invisible-scroll__qfezN {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.XoMikuDialog-module_sekai-invisible-scroll__qfezN::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.XoMikuDialog-module_sekai-mb-8__iMTYH {\n  margin-bottom: 8px;\n}\n\n.XoMikuDialog-module_sekai-mb-16__azJcI {\n  margin-bottom: 16px;\n}\n\n.XoMikuDialog-module_sekai-mb-24__XhWuL {\n  margin-bottom: 24px;\n}\n\n.XoMikuDialog-module_text-xs__fLbRX {\n  font-size: 12px;\n}\n\n.XoMikuDialog-module_text-sm__Gqbcq {\n  font-size: 14px;\n}\n\n.XoMikuDialog-module_text-base__IVbCy {\n  font-size: 16px;\n}\n\n.XoMikuDialog-module_text-lg__fB6L1 {\n  font-size: 18px;\n}\n\n.XoMikuDialog-module_text-xl__I8Spq {\n  font-size: 20px;\n}\n\n.XoMikuDialog-module_text-2xl__p3XNf {\n  font-size: 24px;\n}\n\n.XoMikuDialog-module_text-base-bold__hPya5 {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.XoMikuDialog-module_text-lg-bold__ZO-Ud {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.XoMikuDialog-module_text-xl-bold__poSip {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.XoMikuDialog-module_text-2xl-bold__mHzxf {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.XoMikuDialog-module_font-bold__LnL9P {\n  font-weight: bold;\n}\n\n.XoMikuDialog-module_sekai-dialog-visible__SBcjX {\n  display: block;\n}\n\n.XoMikuDialog-module_sekai-dialog-hidden__mENqt {\n  display: none;\n}\n\n.XoMikuDialog-module_sekai-container__9ji3B, .XoMikuDialog-module_sekai-container-wide__CMP9F, .XoMikuDialog-module_sekai-container-medium__VjZkf, .XoMikuDialog-module_sekai-container-narrow__pIyv5 {\n  position: relative;\n  box-sizing: border-box;\n  max-width: 90vw;\n  color: #212121;\n  border: 3.9px solid #9ccdca;\n  border-radius: 4px;\n  background: linear-gradient(160deg, #f1f1f1 40%, #c4e6ed 100%);\n  z-index: 1300;\n}\n\n.XoMikuDialog-module_sekai-container-narrow__pIyv5 {\n  width: 250px;\n}\n\n.XoMikuDialog-module_sekai-container-medium__VjZkf {\n  width: 390px;\n}\n\n.XoMikuDialog-module_sekai-container-wide__CMP9F {\n  width: 600px;\n}\n\n.XoMikuDialog-module_sekai-content-wrap__hUZOz {\n  padding: 16px;\n}\n\n/** Button styles */\n.XoMikuDialog-module_sekai-xomiku-button__q32HB {\n  margin-top: 16px;\n}\n.XoMikuDialog-module_sekai-xomiku-button__q32HB button {\n  border-radius: 0 !important;\n  border-color: #9ccdca !important;\n}\n\n.XoMikuDialog-module_sekai-xomiku-normal-button__jJpY1:hover {\n  background-color: rgb(191.8, 221, 232.2) !important;\n}\n.XoMikuDialog-module_sekai-xomiku-normal-button__jJpY1:disabled {\n  color: rgb(155.1, 155.1, 155.1) !important;\n}\n.XoMikuDialog-module_sekai-xomiku-normal-button__jJpY1:disabled:hover {\n  background-color: transparent !important;\n}\n\n.XoMikuDialog-module_sekai-xomiku-strong-button__42023 {\n  font-weight: bold;\n  background-color: #9ccdca !important;\n}\n.XoMikuDialog-module_sekai-xomiku-strong-button__42023:hover {\n  background-color: rgb(167.2, 211, 227.8) !important;\n}\n.XoMikuDialog-module_sekai-xomiku-strong-button__42023:disabled {\n  color: rgb(155.1, 155.1, 155.1) !important;\n  background-color: rgb(164.5, 208.6, 205.9) !important;\n}\n\n/** xomikuSvg type1 styles */\n.XoMikuDialog-module_sekai-xomiku-svg-1-narrow__8AJJd {\n  position: absolute;\n  right: 8%;\n  top: -24px;\n  width: 40px;\n  height: 40px;\n}\n\n.XoMikuDialog-module_sekai-xomiku-svg-1-medium__K0shx {\n  position: absolute;\n  right: 5%;\n  top: -34px;\n  width: 50px;\n  height: 50px;\n}\n\n.XoMikuDialog-module_sekai-xomiku-svg-1-wide__i6cwu {\n  position: absolute;\n  right: 3%;\n  top: -44px;\n  width: 60px;\n  height: 60px;\n}\n\n.XoMikuDialog-module_sekai-xomiku-svg-2-narrow__5yohH {\n  position: absolute;\n  right: -12px;\n  top: 10%;\n  width: 25px;\n  height: 25px;\n}\n\n.XoMikuDialog-module_sekai-xomiku-svg-2-medium__XwR5O {\n  position: absolute;\n  right: -19px;\n  top: 10%;\n  width: 35px;\n  height: 35px;\n}\n\n.XoMikuDialog-module_sekai-xomiku-svg-2-wide__--m3M {\n  position: absolute;\n  right: -20px;\n  top: 10%;\n  width: 36px;\n  height: 36px;\n}\n\n/** xomikuSvg type2 styles */\n.XoMikuDialog-module_sekai-xomiku-svg-3-narrow__cLhtI {\n  position: absolute;\n  left: -12px;\n  bottom: 20px;\n  width: 25px;\n  height: 25px;\n}\n\n.XoMikuDialog-module_sekai-xomiku-svg-3-medium__Vt3l0 {\n  position: absolute;\n  left: -17px;\n  bottom: 25px;\n  width: 30px;\n  height: 30px;\n}\n\n.XoMikuDialog-module_sekai-xomiku-svg-3-wide__Qz9jG {\n  position: absolute;\n  left: -18px;\n  bottom: 27px;\n  width: 33px;\n  height: 33px;\n}\n\n.XoMikuDialog-module_sekai-xomiku-svg-4-narrow__9tAGw {\n  position: absolute;\n  left: -19px;\n  bottom: -19px;\n  width: 35px;\n  height: 35px;\n}\n\n.XoMikuDialog-module_sekai-xomiku-svg-4-medium__IzGBE {\n  position: absolute;\n  left: -24px;\n  bottom: -24px;\n  width: 40px;\n  height: 40px;\n}\n\n.XoMikuDialog-module_sekai-xomiku-svg-4-wide__3cAzo {\n  position: absolute;\n  left: -24px;\n  bottom: -30px;\n  width: 45px;\n  height: 45px;\n}\n\n.XoMikuDialog-module_sekai-xomiku-svg-5-narrow__7SH3a {\n  position: absolute;\n  left: 25%;\n  bottom: -16px;\n  width: 30px;\n  height: 30px;\n}\n\n.XoMikuDialog-module_sekai-xomiku-svg-5-medium__lKBJk {\n  position: absolute;\n  left: 25%;\n  bottom: -19px;\n  width: 35px;\n  height: 35px;\n}\n\n.XoMikuDialog-module_sekai-xomiku-svg-5-wide__6xaxE {\n  position: absolute;\n  left: 25%;\n  bottom: -25px;\n  width: 40px;\n  height: 40px;\n}";
var styles$g = {"sekai-text-light":"XoMikuDialog-module_sekai-text-light__emRFN","sekai-text-dark":"XoMikuDialog-module_sekai-text-dark__FERt4","sekai-color-light":"XoMikuDialog-module_sekai-color-light__-AXg1","sekai-color-dark":"XoMikuDialog-module_sekai-color-dark__UNXDy","sekai-overlay":"XoMikuDialog-module_sekai-overlay__pwArn","sekai-overlay-dark":"XoMikuDialog-module_sekai-overlay-dark__LJxz-","sekai-overlay-light":"XoMikuDialog-module_sekai-overlay-light__jfBTr","sekai-flex-center":"XoMikuDialog-module_sekai-flex-center__3uIaw","sekai-absolute-center":"XoMikuDialog-module_sekai-absolute-center__lQvfv","sekai-invisible-scroll":"XoMikuDialog-module_sekai-invisible-scroll__qfezN","sekai-mb-8":"XoMikuDialog-module_sekai-mb-8__iMTYH","sekai-mb-16":"XoMikuDialog-module_sekai-mb-16__azJcI","sekai-mb-24":"XoMikuDialog-module_sekai-mb-24__XhWuL","text-xs":"XoMikuDialog-module_text-xs__fLbRX","text-sm":"XoMikuDialog-module_text-sm__Gqbcq","text-base":"XoMikuDialog-module_text-base__IVbCy","text-lg":"XoMikuDialog-module_text-lg__fB6L1","text-xl":"XoMikuDialog-module_text-xl__I8Spq","text-2xl":"XoMikuDialog-module_text-2xl__p3XNf","text-base-bold":"XoMikuDialog-module_text-base-bold__hPya5","text-lg-bold":"XoMikuDialog-module_text-lg-bold__ZO-Ud","text-xl-bold":"XoMikuDialog-module_text-xl-bold__poSip","text-2xl-bold":"XoMikuDialog-module_text-2xl-bold__mHzxf","font-bold":"XoMikuDialog-module_font-bold__LnL9P","sekai-dialog-visible":"XoMikuDialog-module_sekai-dialog-visible__SBcjX","sekai-dialog-hidden":"XoMikuDialog-module_sekai-dialog-hidden__mENqt","sekai-container":"XoMikuDialog-module_sekai-container__9ji3B","sekai-container-wide":"XoMikuDialog-module_sekai-container-wide__CMP9F","sekai-container-medium":"XoMikuDialog-module_sekai-container-medium__VjZkf","sekai-container-narrow":"XoMikuDialog-module_sekai-container-narrow__pIyv5","sekai-content-wrap":"XoMikuDialog-module_sekai-content-wrap__hUZOz","sekai-xomiku-button":"XoMikuDialog-module_sekai-xomiku-button__q32HB","sekai-xomiku-normal-button":"XoMikuDialog-module_sekai-xomiku-normal-button__jJpY1","sekai-xomiku-strong-button":"XoMikuDialog-module_sekai-xomiku-strong-button__42023","sekai-xomiku-svg-1-narrow":"XoMikuDialog-module_sekai-xomiku-svg-1-narrow__8AJJd","sekai-xomiku-svg-1-medium":"XoMikuDialog-module_sekai-xomiku-svg-1-medium__K0shx","sekai-xomiku-svg-1-wide":"XoMikuDialog-module_sekai-xomiku-svg-1-wide__i6cwu","sekai-xomiku-svg-2-narrow":"XoMikuDialog-module_sekai-xomiku-svg-2-narrow__5yohH","sekai-xomiku-svg-2-medium":"XoMikuDialog-module_sekai-xomiku-svg-2-medium__XwR5O","sekai-xomiku-svg-2-wide":"XoMikuDialog-module_sekai-xomiku-svg-2-wide__--m3M","sekai-xomiku-svg-3-narrow":"XoMikuDialog-module_sekai-xomiku-svg-3-narrow__cLhtI","sekai-xomiku-svg-3-medium":"XoMikuDialog-module_sekai-xomiku-svg-3-medium__Vt3l0","sekai-xomiku-svg-3-wide":"XoMikuDialog-module_sekai-xomiku-svg-3-wide__Qz9jG","sekai-xomiku-svg-4-narrow":"XoMikuDialog-module_sekai-xomiku-svg-4-narrow__9tAGw","sekai-xomiku-svg-4-medium":"XoMikuDialog-module_sekai-xomiku-svg-4-medium__IzGBE","sekai-xomiku-svg-4-wide":"XoMikuDialog-module_sekai-xomiku-svg-4-wide__3cAzo","sekai-xomiku-svg-5-narrow":"XoMikuDialog-module_sekai-xomiku-svg-5-narrow__7SH3a","sekai-xomiku-svg-5-medium":"XoMikuDialog-module_sekai-xomiku-svg-5-medium__lKBJk","sekai-xomiku-svg-5-wide":"XoMikuDialog-module_sekai-xomiku-svg-5-wide__6xaxE"};
styleInject(css_248z$g);

var _excluded$g = ["open", "themeMode", "children", "size", "containerComponent", "onClose", "title", "buttons"];
function ownKeys$h(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$h(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$h(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$h(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var XoMikuDialog = function XoMikuDialog(_ref) {
  var open = _ref.open,
    themeMode = _ref.themeMode,
    children = _ref.children,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'medium' : _ref$size,
    containerComponent = _ref.containerComponent,
    onClose = _ref.onClose,
    title = _ref.title,
    buttons = _ref.buttons,
    rest = _objectWithoutProperties(_ref, _excluded$g);
  var portalContainer = containerComponent || document.body;
  useEffect(function () {
    if (!open) return;
    var handleKeyDownEsc = fireOnEscapeKey(onClose);
    document.addEventListener('keydown', handleKeyDownEsc);
    return function () {
      return document.removeEventListener('keydown', handleKeyDownEsc);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
  var headerProps = {
    size: size,
    onClose: onClose,
    title: title
  };
  var xoButtonProps = useMemo(function () {
    return buttons === null || buttons === void 0 ? void 0 : buttons.map(function (button) {
      var type = button.type ? button.type : 'normal';
      return _objectSpread$h(_objectSpread$h({}, button), {}, {
        buttonStyle: clsx(styles$g["sekai-xomiku-".concat(type, "-button")])
      });
    });
  }, [buttons]);
  var overlayProps = {
    id: 'xomiku-dialog-overlay',
    open: open,
    themeMode: themeMode,
    containerComponent: containerComponent,
    centered: true
  };
  var buttonsProps = {
    themeMode: LIGHT_MODE,
    buttons: xoButtonProps
  };
  return /*#__PURE__*/createPortal(/*#__PURE__*/React.createElement(Backdrop, overlayProps, /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    role: "dialog",
    className: clsx(styles$g["sekai-container-".concat(size)], rest.className),
    "aria-label": title || 'Dialog'
  }), /*#__PURE__*/React.createElement(XoMikuSvg, {
    className: styles$g["sekai-xomiku-svg-1-".concat(size)]
  }), /*#__PURE__*/React.createElement(XoMikuSvg, {
    className: styles$g["sekai-xomiku-svg-2-".concat(size)]
  }), /*#__PURE__*/React.createElement(XoMikuSvg, {
    className: styles$g["sekai-xomiku-svg-3-".concat(size)],
    type: 'type2'
  }), /*#__PURE__*/React.createElement(XoMikuSvg, {
    className: styles$g["sekai-xomiku-svg-4-".concat(size)],
    type: 'type2'
  }), /*#__PURE__*/React.createElement(XoMikuSvg, {
    className: styles$g["sekai-xomiku-svg-5-".concat(size)],
    type: 'type2'
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$g['sekai-content-wrap']
  }, /*#__PURE__*/React.createElement(DialogTitleHeader, _extends({
    id: "xo-miku-dialog-header"
  }, headerProps)), children, /*#__PURE__*/React.createElement(DialogButtons, _extends({
    id: "xo-miku-dialog-buttons",
    className: styles$g['sekai-xomiku-button']
  }, buttonsProps))))), portalContainer);
};

var BLACK = '#3f3f3f';
var RED = '#cc3f73';
var XxMikuSvg = function XxMikuSvg(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'type1' : _ref$type;
  var isType1 = type === 'type1';
  return /*#__PURE__*/React.createElement("svg", {
    className: className,
    viewBox: "0 0 100 100",
    width: "100%",
    height: "100%",
    xmlns: "http://www.w3.org/2000/svg"
  }, isType1 ? /*#__PURE__*/React.createElement(ThreeDimensionalParts, null) : null, /*#__PURE__*/React.createElement("line", {
    x1: "85",
    y1: "15",
    x2: "15",
    y2: "85",
    stroke: BLACK,
    strokeWidth: isType1 ? 25 : 30
  }), isType1 ? /*#__PURE__*/React.createElement("line", {
    x1: "22",
    y1: "22",
    x2: "87",
    y2: "85",
    stroke: BLACK,
    strokeWidth: "30"
  }) : /*#__PURE__*/React.createElement("line", {
    x1: "15",
    y1: "15",
    x2: "85",
    y2: "85",
    stroke: RED,
    strokeWidth: "30"
  }));
};
var ThreeDimensionalParts = function ThreeDimensionalParts() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("g", {
    transform: "translate(2,2)"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "85",
    y1: "15",
    x2: "15",
    y2: "85",
    stroke: RED,
    strokeWidth: "27"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(3,3)"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "20",
    y1: "20",
    x2: "87",
    y2: "85",
    stroke: RED,
    strokeWidth: "30"
  })));
};

var css_248z$f = "/* Styles for common color */\n/* Styles for z-index */\n/* Styles for common classes */\n.XxMikuDialog-module_sekai-text-light__haMCt {\n  color: #212121;\n}\n\n.XxMikuDialog-module_sekai-text-dark__-3k4i {\n  color: #e0e0e0;\n}\n\n.XxMikuDialog-module_sekai-color-light__AXfs1 {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.XxMikuDialog-module_sekai-color-dark__ULGir {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.XxMikuDialog-module_sekai-overlay__zJE3U, .XxMikuDialog-module_sekai-overlay-dark__Zmpw9, .XxMikuDialog-module_sekai-overlay-light__MFH-f {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.XxMikuDialog-module_sekai-overlay-light__MFH-f {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.XxMikuDialog-module_sekai-overlay-dark__Zmpw9 {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.XxMikuDialog-module_sekai-flex-center__asoy6 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.XxMikuDialog-module_sekai-absolute-center__jJ2Vs {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.XxMikuDialog-module_sekai-invisible-scroll__dI4JU {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.XxMikuDialog-module_sekai-invisible-scroll__dI4JU::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.XxMikuDialog-module_sekai-mb-8__3yT7u {\n  margin-bottom: 8px;\n}\n\n.XxMikuDialog-module_sekai-mb-16__YvY6f {\n  margin-bottom: 16px;\n}\n\n.XxMikuDialog-module_sekai-mb-24__GVs-K {\n  margin-bottom: 24px;\n}\n\n.XxMikuDialog-module_text-xs__e8saD {\n  font-size: 12px;\n}\n\n.XxMikuDialog-module_text-sm__ilsee {\n  font-size: 14px;\n}\n\n.XxMikuDialog-module_text-base__-WL5f {\n  font-size: 16px;\n}\n\n.XxMikuDialog-module_text-lg__7-tWO {\n  font-size: 18px;\n}\n\n.XxMikuDialog-module_text-xl__BOt71 {\n  font-size: 20px;\n}\n\n.XxMikuDialog-module_text-2xl__AeNgC {\n  font-size: 24px;\n}\n\n.XxMikuDialog-module_text-base-bold__W95Fa {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.XxMikuDialog-module_text-lg-bold__BQM6X {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.XxMikuDialog-module_text-xl-bold__YhFAv {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.XxMikuDialog-module_text-2xl-bold__tY4dA {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.XxMikuDialog-module_font-bold__QuRvM {\n  font-weight: bold;\n}\n\n.XxMikuDialog-module_sekai-dialog-visible__2oe7d {\n  display: block;\n}\n\n.XxMikuDialog-module_sekai-dialog-hidden__EM-mO {\n  display: none;\n}\n\n.XxMikuDialog-module_sekai-container__6wLSy, .XxMikuDialog-module_sekai-container-wide__YNFbw, .XxMikuDialog-module_sekai-container-medium__qGYm-, .XxMikuDialog-module_sekai-container-narrow__J3ojJ {\n  position: relative;\n  box-sizing: border-box;\n  max-width: 90vw;\n  border: 3.9px solid #9ccdd3;\n  border-radius: 4px;\n  background-color: #797979;\n  z-index: 1300;\n}\n.XxMikuDialog-module_sekai-container__6wLSy.XxMikuDialog-module_sekai-light__fPaiT, .XxMikuDialog-module_sekai-light__fPaiT.XxMikuDialog-module_sekai-container-wide__YNFbw, .XxMikuDialog-module_sekai-light__fPaiT.XxMikuDialog-module_sekai-container-medium__qGYm-, .XxMikuDialog-module_sekai-light__fPaiT.XxMikuDialog-module_sekai-container-narrow__J3ojJ {\n  color: #212121;\n}\n.XxMikuDialog-module_sekai-container__6wLSy.XxMikuDialog-module_sekai-dark__-qzNa, .XxMikuDialog-module_sekai-dark__-qzNa.XxMikuDialog-module_sekai-container-wide__YNFbw, .XxMikuDialog-module_sekai-dark__-qzNa.XxMikuDialog-module_sekai-container-medium__qGYm-, .XxMikuDialog-module_sekai-dark__-qzNa.XxMikuDialog-module_sekai-container-narrow__J3ojJ {\n  color: #e0e0e0;\n}\n\n.XxMikuDialog-module_sekai-container-narrow__J3ojJ {\n  width: 250px;\n}\n\n.XxMikuDialog-module_sekai-container-medium__qGYm- {\n  width: 390px;\n}\n\n.XxMikuDialog-module_sekai-container-wide__YNFbw {\n  width: 600px;\n}\n\n.XxMikuDialog-module_sekai-content-wrap__kR8d6 {\n  padding: 16px;\n}\n\n/** Button styles */\n.XxMikuDialog-module_sekai-xxmiku-button__1trw- {\n  margin-top: 16px;\n}\n.XxMikuDialog-module_sekai-xxmiku-button__1trw- button {\n  border-radius: 0 !important;\n  border-color: #9ccdd3 !important;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-normal-button__ArRPe:hover {\n  background-color: rgb(128, 137.8, 139) !important;\n}\n.XxMikuDialog-module_sekai-xxmiku-normal-button__ArRPe:disabled.XxMikuDialog-module_sekai-light__fPaiT {\n  color: rgb(103.4, 103.4, 103.4) !important;\n}\n.XxMikuDialog-module_sekai-xxmiku-normal-button__ArRPe:disabled.XxMikuDialog-module_sekai-dark__-qzNa {\n  color: rgb(141.6, 141.6, 141.6) !important;\n}\n.XxMikuDialog-module_sekai-xxmiku-normal-button__ArRPe:disabled:hover {\n  background-color: transparent !important;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-strong-button__uHTqB {\n  font-weight: bold;\n  background-color: #9ccdd3 !important;\n}\n.XxMikuDialog-module_sekai-xxmiku-strong-button__uHTqB:hover {\n  background-color: rgb(147.25, 184, 188.5) !important;\n}\n.XxMikuDialog-module_sekai-xxmiku-strong-button__uHTqB:disabled.XxMikuDialog-module_sekai-light__fPaiT {\n  color: rgb(119.58, 119.58, 119.58) !important;\n  background-color: rgb(145.5, 179.8, 184) !important;\n}\n.XxMikuDialog-module_sekai-xxmiku-strong-button__uHTqB:disabled.XxMikuDialog-module_sekai-dark__-qzNa {\n  color: rgb(198.25, 198.25, 198.25) !important;\n  background-color: rgb(145.5, 179.8, 184) !important;\n}\n\n/** XxMikuSvg type1 styles */\n.XxMikuDialog-module_sekai-xxmiku-svg-1-narrow__loqQ- {\n  position: absolute;\n  right: 8%;\n  top: -24px;\n  width: 40px;\n  height: 40px;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-svg-1-medium__pzorJ {\n  position: absolute;\n  right: 5%;\n  top: -34px;\n  width: 50px;\n  height: 50px;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-svg-1-wide__2N-6l {\n  position: absolute;\n  right: 3%;\n  top: -44px;\n  width: 60px;\n  height: 60px;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-svg-2-narrow__3HHf- {\n  position: absolute;\n  right: -12px;\n  top: 10%;\n  width: 25px;\n  height: 25px;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-svg-2-medium__9o0Zw {\n  position: absolute;\n  right: -19px;\n  top: 10%;\n  width: 35px;\n  height: 35px;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-svg-2-wide__qeQUa {\n  position: absolute;\n  right: -20px;\n  top: 10%;\n  width: 36px;\n  height: 36px;\n}\n\n/** XxMikuSvg type2 styles */\n.XxMikuDialog-module_sekai-xxmiku-svg-3-narrow__Q-ch7 {\n  position: absolute;\n  left: -12px;\n  bottom: 20px;\n  width: 25px;\n  height: 25px;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-svg-3-medium__QnTfq {\n  position: absolute;\n  left: -17px;\n  bottom: 25px;\n  width: 30px;\n  height: 30px;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-svg-3-wide__mMg4X {\n  position: absolute;\n  left: -18px;\n  bottom: 27px;\n  width: 33px;\n  height: 33px;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-svg-4-narrow__8-UN- {\n  position: absolute;\n  left: -19px;\n  bottom: -19px;\n  width: 35px;\n  height: 35px;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-svg-4-medium__hAeL3 {\n  position: absolute;\n  left: -24px;\n  bottom: -24px;\n  width: 40px;\n  height: 40px;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-svg-4-wide__Kpdo- {\n  position: absolute;\n  left: -24px;\n  bottom: -30px;\n  width: 45px;\n  height: 45px;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-svg-5-narrow__BQjgx {\n  position: absolute;\n  left: 25%;\n  bottom: -16px;\n  width: 30px;\n  height: 30px;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-svg-5-medium__nkuQm {\n  position: absolute;\n  left: 25%;\n  bottom: -19px;\n  width: 35px;\n  height: 35px;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-svg-5-wide__NaAs4 {\n  position: absolute;\n  left: 25%;\n  bottom: -25px;\n  width: 40px;\n  height: 40px;\n}";
var styles$f = {"sekai-text-light":"XxMikuDialog-module_sekai-text-light__haMCt","sekai-text-dark":"XxMikuDialog-module_sekai-text-dark__-3k4i","sekai-color-light":"XxMikuDialog-module_sekai-color-light__AXfs1","sekai-color-dark":"XxMikuDialog-module_sekai-color-dark__ULGir","sekai-overlay":"XxMikuDialog-module_sekai-overlay__zJE3U","sekai-overlay-dark":"XxMikuDialog-module_sekai-overlay-dark__Zmpw9","sekai-overlay-light":"XxMikuDialog-module_sekai-overlay-light__MFH-f","sekai-flex-center":"XxMikuDialog-module_sekai-flex-center__asoy6","sekai-absolute-center":"XxMikuDialog-module_sekai-absolute-center__jJ2Vs","sekai-invisible-scroll":"XxMikuDialog-module_sekai-invisible-scroll__dI4JU","sekai-mb-8":"XxMikuDialog-module_sekai-mb-8__3yT7u","sekai-mb-16":"XxMikuDialog-module_sekai-mb-16__YvY6f","sekai-mb-24":"XxMikuDialog-module_sekai-mb-24__GVs-K","text-xs":"XxMikuDialog-module_text-xs__e8saD","text-sm":"XxMikuDialog-module_text-sm__ilsee","text-base":"XxMikuDialog-module_text-base__-WL5f","text-lg":"XxMikuDialog-module_text-lg__7-tWO","text-xl":"XxMikuDialog-module_text-xl__BOt71","text-2xl":"XxMikuDialog-module_text-2xl__AeNgC","text-base-bold":"XxMikuDialog-module_text-base-bold__W95Fa","text-lg-bold":"XxMikuDialog-module_text-lg-bold__BQM6X","text-xl-bold":"XxMikuDialog-module_text-xl-bold__YhFAv","text-2xl-bold":"XxMikuDialog-module_text-2xl-bold__tY4dA","font-bold":"XxMikuDialog-module_font-bold__QuRvM","sekai-dialog-visible":"XxMikuDialog-module_sekai-dialog-visible__2oe7d","sekai-dialog-hidden":"XxMikuDialog-module_sekai-dialog-hidden__EM-mO","sekai-container":"XxMikuDialog-module_sekai-container__6wLSy","sekai-container-wide":"XxMikuDialog-module_sekai-container-wide__YNFbw","sekai-container-medium":"XxMikuDialog-module_sekai-container-medium__qGYm-","sekai-container-narrow":"XxMikuDialog-module_sekai-container-narrow__J3ojJ","sekai-light":"XxMikuDialog-module_sekai-light__fPaiT","sekai-dark":"XxMikuDialog-module_sekai-dark__-qzNa","sekai-content-wrap":"XxMikuDialog-module_sekai-content-wrap__kR8d6","sekai-xxmiku-button":"XxMikuDialog-module_sekai-xxmiku-button__1trw-","sekai-xxmiku-normal-button":"XxMikuDialog-module_sekai-xxmiku-normal-button__ArRPe","sekai-xxmiku-strong-button":"XxMikuDialog-module_sekai-xxmiku-strong-button__uHTqB","sekai-xxmiku-svg-1-narrow":"XxMikuDialog-module_sekai-xxmiku-svg-1-narrow__loqQ-","sekai-xxmiku-svg-1-medium":"XxMikuDialog-module_sekai-xxmiku-svg-1-medium__pzorJ","sekai-xxmiku-svg-1-wide":"XxMikuDialog-module_sekai-xxmiku-svg-1-wide__2N-6l","sekai-xxmiku-svg-2-narrow":"XxMikuDialog-module_sekai-xxmiku-svg-2-narrow__3HHf-","sekai-xxmiku-svg-2-medium":"XxMikuDialog-module_sekai-xxmiku-svg-2-medium__9o0Zw","sekai-xxmiku-svg-2-wide":"XxMikuDialog-module_sekai-xxmiku-svg-2-wide__qeQUa","sekai-xxmiku-svg-3-narrow":"XxMikuDialog-module_sekai-xxmiku-svg-3-narrow__Q-ch7","sekai-xxmiku-svg-3-medium":"XxMikuDialog-module_sekai-xxmiku-svg-3-medium__QnTfq","sekai-xxmiku-svg-3-wide":"XxMikuDialog-module_sekai-xxmiku-svg-3-wide__mMg4X","sekai-xxmiku-svg-4-narrow":"XxMikuDialog-module_sekai-xxmiku-svg-4-narrow__8-UN-","sekai-xxmiku-svg-4-medium":"XxMikuDialog-module_sekai-xxmiku-svg-4-medium__hAeL3","sekai-xxmiku-svg-4-wide":"XxMikuDialog-module_sekai-xxmiku-svg-4-wide__Kpdo-","sekai-xxmiku-svg-5-narrow":"XxMikuDialog-module_sekai-xxmiku-svg-5-narrow__BQjgx","sekai-xxmiku-svg-5-medium":"XxMikuDialog-module_sekai-xxmiku-svg-5-medium__nkuQm","sekai-xxmiku-svg-5-wide":"XxMikuDialog-module_sekai-xxmiku-svg-5-wide__NaAs4"};
styleInject(css_248z$f);

var _excluded$f = ["open", "themeMode", "children", "size", "containerComponent", "onClose", "title", "buttons"];
function ownKeys$g(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$g(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$g(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$g(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var XxMikuDialog = function XxMikuDialog(_ref) {
  var open = _ref.open,
    themeMode = _ref.themeMode,
    children = _ref.children,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'medium' : _ref$size,
    containerComponent = _ref.containerComponent,
    onClose = _ref.onClose,
    title = _ref.title,
    buttons = _ref.buttons,
    rest = _objectWithoutProperties(_ref, _excluded$f);
  var portalContainer = containerComponent || document.body;
  var _useOptionalSekai = useOptionalSekai({
      mode: themeMode
    }),
    modeTheme = _useOptionalSekai.modeTheme;
  useEffect(function () {
    if (!open) return;
    var handleKeyDownEsc = fireOnEscapeKey(onClose);
    document.addEventListener('keydown', handleKeyDownEsc);
    return function () {
      return document.removeEventListener('keydown', handleKeyDownEsc);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
  var headerProps = {
    themeMode: themeMode,
    size: size,
    onClose: onClose,
    title: title
  };
  var xxButtonProps = useMemo(function () {
    return buttons === null || buttons === void 0 ? void 0 : buttons.map(function (button) {
      var type = button.type ? button.type : 'normal';
      return _objectSpread$g(_objectSpread$g({}, button), {}, {
        buttonStyle: clsx(styles$f["sekai-xxmiku-".concat(type, "-button")], styles$f["sekai-".concat(modeTheme)])
      });
    });
  }, [buttons, modeTheme]);
  var overlayProps = {
    id: 'xxmiku-dialog-overlay',
    open: open,
    themeMode: themeMode,
    containerComponent: containerComponent,
    centered: true
  };
  var buttonsProps = {
    themeMode: themeMode,
    buttons: xxButtonProps
  };
  return /*#__PURE__*/createPortal(/*#__PURE__*/React.createElement(Backdrop, overlayProps, /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    role: "dialog",
    className: clsx(styles$f["sekai-container-".concat(size)], styles$f["sekai-".concat(modeTheme)], rest.className),
    "aria-label": title || 'Dialog'
  }), /*#__PURE__*/React.createElement(XxMikuSvg, {
    className: styles$f["sekai-xxmiku-svg-1-".concat(size)]
  }), /*#__PURE__*/React.createElement(XxMikuSvg, {
    className: styles$f["sekai-xxmiku-svg-2-".concat(size)]
  }), /*#__PURE__*/React.createElement(XxMikuSvg, {
    className: styles$f["sekai-xxmiku-svg-3-".concat(size)],
    type: 'type2'
  }), /*#__PURE__*/React.createElement(XxMikuSvg, {
    className: styles$f["sekai-xxmiku-svg-4-".concat(size)],
    type: 'type2'
  }), /*#__PURE__*/React.createElement(XxMikuSvg, {
    className: styles$f["sekai-xxmiku-svg-5-".concat(size)],
    type: 'type2'
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$f['sekai-content-wrap']
  }, /*#__PURE__*/React.createElement(DialogTitleHeader, _extends({
    id: "xo-miku-dialog-header"
  }, headerProps)), children, /*#__PURE__*/React.createElement(DialogButtons, _extends({
    id: "xo-miku-dialog-buttons",
    className: styles$f['sekai-xxmiku-button']
  }, buttonsProps))))), portalContainer);
};

var css_248z$e = "/* Styles for common color */\n/* Styles for z-index */\n/* Styles for common classes */\n.Drawer-module_sekai-text-light__5n55H {\n  color: #212121;\n}\n\n.Drawer-module_sekai-text-dark__f-Lpq {\n  color: #e0e0e0;\n}\n\n.Drawer-module_sekai-color-light__a7Lp9 {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.Drawer-module_sekai-color-dark__UI-kJ {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.Drawer-module_sekai-overlay__aFac-, .Drawer-module_sekai-overlay-dark__g-gV4, .Drawer-module_sekai-overlay-light__l5VEp {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.Drawer-module_sekai-overlay-light__l5VEp {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.Drawer-module_sekai-overlay-dark__g-gV4 {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.Drawer-module_sekai-flex-center__J7DKS {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.Drawer-module_sekai-absolute-center__t5u-h {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.Drawer-module_sekai-invisible-scroll__X0sg3 {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.Drawer-module_sekai-invisible-scroll__X0sg3::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.Drawer-module_sekai-mb-8__V83iF {\n  margin-bottom: 8px;\n}\n\n.Drawer-module_sekai-mb-16__ZZKlv {\n  margin-bottom: 16px;\n}\n\n.Drawer-module_sekai-mb-24__ca52J {\n  margin-bottom: 24px;\n}\n\n.Drawer-module_text-xs__Per8j {\n  font-size: 12px;\n}\n\n.Drawer-module_text-sm__kM0Wk {\n  font-size: 14px;\n}\n\n.Drawer-module_text-base__zCe4G {\n  font-size: 16px;\n}\n\n.Drawer-module_text-lg__6SWBX {\n  font-size: 18px;\n}\n\n.Drawer-module_text-xl__z9nLE {\n  font-size: 20px;\n}\n\n.Drawer-module_text-2xl__TrNF6 {\n  font-size: 24px;\n}\n\n.Drawer-module_text-base-bold__XawEE {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.Drawer-module_text-lg-bold__Fa4aK {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.Drawer-module_text-xl-bold__R890w {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.Drawer-module_text-2xl-bold__k8uow {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.Drawer-module_font-bold__SDab1 {\n  font-weight: bold;\n}\n\n.Drawer-module_sekai-drawer__4Xpz7 {\n  transition: opacity 0.3s ease-out, visibility 0s linear 0.3s;\n  overflow: hidden;\n}\n.Drawer-module_sekai-drawer__4Xpz7.Drawer-module_sekai-drawer-visible__EXq-x {\n  opacity: 1;\n  visibility: visible;\n  transition-delay: 0s;\n}\n.Drawer-module_sekai-drawer__4Xpz7.Drawer-module_sekai-drawer-hidden__ewqPI {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.Drawer-module_sekai-drawer-contents-right__zkrgA,\n.Drawer-module_sekai-drawer-contents-left__6-kG3 {\n  position: absolute;\n  top: 0;\n  width: 80%;\n  height: 100%;\n  max-width: 390px;\n  background-color: var(--sekai-color-bg);\n  z-index: 1200;\n}\n\n.Drawer-module_sekai-drawer-contents-right__zkrgA {\n  right: -390px;\n  transition: right 0.3s ease-out;\n}\n.Drawer-module_sekai-drawer-contents-right__zkrgA.Drawer-module_sekai-drawer-visible__EXq-x {\n  right: 0;\n}\n\n.Drawer-module_sekai-drawer-contents-left__6-kG3 {\n  left: -390px;\n  transition: left 0.3s ease-out;\n}\n.Drawer-module_sekai-drawer-contents-left__6-kG3.Drawer-module_sekai-drawer-visible__EXq-x {\n  left: 0;\n}\n\n.Drawer-module_sekai-drawer-contents-top__tvkQO,\n.Drawer-module_sekai-drawer-contents-bottom__ql1ot {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 80%;\n  max-height: 390px;\n  background-color: var(--sekai-color-bg);\n  z-index: 1200;\n}\n\n.Drawer-module_sekai-drawer-contents-top__tvkQO {\n  top: -390px;\n  transition: top 0.3s ease-out;\n}\n.Drawer-module_sekai-drawer-contents-top__tvkQO.Drawer-module_sekai-drawer-visible__EXq-x {\n  top: 0;\n}\n\n.Drawer-module_sekai-drawer-contents-bottom__ql1ot {\n  bottom: -390px;\n  transition: bottom 0.3s ease-out;\n}\n.Drawer-module_sekai-drawer-contents-bottom__ql1ot.Drawer-module_sekai-drawer-visible__EXq-x {\n  bottom: 0;\n}";
var styles$e = {"sekai-text-light":"Drawer-module_sekai-text-light__5n55H","sekai-text-dark":"Drawer-module_sekai-text-dark__f-Lpq","sekai-color-light":"Drawer-module_sekai-color-light__a7Lp9","sekai-color-dark":"Drawer-module_sekai-color-dark__UI-kJ","sekai-overlay":"Drawer-module_sekai-overlay__aFac-","sekai-overlay-dark":"Drawer-module_sekai-overlay-dark__g-gV4","sekai-overlay-light":"Drawer-module_sekai-overlay-light__l5VEp","sekai-flex-center":"Drawer-module_sekai-flex-center__J7DKS","sekai-absolute-center":"Drawer-module_sekai-absolute-center__t5u-h","sekai-invisible-scroll":"Drawer-module_sekai-invisible-scroll__X0sg3","sekai-mb-8":"Drawer-module_sekai-mb-8__V83iF","sekai-mb-16":"Drawer-module_sekai-mb-16__ZZKlv","sekai-mb-24":"Drawer-module_sekai-mb-24__ca52J","text-xs":"Drawer-module_text-xs__Per8j","text-sm":"Drawer-module_text-sm__kM0Wk","text-base":"Drawer-module_text-base__zCe4G","text-lg":"Drawer-module_text-lg__6SWBX","text-xl":"Drawer-module_text-xl__z9nLE","text-2xl":"Drawer-module_text-2xl__TrNF6","text-base-bold":"Drawer-module_text-base-bold__XawEE","text-lg-bold":"Drawer-module_text-lg-bold__Fa4aK","text-xl-bold":"Drawer-module_text-xl-bold__R890w","text-2xl-bold":"Drawer-module_text-2xl-bold__k8uow","font-bold":"Drawer-module_font-bold__SDab1","sekai-drawer":"Drawer-module_sekai-drawer__4Xpz7","sekai-drawer-visible":"Drawer-module_sekai-drawer-visible__EXq-x","sekai-drawer-hidden":"Drawer-module_sekai-drawer-hidden__ewqPI","sekai-drawer-contents-right":"Drawer-module_sekai-drawer-contents-right__zkrgA","sekai-drawer-contents-left":"Drawer-module_sekai-drawer-contents-left__6-kG3","sekai-drawer-contents-top":"Drawer-module_sekai-drawer-contents-top__tvkQO","sekai-drawer-contents-bottom":"Drawer-module_sekai-drawer-contents-bottom__ql1ot"};
styleInject(css_248z$e);

var _excluded$e = ["sekai", "themeMode", "open", "onClose", "children", "containerComponent", "pos"];
function ownKeys$f(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$f(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$f(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$f(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Drawer = function Drawer(_ref) {
  var sekai = _ref.sekai,
    themeMode = _ref.themeMode,
    open = _ref.open,
    onClose = _ref.onClose,
    children = _ref.children,
    containerComponent = _ref.containerComponent,
    _ref$pos = _ref.pos,
    pos = _ref$pos === void 0 ? 'right' : _ref$pos,
    rest = _objectWithoutProperties(_ref, _excluded$e);
  var displayDrawer = open ? 'sekai-drawer-visible' : 'sekai-drawer-hidden';
  var portalContainer = containerComponent || document.body;
  var _useOptionalSekai = useOptionalSekai({
      sekai: sekai,
      mode: themeMode
    }),
    sekaiColor = _useOptionalSekai.sekaiColor,
    modeTheme = _useOptionalSekai.modeTheme,
    isLight = _useOptionalSekai.isLight;
  var sekaiColorBg = convertHexToRgbaMixWithBlackOrWhite(sekaiColor, 0.5, isLight);
  var optionStyle = {
    '--sekai-color-bg': sekaiColorBg
  };
  var posAbsoluteStyle = _objectSpread$f({}, containerComponent && {
    position: 'absolute'
  });
  return /*#__PURE__*/createPortal(/*#__PURE__*/React.createElement("div", {
    className: clsx(globalStyles["sekai-overlay-".concat(modeTheme)], styles$e['sekai-drawer'], styles$e[displayDrawer]),
    style: posAbsoluteStyle,
    "aria-hidden": "true",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: clsx(styles$e["sekai-drawer-contents-".concat(pos)], styles$e[displayDrawer], rest.className),
    style: _objectSpread$f(_objectSpread$f({}, optionStyle), rest.style),
    role: "presentation",
    tabIndex: -1,
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }), children)), portalContainer);
};

var css_248z$d = "/* Styles for common color */\n/* Styles for z-index */\n/* Styles for common classes */\n.Dropdown-module_sekai-text-light__TlTlP {\n  color: #212121;\n}\n\n.Dropdown-module_sekai-text-dark__-a7Od {\n  color: #e0e0e0;\n}\n\n.Dropdown-module_sekai-color-light__4gWvx {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.Dropdown-module_sekai-color-dark__aMQ7k {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.Dropdown-module_sekai-overlay__SAgCR, .Dropdown-module_sekai-overlay-dark__N0wPN, .Dropdown-module_sekai-overlay-light__TAnYs {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.Dropdown-module_sekai-overlay-light__TAnYs {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.Dropdown-module_sekai-overlay-dark__N0wPN {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.Dropdown-module_sekai-flex-center__IN4Jn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.Dropdown-module_sekai-absolute-center__HwAro {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.Dropdown-module_sekai-invisible-scroll__XVXzO {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.Dropdown-module_sekai-invisible-scroll__XVXzO::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.Dropdown-module_sekai-mb-8__7Z63N {\n  margin-bottom: 8px;\n}\n\n.Dropdown-module_sekai-mb-16__foRWj {\n  margin-bottom: 16px;\n}\n\n.Dropdown-module_sekai-mb-24__6KMAz {\n  margin-bottom: 24px;\n}\n\n.Dropdown-module_text-xs__Wn9pr {\n  font-size: 12px;\n}\n\n.Dropdown-module_text-sm__q1F0W {\n  font-size: 14px;\n}\n\n.Dropdown-module_text-base__AXcRU {\n  font-size: 16px;\n}\n\n.Dropdown-module_text-lg__1mKOl {\n  font-size: 18px;\n}\n\n.Dropdown-module_text-xl__AGGQ0 {\n  font-size: 20px;\n}\n\n.Dropdown-module_text-2xl__zYt2V {\n  font-size: 24px;\n}\n\n.Dropdown-module_text-base-bold__71PBL {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.Dropdown-module_text-lg-bold__0GUEW {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.Dropdown-module_text-xl-bold__JKfzS {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.Dropdown-module_text-2xl-bold__-Frtb {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.Dropdown-module_font-bold__D0ptL {\n  font-weight: bold;\n}\n\n.Dropdown-module_sekai-dropdown__vl8ke, .Dropdown-module_sekai-dropdown-dark__6ELhL, .Dropdown-module_sekai-dropdown-light__gsDyr {\n  position: relative;\n}\n\n.Dropdown-module_sekai-dropdown-trigger__tuFbD, .Dropdown-module_sekai-dropdown-trigger-dark__SbSAB, .Dropdown-module_sekai-dropdown-trigger-light__oxPRN {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  background-color: inherit;\n  height: 40px;\n  padding: 4px 16px;\n  border-radius: 5px;\n  outline: 1px solid var(--sekai-color);\n}\n\n.Dropdown-module_sekai-dropdown-trigger-light__oxPRN {\n  color: #212121;\n  border: 1px solid #212121;\n}\n\n.Dropdown-module_sekai-dropdown-trigger-dark__SbSAB {\n  color: #e0e0e0;\n  border: 1px solid #e0e0e0;\n}\n\n.Dropdown-module_sekai-dropdown-icon__E-yy6 {\n  width: 20px;\n  height: 20px;\n}\n\n.Dropdown-module_sekai-placeholder__Whlmk {\n  opacity: 0.5;\n}\n\n.Dropdown-module_sekai-dropdown-icon-open__1ntFS {\n  transform: rotate(180deg);\n  transition: transform 0.2s ease-in-out;\n}\n\n.Dropdown-module_sekai-dropdown-icon-close__SQC-- {\n  transform: rotate(0);\n  transition: transform 0.2s ease-in-out;\n}\n\n.Dropdown-module_sekai-dropdown-options-list__rO8x4 {\n  position: absolute;\n  z-index: 1100;\n  list-style: none;\n  top: 100%;\n  left: 0;\n  margin: 0;\n  padding: 4px 0;\n  box-shadow: 0px 4px 8px var(--sekai-color-shadow);\n  transition: opacity 0.2s ease-in-out;\n  max-height: 200px;\n  overflow-y: auto;\n}\n.Dropdown-module_sekai-dropdown-options-list__rO8x4.Dropdown-module_sekai-dropdown-options-open__uOE78 {\n  opacity: 1;\n}\n.Dropdown-module_sekai-dropdown-options-list__rO8x4.Dropdown-module_sekai-dropdown-options-close__X9EnS {\n  opacity: 0;\n}\n\n.Dropdown-module_sekai-dropdown-option-item__7Reun > button {\n  width: 100%;\n  height: 40px;\n  border: none;\n  background-color: inherit;\n  padding: 8px 16px;\n  text-align: left;\n}\n.Dropdown-module_sekai-dropdown-option-item__7Reun > button:hover {\n  background-color: var(--sekai-color-hover);\n}\n.Dropdown-module_sekai-dropdown-option-item__7Reun > button:focus-visible {\n  outline: 1px solid var(--sekai-color-shadow);\n}";
var styles$d = {"sekai-text-light":"Dropdown-module_sekai-text-light__TlTlP","sekai-text-dark":"Dropdown-module_sekai-text-dark__-a7Od","sekai-color-light":"Dropdown-module_sekai-color-light__4gWvx","sekai-color-dark":"Dropdown-module_sekai-color-dark__aMQ7k","sekai-overlay":"Dropdown-module_sekai-overlay__SAgCR","sekai-overlay-dark":"Dropdown-module_sekai-overlay-dark__N0wPN","sekai-overlay-light":"Dropdown-module_sekai-overlay-light__TAnYs","sekai-flex-center":"Dropdown-module_sekai-flex-center__IN4Jn","sekai-absolute-center":"Dropdown-module_sekai-absolute-center__HwAro","sekai-invisible-scroll":"Dropdown-module_sekai-invisible-scroll__XVXzO","sekai-mb-8":"Dropdown-module_sekai-mb-8__7Z63N","sekai-mb-16":"Dropdown-module_sekai-mb-16__foRWj","sekai-mb-24":"Dropdown-module_sekai-mb-24__6KMAz","text-xs":"Dropdown-module_text-xs__Wn9pr","text-sm":"Dropdown-module_text-sm__q1F0W","text-base":"Dropdown-module_text-base__AXcRU","text-lg":"Dropdown-module_text-lg__1mKOl","text-xl":"Dropdown-module_text-xl__AGGQ0","text-2xl":"Dropdown-module_text-2xl__zYt2V","text-base-bold":"Dropdown-module_text-base-bold__71PBL","text-lg-bold":"Dropdown-module_text-lg-bold__0GUEW","text-xl-bold":"Dropdown-module_text-xl-bold__JKfzS","text-2xl-bold":"Dropdown-module_text-2xl-bold__-Frtb","font-bold":"Dropdown-module_font-bold__D0ptL","sekai-dropdown":"Dropdown-module_sekai-dropdown__vl8ke","sekai-dropdown-dark":"Dropdown-module_sekai-dropdown-dark__6ELhL","sekai-dropdown-light":"Dropdown-module_sekai-dropdown-light__gsDyr","sekai-dropdown-trigger":"Dropdown-module_sekai-dropdown-trigger__tuFbD","sekai-dropdown-trigger-dark":"Dropdown-module_sekai-dropdown-trigger-dark__SbSAB","sekai-dropdown-trigger-light":"Dropdown-module_sekai-dropdown-trigger-light__oxPRN","sekai-dropdown-icon":"Dropdown-module_sekai-dropdown-icon__E-yy6","sekai-placeholder":"Dropdown-module_sekai-placeholder__Whlmk","sekai-dropdown-icon-open":"Dropdown-module_sekai-dropdown-icon-open__1ntFS","sekai-dropdown-icon-close":"Dropdown-module_sekai-dropdown-icon-close__SQC--","sekai-dropdown-options-list":"Dropdown-module_sekai-dropdown-options-list__rO8x4","sekai-dropdown-options-open":"Dropdown-module_sekai-dropdown-options-open__uOE78","sekai-dropdown-options-close":"Dropdown-module_sekai-dropdown-options-close__X9EnS","sekai-dropdown-option-item":"Dropdown-module_sekai-dropdown-option-item__7Reun"};
styleInject(css_248z$d);

var _excluded$d = ["sekai", "themeMode", "options", "onSelect", "placeholder"];
function ownKeys$e(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$e(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$e(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$e(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: true } : { done: false, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = true, u = false; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = true, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var MAX_OPTION_LENGTH = 5;
var OPTION_ITEM_HEIGHT = 40;
var BUTTON_BORDER_WIDTH = 2;
var Dropdown = function Dropdown(props) {
  var displayText = props.placeholder || props.defaultValue || '';
  return /*#__PURE__*/React.createElement(DropdownProvider, {
    displayText: displayText
  }, /*#__PURE__*/React.createElement(DropdownContent, props));
};
var DropdownContext = /*#__PURE__*/createContext(null);
var DropdownProvider = function DropdownProvider(_ref) {
  var children = _ref.children,
    displayText = _ref.displayText;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    openOptions = _useState2[0],
    setOpenOptions = _useState2[1];
  var _useState3 = useState(displayText || ''),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedValue = _useState4[0],
    setSelectedValue = _useState4[1];
  return /*#__PURE__*/React.createElement(DropdownContext.Provider, {
    value: {
      openOptions: openOptions,
      setOpenOptions: setOpenOptions,
      selectedValue: selectedValue,
      setSelectedValue: setSelectedValue
    }
  }, children);
};
var DropdownContent = function DropdownContent(_ref2) {
  var sekai = _ref2.sekai,
    themeMode = _ref2.themeMode,
    options = _ref2.options,
    onSelect = _ref2.onSelect,
    placeholder = _ref2.placeholder,
    rest = _objectWithoutProperties(_ref2, _excluded$d);
  var _useOptionalSekai = useOptionalSekai({
      sekai: sekai,
      mode: themeMode
    }),
    sekaiColor = _useOptionalSekai.sekaiColor,
    modeTheme = _useOptionalSekai.modeTheme;
  var wrapDropdownRef = useRef(null);
  var triggerButtonRef = useRef(null);
  var _ref3 = useContext(DropdownContext) || {},
    openOptions = _ref3.openOptions,
    setOpenOptions = _ref3.setOpenOptions;
  var _useState5 = useState(),
    _useState6 = _slicedToArray(_useState5, 2),
    dropdownPosStyle = _useState6[0],
    setDropdownPosStyle = _useState6[1];
  useEffect(function () {
    var refTriggerButton = triggerButtonRef.current;
    if (openOptions && refTriggerButton) {
      var triggerButtonRect = refTriggerButton.getBoundingClientRect();
      var optionLength = options.length > MAX_OPTION_LENGTH ? MAX_OPTION_LENGTH : options.length;
      var optionsHeight = OPTION_ITEM_HEIGHT * optionLength;
      var dropdownBottom = triggerButtonRect.bottom + optionsHeight;
      var overflow = dropdownBottom - window.innerHeight;
      var offSetY = overflow > 0 ? overflow + 20 : -1 * BUTTON_BORDER_WIDTH;
      setDropdownPosStyle({
        top: "calc(".concat(OPTION_ITEM_HEIGHT, "px - ").concat(offSetY, "px)")
      });
    }
  }, [openOptions, options.length]);
  // Close the dropdown when clicking outside of it
  useEffect(function () {
    var clickOutside = function clickOutside(event) {
      var refWrapDropdown = wrapDropdownRef.current;
      if (refWrapDropdown && !refWrapDropdown.contains(event.target)) {
        setOpenOptions === null || setOpenOptions === void 0 || setOpenOptions(false);
      }
    };
    document.addEventListener('mousedown', clickOutside);
    document.addEventListener('touchstart', clickOutside);
    return function () {
      document.removeEventListener('mousedown', clickOutside);
      document.removeEventListener('touchstart', clickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // Set the width of the trigger button to match the options list
  var _useState7 = useState(0),
    _useState8 = _slicedToArray(_useState7, 2),
    triggerWidth = _useState8[0],
    setTriggerWidth = _useState8[1];
  useEffect(function () {
    var button = triggerButtonRef.current;
    if (!button) return;
    var observer = new ResizeObserver(function (entries) {
      var _iterator = _createForOfIteratorHelper(entries),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var entry = _step.value;
          var contentWidth = entry.contentRect.width;
          var contentPosX = entry.contentRect.x;
          setTriggerWidth(contentWidth + contentPosX * 2 + BUTTON_BORDER_WIDTH * 2);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
    observer.observe(button);
    return function () {
      return observer.disconnect();
    };
  }, []);
  var optionStyle = useMemo(function () {
    return {
      width: "".concat(triggerWidth, "px")
    };
  }, [triggerWidth]);
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    ref: wrapDropdownRef,
    className: clsx(styles$d["sekai-dropdown-".concat(modeTheme)], rest.className),
    style: _objectSpread$e({
      '--sekai-color': sekaiColor
    }, rest.style || {})
  }), /*#__PURE__*/React.createElement(DropdownTriggerButton, {
    ref: triggerButtonRef,
    sekai: sekai,
    themeMode: themeMode,
    options: options,
    placeholder: placeholder
  }), /*#__PURE__*/React.createElement(DropdownOptions, {
    style: _objectSpread$e(_objectSpread$e({}, optionStyle), dropdownPosStyle),
    sekai: sekai,
    themeMode: themeMode,
    options: options,
    onSelect: onSelect
  }));
};
var DropdownTriggerButton = /*#__PURE__*/forwardRef(function (_ref4, ref) {
  var sekai = _ref4.sekai,
    themeMode = _ref4.themeMode,
    options = _ref4.options,
    placeholder = _ref4.placeholder;
  var _useOptionalSekai2 = useOptionalSekai({
      sekai: sekai,
      mode: themeMode
    }),
    sekaiColor = _useOptionalSekai2.sekaiColor,
    modeTheme = _useOptionalSekai2.modeTheme;
  var _ref5 = useContext(DropdownContext) || {},
    selectedValue = _ref5.selectedValue,
    openOptions = _ref5.openOptions,
    setOpenOptions = _ref5.setOpenOptions;
  var optionStyle = {
    '--sekai-color': sekaiColor
  };
  var displayText = useMemo(function () {
    var selectedOption = options.find(function (option) {
      return option.value === selectedValue;
    });
    return selectedOption ? selectedOption.label : placeholder;
  }, [options, selectedValue, placeholder]);
  var isDispPlaceholder = useMemo(function () {
    return placeholder === displayText;
  }, [placeholder, displayText]);
  var handleClick = function handleClick() {
    setOpenOptions === null || setOpenOptions === void 0 || setOpenOptions(!openOptions);
  };
  return /*#__PURE__*/React.createElement("button", {
    ref: ref,
    type: "button",
    className: styles$d["sekai-dropdown-trigger-".concat(modeTheme)],
    onClick: handleClick,
    style: optionStyle
  }, /*#__PURE__*/React.createElement("span", {
    className: clsx(_defineProperty({}, styles$d['sekai-placeholder'], isDispPlaceholder))
  }, displayText), /*#__PURE__*/React.createElement(ChevronSvg, {
    className: clsx(styles$d['sekai-dropdown-icon'], _defineProperty(_defineProperty({}, styles$d['sekai-dropdown-icon-open'], openOptions), styles$d["sekai-dropdown-icon-close"], !openOptions)),
    sekai: sekai,
    themeMode: themeMode,
    vector: "down"
  }));
});
DropdownTriggerButton.displayName = 'DropdownTriggerButton';
var DropdownOptions = function DropdownOptions(_ref6) {
  var style = _ref6.style,
    sekai = _ref6.sekai,
    themeMode = _ref6.themeMode,
    options = _ref6.options,
    onSelect = _ref6.onSelect;
  var _useOptionalSekai3 = useOptionalSekai({
      sekai: sekai,
      mode: themeMode
    }),
    sekaiColor = _useOptionalSekai3.sekaiColor,
    modeTheme = _useOptionalSekai3.modeTheme,
    isLight = _useOptionalSekai3.isLight;
  var _ref7 = useContext(DropdownContext) || {},
    setSelectedValue = _ref7.setSelectedValue,
    openOptions = _ref7.openOptions,
    setOpenOptions = _ref7.setOpenOptions;
  var sekaiColorShadow = convertHexToRgbaMixWithBlackOrWhite(sekaiColor, 0.5, isLight);
  var sekaiColorHover = convertHexToRgba(sekaiColor, isLight ? 0.1 : 0.3);
  var optionStyle = {
    '--sekai-color': sekaiColor,
    '--sekai-color-shadow': sekaiColorShadow,
    '--sekai-color-hover': sekaiColorHover
  };
  var _useState9 = useState(false),
    _useState0 = _slicedToArray(_useState9, 2),
    isVisible = _useState0[0],
    setIsVisible = _useState0[1];
  var _useState1 = useState(false),
    _useState10 = _slicedToArray(_useState1, 2),
    isRendered = _useState10[0],
    setIsRendered = _useState10[1];
  var open = function open() {
    setIsRendered(true);
    setTimeout(function () {
      return setIsVisible(true);
    }, 10);
  };
  var close = function close() {
    setIsVisible(false);
    setTimeout(function () {
      return setIsRendered(false);
    }, 200);
  };
  useEffect(function () {
    if (openOptions) {
      open();
    } else {
      close();
    }
  }, [openOptions]);
  var handleSelect = function handleSelect(value) {
    onSelect(value);
    setSelectedValue === null || setSelectedValue === void 0 || setSelectedValue(value);
    setOpenOptions === null || setOpenOptions === void 0 || setOpenOptions(false);
  };
  return isRendered ? /*#__PURE__*/React.createElement("ul", {
    className: clsx(styles$d['sekai-dropdown-options-list'], _defineProperty(_defineProperty({}, styles$d['sekai-dropdown-options-open'], isVisible), styles$d['sekai-dropdown-options-close'], !isVisible), globalStyles["sekai-color-".concat(modeTheme)]),
    style: _objectSpread$e(_objectSpread$e({}, optionStyle), style)
  }, options.map(function (option) {
    return /*#__PURE__*/React.createElement("li", {
      key: option.value,
      className: clsx(styles$d['sekai-dropdown-option-item'])
    }, /*#__PURE__*/React.createElement("button", {
      className: clsx(globalStyles["sekai-color-".concat(modeTheme)]),
      onClick: function onClick() {
        return handleSelect(option.value);
      }
    }, option.label));
  })) : null;
};

var css_248z$c = "/* Styles for common color */\n/* Styles for z-index */\n/* Styles for common classes */\n.DoReMeetEffect-module_sekai-text-light__XixDc {\n  color: #212121;\n}\n\n.DoReMeetEffect-module_sekai-text-dark__qsFKA {\n  color: #e0e0e0;\n}\n\n.DoReMeetEffect-module_sekai-color-light__JUXfY {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.DoReMeetEffect-module_sekai-color-dark__6TOjY {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.DoReMeetEffect-module_sekai-overlay__hh5iR, .DoReMeetEffect-module_sekai-overlay-dark__T0nR-, .DoReMeetEffect-module_sekai-overlay-light__RVCmP {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.DoReMeetEffect-module_sekai-overlay-light__RVCmP {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.DoReMeetEffect-module_sekai-overlay-dark__T0nR- {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.DoReMeetEffect-module_sekai-flex-center__TNc8m {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.DoReMeetEffect-module_sekai-absolute-center__QLSWz {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.DoReMeetEffect-module_sekai-invisible-scroll__QRa6P {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.DoReMeetEffect-module_sekai-invisible-scroll__QRa6P::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.DoReMeetEffect-module_sekai-mb-8__FcpDO {\n  margin-bottom: 8px;\n}\n\n.DoReMeetEffect-module_sekai-mb-16__K-9ys {\n  margin-bottom: 16px;\n}\n\n.DoReMeetEffect-module_sekai-mb-24__HeCoa {\n  margin-bottom: 24px;\n}\n\n.DoReMeetEffect-module_text-xs__Vkc-k {\n  font-size: 12px;\n}\n\n.DoReMeetEffect-module_text-sm__49R41 {\n  font-size: 14px;\n}\n\n.DoReMeetEffect-module_text-base__pUhNu {\n  font-size: 16px;\n}\n\n.DoReMeetEffect-module_text-lg__1GHix {\n  font-size: 18px;\n}\n\n.DoReMeetEffect-module_text-xl__XDSa6 {\n  font-size: 20px;\n}\n\n.DoReMeetEffect-module_text-2xl__O-VPY {\n  font-size: 24px;\n}\n\n.DoReMeetEffect-module_text-base-bold__4DUH1 {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.DoReMeetEffect-module_text-lg-bold__L9rBL {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.DoReMeetEffect-module_text-xl-bold__RDWJN {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.DoReMeetEffect-module_text-2xl-bold__5KSmy {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.DoReMeetEffect-module_font-bold__n-NpY {\n  font-weight: bold;\n}\n\n.DoReMeetEffect-module_sekai-doremeet-effect__DwAmv, .DoReMeetEffect-module_sekai-doremeet-effect-dark__xJPnd, .DoReMeetEffect-module_sekai-doremeet-effect-light__TKqjA {\n  text-shadow: 0 0 5px var(--sekai-color), 0 0 10px var(--sekai-color), 0 0 20px var(--sekai-color), 0 0 40px var(--sekai-color);\n  transition: all 0.39s ease;\n}\n\n.DoReMeetEffect-module_sekai-doremeet-effect-light__TKqjA {\n  color: #212121;\n}\n\n.DoReMeetEffect-module_sekai-doremeet-effect-dark__xJPnd {\n  color: #e0e0e0;\n}";
var styles$c = {"sekai-text-light":"DoReMeetEffect-module_sekai-text-light__XixDc","sekai-text-dark":"DoReMeetEffect-module_sekai-text-dark__qsFKA","sekai-color-light":"DoReMeetEffect-module_sekai-color-light__JUXfY","sekai-color-dark":"DoReMeetEffect-module_sekai-color-dark__6TOjY","sekai-overlay":"DoReMeetEffect-module_sekai-overlay__hh5iR","sekai-overlay-dark":"DoReMeetEffect-module_sekai-overlay-dark__T0nR-","sekai-overlay-light":"DoReMeetEffect-module_sekai-overlay-light__RVCmP","sekai-flex-center":"DoReMeetEffect-module_sekai-flex-center__TNc8m","sekai-absolute-center":"DoReMeetEffect-module_sekai-absolute-center__QLSWz","sekai-invisible-scroll":"DoReMeetEffect-module_sekai-invisible-scroll__QRa6P","sekai-mb-8":"DoReMeetEffect-module_sekai-mb-8__FcpDO","sekai-mb-16":"DoReMeetEffect-module_sekai-mb-16__K-9ys","sekai-mb-24":"DoReMeetEffect-module_sekai-mb-24__HeCoa","text-xs":"DoReMeetEffect-module_text-xs__Vkc-k","text-sm":"DoReMeetEffect-module_text-sm__49R41","text-base":"DoReMeetEffect-module_text-base__pUhNu","text-lg":"DoReMeetEffect-module_text-lg__1GHix","text-xl":"DoReMeetEffect-module_text-xl__XDSa6","text-2xl":"DoReMeetEffect-module_text-2xl__O-VPY","text-base-bold":"DoReMeetEffect-module_text-base-bold__4DUH1","text-lg-bold":"DoReMeetEffect-module_text-lg-bold__L9rBL","text-xl-bold":"DoReMeetEffect-module_text-xl-bold__RDWJN","text-2xl-bold":"DoReMeetEffect-module_text-2xl-bold__5KSmy","font-bold":"DoReMeetEffect-module_font-bold__n-NpY","sekai-doremeet-effect":"DoReMeetEffect-module_sekai-doremeet-effect__DwAmv","sekai-doremeet-effect-dark":"DoReMeetEffect-module_sekai-doremeet-effect-dark__xJPnd","sekai-doremeet-effect-light":"DoReMeetEffect-module_sekai-doremeet-effect-light__TKqjA"};
styleInject(css_248z$c);

var _excluded$c = ["sekaiKeys", "themeMode", "text", "duration"];
function ownKeys$d(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$d(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$d(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$d(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var DoReMeetEffect = function DoReMeetEffect(_ref) {
  var sekaiKeys = _ref.sekaiKeys,
    themeMode = _ref.themeMode,
    text = _ref.text,
    _ref$duration = _ref.duration,
    duration = _ref$duration === void 0 ? 250 : _ref$duration,
    rest = _objectWithoutProperties(_ref, _excluded$c);
  var _useOptionalSekai = useOptionalSekai({
      mode: themeMode
    }),
    modeTheme = _useOptionalSekai.modeTheme;
  var INIT_VALUE = -1;
  var _useState = useState(INIT_VALUE),
    _useState2 = _slicedToArray(_useState, 2),
    currentSekaiIndex = _useState2[0],
    setCurrentSekaiIndex = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isPlaying = _useState4[0],
    setIsPlaying = _useState4[1];
  var optionStyle = useMemo(function () {
    if (currentSekaiIndex < 0) return {};
    return {
      '--sekai-color': colorsSekai[sekaiKeys[currentSekaiIndex]]
    };
  }, [currentSekaiIndex, sekaiKeys]);
  var handleDeReMeetEffect = function handleDeReMeetEffect() {
    if (isPlaying) return;
    setIsPlaying(true);
    var interval = setInterval(function () {
      setCurrentSekaiIndex(function (prev) {
        if (prev + 1 >= sekaiKeys.length) {
          clearInterval(interval);
          setIsPlaying(false);
          return INIT_VALUE;
        }
        return prev + 1;
      });
    }, duration);
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "button",
    tabIndex: -1,
    onClick: handleDeReMeetEffect,
    onKeyDown: fireOnEnterKey(handleDeReMeetEffect)
  }, rest, {
    className: clsx(styles$c["sekai-doremeet-effect-".concat(modeTheme)], rest.className),
    style: _objectSpread$d(_objectSpread$d({}, optionStyle), rest.style)
  }), text);
};

var css_248z$b = "/* Styles for common color */\n/* Styles for z-index */\n/* Styles for common classes */\n.IntoTheSekai-module_sekai-text-light__923re {\n  color: #212121;\n}\n\n.IntoTheSekai-module_sekai-text-dark__ItnQN {\n  color: #e0e0e0;\n}\n\n.IntoTheSekai-module_sekai-color-light__mBbT8 {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.IntoTheSekai-module_sekai-color-dark__008Xa {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.IntoTheSekai-module_sekai-overlay__eMmo7, .IntoTheSekai-module_sekai-overlay-dark__Eot7v, .IntoTheSekai-module_sekai-overlay-light__8ZAPI {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.IntoTheSekai-module_sekai-overlay-light__8ZAPI {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.IntoTheSekai-module_sekai-overlay-dark__Eot7v {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.IntoTheSekai-module_sekai-flex-center__geCA3 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.IntoTheSekai-module_sekai-absolute-center__ruyqt {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.IntoTheSekai-module_sekai-invisible-scroll__u9oZV {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.IntoTheSekai-module_sekai-invisible-scroll__u9oZV::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.IntoTheSekai-module_sekai-mb-8__Wqmh4 {\n  margin-bottom: 8px;\n}\n\n.IntoTheSekai-module_sekai-mb-16__nJcTa {\n  margin-bottom: 16px;\n}\n\n.IntoTheSekai-module_sekai-mb-24__cHLHN {\n  margin-bottom: 24px;\n}\n\n.IntoTheSekai-module_text-xs__9CT3D {\n  font-size: 12px;\n}\n\n.IntoTheSekai-module_text-sm__lBgTD {\n  font-size: 14px;\n}\n\n.IntoTheSekai-module_text-base__su-JM {\n  font-size: 16px;\n}\n\n.IntoTheSekai-module_text-lg__JPinf {\n  font-size: 18px;\n}\n\n.IntoTheSekai-module_text-xl__c0y3t {\n  font-size: 20px;\n}\n\n.IntoTheSekai-module_text-2xl__V9JsJ {\n  font-size: 24px;\n}\n\n.IntoTheSekai-module_text-base-bold__64-rL {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.IntoTheSekai-module_text-lg-bold__ibu47 {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.IntoTheSekai-module_text-xl-bold__pTo75 {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.IntoTheSekai-module_text-2xl-bold__f4u1J {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.IntoTheSekai-module_font-bold__pxmH2 {\n  font-weight: bold;\n}\n\n.IntoTheSekai-module_into-the-sekai__GYjaM, .IntoTheSekai-module_into-the-sekai-dark__MS--L, .IntoTheSekai-module_into-the-sekai-light__uHcs- {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n.IntoTheSekai-module_into-the-sekai-light__uHcs- {\n  background-color: #ffffff;\n}\n\n.IntoTheSekai-module_into-the-sekai-dark__MS--L {\n  background-color: #121212;\n}";
var styles$b = {"into-the-sekai":"IntoTheSekai-module_into-the-sekai__GYjaM"};
styleInject(css_248z$b);

var _excluded$b = ["execEvent", "containerComponent"];
function ownKeys$c(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$c(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$c(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$c(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var PINK = 'rgb(255, 186, 241, {0})';
var YELLOW = 'rgb(255, 247, 148, {0})';
var AQUA = 'rgb(149, 253, 255, {0})';
var IntoTheSekai = function IntoTheSekai(_ref) {
  var execEvent = _ref.execEvent,
    containerComponent = _ref.containerComponent,
    rest = _objectWithoutProperties(_ref, _excluded$b);
  var portalContainer = containerComponent || document.body;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    startAnimation = _useState2[0],
    setStartAnimation = _useState2[1];
  var canvasRef = useRef(null);
  var sekaiPieceRef = useRef([]);
  var optionStyle = _objectSpread$c({}, containerComponent && {
    position: 'absolute'
  });
  useEffect(function () {
    var canvas = canvasRef.current;
    if (!canvas) return;
    var setCanvasSize = function setCanvasSize() {
      canvas.width = portalContainer.offsetWidth;
      canvas.height = portalContainer.offsetHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    return function () {
      window.removeEventListener('resize', setCanvasSize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(function () {
    var canvas = canvasRef.current;
    var ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
    var animationFrameId;
    var _render = function render() {
      if (!ctx || !canvas || !startAnimation) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      sekaiPieceRef.current = sekaiPieceRef.current.map(function (tri) {
        var newPoints = tri.points.map(function (p) {
          return {
            x: p.x + tri.velocity.x,
            y: p.y + tri.velocity.y
          };
        });
        return _objectSpread$c(_objectSpread$c({}, tri), {}, {
          points: newPoints,
          opacity: tri.opacity - 0.0039
        });
      }).filter(function (t) {
        return t.opacity > 0;
      });
      if (sekaiPieceRef.current.length === 0) {
        setTimeout(function () {
          execEvent === null || execEvent === void 0 || execEvent();
        }, 1000 * 0.39);
        setStartAnimation(false);
      }
      sekaiPieceRef.current.forEach(function (tri, index) {
        ctx.beginPath();
        ctx.moveTo(tri.points[0].x, tri.points[0].y);
        tri.points.slice(1).forEach(function (p) {
          return ctx.lineTo(p.x, p.y);
        });
        ctx.closePath();
        ctx.fillStyle = "".concat(getPieceColor(index).replace('{0}', "".concat(tri.opacity)));
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(_render);
    };
    _render();
    return function () {
      return cancelAnimationFrame(animationFrameId);
    };
  }, [execEvent, startAnimation]);
  var handleClick = function handleClick(e) {
    setStartAnimation(true);
    var rect = portalContainer.getBoundingClientRect();
    if (!rect) return;
    var effectX = getClickPosition(e).clientX - rect.left;
    var effectY = getClickPosition(e).clientY - rect.top;
    var newPieceOfSekai = createSekaiPiece(effectX, effectY);
    sekaiPieceRef.current = [].concat(_toConsumableArray(sekaiPieceRef.current), _toConsumableArray(newPieceOfSekai));
  };
  return /*#__PURE__*/createPortal(/*#__PURE__*/React.createElement("canvas", _extends({}, rest, {
    className: clsx(styles$b['into-the-sekai'], rest.className),
    style: _objectSpread$c(_objectSpread$c({}, optionStyle), rest.style),
    ref: canvasRef,
    onClick: handleClick
  })), portalContainer);
};
var getClickPosition = function getClickPosition(e) {
  if ('touches' in e) {
    return {
      clientX: e.touches[0].clientX,
      clientY: e.touches[0].clientY
    };
  } else {
    return {
      clientX: e.clientX,
      clientY: e.clientY
    };
  }
};
var createSekaiPiece = function createSekaiPiece(x, y) {
  return Array.from({
    length: 60
  }).map(function () {
    var angle = Math.random() * 2 * Math.PI;
    var speed = Math.random() * 2 + 1;
    var velocity = {
      x: Math.cos(angle) * speed,
      y: Math.sin(angle) * speed
    };
    var points = Array.from({
      length: 3
    }).map(function () {
      return {
        x: x + Math.random() * 80 - 40,
        y: y + Math.random() * 80 - 40
      };
    });
    return {
      points: points,
      velocity: velocity,
      opacity: 1
    };
  });
};
var getPieceColor = function getPieceColor(index) {
  switch (index % 3) {
    case 0:
      return PINK;
    case 1:
      return AQUA;
    case 2:
    default:
      return YELLOW;
  }
};

var css_248z$a = "/* Styles for common color */\n/* Styles for z-index */\n/* Styles for common classes */\n.TextLink-module_sekai-text-light__1HQwU {\n  color: #212121;\n}\n\n.TextLink-module_sekai-text-dark__XQTS- {\n  color: #e0e0e0;\n}\n\n.TextLink-module_sekai-color-light__-On-Y {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.TextLink-module_sekai-color-dark__mO6W5 {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.TextLink-module_sekai-overlay__-Te9w, .TextLink-module_sekai-overlay-dark__aeUHe, .TextLink-module_sekai-overlay-light__C5b0b {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.TextLink-module_sekai-overlay-light__C5b0b {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.TextLink-module_sekai-overlay-dark__aeUHe {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.TextLink-module_sekai-flex-center__1DDJH {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.TextLink-module_sekai-absolute-center__xMuSU {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.TextLink-module_sekai-invisible-scroll__xuDbm {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.TextLink-module_sekai-invisible-scroll__xuDbm::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.TextLink-module_sekai-mb-8__1cXZT {\n  margin-bottom: 8px;\n}\n\n.TextLink-module_sekai-mb-16__jOiZC {\n  margin-bottom: 16px;\n}\n\n.TextLink-module_sekai-mb-24__hbdGp {\n  margin-bottom: 24px;\n}\n\n.TextLink-module_text-xs__pUd6u {\n  font-size: 12px;\n}\n\n.TextLink-module_text-sm__3hX-b {\n  font-size: 14px;\n}\n\n.TextLink-module_text-base__8bmqM {\n  font-size: 16px;\n}\n\n.TextLink-module_text-lg__N-ikz {\n  font-size: 18px;\n}\n\n.TextLink-module_text-xl__YkLOf {\n  font-size: 20px;\n}\n\n.TextLink-module_text-2xl__0XT3f {\n  font-size: 24px;\n}\n\n.TextLink-module_text-base-bold__bIKXl {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.TextLink-module_text-lg-bold__5vLXm {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.TextLink-module_text-xl-bold__3Grva {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.TextLink-module_text-2xl-bold__rCGLx {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.TextLink-module_font-bold__bGzQx {\n  font-weight: bold;\n}\n\n.TextLink-module_sekai-text-link__U5trb, .TextLink-module_sekai-text-link-dark__3zbvG, .TextLink-module_sekai-text-link-light__sBYGX {\n  width: -moz-fit-content;\n  width: fit-content;\n  text-decoration: underline;\n  text-decoration-color: var(--sekai-color);\n  padding: 2px 8px;\n}\n.TextLink-module_sekai-text-link__U5trb.TextLink-module_sekai-disabled__lX1Rv, .TextLink-module_sekai-disabled__lX1Rv.TextLink-module_sekai-text-link-dark__3zbvG, .TextLink-module_sekai-disabled__lX1Rv.TextLink-module_sekai-text-link-light__sBYGX {\n  pointer-events: none;\n  opacity: 0.5;\n}\n.TextLink-module_sekai-text-link__U5trb.TextLink-module_sekai-disabled__lX1Rv:focus, .TextLink-module_sekai-disabled__lX1Rv.TextLink-module_sekai-text-link-dark__3zbvG:focus, .TextLink-module_sekai-disabled__lX1Rv.TextLink-module_sekai-text-link-light__sBYGX:focus {\n  background-color: transparent;\n  outline: none;\n}\n.TextLink-module_sekai-text-link__U5trb:hover, .TextLink-module_sekai-text-link-dark__3zbvG:hover, .TextLink-module_sekai-text-link-light__sBYGX:hover {\n  text-decoration: none;\n  background-color: var(--sekai-color-hover);\n}\n.TextLink-module_sekai-text-link__U5trb:focus, .TextLink-module_sekai-text-link-dark__3zbvG:focus, .TextLink-module_sekai-text-link-light__sBYGX:focus {\n  text-decoration: none;\n  outline: 1px solid var(--sekai-color);\n  background-color: var(--sekai-color-hover);\n}\n\n.TextLink-module_sekai-text-link-light__sBYGX {\n  color: #212121;\n}\n\n.TextLink-module_sekai-text-link-dark__3zbvG {\n  color: #e0e0e0;\n}";
var styles$a = {"sekai-text-light":"TextLink-module_sekai-text-light__1HQwU","sekai-text-dark":"TextLink-module_sekai-text-dark__XQTS-","sekai-color-light":"TextLink-module_sekai-color-light__-On-Y","sekai-color-dark":"TextLink-module_sekai-color-dark__mO6W5","sekai-overlay":"TextLink-module_sekai-overlay__-Te9w","sekai-overlay-dark":"TextLink-module_sekai-overlay-dark__aeUHe","sekai-overlay-light":"TextLink-module_sekai-overlay-light__C5b0b","sekai-flex-center":"TextLink-module_sekai-flex-center__1DDJH","sekai-absolute-center":"TextLink-module_sekai-absolute-center__xMuSU","sekai-invisible-scroll":"TextLink-module_sekai-invisible-scroll__xuDbm","sekai-mb-8":"TextLink-module_sekai-mb-8__1cXZT","sekai-mb-16":"TextLink-module_sekai-mb-16__jOiZC","sekai-mb-24":"TextLink-module_sekai-mb-24__hbdGp","text-xs":"TextLink-module_text-xs__pUd6u","text-sm":"TextLink-module_text-sm__3hX-b","text-base":"TextLink-module_text-base__8bmqM","text-lg":"TextLink-module_text-lg__N-ikz","text-xl":"TextLink-module_text-xl__YkLOf","text-2xl":"TextLink-module_text-2xl__0XT3f","text-base-bold":"TextLink-module_text-base-bold__bIKXl","text-lg-bold":"TextLink-module_text-lg-bold__5vLXm","text-xl-bold":"TextLink-module_text-xl-bold__3Grva","text-2xl-bold":"TextLink-module_text-2xl-bold__rCGLx","font-bold":"TextLink-module_font-bold__bGzQx","sekai-text-link":"TextLink-module_sekai-text-link__U5trb","sekai-text-link-dark":"TextLink-module_sekai-text-link-dark__3zbvG","sekai-text-link-light":"TextLink-module_sekai-text-link-light__sBYGX","sekai-disabled":"TextLink-module_sekai-disabled__lX1Rv"};
styleInject(css_248z$a);

var _excluded$a = ["sekai", "themeMode", "text", "href", "isExternal", "disabled", "ariaLabel"];
function ownKeys$b(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$b(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$b(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$b(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TextLink = function TextLink(_ref) {
  var sekai = _ref.sekai,
    themeMode = _ref.themeMode,
    text = _ref.text,
    href = _ref.href,
    _ref$isExternal = _ref.isExternal,
    isExternal = _ref$isExternal === void 0 ? true : _ref$isExternal,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    ariaLabel = _ref.ariaLabel,
    rest = _objectWithoutProperties(_ref, _excluded$a);
  var _useOptionalSekai = useOptionalSekai({
      sekai: sekai,
      mode: themeMode
    }),
    sekaiColor = _useOptionalSekai.sekaiColor,
    modeTheme = _useOptionalSekai.modeTheme,
    isLight = _useOptionalSekai.isLight;
  var sekaiColorHover = convertHexToRgba(sekaiColor, isLight ? 0.2 : 0.6);
  var optionStyle = {
    '--sekai-color': sekaiColor,
    '--sekai-color-hover': sekaiColorHover
  };
  return /*#__PURE__*/React.createElement("a", _extends({}, rest, {
    className: clsx(styles$a["sekai-text-link-".concat(modeTheme)], disabled && styles$a['sekai-disabled'], rest.className),
    style: _objectSpread$b(_objectSpread$b({}, optionStyle), rest.style),
    href: href,
    "aria-label": ariaLabel,
    "aria-disabled": disabled,
    target: isExternal ? '_blank' : '_self',
    rel: "noopener noreferrer"
  }), text);
};

var css_248z$9 = "/* Styles for common color */\n/* Styles for z-index */\n/* Styles for common classes */\n.List-module_sekai-text-light__iaiAG {\n  color: #212121;\n}\n\n.List-module_sekai-text-dark__86RVy {\n  color: #e0e0e0;\n}\n\n.List-module_sekai-color-light__01Lsp {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.List-module_sekai-color-dark__V57IU {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.List-module_sekai-overlay__O4Bnb, .List-module_sekai-overlay-dark__is54n, .List-module_sekai-overlay-light__qkGzF {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.List-module_sekai-overlay-light__qkGzF {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.List-module_sekai-overlay-dark__is54n {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.List-module_sekai-flex-center__1ncSJ {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.List-module_sekai-absolute-center__bWXpW {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.List-module_sekai-invisible-scroll__F-LG8 {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.List-module_sekai-invisible-scroll__F-LG8::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.List-module_sekai-mb-8__B1ZQI {\n  margin-bottom: 8px;\n}\n\n.List-module_sekai-mb-16__zAVq8 {\n  margin-bottom: 16px;\n}\n\n.List-module_sekai-mb-24__IimDM {\n  margin-bottom: 24px;\n}\n\n.List-module_text-xs__TXv-R {\n  font-size: 12px;\n}\n\n.List-module_text-sm__o2LE- {\n  font-size: 14px;\n}\n\n.List-module_text-base__CpWpk {\n  font-size: 16px;\n}\n\n.List-module_text-lg__Xyagb {\n  font-size: 18px;\n}\n\n.List-module_text-xl__JvKTP {\n  font-size: 20px;\n}\n\n.List-module_text-2xl__xtEBS {\n  font-size: 24px;\n}\n\n.List-module_text-base-bold__8OYbN {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.List-module_text-lg-bold__qrW9d {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.List-module_text-xl-bold__CxUf1 {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.List-module_text-2xl-bold__bh8xR {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.List-module_font-bold__zCjUm {\n  font-weight: bold;\n}\n\n/* for List styles */\n.List-module_sekai-list__zhjZV {\n  margin: 0;\n}\n.List-module_sekai-list__zhjZV ::marker {\n  color: var(--sekai-color);\n}\n\n/* List styles end */\n/* for List Item common styles */\n.List-module_sekai-list-icon__iZQle {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 24px;\n  height: 24px;\n}\n\n.List-module_sekai-list-item__PwsSw, .List-module_sekai-list-item-button__LDkoQ, .List-module_sekai-list-item-text__tvhzb {\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  width: 100%;\n  height: 48px;\n}\n\n/* List Item common styles end */\n/* for ListItemText styles */\n.List-module_sekai-list-item-text__tvhzb {\n  padding: 0 8px;\n}\n.List-module_sekai-list-item-text__tvhzb > p {\n  margin: 0;\n  text-shadow: 1px 1px 2px var(--sekai-color);\n}\n.List-module_sekai-list-item-text__tvhzb > span {\n  display: inline-block;\n  text-shadow: 1px 1px 2px var(--sekai-color);\n}\n\n/* ListItemText styles end */\n/* for ListItemButton styles */\n.List-module_sekai-list-button__EyXER, .List-module_sekai-list-button-dark__yKca7, .List-module_sekai-list-button-light__R2zCA {\n  position: relative;\n  overflow: hidden;\n  background-color: inherit;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  width: 100%;\n  height: 100%;\n  padding: 0 8px;\n}\n.List-module_sekai-list-button__EyXER:hover, .List-module_sekai-list-button-dark__yKca7:hover, .List-module_sekai-list-button-light__R2zCA:hover {\n  background-color: var(--sekai-color-hover);\n}\n.List-module_sekai-list-button__EyXER:focus-visible, .List-module_sekai-list-button-dark__yKca7:focus-visible, .List-module_sekai-list-button-light__R2zCA:focus-visible {\n  background-color: var(--sekai-color-hover);\n  outline: 1px solid var(--sekai-color);\n}\n.List-module_sekai-list-button__EyXER:disabled, .List-module_sekai-list-button-dark__yKca7:disabled, .List-module_sekai-list-button-light__R2zCA:disabled {\n  opacity: 0.5;\n  background-color: inherit;\n}\n\n.List-module_sekai-list-button-light__R2zCA {\n  color: #212121;\n}\n\n.List-module_sekai-list-button-dark__yKca7 {\n  color: #e0e0e0;\n}\n\n/* ListItemButton styles end */\n/* ripple effect */\n.List-module_sekai-ripple__xrO8k {\n  position: absolute;\n  border-radius: 39%;\n  transform: scale(0);\n  animation: List-module_ripple__F836k 0.39s linear;\n  background-color: var(--sekai-color);\n}\n\n@keyframes List-module_ripple__F836k {\n  to {\n    transform: scale(4);\n    opacity: 0;\n  }\n}\n/* ripple effect end */";
var styles$9 = {"sekai-text-light":"List-module_sekai-text-light__iaiAG","sekai-text-dark":"List-module_sekai-text-dark__86RVy","sekai-color-light":"List-module_sekai-color-light__01Lsp","sekai-color-dark":"List-module_sekai-color-dark__V57IU","sekai-overlay":"List-module_sekai-overlay__O4Bnb","sekai-overlay-dark":"List-module_sekai-overlay-dark__is54n","sekai-overlay-light":"List-module_sekai-overlay-light__qkGzF","sekai-flex-center":"List-module_sekai-flex-center__1ncSJ","sekai-absolute-center":"List-module_sekai-absolute-center__bWXpW","sekai-invisible-scroll":"List-module_sekai-invisible-scroll__F-LG8","sekai-mb-8":"List-module_sekai-mb-8__B1ZQI","sekai-mb-16":"List-module_sekai-mb-16__zAVq8","sekai-mb-24":"List-module_sekai-mb-24__IimDM","text-xs":"List-module_text-xs__TXv-R","text-sm":"List-module_text-sm__o2LE-","text-base":"List-module_text-base__CpWpk","text-lg":"List-module_text-lg__Xyagb","text-xl":"List-module_text-xl__JvKTP","text-2xl":"List-module_text-2xl__xtEBS","text-base-bold":"List-module_text-base-bold__8OYbN","text-lg-bold":"List-module_text-lg-bold__qrW9d","text-xl-bold":"List-module_text-xl-bold__CxUf1","text-2xl-bold":"List-module_text-2xl-bold__bh8xR","font-bold":"List-module_font-bold__zCjUm","sekai-list":"List-module_sekai-list__zhjZV","sekai-list-icon":"List-module_sekai-list-icon__iZQle","sekai-list-item":"List-module_sekai-list-item__PwsSw","sekai-list-item-button":"List-module_sekai-list-item-button__LDkoQ","sekai-list-item-text":"List-module_sekai-list-item-text__tvhzb","sekai-list-button":"List-module_sekai-list-button__EyXER","sekai-list-button-dark":"List-module_sekai-list-button-dark__yKca7","sekai-list-button-light":"List-module_sekai-list-button-light__R2zCA","sekai-ripple":"List-module_sekai-ripple__xrO8k","ripple":"List-module_ripple__F836k"};
styleInject(css_248z$9);

var _excluded$9 = ["sekai", "themeMode", "children", "as", "noBullet"];
function ownKeys$a(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$a(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$a(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$a(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var ListContext = /*#__PURE__*/createContext(false);
var List = function List(_ref) {
  var sekai = _ref.sekai,
    themeMode = _ref.themeMode,
    children = _ref.children,
    _ref$as = _ref.as,
    as = _ref$as === void 0 ? 'ul' : _ref$as,
    _ref$noBullet = _ref.noBullet,
    noBullet = _ref$noBullet === void 0 ? true : _ref$noBullet,
    rest = _objectWithoutProperties(_ref, _excluded$9);
  var _useOptionalSekai = useOptionalSekai({
      sekai: sekai,
      mode: themeMode
    }),
    sekaiColor = _useOptionalSekai.sekaiColor,
    modeTheme = _useOptionalSekai.modeTheme;
  var Component = as;
  var optionStyle = {
    '--sekai-color': sekaiColor
  };
  var listStyleType = noBullet ? 'none' : undefined;
  var paddingLeft = noBullet ? '16px' : '36px';
  return /*#__PURE__*/React.createElement(ListContext.Provider, {
    value: true
  }, /*#__PURE__*/React.createElement(Component, _extends({}, rest, {
    className: clsx(globalStyles["sekai-color-".concat(modeTheme)], styles$9['sekai-list'], rest.className),
    style: _objectSpread$a(_objectSpread$a({
      listStyleType: listStyleType,
      paddingLeft: paddingLeft
    }, optionStyle), rest.style)
  }), children));
};

/* eslint-disable no-console */
var ConsoleWarning = function ConsoleWarning() {
  if (process.env.NODE_ENV === 'development') {
    var _console2;
    (_console2 = console).warn.apply(_console2, arguments);
  }
};
var ConsoleError = function ConsoleError() {
  if (process.env.NODE_ENV === 'development') {
    var _console3;
    (_console3 = console).error.apply(_console3, arguments);
  }
};

function ownKeys$9(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$9(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$9(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$9(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var rippleEffectClassName = 'sekai-ripple';
var ListItemButton = function ListItemButton(_ref) {
  var id = _ref.id,
    className = _ref.className,
    style = _ref.style,
    sekai = _ref.sekai,
    themeMode = _ref.themeMode,
    children = _ref.children,
    icon = _ref.icon,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    onClick = _ref.onClick;
  var isListWrap = useContext(ListContext);
  if (!isListWrap) ConsoleWarning('⚠ Warning: <ListItemButton> should be used inside <List>');
  var _useOptionalSekai = useOptionalSekai({
      sekai: sekai,
      mode: themeMode
    }),
    sekaiColor = _useOptionalSekai.sekaiColor,
    modeTheme = _useOptionalSekai.modeTheme,
    isLight = _useOptionalSekai.isLight;
  var sekaiColorHover = convertHexToRgba(sekaiColor, isLight ? 0.1 : 0.3);
  var optionStyle = {
    '--sekai-color': sekaiColor,
    '--sekai-color-hover': sekaiColorHover
  };
  var listItemButtonRef = useRef(null);
  var createRipple = function createRipple(event) {
    var listItemButton = listItemButtonRef.current;
    if (!listItemButton) return;
    var rect = listItemButton.getBoundingClientRect();
    var size = Math.max(listItemButton.clientWidth, listItemButton.clientHeight);
    var _getClientCoordinates = getClientCoordinates(event),
      clientX = _getClientCoordinates.clientX,
      clientY = _getClientCoordinates.clientY;
    var x = clientX - rect.left - size / 2;
    var y = clientY - rect.top - size / 2;
    var ripple = createRippleEffect(x, y, size);
    removeRippleEffect(listItemButton);
    listItemButton.appendChild(ripple);
    ripple.addEventListener('animationend', function () {
      ripple.remove();
    });
  };
  var handleOnClick = function handleOnClick(event) {
    createRipple(event);
    onClick === null || onClick === void 0 || onClick();
  };
  return /*#__PURE__*/React.createElement("li", {
    id: id,
    className: clsx(styles$9['sekai-list-item-button'], className),
    style: _objectSpread$9(_objectSpread$9({}, optionStyle), style)
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    ref: listItemButtonRef,
    className: styles$9["sekai-list-button-".concat(modeTheme)],
    disabled: disabled,
    onClick: handleOnClick
  }, getImgComponent$1(icon), children));
};
var getImgComponent$1 = function getImgComponent(icon) {
  if (!icon) return null;
  if (typeof icon === 'string') {
    return /*#__PURE__*/React.createElement("img", {
      className: styles$9['sekai-list-icon'],
      src: icon,
      alt: ""
    });
  } else {
    return icon;
  }
};
var getClientCoordinates = function getClientCoordinates(event) {
  if ('clientX' in event) {
    return {
      clientX: event.clientX,
      clientY: event.clientY
    };
  }
  var touch = event.touches[0];
  return {
    clientX: touch.clientX,
    clientY: touch.clientY
  };
};
var createRippleEffect = function createRippleEffect(x, y, size) {
  var ripple = document.createElement('span');
  ripple.style.width = ripple.style.height = "".concat(size, "px");
  ripple.style.left = "".concat(x, "px");
  ripple.style.top = "".concat(y, "px");
  ripple.className = styles$9["".concat(rippleEffectClassName)];
  return ripple;
};
var removeRippleEffect = function removeRippleEffect(element) {
  var ripple = element.getElementsByClassName(rippleEffectClassName)[0];
  if (ripple) ripple.remove();
};

var _excluded$8 = ["sekai", "themeMode", "children", "as", "icon"];
function ownKeys$8(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$8(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$8(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$8(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var ListItemText = function ListItemText(_ref) {
  var sekai = _ref.sekai,
    themeMode = _ref.themeMode,
    children = _ref.children,
    _ref$as = _ref.as,
    as = _ref$as === void 0 ? 'p' : _ref$as,
    icon = _ref.icon,
    rest = _objectWithoutProperties(_ref, _excluded$8);
  var isListWrap = useContext(ListContext);
  if (!isListWrap) ConsoleWarning('⚠ Warning: <ListItemText> should be used inside <List>');
  var _useOptionalSekai = useOptionalSekai({
      sekai: sekai,
      mode: themeMode
    }),
    sekaiColor = _useOptionalSekai.sekaiColor,
    modeTheme = _useOptionalSekai.modeTheme;
  var isChildrenElement = hasReactElement(children);
  var Component = as;
  var optionStyle = {
    '--sekai-color': sekaiColor
  };
  return /*#__PURE__*/React.createElement("li", _extends({}, rest, {
    className: clsx(styles$9['sekai-list-item-text'], globalStyles["sekai-color-".concat(modeTheme)], rest.className),
    style: _objectSpread$8(_objectSpread$8({}, optionStyle), rest.style)
  }), getImgComponent(icon), isChildrenElement ? children : /*#__PURE__*/React.createElement(Component, null, children));
};
var getImgComponent = function getImgComponent(icon) {
  if (!icon) return null;
  if (typeof icon === 'string') {
    return /*#__PURE__*/React.createElement("img", {
      className: styles$9['sekai-list-icon'],
      src: icon,
      alt: ""
    });
  } else {
    return icon;
  }
};
var hasReactElement = function hasReactElement(children) {
  return React.Children.toArray(children).some(function (child) {
    return /*#__PURE__*/React.isValidElement(child);
  });
};

var css_248z$8 = ".StickyNote-module_sekai-sticky-note__rheDG,\n.StickyNote-module_sekai-sticky-note__rheDG > button {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.StickyNote-module_sekai-sticky-note-parts__7ixUr {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background-color: var(--sekai-color-bg);\n  padding-right: 8px;\n}\n.StickyNote-module_sekai-sticky-note-parts__7ixUr .StickyNote-module_sekai-sticky-note-design__Aae2S {\n  width: 15px;\n  height: 100%;\n  background-color: var(--sekai-color);\n  margin-right: 8px;\n}";
var styles$8 = {"sekai-sticky-note":"StickyNote-module_sekai-sticky-note__rheDG","sekai-sticky-note-parts":"StickyNote-module_sekai-sticky-note-parts__7ixUr","sekai-sticky-note-design":"StickyNote-module_sekai-sticky-note-design__Aae2S"};
styleInject(css_248z$8);

var _excluded$7 = ["sekai", "children", "as"];
var StickyNote = function StickyNote(_ref) {
  var sekai = _ref.sekai,
    children = _ref.children,
    _ref$as = _ref.as,
    as = _ref$as === void 0 ? 'button' : _ref$as,
    rest = _objectWithoutProperties(_ref, _excluded$7);
  var isListWrap = useContext(ListContext);
  if (!isListWrap) ConsoleWarning('⚠ Warning: <StickyNote> should be used inside <List>');
  var stickyNoteContentsProps = {
    sekai: sekai,
    children: children
  };
  return 'button' === as ? /*#__PURE__*/React.createElement(ListItemButton, _extends({}, rest, {
    className: clsx(styles$8['sekai-sticky-note'], rest.className),
    sekai: sekai,
    themeMode: LIGHT_MODE
  }), /*#__PURE__*/React.createElement(StickyNoteContents, stickyNoteContentsProps)) : /*#__PURE__*/React.createElement(ListItemText, _extends({}, rest, {
    className: clsx(styles$8['sekai-sticky-note'], rest.className),
    sekai: sekai,
    themeMode: LIGHT_MODE
  }), /*#__PURE__*/React.createElement(StickyNoteContents, stickyNoteContentsProps));
};
var StickyNoteContents = function StickyNoteContents(_ref2) {
  var sekai = _ref2.sekai,
    children = _ref2.children;
  var _useOptionalSekai = useOptionalSekai({
      sekai: sekai
    }),
    sekaiColor = _useOptionalSekai.sekaiColor,
    isLight = _useOptionalSekai.isLight;
  var sekaiColorBg = convertHexToRgbaMixWithBlackOrWhite(sekaiColor, 0.6, isLight);
  var optionStyle = {
    '--sekai-color': sekaiColor,
    '--sekai-color-bg': sekaiColorBg
  };
  return /*#__PURE__*/React.createElement("div", {
    className: styles$8['sekai-sticky-note-parts'],
    style: optionStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$8['sekai-sticky-note-design']
  }), children);
};

var css_248z$7 = ".Loading-module_sekai-loading__5TQ0- {\n  position: relative;\n  width: 60px;\n  height: 60px;\n}\n\n.Loading-module_sekai-loading-circle__-viBM {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  background-color: var(--sekai-color);\n  border-radius: 50%;\n  animation: Loading-module_fade__vmfxA 1s infinite ease-in-out;\n  top: calc(50% - 5px);\n  left: calc(50% - 5px);\n  transform: translate(-50%, -50%);\n}\n\n.Loading-module_sekai-circle-animation-0__ZIW47 {\n  transform: rotate(0deg) translate(25px) rotate(0deg);\n  animation-delay: 0s;\n}\n\n.Loading-module_sekai-circle-animation-1__NDbw- {\n  transform: rotate(45deg) translate(25px) rotate(-45deg);\n  animation-delay: 0.125s;\n}\n\n.Loading-module_sekai-circle-animation-2__GJVZL {\n  transform: rotate(90deg) translate(25px) rotate(-90deg);\n  animation-delay: 0.25s;\n}\n\n.Loading-module_sekai-circle-animation-3__t-Eee {\n  transform: rotate(135deg) translate(25px) rotate(-135deg);\n  animation-delay: 0.375s;\n}\n\n.Loading-module_sekai-circle-animation-4__PMKBH {\n  transform: rotate(180deg) translate(25px) rotate(-180deg);\n  animation-delay: 0.5s;\n}\n\n.Loading-module_sekai-circle-animation-5__Wk-tp {\n  transform: rotate(225deg) translate(25px) rotate(-225deg);\n  animation-delay: 0.625s;\n}\n\n.Loading-module_sekai-circle-animation-6__P3Mdl {\n  transform: rotate(270deg) translate(25px) rotate(-270deg);\n  animation-delay: 0.75s;\n}\n\n.Loading-module_sekai-circle-animation-7__p8mxn {\n  transform: rotate(315deg) translate(25px) rotate(-315deg);\n  animation-delay: 0.875s;\n}\n\n@keyframes Loading-module_fade__vmfxA {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.3;\n  }\n}";
var styles$7 = {"sekai-loading":"Loading-module_sekai-loading__5TQ0-","sekai-loading-circle":"Loading-module_sekai-loading-circle__-viBM","fade":"Loading-module_fade__vmfxA","sekai-circle-animation-0":"Loading-module_sekai-circle-animation-0__ZIW47","sekai-circle-animation-1":"Loading-module_sekai-circle-animation-1__NDbw-","sekai-circle-animation-2":"Loading-module_sekai-circle-animation-2__GJVZL","sekai-circle-animation-3":"Loading-module_sekai-circle-animation-3__t-Eee","sekai-circle-animation-4":"Loading-module_sekai-circle-animation-4__PMKBH","sekai-circle-animation-5":"Loading-module_sekai-circle-animation-5__Wk-tp","sekai-circle-animation-6":"Loading-module_sekai-circle-animation-6__P3Mdl","sekai-circle-animation-7":"Loading-module_sekai-circle-animation-7__p8mxn"};
styleInject(css_248z$7);

function ownKeys$7(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$7(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$7(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$7(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Loading = function Loading(_ref) {
  var id = _ref.id,
    className = _ref.className,
    style = _ref.style,
    sekai = _ref.sekai;
  var _useOptionalSekai = useOptionalSekai({
      sekai: sekai
    }),
    sekaiColor = _useOptionalSekai.sekaiColor;
  var CIRCLE_COUNT = 8;
  var optionStyle = {
    '--sekai-color': sekaiColor
  };
  return /*#__PURE__*/React.createElement("div", {
    id: id,
    role: "status",
    "aria-live": "polite",
    className: clsx(styles$7['sekai-loading'], className),
    style: _objectSpread$7(_objectSpread$7({}, optionStyle), style)
  }, Array.from({
    length: CIRCLE_COUNT
  }, function (_, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: "circle-".concat(index),
      className: clsx(styles$7['sekai-loading-circle'], styles$7["sekai-circle-animation-".concat(index)])
    });
  }));
};

var css_248z$6 = "/* Styles for common color */\n/* Styles for z-index */\n/* Styles for common classes */\n.Pagination-module_sekai-text-light__Obn7V {\n  color: #212121;\n}\n\n.Pagination-module_sekai-text-dark__OkfFx {\n  color: #e0e0e0;\n}\n\n.Pagination-module_sekai-color-light__gu1aA {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.Pagination-module_sekai-color-dark__5GSQD {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.Pagination-module_sekai-overlay__4QFaE, .Pagination-module_sekai-overlay-dark__S8HQI, .Pagination-module_sekai-overlay-light__rka7x {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.Pagination-module_sekai-overlay-light__rka7x {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.Pagination-module_sekai-overlay-dark__S8HQI {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.Pagination-module_sekai-flex-center__yez1Q {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.Pagination-module_sekai-absolute-center__0zAbB {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.Pagination-module_sekai-invisible-scroll__HLRjP {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.Pagination-module_sekai-invisible-scroll__HLRjP::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.Pagination-module_sekai-mb-8__xiVFH {\n  margin-bottom: 8px;\n}\n\n.Pagination-module_sekai-mb-16__hTLYT {\n  margin-bottom: 16px;\n}\n\n.Pagination-module_sekai-mb-24__ZW1Ij {\n  margin-bottom: 24px;\n}\n\n.Pagination-module_text-xs__iHl0g {\n  font-size: 12px;\n}\n\n.Pagination-module_text-sm__vkX4a {\n  font-size: 14px;\n}\n\n.Pagination-module_text-base__EM7GS {\n  font-size: 16px;\n}\n\n.Pagination-module_text-lg__xg8nL {\n  font-size: 18px;\n}\n\n.Pagination-module_text-xl__O796R {\n  font-size: 20px;\n}\n\n.Pagination-module_text-2xl__SE5fG {\n  font-size: 24px;\n}\n\n.Pagination-module_text-base-bold__Db995 {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.Pagination-module_text-lg-bold__YdaBK {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.Pagination-module_text-xl-bold__RPvbr {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.Pagination-module_text-2xl-bold__Q2DmQ {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.Pagination-module_font-bold__ae0Bz {\n  font-weight: bold;\n}\n\n.Pagination-module_sekai-pagination__LNnaw, .Pagination-module_sekai-pagination-large__ETji3, .Pagination-module_sekai-pagination-medium__1E5zN, .Pagination-module_sekai-pagination-small__XYKO0 {\n  display: flex;\n  gap: 4px;\n  align-items: center;\n}\n\n.Pagination-module_sekai-pagination-small__XYKO0 {\n  height: 30px;\n}\n\n.Pagination-module_sekai-pagination-medium__1E5zN {\n  height: 40px;\n}\n\n.Pagination-module_sekai-pagination-large__ETji3 {\n  height: 50px;\n}\n\n.Pagination-module_sekai-pagination-button__bR7rG, .Pagination-module_sekai-pagination-button-large__61FQR, .Pagination-module_sekai-pagination-button-medium__LKFZn, .Pagination-module_sekai-pagination-button-small__MjCX8 {\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: inherit;\n  border: none;\n}\n.Pagination-module_sekai-pagination-button__bR7rG:hover, .Pagination-module_sekai-pagination-button-large__61FQR:hover, .Pagination-module_sekai-pagination-button-medium__LKFZn:hover, .Pagination-module_sekai-pagination-button-small__MjCX8:hover {\n  background-color: var(--sekai-color-hover);\n}\n.Pagination-module_sekai-pagination-button__bR7rG:focus-visible, .Pagination-module_sekai-pagination-button-large__61FQR:focus-visible, .Pagination-module_sekai-pagination-button-medium__LKFZn:focus-visible, .Pagination-module_sekai-pagination-button-small__MjCX8:focus-visible {\n  outline: 1px solid var(--sekai-color);\n}\n\n.Pagination-module_sekai-pagination-arrow__81Vfy {\n  width: 60%;\n  height: 60%;\n}\n\n.Pagination-module_sekai-pagination-button-small__MjCX8 {\n  width: 30px;\n  height: 30px;\n}\n\n.Pagination-module_sekai-pagination-button-medium__LKFZn {\n  font-size: 1rem;\n  width: 40px;\n  height: 40px;\n}\n\n.Pagination-module_sekai-pagination-button-large__61FQR {\n  font-size: 1.25rem;\n  width: 50px;\n  height: 50px;\n}\n\n.Pagination-module_sekai-color-light__gu1aA {\n  color: #212121;\n}\n\n.Pagination-module_sekai-color-dark__5GSQD {\n  color: #e0e0e0;\n}\n\n.Pagination-module_sekai-pagination-selected__9fupk {\n  font-weight: bold;\n  color: var(--sekai-color);\n}\n\n.Pagination-module_sekai-pagination-ellipsis__464KL {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  aspect-ratio: 1;\n}";
var styles$6 = {"sekai-text-light":"Pagination-module_sekai-text-light__Obn7V","sekai-text-dark":"Pagination-module_sekai-text-dark__OkfFx","sekai-color-light":"Pagination-module_sekai-color-light__gu1aA","sekai-color-dark":"Pagination-module_sekai-color-dark__5GSQD","sekai-overlay":"Pagination-module_sekai-overlay__4QFaE","sekai-overlay-dark":"Pagination-module_sekai-overlay-dark__S8HQI","sekai-overlay-light":"Pagination-module_sekai-overlay-light__rka7x","sekai-flex-center":"Pagination-module_sekai-flex-center__yez1Q","sekai-absolute-center":"Pagination-module_sekai-absolute-center__0zAbB","sekai-invisible-scroll":"Pagination-module_sekai-invisible-scroll__HLRjP","sekai-mb-8":"Pagination-module_sekai-mb-8__xiVFH","sekai-mb-16":"Pagination-module_sekai-mb-16__hTLYT","sekai-mb-24":"Pagination-module_sekai-mb-24__ZW1Ij","text-xs":"Pagination-module_text-xs__iHl0g","text-sm":"Pagination-module_text-sm__vkX4a","text-base":"Pagination-module_text-base__EM7GS","text-lg":"Pagination-module_text-lg__xg8nL","text-xl":"Pagination-module_text-xl__O796R","text-2xl":"Pagination-module_text-2xl__SE5fG","text-base-bold":"Pagination-module_text-base-bold__Db995","text-lg-bold":"Pagination-module_text-lg-bold__YdaBK","text-xl-bold":"Pagination-module_text-xl-bold__RPvbr","text-2xl-bold":"Pagination-module_text-2xl-bold__Q2DmQ","font-bold":"Pagination-module_font-bold__ae0Bz","sekai-pagination":"Pagination-module_sekai-pagination__LNnaw","sekai-pagination-large":"Pagination-module_sekai-pagination-large__ETji3","sekai-pagination-medium":"Pagination-module_sekai-pagination-medium__1E5zN","sekai-pagination-small":"Pagination-module_sekai-pagination-small__XYKO0","sekai-pagination-button":"Pagination-module_sekai-pagination-button__bR7rG","sekai-pagination-button-large":"Pagination-module_sekai-pagination-button-large__61FQR","sekai-pagination-button-medium":"Pagination-module_sekai-pagination-button-medium__LKFZn","sekai-pagination-button-small":"Pagination-module_sekai-pagination-button-small__MjCX8","sekai-pagination-arrow":"Pagination-module_sekai-pagination-arrow__81Vfy","sekai-pagination-selected":"Pagination-module_sekai-pagination-selected__9fupk","sekai-pagination-ellipsis":"Pagination-module_sekai-pagination-ellipsis__464KL"};
styleInject(css_248z$6);

var _excluded$6 = ["sekai", "themeMode", "count", "page", "onChangePage", "siblingCount", "size"],
  _excluded2$1 = ["size", "isPrev", "onClick"];
function ownKeys$6(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$6(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$6(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$6(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var PaginationConstants = {
  PageTop: 0,
  Ellipsis: -1,
  BorderItemRange: 2,
  DefaultSiblingCount: 1
};
var Pagination = function Pagination(_ref) {
  var sekai = _ref.sekai,
    themeMode = _ref.themeMode,
    count = _ref.count,
    page = _ref.page,
    onChangePage = _ref.onChangePage,
    _ref$siblingCount = _ref.siblingCount,
    siblingCount = _ref$siblingCount === void 0 ? PaginationConstants.DefaultSiblingCount : _ref$siblingCount,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'medium' : _ref$size,
    rest = _objectWithoutProperties(_ref, _excluded$6);
  var _useOptionalSekai = useOptionalSekai({
      sekai: sekai,
      mode: themeMode
    }),
    sekaiColor = _useOptionalSekai.sekaiColor,
    modeTheme = _useOptionalSekai.modeTheme,
    isLight = _useOptionalSekai.isLight;
  var sekaiColorHover = convertHexToRgba(sekaiColor, isLight ? 0.2 : 0.4);
  var optionStyle = {
    '--sekai-color': sekaiColor,
    '--sekai-color-hover': sekaiColorHover
  };
  var _usePaginagion = usePaginagion({
      count: count,
      page: page,
      onChangePage: onChangePage,
      siblingCount: siblingCount
    }),
    currentPage = _usePaginagion.currentPage,
    handleChangePage = _usePaginagion.handleChangePage,
    handlePrevPage = _usePaginagion.handlePrevPage,
    handleNextPage = _usePaginagion.handleNextPage,
    rangePagination = _usePaginagion.rangePagination;
  var ctrlButtonProps = {
    sekai: sekai,
    themeMode: themeMode,
    size: size
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: clsx(styles$6["sekai-pagination-".concat(size)], rest.className),
    style: _objectSpread$6(_objectSpread$6({}, optionStyle), rest.style)
  }), /*#__PURE__*/React.createElement(CtrlButton, _extends({}, ctrlButtonProps, {
    isPrev: true,
    onClick: handlePrevPage
  })), rangePagination.map(function (item, index) {
    if (item === PaginationConstants.Ellipsis) {
      return /*#__PURE__*/React.createElement("span", {
        key: index,
        className: styles$6['sekai-pagination-ellipsis']
      }, '...');
    }
    return /*#__PURE__*/React.createElement("button", {
      key: index,
      className: clsx(styles$6["sekai-pagination-button-".concat(size)], styles$6["sekai-color-".concat(modeTheme)], _defineProperty({}, styles$6["sekai-pagination-selected"], item === currentPage)),
      onClick: function onClick() {
        return handleChangePage(item);
      }
    }, item + 1);
  }), /*#__PURE__*/React.createElement(CtrlButton, _extends({}, ctrlButtonProps, {
    isPrev: false,
    onClick: handleNextPage
  })));
};
var CtrlButton = function CtrlButton(_ref2) {
  var size = _ref2.size,
    isPrev = _ref2.isPrev,
    onClick = _ref2.onClick,
    rest = _objectWithoutProperties(_ref2, _excluded2$1);
  var vector = isPrev ? 'left' : 'right';
  return /*#__PURE__*/React.createElement("button", {
    className: clsx(styles$6["sekai-pagination-button-".concat(size)]),
    onClick: onClick
  }, /*#__PURE__*/React.createElement(ArrowSvg, _extends({}, rest, {
    vector: vector,
    className: styles$6['sekai-pagination-arrow']
  })));
};
var usePaginagion = function usePaginagion(_ref3) {
  var count = _ref3.count,
    page = _ref3.page,
    onChangePage = _ref3.onChangePage,
    _ref3$siblingCount = _ref3.siblingCount,
    siblingCount = _ref3$siblingCount === void 0 ? PaginationConstants.DefaultSiblingCount : _ref3$siblingCount;
  var pageLastIndex = useMemo(function () {
    return count - 1;
  }, [count]);
  var _useState = useState(page !== null && page !== void 0 ? page : PaginationConstants.PageTop),
    _useState2 = _slicedToArray(_useState, 2),
    currentPage = _useState2[0],
    setCurrentPage = _useState2[1];
  var handleChangePage = useCallback(function (page) {
    if (PaginationConstants.PageTop > page || page > pageLastIndex || page === PaginationConstants.Ellipsis) {
      return;
    }
    setCurrentPage(page);
    onChangePage === null || onChangePage === void 0 || onChangePage(page);
  }, [pageLastIndex, onChangePage]);
  var handlePrevPage = function handlePrevPage() {
    return handleChangePage(currentPage - 1);
  };
  var handleNextPage = function handleNextPage() {
    return handleChangePage(currentPage + 1);
  };
  // Calculate the left and right sibling indices,
  // and whether to show ellipses on the left and right sides.
  var _useMemo = useMemo(function () {
      var left = Math.max(currentPage - siblingCount, PaginationConstants.PageTop + PaginationConstants.BorderItemRange);
      var right = Math.min(currentPage + siblingCount, pageLastIndex - PaginationConstants.BorderItemRange);
      return [left, right, left > PaginationConstants.PageTop + PaginationConstants.BorderItemRange, right < pageLastIndex - PaginationConstants.BorderItemRange];
    }, [currentPage, siblingCount, pageLastIndex]),
    _useMemo2 = _slicedToArray(_useMemo, 4),
    leftSiblingIndex = _useMemo2[0],
    rightSiblingIndex = _useMemo2[1],
    isBorderLeftEllipsis = _useMemo2[2],
    isBorderRightEllipsis = _useMemo2[3];
  // Total number of pagination items to display:
  // 2 items at each end + siblings on both sides + the current page
  var dispItemsCount = useMemo(function () {
    return 2 * 2 + siblingCount * 2 + 1;
  }, [siblingCount]);
  var isEdgeIndex = useCallback(function (idx) {
    return PaginationConstants.BorderItemRange + siblingCount > idx || pageLastIndex - PaginationConstants.BorderItemRange - siblingCount < idx;
  }, [pageLastIndex, siblingCount]);
  // Function to calculate the middle range of pagination
  var calculateMiddleRange = useCallback(function () {
    if (isEdgeIndex(currentPage)) {
      var halfDisplayRange = Math.floor(Math.min(dispItemsCount, count - 1) / 2);
      var leftEdge = halfDisplayRange >= currentPage ? Math.max(2, halfDisplayRange - siblingCount) : Math.min(pageLastIndex - 2, Math.max(pageLastIndex - halfDisplayRange - siblingCount, halfDisplayRange));
      return Array.from({
        length: Math.min(pageLastIndex - 1, leftEdge + 1 + siblingCount * 2) - leftEdge
      }, function (_, i) {
        return leftEdge + i;
      });
    } else {
      return Array.from({
        length: rightSiblingIndex - leftSiblingIndex + 1
      }, function (_, i) {
        return leftSiblingIndex + i;
      });
    }
  }, [currentPage, siblingCount, count, dispItemsCount, isEdgeIndex, leftSiblingIndex, rightSiblingIndex, pageLastIndex]);
  // Final range builder
  var rangePagination = useMemo(function () {
    if (count <= PaginationConstants.BorderItemRange * 2 + 1) return Array.from({
      length: count
    }, function (_, i) {
      return i;
    });
    return [PaginationConstants.PageTop].concat(_toConsumableArray(isBorderLeftEllipsis && dispItemsCount < count ? [PaginationConstants.Ellipsis] : [PaginationConstants.PageTop + 1]), _toConsumableArray(calculateMiddleRange()), _toConsumableArray(isBorderRightEllipsis && dispItemsCount < count ? [PaginationConstants.Ellipsis] : [pageLastIndex - 1]), [pageLastIndex]);
  }, [count, pageLastIndex, dispItemsCount, isBorderLeftEllipsis, isBorderRightEllipsis, calculateMiddleRange]);
  return {
    currentPage: currentPage,
    handleChangePage: handleChangePage,
    handlePrevPage: handlePrevPage,
    handleNextPage: handleNextPage,
    rangePagination: rangePagination
  };
};

/**
 * @description Utility functions for serializing and deserializing data, including handling of Date objects.
 * @param {T} data - The data to serialize
 * @param {WeakSet<object>} visited - A WeakSet to track visited objects for circular reference detection
 * @returns {unknown} - The serialized data
 */
var serializeData = function serializeData(data) {
  var visited = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new WeakSet();
  // If data is Date instance, convert to ISO string
  if (data instanceof Date) {
    return data.toISOString();
  }
  // If data is an array, recursively serialize each element
  if (Array.isArray(data)) {
    return serializeArray(data, visited);
  }
  // If data is an object, recursively serialize each property
  if (data && _typeof(data) === 'object') {
    return serializeObject(data, visited);
  }
  // For other primitive types, return as is
  return data;
};
/**
 * @description Deserialize data, converting ISO date strings back to Date objects
 * @param {unknown} data - data to deserialize
 * @param {WeakSet<object>} visited - A WeakSet to track visited objects for circular reference detection
 * @returns {unknown} - The deserialized data
 */
var deserializeData = function deserializeData(data) {
  var visited = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new WeakSet();
  // If data is a string and looks like an ISO date, convert to Date
  if (typeof data === 'string') {
    return deserializeDate(data);
  }
  // If data is an array, recursively deserialize each element
  if (Array.isArray(data)) {
    return deserializeArray(data, visited);
  }
  // If data is an object, recursively deserialize each property
  if (data != null && _typeof(data) === 'object') {
    return deserializeObject(data, visited);
  }
  // For other primitive types, return as is
  return data;
};
var deserializeDataWithTemplate = function deserializeDataWithTemplate(obj, template) {
  var visited = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new WeakSet();
  // If template is Date instance, and obj is string, convert to Date
  if (template instanceof Date && typeof obj === 'string') {
    return deserializeDateWithTemplate(obj);
  }
  // If template is an array, recursively temp each element
  if (Array.isArray(template)) {
    return deserializeArrayWithTemplate(obj, template, visited);
  }
  // If template is an object, recursively deserialize each property
  if (_typeof(template) === 'object') {
    return deserializeObjectWithTemplate(obj, template, visited);
  }
  // For other primitive types, return obj if same type, else template
  return obj;
};
/**
 * @description Validates if a string is a valid date string (ISO 8601 or other formats recognized by Date.parse)
 * @param dateStr - date string to validate
 * @returns boolean - whether the string is a valid date string
 */
var isValidDateString = function isValidDateString(dateStr) {
  var isoRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z?$/;
  return isoRegex.test(dateStr.trim()) || !isNaN(Date.parse(dateStr));
};
// For searializeData start
// Helper function to searialize array
var serializeArray = function serializeArray(obj, visited) {
  if (Array.isArray(obj)) {
    if (visited.has(obj)) {
      throw new Error('Circular reference detected during serializeData');
    }
    visited.add(obj);
    var result = obj.map(function (el) {
      return serializeData(el, visited);
    });
    visited["delete"](obj);
    return result;
  }
  return obj;
};
// Helper function to searialize object
var serializeObject = function serializeObject(obj, visited) {
  if (visited.has(obj)) {
    throw new Error('Circular reference detected during deserialization');
  }
  if (obj instanceof Map || obj instanceof Set) {
    ConsoleWarning('Map and Set are not supported for serialization. They will be converted to empty objects.');
  }
  if (isObject(obj)) {
    var serializedObj = {};
    for (var _i = 0, _Object$entries = Object.entries(obj); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];
      serializedObj[key] = serializeData(value);
    }
    return serializedObj;
  }
  return obj;
};
// For searializeData end
// For deserualizeData start
// Helper function to desearialize date
var deserializeDate = function deserializeDate(obj) {
  try {
    var dateDeserialized = new Date(obj);
    // Check if the date is valid
    if (!isNaN(dateDeserialized.getTime()) && obj.trim() !== '' && isValidDateString(obj)) {
      return dateDeserialized;
    }
    return obj;
  } catch (err) {
    throw new Error('Failed to parse date:' + err.message);
  }
};
// Helper function to deserialize array
var deserializeArray = function deserializeArray(obj, visited) {
  if (visited.has(obj)) {
    throw new Error('Circular reference detected during deserialization');
  }
  if (!Array.isArray(obj)) {
    return obj;
  }
  visited.add(obj);
  for (var i = 0; i < obj.length; i++) {
    var deserializedElement = deserializeData(obj[i], visited);
    if (deserializedElement !== obj[i]) {
      var result = obj.slice(0, i);
      result[i] = deserializedElement;
      for (var j = i + 1; j < obj.length; j++) {
        result[j] = deserializeData(obj[j], visited);
      }
      visited["delete"](obj);
      return result;
    }
  }
  visited["delete"](obj);
  return obj;
};
// Helper function to deserialize object
var deserializeObject = function deserializeObject(obj, visited) {
  if (!isObject(obj)) {
    return obj;
  }
  if (visited.has(obj)) {
    throw new Error('Circular reference detected during deserialization');
  }
  visited.add(obj);
  var entries = Object.entries(obj);
  for (var i = 0; i < entries.length; i++) {
    var _entries$i = _slicedToArray(entries[i], 2),
      key = _entries$i[0],
      value = _entries$i[1];
    var deserializedValue = deserializeData(value, visited);
    if (deserializedValue !== value) {
      var deserializedObj = {};
      for (var j = 0; j < i; j++) {
        var _entries$j = _slicedToArray(entries[j], 2),
          prevKey = _entries$j[0],
          prevValue = _entries$j[1];
        deserializedObj[prevKey] = prevValue;
      }
      deserializedObj[key] = deserializedValue;
      for (var _j = i + 1; _j < entries.length; _j++) {
        var _entries$_j = _slicedToArray(entries[_j], 2),
          remainingKey = _entries$_j[0],
          remainingValue = _entries$_j[1];
        deserializedObj[remainingKey] = deserializeData(remainingValue, visited);
      }
      visited["delete"](obj);
      return deserializedObj;
    }
  }
  visited["delete"](obj);
  return obj;
};
// For deserualizeData end
// For deserializeDataWithTemplate start
// Helper function to deserialize date with template
var deserializeDateWithTemplate = function deserializeDateWithTemplate(obj) {
  try {
    var date = new Date(obj);
    // Check if the date is valid
    if (!isNaN(date.getTime()) && obj.trim() !== '' && isValidDateString(obj)) {
      return date;
    }
    return obj;
  } catch (err) {
    throw new Error('Failed to parse date:' + err.message);
  }
};
// Helper function to deserialize array with template
var deserializeArrayWithTemplate = function deserializeArrayWithTemplate(obj, template, visited) {
  var templateArray = template;
  if (visited.has(obj)) {
    throw new Error('Circular reference detected during deserialization with template');
  }
  if (!Array.isArray(obj)) {
    return obj;
  }
  if (templateArray.length === 0) {
    return obj;
  }
  visited.add(obj);
  var result = obj.map(function (el, index) {
    var _templateArray$index;
    var templateItem = (_templateArray$index = templateArray[index]) !== null && _templateArray$index !== void 0 ? _templateArray$index : templateArray[0];
    return deserializeDataWithTemplate(el, templateItem, visited);
  });
  visited["delete"](obj);
  return result;
};
// Helper function to deserialize object with template
var deserializeObjectWithTemplate = function deserializeObjectWithTemplate(obj, template, visited) {
  if (!isObject(obj)) {
    return obj;
  }
  if (visited.has(obj)) {
    throw new Error('Circular reference detected during deserialization with template');
  }
  visited.add(obj);
  var deserializedObj = {};
  for (var key in template) {
    if (key in template) {
      deserializedObj[key] = deserializeDataWithTemplate(obj[key], template[key], visited);
    }
  }
  visited["delete"](obj);
  return deserializedObj;
};
// For deserializeDataWithTemplate end
var isObject = function isObject(value) {
  return value !== null && _typeof(value) === 'object' && !Array.isArray(value);
};

var useSessionStorage = function useSessionStorage(_ref) {
  var sessionStorageKey = _ref.sessionStorageKey,
    initialValue = _ref.initialValue;
  var isClient = useRef(typeof window !== 'undefined');
  var _useState = useState(function () {
      if (!isClient.current) return initialValue;
      try {
        var items = sessionStorage.getItem(sessionStorageKey);
        if (items) {
          return deserializeDataWithTemplate(JSON.parse(items), initialValue);
        }
      } catch (err) {
        ConsoleError('Failed to get session storage value : ', err);
      }
      return initialValue;
    }),
    _useState2 = _slicedToArray(_useState, 2),
    storedValue = _useState2[0],
    setStoredValue = _useState2[1];
  useEffect(function () {
    if (!isClient.current) return;
    try {
      var serialized = JSON.stringify(serializeData(storedValue));
      sessionStorage.setItem(sessionStorageKey, serialized);
    } catch (err) {
      ConsoleError('Failed to set session storage : ', err);
    }
  }, [storedValue]);
  var deleteSessionStorage = function deleteSessionStorage() {
    setStoredValue(initialValue);
    sessionStorage.removeItem(sessionStorageKey);
  };
  return {
    storedValue: storedValue,
    setStoredValue: setStoredValue,
    deleteSessionStorage: deleteSessionStorage
  };
};

var createSharedValueProvider = function createSharedValueProvider() {
  var SharedValueContext = /*#__PURE__*/createContext(null);
  var useSharedValueContext = function useSharedValueContext() {
    var context = useContext(SharedValueContext);
    if (!context) {
      throw new Error('useSharedValueContext must be used within a SharedValueProvider.');
    }
    return context;
  };
  var SharedValueProvider = function SharedValueProvider(_ref) {
    var children = _ref.children,
      sessionStorageKey = _ref.sessionStorageKey,
      defaultValue = _ref.defaultValue;
    var _useSessionStorage = useSessionStorage({
        sessionStorageKey: sessionStorageKey,
        initialValue: defaultValue
      }),
      sharedValue = _useSessionStorage.storedValue,
      setSharedValue = _useSessionStorage.setStoredValue,
      deleteSharedValue = _useSessionStorage.deleteSessionStorage;
    return /*#__PURE__*/React.createElement(SharedValueContext.Provider, {
      value: {
        sharedValue: sharedValue,
        setSharedValue: setSharedValue,
        deleteSharedValue: deleteSharedValue
      }
    }, children);
  };
  return {
    useSharedValueContext: useSharedValueContext,
    SharedValueProvider: SharedValueProvider
  };
};

var css_248z$5 = "/* Styles for common color */\n/* Styles for z-index */\n/* Styles for common classes */\n.Checkbox-module_sekai-text-light__DUgyk {\n  color: #212121;\n}\n\n.Checkbox-module_sekai-text-dark__LCv2O {\n  color: #e0e0e0;\n}\n\n.Checkbox-module_sekai-color-light__qlVq6 {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.Checkbox-module_sekai-color-dark__AHLNI {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.Checkbox-module_sekai-overlay__GEBT5, .Checkbox-module_sekai-overlay-dark__RPWW9, .Checkbox-module_sekai-overlay-light__g3rBu {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.Checkbox-module_sekai-overlay-light__g3rBu {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.Checkbox-module_sekai-overlay-dark__RPWW9 {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.Checkbox-module_sekai-flex-center__hFXuD {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.Checkbox-module_sekai-absolute-center__1e1hE {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.Checkbox-module_sekai-invisible-scroll__hrf2o {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.Checkbox-module_sekai-invisible-scroll__hrf2o::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.Checkbox-module_sekai-mb-8__zO47l {\n  margin-bottom: 8px;\n}\n\n.Checkbox-module_sekai-mb-16__uTvTi {\n  margin-bottom: 16px;\n}\n\n.Checkbox-module_sekai-mb-24__tjJxW {\n  margin-bottom: 24px;\n}\n\n.Checkbox-module_text-xs__Nlqrk {\n  font-size: 12px;\n}\n\n.Checkbox-module_text-sm__I6UFl {\n  font-size: 14px;\n}\n\n.Checkbox-module_text-base__xUGA7 {\n  font-size: 16px;\n}\n\n.Checkbox-module_text-lg__TZnfi {\n  font-size: 18px;\n}\n\n.Checkbox-module_text-xl__DPkXK {\n  font-size: 20px;\n}\n\n.Checkbox-module_text-2xl__47RwK {\n  font-size: 24px;\n}\n\n.Checkbox-module_text-base-bold__mTmlx {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.Checkbox-module_text-lg-bold__d4F1U {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.Checkbox-module_text-xl-bold__XHtqY {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.Checkbox-module_text-2xl-bold__eT9eD {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.Checkbox-module_font-bold__Q-ckX {\n  font-weight: bold;\n}\n\n.Checkbox-module_sekai-checkbox__-Q41X {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.Checkbox-module_sekai-checkbox__-Q41X input[type=checkbox] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  box-sizing: border-box;\n  width: 16px;\n  height: 16px;\n  border: 2px solid black;\n  border-radius: 0.25rem;\n  position: relative;\n  margin: 6px;\n  cursor: pointer;\n  border-color: var(--sekai-color);\n}\n.Checkbox-module_sekai-checkbox__-Q41X input[type=checkbox].Checkbox-module_sekai-checkbox-filling__p8zr9:checked {\n  background-color: var(--sekai-color);\n}\n.Checkbox-module_sekai-checkbox__-Q41X input[type=checkbox].Checkbox-module_sekai-checkbox-filling__p8zr9:checked.Checkbox-module_sekai-checkbox-light__-G9ec::after {\n  content: \"\";\n  position: absolute;\n  box-sizing: content-box;\n  top: 0px;\n  left: 3px;\n  width: 4px;\n  height: 9px;\n  border-right: 2px solid #ffffff;\n  border-bottom: 2px solid #ffffff;\n  transform: rotate(45deg);\n}\n.Checkbox-module_sekai-checkbox__-Q41X input[type=checkbox].Checkbox-module_sekai-checkbox-filling__p8zr9:checked.Checkbox-module_sekai-checkbox-dark__WhBF6::after {\n  content: \"\";\n  position: absolute;\n  box-sizing: content-box;\n  top: 0px;\n  left: 3px;\n  width: 4px;\n  height: 9px;\n  border-right: 2px solid #121212;\n  border-bottom: 2px solid #121212;\n  transform: rotate(45deg);\n}\n.Checkbox-module_sekai-checkbox__-Q41X input[type=checkbox]:checked:not(.Checkbox-module_sekai-checkbox-filling__p8zr9)::after {\n  content: \"\";\n  position: absolute;\n  box-sizing: content-box;\n  top: 0px;\n  left: 3px;\n  width: 4px;\n  height: 9px;\n  border-right: 2px solid var(--sekai-color);\n  border-bottom: 2px solid var(--sekai-color);\n  transform: rotate(45deg);\n}\n.Checkbox-module_sekai-checkbox__-Q41X input[type=checkbox]:disabled {\n  opacity: 0.4;\n}\n.Checkbox-module_sekai-checkbox__-Q41X input[type=checkbox]:hover:not(:disabled):not(:checked) {\n  background-color: var(--sekai-color-hover);\n}\n.Checkbox-module_sekai-checkbox__-Q41X input[type=checkbox]:focus:not(:disabled) {\n  outline: 1px solid var(--sekai-color);\n}";
var styles$5 = {"sekai-text-light":"Checkbox-module_sekai-text-light__DUgyk","sekai-text-dark":"Checkbox-module_sekai-text-dark__LCv2O","sekai-color-light":"Checkbox-module_sekai-color-light__qlVq6","sekai-color-dark":"Checkbox-module_sekai-color-dark__AHLNI","sekai-overlay":"Checkbox-module_sekai-overlay__GEBT5","sekai-overlay-dark":"Checkbox-module_sekai-overlay-dark__RPWW9","sekai-overlay-light":"Checkbox-module_sekai-overlay-light__g3rBu","sekai-flex-center":"Checkbox-module_sekai-flex-center__hFXuD","sekai-absolute-center":"Checkbox-module_sekai-absolute-center__1e1hE","sekai-invisible-scroll":"Checkbox-module_sekai-invisible-scroll__hrf2o","sekai-mb-8":"Checkbox-module_sekai-mb-8__zO47l","sekai-mb-16":"Checkbox-module_sekai-mb-16__uTvTi","sekai-mb-24":"Checkbox-module_sekai-mb-24__tjJxW","text-xs":"Checkbox-module_text-xs__Nlqrk","text-sm":"Checkbox-module_text-sm__I6UFl","text-base":"Checkbox-module_text-base__xUGA7","text-lg":"Checkbox-module_text-lg__TZnfi","text-xl":"Checkbox-module_text-xl__DPkXK","text-2xl":"Checkbox-module_text-2xl__47RwK","text-base-bold":"Checkbox-module_text-base-bold__mTmlx","text-lg-bold":"Checkbox-module_text-lg-bold__d4F1U","text-xl-bold":"Checkbox-module_text-xl-bold__XHtqY","text-2xl-bold":"Checkbox-module_text-2xl-bold__eT9eD","font-bold":"Checkbox-module_font-bold__Q-ckX","sekai-checkbox":"Checkbox-module_sekai-checkbox__-Q41X","sekai-checkbox-filling":"Checkbox-module_sekai-checkbox-filling__p8zr9","sekai-checkbox-light":"Checkbox-module_sekai-checkbox-light__-G9ec","sekai-checkbox-dark":"Checkbox-module_sekai-checkbox-dark__WhBF6"};
styleInject(css_248z$5);

var _excluded$5 = ["sekai", "themeMode", "checked", "disabled", "onChange", "filling"];
function ownKeys$5(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$5(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$5(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$5(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Checkbox = function Checkbox(_ref) {
  var sekai = _ref.sekai,
    themeMode = _ref.themeMode,
    checked = _ref.checked,
    disabled = _ref.disabled,
    onChange = _ref.onChange,
    filling = _ref.filling,
    rest = _objectWithoutProperties(_ref, _excluded$5);
  var _useOptionalSekai = useOptionalSekai({
      sekai: sekai,
      mode: themeMode
    }),
    sekaiColor = _useOptionalSekai.sekaiColor,
    modeTheme = _useOptionalSekai.modeTheme,
    isLight = _useOptionalSekai.isLight;
  var sekaiColorHover = convertHexToRgba(sekaiColor, isLight ? 0.3 : 0.4);
  var optionStyle = {
    '--sekai-color': sekaiColor,
    '--sekai-color-hover': sekaiColorHover
  };
  var handleChange = function handleChange(e) {
    onChange === null || onChange === void 0 || onChange(e.target.checked);
  };
  return /*#__PURE__*/React.createElement("label", {
    className: clsx(styles$5['sekai-checkbox'], rest.className),
    style: _objectSpread$5(_objectSpread$5({}, optionStyle), rest.style)
  }, /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    tabIndex: Boolean(disabled) ? -1 : 0,
    type: "checkbox",
    className: clsx(styles$5["sekai-checkbox-".concat(modeTheme)], _defineProperty({}, styles$5['sekai-checkbox-filling'], filling)),
    checked: Boolean(checked),
    "aria-checked": Boolean(checked),
    disabled: Boolean(disabled),
    onChange: handleChange
  })));
};

var css_248z$4 = "/* Styles for common color */\n/* Styles for z-index */\n/* Styles for common classes */\n.TypewriterText-module_sekai-text-light__Sx-n9 {\n  color: #212121;\n}\n\n.TypewriterText-module_sekai-text-dark__P0wVQ {\n  color: #e0e0e0;\n}\n\n.TypewriterText-module_sekai-color-light__bVnJI {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.TypewriterText-module_sekai-color-dark__HJbrP {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.TypewriterText-module_sekai-overlay__-lzrM, .TypewriterText-module_sekai-overlay-dark__7hUIO, .TypewriterText-module_sekai-overlay-light__PjZKq {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.TypewriterText-module_sekai-overlay-light__PjZKq {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.TypewriterText-module_sekai-overlay-dark__7hUIO {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.TypewriterText-module_sekai-flex-center__dVus9 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.TypewriterText-module_sekai-absolute-center__ME29Z {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.TypewriterText-module_sekai-invisible-scroll__AZagQ {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.TypewriterText-module_sekai-invisible-scroll__AZagQ::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.TypewriterText-module_sekai-mb-8__CAcYx {\n  margin-bottom: 8px;\n}\n\n.TypewriterText-module_sekai-mb-16__dM3Ay {\n  margin-bottom: 16px;\n}\n\n.TypewriterText-module_sekai-mb-24__MqGyW {\n  margin-bottom: 24px;\n}\n\n.TypewriterText-module_text-xs__1dhCg {\n  font-size: 12px;\n}\n\n.TypewriterText-module_text-sm__FNU0B {\n  font-size: 14px;\n}\n\n.TypewriterText-module_text-base__-r-1J {\n  font-size: 16px;\n}\n\n.TypewriterText-module_text-lg__pO6vg {\n  font-size: 18px;\n}\n\n.TypewriterText-module_text-xl__UqGRQ {\n  font-size: 20px;\n}\n\n.TypewriterText-module_text-2xl__7RtAf {\n  font-size: 24px;\n}\n\n.TypewriterText-module_text-base-bold__kpRuH {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.TypewriterText-module_text-lg-bold__ajzsO {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.TypewriterText-module_text-xl-bold__de9Ta {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.TypewriterText-module_text-2xl-bold__TZAt0 {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.TypewriterText-module_font-bold__Ft6ZJ {\n  font-weight: bold;\n}\n\n.TypewriterText-module_sekai-typewrite-text__4UZ97 {\n  position: relative;\n}\n\n.TypewriterText-module_sekai-cursor__xlzQC::after {\n  content: \"|\";\n  position: absolute;\n  animation: TypewriterText-module_blink__IXn6G 1s step-start 0s infinite;\n  margin-left: 2px;\n  color: var(--sekai-color);\n}\n\n@keyframes TypewriterText-module_blink__IXn6G {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}";
var styles$4 = {"sekai-typewrite-text":"TypewriterText-module_sekai-typewrite-text__4UZ97","sekai-cursor":"TypewriterText-module_sekai-cursor__xlzQC"};
styleInject(css_248z$4);

var _excluded$4 = ["sekai", "themeMode", "text", "options"];
function ownKeys$4(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$4(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$4(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var defaultOptions = {
  speed: 100,
  loop: false,
  cursor: true
};
var TypewriterText = function TypewriterText(_ref) {
  var sekai = _ref.sekai,
    themeMode = _ref.themeMode,
    text = _ref.text,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? defaultOptions : _ref$options,
    rest = _objectWithoutProperties(_ref, _excluded$4);
  var _useOptionalSekai = useOptionalSekai({
      sekai: sekai,
      mode: themeMode
    }),
    sekaiColor = _useOptionalSekai.sekaiColor;
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    displayText = _useState2[0],
    setDisplayText = _useState2[1];
  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    currentIndex = _useState4[0],
    setCurrentIndex = _useState4[1];
  var viewCursor = useMemo(function () {
    return options.cursor && displayText.length < text.length;
  }, [displayText, text, options.cursor]);
  useEffect(function () {
    setDisplayText('');
    var typewriteInterval = setInterval(function () {
      setCurrentIndex(function (prevIndex) {
        if (prevIndex >= text.length - 1) {
          if (options.loop) {
            setDisplayText('');
            return 0;
          } else {
            clearInterval(typewriteInterval);
            return prevIndex;
          }
        }
        return prevIndex + 1;
      });
    }, options.speed);
    return function () {
      return clearInterval(typewriteInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(function () {
    setDisplayText(function (pre) {
      return pre + text[currentIndex];
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);
  var optionStyle = {
    '--sekai-color': sekaiColor
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: clsx(styles$4['sekai-typewrite-text'], _defineProperty({}, styles$4['sekai-cursor'], viewCursor), rest.className),
    style: _objectSpread$4(_objectSpread$4({}, optionStyle), rest.style)
  }), displayText);
};

var VIEW_BREAKPOINT_PORTRAIT = 768;
var VIEW_BREAKPOINT_TABLET = 1280;
var ORIENTATION = {
  PORTRAIT: 'PORTRAIT',
  LANDSCAPE: 'LANDSCAPE'
};
var useInnerSize = function useInnerSize() {
  var _document;
  var isClient = typeof window !== 'undefined' && typeof ((_document = document) === null || _document === void 0 ? void 0 : _document.documentElement) !== 'undefined';
  var _useState = useState(function () {
      return isClient ? Math.min(document.documentElement.clientWidth, window.innerWidth) : 0;
    }),
    _useState2 = _slicedToArray(_useState, 2),
    windowSize = _useState2[0],
    setWindowSize = _useState2[1];
  var handlerResize = function handlerResize() {
    setWindowSize(Math.min(document.documentElement.clientWidth, window.innerWidth));
  };
  useEffect(function () {
    // useEffect is guaranteed to run only on the client side. So u need check isClient
    handlerResize();
    window.addEventListener('resize', handlerResize);
    return function () {
      window.removeEventListener('resize', handlerResize);
    };
  }, []);
  return windowSize;
};
/**
 * @description This hook is used to get the current window size and orientation.
 * Return Portrait if the window size is 768px or less, otherwise return Landscape.
 */
var useOrientation = function useOrientation() {
  var windowSize = useInnerSize();
  return windowSize <= VIEW_BREAKPOINT_PORTRAIT ? ORIENTATION.PORTRAIT : ORIENTATION.LANDSCAPE;
};
/**
 * @description This hook is used to get the current window size and check if it is in tablet size.
 * Return true if the window size is between 768px and 1280px, otherwise return false.
 */
var useTabletSize = function useTabletSize() {
  var windowSize = useInnerSize();
  return windowSize >= VIEW_BREAKPOINT_PORTRAIT && windowSize < VIEW_BREAKPOINT_TABLET;
};

var css_248z$3 = "/* Styles for common color */\n/* Styles for z-index */\n/* Styles for common classes */\n.UtilText-module_sekai-text-light__Cruji {\n  color: #212121;\n}\n\n.UtilText-module_sekai-text-dark__syEkr {\n  color: #e0e0e0;\n}\n\n.UtilText-module_sekai-color-light__kOblT {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.UtilText-module_sekai-color-dark__9z0-L {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.UtilText-module_sekai-overlay__J-0r3, .UtilText-module_sekai-overlay-dark__qZNSo, .UtilText-module_sekai-overlay-light__gUPX1 {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.UtilText-module_sekai-overlay-light__gUPX1 {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.UtilText-module_sekai-overlay-dark__qZNSo {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.UtilText-module_sekai-flex-center__Et34J {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.UtilText-module_sekai-absolute-center__pli-P {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.UtilText-module_sekai-invisible-scroll__XLCVh {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.UtilText-module_sekai-invisible-scroll__XLCVh::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.UtilText-module_sekai-mb-8__j6MZ- {\n  margin-bottom: 8px;\n}\n\n.UtilText-module_sekai-mb-16__TAhcR {\n  margin-bottom: 16px;\n}\n\n.UtilText-module_sekai-mb-24__d5evw {\n  margin-bottom: 24px;\n}\n\n.UtilText-module_text-xs__nOnyD {\n  font-size: 12px;\n}\n\n.UtilText-module_text-sm__H2Zwm {\n  font-size: 14px;\n}\n\n.UtilText-module_text-base__-BHkB {\n  font-size: 16px;\n}\n\n.UtilText-module_text-lg__W6wBP {\n  font-size: 18px;\n}\n\n.UtilText-module_text-xl__5QzZ3 {\n  font-size: 20px;\n}\n\n.UtilText-module_text-2xl__ejmsR {\n  font-size: 24px;\n}\n\n.UtilText-module_text-base-bold__fA-rv {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.UtilText-module_text-lg-bold__kCV40 {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.UtilText-module_text-xl-bold__eYvR0 {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.UtilText-module_text-2xl-bold__p8VLk {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.UtilText-module_font-bold__fHjMq {\n  font-weight: bold;\n}\n\n.UtilText-module_sekai-body-text-light__nn8Wp {\n  color: #212121;\n  margin: 0;\n}\n\n.UtilText-module_sekai-body-text-dark__k0fk8 {\n  color: #e0e0e0;\n  margin: 0;\n}\n\n.UtilText-module_sekai-detail-text-light__IGmQu {\n  color: #212121;\n  margin: 0;\n}\n\n.UtilText-module_sekai-detail-text-dark__J5rXI {\n  color: #e0e0e0;\n  margin: 0;\n}\n\n.UtilText-module_sekai-annotation-text-light__XIbJl {\n  color: rgb(88.5, 88.5, 88.5);\n  margin: 0;\n}\n\n.UtilText-module_sekai-annotation-text-dark__a1inb {\n  color: #a8a8a8;\n  margin: 0;\n}";
var styles$3 = {"sekai-text-light":"UtilText-module_sekai-text-light__Cruji","sekai-text-dark":"UtilText-module_sekai-text-dark__syEkr","sekai-color-light":"UtilText-module_sekai-color-light__kOblT","sekai-color-dark":"UtilText-module_sekai-color-dark__9z0-L","sekai-overlay":"UtilText-module_sekai-overlay__J-0r3","sekai-overlay-dark":"UtilText-module_sekai-overlay-dark__qZNSo","sekai-overlay-light":"UtilText-module_sekai-overlay-light__gUPX1","sekai-flex-center":"UtilText-module_sekai-flex-center__Et34J","sekai-absolute-center":"UtilText-module_sekai-absolute-center__pli-P","sekai-invisible-scroll":"UtilText-module_sekai-invisible-scroll__XLCVh","sekai-mb-8":"UtilText-module_sekai-mb-8__j6MZ-","sekai-mb-16":"UtilText-module_sekai-mb-16__TAhcR","sekai-mb-24":"UtilText-module_sekai-mb-24__d5evw","text-xs":"UtilText-module_text-xs__nOnyD","text-sm":"UtilText-module_text-sm__H2Zwm","text-base":"UtilText-module_text-base__-BHkB","text-lg":"UtilText-module_text-lg__W6wBP","text-xl":"UtilText-module_text-xl__5QzZ3","text-2xl":"UtilText-module_text-2xl__ejmsR","text-base-bold":"UtilText-module_text-base-bold__fA-rv","text-lg-bold":"UtilText-module_text-lg-bold__kCV40","text-xl-bold":"UtilText-module_text-xl-bold__eYvR0","text-2xl-bold":"UtilText-module_text-2xl-bold__p8VLk","font-bold":"UtilText-module_font-bold__fHjMq","sekai-body-text-light":"UtilText-module_sekai-body-text-light__nn8Wp","sekai-body-text-dark":"UtilText-module_sekai-body-text-dark__k0fk8","sekai-detail-text-light":"UtilText-module_sekai-detail-text-light__IGmQu","sekai-detail-text-dark":"UtilText-module_sekai-detail-text-dark__J5rXI","sekai-annotation-text-light":"UtilText-module_sekai-annotation-text-light__XIbJl","sekai-annotation-text-dark":"UtilText-module_sekai-annotation-text-dark__a1inb"};
styleInject(css_248z$3);

var _excluded$3 = ["themeMode", "children"],
  _excluded2 = ["sekai", "children"],
  _excluded3 = ["themeMode", "children"],
  _excluded4 = ["sekai", "children"],
  _excluded5 = ["themeMode", "children"],
  _excluded6 = ["sekai", "children"];
function ownKeys$3(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$3(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$3(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var BodyText = function BodyText(_ref) {
  var themeMode = _ref.themeMode,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, _excluded$3);
  var _useOptionalSekai = useOptionalSekai({
      mode: themeMode
    }),
    modeTheme = _useOptionalSekai.modeTheme;
  var orientation = useOrientation();
  var isPortrait = ORIENTATION.PORTRAIT === orientation;
  return /*#__PURE__*/React.createElement("p", _extends({}, rest, {
    className: clsx(styles$3["sekai-body-text-".concat(modeTheme)], isPortrait ? globalStyles['text-sm'] : globalStyles['text-base'], rest.className)
  }), children);
};
var SekaiBodyText = function SekaiBodyText(_ref2) {
  var sekai = _ref2.sekai,
    children = _ref2.children,
    rest = _objectWithoutProperties(_ref2, _excluded2);
  var _useOptionalSekai2 = useOptionalSekai({
      sekai: sekai
    }),
    sekaiColor = _useOptionalSekai2.sekaiColor;
  var colorStyle = {
    color: sekaiColor
  };
  return /*#__PURE__*/React.createElement(BodyText, _extends({}, rest, {
    style: _objectSpread$3(_objectSpread$3({}, colorStyle), rest.style)
  }), children);
};
var DetailText = function DetailText(_ref3) {
  var themeMode = _ref3.themeMode,
    children = _ref3.children,
    rest = _objectWithoutProperties(_ref3, _excluded3);
  var _useOptionalSekai3 = useOptionalSekai({
      mode: themeMode
    }),
    modeTheme = _useOptionalSekai3.modeTheme;
  return /*#__PURE__*/React.createElement("p", _extends({}, rest, {
    className: clsx(styles$3["sekai-detail-text-".concat(modeTheme)], globalStyles['text-xs'], rest.className)
  }), children);
};
var SekaiDetailText = function SekaiDetailText(_ref4) {
  var sekai = _ref4.sekai,
    children = _ref4.children,
    rest = _objectWithoutProperties(_ref4, _excluded4);
  var _useOptionalSekai4 = useOptionalSekai({
      sekai: sekai
    }),
    sekaiColor = _useOptionalSekai4.sekaiColor;
  var colorStyle = {
    color: sekaiColor
  };
  return /*#__PURE__*/React.createElement(DetailText, _extends({}, rest, {
    style: _objectSpread$3(_objectSpread$3({}, colorStyle), rest.style)
  }), children);
};
var AnnotationText = function AnnotationText(_ref5) {
  var themeMode = _ref5.themeMode,
    children = _ref5.children,
    rest = _objectWithoutProperties(_ref5, _excluded5);
  var _useOptionalSekai5 = useOptionalSekai({
      mode: themeMode
    }),
    modeTheme = _useOptionalSekai5.modeTheme;
  return /*#__PURE__*/React.createElement(DetailText, _extends({}, rest, {
    className: clsx(styles$3["sekai-annotation-text-".concat(modeTheme)], rest.className)
  }), children);
};
var SekaiAnnotationText = function SekaiAnnotationText(_ref6) {
  var sekai = _ref6.sekai,
    children = _ref6.children,
    rest = _objectWithoutProperties(_ref6, _excluded6);
  var _useOptionalSekai6 = useOptionalSekai({
      sekai: sekai
    }),
    sekaiColor = _useOptionalSekai6.sekaiColor,
    isLight = _useOptionalSekai6.isLight;
  var annotationColor = convertHexToRgbaMixWithBlackOrWhite(sekaiColor, 0.7, isLight);
  var colorStyle = {
    color: annotationColor
  };
  return /*#__PURE__*/React.createElement(DetailText, _extends({}, rest, {
    style: _objectSpread$3(_objectSpread$3({}, colorStyle), rest.style)
  }), children);
};

var css_248z$2 = "/* Styles for common color */\n/* Styles for z-index */\n/* Styles for common classes */\n.TextField-module_sekai-text-light__4tVk9 {\n  color: #212121;\n}\n\n.TextField-module_sekai-text-dark__uVMvf {\n  color: #e0e0e0;\n}\n\n.TextField-module_sekai-color-light__bWWn5 {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.TextField-module_sekai-color-dark__wdiIv {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.TextField-module_sekai-overlay__4TZeN, .TextField-module_sekai-overlay-dark__Vr-5U, .TextField-module_sekai-overlay-light__jZsfr {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.TextField-module_sekai-overlay-light__jZsfr {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.TextField-module_sekai-overlay-dark__Vr-5U {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.TextField-module_sekai-flex-center__86f-f {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.TextField-module_sekai-absolute-center__pUj9- {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.TextField-module_sekai-invisible-scroll__baOdm {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.TextField-module_sekai-invisible-scroll__baOdm::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.TextField-module_sekai-mb-8__OhSdV {\n  margin-bottom: 8px;\n}\n\n.TextField-module_sekai-mb-16__eDqLo {\n  margin-bottom: 16px;\n}\n\n.TextField-module_sekai-mb-24__PvJdK {\n  margin-bottom: 24px;\n}\n\n.TextField-module_text-xs__hvEWC {\n  font-size: 12px;\n}\n\n.TextField-module_text-sm__P87Kd {\n  font-size: 14px;\n}\n\n.TextField-module_text-base__6eJNo {\n  font-size: 16px;\n}\n\n.TextField-module_text-lg__2WAyX {\n  font-size: 18px;\n}\n\n.TextField-module_text-xl__2XkTM {\n  font-size: 20px;\n}\n\n.TextField-module_text-2xl__naL-a {\n  font-size: 24px;\n}\n\n.TextField-module_text-base-bold__-hZkA {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.TextField-module_text-lg-bold__g7n9R {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.TextField-module_text-xl-bold__LI71- {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.TextField-module_text-2xl-bold__O-5hh {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.TextField-module_font-bold__UJalw {\n  font-weight: bold;\n}\n\n.TextField-module_sekai-textfield-wrapper__Nbg5Q {\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.TextField-module_sekai-textfield-clear-button__0lSC9 {\n  position: absolute;\n  background-color: transparent;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n  width: 40px;\n  height: 40px;\n  border: none;\n  border-radius: 3px;\n  padding: 0;\n}\n.TextField-module_sekai-textfield-clear-button__0lSC9 .TextField-module_sekai-textfield-clear-icon__n0vii {\n  width: 20px;\n  height: 20px;\n}\n\n.TextField-module_sekai-textfield-input__YzRuo, .TextField-module_sekai-textfield-input-dark__2sNxh, .TextField-module_sekai-textfield-input-light__0Ne-G {\n  height: 40px;\n  line-height: 2.5;\n  box-sizing: border-box;\n  padding: 5px 10px;\n  border: 2px solid var(--sekai-color);\n  border-radius: 3px;\n}\n.TextField-module_sekai-textfield-input__YzRuo:focus-visible, .TextField-module_sekai-textfield-input-dark__2sNxh:focus-visible, .TextField-module_sekai-textfield-input-light__0Ne-G:focus-visible {\n  outline: 1px solid var(--sekai-color);\n}\n.TextField-module_sekai-textfield-input__YzRuo.TextField-module_sekai-textfield-clear__9lGc9, .TextField-module_sekai-textfield-clear__9lGc9.TextField-module_sekai-textfield-input-dark__2sNxh, .TextField-module_sekai-textfield-clear__9lGc9.TextField-module_sekai-textfield-input-light__0Ne-G {\n  padding-right: 40px;\n}\n\n.TextField-module_sekai-textfield-input-light__0Ne-G {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.TextField-module_sekai-textfield-input-dark__2sNxh {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.TextField-module_sekai-textfield-input-error__qx3YL {\n  margin: 4px 0 4px 4px !important;\n  color: #ea5532 !important;\n}";
var styles$2 = {"sekai-text-light":"TextField-module_sekai-text-light__4tVk9","sekai-text-dark":"TextField-module_sekai-text-dark__uVMvf","sekai-color-light":"TextField-module_sekai-color-light__bWWn5","sekai-color-dark":"TextField-module_sekai-color-dark__wdiIv","sekai-overlay":"TextField-module_sekai-overlay__4TZeN","sekai-overlay-dark":"TextField-module_sekai-overlay-dark__Vr-5U","sekai-overlay-light":"TextField-module_sekai-overlay-light__jZsfr","sekai-flex-center":"TextField-module_sekai-flex-center__86f-f","sekai-absolute-center":"TextField-module_sekai-absolute-center__pUj9-","sekai-invisible-scroll":"TextField-module_sekai-invisible-scroll__baOdm","sekai-mb-8":"TextField-module_sekai-mb-8__OhSdV","sekai-mb-16":"TextField-module_sekai-mb-16__eDqLo","sekai-mb-24":"TextField-module_sekai-mb-24__PvJdK","text-xs":"TextField-module_text-xs__hvEWC","text-sm":"TextField-module_text-sm__P87Kd","text-base":"TextField-module_text-base__6eJNo","text-lg":"TextField-module_text-lg__2WAyX","text-xl":"TextField-module_text-xl__2XkTM","text-2xl":"TextField-module_text-2xl__naL-a","text-base-bold":"TextField-module_text-base-bold__-hZkA","text-lg-bold":"TextField-module_text-lg-bold__g7n9R","text-xl-bold":"TextField-module_text-xl-bold__LI71-","text-2xl-bold":"TextField-module_text-2xl-bold__O-5hh","font-bold":"TextField-module_font-bold__UJalw","sekai-textfield-wrapper":"TextField-module_sekai-textfield-wrapper__Nbg5Q","sekai-textfield-clear-button":"TextField-module_sekai-textfield-clear-button__0lSC9","sekai-textfield-clear-icon":"TextField-module_sekai-textfield-clear-icon__n0vii","sekai-textfield-input":"TextField-module_sekai-textfield-input__YzRuo","sekai-textfield-input-dark":"TextField-module_sekai-textfield-input-dark__2sNxh","sekai-textfield-input-light":"TextField-module_sekai-textfield-input-light__0Ne-G","sekai-textfield-clear":"TextField-module_sekai-textfield-clear__9lGc9","sekai-textfield-input-error":"TextField-module_sekai-textfield-input-error__qx3YL"};
styleInject(css_248z$2);

var _excluded$2 = ["id", "className", "style", "sekai", "themeMode", "clearButton", "onChangeInput", "isError", "errorMessage"];
function ownKeys$2(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$2(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$2(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TextField = function TextField(_ref) {
  var id = _ref.id,
    className = _ref.className,
    style = _ref.style,
    sekai = _ref.sekai,
    themeMode = _ref.themeMode,
    _ref$clearButton = _ref.clearButton,
    clearButton = _ref$clearButton === void 0 ? true : _ref$clearButton,
    onChangeInput = _ref.onChangeInput,
    _ref$isError = _ref.isError,
    isError = _ref$isError === void 0 ? false : _ref$isError,
    errorMessage = _ref.errorMessage,
    inputProps = _objectWithoutProperties(_ref, _excluded$2);
  var _useOptionalSekai = useOptionalSekai({
      sekai: sekai,
      mode: themeMode
    }),
    sekaiColor = _useOptionalSekai.sekaiColor,
    modeTheme = _useOptionalSekai.modeTheme;
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];
  var optionStyle = {
    '--sekai-color': sekaiColor
  };
  var handleInputChange = function handleInputChange(e) {
    var value = e.target.value;
    setInputValue(value);
    onChangeInput === null || onChangeInput === void 0 || onChangeInput(value);
  };
  var handleClearInput = function handleClearInput() {
    setInputValue('');
    onChangeInput === null || onChangeInput === void 0 || onChangeInput('');
  };
  return /*#__PURE__*/React.createElement("div", {
    id: id,
    className: clsx(styles$2['sekai-textfield'], className),
    style: _objectSpread$2(_objectSpread$2({}, optionStyle), style)
  }, /*#__PURE__*/React.createElement("div", {
    className: clsx(styles$2['sekai-textfield-wrapper'])
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: "".concat(id, "-input"),
    type: "text"
  }, inputProps, {
    className: clsx(styles$2["sekai-textfield-input-".concat(modeTheme)], _defineProperty({}, styles$2['sekai-textfield-clear'], clearButton)),
    value: inputValue,
    onChange: handleInputChange
  })), clearButton && inputValue.length ? /*#__PURE__*/React.createElement("button", {
    className: clsx(styles$2['sekai-textfield-clear-button']),
    onClick: handleClearInput
  }, /*#__PURE__*/React.createElement(ClearSvg, {
    className: clsx(styles$2['sekai-textfield-clear-icon']),
    sekai: sekai,
    themeMode: themeMode
  })) : null), isError ? /*#__PURE__*/React.createElement(AnnotationText, {
    className: clsx(styles$2['sekai-textfield-input-error'])
  }, errorMessage) : null);
};

var css_248z$1 = "/* Styles for common color */\n/* Styles for z-index */\n/* Styles for common classes */\n.Toast-module_sekai-text-light__rV-gA {\n  color: #212121;\n}\n\n.Toast-module_sekai-text-dark__7gfVG {\n  color: #e0e0e0;\n}\n\n.Toast-module_sekai-color-light__LFb1Q {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.Toast-module_sekai-color-dark__kC0Mm {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.Toast-module_sekai-overlay__-oFEi, .Toast-module_sekai-overlay-dark__NHyzm, .Toast-module_sekai-overlay-light__1mzxs {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.Toast-module_sekai-overlay-light__1mzxs {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.Toast-module_sekai-overlay-dark__NHyzm {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.Toast-module_sekai-flex-center__vlG-o {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.Toast-module_sekai-absolute-center__8cjcX {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.Toast-module_sekai-invisible-scroll__V-5Ny {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.Toast-module_sekai-invisible-scroll__V-5Ny::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.Toast-module_sekai-mb-8__A9aLT {\n  margin-bottom: 8px;\n}\n\n.Toast-module_sekai-mb-16__rpP-S {\n  margin-bottom: 16px;\n}\n\n.Toast-module_sekai-mb-24__3oMUj {\n  margin-bottom: 24px;\n}\n\n.Toast-module_text-xs__ewvK5 {\n  font-size: 12px;\n}\n\n.Toast-module_text-sm__k-H5J {\n  font-size: 14px;\n}\n\n.Toast-module_text-base__E1Ol9 {\n  font-size: 16px;\n}\n\n.Toast-module_text-lg__jSbB2 {\n  font-size: 18px;\n}\n\n.Toast-module_text-xl__vca1v {\n  font-size: 20px;\n}\n\n.Toast-module_text-2xl__fgtLp {\n  font-size: 24px;\n}\n\n.Toast-module_text-base-bold__NWuX0 {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.Toast-module_text-lg-bold__w3QX6 {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.Toast-module_text-xl-bold__ZhGDV {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.Toast-module_text-2xl-bold__hv438 {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.Toast-module_font-bold__jGw3k {\n  font-weight: bold;\n}\n\n.Toast-module_sekai-toast__hId5y, .Toast-module_sekai-toast-bottom__XHg3P, .Toast-module_sekai-toast-top__qLEts {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: fixed;\n  left: 0;\n  width: 100%;\n  min-height: 40px;\n  background-color: var(--sekai-color-bg);\n  padding: 0 16px;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n\n.Toast-module_sekai-toast-top__qLEts {\n  top: 0;\n  transform: translateY(-100%);\n  transition: transform 0.3s ease-in-out;\n}\n.Toast-module_sekai-toast-top__qLEts.Toast-module_sekai-toast-open__3YC6B {\n  transform: translateY(0);\n}\n\n.Toast-module_sekai-toast-bottom__XHg3P {\n  bottom: 0;\n  transform: translateY(100%);\n  transition: transform 0.3s ease-in-out;\n}\n.Toast-module_sekai-toast-bottom__XHg3P.Toast-module_sekai-toast-open__3YC6B {\n  transform: translateY(0);\n}\n\n.Toast-module_sekai-toast-message__bHCeI {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 4px;\n  margin: 4px 0;\n}\n.Toast-module_sekai-toast-message__bHCeI .Toast-module_sekai-toast-error__byg4M {\n  color: #ea5532;\n}\n\n.Toast-module_sekai-toast-close-button__Tydue {\n  width: 36px;\n  height: 36px;\n  background-color: inherit;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.Toast-module_sekai-toast-close-button__Tydue .Toast-module_sekai-toast-icon__-jAoN {\n  width: 24px;\n  height: 24px;\n}";
var styles$1 = {"sekai-text-light":"Toast-module_sekai-text-light__rV-gA","sekai-text-dark":"Toast-module_sekai-text-dark__7gfVG","sekai-color-light":"Toast-module_sekai-color-light__LFb1Q","sekai-color-dark":"Toast-module_sekai-color-dark__kC0Mm","sekai-overlay":"Toast-module_sekai-overlay__-oFEi","sekai-overlay-dark":"Toast-module_sekai-overlay-dark__NHyzm","sekai-overlay-light":"Toast-module_sekai-overlay-light__1mzxs","sekai-flex-center":"Toast-module_sekai-flex-center__vlG-o","sekai-absolute-center":"Toast-module_sekai-absolute-center__8cjcX","sekai-invisible-scroll":"Toast-module_sekai-invisible-scroll__V-5Ny","sekai-mb-8":"Toast-module_sekai-mb-8__A9aLT","sekai-mb-16":"Toast-module_sekai-mb-16__rpP-S","sekai-mb-24":"Toast-module_sekai-mb-24__3oMUj","text-xs":"Toast-module_text-xs__ewvK5","text-sm":"Toast-module_text-sm__k-H5J","text-base":"Toast-module_text-base__E1Ol9","text-lg":"Toast-module_text-lg__jSbB2","text-xl":"Toast-module_text-xl__vca1v","text-2xl":"Toast-module_text-2xl__fgtLp","text-base-bold":"Toast-module_text-base-bold__NWuX0","text-lg-bold":"Toast-module_text-lg-bold__w3QX6","text-xl-bold":"Toast-module_text-xl-bold__ZhGDV","text-2xl-bold":"Toast-module_text-2xl-bold__hv438","font-bold":"Toast-module_font-bold__jGw3k","sekai-toast":"Toast-module_sekai-toast__hId5y","sekai-toast-bottom":"Toast-module_sekai-toast-bottom__XHg3P","sekai-toast-top":"Toast-module_sekai-toast-top__qLEts","sekai-toast-open":"Toast-module_sekai-toast-open__3YC6B","sekai-toast-message":"Toast-module_sekai-toast-message__bHCeI","sekai-toast-error":"Toast-module_sekai-toast-error__byg4M","sekai-toast-close-button":"Toast-module_sekai-toast-close-button__Tydue","sekai-toast-icon":"Toast-module_sekai-toast-icon__-jAoN"};
styleInject(css_248z$1);

var _excluded$1 = ["sekai", "themeMode", "open", "onClose", "pos", "message", "isError", "duration", "containerComponent"];
function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Toast = function Toast(_ref) {
  var sekai = _ref.sekai,
    themeMode = _ref.themeMode,
    open = _ref.open,
    onClose = _ref.onClose,
    _ref$pos = _ref.pos,
    pos = _ref$pos === void 0 ? 'bottom' : _ref$pos,
    message = _ref.message,
    _ref$isError = _ref.isError,
    isError = _ref$isError === void 0 ? false : _ref$isError,
    _ref$duration = _ref.duration,
    duration = _ref$duration === void 0 ? 3000 : _ref$duration,
    containerComponent = _ref.containerComponent,
    rest = _objectWithoutProperties(_ref, _excluded$1);
  var portalContainer = containerComponent || document.body;
  var _useOptionalSekai = useOptionalSekai({
      sekai: sekai,
      mode: themeMode
    }),
    sekaiColor = _useOptionalSekai.sekaiColor,
    modeTheme = _useOptionalSekai.modeTheme,
    isLight = _useOptionalSekai.isLight;
  var sekaiColorBg = convertHexToRgbaMixWithBlackOrWhite(sekaiColor, 0.5, isLight);
  var optionStyle = _objectSpread$1({
    '--sekai-color-bg': sekaiColorBg
  }, containerComponent && {
    position: 'absolute'
  });
  var displayMsg = Array.isArray(message) ? message : [message];
  useEffect(function () {
    var timer = open ? setTimeout(function () {
      onClose();
    }, duration) : undefined;
    return function () {
      if (timer !== undefined) {
        clearTimeout(timer);
      }
    };
  });
  return /*#__PURE__*/createPortal(/*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: clsx(styles$1["sekai-toast-".concat(pos)], _defineProperty({}, styles$1['sekai-toast-open'], open), rest.className),
    style: _objectSpread$1(_objectSpread$1({}, optionStyle), rest.style)
  }), /*#__PURE__*/React.createElement("div", {
    className: clsx(styles$1['sekai-toast-message'])
  }, displayMsg.map(function (msg) {
    return /*#__PURE__*/React.createElement(BodyText, {
      key: msg,
      className: clsx(globalStyles["sekai-text-".concat(modeTheme)], _defineProperty({}, styles$1['sekai-toast-error'], isError))
    }, msg);
  })), /*#__PURE__*/React.createElement("button", {
    className: clsx(styles$1['sekai-toast-close-button']),
    onClick: onClose
  }, /*#__PURE__*/React.createElement(ClearSvg, {
    sekai: sekai,
    themeMode: themeMode,
    className: styles$1['sekai-toast-icon']
  }))), portalContainer);
};

var css_248z = "/* Styles for common color */\n/* Styles for z-index */\n/* Styles for common classes */\n.Tooltip-module_sekai-text-light__U6WQq {\n  color: #212121;\n}\n\n.Tooltip-module_sekai-text-dark__K7AZN {\n  color: #e0e0e0;\n}\n\n.Tooltip-module_sekai-color-light__mPhAS {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.Tooltip-module_sekai-color-dark__6fBqW {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.Tooltip-module_sekai-overlay__UYd-i, .Tooltip-module_sekai-overlay-dark__-nB2F, .Tooltip-module_sekai-overlay-light__XBx05 {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.Tooltip-module_sekai-overlay-light__XBx05 {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.Tooltip-module_sekai-overlay-dark__-nB2F {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.Tooltip-module_sekai-flex-center__vZckp {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.Tooltip-module_sekai-absolute-center__PZYRi {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.Tooltip-module_sekai-invisible-scroll__YYPC8 {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.Tooltip-module_sekai-invisible-scroll__YYPC8::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.Tooltip-module_sekai-mb-8__qUSwi {\n  margin-bottom: 8px;\n}\n\n.Tooltip-module_sekai-mb-16__SQMRc {\n  margin-bottom: 16px;\n}\n\n.Tooltip-module_sekai-mb-24__VTQFp {\n  margin-bottom: 24px;\n}\n\n.Tooltip-module_text-xs__Oc2-e {\n  font-size: 12px;\n}\n\n.Tooltip-module_text-sm__5rK7W {\n  font-size: 14px;\n}\n\n.Tooltip-module_text-base__L-Zk1 {\n  font-size: 16px;\n}\n\n.Tooltip-module_text-lg__15ydH {\n  font-size: 18px;\n}\n\n.Tooltip-module_text-xl__mVzRt {\n  font-size: 20px;\n}\n\n.Tooltip-module_text-2xl__J1vQA {\n  font-size: 24px;\n}\n\n.Tooltip-module_text-base-bold__sOdPr {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.Tooltip-module_text-lg-bold__zGz7w {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.Tooltip-module_text-xl-bold__MqpD2 {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.Tooltip-module_text-2xl-bold__F3fiD {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.Tooltip-module_font-bold__mplga {\n  font-weight: bold;\n}\n\n.Tooltip-module_sekai-tooltip__fXW-B, .Tooltip-module_sekai-tooltip-dark__48kiK, .Tooltip-module_sekai-tooltip-light__RQmX8 {\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.Tooltip-module_sekai-tooltip-speech-bubble__n85cf, .Tooltip-module_sekai-tooltip-speech-bubble-bottom__lzXwI, .Tooltip-module_sekai-tooltip-speech-bubble-top__ZIGKU {\n  position: absolute;\n  overflow: visible;\n  width: -moz-max-content;\n  width: max-content;\n  background-color: var(--sekai-color-bg);\n  border: solid 1px var(--sekai-color);\n  margin: 5px;\n  z-index: 1250;\n}\n\n.Tooltip-module_sekai-tooltip-speech-bubble-top__ZIGKU {\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.Tooltip-module_sekai-tooltip-speech-bubble-bottom__lzXwI {\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.Tooltip-module_sekai-tooltip-speech-bubble-text__4B8Xu, .Tooltip-module_sekai-tooltip-speech-bubble-text-dark__CNnXC, .Tooltip-module_sekai-tooltip-speech-bubble-text-light__bkXbY {\n  padding: 4px 8px;\n  font-size: 14px;\n  display: inline-block;\n  white-space: pre-wrap;\n}\n\n.Tooltip-module_sekai-tooltip-speech-bubble-text-light__bkXbY {\n  color: #212121;\n}\n\n.Tooltip-module_sekai-tooltip-speech-bubble-text-dark__CNnXC {\n  color: #e0e0e0;\n}";
var styles = {"sekai-text-light":"Tooltip-module_sekai-text-light__U6WQq","sekai-text-dark":"Tooltip-module_sekai-text-dark__K7AZN","sekai-color-light":"Tooltip-module_sekai-color-light__mPhAS","sekai-color-dark":"Tooltip-module_sekai-color-dark__6fBqW","sekai-overlay":"Tooltip-module_sekai-overlay__UYd-i","sekai-overlay-dark":"Tooltip-module_sekai-overlay-dark__-nB2F","sekai-overlay-light":"Tooltip-module_sekai-overlay-light__XBx05","sekai-flex-center":"Tooltip-module_sekai-flex-center__vZckp","sekai-absolute-center":"Tooltip-module_sekai-absolute-center__PZYRi","sekai-invisible-scroll":"Tooltip-module_sekai-invisible-scroll__YYPC8","sekai-mb-8":"Tooltip-module_sekai-mb-8__qUSwi","sekai-mb-16":"Tooltip-module_sekai-mb-16__SQMRc","sekai-mb-24":"Tooltip-module_sekai-mb-24__VTQFp","text-xs":"Tooltip-module_text-xs__Oc2-e","text-sm":"Tooltip-module_text-sm__5rK7W","text-base":"Tooltip-module_text-base__L-Zk1","text-lg":"Tooltip-module_text-lg__15ydH","text-xl":"Tooltip-module_text-xl__mVzRt","text-2xl":"Tooltip-module_text-2xl__J1vQA","text-base-bold":"Tooltip-module_text-base-bold__sOdPr","text-lg-bold":"Tooltip-module_text-lg-bold__zGz7w","text-xl-bold":"Tooltip-module_text-xl-bold__MqpD2","text-2xl-bold":"Tooltip-module_text-2xl-bold__F3fiD","font-bold":"Tooltip-module_font-bold__mplga","sekai-tooltip":"Tooltip-module_sekai-tooltip__fXW-B","sekai-tooltip-dark":"Tooltip-module_sekai-tooltip-dark__48kiK","sekai-tooltip-light":"Tooltip-module_sekai-tooltip-light__RQmX8","sekai-tooltip-speech-bubble":"Tooltip-module_sekai-tooltip-speech-bubble__n85cf","sekai-tooltip-speech-bubble-bottom":"Tooltip-module_sekai-tooltip-speech-bubble-bottom__lzXwI","sekai-tooltip-speech-bubble-top":"Tooltip-module_sekai-tooltip-speech-bubble-top__ZIGKU","sekai-tooltip-speech-bubble-text":"Tooltip-module_sekai-tooltip-speech-bubble-text__4B8Xu","sekai-tooltip-speech-bubble-text-dark":"Tooltip-module_sekai-tooltip-speech-bubble-text-dark__CNnXC","sekai-tooltip-speech-bubble-text-light":"Tooltip-module_sekai-tooltip-speech-bubble-text-light__bkXbY"};
styleInject(css_248z);

var _excluded = ["sekai", "themeMode", "children", "text", "pos"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Tooltip = function Tooltip(_ref) {
  var sekai = _ref.sekai,
    themeMode = _ref.themeMode,
    children = _ref.children,
    text = _ref.text,
    _ref$pos = _ref.pos,
    pos = _ref$pos === void 0 ? 'top' : _ref$pos,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useOptionalSekai = useOptionalSekai({
      sekai: sekai,
      mode: themeMode
    }),
    sekaiColor = _useOptionalSekai.sekaiColor,
    modeTheme = _useOptionalSekai.modeTheme,
    isLight = _useOptionalSekai.isLight;
  var sekaiColorBg = convertHexToRgbaMixWithBlackOrWhite(sekaiColor, 0.2, isLight);
  var optionStyle = {
    '--sekai-color': sekaiColor,
    '--sekai-color-bg': sekaiColorBg
  };
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: clsx(styles["sekai-tooltip-".concat(modeTheme)], styles["sekai-tooltip-".concat(pos)], rest.className),
    style: _objectSpread(_objectSpread({}, optionStyle), rest.style),
    onMouseEnter: function onMouseEnter() {
      return setVisible(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setVisible(false);
    }
  }), children, visible ? /*#__PURE__*/React.createElement(SpeechBubble, {
    text: text,
    pos: pos,
    themeMode: modeTheme
  }) : null);
};
var SpeechBubble = function SpeechBubble(_ref2) {
  var text = _ref2.text,
    pos = _ref2.pos,
    themeMode = _ref2.themeMode;
  var PADDING = 32;
  var MAX_WIDTH = 300;
  var speechBubbleRef = useRef(null);
  var _useState3 = useState(pos),
    _useState4 = _slicedToArray(_useState3, 2),
    calcPosition = _useState4[0],
    setCalcPosition = _useState4[1];
  var _useState5 = useState({}),
    _useState6 = _slicedToArray(_useState5, 2),
    bubbleStyle = _useState6[0],
    setBubbleStyle = _useState6[1];
  useEffect(function () {
    var bubble = speechBubbleRef.current;
    if (!bubble) return;
    var bubbleRect = bubble.getBoundingClientRect();
    var viewInnerWidth = window.innerWidth;
    var viewInnerHeight = window.innerHeight;
    var isRightOverflow = bubbleRect.right > viewInnerWidth;
    var isLeftOverflow = bubbleRect.left < 0;
    setBubbleStyle(_objectSpread(_objectSpread(_objectSpread({}, isRightOverflow && {
      right: 0,
      left: 'auto',
      transform: 'none'
    }), isLeftOverflow && {
      left: 0,
      right: 'auto',
      transform: 'none'
    }), {}, {
      maxWidth: "".concat(Math.min(viewInnerWidth - PADDING * 2, MAX_WIDTH), "px")
    }));
    if (bubbleRect.top < 0) {
      setCalcPosition('bottom');
    } else if (bubbleRect.bottom > viewInnerHeight) {
      setCalcPosition('top');
    } else {
      setCalcPosition(pos);
    }
  }, [pos]);
  return /*#__PURE__*/React.createElement("div", {
    ref: speechBubbleRef,
    className: clsx(styles["sekai-tooltip-speech-bubble-".concat(calcPosition)]),
    style: bubbleStyle
  }, /*#__PURE__*/React.createElement("span", {
    className: styles["sekai-tooltip-speech-bubble-text-".concat(themeMode)]
  }, text));
};

var useCreateSekai = function useCreateSekai() {
  var context = useContext(YourSekaiContext);
  if (!context) {
    throw new Error('useCreateSekai must be used within a YourSekaiProvider');
  }
  return context;
};

/**
 * Returns the current time as a Date object.
 * @returns {Date} The current Date object.
 */
var getCurrentTime = function getCurrentTime() {
  return new Date();
};
/**
 * Returns the current time as a string in the specified format.
 * @param {Date} now - The current Date object.
 * @param {string} format - Format type ('datetime', 'date', 'time', 'timestamp', 'iso')
 * @param {string} locale - Locale (default: 'ja-JP')
 * @returns {string} Formatted time string
 */
var getFormattedTime = function getFormattedTime(now) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'datetime';
  var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'ja-JP';
  switch (format) {
    case 'datetime':
      return now.toLocaleString(locale);
    case 'date':
      return now.toLocaleDateString(locale);
    case 'time':
      return now.toLocaleTimeString(locale);
    case 'timestamp':
      return now.getTime().toString();
    case 'iso':
      return now.toISOString();
    default:
      return now.toLocaleString(locale);
  }
};
/**
 * Returns the current time in a custom format.
 * @param {Date} now - The current Date object.
 * @param {string} pattern - Format pattern (e.g., 'YYYY-MM-DD HH:mm:ss')
 * @returns {string} Formatted time string
 */
var getCustomCurrentTime = function getCustomCurrentTime(now) {
  var pattern = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD HH:mm:ss';
  var year = String(now.getFullYear());
  var month = String(now.getMonth() + 1).padStart(2, '0');
  var day = String(now.getDate()).padStart(2, '0');
  var hours = String(now.getHours()).padStart(2, '0');
  var minutes = String(now.getMinutes()).padStart(2, '0');
  var seconds = String(now.getSeconds()).padStart(2, '0');
  return pattern.replace('YYYY', year).replace('MM', month).replace('DD', day).replace('HH', hours).replace('mm', minutes).replace('ss', seconds);
};

var useCurrentTime = function useCurrentTime() {
  var _useState = useState(getCurrentTime()),
    _useState2 = _slicedToArray(_useState, 2),
    currentTime = _useState2[0],
    setCurrentTime = _useState2[1];
  useEffect(function () {
    var timer = setInterval(function () {
      setCurrentTime(getCurrentTime());
    }, 1000);
    return function () {
      return clearInterval(timer);
    };
  }, []);
  return currentTime;
};

// prettier-ignore
var SEKAI_CHARACTER_NAMES = {
  Miku: {
    'en': 'Hatsune Miku',
    'ja': '初音ミク',
    'zh-hant': '初音未來'
  },
  Rin: {
    'en': 'Kagamine Rin',
    'ja': '鏡音リン',
    'zh-hant': '鏡音鈴'
  },
  Len: {
    'en': 'Kagamine Len',
    'ja': '鏡音レン',
    'zh-hant': '鏡音連'
  },
  Luka: {
    'en': 'Megurine Luka',
    'ja': '巡音ルカ',
    'zh-hant': '巡音流歌'
  },
  Meiko: {
    'en': 'MEIKO',
    'ja': 'MEIKO',
    'zh-hant': 'MEIKO'
  },
  Kaito: {
    'en': 'KAITO',
    'ja': 'KAITO',
    'zh-hant': 'KAITO'
  },
  Ichika: {
    'en': 'Ichika Hoshino',
    'ja': '星乃 一歌',
    'zh-hant': '星乃一歌'
  },
  Saki: {
    'en': 'Saki Tenma',
    'ja': '天馬 咲希',
    'zh-hant': '天馬 咲希'
  },
  Honami: {
    'en': 'Honami Mochizuki',
    'ja': '望月 穂波',
    'zh-hant': '望月 穗波'
  },
  Shiho: {
    'en': 'Shiho Hinomori',
    'ja': '日野森 志歩',
    'zh-hant': '日野森 志步'
  },
  Minori: {
    'en': 'Minori Hanasato',
    'ja': '花里 みのり',
    'zh-hant': '花里 實乃梨'
  },
  Haruka: {
    'en': 'Haruka Kiritani',
    'ja': '桐谷 遥',
    'zh-hant': '桐谷 遙'
  },
  Airi: {
    'en': 'Airi Momoi',
    'ja': '桃井 愛莉',
    'zh-hant': '桃井 愛莉'
  },
  Shizuku: {
    'en': 'Shizuku Hinomori',
    'ja': '日野森 雫',
    'zh-hant': '日野森 雫'
  },
  Kohane: {
    'en': 'Kohane Azusawa',
    'ja': '小豆沢 こはね',
    'zh-hant': '小豆澤 小羽'
  },
  An: {
    'en': 'An Shiraishi',
    'ja': '白石 杏',
    'zh-hant': '白石 杏'
  },
  Akito: {
    'en': 'Akito Shinonome',
    'ja': '東雲 彰人',
    'zh-hant': '東雲 彰人'
  },
  Toya: {
    'en': 'Toya Aoyagi',
    'ja': '青柳 冬弥',
    'zh-hant': '青柳 冬彌'
  },
  Tsukasa: {
    'en': 'Tsukasa Tenma',
    'ja': '天馬 司',
    'zh-hant': '天馬 司'
  },
  Emu: {
    'en': 'Emu Otori',
    'ja': '鳳 えむ',
    'zh-hant': '鳳 笑夢'
  },
  Nene: {
    'en': 'Nene Kusanagi',
    'ja': '草薙 寧々',
    'zh-hant': '草薙 寧寧'
  },
  Rui: {
    'en': 'Rui Kamishiro',
    'ja': '神代 類',
    'zh-hant': '神代 類'
  },
  Kanade: {
    'en': 'Kanade Yoisaki',
    'ja': '宵崎 奏',
    'zh-hant': '宵崎 奏'
  },
  Mafuyu: {
    'en': 'Mafuyu Asahina',
    'ja': '朝比奈 まふゆ',
    'zh-hant': '朝比奈 真冬'
  },
  Ena: {
    'en': 'Ena Shinonome',
    'ja': '東雲 絵名',
    'zh-hant': '東雲 繪名'
  },
  Mizuki: {
    'en': 'Mizuki Akiyama',
    'ja': '暁山 瑞希',
    'zh-hant': '曉山 瑞希'
  },
  Virtualsinger: {
    'en': 'VIRTUAL SINGER',
    'ja': 'バーチャル・シンガー',
    'zh-hant': '虛擬歌手'
  },
  Leoneed: {
    'en': 'Leo/need',
    'ja': 'Leo/need',
    'zh-hant': 'Leo/need'
  },
  Moremorejump: {
    'en': 'MORE MORE JUMP!',
    'ja': 'MORE MORE JUMP!',
    'zh-hant': 'MORE MORE JUMP!'
  },
  Vividbadsquad: {
    'en': 'Vivid BAD SQUAD',
    'ja': 'Vivid BAD SQUAD',
    'zh-hant': 'Vivid BAD SQUAD'
  },
  Wonderlandsshowtime: {
    'en': 'Wonderlands×Showtime',
    'ja': 'ワンダーランズ×ショウタイム',
    'zh-hant': 'Wonderlands×Showtime'
  },
  Nightcode: {
    'en': 'Nightcord at 25:00',
    'ja': '25時、ナイトコードで。',
    'zh-hant': '25點, Nightcord見。'
  }
};
var UNTITLED_VALID_LOCAL = {
  'ja': 'ja',
  'ja-jp': 'ja',
  'en': 'en',
  'en-us': 'en',
  'zh-hant': 'zh-hant',
  'zh-tw': 'zh-hant'
};
var convertLocaleToLocaleKey = function convertLocaleToLocaleKey(locale) {
  var _UNTITLED_VALID_LOCAL;
  var lowerLocale = locale.toLowerCase();
  return (_UNTITLED_VALID_LOCAL = UNTITLED_VALID_LOCAL[lowerLocale]) !== null && _UNTITLED_VALID_LOCAL !== void 0 ? _UNTITLED_VALID_LOCAL : 'ja';
};
/**
 * @description Get localized character name by ColorsSekaiKey
 * @param {string} name - ColorsSekaiKey
 * @param {string} locale - Locale code (default: 'ja')
 * @returns {string} - Localized character name
 */
var getSekaiCharacterName = function getSekaiCharacterName(name) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ja';
  var localeKey = convertLocaleToLocaleKey(locale);
  return SEKAI_CHARACTER_NAMES[name][localeKey] || SEKAI_CHARACTER_NAMES[name]['ja'];
};

var defaultTheme = {
  palette: {
    sekai: COLORS_SEKAI_KEYS.Miku,
    mode: LIGHT_MODE
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif'
  }
};
var createSekai = function createSekai(option) {
  var _typography$fontFamil;
  var palette = option.palette,
    _option$typography = option.typography,
    typography = _option$typography === void 0 ? {} : _option$typography;
  var sekaiTheme = {
    palette: {
      sekai: palette.sekai,
      mode: palette.mode || defaultTheme.palette.mode
    },
    typography: {
      fontFamily: (_typography$fontFamil = typography.fontFamily) !== null && _typography$fontFamil !== void 0 ? _typography$fontFamil : defaultTheme.typography.fontFamily
    }
  };
  return sekaiTheme;
};

export { Accordion, AnnotationText, Backdrop, BasicButton, BodyText, COLORS_SEKAI_KEYS, Card, CardContent, CardTitle, Checkbox, DARK_MODE, DetailText, Dialog, DialogButtons, DialogTitleHeader, DoReMeetEffect, Drawer, Dropdown, DropdownContent, HamburgerButton, IntoTheSekai, LIGHT_MODE, List, ListContext, ListItemButton, ListItemText, Loading, NamePlate, ORIENTATION, OutlineText, Pagination, PrskLinkCard, ScrollTopButton, SekaiAnnotationText, SekaiBodyText, SekaiDetailText, StickyNote, StrongButton, StylishButton, TextField, TextLink, Toast, Tooltip, TypewriterText, WindowDialog, XoMikuDialog, XxMikuDialog, YourSekaiContext, YourSekaiProvider, colorsSekai, convertHexToRgb, convertHexToRgba, convertHexToRgbaMixWithBlackOrWhite, createSekai, createSharedValueProvider, deserializeData, deserializeDataWithTemplate, fireOnEnterKey, fireOnEscapeKey, fireOnSpaceKey, getCurrentTime, getCustomCurrentTime, getFormattedTime, getSekaiCharacterName, isValidDateString, serializeData, shuffleArray, useCreateSekai, useCurrentTime, useInnerSize, useOrientation, useSessionStorage, useTabletSize, useThemeMode };
