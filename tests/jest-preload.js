/* eslint-disable no-undef */
global.console = {
  error: jest.fn(),

  // Keep native behaviour for other methods, use those to print out things in your own tests, not `console.log`
  log: console.log, // console.log are ignored in tests
  warn: console.warn,
  info: console.info,
  debug: console.debug,
}
