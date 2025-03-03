import React, { useState, useEffect, createContext, useMemo, useContext } from 'react';
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

var css_248z$6 = "/* Styles for common color */\n/* Styles for z-index */\n.global-module_sekai-color-light__HfMHF {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.global-module_sekai-color-dark__6YhnV {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.global-module_sekai-overlay__mmwzM, .global-module_sekai-overlay-dark__6yGpR, .global-module_sekai-overlay-light__HL9EZ {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.global-module_sekai-overlay-light__HL9EZ {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.global-module_sekai-overlay-dark__6yGpR {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.global-module_sekai-flex-center__g0QI6 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.global-module_sekai-absolute-center__VTxH3 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.global-module_sekai-invisible-scroll__hmrCH {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.global-module_sekai-invisible-scroll__hmrCH::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.global-module_sekai-mb-8__ktEHx {\n  margin-bottom: 8px;\n}\n\n.global-module_sekai-mb-16__6mRfr {\n  margin-bottom: 16px;\n}\n\n.global-module_sekai-mb-24__tgmAP {\n  margin-bottom: 24px;\n}";
var globalStyles = {"sekai-color-light":"global-module_sekai-color-light__HfMHF","sekai-color-dark":"global-module_sekai-color-dark__6YhnV","sekai-overlay":"global-module_sekai-overlay__mmwzM","sekai-overlay-dark":"global-module_sekai-overlay-dark__6yGpR","sekai-overlay-light":"global-module_sekai-overlay-light__HL9EZ","sekai-flex-center":"global-module_sekai-flex-center__g0QI6","sekai-absolute-center":"global-module_sekai-absolute-center__VTxH3","sekai-invisible-scroll":"global-module_sekai-invisible-scroll__hmrCH","sekai-mb-8":"global-module_sekai-mb-8__ktEHx","sekai-mb-16":"global-module_sekai-mb-16__6mRfr","sekai-mb-24":"global-module_sekai-mb-24__tgmAP"};
styleInject(css_248z$6);

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
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
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

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}

function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}

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

function ownKeys$2(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$2(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$2(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
      return _objectSpread$2(_objectSpread$2({}, pre), {}, {
        palette: _objectSpread$2(_objectSpread$2({}, pre.palette), {}, {
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

var useCreateSekai = function useCreateSekai() {
  var context = useContext(YourSekaiContext);
  if (!context) {
    throw new Error('useCreateSekai must be used within a YourSekaiProvider');
  }
  return context;
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
  return "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(alpha, ")");
};

var css_248z$5 = ".BasicButton-module_sekai-basic-button__VyCUN, .BasicButton-module_sekai-basic-button-dark__6gtPa, .BasicButton-module_sekai-basic-button-light__4e-cr {\n  padding: 5px 10px;\n  border-radius: 10px;\n  min-height: 40px;\n}\n.BasicButton-module_sekai-basic-button__VyCUN:disabled, .BasicButton-module_sekai-basic-button-dark__6gtPa:disabled, .BasicButton-module_sekai-basic-button-light__4e-cr:disabled {\n  opacity: 0.5;\n}\n.BasicButton-module_sekai-basic-button__VyCUN:disabled:hover, .BasicButton-module_sekai-basic-button-dark__6gtPa:disabled:hover, .BasicButton-module_sekai-basic-button-light__4e-cr:disabled:hover {\n  background-color: transparent;\n}\n\n.BasicButton-module_sekai-basic-button-light__4e-cr {\n  border: 2px solid var(--sekai-color);\n}\n.BasicButton-module_sekai-basic-button-light__4e-cr:hover {\n  background-color: var(--sekai-color-hover);\n}\n.BasicButton-module_sekai-basic-button-light__4e-cr:focus-visible {\n  outline: 1px solid var(--sekai-color);\n}\n\n.BasicButton-module_sekai-basic-button-dark__6gtPa {\n  border: 2px solid var(--sekai-color);\n}\n.BasicButton-module_sekai-basic-button-dark__6gtPa:hover {\n  background-color: var(--sekai-color-hover);\n}\n.BasicButton-module_sekai-basic-button-dark__6gtPa:focus-visible {\n  outline: 1px solid var(--sekai-color);\n}";
var styles$5 = {"sekai-basic-button":"BasicButton-module_sekai-basic-button__VyCUN","sekai-basic-button-dark":"BasicButton-module_sekai-basic-button-dark__6gtPa","sekai-basic-button-light":"BasicButton-module_sekai-basic-button-light__4e-cr"};
styleInject(css_248z$5);

var _excluded$1 = ["className", "sekai", "withText", "themeMode", "children", "disabled"];
function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var BasicButton = function BasicButton(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    sekai = _ref.sekai,
    _ref$withText = _ref.withText,
    withText = _ref$withText === void 0 ? false : _ref$withText,
    themeMode = _ref.themeMode,
    children = _ref.children,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    buttonProps = _objectWithoutProperties(_ref, _excluded$1);
  var _useOptionalSekai = useOptionalSekai({
      sekai: sekai,
      mode: themeMode
    }),
    sekaiColor = _useOptionalSekai.sekaiColor,
    modeTheme = _useOptionalSekai.modeTheme,
    isLight = _useOptionalSekai.isLight;
  var sekaiColorHover = convertHexToRgba(sekaiColor, isLight ? 0.1 : 0.3);
  var optionStyle = _objectSpread$1({
    '--sekai-color': sekaiColor,
    '--sekai-color-hover': sekaiColorHover
  }, withText && {
    color: sekaiColor
  });
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: [styles$5["sekai-basic-button-".concat(modeTheme)], globalStyles["sekai-color-".concat(modeTheme)], className].join(' '),
    style: optionStyle,
    disabled: disabled
  }, buttonProps), children);
};

var css_248z$4 = "/* Styles for common color */\n/* Styles for z-index */\n.StrongButton-module_sekai-color-light__S2FuU {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.StrongButton-module_sekai-color-dark__Nmzlm {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.StrongButton-module_sekai-overlay__YhF8w, .StrongButton-module_sekai-overlay-dark__5Jx1Y, .StrongButton-module_sekai-overlay-light__Q34oR {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.StrongButton-module_sekai-overlay-light__Q34oR {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.StrongButton-module_sekai-overlay-dark__5Jx1Y {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.StrongButton-module_sekai-flex-center__SaKWZ {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.StrongButton-module_sekai-absolute-center__iYQ4r {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.StrongButton-module_sekai-invisible-scroll__qrDva {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.StrongButton-module_sekai-invisible-scroll__qrDva::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.StrongButton-module_sekai-mb-8__JL2yt {\n  margin-bottom: 8px;\n}\n\n.StrongButton-module_sekai-mb-16__T5bZ7 {\n  margin-bottom: 16px;\n}\n\n.StrongButton-module_sekai-mb-24__HnymN {\n  margin-bottom: 24px;\n}\n\n.StrongButton-module_sekai-strong-button__AQ7N0, .StrongButton-module_sekai-strong-button-dark__t7x5O, .StrongButton-module_sekai-strong-button-light__2NC9s {\n  padding: 5px 10px;\n  border-radius: 10px;\n  min-height: 40px;\n  border: 2px solid var(--sekai-color);\n  background-color: var(--sekai-color-bg);\n}\n.StrongButton-module_sekai-strong-button__AQ7N0:hover, .StrongButton-module_sekai-strong-button-dark__t7x5O:hover, .StrongButton-module_sekai-strong-button-light__2NC9s:hover {\n  background-color: var(--sekai-color);\n}\n.StrongButton-module_sekai-strong-button__AQ7N0:disabled, .StrongButton-module_sekai-strong-button-dark__t7x5O:disabled, .StrongButton-module_sekai-strong-button-light__2NC9s:disabled {\n  opacity: 0.6;\n}\n.StrongButton-module_sekai-strong-button__AQ7N0:disabled:hover, .StrongButton-module_sekai-strong-button-dark__t7x5O:disabled:hover, .StrongButton-module_sekai-strong-button-light__2NC9s:disabled:hover {\n  background-color: var(--sekai-color-bg);\n}\n\n.StrongButton-module_sekai-strong-button-light__2NC9s {\n  color: #212121;\n}\n.StrongButton-module_sekai-strong-button-light__2NC9s:disabled {\n  color: rgb(119.58, 119.58, 119.58);\n}\n\n.StrongButton-module_sekai-strong-button-dark__t7x5O {\n  color: #e0e0e0;\n}\n.StrongButton-module_sekai-strong-button-dark__t7x5O:disabled {\n  color: rgb(236.09, 236.09, 236.09);\n}";
var styles$4 = {"sekai-color-light":"StrongButton-module_sekai-color-light__S2FuU","sekai-color-dark":"StrongButton-module_sekai-color-dark__Nmzlm","sekai-overlay":"StrongButton-module_sekai-overlay__YhF8w","sekai-overlay-dark":"StrongButton-module_sekai-overlay-dark__5Jx1Y","sekai-overlay-light":"StrongButton-module_sekai-overlay-light__Q34oR","sekai-flex-center":"StrongButton-module_sekai-flex-center__SaKWZ","sekai-absolute-center":"StrongButton-module_sekai-absolute-center__iYQ4r","sekai-invisible-scroll":"StrongButton-module_sekai-invisible-scroll__qrDva","sekai-mb-8":"StrongButton-module_sekai-mb-8__JL2yt","sekai-mb-16":"StrongButton-module_sekai-mb-16__T5bZ7","sekai-mb-24":"StrongButton-module_sekai-mb-24__HnymN","sekai-strong-button":"StrongButton-module_sekai-strong-button__AQ7N0","sekai-strong-button-dark":"StrongButton-module_sekai-strong-button-dark__t7x5O","sekai-strong-button-light":"StrongButton-module_sekai-strong-button-light__2NC9s"};
styleInject(css_248z$4);

var _excluded = ["className", "sekai", "themeMode", "children", "disabled"];
var StrongButton = function StrongButton(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    sekai = _ref.sekai,
    themeMode = _ref.themeMode,
    children = _ref.children,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    buttonProps = _objectWithoutProperties(_ref, _excluded);
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
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: [styles$4["sekai-strong-button-".concat(modeTheme)], className].join(' '),
    style: optionStyle,
    disabled: disabled
  }, buttonProps), children);
};

