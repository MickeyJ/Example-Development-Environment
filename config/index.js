const path = require('path');

const config = {
  env: process.env.NODE_ENV,
  path: {
    root: path.resolve('./'),
    log: path.resolve('./logs'),
    src: path.resolve('./src/client'),
    test: path.resolve('./src/test'),
    dist: path.resolve('./dist'),
  },
  VENDOR_LIBS: [
    'react', 'react-dom', 'redux', 'react-redux'
  ],
};

module.exports = config;
