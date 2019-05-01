import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
import React from 'react';
import { Text, View } from 'react-native';
import Swipeout from 'react-native-swipeout';

var SwipeAction = function (_React$Component) {
    _inherits(SwipeAction, _React$Component);

    function SwipeAction() {
        _classCallCheck(this, SwipeAction);

        return _possibleConstructorReturn(this, (SwipeAction.__proto__ || Object.getPrototypeOf(SwipeAction)).apply(this, arguments));
    }

    _createClass(SwipeAction, [{
        key: 'renderCustomButton',
        value: function renderCustomButton(button) {
            var buttonStyle = button.style;
            var bgColor = buttonStyle ? buttonStyle.backgroundColor : 'transparent';
            var Component = React.createElement(
                View,
                { style: {
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: bgColor
                    } },
                React.isValidElement(button.text) ? button.text : React.createElement(
                    Text,
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
            return customLeft || customRight ? React.createElement(
                Swipeout,
                _extends({ autoClose: autoClose, left: customLeft, right: customRight, style: style, onOpen: onOpen, onClose: onClose, disabled: disabled }, restProps),
                children
            ) : React.createElement(
                View,
                _extends({ style: style }, restProps),
                children
            );
        }
    }]);

    return SwipeAction;
}(React.Component);

SwipeAction.defaultProps = {
    autoClose: false,
    disabled: false,
    onOpen: function onOpen() {},
    onClose: function onClose() {}
};
export default SwipeAction;