function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}

function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
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

var css_248z$3 = "/* Styles for common color */\n/* Styles for z-index */\n.Dialog-module_sekai-color-light__fIuyC {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.Dialog-module_sekai-color-dark__KrQvz {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.Dialog-module_sekai-overlay__l5u8e, .Dialog-module_sekai-overlay-dark__PTpAS, .Dialog-module_sekai-overlay-light__PYE-2 {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.Dialog-module_sekai-overlay-light__PYE-2 {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.Dialog-module_sekai-overlay-dark__PTpAS {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.Dialog-module_sekai-flex-center__LyhR2 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.Dialog-module_sekai-absolute-center__9eZ-V {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.Dialog-module_sekai-invisible-scroll__yMbwG {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.Dialog-module_sekai-invisible-scroll__yMbwG::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.Dialog-module_sekai-mb-8__-vFZy {\n  margin-bottom: 8px;\n}\n\n.Dialog-module_sekai-mb-16__2odxf {\n  margin-bottom: 16px;\n}\n\n.Dialog-module_sekai-mb-24__sVlha {\n  margin-bottom: 24px;\n}\n\n.Dialog-module_sekai-dialog-visible__MhxKQ {\n  display: block;\n}\n\n.Dialog-module_sekai-dialog-hidden__aznHA {\n  display: none;\n}\n\n.Dialog-module_sekai-container__ksO7t, .Dialog-module_sekai-container-wide__NphhS, .Dialog-module_sekai-container-medium__XUhgC, .Dialog-module_sekai-container-narrow__RgWNL {\n  box-sizing: border-box;\n  max-width: 90vw;\n  border: 2px solid var(--sekai-color);\n  border-radius: 4px;\n  z-index: 1010;\n}\n\n.Dialog-module_sekai-container-narrow__RgWNL {\n  width: 250px;\n}\n\n.Dialog-module_sekai-container-medium__XUhgC {\n  width: 390px;\n}\n\n.Dialog-module_sekai-container-wide__NphhS {\n  width: 600px;\n}\n\n.Dialog-module_sekai-content-wrap__mWRrt {\n  padding: 16px;\n}\n\n/** Dialog Title Header */\n.Dialog-module_sekai-title-header__ATn1B, .Dialog-module_sekai-title-header-wide__5Skds, .Dialog-module_sekai-title-header-medium__61bst, .Dialog-module_sekai-title-header-narrow__uQfFd {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.Dialog-module_sekai-title-header__ATn1B h2, .Dialog-module_sekai-title-header-wide__5Skds h2, .Dialog-module_sekai-title-header-medium__61bst h2, .Dialog-module_sekai-title-header-narrow__uQfFd h2 {\n  margin: 0;\n}\n.Dialog-module_sekai-title-header__ATn1B .Dialog-module_sekai-close-icon__CVbZJ, .Dialog-module_sekai-title-header-wide__5Skds .Dialog-module_sekai-close-icon__CVbZJ, .Dialog-module_sekai-title-header-medium__61bst .Dialog-module_sekai-close-icon__CVbZJ, .Dialog-module_sekai-title-header-narrow__uQfFd .Dialog-module_sekai-close-icon__CVbZJ {\n  border: none;\n  padding: 0;\n  background-color: inherit;\n  aspect-ratio: 1/1;\n}\n\n.Dialog-module_sekai-title-header-narrow__uQfFd {\n  min-height: 32px;\n}\n.Dialog-module_sekai-title-header-narrow__uQfFd h2 {\n  font-size: 1.2em;\n}\n.Dialog-module_sekai-title-header-narrow__uQfFd .Dialog-module_sekai-close-icon__CVbZJ {\n  height: 16px;\n}\n\n.Dialog-module_sekai-title-header-medium__61bst {\n  height: 40px;\n}\n.Dialog-module_sekai-title-header-medium__61bst h2 {\n  font-size: 1.4em;\n}\n.Dialog-module_sekai-title-header-medium__61bst .Dialog-module_sekai-close-icon__CVbZJ {\n  height: 20px;\n}\n\n.Dialog-module_sekai-title-header-wide__5Skds {\n  height: 48px;\n}\n.Dialog-module_sekai-title-header-wide__5Skds .Dialog-module_sekai-close-icon__CVbZJ {\n  height: 24px;\n}\n\n/** Dialog Buttons Area */\n.Dialog-module_sekai-buttons-area__9vRBF {\n  display: flex;\n  width: calc(100% + 4px);\n  margin: 0 -2px -2px;\n  /** Button type : normal */\n  /** Button type : strong */\n}\n.Dialog-module_sekai-buttons-area__9vRBF button {\n  background-color: inherit;\n  padding: 0;\n  min-height: 40px;\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-normal-button-color__mq3H7.Dialog-module_sekai-light__TlNmy, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-light__TlNmy.Dialog-module_sekai-dialog-normal-button-2-1__FBzF9, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-light__TlNmy.Dialog-module_sekai-dialog-normal-button-2-0__iZkb-, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-light__TlNmy.Dialog-module_sekai-dialog-normal-button-1-0__Ui4jg {\n  border: 2px solid var(--sekai-color);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-normal-button-color__mq3H7.Dialog-module_sekai-light__TlNmy:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-light__TlNmy.Dialog-module_sekai-dialog-normal-button-2-1__FBzF9:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-light__TlNmy.Dialog-module_sekai-dialog-normal-button-2-0__iZkb-:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-light__TlNmy.Dialog-module_sekai-dialog-normal-button-1-0__Ui4jg:hover {\n  background-color: var(--sekai-color-hover);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-normal-button-color__mq3H7.Dialog-module_sekai-dark__M58Kq, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dark__M58Kq.Dialog-module_sekai-dialog-normal-button-2-1__FBzF9, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dark__M58Kq.Dialog-module_sekai-dialog-normal-button-2-0__iZkb-, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dark__M58Kq.Dialog-module_sekai-dialog-normal-button-1-0__Ui4jg {\n  border: 2px solid var(--sekai-color);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-normal-button-color__mq3H7.Dialog-module_sekai-dark__M58Kq:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dark__M58Kq.Dialog-module_sekai-dialog-normal-button-2-1__FBzF9:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dark__M58Kq.Dialog-module_sekai-dialog-normal-button-2-0__iZkb-:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dark__M58Kq.Dialog-module_sekai-dialog-normal-button-1-0__Ui4jg:hover {\n  background-color: var(--sekai-color-hover);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-normal-button-color__mq3H7:disabled.Dialog-module_sekai-light__TlNmy, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-2-1__FBzF9:disabled.Dialog-module_sekai-light__TlNmy, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-2-0__iZkb-:disabled.Dialog-module_sekai-light__TlNmy, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-1-0__Ui4jg:disabled.Dialog-module_sekai-light__TlNmy {\n  color: rgb(155.1, 155.1, 155.1);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-normal-button-color__mq3H7:disabled.Dialog-module_sekai-dark__M58Kq, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-2-1__FBzF9:disabled.Dialog-module_sekai-dark__M58Kq, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-2-0__iZkb-:disabled.Dialog-module_sekai-dark__M58Kq, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-1-0__Ui4jg:disabled.Dialog-module_sekai-dark__M58Kq {\n  color: rgb(100.8, 100.8, 100.8);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-normal-button-color__mq3H7:disabled:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-2-1__FBzF9:disabled:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-2-0__iZkb-:disabled:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-1-0__Ui4jg:disabled:hover {\n  background-color: transparent;\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-1-0__Ui4jg {\n  width: 100%;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-2-0__iZkb- {\n  width: 50%;\n  border-bottom-left-radius: 4px;\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-2-0__iZkb-.Dialog-module_sekai-light__TlNmy {\n  border-right: 1px solid var(--sekai-color);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-2-0__iZkb-.Dialog-module_sekai-dark__M58Kq {\n  border-right: 1px solid var(--sekai-color);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-2-1__FBzF9 {\n  width: 50%;\n  border-bottom-right-radius: 4px;\n  border-left: 1px solid var(--sekai-color);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-2-1__FBzF9.Dialog-module_sekai-light__TlNmy {\n  border-left: 1px solid var(--sekai-color);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-normal-button-2-1__FBzF9.Dialog-module_sekai-dark__M58Kq {\n  border-left: 1px solid var(--sekai-color);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-strong-button-color__gzYAg.Dialog-module_sekai-light__TlNmy, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-light__TlNmy.Dialog-module_sekai-dialog-strong-button-2-1__WxTyF, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-light__TlNmy.Dialog-module_sekai-dialog-strong-button-2-0__z7H34, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-light__TlNmy.Dialog-module_sekai-dialog-strong-button-1-0__gM-wb {\n  border: 2px solid var(--sekai-color);\n  background-color: var(--sekai-color);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-strong-button-color__gzYAg.Dialog-module_sekai-light__TlNmy:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-light__TlNmy.Dialog-module_sekai-dialog-strong-button-2-1__WxTyF:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-light__TlNmy.Dialog-module_sekai-dialog-strong-button-2-0__z7H34:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-light__TlNmy.Dialog-module_sekai-dialog-strong-button-1-0__gM-wb:hover {\n  background-color: var(--sekai-color-strong-hover);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-strong-button-color__gzYAg.Dialog-module_sekai-dark__M58Kq, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dark__M58Kq.Dialog-module_sekai-dialog-strong-button-2-1__WxTyF, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dark__M58Kq.Dialog-module_sekai-dialog-strong-button-2-0__z7H34, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dark__M58Kq.Dialog-module_sekai-dialog-strong-button-1-0__gM-wb {\n  border: 2px solid var(--sekai-color);\n  background-color: var(--sekai-color);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-strong-button-color__gzYAg.Dialog-module_sekai-dark__M58Kq:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dark__M58Kq.Dialog-module_sekai-dialog-strong-button-2-1__WxTyF:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dark__M58Kq.Dialog-module_sekai-dialog-strong-button-2-0__z7H34:hover, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dark__M58Kq.Dialog-module_sekai-dialog-strong-button-1-0__gM-wb:hover {\n  background-color: var(--sekai-color-strong-hover);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-strong-button-color__gzYAg:disabled.Dialog-module_sekai-light__TlNmy, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-strong-button-2-1__WxTyF:disabled.Dialog-module_sekai-light__TlNmy, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-strong-button-2-0__z7H34:disabled.Dialog-module_sekai-light__TlNmy, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-strong-button-1-0__gM-wb:disabled.Dialog-module_sekai-light__TlNmy {\n  color: rgb(155.1, 155.1, 155.1);\n  background-color: var(--sekai-color-disabled);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-strong-button-color__gzYAg:disabled.Dialog-module_sekai-dark__M58Kq, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-strong-button-2-1__WxTyF:disabled.Dialog-module_sekai-dark__M58Kq, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-strong-button-2-0__z7H34:disabled.Dialog-module_sekai-dark__M58Kq, .Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-strong-button-1-0__gM-wb:disabled.Dialog-module_sekai-dark__M58Kq {\n  color: rgb(100.8, 100.8, 100.8);\n  background-color: var(--sekai-color-disabled);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-strong-button-1-0__gM-wb {\n  width: 100%;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-strong-button-2-0__z7H34 {\n  width: 50%;\n  border-bottom-left-radius: 4px;\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-strong-button-2-0__z7H34.Dialog-module_sekai-light__TlNmy {\n  border-right: 1px solid var(--sekai-color);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-strong-button-2-0__z7H34.Dialog-module_sekai-dark__M58Kq {\n  border-right: 1px solid var(--sekai-color);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-strong-button-2-1__WxTyF {\n  width: 50%;\n  border-bottom-right-radius: 4px;\n  border-left: 1px solid var(--sekai-color);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-strong-button-2-1__WxTyF.Dialog-module_sekai-light__TlNmy {\n  border-left: 1px solid var(--sekai-color);\n}\n.Dialog-module_sekai-buttons-area__9vRBF .Dialog-module_sekai-dialog-strong-button-2-1__WxTyF.Dialog-module_sekai-dark__M58Kq {\n  border-left: 1px solid var(--sekai-color);\n}";
var styles$3 = {"sekai-color-light":"Dialog-module_sekai-color-light__fIuyC","sekai-color-dark":"Dialog-module_sekai-color-dark__KrQvz","sekai-overlay":"Dialog-module_sekai-overlay__l5u8e","sekai-overlay-dark":"Dialog-module_sekai-overlay-dark__PTpAS","sekai-overlay-light":"Dialog-module_sekai-overlay-light__PYE-2","sekai-flex-center":"Dialog-module_sekai-flex-center__LyhR2","sekai-absolute-center":"Dialog-module_sekai-absolute-center__9eZ-V","sekai-invisible-scroll":"Dialog-module_sekai-invisible-scroll__yMbwG","sekai-mb-8":"Dialog-module_sekai-mb-8__-vFZy","sekai-mb-16":"Dialog-module_sekai-mb-16__2odxf","sekai-mb-24":"Dialog-module_sekai-mb-24__sVlha","sekai-dialog-visible":"Dialog-module_sekai-dialog-visible__MhxKQ","sekai-dialog-hidden":"Dialog-module_sekai-dialog-hidden__aznHA","sekai-container":"Dialog-module_sekai-container__ksO7t","sekai-container-wide":"Dialog-module_sekai-container-wide__NphhS","sekai-container-medium":"Dialog-module_sekai-container-medium__XUhgC","sekai-container-narrow":"Dialog-module_sekai-container-narrow__RgWNL","sekai-content-wrap":"Dialog-module_sekai-content-wrap__mWRrt","sekai-title-header":"Dialog-module_sekai-title-header__ATn1B","sekai-title-header-wide":"Dialog-module_sekai-title-header-wide__5Skds","sekai-title-header-medium":"Dialog-module_sekai-title-header-medium__61bst","sekai-title-header-narrow":"Dialog-module_sekai-title-header-narrow__uQfFd","sekai-close-icon":"Dialog-module_sekai-close-icon__CVbZJ","sekai-buttons-area":"Dialog-module_sekai-buttons-area__9vRBF","sekai-normal-button-color":"Dialog-module_sekai-normal-button-color__mq3H7","sekai-light":"Dialog-module_sekai-light__TlNmy","sekai-dialog-normal-button-2-1":"Dialog-module_sekai-dialog-normal-button-2-1__FBzF9","sekai-dialog-normal-button-2-0":"Dialog-module_sekai-dialog-normal-button-2-0__iZkb-","sekai-dialog-normal-button-1-0":"Dialog-module_sekai-dialog-normal-button-1-0__Ui4jg","sekai-dark":"Dialog-module_sekai-dark__M58Kq","sekai-strong-button-color":"Dialog-module_sekai-strong-button-color__gzYAg","sekai-dialog-strong-button-2-1":"Dialog-module_sekai-dialog-strong-button-2-1__WxTyF","sekai-dialog-strong-button-2-0":"Dialog-module_sekai-dialog-strong-button-2-0__z7H34","sekai-dialog-strong-button-1-0":"Dialog-module_sekai-dialog-strong-button-1-0__gM-wb"};
styleInject(css_248z$3);

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
    dialogButtons = _ref.dialogButtons;
  var displayDialog = open ? 'sekai-dialog-visible' : 'sekai-dialog-hidden';
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
  return /*#__PURE__*/createPortal(/*#__PURE__*/React.createElement("div", {
    className: styles$3[displayDialog]
  }, /*#__PURE__*/React.createElement("div", {
    className: globalStyles["sekai-overlay-".concat(modeTheme)]
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    className: [globalStyles["sekai-color-".concat(modeTheme)], globalStyles['sekai-absolute-center'], styles$3["sekai-container-".concat(size)]].join(' '),
    style: optionStyle,
    "aria-label": title || 'Dialog'
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$3['sekai-content-wrap']
  }, /*#__PURE__*/React.createElement(DialogTitleHeader, headerProps), children), dialogButtons || /*#__PURE__*/React.createElement(DialogButtons, buttonsProps)))), portalContainer);
};
var DialogTitleHeader = function DialogTitleHeader(_ref2) {
  var _ref2$className = _ref2.className,
    className = _ref2$className === void 0 ? '' : _ref2$className,
    sekai = _ref2.sekai,
    themeMode = _ref2.themeMode,
    size = _ref2.size,
    onClose = _ref2.onClose,
    title = _ref2.title,
    showCloseIcon = _ref2.showCloseIcon;
  if (!title && !showCloseIcon) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: [styles$3["sekai-title-header-".concat(size)], className].join(' ')
  }, /*#__PURE__*/React.createElement("h2", null, title), showCloseIcon ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: styles$3['sekai-close-icon'],
    onClick: onClose
  }, /*#__PURE__*/React.createElement(ClearSvg, {
    sekai: sekai,
    themeMode: themeMode
  })) : null);
};
var DialogButtons = function DialogButtons(_ref3) {
  var _ref3$className = _ref3.className,
    className = _ref3$className === void 0 ? '' : _ref3$className,
    sekai = _ref3.sekai,
    themeMode = _ref3.themeMode,
    buttons = _ref3.buttons;
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
  return /*#__PURE__*/React.createElement("div", {
    className: [styles$3['sekai-buttons-area'], className].join(' ')
  }, _toConsumableArray(buttons.slice(0, 2)).map(function (el, index) {
    return /*#__PURE__*/React.createElement("button", {
      key: el.text,
      type: "button",
      onClick: el.onClick,
      disabled: Boolean(el.disabled),
      "aria-label": el.ariaLabel || el.text,
      className: [globalStyles["sekai-color-".concat(modeTheme)], styles$3["sekai-dialog-".concat(el.type || 'normal', "-button-").concat(buttonLength, "-").concat(index)], styles$3["sekai-".concat(modeTheme)], el.buttonStyle || ''].join(' '),
      style: optionStyle
    }, el.text);
  }));
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
    x1: "20",
    y1: "20",
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

var css_248z$2 = "/* Styles for common color */\n/* Styles for z-index */\n.XxMikuDialog-module_sekai-color-light__AXfs1 {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.XxMikuDialog-module_sekai-color-dark__ULGir {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.XxMikuDialog-module_sekai-overlay__zJE3U, .XxMikuDialog-module_sekai-overlay-dark__Zmpw9, .XxMikuDialog-module_sekai-overlay-light__MFH-f {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.XxMikuDialog-module_sekai-overlay-light__MFH-f {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.XxMikuDialog-module_sekai-overlay-dark__Zmpw9 {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.XxMikuDialog-module_sekai-flex-center__asoy6 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.XxMikuDialog-module_sekai-absolute-center__jJ2Vs {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.XxMikuDialog-module_sekai-invisible-scroll__dI4JU {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.XxMikuDialog-module_sekai-invisible-scroll__dI4JU::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.XxMikuDialog-module_sekai-mb-8__3yT7u {\n  margin-bottom: 8px;\n}\n\n.XxMikuDialog-module_sekai-mb-16__YvY6f {\n  margin-bottom: 16px;\n}\n\n.XxMikuDialog-module_sekai-mb-24__GVs-K {\n  margin-bottom: 24px;\n}\n\n.XxMikuDialog-module_sekai-dialog-visible__2oe7d {\n  display: block;\n}\n\n.XxMikuDialog-module_sekai-dialog-hidden__EM-mO {\n  display: none;\n}\n\n.XxMikuDialog-module_sekai-container__6wLSy, .XxMikuDialog-module_sekai-container-wide__YNFbw, .XxMikuDialog-module_sekai-container-medium__qGYm-, .XxMikuDialog-module_sekai-container-narrow__J3ojJ {\n  position: relative;\n  box-sizing: border-box;\n  max-width: 90vw;\n  border: 3.9px solid #9ccdd3;\n  border-radius: 4px;\n  background-color: #797979;\n  z-index: 1010;\n}\n.XxMikuDialog-module_sekai-container__6wLSy.XxMikuDialog-module_sekai-light__fPaiT, .XxMikuDialog-module_sekai-light__fPaiT.XxMikuDialog-module_sekai-container-wide__YNFbw, .XxMikuDialog-module_sekai-light__fPaiT.XxMikuDialog-module_sekai-container-medium__qGYm-, .XxMikuDialog-module_sekai-light__fPaiT.XxMikuDialog-module_sekai-container-narrow__J3ojJ {\n  color: #212121;\n}\n.XxMikuDialog-module_sekai-container__6wLSy.XxMikuDialog-module_sekai-dark__-qzNa, .XxMikuDialog-module_sekai-dark__-qzNa.XxMikuDialog-module_sekai-container-wide__YNFbw, .XxMikuDialog-module_sekai-dark__-qzNa.XxMikuDialog-module_sekai-container-medium__qGYm-, .XxMikuDialog-module_sekai-dark__-qzNa.XxMikuDialog-module_sekai-container-narrow__J3ojJ {\n  color: #e0e0e0;\n}\n\n.XxMikuDialog-module_sekai-container-narrow__J3ojJ {\n  width: 250px;\n}\n\n.XxMikuDialog-module_sekai-container-medium__qGYm- {\n  width: 390px;\n}\n\n.XxMikuDialog-module_sekai-container-wide__YNFbw {\n  width: 600px;\n}\n\n.XxMikuDialog-module_sekai-content-wrap__kR8d6 {\n  padding: 16px;\n}\n\n/** Button styles */\n.XxMikuDialog-module_sekai-xxmiku-button__1trw- {\n  margin-top: 16px;\n}\n.XxMikuDialog-module_sekai-xxmiku-button__1trw- button {\n  border-radius: 0 !important;\n  border-color: #9ccdd3 !important;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-normal-button__ArRPe:hover {\n  background-color: rgb(128, 137.8, 139) !important;\n}\n.XxMikuDialog-module_sekai-xxmiku-normal-button__ArRPe:disabled.XxMikuDialog-module_sekai-light__fPaiT {\n  color: rgb(103.4, 103.4, 103.4) !important;\n}\n.XxMikuDialog-module_sekai-xxmiku-normal-button__ArRPe:disabled.XxMikuDialog-module_sekai-dark__-qzNa {\n  color: rgb(141.6, 141.6, 141.6) !important;\n}\n.XxMikuDialog-module_sekai-xxmiku-normal-button__ArRPe:disabled:hover {\n  background-color: transparent !important;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-strong-button__uHTqB {\n  font-weight: bold;\n  background-color: #9ccdd3 !important;\n}\n.XxMikuDialog-module_sekai-xxmiku-strong-button__uHTqB:hover {\n  background-color: rgb(147.25, 184, 188.5) !important;\n}\n.XxMikuDialog-module_sekai-xxmiku-strong-button__uHTqB:disabled.XxMikuDialog-module_sekai-light__fPaiT {\n  color: rgb(119.58, 119.58, 119.58) !important;\n  background-color: rgb(145.5, 179.8, 184) !important;\n}\n.XxMikuDialog-module_sekai-xxmiku-strong-button__uHTqB:disabled.XxMikuDialog-module_sekai-dark__-qzNa {\n  color: rgb(198.25, 198.25, 198.25) !important;\n  background-color: rgb(145.5, 179.8, 184) !important;\n}\n\n/** XxMikuSvg type1 styles */\n.XxMikuDialog-module_sekai-xxmiku-svg-1-narrow__loqQ- {\n  position: absolute;\n  right: 8%;\n  top: -24px;\n  width: 40px;\n  height: 40px;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-svg-1-medium__pzorJ {\n  position: absolute;\n  right: 5%;\n  top: -34px;\n  width: 50px;\n  height: 50px;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-svg-1-wide__2N-6l {\n  position: absolute;\n  right: 3%;\n  top: -44px;\n  width: 60px;\n  height: 60px;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-svg-2-narrow__3HHf- {\n  position: absolute;\n  right: -12px;\n  top: 10%;\n  width: 25px;\n  height: 25px;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-svg-2-medium__9o0Zw {\n  position: absolute;\n  right: -19px;\n  top: 10%;\n  width: 35px;\n  height: 35px;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-svg-2-wide__qeQUa {\n  position: absolute;\n  right: -20px;\n  top: 10%;\n  width: 36px;\n  height: 36px;\n}\n\n/** XxMikuSvg type2 styles */\n.XxMikuDialog-module_sekai-xxmiku-svg-3-narrow__Q-ch7 {\n  position: absolute;\n  left: -12px;\n  bottom: 20px;\n  width: 25px;\n  height: 25px;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-svg-3-medium__QnTfq {\n  position: absolute;\n  left: -17px;\n  bottom: 25px;\n  width: 30px;\n  height: 30px;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-svg-3-wide__mMg4X {\n  position: absolute;\n  left: -18px;\n  bottom: 27px;\n  width: 33px;\n  height: 33px;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-svg-4-narrow__8-UN- {\n  position: absolute;\n  left: -19px;\n  bottom: -19px;\n  width: 35px;\n  height: 35px;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-svg-4-medium__hAeL3 {\n  position: absolute;\n  left: -24px;\n  bottom: -24px;\n  width: 40px;\n  height: 40px;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-svg-4-wide__Kpdo- {\n  position: absolute;\n  left: -24px;\n  bottom: -30px;\n  width: 45px;\n  height: 45px;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-svg-5-narrow__BQjgx {\n  position: absolute;\n  left: 25%;\n  bottom: -16px;\n  width: 30px;\n  height: 30px;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-svg-5-medium__nkuQm {\n  position: absolute;\n  left: 25%;\n  bottom: -19px;\n  width: 35px;\n  height: 35px;\n}\n\n.XxMikuDialog-module_sekai-xxmiku-svg-5-wide__NaAs4 {\n  position: absolute;\n  left: 25%;\n  bottom: -25px;\n  width: 40px;\n  height: 40px;\n}";
var styles$2 = {"sekai-color-light":"XxMikuDialog-module_sekai-color-light__AXfs1","sekai-color-dark":"XxMikuDialog-module_sekai-color-dark__ULGir","sekai-overlay":"XxMikuDialog-module_sekai-overlay__zJE3U","sekai-overlay-dark":"XxMikuDialog-module_sekai-overlay-dark__Zmpw9","sekai-overlay-light":"XxMikuDialog-module_sekai-overlay-light__MFH-f","sekai-flex-center":"XxMikuDialog-module_sekai-flex-center__asoy6","sekai-absolute-center":"XxMikuDialog-module_sekai-absolute-center__jJ2Vs","sekai-invisible-scroll":"XxMikuDialog-module_sekai-invisible-scroll__dI4JU","sekai-mb-8":"XxMikuDialog-module_sekai-mb-8__3yT7u","sekai-mb-16":"XxMikuDialog-module_sekai-mb-16__YvY6f","sekai-mb-24":"XxMikuDialog-module_sekai-mb-24__GVs-K","sekai-dialog-visible":"XxMikuDialog-module_sekai-dialog-visible__2oe7d","sekai-dialog-hidden":"XxMikuDialog-module_sekai-dialog-hidden__EM-mO","sekai-container":"XxMikuDialog-module_sekai-container__6wLSy","sekai-container-wide":"XxMikuDialog-module_sekai-container-wide__YNFbw","sekai-container-medium":"XxMikuDialog-module_sekai-container-medium__qGYm-","sekai-container-narrow":"XxMikuDialog-module_sekai-container-narrow__J3ojJ","sekai-light":"XxMikuDialog-module_sekai-light__fPaiT","sekai-dark":"XxMikuDialog-module_sekai-dark__-qzNa","sekai-content-wrap":"XxMikuDialog-module_sekai-content-wrap__kR8d6","sekai-xxmiku-button":"XxMikuDialog-module_sekai-xxmiku-button__1trw-","sekai-xxmiku-normal-button":"XxMikuDialog-module_sekai-xxmiku-normal-button__ArRPe","sekai-xxmiku-strong-button":"XxMikuDialog-module_sekai-xxmiku-strong-button__uHTqB","sekai-xxmiku-svg-1-narrow":"XxMikuDialog-module_sekai-xxmiku-svg-1-narrow__loqQ-","sekai-xxmiku-svg-1-medium":"XxMikuDialog-module_sekai-xxmiku-svg-1-medium__pzorJ","sekai-xxmiku-svg-1-wide":"XxMikuDialog-module_sekai-xxmiku-svg-1-wide__2N-6l","sekai-xxmiku-svg-2-narrow":"XxMikuDialog-module_sekai-xxmiku-svg-2-narrow__3HHf-","sekai-xxmiku-svg-2-medium":"XxMikuDialog-module_sekai-xxmiku-svg-2-medium__9o0Zw","sekai-xxmiku-svg-2-wide":"XxMikuDialog-module_sekai-xxmiku-svg-2-wide__qeQUa","sekai-xxmiku-svg-3-narrow":"XxMikuDialog-module_sekai-xxmiku-svg-3-narrow__Q-ch7","sekai-xxmiku-svg-3-medium":"XxMikuDialog-module_sekai-xxmiku-svg-3-medium__QnTfq","sekai-xxmiku-svg-3-wide":"XxMikuDialog-module_sekai-xxmiku-svg-3-wide__mMg4X","sekai-xxmiku-svg-4-narrow":"XxMikuDialog-module_sekai-xxmiku-svg-4-narrow__8-UN-","sekai-xxmiku-svg-4-medium":"XxMikuDialog-module_sekai-xxmiku-svg-4-medium__hAeL3","sekai-xxmiku-svg-4-wide":"XxMikuDialog-module_sekai-xxmiku-svg-4-wide__Kpdo-","sekai-xxmiku-svg-5-narrow":"XxMikuDialog-module_sekai-xxmiku-svg-5-narrow__BQjgx","sekai-xxmiku-svg-5-medium":"XxMikuDialog-module_sekai-xxmiku-svg-5-medium__nkuQm","sekai-xxmiku-svg-5-wide":"XxMikuDialog-module_sekai-xxmiku-svg-5-wide__NaAs4"};
styleInject(css_248z$2);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var XxMikuDialog = function XxMikuDialog(_ref) {
  var open = _ref.open,
    themeMode = _ref.themeMode,
    children = _ref.children,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'medium' : _ref$size,
    containerComponent = _ref.containerComponent,
    onClose = _ref.onClose,
    title = _ref.title,
    buttons = _ref.buttons;
  var displayDialog = open ? 'sekai-dialog-visible' : 'sekai-dialog-hidden';
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
      return _objectSpread(_objectSpread({}, button), {}, {
        buttonStyle: [styles$2["sekai-xxmiku-".concat(type, "-button")], styles$2["sekai-".concat(modeTheme)]].join(' ')
      });
    });
  }, [buttons, modeTheme]);
  var buttonsProps = {
    themeMode: themeMode,
    buttons: xxButtonProps
  };
  return /*#__PURE__*/createPortal(/*#__PURE__*/React.createElement("div", {
    className: styles$2[displayDialog]
  }, /*#__PURE__*/React.createElement("div", {
    className: globalStyles["sekai-overlay-".concat(modeTheme)]
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    className: [globalStyles['sekai-absolute-center'], styles$2["sekai-container-".concat(size)], styles$2["sekai-".concat(modeTheme)]].join(' '),
    "aria-label": title || 'Dialog'
  }, /*#__PURE__*/React.createElement(XxMikuSvg, {
    className: styles$2["sekai-xxmiku-svg-1-".concat(size)]
  }), /*#__PURE__*/React.createElement(XxMikuSvg, {
    className: styles$2["sekai-xxmiku-svg-2-".concat(size)]
  }), /*#__PURE__*/React.createElement(XxMikuSvg, {
    className: styles$2["sekai-xxmiku-svg-3-".concat(size)],
    type: 'type2'
  }), /*#__PURE__*/React.createElement(XxMikuSvg, {
    className: styles$2["sekai-xxmiku-svg-4-".concat(size)],
    type: 'type2'
  }), /*#__PURE__*/React.createElement(XxMikuSvg, {
    className: styles$2["sekai-xxmiku-svg-5-".concat(size)],
    type: 'type2'
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$2['sekai-content-wrap']
  }, /*#__PURE__*/React.createElement(DialogTitleHeader, headerProps), children, /*#__PURE__*/React.createElement(DialogButtons, _extends({
    className: styles$2['sekai-xxmiku-button']
  }, buttonsProps)))))), portalContainer);
};
// type ButtonGroup = Pick<XxMikuDialogProps, 'themeMode' | 'buttons'>
// const ButtonGroup = ({ themeMode, buttons }: ButtonGroup) => {}

