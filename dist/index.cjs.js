'use strict';

var React = require('react');

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
  if (undefined !== e) {
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
  if ( ref === undefined ) ref = {};
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

var css_248z$1 = "/* Styles for common color */\n.global-module_sekai-color-light__HfMHF {\n  color: #212121;\n  background-color: #ffffff;\n}\n\n.global-module_sekai-color-dark__6YhnV {\n  color: #e0e0e0;\n  background-color: #121212;\n}\n\n/* Styles for positioning */\n.global-module_sekai-flex-center__g0QI6 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.global-module_sekai-absolute-center__VTxH3 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Styles for scroll */\n.global-module_sekai-invisible-scroll__hmrCH {\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.global-module_sekai-invisible-scroll__hmrCH::-webkit-scrollbar {\n  display: none;\n}\n\n/* Styles for margin space */\n.global-module_sekai-mb-8__ktEHx {\n  margin-bottom: 8px;\n}\n\n.global-module_sekai-mb-16__6mRfr {\n  margin-bottom: 16px;\n}\n\n.global-module_sekai-mb-24__tgmAP {\n  margin-bottom: 24px;\n}";
var globalStyles = {"sekai-color-light":"global-module_sekai-color-light__HfMHF","sekai-color-dark":"global-module_sekai-color-dark__6YhnV","sekai-flex-center":"global-module_sekai-flex-center__g0QI6","sekai-absolute-center":"global-module_sekai-absolute-center__VTxH3","sekai-invisible-scroll":"global-module_sekai-invisible-scroll__hmrCH","sekai-mb-8":"global-module_sekai-mb-8__ktEHx","sekai-mb-16":"global-module_sekai-mb-16__6mRfr","sekai-mb-24":"global-module_sekai-mb-24__tgmAP"};
styleInject(css_248z$1);

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
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : undefined;
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
  var _useState = React.useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    isDarkMode = _useState2[0],
    setDarkMode = _useState2[1];
  React.useEffect(function () {
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

function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var YourSekaiContext = /*#__PURE__*/React.createContext(null);
var YourSekaiProvider = function YourSekaiProvider(_ref) {
  var children = _ref.children,
    sekaiTheme = _ref.sekaiTheme;
  var _useState = React.useState(sekaiTheme),
    _useState2 = _slicedToArray(_useState, 2),
    currentSekaiTheme = _useState2[0],
    setCurrentSekaiTheme = _useState2[1];
  var onSwitchSekaiColor = function onSwitchSekaiColor(sekai) {
    setCurrentSekaiTheme(function (pre) {
      return _objectSpread$1(_objectSpread$1({}, pre), {}, {
        palette: _objectSpread$1(_objectSpread$1({}, pre.palette), {}, {
          sekai: sekai
        })
      });
    });
  };
  var provideValue = {
    sekaiTheme: currentSekaiTheme,
    onSwitchSekaiColor: onSwitchSekaiColor
  };
  var globalStyle = React.useMemo(function () {
    var _sekaiTheme$typograph, _sekaiTheme$palette, _sekaiTheme$palette2;
    return "\n    * {\n      font-family: ".concat((_sekaiTheme$typograph = sekaiTheme.typography) === null || _sekaiTheme$typograph === undefined ? undefined : _sekaiTheme$typograph.fontFamily, ";\n    }\n    body {\n      color: ").concat(((_sekaiTheme$palette = sekaiTheme.palette) === null || _sekaiTheme$palette === undefined ? undefined : _sekaiTheme$palette.mode) === DARK_MODE ? '#e0e0e0' : '#212121', ";\n      background: ").concat(((_sekaiTheme$palette2 = sekaiTheme.palette) === null || _sekaiTheme$palette2 === undefined ? undefined : _sekaiTheme$palette2.mode) === DARK_MODE ? '#121212' : '#ffffff', ";\n    }\n  ");
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
  var context = React.useContext(YourSekaiContext);
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
  var context = React.useContext(YourSekaiContext);
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

var css_248z = ".BasicButton-module_sekai-basic-button__VyCUN, .BasicButton-module_sekai-basic-button--dark__XLpuB, .BasicButton-module_sekai-basic-button--light__BCQ1L {\n  padding: 5px 10px;\n  border-radius: 10px;\n  min-height: 40px;\n}\n.BasicButton-module_sekai-basic-button__VyCUN:disabled, .BasicButton-module_sekai-basic-button--dark__XLpuB:disabled, .BasicButton-module_sekai-basic-button--light__BCQ1L:disabled {\n  opacity: 0.5;\n}\n.BasicButton-module_sekai-basic-button__VyCUN:disabled:hover, .BasicButton-module_sekai-basic-button--dark__XLpuB:disabled:hover, .BasicButton-module_sekai-basic-button--light__BCQ1L:disabled:hover {\n  background-color: transparent;\n}\n\n.BasicButton-module_sekai-basic-button--light__BCQ1L {\n  border: 2px solid var(--sekai-color, #000);\n}\n.BasicButton-module_sekai-basic-button--light__BCQ1L:hover {\n  background-color: var(--sekai-color-hover, rgba(0, 0, 0, 0.1));\n}\n\n.BasicButton-module_sekai-basic-button--dark__XLpuB {\n  border: 2px solid var(--sekai-color, #fff);\n}\n.BasicButton-module_sekai-basic-button--dark__XLpuB:hover {\n  background-color: var(--sekai-color-hover, rgba(0, 0, 0, 0.3));\n}";
var styles = {"sekai-basic-button":"BasicButton-module_sekai-basic-button__VyCUN","sekai-basic-button--dark":"BasicButton-module_sekai-basic-button--dark__XLpuB","sekai-basic-button--light":"BasicButton-module_sekai-basic-button--light__BCQ1L"};
styleInject(css_248z);

var _excluded = ["className", "sekai", "withText", "themeMode", "children", "disabled"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var BasicButton = function BasicButton(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === undefined ? '' : _ref$className,
    sekai = _ref.sekai,
    _ref$withText = _ref.withText,
    withText = _ref$withText === undefined ? false : _ref$withText,
    themeMode = _ref.themeMode,
    children = _ref.children,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === undefined ? false : _ref$disabled,
    buttonProps = _objectWithoutProperties(_ref, _excluded);
  var _useOptionalSekai = useOptionalSekai({
      sekai: sekai,
      mode: themeMode
    }),
    sekaiColor = _useOptionalSekai.sekaiColor,
    modeTheme = _useOptionalSekai.modeTheme,
    isLight = _useOptionalSekai.isLight;
  var sekaiColorHover = convertHexToRgba(sekaiColor, isLight ? 0.1 : 0.3);
  var optionStyle = _objectSpread({
    '--sekai-color': sekaiColor,
    '--sekai-color-hover': sekaiColorHover
  }, withText && {
    color: sekaiColor
  });
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: ["".concat(styles["sekai-basic-button--".concat(modeTheme)]), "".concat(globalStyles["sekai-color-".concat(modeTheme)]), "".concat(className)].join(' '),
    style: optionStyle,
    disabled: disabled
  }, buttonProps), children);
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
  var typography = option === null || option === undefined ? undefined : option.typography;
  var sekaiTheme = {
    palette: {
      sekai: palette.sekai,
      mode: palette.mode || defaultTheme.palette.mode
    },
    typography: {
      fontFamily: (typography === null || typography === undefined ? undefined : typography.fontFamily) || defaultTheme.typography.fontFamily
    }
  };
  return sekaiTheme;
};

exports.BasicButton = BasicButton;
exports.COLORS_SEKAI_KEYS = COLORS_SEKAI_KEYS;
exports.DARK_MODE = DARK_MODE;
exports.LIGHT_MODE = LIGHT_MODE;
exports.YourSekaiContext = YourSekaiContext;
exports.YourSekaiProvider = YourSekaiProvider;
exports.colorsSekai = colorsSekai;
exports.convertHexToRgb = convertHexToRgb;
exports.convertHexToRgba = convertHexToRgba;
exports.createSekai = createSekai;
exports.useCreateSekai = useCreateSekai;
exports.useThemeMode = useThemeMode;
