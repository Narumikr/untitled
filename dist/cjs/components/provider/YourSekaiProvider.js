'use client';
'use strict';

var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var React = require('react');
var useLocalStorage = require('../../hooks/useLocalStorage.js');
var useThemeMode = require('../../hooks/useThemeMode.js');
var color_constant = require('../../internal/color.constant.js');

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var YOUR_SEKAI_COLOR = 'your_sekai_color';
var YOUR_COLOR_THEME = 'your_color_theme';
var YourSekaiContext = /*#__PURE__*/React.createContext(null);
var YourSekaiProvider = function YourSekaiProvider(_ref) {
  var children = _ref.children,
    sekaiTheme = _ref.sekaiTheme;
  var _useLocalStorage = useLocalStorage.useLocalStorage(YOUR_SEKAI_COLOR, sekaiTheme.palette.sekai),
    sekaiColor = _useLocalStorage.storedValue,
    setSekaiColor = _useLocalStorage.setStoredValue;
  var _useLocalStorage2 = useLocalStorage.useLocalStorage(YOUR_COLOR_THEME, sekaiTheme.palette.mode),
    colorTheme = _useLocalStorage2.storedValue,
    setColorTheme = _useLocalStorage2.setStoredValue;
  var switchSekaiColor = React.useCallback(function (sekai) {
    setSekaiColor(sekai);
  }, [setSekaiColor]);
  var switchColorTheme = React.useCallback(function (color) {
    setColorTheme(color);
  }, [setColorTheme]);
  var currentSekaiTheme = React.useMemo(function () {
    return _objectSpread(_objectSpread({}, sekaiTheme), {}, {
      palette: _objectSpread(_objectSpread({}, sekaiTheme.palette), {}, {
        sekai: sekaiColor,
        mode: colorTheme
      })
    });
  }, [colorTheme, sekaiColor, sekaiTheme]);
  var contextValue = React.useMemo(function () {
    return {
      sekaiTheme: currentSekaiTheme,
      switchSekaiColor: switchSekaiColor,
      switchColorTheme: switchColorTheme
    };
  }, [currentSekaiTheme, switchColorTheme, switchSekaiColor]);
  return /*#__PURE__*/React.createElement(YourSekaiContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/React.createElement(GlobalStyle, {
    theme: currentSekaiTheme
  }), children);
};
var GlobalStyle = /*#__PURE__*/React.memo(function (_ref2) {
  var theme = _ref2.theme;
  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isClient = _useState2[0],
    setIsClient = _useState2[1];
  React.useEffect(function () {
    setIsClient(true);
  }, []);
  var style = React.useMemo(function () {
    return "\n    * {\n      font-family: ".concat(theme.typography.fontFamily, ";\n    }\n    body {\n      color: ").concat(theme.palette.mode === useThemeMode.DARK_MODE ? color_constant.COLOR_DARK_MODE : color_constant.COLOR_LIGHT_MODE, ";\n      background: ").concat(theme.palette.mode === useThemeMode.DARK_MODE ? color_constant.BACKGROUND_DARK_MODE : color_constant.BACKGROUND_LIGHT_MODE, ";\n    }\n  ");
  }, [theme.palette.mode, theme.typography.fontFamily]);
  if (!isClient) return null;
  return /*#__PURE__*/React.createElement("style", null, style);
});
GlobalStyle.displayName = 'GlobalStyle';

exports.YOUR_COLOR_THEME = YOUR_COLOR_THEME;
exports.YOUR_SEKAI_COLOR = YOUR_SEKAI_COLOR;
exports.YourSekaiContext = YourSekaiContext;
exports.YourSekaiProvider = YourSekaiProvider;
