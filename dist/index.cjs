'use strict';

var jsxRuntime = require('react/jsx-runtime');

// src/components/button/Button.module.scss
var Button_module_default = "// @import '../../styles/globals.scss';\n\n.storybook-button {\n  display: inline-block;\n  cursor: pointer;\n  border: 0;\n  border-radius: 3em;\n  font-weight: 700;\n  line-height: 1;\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n.storybook-button--primary {\n  background-color: #555ab9;\n  color: var(--mygo-color);\n}\n.storybook-button--secondary {\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n  background-color: transparent;\n  color: var(--mygo-color);\n}\n.storybook-button--small {\n  padding: 10px 16px;\n  font-size: 12px;\n}\n.storybook-button--medium {\n  padding: 11px 20px;\n  font-size: 14px;\n}\n.storybook-button--large {\n  padding: 12px 24px;\n  font-size: 16px;\n}\n";
var Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}) => {
  const mode = primary ? `${Button_module_default["storybook-button--primary"]}` : `${Button_module_default["storybook-button--secondary"]}`;
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      type: "button",
      className: [
        `${Button_module_default["storybook-button"]}`,
        `${Button_module_default[`storybook-button--${size}`]}`,
        mode
      ].join(" "),
      style: { backgroundColor },
      ...props,
      children: label
    }
  );
};
var Button_default = Button;

exports.Button = Button_default;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map