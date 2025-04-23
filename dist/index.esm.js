import React, { useState, useEffect, createContext, useMemo, useContext, useRef, forwardRef, useCallback } from 'react';
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

function ownKeys$m(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$m(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$m(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$m(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
      return _objectSpread$m(_objectSpread$m({}, pre), {}, {
        palette: _objectSpread$m(_objectSpread$m({}, pre.palette), {}, {
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

var useCreateSekai = function useCreateSekai() {
  var context = useContext(YourSekaiContext);
  if (!context) {
    throw new Error('useCreateSekai must be used within a YourSekaiProvider');
  }
  return context;
};

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
  var sekaiColor = context ? colorsSekai[option.sekai || useCreateSekai().sekaiTheme.palette.sekai] : colorsSekai[defaultTheme$1.palette.sekai];
  var modeTheme = context ? option.mode || useCreateSekai().sekaiTheme.palette.mode : defaultTheme$1.palette.mode;
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

var convertHexToRgb = function convertHexToRgb(hex) {
  if (!/^#([0-9A-Fa-f]{6})$/.test(hex)) {
    throw new Error('Invalid hex color format. Use #RRGGBB');
  }
  var r = parseInt(hex.slice(1, 3), 16);
  var g = parseInt(hex.slice(3, 5), 16);
  var b = parseInt(hex.slice(5, 7), 16);
  return "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
};
var convertHexToRgba = function convertHexToRgba(hex, alpha) {
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
var convertHexToRgbMixWithWhite = function convertHexToRgbMixWithWhite(hex, alpha) {
  if (!/^#([0-9A-Fa-f]{6})$/.test(hex)) {
    throw new Error('Invalid hex color format. Use #RRGGBB');
  }
  if (alpha < 0 || alpha > 1) {
    throw new Error('Alpha must be between 0 and 1');
  }
  var r = parseInt(hex.slice(1, 3), 16);
  var g = parseInt(hex.slice(3, 5), 16);
  var b = parseInt(hex.slice(5, 7), 16);
  var white = 255;
  var mixR = Math.round(r * alpha + white * (1 - alpha));
  var mixG = Math.round(g * alpha + white * (1 - alpha));
  var mixB = Math.round(b * alpha + white * (1 - alpha));
  return "rgb(".concat(mixR, ", ").concat(mixG, ", ").concat(mixB, ")");
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

var css_248z$m = "/* Styles for common color */\n/* Styles for z-index */\n.global-module_sekai-color-light__HfMHF {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.global-module_sekai-color-dark__6YhnV {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.global-module_sekai-overlay__mmwzM, .global-module_sekai-overlay-dark__6yGpR, .global-module_sekai-overlay-light__HL9EZ {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.global-module_sekai-overlay-light__HL9EZ {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.global-module_sekai-overlay-dark__6yGpR {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.global-module_sekai-flex-center__g0QI6 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.global-module_sekai-absolute-center__VTxH3 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.global-module_sekai-invisible-scroll__hmrCH {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.global-module_sekai-invisible-scroll__hmrCH::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.global-module_sekai-mb-8__ktEHx {\n  margin-bottom: 8px;\n}\n\n.global-module_sekai-mb-16__6mRfr {\n  margin-bottom: 16px;\n}\n\n.global-module_sekai-mb-24__tgmAP {\n  margin-bottom: 24px;\n}";
var globalStyles = {"sekai-color-light":"global-module_sekai-color-light__HfMHF","sekai-color-dark":"global-module_sekai-color-dark__6YhnV","sekai-overlay":"global-module_sekai-overlay__mmwzM","sekai-overlay-dark":"global-module_sekai-overlay-dark__6yGpR","sekai-overlay-light":"global-module_sekai-overlay-light__HL9EZ","sekai-flex-center":"global-module_sekai-flex-center__g0QI6","sekai-absolute-center":"global-module_sekai-absolute-center__VTxH3","sekai-invisible-scroll":"global-module_sekai-invisible-scroll__hmrCH","sekai-mb-8":"global-module_sekai-mb-8__ktEHx","sekai-mb-16":"global-module_sekai-mb-16__6mRfr","sekai-mb-24":"global-module_sekai-mb-24__tgmAP"};
styleInject(css_248z$m);

var css_248z$l = ".Accordion-module_sekai-accordion-container__LCxry {\n  width: 100%;\n}\n\n.Accordion-module_sekai-accordion-summary__IkhFf {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  min-height: 40px;\n  font-weight: bold;\n  border: none;\n  padding: 4px 10px;\n}\n.Accordion-module_sekai-accordion-summary__IkhFf:focus-visible {\n  outline: 1px solid var(--sekai-color);\n  background-color: var(--sekai-color-hover);\n}\n.Accordion-module_sekai-accordion-summary__IkhFf .Accordion-module_sekai-accordion-summary-text__EyeSy {\n  margin: 0;\n}\n.Accordion-module_sekai-accordion-summary__IkhFf .Accordion-module_sekai-accordion-summary-icon__yDBmI {\n  width: 18px;\n  height: 18px;\n  transition: transform 0.3s ease-out;\n}\n.Accordion-module_sekai-accordion-summary__IkhFf .Accordion-module_sekai-accordion-summary-icon__yDBmI.Accordion-module_sekai-icon-open__Tj6I0 {\n  transform: rotate(0);\n}\n.Accordion-module_sekai-accordion-summary__IkhFf .Accordion-module_sekai-accordion-summary-icon__yDBmI.Accordion-module_sekai-icon-close__9yyDB {\n  transform: rotate(-180deg);\n}\n\n.Accordion-module_sekai-web-horizon__q2Dio {\n  margin: 0;\n  border: none;\n  width: 100%;\n  height: 1px;\n  background-color: var(--sekai-color);\n}\n\n.Accordion-module_sekai-accordion-details__92WkS {\n  overflow: hidden;\n  padding: 0 10px;\n}\n.Accordion-module_sekai-accordion-details__92WkS .Accordion-module_sekai-detail-text__oPWs- {\n  margin: 0 0 5px 0;\n}";
var styles$l = {"sekai-accordion-container":"Accordion-module_sekai-accordion-container__LCxry","sekai-accordion-summary":"Accordion-module_sekai-accordion-summary__IkhFf","sekai-accordion-summary-text":"Accordion-module_sekai-accordion-summary-text__EyeSy","sekai-accordion-summary-icon":"Accordion-module_sekai-accordion-summary-icon__yDBmI","sekai-icon-open":"Accordion-module_sekai-icon-open__Tj6I0","sekai-icon-close":"Accordion-module_sekai-icon-close__9yyDB","sekai-web-horizon":"Accordion-module_sekai-web-horizon__q2Dio","sekai-accordion-details":"Accordion-module_sekai-accordion-details__92WkS","sekai-detail-text":"Accordion-module_sekai-detail-text__oPWs-"};
styleInject(css_248z$l);

var _excluded$k = ["sekai", "themeMode", "summary", "summaryStyles", "defaultOpen", "details"];
function ownKeys$l(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$l(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$l(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$l(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Accordion = function Accordion(_ref) {
  var sekai = _ref.sekai,
    themeMode = _ref.themeMode,
    summary = _ref.summary,
    summaryStyles = _ref.summaryStyles,
    _ref$defaultOpen = _ref.defaultOpen,
    defaultOpen = _ref$defaultOpen === void 0 ? false : _ref$defaultOpen,
    details = _ref.details,
    rest = _objectWithoutProperties(_ref, _excluded$k);
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
    className: clsx(styles$l['sekai-accordion-container'], rest.className),
    style: _objectSpread$l(_objectSpread$l({}, optionStyle), rest.style)
  }), /*#__PURE__*/React.createElement("button", {
    className: clsx(styles$l['sekai-accordion-summary'], globalStyles["sekai-color-".concat(modeTheme)], summaryStyles),
    onClick: handleOpenClose,
    id: "accordion-summary",
    "aria-expanded": openAccordion,
    "aria-controls": "details-contents"
  }, /*#__PURE__*/React.createElement("p", {
    className: styles$l['sekai-accordion-summary-text']
  }, summary), /*#__PURE__*/React.createElement(ChevronSvg, {
    className: clsx(styles$l["sekai-accordion-summary-icon"], openAccordion ? styles$l['sekai-icon-open'] : styles$l['sekai-icon-close']),
    sekai: sekai,
    themeMode: themeMode,
    vector: "up"
  })), /*#__PURE__*/React.createElement("hr", {
    className: styles$l['sekai-web-horizon']
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
  var animationDetailsStyles = _objectSpread$l(_objectSpread$l({
    maxHeight: open ? heightDetails ? "".concat(heightDetails, "px") : 'none' : '0px',
    opacity: open ? 1 : 0
  }, open && {
    margin: '10px 0'
  }), {}, {
    transition: 'max-height 0.3s ease-out, opacity 0.3s ease-out, margin 0.3s ease-out'
  });
  var renderDetails = function renderDetails(details) {
    if (isString(details)) return /*#__PURE__*/React.createElement(DetailText, {
      text: details
    });
    if (isStringArray(details)) {
      return details.map(function (el) {
        return /*#__PURE__*/React.createElement(DetailText, {
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
    className: styles$l['sekai-accordion-details'],
    style: animationDetailsStyles
  }, renderDetails(details));
};
var isString = function isString(el) {
  return typeof el === 'string';
};
var isStringArray = function isStringArray(el) {
  return Array.isArray(el) && el.every(isString);
};
var DetailText = function DetailText(_ref3) {
  var text = _ref3.text;
  return /*#__PURE__*/React.createElement("p", {
    className: styles$l['sekai-detail-text']
  }, text);
};

var css_248z$k = ".BasicButton-module_sekai-basic-button__VyCUN, .BasicButton-module_sekai-basic-button-dark__6gtPa, .BasicButton-module_sekai-basic-button-light__4e-cr {\n  padding: 5px 10px;\n  border-radius: 10px;\n  min-height: 40px;\n}\n.BasicButton-module_sekai-basic-button__VyCUN:disabled, .BasicButton-module_sekai-basic-button-dark__6gtPa:disabled, .BasicButton-module_sekai-basic-button-light__4e-cr:disabled {\n  opacity: 0.5;\n}\n.BasicButton-module_sekai-basic-button__VyCUN:disabled:hover, .BasicButton-module_sekai-basic-button-dark__6gtPa:disabled:hover, .BasicButton-module_sekai-basic-button-light__4e-cr:disabled:hover {\n  background-color: transparent;\n}\n\n.BasicButton-module_sekai-basic-button-light__4e-cr {\n  border: 2px solid var(--sekai-color);\n}\n.BasicButton-module_sekai-basic-button-light__4e-cr:hover {\n  background-color: var(--sekai-color-hover);\n}\n.BasicButton-module_sekai-basic-button-light__4e-cr:focus-visible {\n  outline: 1px solid var(--sekai-color);\n}\n\n.BasicButton-module_sekai-basic-button-dark__6gtPa {\n  border: 2px solid var(--sekai-color);\n}\n.BasicButton-module_sekai-basic-button-dark__6gtPa:hover {\n  background-color: var(--sekai-color-hover);\n}\n.BasicButton-module_sekai-basic-button-dark__6gtPa:focus-visible {\n  outline: 1px solid var(--sekai-color);\n}";
var styles$k = {"sekai-basic-button":"BasicButton-module_sekai-basic-button__VyCUN","sekai-basic-button-dark":"BasicButton-module_sekai-basic-button-dark__6gtPa","sekai-basic-button-light":"BasicButton-module_sekai-basic-button-light__4e-cr"};
styleInject(css_248z$k);

var _excluded$j = ["sekai", "withText", "themeMode", "children", "disabled"];
function ownKeys$k(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$k(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$k(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$k(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var BasicButton = function BasicButton(_ref) {
  var sekai = _ref.sekai,
    _ref$withText = _ref.withText,
    withText = _ref$withText === void 0 ? false : _ref$withText,
    themeMode = _ref.themeMode,
    children = _ref.children,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    rest = _objectWithoutProperties(_ref, _excluded$j);
  var _useOptionalSekai = useOptionalSekai({
      sekai: sekai,
      mode: themeMode
    }),
    sekaiColor = _useOptionalSekai.sekaiColor,
    modeTheme = _useOptionalSekai.modeTheme,
    isLight = _useOptionalSekai.isLight;
  var sekaiColorHover = convertHexToRgba(sekaiColor, isLight ? 0.1 : 0.3);
  var optionStyle = _objectSpread$k({
    '--sekai-color': sekaiColor,
    '--sekai-color-hover': sekaiColorHover
  }, withText && {
    color: sekaiColor
  });
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    type: "button",
    className: clsx(styles$k["sekai-basic-button-".concat(modeTheme)], globalStyles["sekai-color-".concat(modeTheme)], rest.className),
    style: _objectSpread$k(_objectSpread$k({}, optionStyle), rest.style),
    disabled: disabled
  }), children);
};

var css_248z$j = "/* Styles for common color */\n/* Styles for z-index */\n.HamburgerButton-module_sekai-color-light__IRmQz {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.HamburgerButton-module_sekai-color-dark__x8y3p {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.HamburgerButton-module_sekai-overlay__CXS1I, .HamburgerButton-module_sekai-overlay-dark__lqHwY, .HamburgerButton-module_sekai-overlay-light__3bEUx {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.HamburgerButton-module_sekai-overlay-light__3bEUx {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.HamburgerButton-module_sekai-overlay-dark__lqHwY {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.HamburgerButton-module_sekai-flex-center__59gay {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.HamburgerButton-module_sekai-absolute-center__AWHYK {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.HamburgerButton-module_sekai-invisible-scroll__Up0ts {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.HamburgerButton-module_sekai-invisible-scroll__Up0ts::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.HamburgerButton-module_sekai-mb-8__b6Ixu {\n  margin-bottom: 8px;\n}\n\n.HamburgerButton-module_sekai-mb-16__4Pcll {\n  margin-bottom: 16px;\n}\n\n.HamburgerButton-module_sekai-mb-24__MT3YS {\n  margin-bottom: 24px;\n}\n\n.HamburgerButton-module_sekai-hamburger-button__10Par, .HamburgerButton-module_sekai-hamburger-button-dark__6slJ0, .HamburgerButton-module_sekai-hamburger-button-light__u2tFo {\n  position: relative;\n  width: 40px;\n  height: 40px;\n  margin: 10px;\n  padding: 0;\n  border: none;\n  border-radius: 50%;\n  background-color: var(--sekai-color-bg);\n}\n.HamburgerButton-module_sekai-hamburger-button__10Par .HamburgerButton-module_sekai-hamburger-line-light__1oRfq, .HamburgerButton-module_sekai-hamburger-button-dark__6slJ0 .HamburgerButton-module_sekai-hamburger-line-light__1oRfq, .HamburgerButton-module_sekai-hamburger-button-light__u2tFo .HamburgerButton-module_sekai-hamburger-line-light__1oRfq {\n  background-color: rgb(77.25, 77.25, 77.25);\n}\n.HamburgerButton-module_sekai-hamburger-button__10Par .HamburgerButton-module_sekai-hamburger-line-dark__wGnsu, .HamburgerButton-module_sekai-hamburger-button-dark__6slJ0 .HamburgerButton-module_sekai-hamburger-line-dark__wGnsu, .HamburgerButton-module_sekai-hamburger-button-light__u2tFo .HamburgerButton-module_sekai-hamburger-line-dark__wGnsu {\n  background-color: rgb(229.5, 229.5, 229.5);\n}\n.HamburgerButton-module_sekai-hamburger-button__10Par span, .HamburgerButton-module_sekai-hamburger-button-dark__6slJ0 span, .HamburgerButton-module_sekai-hamburger-button-light__u2tFo span {\n  position: absolute;\n  display: block;\n  height: 4px;\n  width: 50%;\n  left: 50%;\n  transform: translateX(-50%);\n  transition: transform 0.2s ease-in-out, top 0.2s ease-in-out, opacity 0.2s ease-in-out;\n}\n.HamburgerButton-module_sekai-hamburger-button__10Par span:nth-child(1), .HamburgerButton-module_sekai-hamburger-button-dark__6slJ0 span:nth-child(1), .HamburgerButton-module_sekai-hamburger-button-light__u2tFo span:nth-child(1) {\n  top: 11.3333333333px;\n  transform-origin: center;\n}\n.HamburgerButton-module_sekai-hamburger-button__10Par span:nth-child(1).HamburgerButton-module_sekai-open__BLicz, .HamburgerButton-module_sekai-hamburger-button-dark__6slJ0 span:nth-child(1).HamburgerButton-module_sekai-open__BLicz, .HamburgerButton-module_sekai-hamburger-button-light__u2tFo span:nth-child(1).HamburgerButton-module_sekai-open__BLicz {\n  top: 50%;\n  transform: translate(-50%, -50%) rotate(45deg);\n}\n.HamburgerButton-module_sekai-hamburger-button__10Par span:nth-child(2), .HamburgerButton-module_sekai-hamburger-button-dark__6slJ0 span:nth-child(2), .HamburgerButton-module_sekai-hamburger-button-light__u2tFo span:nth-child(2) {\n  top: calc(50% - 2px);\n}\n.HamburgerButton-module_sekai-hamburger-button__10Par span:nth-child(2).HamburgerButton-module_sekai-open__BLicz, .HamburgerButton-module_sekai-hamburger-button-dark__6slJ0 span:nth-child(2).HamburgerButton-module_sekai-open__BLicz, .HamburgerButton-module_sekai-hamburger-button-light__u2tFo span:nth-child(2).HamburgerButton-module_sekai-open__BLicz {\n  opacity: 0;\n}\n.HamburgerButton-module_sekai-hamburger-button__10Par span:nth-child(3), .HamburgerButton-module_sekai-hamburger-button-dark__6slJ0 span:nth-child(3), .HamburgerButton-module_sekai-hamburger-button-light__u2tFo span:nth-child(3) {\n  top: 24.6666666667px;\n  transform-origin: center;\n}\n.HamburgerButton-module_sekai-hamburger-button__10Par span:nth-child(3).HamburgerButton-module_sekai-open__BLicz, .HamburgerButton-module_sekai-hamburger-button-dark__6slJ0 span:nth-child(3).HamburgerButton-module_sekai-open__BLicz, .HamburgerButton-module_sekai-hamburger-button-light__u2tFo span:nth-child(3).HamburgerButton-module_sekai-open__BLicz {\n  top: 50%;\n  transform: translate(-50%, -50%) rotate(-45deg);\n}\n\n.HamburgerButton-module_sekai-hamburger-button-light__u2tFo:focus-visible {\n  outline: 1px solid rgb(77.25, 77.25, 77.25);\n}\n.HamburgerButton-module_sekai-hamburger-button-light__u2tFo .HamburgerButton-module_sekai-hamburger-line__h-Hvg {\n  background-color: rgb(77.25, 77.25, 77.25);\n}\n\n.HamburgerButton-module_sekai-hamburger-button-dark__6slJ0:focus-visible {\n  outline: 1px solid rgb(229.5, 229.5, 229.5);\n}\n.HamburgerButton-module_sekai-hamburger-button-dark__6slJ0 .HamburgerButton-module_sekai-hamburger-line__h-Hvg {\n  background-color: rgb(229.5, 229.5, 229.5);\n}";
var styles$j = {"sekai-color-light":"HamburgerButton-module_sekai-color-light__IRmQz","sekai-color-dark":"HamburgerButton-module_sekai-color-dark__x8y3p","sekai-overlay":"HamburgerButton-module_sekai-overlay__CXS1I","sekai-overlay-dark":"HamburgerButton-module_sekai-overlay-dark__lqHwY","sekai-overlay-light":"HamburgerButton-module_sekai-overlay-light__3bEUx","sekai-flex-center":"HamburgerButton-module_sekai-flex-center__59gay","sekai-absolute-center":"HamburgerButton-module_sekai-absolute-center__AWHYK","sekai-invisible-scroll":"HamburgerButton-module_sekai-invisible-scroll__Up0ts","sekai-mb-8":"HamburgerButton-module_sekai-mb-8__b6Ixu","sekai-mb-16":"HamburgerButton-module_sekai-mb-16__4Pcll","sekai-mb-24":"HamburgerButton-module_sekai-mb-24__MT3YS","sekai-hamburger-button":"HamburgerButton-module_sekai-hamburger-button__10Par","sekai-hamburger-button-dark":"HamburgerButton-module_sekai-hamburger-button-dark__6slJ0","sekai-hamburger-button-light":"HamburgerButton-module_sekai-hamburger-button-light__u2tFo","sekai-hamburger-line-light":"HamburgerButton-module_sekai-hamburger-line-light__1oRfq","sekai-hamburger-line-dark":"HamburgerButton-module_sekai-hamburger-line-dark__wGnsu","sekai-open":"HamburgerButton-module_sekai-open__BLicz","sekai-hamburger-line":"HamburgerButton-module_sekai-hamburger-line__h-Hvg"};
styleInject(css_248z$j);

var _excluded$i = ["sekai", "themeMode", "open"];
function ownKeys$j(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$j(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$j(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$j(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var HamburgerButton = function HamburgerButton(_ref) {
  var sekai = _ref.sekai,
    themeMode = _ref.themeMode,
    open = _ref.open,
    rest = _objectWithoutProperties(_ref, _excluded$i);
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
    className: clsx(styles$j["sekai-hamburger-button-".concat(modeTheme)], rest.className),
    style: _objectSpread$j(_objectSpread$j({}, optionStyle), rest.style),
    "aria-expanded": open,
    "aria-label": open ? 'Close menu' : 'Open menu'
  }), Array.from({
    length: 3
  }).map(function (_, index) {
    return /*#__PURE__*/React.createElement("span", {
      key: "hamburger-line-".concat(index),
      className: clsx(styles$j['sekai-hamburger-line'], open && styles$j['sekai-open'])
    });
  }));
};

var css_248z$i = "/* Styles for common color */\n/* Styles for z-index */\n.StrongButton-module_sekai-color-light__S2FuU {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.StrongButton-module_sekai-color-dark__Nmzlm {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.StrongButton-module_sekai-overlay__YhF8w, .StrongButton-module_sekai-overlay-dark__5Jx1Y, .StrongButton-module_sekai-overlay-light__Q34oR {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.StrongButton-module_sekai-overlay-light__Q34oR {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.StrongButton-module_sekai-overlay-dark__5Jx1Y {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.StrongButton-module_sekai-flex-center__SaKWZ {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.StrongButton-module_sekai-absolute-center__iYQ4r {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.StrongButton-module_sekai-invisible-scroll__qrDva {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.StrongButton-module_sekai-invisible-scroll__qrDva::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.StrongButton-module_sekai-mb-8__JL2yt {\n  margin-bottom: 8px;\n}\n\n.StrongButton-module_sekai-mb-16__T5bZ7 {\n  margin-bottom: 16px;\n}\n\n.StrongButton-module_sekai-mb-24__HnymN {\n  margin-bottom: 24px;\n}\n\n.StrongButton-module_sekai-strong-button__AQ7N0, .StrongButton-module_sekai-strong-button-dark__t7x5O, .StrongButton-module_sekai-strong-button-light__2NC9s {\n  padding: 5px 10px;\n  border-radius: 10px;\n  min-height: 40px;\n  border: 2px solid var(--sekai-color);\n  background-color: var(--sekai-color-bg);\n}\n.StrongButton-module_sekai-strong-button__AQ7N0:hover, .StrongButton-module_sekai-strong-button-dark__t7x5O:hover, .StrongButton-module_sekai-strong-button-light__2NC9s:hover {\n  background-color: var(--sekai-color);\n}\n.StrongButton-module_sekai-strong-button__AQ7N0:disabled, .StrongButton-module_sekai-strong-button-dark__t7x5O:disabled, .StrongButton-module_sekai-strong-button-light__2NC9s:disabled {\n  opacity: 0.6;\n}\n.StrongButton-module_sekai-strong-button__AQ7N0:disabled:hover, .StrongButton-module_sekai-strong-button-dark__t7x5O:disabled:hover, .StrongButton-module_sekai-strong-button-light__2NC9s:disabled:hover {\n  background-color: var(--sekai-color-bg);\n}\n\n.StrongButton-module_sekai-strong-button-light__2NC9s {\n  color: #212121;\n}\n.StrongButton-module_sekai-strong-button-light__2NC9s:disabled {\n  color: rgb(119.58, 119.58, 119.58);\n}\n\n.StrongButton-module_sekai-strong-button-dark__t7x5O {\n  color: #e0e0e0;\n}\n.StrongButton-module_sekai-strong-button-dark__t7x5O:disabled {\n  color: rgb(236.09, 236.09, 236.09);\n}";
var styles$i = {"sekai-color-light":"StrongButton-module_sekai-color-light__S2FuU","sekai-color-dark":"StrongButton-module_sekai-color-dark__Nmzlm","sekai-overlay":"StrongButton-module_sekai-overlay__YhF8w","sekai-overlay-dark":"StrongButton-module_sekai-overlay-dark__5Jx1Y","sekai-overlay-light":"StrongButton-module_sekai-overlay-light__Q34oR","sekai-flex-center":"StrongButton-module_sekai-flex-center__SaKWZ","sekai-absolute-center":"StrongButton-module_sekai-absolute-center__iYQ4r","sekai-invisible-scroll":"StrongButton-module_sekai-invisible-scroll__qrDva","sekai-mb-8":"StrongButton-module_sekai-mb-8__JL2yt","sekai-mb-16":"StrongButton-module_sekai-mb-16__T5bZ7","sekai-mb-24":"StrongButton-module_sekai-mb-24__HnymN","sekai-strong-button":"StrongButton-module_sekai-strong-button__AQ7N0","sekai-strong-button-dark":"StrongButton-module_sekai-strong-button-dark__t7x5O","sekai-strong-button-light":"StrongButton-module_sekai-strong-button-light__2NC9s"};
styleInject(css_248z$i);

var _excluded$h = ["sekai", "themeMode", "children", "disabled"];
function ownKeys$i(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$i(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$i(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$i(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var StrongButton = function StrongButton(_ref) {
  var sekai = _ref.sekai,
    themeMode = _ref.themeMode,
    children = _ref.children,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    rest = _objectWithoutProperties(_ref, _excluded$h);
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
    className: clsx(styles$i["sekai-strong-button-".concat(modeTheme)], rest.className),
    style: _objectSpread$i(_objectSpread$i({}, optionStyle), rest.style),
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

var css_248z$h = "/* Styles for common color */\n/* Styles for z-index */\n.StylishButton-module_sekai-color-light__aJmGs {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.StylishButton-module_sekai-color-dark__fg15e {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.StylishButton-module_sekai-overlay__veq0W, .StylishButton-module_sekai-overlay-dark__765zj, .StylishButton-module_sekai-overlay-light__JvLd- {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.StylishButton-module_sekai-overlay-light__JvLd- {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.StylishButton-module_sekai-overlay-dark__765zj {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.StylishButton-module_sekai-flex-center__t7Ca- {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.StylishButton-module_sekai-absolute-center__H8Cig {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.StylishButton-module_sekai-invisible-scroll__0kP8n {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.StylishButton-module_sekai-invisible-scroll__0kP8n::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.StylishButton-module_sekai-mb-8__PrcBk {\n  margin-bottom: 8px;\n}\n\n.StylishButton-module_sekai-mb-16__cmX8q {\n  margin-bottom: 16px;\n}\n\n.StylishButton-module_sekai-mb-24__gXYSN {\n  margin-bottom: 24px;\n}\n\n.StylishButton-module_sekai-stylish-button__8HgBf, .StylishButton-module_sekai-stylish-button-dark__pYL1N, .StylishButton-module_sekai-stylish-button-light__Ep9zc {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background-color: inherit;\n  border: none;\n  padding: 5px 10px;\n  border: 2px solid var(--sekai-color);\n  height: 40px;\n}\n.StylishButton-module_sekai-stylish-button__8HgBf:focus-visible, .StylishButton-module_sekai-stylish-button-dark__pYL1N:focus-visible, .StylishButton-module_sekai-stylish-button-light__Ep9zc:focus-visible {\n  outline: 1px solid var(--sekai-color);\n}\n.StylishButton-module_sekai-stylish-button__8HgBf:disabled, .StylishButton-module_sekai-stylish-button-dark__pYL1N:disabled, .StylishButton-module_sekai-stylish-button-light__Ep9zc:disabled {\n  opacity: 0.5;\n}\n.StylishButton-module_sekai-stylish-button__8HgBf:disabled:hover, .StylishButton-module_sekai-stylish-button-dark__pYL1N:disabled:hover, .StylishButton-module_sekai-stylish-button-light__Ep9zc:disabled:hover {\n  background-color: transparent;\n}\n.StylishButton-module_sekai-stylish-button__8HgBf:not(:disabled):hover .StylishButton-module_sekai-stylish-button-decoration__E-7g3, .StylishButton-module_sekai-stylish-button-dark__pYL1N:not(:disabled):hover .StylishButton-module_sekai-stylish-button-decoration__E-7g3, .StylishButton-module_sekai-stylish-button-light__Ep9zc:not(:disabled):hover .StylishButton-module_sekai-stylish-button-decoration__E-7g3 {\n  top: 0;\n  left: 0;\n}\n\n.StylishButton-module_sekai-stylish-button-light__Ep9zc {\n  color: #212121;\n}\n\n.StylishButton-module_sekai-stylish-button-dark__pYL1N {\n  color: #e0e0e0;\n}\n\n.StylishButton-module_sekai-stylish-button-decoration__E-7g3 {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  width: 100%;\n  height: 100%;\n  background-color: var(--sekai-color-hover);\n  transition: all 0.2s ease-in-out;\n}\n\n.StylishButton-module_sekai-stylish-arrow-icon__Kw3g4 {\n  width: 16px;\n  height: 16px;\n}";
var styles$h = {"sekai-color-light":"StylishButton-module_sekai-color-light__aJmGs","sekai-color-dark":"StylishButton-module_sekai-color-dark__fg15e","sekai-overlay":"StylishButton-module_sekai-overlay__veq0W","sekai-overlay-dark":"StylishButton-module_sekai-overlay-dark__765zj","sekai-overlay-light":"StylishButton-module_sekai-overlay-light__JvLd-","sekai-flex-center":"StylishButton-module_sekai-flex-center__t7Ca-","sekai-absolute-center":"StylishButton-module_sekai-absolute-center__H8Cig","sekai-invisible-scroll":"StylishButton-module_sekai-invisible-scroll__0kP8n","sekai-mb-8":"StylishButton-module_sekai-mb-8__PrcBk","sekai-mb-16":"StylishButton-module_sekai-mb-16__cmX8q","sekai-mb-24":"StylishButton-module_sekai-mb-24__gXYSN","sekai-stylish-button":"StylishButton-module_sekai-stylish-button__8HgBf","sekai-stylish-button-dark":"StylishButton-module_sekai-stylish-button-dark__pYL1N","sekai-stylish-button-light":"StylishButton-module_sekai-stylish-button-light__Ep9zc","sekai-stylish-button-decoration":"StylishButton-module_sekai-stylish-button-decoration__E-7g3","sekai-stylish-arrow-icon":"StylishButton-module_sekai-stylish-arrow-icon__Kw3g4"};
styleInject(css_248z$h);

var _excluded$g = ["sekai", "themeMode", "children", "disabled", "arrowIcon"];
function ownKeys$h(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$h(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$h(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$h(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var StylishButton = function StylishButton(_ref) {
  var sekai = _ref.sekai,
    themeMode = _ref.themeMode,
    children = _ref.children,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$arrowIcon = _ref.arrowIcon,
    arrowIcon = _ref$arrowIcon === void 0 ? true : _ref$arrowIcon,
    rest = _objectWithoutProperties(_ref, _excluded$g);
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
    className: clsx(styles$h["sekai-stylish-button-".concat(modeTheme)], rest.className),
    style: _objectSpread$h(_objectSpread$h({}, optionStyle), rest.style),
    disabled: disabled
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$h['sekai-stylish-button-decoration']
  }), children, arrowIcon ? /*#__PURE__*/React.createElement(ArrowSvg, {
    className: styles$h['sekai-stylish-arrow-icon'],
    vector: "right"
  }) : null);
};

var css_248z$g = ".Card-module_sekai-card__yjfwU {\n  box-shadow: 0px 2px 1px -1px var(--sekai-color-shadow), 0px 1px 1px 0px var(--sekai-color-shadow), 0px 1px 3px 0px var(--sekai-color-shadow), 0px -0.5px 1px 0px var(--sekai-color-shadow);\n  border-radius: 5px;\n  background-clip: padding-box;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.Card-module_sekai-card-content__XtdPc {\n  padding: 16px;\n  border-radius: 5px;\n}\n\n.Card-module_sekai-card-title__Os2hg {\n  margin: 0;\n}\n.Card-module_sekai-card-title__Os2hg.Card-module_sekai-underline__oP8Wv {\n  text-decoration: underline;\n  text-decoration-color: var(--sekai-color);\n}";
var styles$g = {"sekai-card":"Card-module_sekai-card__yjfwU","sekai-card-content":"Card-module_sekai-card-content__XtdPc","sekai-card-title":"Card-module_sekai-card-title__Os2hg","sekai-underline":"Card-module_sekai-underline__oP8Wv"};
styleInject(css_248z$g);

var _excluded$f = ["sekai", "themeMode", "children"],
  _excluded2$2 = ["themeMode", "children"],
  _excluded3$1 = ["sekai", "themeMode", "title", "underline"];
function ownKeys$g(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$g(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$g(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$g(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Card = function Card(_ref) {
  var sekai = _ref.sekai,
    themeMode = _ref.themeMode,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, _excluded$f);
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
    className: clsx(styles$g['sekai-card'], globalStyles["sekai-color-".concat(modeTheme)], rest.className),
    style: _objectSpread$g(_objectSpread$g({}, optionStyle), rest.style)
  }), children);
};
var CardContent = function CardContent(_ref2) {
  var themeMode = _ref2.themeMode,
    children = _ref2.children,
    rest = _objectWithoutProperties(_ref2, _excluded2$2);
  var _useOptionalSekai2 = useOptionalSekai({
      mode: themeMode
    }),
    modeTheme = _useOptionalSekai2.modeTheme;
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: clsx(styles$g['sekai-card-content'], globalStyles["sekai-color-".concat(modeTheme)], rest.className)
  }), children);
};
var CardTitle = function CardTitle(_ref3) {
  var sekai = _ref3.sekai,
    themeMode = _ref3.themeMode,
    title = _ref3.title,
    underline = _ref3.underline,
    rest = _objectWithoutProperties(_ref3, _excluded3$1);
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
    className: clsx(styles$g['sekai-card-title'], globalStyles["sekai-color-".concat(modeTheme)], underline && styles$g['sekai-underline'], rest.className),
    style: _objectSpread$g(_objectSpread$g({}, optionStyle), rest.style)
  }), title);
};

var css_248z$f = "/* Styles for common color */\n/* Styles for z-index */\n.NamePlate-module_sekai-color-light__fAjCm {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.NamePlate-module_sekai-color-dark__NNWi1 {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.NamePlate-module_sekai-overlay__Mb-tS, .NamePlate-module_sekai-overlay-dark__1oClF, .NamePlate-module_sekai-overlay-light__Vv7ku {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.NamePlate-module_sekai-overlay-light__Vv7ku {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.NamePlate-module_sekai-overlay-dark__1oClF {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.NamePlate-module_sekai-flex-center__z9JuY {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.NamePlate-module_sekai-absolute-center__7ENL3 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.NamePlate-module_sekai-invisible-scroll__ur4Pi {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.NamePlate-module_sekai-invisible-scroll__ur4Pi::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.NamePlate-module_sekai-mb-8__oS4g0 {\n  margin-bottom: 8px;\n}\n\n.NamePlate-module_sekai-mb-16__zza9A {\n  margin-bottom: 16px;\n}\n\n.NamePlate-module_sekai-mb-24__W9Re8 {\n  margin-bottom: 24px;\n}\n\n.NamePlate-module_sekai-name-plate-light__AtHDl {\n  color: #212121;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.NamePlate-module_sekai-name-plate-dark__P45Rm {\n  color: #e0e0e0;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.NamePlate-module_sekai-name-plate-color__O4oE8 {\n  color: var(--sekai-color);\n  font-size: 1.25em;\n  font-weight: bold;\n}";
var styles$f = {"sekai-color-light":"NamePlate-module_sekai-color-light__fAjCm","sekai-color-dark":"NamePlate-module_sekai-color-dark__NNWi1","sekai-overlay":"NamePlate-module_sekai-overlay__Mb-tS","sekai-overlay-dark":"NamePlate-module_sekai-overlay-dark__1oClF","sekai-overlay-light":"NamePlate-module_sekai-overlay-light__Vv7ku","sekai-flex-center":"NamePlate-module_sekai-flex-center__z9JuY","sekai-absolute-center":"NamePlate-module_sekai-absolute-center__7ENL3","sekai-invisible-scroll":"NamePlate-module_sekai-invisible-scroll__ur4Pi","sekai-mb-8":"NamePlate-module_sekai-mb-8__oS4g0","sekai-mb-16":"NamePlate-module_sekai-mb-16__zza9A","sekai-mb-24":"NamePlate-module_sekai-mb-24__W9Re8","sekai-name-plate-light":"NamePlate-module_sekai-name-plate-light__AtHDl","sekai-name-plate-dark":"NamePlate-module_sekai-name-plate-dark__P45Rm","sekai-name-plate-color":"NamePlate-module_sekai-name-plate-color__O4oE8"};
styleInject(css_248z$f);

var _excluded$e = ["sekai", "themeMode", "text", "colorCount"];
function ownKeys$f(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$f(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$f(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$f(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var NamePlate = function NamePlate(_ref) {
  var sekai = _ref.sekai,
    themeMode = _ref.themeMode,
    text = _ref.text,
    _ref$colorCount = _ref.colorCount,
    colorCount = _ref$colorCount === void 0 ? 1 : _ref$colorCount,
    rest = _objectWithoutProperties(_ref, _excluded$e);
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
    className: clsx(styles$f["sekai-name-plate-".concat(modeTheme)], rest.className),
    style: _objectSpread$f(_objectSpread$f({}, optionStyle), rest.style)
  }), /*#__PURE__*/React.createElement("span", {
    className: styles$f['sekai-name-plate-color']
  }, colorText), /*#__PURE__*/React.createElement("span", null, normalText));
};

var css_248z$e = "/* Styles for common color */\n/* Styles for z-index */\n.OutlineText-module_sekai-color-light__SLEeL {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.OutlineText-module_sekai-color-dark__THKPa {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.OutlineText-module_sekai-overlay__ArXyQ, .OutlineText-module_sekai-overlay-dark__fLHhn, .OutlineText-module_sekai-overlay-light__8wiYq {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.OutlineText-module_sekai-overlay-light__8wiYq {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.OutlineText-module_sekai-overlay-dark__fLHhn {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.OutlineText-module_sekai-flex-center__q2tvV {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.OutlineText-module_sekai-absolute-center__r-UAB {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.OutlineText-module_sekai-invisible-scroll__bB7dW {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.OutlineText-module_sekai-invisible-scroll__bB7dW::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.OutlineText-module_sekai-mb-8__zEzdE {\n  margin-bottom: 8px;\n}\n\n.OutlineText-module_sekai-mb-16__050Re {\n  margin-bottom: 16px;\n}\n\n.OutlineText-module_sekai-mb-24__dy4-6 {\n  margin-bottom: 24px;\n}\n\n.OutlineText-module_sekai-outline-text-light__o0dTZ {\n  color: #ffffff;\n  font-weight: bold;\n  position: relative;\n}\n.OutlineText-module_sekai-outline-text-light__o0dTZ::before {\n  content: attr(data-text);\n  position: absolute;\n  top: 0;\n  left: 0;\n  text-shadow: 0.75px 0.75px 0 var(--sekai-color), -0.75px 0.75px 0 var(--sekai-color), 0.75px -0.75px 0 var(--sekai-color), -0.75px -0.75px 0 var(--sekai-color), 0.75px 0 0 var(--sekai-color), -0.75px 0 0 var(--sekai-color), 0 0.75px 0 var(--sekai-color), 0 -0.75px 0 var(--sekai-color);\n}\n\n.OutlineText-module_sekai-outline-text-dark__Fk6Uk {\n  color: #121212;\n  font-weight: bold;\n  position: relative;\n}\n.OutlineText-module_sekai-outline-text-dark__Fk6Uk::before {\n  content: attr(data-text);\n  position: absolute;\n  top: 0;\n  left: 0;\n  text-shadow: 0.75px 0.75px 0 var(--sekai-color), -0.75px 0.75px 0 var(--sekai-color), 0.75px -0.75px 0 var(--sekai-color), -0.75px -0.75px 0 var(--sekai-color), 0.75px 0 0 var(--sekai-color), -0.75px 0 0 var(--sekai-color), 0 0.75px 0 var(--sekai-color), 0 -0.75px 0 var(--sekai-color);\n}";
var styles$e = {"sekai-color-light":"OutlineText-module_sekai-color-light__SLEeL","sekai-color-dark":"OutlineText-module_sekai-color-dark__THKPa","sekai-overlay":"OutlineText-module_sekai-overlay__ArXyQ","sekai-overlay-dark":"OutlineText-module_sekai-overlay-dark__fLHhn","sekai-overlay-light":"OutlineText-module_sekai-overlay-light__8wiYq","sekai-flex-center":"OutlineText-module_sekai-flex-center__q2tvV","sekai-absolute-center":"OutlineText-module_sekai-absolute-center__r-UAB","sekai-invisible-scroll":"OutlineText-module_sekai-invisible-scroll__bB7dW","sekai-mb-8":"OutlineText-module_sekai-mb-8__zEzdE","sekai-mb-16":"OutlineText-module_sekai-mb-16__050Re","sekai-mb-24":"OutlineText-module_sekai-mb-24__dy4-6","sekai-outline-text-light":"OutlineText-module_sekai-outline-text-light__o0dTZ","sekai-outline-text-dark":"OutlineText-module_sekai-outline-text-dark__Fk6Uk"};
styleInject(css_248z$e);

var _excluded$d = ["sekai", "themeMode", "text"];
function ownKeys$e(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$e(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$e(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$e(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var OutlineText = function OutlineText(_ref) {
  var sekai = _ref.sekai,
    themeMode = _ref.themeMode,
    text = _ref.text,
    rest = _objectWithoutProperties(_ref, _excluded$d);
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
    className: clsx(styles$e["sekai-outline-text-".concat(modeTheme)], rest.className),
    style: _objectSpread$e(_objectSpread$e({}, optionStyle), rest.style),
    "data-text": text,
    "aria-label": text
  }), text);
};

var css_248z$d = "/* Styles for common color */\n/* Styles for z-index */\n.PrskLinkCard-module_sekai-color-light__pjK4V {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.PrskLinkCard-module_sekai-color-dark__I-4oM {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.PrskLinkCard-module_sekai-overlay__AwRwz, .PrskLinkCard-module_sekai-overlay-dark__Sh6WT, .PrskLinkCard-module_sekai-overlay-light__WtveP {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.PrskLinkCard-module_sekai-overlay-light__WtveP {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.PrskLinkCard-module_sekai-overlay-dark__Sh6WT {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.PrskLinkCard-module_sekai-flex-center__EleVE {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.PrskLinkCard-module_sekai-absolute-center__0nvLE {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.PrskLinkCard-module_sekai-invisible-scroll__3M27K {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.PrskLinkCard-module_sekai-invisible-scroll__3M27K::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.PrskLinkCard-module_sekai-mb-8__pdEzh {\n  margin-bottom: 8px;\n}\n\n.PrskLinkCard-module_sekai-mb-16__n5Pgv {\n  margin-bottom: 16px;\n}\n\n.PrskLinkCard-module_sekai-mb-24__dBYh2 {\n  margin-bottom: 24px;\n}\n\n.PrskLinkCard-module_sekai-prsk-link-card-button__TknT6 {\n  display: flex;\n  position: relative;\n  border: none;\n  border-radius: 5px;\n  padding: 0;\n}\n.PrskLinkCard-module_sekai-prsk-link-card-button__TknT6:focus-visible {\n  outline: 1px solid var(--sekai-color);\n}\n.PrskLinkCard-module_sekai-prsk-link-card-button__TknT6 .PrskLinkCard-module_sekai-prsk-link-card-title__wuqzq {\n  font-size: 16px;\n  font-weight: 900;\n  color: #e0e0e0;\n  background-color: #636382;\n  padding: 0 5px;\n  margin: 5px;\n  height: -moz-fit-content;\n  height: fit-content;\n  z-index: 2;\n}\n.PrskLinkCard-module_sekai-prsk-link-card-button__TknT6 .PrskLinkCard-module_sekai-prsk-link-card-title__wuqzq.PrskLinkCard-module_sekai-title-effect-light__BwB-D {\n  mix-blend-mode: multiply;\n}\n.PrskLinkCard-module_sekai-prsk-link-card-button__TknT6 .PrskLinkCard-module_sekai-prsk-link-card-title__wuqzq.PrskLinkCard-module_sekai-title-effect-dark__WXiaO {\n  mix-blend-mode: screen;\n}\n.PrskLinkCard-module_sekai-prsk-link-card-button__TknT6 .PrskLinkCard-module_sekai-prsk-link-card-subtext__9Qlvw {\n  position: absolute;\n  opacity: 0.3;\n  left: 0;\n  bottom: 0;\n  line-height: 28px;\n  font-size: 28px;\n  z-index: 0;\n}\n.PrskLinkCard-module_sekai-prsk-link-card-button__TknT6 .PrskLinkCard-module_sekai-prsk-link-card-icon__2-5YL {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 60px;\n  height: 60px;\n  overflow: hidden;\n  border-bottom-right-radius: 5px;\n}\n.PrskLinkCard-module_sekai-prsk-link-card-button__TknT6 .PrskLinkCard-module_sekai-prsk-link-card-icon__2-5YL img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}";
var styles$d = {"sekai-color-light":"PrskLinkCard-module_sekai-color-light__pjK4V","sekai-color-dark":"PrskLinkCard-module_sekai-color-dark__I-4oM","sekai-overlay":"PrskLinkCard-module_sekai-overlay__AwRwz","sekai-overlay-dark":"PrskLinkCard-module_sekai-overlay-dark__Sh6WT","sekai-overlay-light":"PrskLinkCard-module_sekai-overlay-light__WtveP","sekai-flex-center":"PrskLinkCard-module_sekai-flex-center__EleVE","sekai-absolute-center":"PrskLinkCard-module_sekai-absolute-center__0nvLE","sekai-invisible-scroll":"PrskLinkCard-module_sekai-invisible-scroll__3M27K","sekai-mb-8":"PrskLinkCard-module_sekai-mb-8__pdEzh","sekai-mb-16":"PrskLinkCard-module_sekai-mb-16__n5Pgv","sekai-mb-24":"PrskLinkCard-module_sekai-mb-24__dBYh2","sekai-prsk-link-card-button":"PrskLinkCard-module_sekai-prsk-link-card-button__TknT6","sekai-prsk-link-card-title":"PrskLinkCard-module_sekai-prsk-link-card-title__wuqzq","sekai-title-effect-light":"PrskLinkCard-module_sekai-title-effect-light__BwB-D","sekai-title-effect-dark":"PrskLinkCard-module_sekai-title-effect-dark__WXiaO","sekai-prsk-link-card-subtext":"PrskLinkCard-module_sekai-prsk-link-card-subtext__9Qlvw","sekai-prsk-link-card-icon":"PrskLinkCard-module_sekai-prsk-link-card-icon__2-5YL"};
styleInject(css_248z$d);

var _excluded$c = ["sekai", "themeMode", "height", "width", "onClick", "title", "subText", "icon"];
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
    rest = _objectWithoutProperties(_ref, _excluded$c);
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
    className: clsx(styles$d['sekai-prsk-link-card-button'], globalStyles["sekai-color-".concat(modeTheme)]),
    style: (cardSizeStyle),
    onClick: onClick
  }, /*#__PURE__*/React.createElement(NamePlate, {
    id: "".concat(rest.id ? rest.id : 'prsk-link-card', "-title"),
    className: clsx(styles$d['sekai-prsk-link-card-title'], styles$d["sekai-title-effect-".concat(modeTheme)]),
    sekai: sekai,
    themeMode: themeMode,
    text: title
  }), /*#__PURE__*/React.createElement(OutlineText, {
    id: "".concat(rest.id ? rest.id : 'prsk-link-card', "-subtext"),
    className: styles$d['sekai-prsk-link-card-subtext'],
    sekai: sekai,
    themeMode: themeMode,
    text: subText
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$d['sekai-prsk-link-card-icon']
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

var css_248z$c = ".CommonComponents-module_sekai-dialog-visible__hheii {\n  display: block;\n}\n\n.CommonComponents-module_sekai-dialog-hidden__eu6kA {\n  display: none;\n}";
var styles$c = {"sekai-dialog-visible":"CommonComponents-module_sekai-dialog-visible__hheii","sekai-dialog-hidden":"CommonComponents-module_sekai-dialog-hidden__eu6kA"};
styleInject(css_248z$c);

function ownKeys$d(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$d(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$d(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$d(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var DialogOverlay = function DialogOverlay(_ref) {
  var open = _ref.open,
    themeMode = _ref.themeMode,
    children = _ref.children,
    containerComponent = _ref.containerComponent;
  var displayDialog = open ? 'sekai-dialog-visible' : 'sekai-dialog-hidden';
  var _useOptionalSekai = useOptionalSekai({
      mode: themeMode
    }),
    modeTheme = _useOptionalSekai.modeTheme;
  var optionStyle = _objectSpread$d({}, containerComponent && {
    position: 'absolute'
  });
  return /*#__PURE__*/React.createElement("div", {
    className: styles$c[displayDialog]
  }, /*#__PURE__*/React.createElement("div", {
    className: globalStyles["sekai-overlay-".concat(modeTheme)],
    style: optionStyle
  }, children));
};

var fireOnEnterKey = function fireOnEnterKey(eventHandler) {
  return function (e) {
    if (e.key === 'Enter') {
      eventHandler(e);
      e.preventDefault();
    }
  };
};
var fireOnEscapeKey = function fireOnEscapeKey(eventHandler) {
  return function (e) {
    e.preventDefault();
    if (e.key === 'Escape') {
      eventHandler(e);
    }
  };
};

var css_248z$b = "/* Styles for common color */\n/* Styles for z-index */\n.Dialog-module_sekai-color-light__fIuyC {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.Dialog-module_sekai-color-dark__KrQvz {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.Dialog-module_sekai-overlay__l5u8e, .Dialog-module_sekai-overlay-dark__PTpAS, .Dialog-module_sekai-overlay-light__PYE-2 {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.Dialog-module_sekai-overlay-light__PYE-2 {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.Dialog-module_sekai-overlay-dark__PTpAS {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.Dialog-module_sekai-flex-center__LyhR2 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.Dialog-module_sekai-absolute-center__9eZ-V {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.Dialog-module_sekai-invisible-scroll__yMbwG {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.Dialog-module_sekai-invisible-scroll__yMbwG::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.Dialog-module_sekai-mb-8__-vFZy {\n  margin-bottom: 8px;\n}\n\n.Dialog-module_sekai-mb-16__2odxf {\n  margin-bottom: 16px;\n}\n\n.Dialog-module_sekai-mb-24__sVlha {\n  margin-bottom: 24px;\n}\n\n.Dialog-module_sekai-container__ksO7t, .Dialog-module_sekai-container-wide__NphhS, .Dialog-module_sekai-container-medium__XUhgC, .Dialog-module_sekai-container-narrow__RgWNL {\n  box-sizing: border-box;\n  max-width: 90vw;\n  border: 2px solid var(--sekai-color);\n  border-radius: 4px;\n  z-index: 1300;\n}\n\n.Dialog-module_sekai-container-narrow__RgWNL {\n  width: 250px;\n}\n\n.Dialog-module_sekai-container-medium__XUhgC {\n  width: 390px;\n}\n\n.Dialog-module_sekai-container-wide__NphhS {\n  width: 600px;\n}\n\n.Dialog-module_sekai-content-wrap__mWRrt {\n  padding: 16px;\n}\n\n/** Dialog Title Header */\n.Dialog-module_sekai-title-header__ATn1B, .Dialog-module_sekai-title-header-wide__5Skds, .Dialog-module_sekai-title-header-medium__61bst, .Dialog-module_sekai-title-header-narrow__uQfFd {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.Dialog-module_sekai-title-header__ATn1B h2, .Dialog-module_sekai-title-header-wide__5Skds h2, .Dialog-module_sekai-title-header-medium__61bst h2, .Dialog-module_sekai-title-header-narrow__uQfFd h2 {\n  margin: 0;\n}\n.Dialog-module_sekai-title-header__ATn1B .Dialog-module_sekai-close-icon__CVbZJ, .Dialog-module_sekai-title-header-wide__5Skds .Dialog-module_sekai-close-icon__CVbZJ, .Dialog-module_sekai-title-header-medium__61bst .Dialog-module_sekai-close-icon__CVbZJ, .Dialog-module_sekai-title-header-narrow__uQfFd .Dialog-module_sekai-close-icon__CVbZJ {\n  border: none;\n  padding: 0;\n  background-color: inherit;\n  aspect-ratio: 1/1;\n}\n\n.Dialog-module_sekai-title-header-narrow__uQfFd {\n  min-height: 32px;\n}\n.Dialog-module_sekai-title-header-narrow__uQfFd h2 {\n  font-size: 1.2em;\n}\n.Dialog-module_sekai-title-header-narrow__uQfFd .Dialog-module_sekai-close-icon__CVbZJ {\n  height: 16px;\n}\n\n.Dialog-module_sekai-title-header-medium__61bst {\n  height: 40px;\n}\n.Dialog-module_sekai-title-header-medium__61bst h2 {\n  font-size: 1.4em;\n}\n.Dialog-module_sekai-title-header-medium__61bst .Dialog-module_sekai-close-icon__CVbZJ {\n  height: 20px;\n}\n\n.Dialog-module_sekai-title-header-wide__5Skds {\n  height: 48px;\n}\n.Dialog-module_sekai-title-header-wide__5Skds .Dialog-module_sekai-close-icon__CVbZJ {\n  height: 24px;\n}\n\n/** Dialog Buttons Area */\n.Dialog-module_sekai-buttons-area__9vRBF {\n  display: flex;\n  width: calc(100% + 4px);\n  margin: 0 -2px -2px;\n  /** Button type : normal */\n  /** Button type : strong */\n}\n.Dialog-module_sekai-buttons-area__9vRBF button {\n  background-color: inherit;\n  padding: 0;\n  min-height: 40px;\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-normal-button-color__mq3H7.Dialog-module_sekai-light__TlNmy, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-light__TlNmy.Dialog-module_sekai-dialog-normal-button-2-1__FBzF9, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-light__TlNmy.Dialog-module_sekai-dialog-normal-button-2-0__iZkb-, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-light__TlNmy.Dialog-module_sekai-dialog-normal-button-1-0__Ui4jg {\n  border: 2px solid var(--sekai-color);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-normal-button-color__mq3H7.Dialog-module_sekai-light__TlNmy:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-light__TlNmy.Dialog-module_sekai-dialog-normal-button-2-1__FBzF9:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-light__TlNmy.Dialog-module_sekai-dialog-normal-button-2-0__iZkb-:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-light__TlNmy.Dialog-module_sekai-dialog-normal-button-1-0__Ui4jg:hover {\n  background-color: var(--sekai-color-hover);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-normal-button-color__mq3H7.Dialog-module_sekai-dark__M58Kq, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dark__M58Kq.Dialog-module_sekai-dialog-normal-button-2-1__FBzF9, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dark__M58Kq.Dialog-module_sekai-dialog-normal-button-2-0__iZkb-, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dark__M58Kq.Dialog-module_sekai-dialog-normal-button-1-0__Ui4jg {\n  border: 2px solid var(--sekai-color);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-normal-button-color__mq3H7.Dialog-module_sekai-dark__M58Kq:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dark__M58Kq.Dialog-module_sekai-dialog-normal-button-2-1__FBzF9:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dark__M58Kq.Dialog-module_sekai-dialog-normal-button-2-0__iZkb-:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dark__M58Kq.Dialog-module_sekai-dialog-normal-button-1-0__Ui4jg:hover {\n  background-color: var(--sekai-color-hover);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-normal-button-color__mq3H7:disabled.Dialog-module_sekai-light__TlNmy, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-2-1__FBzF9:disabled.Dialog-module_sekai-light__TlNmy, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-2-0__iZkb-:disabled.Dialog-module_sekai-light__TlNmy, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-1-0__Ui4jg:disabled.Dialog-module_sekai-light__TlNmy {\n  color: rgb(155.1, 155.1, 155.1);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-normal-button-color__mq3H7:disabled.Dialog-module_sekai-dark__M58Kq, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-2-1__FBzF9:disabled.Dialog-module_sekai-dark__M58Kq, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-2-0__iZkb-:disabled.Dialog-module_sekai-dark__M58Kq, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-1-0__Ui4jg:disabled.Dialog-module_sekai-dark__M58Kq {\n  color: rgb(100.8, 100.8, 100.8);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-normal-button-color__mq3H7:disabled:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-2-1__FBzF9:disabled:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-2-0__iZkb-:disabled:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-1-0__Ui4jg:disabled:hover {\n  background-color: transparent;\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-1-0__Ui4jg {\n  width: 100%;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-2-0__iZkb- {\n  width: 50%;\n  border-bottom-left-radius: 4px;\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-2-0__iZkb-.Dialog-module_sekai-light__TlNmy {\n  border-right: 1px solid var(--sekai-color);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-2-0__iZkb-.Dialog-module_sekai-dark__M58Kq {\n  border-right: 1px solid var(--sekai-color);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-2-1__FBzF9 {\n  width: 50%;\n  border-bottom-right-radius: 4px;\n  border-left: 1px solid var(--sekai-color);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-2-1__FBzF9.Dialog-module_sekai-light__TlNmy {\n  border-left: 1px solid var(--sekai-color);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-2-1__FBzF9.Dialog-module_sekai-dark__M58Kq {\n  border-left: 1px solid var(--sekai-color);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-strong-button-color__gzYAg.Dialog-module_sekai-light__TlNmy, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-light__TlNmy.Dialog-module_sekai-dialog-strong-button-2-1__WxTyF, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-light__TlNmy.Dialog-module_sekai-dialog-strong-button-2-0__z7H34, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-light__TlNmy.Dialog-module_sekai-dialog-strong-button-1-0__gM-wb {\n  border: 2px solid var(--sekai-color);\n  background-color: var(--sekai-color);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-strong-button-color__gzYAg.Dialog-module_sekai-light__TlNmy:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-light__TlNmy.Dialog-module_sekai-dialog-strong-button-2-1__WxTyF:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-light__TlNmy.Dialog-module_sekai-dialog-strong-button-2-0__z7H34:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-light__TlNmy.Dialog-module_sekai-dialog-strong-button-1-0__gM-wb:hover {\n  background-color: var(--sekai-color-strong-hover);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-strong-button-color__gzYAg.Dialog-module_sekai-dark__M58Kq, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dark__M58Kq.Dialog-module_sekai-dialog-strong-button-2-1__WxTyF, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dark__M58Kq.Dialog-module_sekai-dialog-strong-button-2-0__z7H34, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dark__M58Kq.Dialog-module_sekai-dialog-strong-button-1-0__gM-wb {\n  border: 2px solid var(--sekai-color);\n  background-color: var(--sekai-color);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-strong-button-color__gzYAg.Dialog-module_sekai-dark__M58Kq:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dark__M58Kq.Dialog-module_sekai-dialog-strong-button-2-1__WxTyF:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dark__M58Kq.Dialog-module_sekai-dialog-strong-button-2-0__z7H34:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dark__M58Kq.Dialog-module_sekai-dialog-strong-button-1-0__gM-wb:hover {\n  background-color: var(--sekai-color-strong-hover);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-strong-button-color__gzYAg:disabled.Dialog-module_sekai-light__TlNmy, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-strong-button-2-1__WxTyF:disabled.Dialog-module_sekai-light__TlNmy, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-strong-button-2-0__z7H34:disabled.Dialog-module_sekai-light__TlNmy, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-strong-button-1-0__gM-wb:disabled.Dialog-module_sekai-light__TlNmy {\n  color: rgb(155.1, 155.1, 155.1);\n  background-color: var(--sekai-color-disabled);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-strong-button-color__gzYAg:disabled.Dialog-module_sekai-dark__M58Kq, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-strong-button-2-1__WxTyF:disabled.Dialog-module_sekai-dark__M58Kq, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-strong-button-2-0__z7H34:disabled.Dialog-module_sekai-dark__M58Kq, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-strong-button-1-0__gM-wb:disabled.Dialog-module_sekai-dark__M58Kq {\n  color: rgb(100.8, 100.8, 100.8);\n  background-color: var(--sekai-color-disabled);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-strong-button-1-0__gM-wb {\n  width: 100%;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-strong-button-2-0__z7H34 {\n  width: 50%;\n  border-bottom-left-radius: 4px;\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-strong-button-2-0__z7H34.Dialog-module_sekai-light__TlNmy {\n  border-right: 1px solid var(--sekai-color);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-strong-button-2-0__z7H34.Dialog-module_sekai-dark__M58Kq {\n  border-right: 1px solid var(--sekai-color);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-strong-button-2-1__WxTyF {\n  width: 50%;\n  border-bottom-right-radius: 4px;\n  border-left: 1px solid var(--sekai-color);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-strong-button-2-1__WxTyF.Dialog-module_sekai-light__TlNmy {\n  border-left: 1px solid var(--sekai-color);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-strong-button-2-1__WxTyF.Dialog-module_sekai-dark__M58Kq {\n  border-left: 1px solid var(--sekai-color);\n}";
var styles$b = {"sekai-color-light":"Dialog-module_sekai-color-light__fIuyC","sekai-color-dark":"Dialog-module_sekai-color-dark__KrQvz","sekai-overlay":"Dialog-module_sekai-overlay__l5u8e","sekai-overlay-dark":"Dialog-module_sekai-overlay-dark__PTpAS","sekai-overlay-light":"Dialog-module_sekai-overlay-light__PYE-2","sekai-flex-center":"Dialog-module_sekai-flex-center__LyhR2","sekai-absolute-center":"Dialog-module_sekai-absolute-center__9eZ-V","sekai-invisible-scroll":"Dialog-module_sekai-invisible-scroll__yMbwG","sekai-mb-8":"Dialog-module_sekai-mb-8__-vFZy","sekai-mb-16":"Dialog-module_sekai-mb-16__2odxf","sekai-mb-24":"Dialog-module_sekai-mb-24__sVlha","sekai-container":"Dialog-module_sekai-container__ksO7t","sekai-container-wide":"Dialog-module_sekai-container-wide__NphhS","sekai-container-medium":"Dialog-module_sekai-container-medium__XUhgC","sekai-container-narrow":"Dialog-module_sekai-container-narrow__RgWNL","sekai-content-wrap":"Dialog-module_sekai-content-wrap__mWRrt","sekai-title-header":"Dialog-module_sekai-title-header__ATn1B","sekai-title-header-wide":"Dialog-module_sekai-title-header-wide__5Skds","sekai-title-header-medium":"Dialog-module_sekai-title-header-medium__61bst","sekai-title-header-narrow":"Dialog-module_sekai-title-header-narrow__uQfFd","sekai-close-icon":"Dialog-module_sekai-close-icon__CVbZJ","sekai-buttons-area":"Dialog-module_sekai-buttons-area__9vRBF","sekai-normal-button-color":"Dialog-module_sekai-normal-button-color__mq3H7","sekai-light":"Dialog-module_sekai-light__TlNmy","sekai-dialog-normal-button-2-1":"Dialog-module_sekai-dialog-normal-button-2-1__FBzF9","sekai-dialog-normal-button-2-0":"Dialog-module_sekai-dialog-normal-button-2-0__iZkb-","sekai-dialog-normal-button-1-0":"Dialog-module_sekai-dialog-normal-button-1-0__Ui4jg","sekai-dark":"Dialog-module_sekai-dark__M58Kq","sekai-strong-button-color":"Dialog-module_sekai-strong-button-color__gzYAg","sekai-dialog-strong-button-2-1":"Dialog-module_sekai-dialog-strong-button-2-1__WxTyF","sekai-dialog-strong-button-2-0":"Dialog-module_sekai-dialog-strong-button-2-0__z7H34","sekai-dialog-strong-button-1-0":"Dialog-module_sekai-dialog-strong-button-1-0__gM-wb"};
styleInject(css_248z$b);

var _excluded$b = ["sekai", "open", "themeMode", "children", "containerComponent", "size", "onClose", "title", "showCloseIcon", "buttons", "dialogButtons"],
  _excluded2$1 = ["sekai", "themeMode", "size", "onClose", "title", "showCloseIcon"],
  _excluded3 = ["sekai", "themeMode", "buttons"];
function ownKeys$c(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$c(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$c(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$c(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
    rest = _objectWithoutProperties(_ref, _excluded$b);
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
  }, [open]);
  var overlayProps = {
    open: open,
    themeMode: themeMode,
    children: children,
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
  return /*#__PURE__*/createPortal(/*#__PURE__*/React.createElement(DialogOverlay, overlayProps, /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    role: "dialog",
    className: clsx(globalStyles["sekai-color-".concat(modeTheme)], globalStyles['sekai-absolute-center'], styles$b["sekai-container-".concat(size)], rest.className),
    style: _objectSpread$c(_objectSpread$c({}, optionStyle), rest.style),
    "aria-label": title || 'Dialog'
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$b['sekai-content-wrap']
  }, /*#__PURE__*/React.createElement(DialogTitleHeader, headerProps), children), dialogButtons || /*#__PURE__*/React.createElement(DialogButtons, buttonsProps))), portalContainer);
};
var DialogTitleHeader = function DialogTitleHeader(_ref2) {
  var sekai = _ref2.sekai,
    themeMode = _ref2.themeMode,
    size = _ref2.size,
    onClose = _ref2.onClose,
    title = _ref2.title,
    showCloseIcon = _ref2.showCloseIcon,
    rest = _objectWithoutProperties(_ref2, _excluded2$1);
  if (!title && !showCloseIcon) return null;
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: clsx(styles$b["sekai-title-header-".concat(size)], rest.className)
  }), /*#__PURE__*/React.createElement("h2", null, title), showCloseIcon ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: styles$b['sekai-close-icon'],
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
    rest = _objectWithoutProperties(_ref3, _excluded3);
  if (!buttons || !buttons.length) return null;
  var buttonLength = buttons.length;
  var _useOptionalSekai2 = useOptionalSekai({
      sekai: sekai,
      mode: themeMode
    }),
    sekaiColor = _useOptionalSekai2.sekaiColor,
    modeTheme = _useOptionalSekai2.modeTheme,
    isLight = _useOptionalSekai2.isLight;
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
    className: clsx(styles$b['sekai-buttons-area'], rest.className)
  }), _toConsumableArray(buttons.slice(0, 2)).map(function (el, index) {
    return /*#__PURE__*/React.createElement("button", {
      id: "".concat(rest.id ? rest.id : 'dialog-button', "-").concat(index + 1),
      key: el.text,
      type: "button",
      onClick: el.onClick,
      disabled: Boolean(el.disabled),
      "aria-label": el.ariaLabel || el.text,
      className: clsx(globalStyles["sekai-color-".concat(modeTheme)], styles$b["sekai-dialog-".concat(el.type || 'normal', "-button-").concat(buttonLength, "-").concat(index)], styles$b["sekai-".concat(modeTheme)], el.buttonStyle || ''),
      style: optionStyle
    }, el.text);
  }));
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

var css_248z$a = "/* Styles for common color */\n/* Styles for z-index */\n.XoMikuDialog-module_sekai-color-light__-AXg1 {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.XoMikuDialog-module_sekai-color-dark__UNXDy {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.XoMikuDialog-module_sekai-overlay__pwArn, .XoMikuDialog-module_sekai-overlay-dark__LJxz-, .XoMikuDialog-module_sekai-overlay-light__jfBTr {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.XoMikuDialog-module_sekai-overlay-light__jfBTr {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.XoMikuDialog-module_sekai-overlay-dark__LJxz- {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.XoMikuDialog-module_sekai-flex-center__3uIaw {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.XoMikuDialog-module_sekai-absolute-center__lQvfv {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.XoMikuDialog-module_sekai-invisible-scroll__qfezN {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.XoMikuDialog-module_sekai-invisible-scroll__qfezN::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.XoMikuDialog-module_sekai-mb-8__iMTYH {\n  margin-bottom: 8px;\n}\n\n.XoMikuDialog-module_sekai-mb-16__azJcI {\n  margin-bottom: 16px;\n}\n\n.XoMikuDialog-module_sekai-mb-24__XhWuL {\n  margin-bottom: 24px;\n}\n\n.XoMikuDialog-module_sekai-dialog-visible__SBcjX {\n  display: block;\n}\n\n.XoMikuDialog-module_sekai-dialog-hidden__mENqt {\n  display: none;\n}\n\n.XoMikuDialog-module_sekai-container__9ji3B, .XoMikuDialog-module_sekai-container-wide__CMP9F, .XoMikuDialog-module_sekai-container-medium__VjZkf, .XoMikuDialog-module_sekai-container-narrow__pIyv5 {\n  position: relative;\n  box-sizing: border-box;\n  max-width: 90vw;\n  color: #212121;\n  border: 3.9px solid #9ccdca;\n  border-radius: 4px;\n  background: linear-gradient(160deg, #f1f1f1 40%, #c4e6ed 100%);\n  z-index: 1300;\n}\n\n.XoMikuDialog-module_sekai-container-narrow__pIyv5 {\n  width: 250px;\n}\n\n.XoMikuDialog-module_sekai-container-medium__VjZkf {\n  width: 390px;\n}\n\n.XoMikuDialog-module_sekai-container-wide__CMP9F {\n  width: 600px;\n}\n\n.XoMikuDialog-module_sekai-content-wrap__hUZOz {\n  padding: 16px;\n}\n\n/** Button styles */\n.XoMikuDialog-module_sekai-xomiku-button__q32HB {\n  margin-top: 16px;\n}\n.XoMikuDialog-module_sekai-xomiku-button__q32HB button {\n  border-radius: 0 !important;\n  border-color: #9ccdca !important;\n}\n\n.XoMikuDialog-module_sekai-xomiku-normal-button__jJpY1:hover {\n  background-color: rgb(191.8, 221, 232.2) !important;\n}\n.XoMikuDialog-module_sekai-xomiku-normal-button__jJpY1:disabled {\n  color: rgb(155.1, 155.1, 155.1) !important;\n}\n.XoMikuDialog-module_sekai-xomiku-normal-button__jJpY1:disabled:hover {\n  background-color: transparent !important;\n}\n\n.XoMikuDialog-module_sekai-xomiku-strong-button__42023 {\n  font-weight: bold;\n  background-color: #9ccdca !important;\n}\n.XoMikuDialog-module_sekai-xomiku-strong-button__42023:hover {\n  background-color: rgb(167.2, 211, 227.8) !important;\n}\n.XoMikuDialog-module_sekai-xomiku-strong-button__42023:disabled {\n  color: rgb(155.1, 155.1, 155.1) !important;\n  background-color: rgb(164.5, 208.6, 205.9) !important;\n}\n\n/** xomikuSvg type1 styles */\n.XoMikuDialog-module_sekai-xomiku-svg-1-narrow__8AJJd {\n  position: absolute;\n  right: 8%;\n  top: -24px;\n  width: 40px;\n  height: 40px;\n}\n\n.XoMikuDialog-module_sekai-xomiku-svg-1-medium__K0shx {\n  position: absolute;\n  right: 5%;\n  top: -34px;\n  width: 50px;\n  height: 50px;\n}\n\n.XoMikuDialog-module_sekai-xomiku-svg-1-wide__i6cwu {\n  position: absolute;\n  right: 3%;\n  top: -44px;\n  width: 60px;\n  height: 60px;\n}\n\n.XoMikuDialog-module_sekai-xomiku-svg-2-narrow__5yohH {\n  position: absolute;\n  right: -12px;\n  top: 10%;\n  width: 25px;\n  height: 25px;\n}\n\n.XoMikuDialog-module_sekai-xomiku-svg-2-medium__XwR5O {\n  position: absolute;\n  right: -19px;\n  top: 10%;\n  width: 35px;\n  height: 35px;\n}\n\n.XoMikuDialog-module_sekai-xomiku-svg-2-wide__--m3M {\n  position: absolute;\n  right: -20px;\n  top: 10%;\n  width: 36px;\n  height: 36px;\n}\n\n/** xomikuSvg type2 styles */\n.XoMikuDialog-module_sekai-xomiku-svg-3-narrow__cLhtI {\n  position: absolute;\n  left: -12px;\n  bottom: 20px;\n  width: 25px;\n  height: 25px;\n}\n\n.XoMikuDialog-module_sekai-xomiku-svg-3-medium__Vt3l0 {\n  position: absolute;\n  left: -17px;\n  bottom: 25px;\n  width: 30px;\n  height: 30px;\n}\n\n.XoMikuDialog-module_sekai-xomiku-svg-3-wide__Qz9jG {\n  position: absolute;\n  left: -18px;\n  bottom: 27px;\n  width: 33px;\n  height: 33px;\n}\n\n.XoMikuDialog-module_sekai-xomiku-svg-4-narrow__9tAGw {\n  position: absolute;\n  left: -19px;\n  bottom: -19px;\n  width: 35px;\n  height: 35px;\n}\n\n.XoMikuDialog-module_sekai-xomiku-svg-4-medium__IzGBE {\n  position: absolute;\n  left: -24px;\n  bottom: -24px;\n  width: 40px;\n  height: 40px;\n}\n\n.XoMikuDialog-module_sekai-xomiku-svg-4-wide__3cAzo {\n  position: absolute;\n  left: -24px;\n  bottom: -30px;\n  width: 45px;\n  height: 45px;\n}\n\n.XoMikuDialog-module_sekai-xomiku-svg-5-narrow__7SH3a {\n  position: absolute;\n  left: 25%;\n  bottom: -16px;\n  width: 30px;\n  height: 30px;\n}\n\n.XoMikuDialog-module_sekai-xomiku-svg-5-medium__lKBJk {\n  position: absolute;\n  left: 25%;\n  bottom: -19px;\n  width: 35px;\n  height: 35px;\n}\n\n.XoMikuDialog-module_sekai-xomiku-svg-5-wide__6xaxE {\n  position: absolute;\n  left: 25%;\n  bottom: -25px;\n  width: 40px;\n  height: 40px;\n}";
var styles$a = {"sekai-color-light":"XoMikuDialog-module_sekai-color-light__-AXg1","sekai-color-dark":"XoMikuDialog-module_sekai-color-dark__UNXDy","sekai-overlay":"XoMikuDialog-module_sekai-overlay__pwArn","sekai-overlay-dark":"XoMikuDialog-module_sekai-overlay-dark__LJxz-","sekai-overlay-light":"XoMikuDialog-module_sekai-overlay-light__jfBTr","sekai-flex-center":"XoMikuDialog-module_sekai-flex-center__3uIaw","sekai-absolute-center":"XoMikuDialog-module_sekai-absolute-center__lQvfv","sekai-invisible-scroll":"XoMikuDialog-module_sekai-invisible-scroll__qfezN","sekai-mb-8":"XoMikuDialog-module_sekai-mb-8__iMTYH","sekai-mb-16":"XoMikuDialog-module_sekai-mb-16__azJcI","sekai-mb-24":"XoMikuDialog-module_sekai-mb-24__XhWuL","sekai-dialog-visible":"XoMikuDialog-module_sekai-dialog-visible__SBcjX","sekai-dialog-hidden":"XoMikuDialog-module_sekai-dialog-hidden__mENqt","sekai-container":"XoMikuDialog-module_sekai-container__9ji3B","sekai-container-wide":"XoMikuDialog-module_sekai-container-wide__CMP9F","sekai-container-medium":"XoMikuDialog-module_sekai-container-medium__VjZkf","sekai-container-narrow":"XoMikuDialog-module_sekai-container-narrow__pIyv5","sekai-content-wrap":"XoMikuDialog-module_sekai-content-wrap__hUZOz","sekai-xomiku-button":"XoMikuDialog-module_sekai-xomiku-button__q32HB","sekai-xomiku-normal-button":"XoMikuDialog-module_sekai-xomiku-normal-button__jJpY1","sekai-xomiku-strong-button":"XoMikuDialog-module_sekai-xomiku-strong-button__42023","sekai-xomiku-svg-1-narrow":"XoMikuDialog-module_sekai-xomiku-svg-1-narrow__8AJJd","sekai-xomiku-svg-1-medium":"XoMikuDialog-module_sekai-xomiku-svg-1-medium__K0shx","sekai-xomiku-svg-1-wide":"XoMikuDialog-module_sekai-xomiku-svg-1-wide__i6cwu","sekai-xomiku-svg-2-narrow":"XoMikuDialog-module_sekai-xomiku-svg-2-narrow__5yohH","sekai-xomiku-svg-2-medium":"XoMikuDialog-module_sekai-xomiku-svg-2-medium__XwR5O","sekai-xomiku-svg-2-wide":"XoMikuDialog-module_sekai-xomiku-svg-2-wide__--m3M","sekai-xomiku-svg-3-narrow":"XoMikuDialog-module_sekai-xomiku-svg-3-narrow__cLhtI","sekai-xomiku-svg-3-medium":"XoMikuDialog-module_sekai-xomiku-svg-3-medium__Vt3l0","sekai-xomiku-svg-3-wide":"XoMikuDialog-module_sekai-xomiku-svg-3-wide__Qz9jG","sekai-xomiku-svg-4-narrow":"XoMikuDialog-module_sekai-xomiku-svg-4-narrow__9tAGw","sekai-xomiku-svg-4-medium":"XoMikuDialog-module_sekai-xomiku-svg-4-medium__IzGBE","sekai-xomiku-svg-4-wide":"XoMikuDialog-module_sekai-xomiku-svg-4-wide__3cAzo","sekai-xomiku-svg-5-narrow":"XoMikuDialog-module_sekai-xomiku-svg-5-narrow__7SH3a","sekai-xomiku-svg-5-medium":"XoMikuDialog-module_sekai-xomiku-svg-5-medium__lKBJk","sekai-xomiku-svg-5-wide":"XoMikuDialog-module_sekai-xomiku-svg-5-wide__6xaxE"};
styleInject(css_248z$a);

var _excluded$a = ["open", "themeMode", "children", "size", "containerComponent", "onClose", "title", "buttons"];
function ownKeys$b(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$b(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$b(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$b(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
    rest = _objectWithoutProperties(_ref, _excluded$a);
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
  }, [open]);
  var headerProps = {
    size: size,
    onClose: onClose,
    title: title
  };
  var xoButtonProps = useMemo(function () {
    return buttons === null || buttons === void 0 ? void 0 : buttons.map(function (button) {
      var type = button.type ? button.type : 'normal';
      return _objectSpread$b(_objectSpread$b({}, button), {}, {
        buttonStyle: [styles$a["sekai-xomiku-".concat(type, "-button")]].join(' ')
      });
    });
  }, [buttons, modeTheme]);
  var overlayProps = {
    open: open,
    themeMode: themeMode,
    children: children,
    containerComponent: containerComponent
  };
  var buttonsProps = {
    themeMode: LIGHT_MODE,
    buttons: xoButtonProps
  };
  return /*#__PURE__*/createPortal(/*#__PURE__*/React.createElement(DialogOverlay, overlayProps, /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    role: "dialog",
    className: clsx(globalStyles['sekai-absolute-center'], styles$a["sekai-container-".concat(size)], rest.className),
    "aria-label": title || 'Dialog'
  }), /*#__PURE__*/React.createElement(XoMikuSvg, {
    className: styles$a["sekai-xomiku-svg-1-".concat(size)]
  }), /*#__PURE__*/React.createElement(XoMikuSvg, {
    className: styles$a["sekai-xomiku-svg-2-".concat(size)]
  }), /*#__PURE__*/React.createElement(XoMikuSvg, {
    className: styles$a["sekai-xomiku-svg-3-".concat(size)],
    type: 'type2'
  }), /*#__PURE__*/React.createElement(XoMikuSvg, {
    className: styles$a["sekai-xomiku-svg-4-".concat(size)],
    type: 'type2'
  }), /*#__PURE__*/React.createElement(XoMikuSvg, {
    className: styles$a["sekai-xomiku-svg-5-".concat(size)],
    type: 'type2'
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$a['sekai-content-wrap']
  }, /*#__PURE__*/React.createElement(DialogTitleHeader, _extends({
    id: "xo-miku-dialog-header"
  }, headerProps)), children, /*#__PURE__*/React.createElement(DialogButtons, _extends({
    id: "xo-miku-dialog-buttons",
    className: styles$a['sekai-xomiku-button']
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

var css_248z$9 = "/* Styles for common color */\n/* Styles for z-index */\n.XxMikuDialog-module_sekai-color-light__AXfs1 {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.XxMikuDialog-module_sekai-color-dark__ULGir {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.XxMikuDialog-module_sekai-overlay__zJE3U, .XxMikuDialog-module_sekai-overlay-dark__Zmpw9, .XxMikuDialog-module_sekai-overlay-light__MFH-f {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.XxMikuDialog-module_sekai-overlay-light__MFH-f {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.XxMikuDialog-module_sekai-overlay-dark__Zmpw9 {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.XxMikuDialog-module_sekai-flex-center__asoy6 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.XxMikuDialog-module_sekai-absolute-center__jJ2Vs {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.XxMikuDialog-module_sekai-invisible-scroll__dI4JU {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.XxMikuDialog-module_sekai-invisible-scroll__dI4JU::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.XxMikuDialog-module_sekai-mb-8__3yT7u {\n  margin-bottom: 8px;\n}\n\n.XxMikuDialog-module_sekai-mb-16__YvY6f {\n  margin-bottom: 16px;\n}\n\n.XxMikuDialog-module_sekai-mb-24__GVs-K {\n  margin-bottom: 24px;\n}\n\n.XxMikuDialog-module_sekai-dialog-visible__2oe7d {\n  display: block;\n}\n\n.XxMikuDialog-module_sekai-dialog-hidden__EM-mO {\n  display: none;\n}\n\n.XxMikuDialog-module_sekai-container__6wLSy, .XxMikuDialog-module_sekai-container-wide__YNFbw, .XxMikuDialog-module_sekai-container-medium__qGYm-, .XxMikuDialog-module_sekai-container-narrow__J3ojJ {\n  position: relative;\n  box-sizing: border-box;\n  max-width: 90vw;\n  border: 3.9px solid #9ccdd3;\n  border-radius: 4px;\n  background-color: #797979;\n  z-index: 1300;\n}\n.XxMikuDialog-module_sekai-container__6wLSy.XxMikuDialog-module_sekai-light__fPaiT, .XxMikuDialog-module_sekai-light__fPaiT.XxMikuDialog-module_sekai-container-wide__YNFbw, .XxMikuDialog-module_sekai-light__fPaiT.XxMikuDialog-module_sekai-container-medium__qGYm-, .XxMikuDialog-module_sekai-light__fPaiT.XxMikuDialog-module_sekai-container-narrow__J3ojJ {\n  color: #212121;\n}\n.XxMikuDialog-module_sekai-container__6wLSy.XxMikuDialog-module_sekai-dark__-qzNa, .XxMikuDialog-module_sekai-dark__-qzNa.XxMikuDialog-module_sekai-container-wide__YNFbw, .XxMikuDialog-module_sekai-dark__-qzNa.XxMikuDialog-module_sekai-container-medium__qGYm-, .XxMikuDialog-module_sekai-dark__-qzNa.XxMikuDialog-module_sekai-container-narrow__J3ojJ {\n  color: #e0e0e0;\n}\n\n.XxMikuDialog-module_sekai-container-narrow__J3ojJ {\n  width: 250px;\n}\n\n.XxMikuDialog-module_sekai-container-medium__qGYm- {\n  width: 390px;\n}\n\n.XxMikuDialog-module_sekai-container-wide__YNFbw {\n  width: 600px;\n}\n\n.XxMikuDialog-module_sekai-content-wrap__kR8d6 {\n  padding: 16px;\n}\n\n/** Button styles */\n.XxMikuDialog-module_sekai-xxmiku-button__1trw- {\n  margin-top: 16px;\n}\n.XxMikuDialog-module_sekai-xxmiku-button__1trw- button {\n  border-radius: 0 !important;\n  border-color: #9ccdd3 !important;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-normal-button__ArRPe:hover {\n  background-color: rgb(128, 137.8, 139) !important;\n}\n.XxMikuDialog-module_sekai-xxmiku-normal-button__ArRPe:disabled.XxMikuDialog-module_sekai-light__fPaiT {\n  color: rgb(103.4, 103.4, 103.4) !important;\n}\n.XxMikuDialog-module_sekai-xxmiku-normal-button__ArRPe:disabled.XxMikuDialog-module_sekai-dark__-qzNa {\n  color: rgb(141.6, 141.6, 141.6) !important;\n}\n.XxMikuDialog-module_sekai-xxmiku-normal-button__ArRPe:disabled:hover {\n  background-color: transparent !important;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-strong-button__uHTqB {\n  font-weight: bold;\n  background-color: #9ccdd3 !important;\n}\n.XxMikuDialog-module_sekai-xxmiku-strong-button__uHTqB:hover {\n  background-color: rgb(147.25, 184, 188.5) !important;\n}\n.XxMikuDialog-module_sekai-xxmiku-strong-button__uHTqB:disabled.XxMikuDialog-module_sekai-light__fPaiT {\n  color: rgb(119.58, 119.58, 119.58) !important;\n  background-color: rgb(145.5, 179.8, 184) !important;\n}\n.XxMikuDialog-module_sekai-xxmiku-strong-button__uHTqB:disabled.XxMikuDialog-module_sekai-dark__-qzNa {\n  color: rgb(198.25, 198.25, 198.25) !important;\n  background-color: rgb(145.5, 179.8, 184) !important;\n}\n\n/** XxMikuSvg type1 styles */\n.XxMikuDialog-module_sekai-xxmiku-svg-1-narrow__loqQ- {\n  position: absolute;\n  right: 8%;\n  top: -24px;\n  width: 40px;\n  height: 40px;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-svg-1-medium__pzorJ {\n  position: absolute;\n  right: 5%;\n  top: -34px;\n  width: 50px;\n  height: 50px;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-svg-1-wide__2N-6l {\n  position: absolute;\n  right: 3%;\n  top: -44px;\n  width: 60px;\n  height: 60px;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-svg-2-narrow__3HHf- {\n  position: absolute;\n  right: -12px;\n  top: 10%;\n  width: 25px;\n  height: 25px;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-svg-2-medium__9o0Zw {\n  position: absolute;\n  right: -19px;\n  top: 10%;\n  width: 35px;\n  height: 35px;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-svg-2-wide__qeQUa {\n  position: absolute;\n  right: -20px;\n  top: 10%;\n  width: 36px;\n  height: 36px;\n}\n\n/** XxMikuSvg type2 styles */\n.XxMikuDialog-module_sekai-xxmiku-svg-3-narrow__Q-ch7 {\n  position: absolute;\n  left: -12px;\n  bottom: 20px;\n  width: 25px;\n  height: 25px;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-svg-3-medium__QnTfq {\n  position: absolute;\n  left: -17px;\n  bottom: 25px;\n  width: 30px;\n  height: 30px;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-svg-3-wide__mMg4X {\n  position: absolute;\n  left: -18px;\n  bottom: 27px;\n  width: 33px;\n  height: 33px;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-svg-4-narrow__8-UN- {\n  position: absolute;\n  left: -19px;\n  bottom: -19px;\n  width: 35px;\n  height: 35px;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-svg-4-medium__hAeL3 {\n  position: absolute;\n  left: -24px;\n  bottom: -24px;\n  width: 40px;\n  height: 40px;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-svg-4-wide__Kpdo- {\n  position: absolute;\n  left: -24px;\n  bottom: -30px;\n  width: 45px;\n  height: 45px;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-svg-5-narrow__BQjgx {\n  position: absolute;\n  left: 25%;\n  bottom: -16px;\n  width: 30px;\n  height: 30px;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-svg-5-medium__nkuQm {\n  position: absolute;\n  left: 25%;\n  bottom: -19px;\n  width: 35px;\n  height: 35px;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-svg-5-wide__NaAs4 {\n  position: absolute;\n  left: 25%;\n  bottom: -25px;\n  width: 40px;\n  height: 40px;\n}";
var styles$9 = {"sekai-color-light":"XxMikuDialog-module_sekai-color-light__AXfs1","sekai-color-dark":"XxMikuDialog-module_sekai-color-dark__ULGir","sekai-overlay":"XxMikuDialog-module_sekai-overlay__zJE3U","sekai-overlay-dark":"XxMikuDialog-module_sekai-overlay-dark__Zmpw9","sekai-overlay-light":"XxMikuDialog-module_sekai-overlay-light__MFH-f","sekai-flex-center":"XxMikuDialog-module_sekai-flex-center__asoy6","sekai-absolute-center":"XxMikuDialog-module_sekai-absolute-center__jJ2Vs","sekai-invisible-scroll":"XxMikuDialog-module_sekai-invisible-scroll__dI4JU","sekai-mb-8":"XxMikuDialog-module_sekai-mb-8__3yT7u","sekai-mb-16":"XxMikuDialog-module_sekai-mb-16__YvY6f","sekai-mb-24":"XxMikuDialog-module_sekai-mb-24__GVs-K","sekai-dialog-visible":"XxMikuDialog-module_sekai-dialog-visible__2oe7d","sekai-dialog-hidden":"XxMikuDialog-module_sekai-dialog-hidden__EM-mO","sekai-container":"XxMikuDialog-module_sekai-container__6wLSy","sekai-container-wide":"XxMikuDialog-module_sekai-container-wide__YNFbw","sekai-container-medium":"XxMikuDialog-module_sekai-container-medium__qGYm-","sekai-container-narrow":"XxMikuDialog-module_sekai-container-narrow__J3ojJ","sekai-light":"XxMikuDialog-module_sekai-light__fPaiT","sekai-dark":"XxMikuDialog-module_sekai-dark__-qzNa","sekai-content-wrap":"XxMikuDialog-module_sekai-content-wrap__kR8d6","sekai-xxmiku-button":"XxMikuDialog-module_sekai-xxmiku-button__1trw-","sekai-xxmiku-normal-button":"XxMikuDialog-module_sekai-xxmiku-normal-button__ArRPe","sekai-xxmiku-strong-button":"XxMikuDialog-module_sekai-xxmiku-strong-button__uHTqB","sekai-xxmiku-svg-1-narrow":"XxMikuDialog-module_sekai-xxmiku-svg-1-narrow__loqQ-","sekai-xxmiku-svg-1-medium":"XxMikuDialog-module_sekai-xxmiku-svg-1-medium__pzorJ","sekai-xxmiku-svg-1-wide":"XxMikuDialog-module_sekai-xxmiku-svg-1-wide__2N-6l","sekai-xxmiku-svg-2-narrow":"XxMikuDialog-module_sekai-xxmiku-svg-2-narrow__3HHf-","sekai-xxmiku-svg-2-medium":"XxMikuDialog-module_sekai-xxmiku-svg-2-medium__9o0Zw","sekai-xxmiku-svg-2-wide":"XxMikuDialog-module_sekai-xxmiku-svg-2-wide__qeQUa","sekai-xxmiku-svg-3-narrow":"XxMikuDialog-module_sekai-xxmiku-svg-3-narrow__Q-ch7","sekai-xxmiku-svg-3-medium":"XxMikuDialog-module_sekai-xxmiku-svg-3-medium__QnTfq","sekai-xxmiku-svg-3-wide":"XxMikuDialog-module_sekai-xxmiku-svg-3-wide__mMg4X","sekai-xxmiku-svg-4-narrow":"XxMikuDialog-module_sekai-xxmiku-svg-4-narrow__8-UN-","sekai-xxmiku-svg-4-medium":"XxMikuDialog-module_sekai-xxmiku-svg-4-medium__hAeL3","sekai-xxmiku-svg-4-wide":"XxMikuDialog-module_sekai-xxmiku-svg-4-wide__Kpdo-","sekai-xxmiku-svg-5-narrow":"XxMikuDialog-module_sekai-xxmiku-svg-5-narrow__BQjgx","sekai-xxmiku-svg-5-medium":"XxMikuDialog-module_sekai-xxmiku-svg-5-medium__nkuQm","sekai-xxmiku-svg-5-wide":"XxMikuDialog-module_sekai-xxmiku-svg-5-wide__NaAs4"};
styleInject(css_248z$9);

var _excluded$9 = ["open", "themeMode", "children", "size", "containerComponent", "onClose", "title", "buttons"];
function ownKeys$a(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$a(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$a(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$a(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
    rest = _objectWithoutProperties(_ref, _excluded$9);
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
      return _objectSpread$a(_objectSpread$a({}, button), {}, {
        buttonStyle: [styles$9["sekai-xxmiku-".concat(type, "-button")], styles$9["sekai-".concat(modeTheme)]].join(' ')
      });
    });
  }, [buttons, modeTheme]);
  var overlayProps = {
    open: open,
    themeMode: themeMode,
    children: children,
    containerComponent: containerComponent
  };
  var buttonsProps = {
    themeMode: themeMode,
    buttons: xxButtonProps
  };
  return /*#__PURE__*/createPortal(/*#__PURE__*/React.createElement(DialogOverlay, overlayProps, /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    role: "dialog",
    className: clsx(globalStyles['sekai-absolute-center'], styles$9["sekai-container-".concat(size)], styles$9["sekai-".concat(modeTheme)], rest.className),
    "aria-label": title || 'Dialog'
  }), /*#__PURE__*/React.createElement(XxMikuSvg, {
    className: styles$9["sekai-xxmiku-svg-1-".concat(size)]
  }), /*#__PURE__*/React.createElement(XxMikuSvg, {
    className: styles$9["sekai-xxmiku-svg-2-".concat(size)]
  }), /*#__PURE__*/React.createElement(XxMikuSvg, {
    className: styles$9["sekai-xxmiku-svg-3-".concat(size)],
    type: 'type2'
  }), /*#__PURE__*/React.createElement(XxMikuSvg, {
    className: styles$9["sekai-xxmiku-svg-4-".concat(size)],
    type: 'type2'
  }), /*#__PURE__*/React.createElement(XxMikuSvg, {
    className: styles$9["sekai-xxmiku-svg-5-".concat(size)],
    type: 'type2'
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$9['sekai-content-wrap']
  }, /*#__PURE__*/React.createElement(DialogTitleHeader, _extends({
    id: "xo-miku-dialog-header"
  }, headerProps)), children, /*#__PURE__*/React.createElement(DialogButtons, _extends({
    id: "xo-miku-dialog-buttons",
    className: styles$9['sekai-xxmiku-button']
  }, buttonsProps))))), portalContainer);
};

var css_248z$8 = "/* Styles for common color */\n/* Styles for z-index */\n.Drawer-module_sekai-color-light__a7Lp9 {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.Drawer-module_sekai-color-dark__UI-kJ {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.Drawer-module_sekai-overlay__aFac-, .Drawer-module_sekai-overlay-dark__g-gV4, .Drawer-module_sekai-overlay-light__l5VEp {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.Drawer-module_sekai-overlay-light__l5VEp {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.Drawer-module_sekai-overlay-dark__g-gV4 {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.Drawer-module_sekai-flex-center__J7DKS {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.Drawer-module_sekai-absolute-center__t5u-h {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.Drawer-module_sekai-invisible-scroll__X0sg3 {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.Drawer-module_sekai-invisible-scroll__X0sg3::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.Drawer-module_sekai-mb-8__V83iF {\n  margin-bottom: 8px;\n}\n\n.Drawer-module_sekai-mb-16__ZZKlv {\n  margin-bottom: 16px;\n}\n\n.Drawer-module_sekai-mb-24__ca52J {\n  margin-bottom: 24px;\n}\n\n.Drawer-module_sekai-drawer__4Xpz7 {\n  transition: opacity 0.3s ease-out, visibility 0s linear 0.3s;\n  overflow: hidden;\n}\n.Drawer-module_sekai-drawer__4Xpz7.Drawer-module_sekai-drawer-visible__EXq-x {\n  opacity: 1;\n  visibility: visible;\n  transition-delay: 0s;\n}\n.Drawer-module_sekai-drawer__4Xpz7.Drawer-module_sekai-drawer-hidden__ewqPI {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.Drawer-module_sekai-drawer-contents-right__zkrgA,\n.Drawer-module_sekai-drawer-contents-left__6-kG3 {\n  position: absolute;\n  top: 0;\n  width: 80%;\n  height: 100%;\n  max-width: 390px;\n  background-color: var(--sekai-color-bg);\n  z-index: 1200;\n}\n\n.Drawer-module_sekai-drawer-contents-right__zkrgA {\n  right: -390px;\n  transition: right 0.3s ease-out;\n}\n.Drawer-module_sekai-drawer-contents-right__zkrgA.Drawer-module_sekai-drawer-visible__EXq-x {\n  right: 0;\n}\n\n.Drawer-module_sekai-drawer-contents-left__6-kG3 {\n  left: -390px;\n  transition: left 0.3s ease-out;\n}\n.Drawer-module_sekai-drawer-contents-left__6-kG3.Drawer-module_sekai-drawer-visible__EXq-x {\n  left: 0;\n}\n\n.Drawer-module_sekai-drawer-contents-top__tvkQO,\n.Drawer-module_sekai-drawer-contents-bottom__ql1ot {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 80%;\n  max-height: 390px;\n  background-color: var(--sekai-color-bg);\n  z-index: 1200;\n}\n\n.Drawer-module_sekai-drawer-contents-top__tvkQO {\n  top: -390px;\n  transition: top 0.3s ease-out;\n}\n.Drawer-module_sekai-drawer-contents-top__tvkQO.Drawer-module_sekai-drawer-visible__EXq-x {\n  top: 0;\n}\n\n.Drawer-module_sekai-drawer-contents-bottom__ql1ot {\n  bottom: -390px;\n  transition: bottom 0.3s ease-out;\n}\n.Drawer-module_sekai-drawer-contents-bottom__ql1ot.Drawer-module_sekai-drawer-visible__EXq-x {\n  bottom: 0;\n}";
var styles$8 = {"sekai-color-light":"Drawer-module_sekai-color-light__a7Lp9","sekai-color-dark":"Drawer-module_sekai-color-dark__UI-kJ","sekai-overlay":"Drawer-module_sekai-overlay__aFac-","sekai-overlay-dark":"Drawer-module_sekai-overlay-dark__g-gV4","sekai-overlay-light":"Drawer-module_sekai-overlay-light__l5VEp","sekai-flex-center":"Drawer-module_sekai-flex-center__J7DKS","sekai-absolute-center":"Drawer-module_sekai-absolute-center__t5u-h","sekai-invisible-scroll":"Drawer-module_sekai-invisible-scroll__X0sg3","sekai-mb-8":"Drawer-module_sekai-mb-8__V83iF","sekai-mb-16":"Drawer-module_sekai-mb-16__ZZKlv","sekai-mb-24":"Drawer-module_sekai-mb-24__ca52J","sekai-drawer":"Drawer-module_sekai-drawer__4Xpz7","sekai-drawer-visible":"Drawer-module_sekai-drawer-visible__EXq-x","sekai-drawer-hidden":"Drawer-module_sekai-drawer-hidden__ewqPI","sekai-drawer-contents-right":"Drawer-module_sekai-drawer-contents-right__zkrgA","sekai-drawer-contents-left":"Drawer-module_sekai-drawer-contents-left__6-kG3","sekai-drawer-contents-top":"Drawer-module_sekai-drawer-contents-top__tvkQO","sekai-drawer-contents-bottom":"Drawer-module_sekai-drawer-contents-bottom__ql1ot"};
styleInject(css_248z$8);

var _excluded$8 = ["sekai", "themeMode", "open", "onClose", "children", "containerComponent", "pos"];
function ownKeys$9(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$9(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$9(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$9(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Drawer = function Drawer(_ref) {
  var sekai = _ref.sekai,
    themeMode = _ref.themeMode,
    open = _ref.open,
    onClose = _ref.onClose,
    children = _ref.children,
    containerComponent = _ref.containerComponent,
    _ref$pos = _ref.pos,
    pos = _ref$pos === void 0 ? 'right' : _ref$pos,
    rest = _objectWithoutProperties(_ref, _excluded$8);
  var displayDrawer = open ? 'sekai-drawer-visible' : 'sekai-drawer-hidden';
  var portalContainer = containerComponent || document.body;
  var _useOptionalSekai = useOptionalSekai({
      sekai: sekai,
      mode: themeMode
    }),
    sekaiColor = _useOptionalSekai.sekaiColor,
    modeTheme = _useOptionalSekai.modeTheme;
  var sekaiColorBg = convertHexToRgbMixWithWhite(sekaiColor, 0.1);
  var optionStyle = {
    '--sekai-color-bg': sekaiColorBg
  };
  var posAbsoluteStyle = _objectSpread$9({}, containerComponent && {
    position: 'absolute'
  });
  return /*#__PURE__*/createPortal(/*#__PURE__*/React.createElement("div", {
    className: clsx(globalStyles["sekai-overlay-".concat(modeTheme)], styles$8['sekai-drawer'], styles$8[displayDrawer]),
    style: posAbsoluteStyle,
    "aria-hidden": "true",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: clsx(styles$8["sekai-drawer-contents-".concat(pos)], styles$8[displayDrawer], rest.className),
    style: _objectSpread$9(_objectSpread$9({}, optionStyle), rest.style),
    role: "presentation",
    tabIndex: -1,
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }), children)), portalContainer);
};

var css_248z$7 = "/* Styles for common color */\n/* Styles for z-index */\n.Dropdown-module_sekai-color-light__4gWvx {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.Dropdown-module_sekai-color-dark__aMQ7k {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.Dropdown-module_sekai-overlay__SAgCR, .Dropdown-module_sekai-overlay-dark__N0wPN, .Dropdown-module_sekai-overlay-light__TAnYs {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.Dropdown-module_sekai-overlay-light__TAnYs {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.Dropdown-module_sekai-overlay-dark__N0wPN {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.Dropdown-module_sekai-flex-center__IN4Jn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.Dropdown-module_sekai-absolute-center__HwAro {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.Dropdown-module_sekai-invisible-scroll__XVXzO {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.Dropdown-module_sekai-invisible-scroll__XVXzO::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.Dropdown-module_sekai-mb-8__7Z63N {\n  margin-bottom: 8px;\n}\n\n.Dropdown-module_sekai-mb-16__foRWj {\n  margin-bottom: 16px;\n}\n\n.Dropdown-module_sekai-mb-24__6KMAz {\n  margin-bottom: 24px;\n}\n\n.Dropdown-module_sekai-dropdown__vl8ke, .Dropdown-module_sekai-dropdown-dark__6ELhL, .Dropdown-module_sekai-dropdown-light__gsDyr {\n  position: relative;\n}\n\n.Dropdown-module_sekai-dropdown-trigger__tuFbD, .Dropdown-module_sekai-dropdown-trigger-dark__SbSAB, .Dropdown-module_sekai-dropdown-trigger-light__oxPRN {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  background-color: inherit;\n  height: 40px;\n  padding: 4px 16px;\n  border-radius: 5px;\n  outline: 1px solid var(--sekai-color);\n}\n\n.Dropdown-module_sekai-dropdown-trigger-light__oxPRN {\n  color: #212121;\n  border: 1px solid #212121;\n}\n\n.Dropdown-module_sekai-dropdown-trigger-dark__SbSAB {\n  color: #e0e0e0;\n  border: 1px solid #e0e0e0;\n}\n\n.Dropdown-module_sekai-dropdown-icon__E-yy6 {\n  width: 20px;\n  height: 20px;\n}\n\n.Dropdown-module_sekai-placeholder__Whlmk {\n  opacity: 0.5;\n}\n\n.Dropdown-module_sekai-dropdown-icon-open__1ntFS {\n  transform: rotate(180deg);\n  transition: transform 0.2s ease-in-out;\n}\n\n.Dropdown-module_sekai-dropdown-icon-close__SQC-- {\n  transform: rotate(0);\n  transition: transform 0.2s ease-in-out;\n}\n\n.Dropdown-module_sekai-dropdown-options-list__rO8x4 {\n  position: absolute;\n  z-index: 1100;\n  list-style: none;\n  top: 100%;\n  left: 0;\n  margin: 0;\n  padding: 4px 0;\n  box-shadow: 0px 4px 8px var(--sekai-color-shadow);\n  transition: opacity 0.2s ease-in-out;\n  max-height: 200px;\n  overflow-y: auto;\n}\n.Dropdown-module_sekai-dropdown-options-list__rO8x4.Dropdown-module_sekai-dropdown-options-open__uOE78 {\n  opacity: 1;\n}\n.Dropdown-module_sekai-dropdown-options-list__rO8x4.Dropdown-module_sekai-dropdown-options-close__X9EnS {\n  opacity: 0;\n}\n\n.Dropdown-module_sekai-dropdown-option-item__7Reun > button {\n  width: 100%;\n  height: 40px;\n  border: none;\n  background-color: inherit;\n  padding: 8px 16px;\n  text-align: left;\n}\n.Dropdown-module_sekai-dropdown-option-item__7Reun > button:hover {\n  background-color: var(--sekai-color-hover);\n}\n.Dropdown-module_sekai-dropdown-option-item__7Reun > button:focus-visible {\n  outline: 1px solid var(--sekai-color-shadow);\n}";
var styles$7 = {"sekai-color-light":"Dropdown-module_sekai-color-light__4gWvx","sekai-color-dark":"Dropdown-module_sekai-color-dark__aMQ7k","sekai-overlay":"Dropdown-module_sekai-overlay__SAgCR","sekai-overlay-dark":"Dropdown-module_sekai-overlay-dark__N0wPN","sekai-overlay-light":"Dropdown-module_sekai-overlay-light__TAnYs","sekai-flex-center":"Dropdown-module_sekai-flex-center__IN4Jn","sekai-absolute-center":"Dropdown-module_sekai-absolute-center__HwAro","sekai-invisible-scroll":"Dropdown-module_sekai-invisible-scroll__XVXzO","sekai-mb-8":"Dropdown-module_sekai-mb-8__7Z63N","sekai-mb-16":"Dropdown-module_sekai-mb-16__foRWj","sekai-mb-24":"Dropdown-module_sekai-mb-24__6KMAz","sekai-dropdown":"Dropdown-module_sekai-dropdown__vl8ke","sekai-dropdown-dark":"Dropdown-module_sekai-dropdown-dark__6ELhL","sekai-dropdown-light":"Dropdown-module_sekai-dropdown-light__gsDyr","sekai-dropdown-trigger":"Dropdown-module_sekai-dropdown-trigger__tuFbD","sekai-dropdown-trigger-dark":"Dropdown-module_sekai-dropdown-trigger-dark__SbSAB","sekai-dropdown-trigger-light":"Dropdown-module_sekai-dropdown-trigger-light__oxPRN","sekai-dropdown-icon":"Dropdown-module_sekai-dropdown-icon__E-yy6","sekai-placeholder":"Dropdown-module_sekai-placeholder__Whlmk","sekai-dropdown-icon-open":"Dropdown-module_sekai-dropdown-icon-open__1ntFS","sekai-dropdown-icon-close":"Dropdown-module_sekai-dropdown-icon-close__SQC--","sekai-dropdown-options-list":"Dropdown-module_sekai-dropdown-options-list__rO8x4","sekai-dropdown-options-open":"Dropdown-module_sekai-dropdown-options-open__uOE78","sekai-dropdown-options-close":"Dropdown-module_sekai-dropdown-options-close__X9EnS","sekai-dropdown-option-item":"Dropdown-module_sekai-dropdown-option-item__7Reun"};
styleInject(css_248z$7);

var _excluded$7 = ["sekai", "themeMode", "options", "onSelect", "placeholder"];
function ownKeys$8(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$8(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$8(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$8(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
    rest = _objectWithoutProperties(_ref2, _excluded$7);
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
    className: clsx(styles$7["sekai-dropdown-".concat(modeTheme)], rest.className),
    style: _objectSpread$8({
      '--sekai-color': sekaiColor
    }, rest.style || {})
  }), /*#__PURE__*/React.createElement(DropdownTriggerButton, {
    ref: triggerButtonRef,
    sekai: sekai,
    themeMode: themeMode,
    options: options,
    placeholder: placeholder
  }), /*#__PURE__*/React.createElement(DropdownOptions, {
    style: _objectSpread$8(_objectSpread$8({}, optionStyle), dropdownPosStyle),
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
    className: styles$7["sekai-dropdown-trigger-".concat(modeTheme)],
    onClick: handleClick,
    style: optionStyle
  }, /*#__PURE__*/React.createElement("span", {
    className: clsx(_defineProperty({}, styles$7['sekai-placeholder'], isDispPlaceholder))
  }, displayText), /*#__PURE__*/React.createElement(ChevronSvg, {
    className: clsx(styles$7['sekai-dropdown-icon'], _defineProperty(_defineProperty({}, styles$7['sekai-dropdown-icon-open'], openOptions), styles$7["sekai-dropdown-icon-close"], !openOptions)),
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
  var sekaiColorShadow = convertHexToRgbMixWithWhite(sekaiColor, isLight ? 0.4 : 0.9);
  var sekaiColorHover = convertHexToRgba(sekaiColor, isLight ? 0.1 : 0.3);
  var optionStyle = {
    '--sekai-color': sekaiColor,
    '--sekai-color-shadow': sekaiColorShadow,
    '--sekai-color-hover': sekaiColorHover
  };
  var _useState9 = useState(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isVisible = _useState10[0],
    setIsVisible = _useState10[1];
  var _useState11 = useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isRendered = _useState12[0],
    setIsRendered = _useState12[1];
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
    className: clsx(styles$7['sekai-dropdown-options-list'], _defineProperty(_defineProperty({}, styles$7['sekai-dropdown-options-open'], isVisible), styles$7['sekai-dropdown-options-close'], !isVisible), globalStyles["sekai-color-".concat(modeTheme)]),
    style: _objectSpread$8(_objectSpread$8({}, optionStyle), style)
  }, options.map(function (option) {
    return /*#__PURE__*/React.createElement("li", {
      key: option.value,
      className: clsx(styles$7['sekai-dropdown-option-item'])
    }, /*#__PURE__*/React.createElement("button", {
      className: clsx(globalStyles["sekai-color-".concat(modeTheme)]),
      onClick: function onClick() {
        return handleSelect(option.value);
      }
    }, option.label));
  })) : null;
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
  var palette = option.palette;
  var typography = option === null || option === void 0 ? void 0 : option.typography;
  var sekaiTheme = {
    palette: {
      sekai: palette.sekai,
      mode: palette.mode || defaultTheme.palette.mode
    },
    typography: {
      fontFamily: (typography === null || typography === void 0 ? void 0 : typography.fontFamily) || defaultTheme.typography.fontFamily
    }
  };
  return sekaiTheme;
};

var css_248z$6 = "/* Styles for common color */\n/* Styles for z-index */\n.DoReMeetEffect-module_sekai-color-light__JUXfY {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.DoReMeetEffect-module_sekai-color-dark__6TOjY {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.DoReMeetEffect-module_sekai-overlay__hh5iR, .DoReMeetEffect-module_sekai-overlay-dark__T0nR-, .DoReMeetEffect-module_sekai-overlay-light__RVCmP {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.DoReMeetEffect-module_sekai-overlay-light__RVCmP {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.DoReMeetEffect-module_sekai-overlay-dark__T0nR- {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.DoReMeetEffect-module_sekai-flex-center__TNc8m {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.DoReMeetEffect-module_sekai-absolute-center__QLSWz {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.DoReMeetEffect-module_sekai-invisible-scroll__QRa6P {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.DoReMeetEffect-module_sekai-invisible-scroll__QRa6P::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.DoReMeetEffect-module_sekai-mb-8__FcpDO {\n  margin-bottom: 8px;\n}\n\n.DoReMeetEffect-module_sekai-mb-16__K-9ys {\n  margin-bottom: 16px;\n}\n\n.DoReMeetEffect-module_sekai-mb-24__HeCoa {\n  margin-bottom: 24px;\n}\n\n.DoReMeetEffect-module_sekai-doremeet-effect__DwAmv, .DoReMeetEffect-module_sekai-doremeet-effect-dark__xJPnd, .DoReMeetEffect-module_sekai-doremeet-effect-light__TKqjA {\n  text-shadow: 0 0 5px var(--sekai-color), 0 0 10px var(--sekai-color), 0 0 20px var(--sekai-color), 0 0 40px var(--sekai-color);\n  transition: all 0.39s ease;\n}\n\n.DoReMeetEffect-module_sekai-doremeet-effect-light__TKqjA {\n  color: #212121;\n}\n\n.DoReMeetEffect-module_sekai-doremeet-effect-dark__xJPnd {\n  color: #e0e0e0;\n}";
var styles$6 = {"sekai-color-light":"DoReMeetEffect-module_sekai-color-light__JUXfY","sekai-color-dark":"DoReMeetEffect-module_sekai-color-dark__6TOjY","sekai-overlay":"DoReMeetEffect-module_sekai-overlay__hh5iR","sekai-overlay-dark":"DoReMeetEffect-module_sekai-overlay-dark__T0nR-","sekai-overlay-light":"DoReMeetEffect-module_sekai-overlay-light__RVCmP","sekai-flex-center":"DoReMeetEffect-module_sekai-flex-center__TNc8m","sekai-absolute-center":"DoReMeetEffect-module_sekai-absolute-center__QLSWz","sekai-invisible-scroll":"DoReMeetEffect-module_sekai-invisible-scroll__QRa6P","sekai-mb-8":"DoReMeetEffect-module_sekai-mb-8__FcpDO","sekai-mb-16":"DoReMeetEffect-module_sekai-mb-16__K-9ys","sekai-mb-24":"DoReMeetEffect-module_sekai-mb-24__HeCoa","sekai-doremeet-effect":"DoReMeetEffect-module_sekai-doremeet-effect__DwAmv","sekai-doremeet-effect-dark":"DoReMeetEffect-module_sekai-doremeet-effect-dark__xJPnd","sekai-doremeet-effect-light":"DoReMeetEffect-module_sekai-doremeet-effect-light__TKqjA"};
styleInject(css_248z$6);

var _excluded$6 = ["sekaiKeys", "themeMode", "text", "duration"];
function ownKeys$7(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$7(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$7(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$7(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var DoReMeetEffect = function DoReMeetEffect(_ref) {
  var sekaiKeys = _ref.sekaiKeys,
    themeMode = _ref.themeMode,
    text = _ref.text,
    _ref$duration = _ref.duration,
    duration = _ref$duration === void 0 ? 250 : _ref$duration,
    rest = _objectWithoutProperties(_ref, _excluded$6);
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
  }, [currentSekaiIndex]);
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
    className: clsx(styles$6["sekai-doremeet-effect-".concat(modeTheme)], rest.className),
    style: _objectSpread$7(_objectSpread$7({}, optionStyle), rest.style)
  }), text);
};

var css_248z$5 = "/* Styles for common color */\n/* Styles for z-index */\n.IntoTheSekai-module_sekai-color-light__mBbT8 {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.IntoTheSekai-module_sekai-color-dark__008Xa {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.IntoTheSekai-module_sekai-overlay__eMmo7, .IntoTheSekai-module_sekai-overlay-dark__Eot7v, .IntoTheSekai-module_sekai-overlay-light__8ZAPI {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.IntoTheSekai-module_sekai-overlay-light__8ZAPI {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.IntoTheSekai-module_sekai-overlay-dark__Eot7v {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.IntoTheSekai-module_sekai-flex-center__geCA3 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.IntoTheSekai-module_sekai-absolute-center__ruyqt {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.IntoTheSekai-module_sekai-invisible-scroll__u9oZV {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.IntoTheSekai-module_sekai-invisible-scroll__u9oZV::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.IntoTheSekai-module_sekai-mb-8__Wqmh4 {\n  margin-bottom: 8px;\n}\n\n.IntoTheSekai-module_sekai-mb-16__nJcTa {\n  margin-bottom: 16px;\n}\n\n.IntoTheSekai-module_sekai-mb-24__cHLHN {\n  margin-bottom: 24px;\n}\n\n.IntoTheSekai-module_into-the-sekai__GYjaM, .IntoTheSekai-module_into-the-sekai-dark__MS--L, .IntoTheSekai-module_into-the-sekai-light__uHcs- {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n.IntoTheSekai-module_into-the-sekai-light__uHcs- {\n  background-color: #ffffff;\n}\n\n.IntoTheSekai-module_into-the-sekai-dark__MS--L {\n  background-color: #121212;\n}";
var styles$5 = {"into-the-sekai":"IntoTheSekai-module_into-the-sekai__GYjaM"};
styleInject(css_248z$5);

var _excluded$5 = ["execEvent", "containerComponent"];
function ownKeys$6(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$6(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$6(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$6(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var PINK = 'rgb(255, 186, 241, {0})';
var YELLOW = 'rgb(255, 247, 148, {0})';
var AQUA = 'rgb(149, 253, 255, {0})';
var IntoTheSekai = function IntoTheSekai(_ref) {
  var execEvent = _ref.execEvent,
    containerComponent = _ref.containerComponent,
    rest = _objectWithoutProperties(_ref, _excluded$5);
  var portalContainer = containerComponent || document.body;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    startAnimation = _useState2[0],
    setStartAnimation = _useState2[1];
  var canvasRef = useRef(null);
  var sekaiPieceRef = useRef([]);
  var optionStyle = _objectSpread$6({}, containerComponent && {
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
        return _objectSpread$6(_objectSpread$6({}, tri), {}, {
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
  }, [startAnimation]);
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
    className: clsx(styles$5['into-the-sekai'], rest.className),
    style: _objectSpread$6(_objectSpread$6({}, optionStyle), rest.style),
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

var css_248z$4 = "/* Styles for common color */\n/* Styles for z-index */\n.TextLink-module_sekai-color-light__-On-Y {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.TextLink-module_sekai-color-dark__mO6W5 {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.TextLink-module_sekai-overlay__-Te9w, .TextLink-module_sekai-overlay-dark__aeUHe, .TextLink-module_sekai-overlay-light__C5b0b {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.TextLink-module_sekai-overlay-light__C5b0b {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.TextLink-module_sekai-overlay-dark__aeUHe {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.TextLink-module_sekai-flex-center__1DDJH {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.TextLink-module_sekai-absolute-center__xMuSU {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.TextLink-module_sekai-invisible-scroll__xuDbm {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.TextLink-module_sekai-invisible-scroll__xuDbm::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.TextLink-module_sekai-mb-8__1cXZT {\n  margin-bottom: 8px;\n}\n\n.TextLink-module_sekai-mb-16__jOiZC {\n  margin-bottom: 16px;\n}\n\n.TextLink-module_sekai-mb-24__hbdGp {\n  margin-bottom: 24px;\n}\n\n.TextLink-module_sekai-text-link__U5trb, .TextLink-module_sekai-text-link-dark__3zbvG, .TextLink-module_sekai-text-link-light__sBYGX {\n  width: -moz-fit-content;\n  width: fit-content;\n  text-decoration: underline;\n  text-decoration-color: var(--sekai-color);\n  padding: 2px 8px;\n}\n.TextLink-module_sekai-text-link__U5trb.TextLink-module_sekai-disabled__lX1Rv, .TextLink-module_sekai-disabled__lX1Rv.TextLink-module_sekai-text-link-dark__3zbvG, .TextLink-module_sekai-disabled__lX1Rv.TextLink-module_sekai-text-link-light__sBYGX {\n  pointer-events: none;\n  opacity: 0.5;\n}\n.TextLink-module_sekai-text-link__U5trb.TextLink-module_sekai-disabled__lX1Rv:focus, .TextLink-module_sekai-disabled__lX1Rv.TextLink-module_sekai-text-link-dark__3zbvG:focus, .TextLink-module_sekai-disabled__lX1Rv.TextLink-module_sekai-text-link-light__sBYGX:focus {\n  background-color: transparent;\n  outline: none;\n}\n.TextLink-module_sekai-text-link__U5trb:hover, .TextLink-module_sekai-text-link-dark__3zbvG:hover, .TextLink-module_sekai-text-link-light__sBYGX:hover {\n  text-decoration: none;\n  background-color: var(--sekai-color-hover);\n}\n.TextLink-module_sekai-text-link__U5trb:focus, .TextLink-module_sekai-text-link-dark__3zbvG:focus, .TextLink-module_sekai-text-link-light__sBYGX:focus {\n  text-decoration: none;\n  outline: 1px solid var(--sekai-color);\n  background-color: var(--sekai-color-hover);\n}\n\n.TextLink-module_sekai-text-link-light__sBYGX {\n  color: #212121;\n}\n\n.TextLink-module_sekai-text-link-dark__3zbvG {\n  color: #e0e0e0;\n}";
var styles$4 = {"sekai-color-light":"TextLink-module_sekai-color-light__-On-Y","sekai-color-dark":"TextLink-module_sekai-color-dark__mO6W5","sekai-overlay":"TextLink-module_sekai-overlay__-Te9w","sekai-overlay-dark":"TextLink-module_sekai-overlay-dark__aeUHe","sekai-overlay-light":"TextLink-module_sekai-overlay-light__C5b0b","sekai-flex-center":"TextLink-module_sekai-flex-center__1DDJH","sekai-absolute-center":"TextLink-module_sekai-absolute-center__xMuSU","sekai-invisible-scroll":"TextLink-module_sekai-invisible-scroll__xuDbm","sekai-mb-8":"TextLink-module_sekai-mb-8__1cXZT","sekai-mb-16":"TextLink-module_sekai-mb-16__jOiZC","sekai-mb-24":"TextLink-module_sekai-mb-24__hbdGp","sekai-text-link":"TextLink-module_sekai-text-link__U5trb","sekai-text-link-dark":"TextLink-module_sekai-text-link-dark__3zbvG","sekai-text-link-light":"TextLink-module_sekai-text-link-light__sBYGX","sekai-disabled":"TextLink-module_sekai-disabled__lX1Rv"};
styleInject(css_248z$4);

var _excluded$4 = ["sekai", "themeMode", "text", "href", "isExternal", "disabled", "ariaLabel"];
function ownKeys$5(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$5(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$5(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$5(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
    rest = _objectWithoutProperties(_ref, _excluded$4);
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
    className: clsx(styles$4["sekai-text-link-".concat(modeTheme)], disabled && styles$4['sekai-disabled'], rest.className),
    style: _objectSpread$5(_objectSpread$5({}, optionStyle), rest.style),
    href: href,
    "aria-label": ariaLabel,
    "aria-disabled": disabled,
    target: isExternal ? '_blank' : '_self',
    rel: "noopener noreferrer"
  }), text);
};

var css_248z$3 = "/* Styles for common color */\n/* Styles for z-index */\n.List-module_sekai-color-light__01Lsp {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.List-module_sekai-color-dark__V57IU {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.List-module_sekai-overlay__O4Bnb, .List-module_sekai-overlay-dark__is54n, .List-module_sekai-overlay-light__qkGzF {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.List-module_sekai-overlay-light__qkGzF {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.List-module_sekai-overlay-dark__is54n {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.List-module_sekai-flex-center__1ncSJ {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.List-module_sekai-absolute-center__bWXpW {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.List-module_sekai-invisible-scroll__F-LG8 {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.List-module_sekai-invisible-scroll__F-LG8::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.List-module_sekai-mb-8__B1ZQI {\n  margin-bottom: 8px;\n}\n\n.List-module_sekai-mb-16__zAVq8 {\n  margin-bottom: 16px;\n}\n\n.List-module_sekai-mb-24__IimDM {\n  margin-bottom: 24px;\n}\n\n/* for List styles */\n.List-module_sekai-list__zhjZV {\n  margin: 0;\n}\n.List-module_sekai-list__zhjZV ::marker {\n  color: var(--sekai-color);\n}\n\n/* List styles end */\n/* for List Item common styles */\n.List-module_sekai-list-icon__iZQle {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 24px;\n  height: 24px;\n}\n\n.List-module_sekai-list-item__PwsSw, .List-module_sekai-list-item-button__LDkoQ, .List-module_sekai-list-item-text__tvhzb {\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  width: 100%;\n  height: 48px;\n}\n\n/* List Item common styles end */\n/* for ListItemText styles */\n.List-module_sekai-list-item-text__tvhzb {\n  padding: 0 8px;\n}\n.List-module_sekai-list-item-text__tvhzb > p {\n  margin: 0;\n  text-shadow: 1px 1px 2px var(--sekai-color);\n}\n.List-module_sekai-list-item-text__tvhzb > span {\n  display: inline-block;\n  text-shadow: 1px 1px 2px var(--sekai-color);\n}\n\n/* ListItemText styles end */\n/* for ListItemButton styles */\n.List-module_sekai-list-button__EyXER, .List-module_sekai-list-button-dark__yKca7, .List-module_sekai-list-button-light__R2zCA {\n  position: relative;\n  overflow: hidden;\n  background-color: inherit;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  width: 100%;\n  height: 100%;\n  padding: 0 8px;\n}\n.List-module_sekai-list-button__EyXER:hover, .List-module_sekai-list-button-dark__yKca7:hover, .List-module_sekai-list-button-light__R2zCA:hover {\n  background-color: var(--sekai-color-hover);\n}\n.List-module_sekai-list-button__EyXER:focus-visible, .List-module_sekai-list-button-dark__yKca7:focus-visible, .List-module_sekai-list-button-light__R2zCA:focus-visible {\n  background-color: var(--sekai-color-hover);\n  outline: 1px solid var(--sekai-color);\n}\n.List-module_sekai-list-button__EyXER:disabled, .List-module_sekai-list-button-dark__yKca7:disabled, .List-module_sekai-list-button-light__R2zCA:disabled {\n  opacity: 0.5;\n  background-color: inherit;\n}\n\n.List-module_sekai-list-button-light__R2zCA {\n  color: #212121;\n}\n\n.List-module_sekai-list-button-dark__yKca7 {\n  color: #e0e0e0;\n}\n\n/* ListItemButton styles end */\n/* ripple effect */\n.List-module_sekai-ripple__xrO8k {\n  position: absolute;\n  border-radius: 39%;\n  transform: scale(0);\n  animation: List-module_ripple__F836k 0.39s linear;\n  background-color: var(--sekai-color);\n}\n\n@keyframes List-module_ripple__F836k {\n  to {\n    transform: scale(4);\n    opacity: 0;\n  }\n}\n/* ripple effect end */";
var styles$3 = {"sekai-color-light":"List-module_sekai-color-light__01Lsp","sekai-color-dark":"List-module_sekai-color-dark__V57IU","sekai-overlay":"List-module_sekai-overlay__O4Bnb","sekai-overlay-dark":"List-module_sekai-overlay-dark__is54n","sekai-overlay-light":"List-module_sekai-overlay-light__qkGzF","sekai-flex-center":"List-module_sekai-flex-center__1ncSJ","sekai-absolute-center":"List-module_sekai-absolute-center__bWXpW","sekai-invisible-scroll":"List-module_sekai-invisible-scroll__F-LG8","sekai-mb-8":"List-module_sekai-mb-8__B1ZQI","sekai-mb-16":"List-module_sekai-mb-16__zAVq8","sekai-mb-24":"List-module_sekai-mb-24__IimDM","sekai-list":"List-module_sekai-list__zhjZV","sekai-list-icon":"List-module_sekai-list-icon__iZQle","sekai-list-item":"List-module_sekai-list-item__PwsSw","sekai-list-item-button":"List-module_sekai-list-item-button__LDkoQ","sekai-list-item-text":"List-module_sekai-list-item-text__tvhzb","sekai-list-button":"List-module_sekai-list-button__EyXER","sekai-list-button-dark":"List-module_sekai-list-button-dark__yKca7","sekai-list-button-light":"List-module_sekai-list-button-light__R2zCA","sekai-ripple":"List-module_sekai-ripple__xrO8k","ripple":"List-module_ripple__F836k"};
styleInject(css_248z$3);

var _excluded$3 = ["sekai", "themeMode", "children", "as", "noBullet"];
function ownKeys$4(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$4(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$4(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var ListContext = /*#__PURE__*/createContext(false);
var List = function List(_ref) {
  var sekai = _ref.sekai,
    themeMode = _ref.themeMode,
    children = _ref.children,
    _ref$as = _ref.as,
    as = _ref$as === void 0 ? 'ul' : _ref$as,
    _ref$noBullet = _ref.noBullet,
    noBullet = _ref$noBullet === void 0 ? true : _ref$noBullet,
    rest = _objectWithoutProperties(_ref, _excluded$3);
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
    className: clsx(globalStyles["sekai-color-".concat(modeTheme)], styles$3['sekai-list'], rest.className),
    style: _objectSpread$4(_objectSpread$4({
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

function ownKeys$3(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$3(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$3(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
    className: clsx(styles$3['sekai-list-item-button'], className),
    style: _objectSpread$3(_objectSpread$3({}, optionStyle), style)
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    ref: listItemButtonRef,
    className: styles$3["sekai-list-button-".concat(modeTheme)],
    disabled: disabled,
    onClick: handleOnClick
  }, getImgComponent$1(icon), children));
};
var getImgComponent$1 = function getImgComponent(icon) {
  if (!icon) return null;
  if (typeof icon === 'string') {
    return /*#__PURE__*/React.createElement("img", {
      className: styles$3['sekai-list-icon'],
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
  ripple.className = styles$3["".concat(rippleEffectClassName)];
  return ripple;
};
var removeRippleEffect = function removeRippleEffect(element) {
  var ripple = element.getElementsByClassName(rippleEffectClassName)[0];
  if (ripple) ripple.remove();
};

var _excluded$2 = ["sekai", "themeMode", "children", "as", "icon"];
function ownKeys$2(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$2(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$2(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var ListItemText = function ListItemText(_ref) {
  var sekai = _ref.sekai,
    themeMode = _ref.themeMode,
    children = _ref.children,
    _ref$as = _ref.as,
    as = _ref$as === void 0 ? 'p' : _ref$as,
    icon = _ref.icon,
    rest = _objectWithoutProperties(_ref, _excluded$2);
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
    className: clsx(styles$3['sekai-list-item-text'], globalStyles["sekai-color-".concat(modeTheme)], rest.className),
    style: _objectSpread$2(_objectSpread$2({}, optionStyle), rest.style)
  }), getImgComponent(icon), isChildrenElement ? children : /*#__PURE__*/React.createElement(Component, null, children));
};
var getImgComponent = function getImgComponent(icon) {
  if (!icon) return null;
  if (typeof icon === 'string') {
    return /*#__PURE__*/React.createElement("img", {
      className: styles$3['sekai-list-icon'],
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

var css_248z$2 = ".StickyNote-module_sekai-sticky-note__rheDG,\n.StickyNote-module_sekai-sticky-note__rheDG > button {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.StickyNote-module_sekai-sticky-note-parts__7ixUr {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background-color: var(--sekai-color-bg);\n  padding-right: 8px;\n}\n.StickyNote-module_sekai-sticky-note-parts__7ixUr .StickyNote-module_sekai-sticky-note-design__Aae2S {\n  width: 15px;\n  height: 100%;\n  background-color: var(--sekai-color);\n  margin-right: 8px;\n}";
var styles$2 = {"sekai-sticky-note":"StickyNote-module_sekai-sticky-note__rheDG","sekai-sticky-note-parts":"StickyNote-module_sekai-sticky-note-parts__7ixUr","sekai-sticky-note-design":"StickyNote-module_sekai-sticky-note-design__Aae2S"};
styleInject(css_248z$2);

var _excluded$1 = ["sekai", "children", "as"];
var StickyNote = function StickyNote(_ref) {
  var sekai = _ref.sekai,
    children = _ref.children,
    _ref$as = _ref.as,
    as = _ref$as === void 0 ? 'button' : _ref$as,
    rest = _objectWithoutProperties(_ref, _excluded$1);
  var isListWrap = useContext(ListContext);
  if (!isListWrap) ConsoleWarning('⚠ Warning: <StickyNote> should be used inside <List>');
  var stickyNoteContentsProps = {
    sekai: sekai,
    children: children
  };
  return 'button' === as ? /*#__PURE__*/React.createElement(ListItemButton, _extends({}, rest, {
    className: clsx(styles$2['sekai-sticky-note'], rest.className),
    sekai: sekai,
    themeMode: LIGHT_MODE
  }), /*#__PURE__*/React.createElement(StickyNoteContents, stickyNoteContentsProps)) : /*#__PURE__*/React.createElement(ListItemText, _extends({}, rest, {
    className: clsx(styles$2['sekai-sticky-note'], rest.className),
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
    sekaiColor = _useOptionalSekai.sekaiColor;
  var sekaiColorBg = convertHexToRgbMixWithWhite(sekaiColor, 0.3);
  var optionStyle = {
    '--sekai-color': sekaiColor,
    '--sekai-color-bg': sekaiColorBg
  };
  return /*#__PURE__*/React.createElement("div", {
    className: styles$2['sekai-sticky-note-parts'],
    style: optionStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$2['sekai-sticky-note-design']
  }), children);
};

var css_248z$1 = ".Loading-module_sekai-loading__5TQ0- {\n  position: relative;\n  width: 60px;\n  height: 60px;\n}\n\n.Loading-module_sekai-loading-circle__-viBM {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  background-color: var(--sekai-color);\n  border-radius: 50%;\n  animation: Loading-module_fade__vmfxA 1s infinite ease-in-out;\n  top: calc(50% - 5px);\n  left: calc(50% - 5px);\n  transform: translate(-50%, -50%);\n}\n\n.Loading-module_sekai-circle-animation-0__ZIW47 {\n  transform: rotate(0deg) translate(25px) rotate(0deg);\n  animation-delay: 0s;\n}\n\n.Loading-module_sekai-circle-animation-1__NDbw- {\n  transform: rotate(45deg) translate(25px) rotate(-45deg);\n  animation-delay: 0.125s;\n}\n\n.Loading-module_sekai-circle-animation-2__GJVZL {\n  transform: rotate(90deg) translate(25px) rotate(-90deg);\n  animation-delay: 0.25s;\n}\n\n.Loading-module_sekai-circle-animation-3__t-Eee {\n  transform: rotate(135deg) translate(25px) rotate(-135deg);\n  animation-delay: 0.375s;\n}\n\n.Loading-module_sekai-circle-animation-4__PMKBH {\n  transform: rotate(180deg) translate(25px) rotate(-180deg);\n  animation-delay: 0.5s;\n}\n\n.Loading-module_sekai-circle-animation-5__Wk-tp {\n  transform: rotate(225deg) translate(25px) rotate(-225deg);\n  animation-delay: 0.625s;\n}\n\n.Loading-module_sekai-circle-animation-6__P3Mdl {\n  transform: rotate(270deg) translate(25px) rotate(-270deg);\n  animation-delay: 0.75s;\n}\n\n.Loading-module_sekai-circle-animation-7__p8mxn {\n  transform: rotate(315deg) translate(25px) rotate(-315deg);\n  animation-delay: 0.875s;\n}\n\n@keyframes Loading-module_fade__vmfxA {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.3;\n  }\n}";
var styles$1 = {"sekai-loading":"Loading-module_sekai-loading__5TQ0-","sekai-loading-circle":"Loading-module_sekai-loading-circle__-viBM","fade":"Loading-module_fade__vmfxA","sekai-circle-animation-0":"Loading-module_sekai-circle-animation-0__ZIW47","sekai-circle-animation-1":"Loading-module_sekai-circle-animation-1__NDbw-","sekai-circle-animation-2":"Loading-module_sekai-circle-animation-2__GJVZL","sekai-circle-animation-3":"Loading-module_sekai-circle-animation-3__t-Eee","sekai-circle-animation-4":"Loading-module_sekai-circle-animation-4__PMKBH","sekai-circle-animation-5":"Loading-module_sekai-circle-animation-5__Wk-tp","sekai-circle-animation-6":"Loading-module_sekai-circle-animation-6__P3Mdl","sekai-circle-animation-7":"Loading-module_sekai-circle-animation-7__p8mxn"};
styleInject(css_248z$1);

function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
    className: clsx(styles$1['sekai-loading'], className),
    style: _objectSpread$1(_objectSpread$1({}, optionStyle), style)
  }, Array.from({
    length: CIRCLE_COUNT
  }, function (_, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: "circle-".concat(index),
      className: clsx(styles$1['sekai-loading-circle'], styles$1["sekai-circle-animation-".concat(index)])
    });
  }));
};

var css_248z = "/* Styles for common color */\n/* Styles for z-index */\n.Pagination-module_sekai-color-light__gu1aA {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.Pagination-module_sekai-color-dark__5GSQD {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.Pagination-module_sekai-overlay__4QFaE, .Pagination-module_sekai-overlay-dark__S8HQI, .Pagination-module_sekai-overlay-light__rka7x {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.Pagination-module_sekai-overlay-light__rka7x {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.Pagination-module_sekai-overlay-dark__S8HQI {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.Pagination-module_sekai-flex-center__yez1Q {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.Pagination-module_sekai-absolute-center__0zAbB {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.Pagination-module_sekai-invisible-scroll__HLRjP {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.Pagination-module_sekai-invisible-scroll__HLRjP::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.Pagination-module_sekai-mb-8__xiVFH {\n  margin-bottom: 8px;\n}\n\n.Pagination-module_sekai-mb-16__hTLYT {\n  margin-bottom: 16px;\n}\n\n.Pagination-module_sekai-mb-24__ZW1Ij {\n  margin-bottom: 24px;\n}\n\n.Pagination-module_sekai-pagination__LNnaw, .Pagination-module_sekai-pagination-large__ETji3, .Pagination-module_sekai-pagination-medium__1E5zN, .Pagination-module_sekai-pagination-small__XYKO0 {\n  display: flex;\n  gap: 4px;\n  align-items: center;\n}\n\n.Pagination-module_sekai-pagination-small__XYKO0 {\n  height: 30px;\n}\n\n.Pagination-module_sekai-pagination-medium__1E5zN {\n  height: 40px;\n}\n\n.Pagination-module_sekai-pagination-large__ETji3 {\n  height: 50px;\n}\n\n.Pagination-module_sekai-pagination-button__bR7rG, .Pagination-module_sekai-pagination-button-large__61FQR, .Pagination-module_sekai-pagination-button-medium__LKFZn, .Pagination-module_sekai-pagination-button-small__MjCX8 {\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: inherit;\n  border: none;\n}\n.Pagination-module_sekai-pagination-button__bR7rG:hover, .Pagination-module_sekai-pagination-button-large__61FQR:hover, .Pagination-module_sekai-pagination-button-medium__LKFZn:hover, .Pagination-module_sekai-pagination-button-small__MjCX8:hover {\n  background-color: var(--sekai-color-hover);\n}\n.Pagination-module_sekai-pagination-button__bR7rG:focus-visible, .Pagination-module_sekai-pagination-button-large__61FQR:focus-visible, .Pagination-module_sekai-pagination-button-medium__LKFZn:focus-visible, .Pagination-module_sekai-pagination-button-small__MjCX8:focus-visible {\n  outline: 1px solid var(--sekai-color);\n}\n\n.Pagination-module_sekai-pagination-arrow__81Vfy {\n  width: 60%;\n  height: 60%;\n}\n\n.Pagination-module_sekai-pagination-button-small__MjCX8 {\n  width: 30px;\n  height: 30px;\n}\n\n.Pagination-module_sekai-pagination-button-medium__LKFZn {\n  font-size: 1rem;\n  width: 40px;\n  height: 40px;\n}\n\n.Pagination-module_sekai-pagination-button-large__61FQR {\n  font-size: 1.25rem;\n  width: 50px;\n  height: 50px;\n}\n\n.Pagination-module_sekai-color-light__gu1aA {\n  color: #212121;\n}\n\n.Pagination-module_sekai-color-dark__5GSQD {\n  color: #e0e0e0;\n}\n\n.Pagination-module_sekai-pagination-selected__9fupk {\n  font-weight: bold;\n  color: var(--sekai-color);\n}\n\n.Pagination-module_sekai-pagination-ellipsis__464KL {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  aspect-ratio: 1;\n}";
var styles = {"sekai-color-light":"Pagination-module_sekai-color-light__gu1aA","sekai-color-dark":"Pagination-module_sekai-color-dark__5GSQD","sekai-overlay":"Pagination-module_sekai-overlay__4QFaE","sekai-overlay-dark":"Pagination-module_sekai-overlay-dark__S8HQI","sekai-overlay-light":"Pagination-module_sekai-overlay-light__rka7x","sekai-flex-center":"Pagination-module_sekai-flex-center__yez1Q","sekai-absolute-center":"Pagination-module_sekai-absolute-center__0zAbB","sekai-invisible-scroll":"Pagination-module_sekai-invisible-scroll__HLRjP","sekai-mb-8":"Pagination-module_sekai-mb-8__xiVFH","sekai-mb-16":"Pagination-module_sekai-mb-16__hTLYT","sekai-mb-24":"Pagination-module_sekai-mb-24__ZW1Ij","sekai-pagination":"Pagination-module_sekai-pagination__LNnaw","sekai-pagination-large":"Pagination-module_sekai-pagination-large__ETji3","sekai-pagination-medium":"Pagination-module_sekai-pagination-medium__1E5zN","sekai-pagination-small":"Pagination-module_sekai-pagination-small__XYKO0","sekai-pagination-button":"Pagination-module_sekai-pagination-button__bR7rG","sekai-pagination-button-large":"Pagination-module_sekai-pagination-button-large__61FQR","sekai-pagination-button-medium":"Pagination-module_sekai-pagination-button-medium__LKFZn","sekai-pagination-button-small":"Pagination-module_sekai-pagination-button-small__MjCX8","sekai-pagination-arrow":"Pagination-module_sekai-pagination-arrow__81Vfy","sekai-pagination-selected":"Pagination-module_sekai-pagination-selected__9fupk","sekai-pagination-ellipsis":"Pagination-module_sekai-pagination-ellipsis__464KL"};
styleInject(css_248z);

var _excluded = ["sekai", "themeMode", "count", "page", "onChangePage", "siblingCount", "size"],
  _excluded2 = ["size", "isPrev", "onClick"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
    rest = _objectWithoutProperties(_ref, _excluded);
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
    className: clsx(styles["sekai-pagination-".concat(size)], rest.className),
    style: _objectSpread(_objectSpread({}, optionStyle), rest.style)
  }), /*#__PURE__*/React.createElement(CtrlButton, _extends({}, ctrlButtonProps, {
    isPrev: true,
    onClick: handlePrevPage
  })), rangePagination.map(function (item, index) {
    if (item === PaginationConstants.Ellipsis) {
      return /*#__PURE__*/React.createElement("span", {
        key: index,
        className: styles['sekai-pagination-ellipsis']
      }, '...');
    }
    return /*#__PURE__*/React.createElement("button", {
      key: index,
      className: clsx(styles["sekai-pagination-button-".concat(size)], styles["sekai-color-".concat(modeTheme)], _defineProperty({}, styles["sekai-pagination-selected"], item === currentPage)),
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
    rest = _objectWithoutProperties(_ref2, _excluded2);
  var vector = isPrev ? 'left' : 'right';
  return /*#__PURE__*/React.createElement("button", {
    className: clsx(styles["sekai-pagination-button-".concat(size)]),
    onClick: onClick
  }, /*#__PURE__*/React.createElement(ArrowSvg, _extends({}, rest, {
    vector: vector,
    className: styles['sekai-pagination-arrow']
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

export { Accordion, BasicButton, COLORS_SEKAI_KEYS, Card, CardContent, CardTitle, DARK_MODE, Dialog, DialogButtons, DialogTitleHeader, DoReMeetEffect, Drawer, Dropdown, DropdownContent, HamburgerButton, IntoTheSekai, LIGHT_MODE, List, ListContext, ListItemButton, ListItemText, Loading, NamePlate, OutlineText, Pagination, PrskLinkCard, StickyNote, StrongButton, StylishButton, TextLink, XoMikuDialog, XxMikuDialog, YourSekaiContext, YourSekaiProvider, colorsSekai, convertHexToRgb, convertHexToRgbMixWithWhite, convertHexToRgba, createSekai, fireOnEnterKey, fireOnEscapeKey, useCreateSekai, useThemeMode };
