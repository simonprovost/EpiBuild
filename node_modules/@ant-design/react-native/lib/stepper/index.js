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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _style = require('../style');

var _InputNumber = require('./InputNumber');

var _InputNumber2 = _interopRequireDefault(_InputNumber);

var _style2 = require('./style');

var _style3 = _interopRequireDefault(_style2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var Stepper = function (_React$Component) {
    (0, _inherits3['default'])(Stepper, _React$Component);

    function Stepper() {
        (0, _classCallCheck3['default'])(this, Stepper);
        return (0, _possibleConstructorReturn3['default'])(this, (Stepper.__proto__ || Object.getPrototypeOf(Stepper)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Stepper, [{
        key: 'render',
        value: function render() {
            var inputAndroidStyle = _reactNative.Platform.OS === 'android' ? {
                top: 6,
                paddingTop: 0,
                height: 26
            } : {};
            var _a = this.props,
                inputStyle = _a.inputStyle,
                restProps = __rest(_a, ["inputStyle"]);
            var keyboardType = _reactNative.Platform.OS === 'android' ? 'numeric' : 'numbers-and-punctuation';
            return _react2['default'].createElement(
                _style.WithTheme,
                { styles: this.props.styles, themeStyles: _style3['default'] },
                function (styles) {
                    return _react2['default'].createElement(_InputNumber2['default'], (0, _extends3['default'])({}, restProps, { styles: styles, keyboardType: keyboardType, inputStyle: [inputAndroidStyle, inputStyle] }));
                }
            );
        }
    }]);
    return Stepper;
}(_react2['default'].Component);

exports['default'] = Stepper;

Stepper.defaultProps = {
    step: 1,
    readOnly: false,
    disabled: false,
    inputStyle: {}
};
module.exports = exports['default'];