const path = require('path');

const config = {
  path: {
    root: path.resolve('./'),
    log: path.resolve('./logs'),
    src: path.resolve('./src'),
    test: path.resolve('./test'),
    build: path.resolve('./bin'),
  },
};

module.exports = config;
