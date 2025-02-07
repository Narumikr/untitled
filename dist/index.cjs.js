'use strict';

var React = require('react');

var colorsSekai = {
  /** Character */
  Miku: "#33ccba",
  Rin: "#ffcc10",
  Len: "#feee10",
  Luka: "#ffbbcc",
  Meiko: "#dd4544",
  Kaito: "#3367cc",
  Ichika: "#33aaee",
  Saki: "#ffc800",
  Honami: "#ee6666",
  Shiho: "#bbdd22",
  Minori: "#ffc096",
  Haruka: "#99ccff",
  Airi: "#ffaacc",
  Shizuku: "#6be6cd",
  Kohane: "#ff6699",
  An: "#00bbdd",
  Akito: "#ff7722",
  Toya: "#0077dd",
  Tsukasa: "#ffbb00",
  Emu: "#ff66bb",
  Nene: "#33dd99",
  Rui: "#bb88ee",
  Kanade: "#bb6688",
  Mafuyu: "#8888cc",
  Ena: "#ccaa88",
  Mizuki: "#ddaacc",
  /** Unit */
  Virtualsinger: "#ffffff",
  Leoneed: "#4455dd",
  Moremorejump: "#88dd44",
  Vividbadsquad: "#ee1166",
  Wonderlandsshowtime: "#ff9900",
  Nightcode: "#884499"
};

function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
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

  if (typeof document === 'undefined') { return; }

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

var css_248z = ".Button-module_storybook-button__S0UP6 {\n  display: inline-block;\n  cursor: pointer;\n  border: 0;\n  border-radius: 3em;\n  font-weight: 700;\n  line-height: 1;\n  font-family: \"Nunito Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.Button-module_storybook-button--primary__zyzb6 {\n  background-color: #555ab9;\n  color: white;\n}\n\n.Button-module_storybook-button--secondary__Z55oq {\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n  background-color: transparent;\n  color: #333;\n}\n\n.Button-module_storybook-button--small__zCOjc {\n  padding: 10px 16px;\n  font-size: 12px;\n}\n\n.Button-module_storybook-button--medium__mfVNW {\n  padding: 11px 20px;\n  font-size: 14px;\n}\n\n.Button-module_storybook-button--large__WUZxs {\n  padding: 12px 24px;\n  font-size: 16px;\n}";
var styles = {"storybook-button":"Button-module_storybook-button__S0UP6","storybook-button--primary":"Button-module_storybook-button--primary__zyzb6","storybook-button--secondary":"Button-module_storybook-button--secondary__Z55oq","storybook-button--small":"Button-module_storybook-button--small__zCOjc","storybook-button--medium":"Button-module_storybook-button--medium__mfVNW","storybook-button--large":"Button-module_storybook-button--large__WUZxs"};
styleInject(css_248z);

var _excluded = ["primary", "size", "backgroundColor", "label"];
var Button = function Button2(_ref) {
  var _ref$primary = _ref.primary, primary = _ref$primary === undefined ? false : _ref$primary, _ref$size = _ref.size, size = _ref$size === undefined ? "medium" : _ref$size, backgroundColor = _ref.backgroundColor, label = _ref.label, props = _objectWithoutProperties(_ref, _excluded);
  var mode = primary ? "".concat(styles["storybook-button--primary"]) : "".concat(styles["storybook-button--secondary"]);
  return /* @__PURE__ */ React.createElement("button", _extends({
    type: "button",
    className: ["".concat(styles["storybook-button"]), "".concat(styles["storybook-button--".concat(size)]), mode].join(" "),
    style: {
      backgroundColor
    }
  }, props), "-".concat(label, "-"));
};

exports.Button = Button;
exports.colorsSekai = colorsSekai;
