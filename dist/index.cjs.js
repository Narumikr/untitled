'use strict'

var React = require('react')

function _extends() {
  return (
    (_extends = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e]
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r])
          }
          return n
        }),
    _extends.apply(null, arguments)
  )
}

function styleInject(css, ref) {
  if (ref === undefined) ref = {}
  var insertAt = ref.insertAt

  if (typeof document === 'undefined') {
    return
  }

  var head = document.head || document.getElementsByTagName('head')[0]
  var style = document.createElement('style')
  style.type = 'text/css'

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild)
    } else {
      head.appendChild(style)
    }
  } else {
    head.appendChild(style)
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css
  } else {
    style.appendChild(document.createTextNode(css))
  }
}

var css_248z =
  '.Button-module_storybook-button__S0UP6 {\n  display: inline-block;\n  cursor: pointer;\n  border: 0;\n  border-radius: 3em;\n  font-weight: 700;\n  line-height: 1;\n  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;\n}\n\n.Button-module_storybook-button--primary__zyzb6 {\n  background-color: #555ab9;\n  color: white;\n}\n\n.Button-module_storybook-button--secondary__Z55oq {\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n  background-color: transparent;\n  color: #333;\n}\n\n.Button-module_storybook-button--small__zCOjc {\n  padding: 10px 16px;\n  font-size: 12px;\n}\n\n.Button-module_storybook-button--medium__mfVNW {\n  padding: 11px 20px;\n  font-size: 14px;\n}\n\n.Button-module_storybook-button--large__WUZxs {\n  padding: 12px 24px;\n  font-size: 16px;\n}'
var styles = {
  'storybook-button': 'Button-module_storybook-button__S0UP6',
  'storybook-button--primary': 'Button-module_storybook-button--primary__zyzb6',
  'storybook-button--secondary': 'Button-module_storybook-button--secondary__Z55oq',
  'storybook-button--small': 'Button-module_storybook-button--small__zCOjc',
  'storybook-button--medium': 'Button-module_storybook-button--medium__mfVNW',
  'storybook-button--large': 'Button-module_storybook-button--large__WUZxs'
}
styleInject(css_248z)

const Button = ({ primary = false, size = 'medium', backgroundColor, label, ...props }) => {
  const mode = primary
    ? `${styles['storybook-button--primary']}`
    : `${styles['storybook-button--secondary']}`
  return /* @__PURE__ */ React.createElement(
    'button',
    _extends(
      {
        type: 'button',
        className: [
          `${styles['storybook-button']}`,
          `${styles[`storybook-button--${size}`]}`,
          mode
        ].join(' '),
        style: {
          backgroundColor
        }
      },
      props
    ),
    `-${label}-`
  )
}

exports.Button = Button