var css_248z$1 = "/* Styles for common color */\n/* Styles for z-index */\n.TextLink-module_sekai-color-light__-On-Y {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.TextLink-module_sekai-color-dark__mO6W5 {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.TextLink-module_sekai-overlay__-Te9w, .TextLink-module_sekai-overlay-dark__aeUHe, .TextLink-module_sekai-overlay-light__C5b0b {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.TextLink-module_sekai-overlay-light__C5b0b {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.TextLink-module_sekai-overlay-dark__aeUHe {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.TextLink-module_sekai-flex-center__1DDJH {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.TextLink-module_sekai-absolute-center__xMuSU {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.TextLink-module_sekai-invisible-scroll__xuDbm {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.TextLink-module_sekai-invisible-scroll__xuDbm::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.TextLink-module_sekai-mb-8__1cXZT {\n  margin-bottom: 8px;\n}\n\n.TextLink-module_sekai-mb-16__jOiZC {\n  margin-bottom: 16px;\n}\n\n.TextLink-module_sekai-mb-24__hbdGp {\n  margin-bottom: 24px;\n}\n\n.TextLink-module_sekai-text-link__U5trb, .TextLink-module_sekai-text-link-dark__3zbvG, .TextLink-module_sekai-text-link-light__sBYGX {\n  width: -moz-fit-content;\n  width: fit-content;\n  text-decoration: underline;\n  text-decoration-color: var(--sekai-color);\n  padding: 2px 8px;\n}\n.TextLink-module_sekai-text-link__U5trb.TextLink-module_sekai-disabled__lX1Rv, .TextLink-module_sekai-disabled__lX1Rv.TextLink-module_sekai-text-link-dark__3zbvG, .TextLink-module_sekai-disabled__lX1Rv.TextLink-module_sekai-text-link-light__sBYGX {\n  pointer-events: none;\n  opacity: 0.5;\n}\n.TextLink-module_sekai-text-link__U5trb.TextLink-module_sekai-disabled__lX1Rv:focus, .TextLink-module_sekai-disabled__lX1Rv.TextLink-module_sekai-text-link-dark__3zbvG:focus, .TextLink-module_sekai-disabled__lX1Rv.TextLink-module_sekai-text-link-light__sBYGX:focus {\n  background-color: transparent;\n  outline: none;\n}\n.TextLink-module_sekai-text-link__U5trb:hover, .TextLink-module_sekai-text-link-dark__3zbvG:hover, .TextLink-module_sekai-text-link-light__sBYGX:hover {\n  text-decoration: none;\n  background-color: var(--sekai-color-hover);\n}\n.TextLink-module_sekai-text-link__U5trb:focus, .TextLink-module_sekai-text-link-dark__3zbvG:focus, .TextLink-module_sekai-text-link-light__sBYGX:focus {\n  text-decoration: none;\n  outline: 1px solid var(--sekai-color);\n  background-color: var(--sekai-color-hover);\n}\n\n.TextLink-module_sekai-text-link-light__sBYGX {\n  color: #212121;\n}\n\n.TextLink-module_sekai-text-link-dark__3zbvG {\n  color: #e0e0e0;\n}";
var styles$1 = {"sekai-color-light":"TextLink-module_sekai-color-light__-On-Y","sekai-color-dark":"TextLink-module_sekai-color-dark__mO6W5","sekai-overlay":"TextLink-module_sekai-overlay__-Te9w","sekai-overlay-dark":"TextLink-module_sekai-overlay-dark__aeUHe","sekai-overlay-light":"TextLink-module_sekai-overlay-light__C5b0b","sekai-flex-center":"TextLink-module_sekai-flex-center__1DDJH","sekai-absolute-center":"TextLink-module_sekai-absolute-center__xMuSU","sekai-invisible-scroll":"TextLink-module_sekai-invisible-scroll__xuDbm","sekai-mb-8":"TextLink-module_sekai-mb-8__1cXZT","sekai-mb-16":"TextLink-module_sekai-mb-16__jOiZC","sekai-mb-24":"TextLink-module_sekai-mb-24__hbdGp","sekai-text-link":"TextLink-module_sekai-text-link__U5trb","sekai-text-link-dark":"TextLink-module_sekai-text-link-dark__3zbvG","sekai-text-link-light":"TextLink-module_sekai-text-link-light__sBYGX","sekai-disabled":"TextLink-module_sekai-disabled__lX1Rv"};
styleInject(css_248z$1);

