import { jsx } from 'react/jsx-runtime';

// stylePlugin:F:\untitled\sekai\src\styles\components\Button.module.scss
var Button_module_default = {
  "storybook-button": "_storybook-button_1243a_1",
  "storybook-button--primary": "_storybook-button--primary_1243a_11",
  "storybook-button--secondary": "_storybook-button--secondary_1243a_16",
  "storybook-button--small": "_storybook-button--small_1243a_22",
  "storybook-button--medium": "_storybook-button--medium_1243a_27",
  "storybook-button--large": "_storybook-button--large_1243a_32"
};
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

export { Button_default as Button };
//# sourceMappingURL=index.esm.js.map
//# sourceMappingURL=index.esm.js.map