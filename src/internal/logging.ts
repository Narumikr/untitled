/* eslint-disable no-console */

export const ConsoleLog = <T extends unknown[]>(...arg: T) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(...arg)
  }
}

export const ConsoleWarning = <T extends unknown[]>(...arg: T) => {
  if (process.env.NODE_ENV === 'development') {
    console.warn(...arg)
  }
}

export const ConsoleError = <T extends unknown[]>(...arg: T) => {
  if (process.env.NODE_ENV === 'development') {
    console.error(...arg)
  }
}
