'use strict';

const {resolve} = require('path');

module.exports = async function module (moduleOptions) {
  
  // Register plugin
  this.addPlugin({
    src: resolve(__dirname, 'templates/plugin.js'),
    fileName: 'xr.js',
    options: moduleOptions
  })
}

module.exports.meta = require('../package.json');