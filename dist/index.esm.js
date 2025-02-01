// src/styles/components/Button.module.scss
var Button_module_default = "./Button.module-QFUQPLID.scss";

// src/components/Button.tsx
import { jsx } from "react/jsx-runtime";
var Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}) => {
  const mode = primary ? `${Button_module_default["storybook-button--primary"]}` : `${Button_module_default["storybook-button--secondary"]}`;
  return /* @__PURE__ */ jsx(
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
export {
  Button_default as Button
};
//# sourceMappingURL=index.esm.js.map