var TextLink = function TextLink(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    sekai = _ref.sekai,
    themeMode = _ref.themeMode,
    text = _ref.text,
    href = _ref.href,
    _ref$isExternal = _ref.isExternal,
    isExternal = _ref$isExternal === void 0 ? true : _ref$isExternal,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    ariaLabel = _ref.ariaLabel;
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
  return /*#__PURE__*/React.createElement("a", {
    className: [styles$1["sekai-text-link-".concat(modeTheme)], disabled && styles$1['sekai-disabled'], className].join(' '),
    style: optionStyle,
    href: href,
    "aria-label": ariaLabel,
    "aria-disabled": disabled,
    target: isExternal ? '_blank' : '_self',
    rel: "noopener noreferrer"
  }, text);
};

var css_248z = "/* Styles for common color */\n/* Styles for z-index */\n.OutlineText-module_sekai-color-light__SLEeL {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.OutlineText-module_sekai-color-dark__THKPa {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n.OutlineText-module_sekai-overlay__ArXyQ, .OutlineText-module_sekai-overlay-dark__fLHhn, .OutlineText-module_sekai-overlay-light__8wiYq {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.OutlineText-module_sekai-overlay-light__8wiYq {\n  background-color: rgba(0, 0, 0, 0.3882352941);\n}\n\n.OutlineText-module_sekai-overlay-dark__fLHhn {\n  background-color: rgba(255, 255, 255, 0.3019607843);\n}\n\n/* Styles for positioning */\n.OutlineText-module_sekai-flex-center__q2tvV {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.OutlineText-module_sekai-absolute-center__r-UAB {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.OutlineText-module_sekai-invisible-scroll__bB7dW {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.OutlineText-module_sekai-invisible-scroll__bB7dW::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.OutlineText-module_sekai-mb-8__zEzdE {\n  margin-bottom: 8px;\n}\n\n.OutlineText-module_sekai-mb-16__050Re {\n  margin-bottom: 16px;\n}\n\n.OutlineText-module_sekai-mb-24__dy4-6 {\n  margin-bottom: 24px;\n}\n\n.OutlineText-module_sekai-outline-text-light__o0dTZ {\n  color: #ffffff;\n  font-weight: bold;\n  position: relative;\n}\n.OutlineText-module_sekai-outline-text-light__o0dTZ::before {\n  content: attr(data-text);\n  position: absolute;\n  top: 0;\n  left: 0;\n  text-shadow: 0.75px 0.75px 0 var(--sekai-color), -0.75px 0.75px 0 var(--sekai-color), 0.75px -0.75px 0 var(--sekai-color), -0.75px -0.75px 0 var(--sekai-color), 0.75px 0 0 var(--sekai-color), -0.75px 0 0 var(--sekai-color), 0 0.75px 0 var(--sekai-color), 0 -0.75px 0 var(--sekai-color);\n}\n\n.OutlineText-module_sekai-outline-text-dark__Fk6Uk {\n  color: #121212;\n  font-weight: bold;\n  position: relative;\n}\n.OutlineText-module_sekai-outline-text-dark__Fk6Uk::before {\n  content: attr(data-text);\n  position: absolute;\n  top: 0;\n  left: 0;\n  text-shadow: 0.75px 0.75px 0 var(--sekai-color), -0.75px 0.75px 0 var(--sekai-color), 0.75px -0.75px 0 var(--sekai-color), -0.75px -0.75px 0 var(--sekai-color), 0.75px 0 0 var(--sekai-color), -0.75px 0 0 var(--sekai-color), 0 0.75px 0 var(--sekai-color), 0 -0.75px 0 var(--sekai-color);\n}";
var styles = {"sekai-color-light":"OutlineText-module_sekai-color-light__SLEeL","sekai-color-dark":"OutlineText-module_sekai-color-dark__THKPa","sekai-overlay":"OutlineText-module_sekai-overlay__ArXyQ","sekai-overlay-dark":"OutlineText-module_sekai-overlay-dark__fLHhn","sekai-overlay-light":"OutlineText-module_sekai-overlay-light__8wiYq","sekai-flex-center":"OutlineText-module_sekai-flex-center__q2tvV","sekai-absolute-center":"OutlineText-module_sekai-absolute-center__r-UAB","sekai-invisible-scroll":"OutlineText-module_sekai-invisible-scroll__bB7dW","sekai-mb-8":"OutlineText-module_sekai-mb-8__zEzdE","sekai-mb-16":"OutlineText-module_sekai-mb-16__050Re","sekai-mb-24":"OutlineText-module_sekai-mb-24__dy4-6","sekai-outline-text-light":"OutlineText-module_sekai-outline-text-light__o0dTZ","sekai-outline-text-dark":"OutlineText-module_sekai-outline-text-dark__Fk6Uk"};
styleInject(css_248z);

var OutlineText = function OutlineText(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    sekai = _ref.sekai,
    themeMode = _ref.themeMode,
    text = _ref.text;
  var _useOptionalSekai = useOptionalSekai({
      sekai: sekai,
      mode: themeMode
    }),
    sekaiColor = _useOptionalSekai.sekaiColor,
    modeTheme = _useOptionalSekai.modeTheme;
  var optionStyle = {
    '--sekai-color': sekaiColor
  };
  return /*#__PURE__*/React.createElement("span", {
    className: [styles["sekai-outline-text-".concat(modeTheme)], className].join(' '),
    style: optionStyle,
    "data-text": text,
    "aria-label": text
  }, text);
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

export { BasicButton, COLORS_SEKAI_KEYS, DARK_MODE, Dialog, DialogButtons, DialogTitleHeader, LIGHT_MODE, OutlineText, StrongButton, TextLink, XxMikuDialog, YourSekaiContext, YourSekaiProvider, colorsSekai, convertHexToRgb, convertHexToRgba, createSekai, fireOnEnterKey, fireOnEscapeKey, useCreateSekai, useThemeMode };
