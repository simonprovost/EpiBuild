'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.description = exports.title = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var PopoverExample = function (_React$Component) {
  (0, _inherits3['default'])(PopoverExample, _React$Component);

  function PopoverExample() {
    (0, _classCallCheck3['default'])(this, PopoverExample);
    return (0, _possibleConstructorReturn3['default'])(this, (PopoverExample.__proto__ || Object.getPrototypeOf(PopoverExample)).apply(this, arguments));
  }

  (0, _createClass3['default'])(PopoverExample, [{
    key: 'render',
    value: function render() {
      var key = void 0;
      var contents = _react2['default'].createElement(
        _reactNative.View,
        { style: { backgroundColor: 'green', padding: 100 } },
        _react2['default'].createElement(
          _.Button,
          { onPress: function onPress() {
              _.Portal.remove(key);
            }, type: 'primary', style: {
              position: 'absolute',
              top: 100,
              right: 0
            } },
          _react2['default'].createElement(_.Icon, { name: 'close-circle' })
        ),
        _react2['default'].createElement(
          _reactNative.View,
          null,
          _react2['default'].createElement(
            _reactNative.Text,
            null,
            '\u81EA\u5B9A\u4E49Portal'
          )
        )
      );
      return _react2['default'].createElement(
        _reactNative.View,
        null,
        _react2['default'].createElement(
          _.Button,
          { onPress: function onPress() {
              key = _.Portal.add(contents);
            } },
          'Open Portal'
        )
      );
    }
  }]);
  return PopoverExample;
}(_react2['default'].Component);

exports['default'] = PopoverExample;
var title = exports.title = 'Portal';
var description = exports.description = 'Portal example';