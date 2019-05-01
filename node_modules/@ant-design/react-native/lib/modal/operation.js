'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = a;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _portal = require('../portal');

var _portal2 = _interopRequireDefault(_portal);

var _OperationContainer = require('./OperationContainer');

var _OperationContainer2 = _interopRequireDefault(_OperationContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function a() {
    var actions = (arguments.length <= 0 ? undefined : arguments[0]) || [{ text: '确定' }];
    var key = _portal2['default'].add(_react2['default'].createElement(_OperationContainer2['default'], { actions: actions, onAnimationEnd: function onAnimationEnd(visible) {
            if (!visible) {
                _portal2['default'].remove(key);
            }
        } }));
}
module.exports = exports['default'];