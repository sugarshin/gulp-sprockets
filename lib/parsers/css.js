'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * @fileoverview CSS parser.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _postcssScss = require('postcss-scss');

var _postcssScss2 = _interopRequireDefault(_postcssScss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Css = (function () {
  function Css() {
    _classCallCheck(this, Css);
  }

  _createClass(Css, [{
    key: 'parse',

    /**
     * @param {String} code .
     * @return {Void} .
     */
    value: function parse(code) {
      this._ast = _postcssScss2.default.parse(code);
    }

    /**
     * @return {String} Generated CSS string.
     */

  }, {
    key: 'code',
    value: function code() {
      var _this = this;

      this._ast.walkComments(function (comment) {
        try {
          _this._ast.removeChild(comment);
        } catch (e) {
          // nothing to do.
        }
      });
      return this._ast.toString();
    }

    /**
     * @return {Array.<String>} Comment text.
     */

  }, {
    key: 'comments',
    get: function get() {
      var res = [];
      this._ast.walkComments(function (comment) {
        res.push(comment.text);
      });
      return res;
    }
  }]);

  return Css;
})();

exports.default = Css;
module.exports = exports['default'];