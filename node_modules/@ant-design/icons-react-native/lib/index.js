'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fill = require('./fill');

Object.defineProperty(exports, 'IconFill', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_fill)['default'];
  }
});

var _outline = require('./outline');

Object.defineProperty(exports, 'IconOutline', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_outline)['default'];
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }