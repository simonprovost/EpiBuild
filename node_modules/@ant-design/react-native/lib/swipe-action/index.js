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

var _reactNativeSwipeout = require('react-native-swipeout');

var _reactNativeSwipeout2 = _interopRequireDefault(_reactNativeSwipeout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var SwipeAction = function (_React$Component) {
    (0, _inherits3['default'])(SwipeAction, _React$Component);

    function SwipeAction() {
        (0, _classCallCheck3['default'])(this, SwipeAction);
        return (0, _possibleConstructorReturn3['default'])(this, (SwipeAction.__proto__ || Object.getPrototypeOf(SwipeAction)).apply(this, arguments));
    }

    (0, _createClass3['default'])(SwipeAction, [{
        key: 'renderCustomButton',
        value: function renderCustomButton(button) {
            var buttonStyle = button.style;
            var bgColor = buttonStyle ? buttonStyle.backgroundColor : 'transparent';
            var Component = _react2['default'].createElement(
                _reactNative.View,
                { style: {
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: bgColor
                    } },
                _react2['default'].isValidElement(button.text) ? button.text : _react2['default'].createElement(
                    _reactNative.Text,
                    { style: [buttonStyle, { textAlign: 'center' }] },
                    button.text
                )
            );
            return {
                text: button.text || 'Click',
                onPress: button.onPress,
                type: 'default',
                component: Component,
                backgroundColor: 'transparent',
                color: '#999',
                disabled: false
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _a = this.props,
                disabled = _a.disabled,
                autoClose = _a.autoClose,
                style = _a.style,
                left = _a.left,
                right = _a.right,
                onOpen = _a.onOpen,
                onClose = _a.onClose,
                children = _a.children,
                restProps = __rest(_a, ["disabled", "autoClose", "style", "left", "right", "onOpen", "onClose", "children"]);
            var customLeft = left && left.map(function (btn) {
                return _this2.renderCustomButton(btn);
            });
            var customRight = right && right.map(function (btn) {
                return _this2.renderCustomButton(btn);
            });
            return customLeft || customRight ? _react2['default'].createElement(
                _reactNativeSwipeout2['default'],
                (0, _extends3['default'])({ autoClose: autoClose, left: customLeft, right: customRight, style: style, onOpen: onOpen, onClose: onClose, disabled: disabled }, restProps),
                children
            ) : _react2['default'].createElement(
                _reactNative.View,
                (0, _extends3['default'])({ style: style }, restProps),
                children
            );
        }
    }]);
    return SwipeAction;
}(_react2['default'].Component);

SwipeAction.defaultProps = {
    autoClose: false,
    disabled: false,
    onOpen: function onOpen() {},
    onClose: function onClose() {}
};
exports['default'] = SwipeAction;
module.exports = exports['default'];