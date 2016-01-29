'use strict';
var autoprefixer = require('autoprefixer');
var postcss = require('postcss');

module.exports = function (text, content, callback) {
  callback(null, postcss([autoprefixer(this.options.autoprefixer)]).process(text).css);
};
