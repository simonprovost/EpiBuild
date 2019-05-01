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

var React = _interopRequireWildcard(_react);

var _localeProvider = require('../locale-provider');

var _localeProvider2 = _interopRequireDefault(_localeProvider);

var _portal = require('../portal');

var _portal2 = _interopRequireDefault(_portal);

var _style = require('../style');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Provider = function (_React$Component) {
  (0, _inherits3['default'])(Provider, _React$Component);

  function Provider() {
    (0, _classCallCheck3['default'])(this, Provider);
    return (0, _possibleConstructorReturn3['default'])(this, (Provider.__proto__ || Object.getPrototypeOf(Provider)).apply(this, arguments));
  }

  (0, _createClass3['default'])(Provider, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        _localeProvider2['default'],
        { locale: this.props.locale },
        React.createElement(
          _style.ThemeProvider,
          { value: this.props.theme },
          React.createElement(
            _portal2['default'].Host,
            null,
            this.props.children
          )
        )
      );
    }
  }]);
  return Provider;
}(React.Component);

exports['default'] = Provider;
module.exports = exports['default'];