const jsdom = require('jsdom');

const { JSDOM } = jsdom;

function createDocument() {
  const { document } = (new JSDOM('')).window;
  const window = document.defaultView;
  global.document = document;
  global.window = window;

  return document;
}

export default createDocument;
