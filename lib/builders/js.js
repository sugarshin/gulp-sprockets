'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Js = undefined;

var _coffeeScript = require('coffee-script');

var _coffeeScript2 = _interopRequireDefault(_coffeeScript);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _transformer = require('../transformer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @fileoverview JavaScript builder.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

// export for test

var Js = exports.Js = (function (_Transformer) {
  _inherits(Js, _Transformer);

  function Js() {
    _classCallCheck(this, Js);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Js).apply(this, arguments));
  }

  _createClass(Js, [{
    key: 'transform',

    /**
     * @param {Vinyl} vFile The vinyl object.
     * @param {Object} options .
     * @return {Vinyl} Transformed vinyl object.
     */
    value: function transform(vFile) {
      if (_path2.default.extname(vFile.path) == '.coffee') {
        var compiled = _coffeeScript2.default.nodes(_coffeeScript2.default.tokens(vFile.contents.toString())).compile({ bare: true });
        vFile.contents = new Buffer(compiled);
      }
      return vFile;
    }
  }]);

  return Js;
})(_transformer.Transformer);

// singleton

exports.default = new Js();