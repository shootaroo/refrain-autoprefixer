'use strict';
var autoprefixer = require('autoprefixer-core');

module.exports = function (text, content, callback) {
  callback(null, autoprefixer(this.options.autoprefixer).process(text).css);
};
