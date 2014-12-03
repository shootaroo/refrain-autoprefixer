/* global it */
'use strict';
var assert = require('power-assert');
var target = require('../index');

it('options', function () {
  target.call({
    options: {
      autoprefixer: {
        browsers: ['Chrome >= 9']
      }
    }
  }, 'a { box-sizing: border-box; }', {}, function (err, output) {
    assert(output === 'a { -webkit-box-sizing: border-box; box-sizing: border-box; }');
  });
});
