'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _ = require('../../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var BasicCardExample = function (_React$Component) {
  (0, _inherits3['default'])(BasicCardExample, _React$Component);

  function BasicCardExample() {
    (0, _classCallCheck3['default'])(this, BasicCardExample);
    return (0, _possibleConstructorReturn3['default'])(this, (BasicCardExample.__proto__ || Object.getPrototypeOf(BasicCardExample)).apply(this, arguments));
  }

  (0, _createClass3['default'])(BasicCardExample, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _reactNative.View,
        { style: { paddingTop: 30 } },
        _react2['default'].createElement(
          _.WingBlank,
          { size: 'lg' },
          _react2['default'].createElement(
            _.Card,
            null,
            _react2['default'].createElement(_.Card.Header, { title: 'This is title', thumbStyle: { width: 30, height: 30 }, thumb: 'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg', extra: 'this is extra' }),
            _react2['default'].createElement(
              _.Card.Body,
              null,
              _react2['default'].createElement(
                _reactNative.View,
                { style: { height: 42 } },
                _react2['default'].createElement(
                  _reactNative.Text,
                  { style: { marginLeft: 16 } },
                  'Card Content'
                )
              )
            ),
            _react2['default'].createElement(_.Card.Footer, { content: 'footer content', extra: 'footer extra content' })
          )
        ),
        _react2['default'].createElement(_.WhiteSpace, { size: 'lg' }),
        _react2['default'].createElement(
          _.Card,
          { full: true },
          _react2['default'].createElement(_.Card.Header, { title: 'Full Column', thumbStyle: { width: 30, height: 30 }, thumb: 'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg', extra: 'this is extra' }),
          _react2['default'].createElement(
            _.Card.Body,
            null,
            _react2['default'].createElement(
              _reactNative.View,
              { style: { height: 42 } },
              _react2['default'].createElement(
                _reactNative.Text,
                { style: { marginLeft: 16 } },
                'Card Content'
              )
            )
          ),
          _react2['default'].createElement(_.Card.Footer, { content: 'footer content', extra: 'footer extra content' })
        )
      );
    }
  }]);
  return BasicCardExample;
}(_react2['default'].Component);

exports['default'] = BasicCardExample;
module.exports = exports['default'];