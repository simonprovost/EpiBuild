'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _iconsReactNative = require('@ant-design/icons-react-native');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('../style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var Icon = function (_React$Component) {
    (0, _inherits3['default'])(Icon, _React$Component);

    function Icon() {
        (0, _classCallCheck3['default'])(this, Icon);
        return (0, _possibleConstructorReturn3['default'])(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Icon, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                size = _a.size,
                color = _a.color,
                name = _a.name,
                rest = __rest(_a, ["size", "color", "name"]);
            var sizeMap = {
                xxs: 15,
                xs: 18,
                sm: 21,
                md: 22,
                lg: 36
            };
            var fontSize = typeof size === 'string' ? sizeMap[size] : size;
            return _react2['default'].createElement(
                _style.WithTheme,
                null,
                function (_, theme) {
                    return _react2['default'].createElement(_iconsReactNative.IconOutline, (0, _extends3['default'])({ size: fontSize, color: color || theme.color_icon_base, name: name }, rest));
                }
            );
        }
    }]);
    return Icon;
}(_react2['default'].Component);

exports['default'] = Icon;

Icon.defaultProps = {
    size: 'md'
};
Icon.displayName = 'Icon';
module.exports = exports['default'];