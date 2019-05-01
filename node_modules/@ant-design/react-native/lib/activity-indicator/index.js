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

var _style = require('../style');

var _index = require('./style/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var RNActivityIndicator = function (_React$Component) {
    (0, _inherits3['default'])(RNActivityIndicator, _React$Component);

    function RNActivityIndicator() {
        (0, _classCallCheck3['default'])(this, RNActivityIndicator);
        return (0, _possibleConstructorReturn3['default'])(this, (RNActivityIndicator.__proto__ || Object.getPrototypeOf(RNActivityIndicator)).apply(this, arguments));
    }

    (0, _createClass3['default'])(RNActivityIndicator, [{
        key: '_renderToast',
        value: function _renderToast() {
            var _this2 = this;

            var _props = this.props,
                _props$color = _props.color,
                color = _props$color === undefined ? 'white' : _props$color,
                _props$size = _props.size,
                size = _props$size === undefined ? 'large' : _props$size;

            return _react2['default'].createElement(
                _style.WithTheme,
                { styles: this.props.styles, themeStyles: _index2['default'] },
                function (styles) {
                    return _react2['default'].createElement(
                        _reactNative.View,
                        { style: [styles.container] },
                        _react2['default'].createElement(
                            _reactNative.View,
                            { style: [styles.innerContainer, { height: 89 }] },
                            _react2['default'].createElement(
                                _reactNative.View,
                                { style: [styles.wrapper] },
                                _react2['default'].createElement(_reactNative.ActivityIndicator, { color: color, size: size }),
                                _this2.props.text && _react2['default'].createElement(
                                    _reactNative.Text,
                                    { style: [styles.toast] },
                                    _this2.props.text
                                )
                            )
                        )
                    );
                }
            );
        }
    }, {
        key: '_renderSpinner',
        value: function _renderSpinner() {
            var _props2 = this.props,
                color = _props2.color,
                size = _props2.size,
                text = _props2.text;

            return _react2['default'].createElement(
                _style.WithTheme,
                { styles: this.props.styles, themeStyles: _index2['default'] },
                function (styles) {
                    return _react2['default'].createElement(
                        _reactNative.View,
                        { style: styles.spinner },
                        _react2['default'].createElement(_reactNative.ActivityIndicator, { color: color, size: size }),
                        text && _react2['default'].createElement(
                            _reactNative.Text,
                            { style: [styles.tip] },
                            text
                        )
                    );
                }
            );
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.props.animating) {
                return this.props.toast ? this._renderToast() : this._renderSpinner();
            }
            return null;
        }
    }]);
    return RNActivityIndicator;
}(_react2['default'].Component);

exports['default'] = RNActivityIndicator;

RNActivityIndicator.defaultProps = {
    animating: true,
    color: 'gray',
    size: 'small',
    toast: false
};
module.exports = exports['default'];