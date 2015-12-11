'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hash = {
  /**
   * @param {String} contents .
   * @return {String} Encrypted string by md5.
   */
  create: function create(contents) {
    return _crypto2.default.createHash('md5').update(contents).digest('hex');
  }
};

exports.default = hash;
module.exports = exports['default'];