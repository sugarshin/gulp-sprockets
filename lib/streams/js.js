'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {
  options = Object.assign(defaultOptions(), options);

  return _eventStream2.default.through(function (vFile) {
    if (!vFile.isNull()) {
      vFile = (0, _transformer.transformation)([_js2.default, _js4.default], vFile, options);
    }
    this.emit('data', vFile);
  });
};

var _eventStream = require('event-stream');

var _eventStream2 = _interopRequireDefault(_eventStream);

var _js = require('../builders/js');

var _js2 = _interopRequireDefault(_js);

var _js3 = require('../directives/js');

var _js4 = _interopRequireDefault(_js3);

var _transformer = require('../transformer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @fileoverview JavaScript stream.
 */

function defaultOptions() {
  return { precompile: false };
}

/**
 * @params {Object} options .
 */
module.exports = exports['default'];