'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {
  options = Object.assign(defaultOptions(), options);

  return _eventStream2.default.through(function (vFile) {
    if (!vFile.isNull()) {
      vFile = (0, _transformer.transformation)([_scss2.default, _css2.default], vFile, options);
    }
    this.emit('data', vFile);
  });
};

var _eventStream = require('event-stream');

var _eventStream2 = _interopRequireDefault(_eventStream);

var _scss = require('../builders/scss');

var _scss2 = _interopRequireDefault(_scss);

var _css = require('../directives/css');

var _css2 = _interopRequireDefault(_css);

var _transformer = require('../transformer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @fileoverview CSS stream.
 */

function defaultOptions() {
  return { precompile: false };
}

/**
 * @params {Object} options .
 */
module.exports = exports['default'];