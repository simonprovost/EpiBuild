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
// tslint:disable:no-empty
import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { WithTheme } from '../style';
import buttonStyles from './style/index';

var Button = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button(props) {
        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

        _this.onPressIn = function () {
            _this.setState({ pressIn: true });
            if (_this.props.onPressIn) {
                var _this$props;

                (_this$props = _this.props).onPressIn.apply(_this$props, arguments);
            }
        };
        _this.onPressOut = function () {
            _this.setState({ pressIn: false });
            if (_this.props.onPressOut) {
                var _this$props2;

                (_this$props2 = _this.props).onPressOut.apply(_this$props2, arguments);
            }
        };
        _this.onShowUnderlay = function () {
            _this.setState({ touchIt: true });
            if (_this.props.onShowUnderlay) {
                var _this$props3;

                (_this$props3 = _this.props).onShowUnderlay.apply(_this$props3, arguments);
            }
        };
        _this.onHideUnderlay = function () {
            _this.setState({ touchIt: false });
            if (_this.props.onHideUnderlay) {
                var _this$props4;

                (_this$props4 = _this.props).onHideUnderlay.apply(_this$props4, arguments);
            }
        };
        _this.state = {
            pressIn: false,
            touchIt: false
        };
        return _this;
    }

    _createClass(Button, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            // TODO: replace `TouchableHighlight` with `TouchableWithoutFeedback` in version 1.1.0
            // for using setNativeProps to improve performance
            var _a = this.props,
                _a$size = _a.size,
                size = _a$size === undefined ? 'large' : _a$size,
                _a$type = _a.type,
                type = _a$type === undefined ? 'default' : _a$type,
                disabled = _a.disabled,
                activeStyle = _a.activeStyle,
                _onPress = _a.onPress,
                style = _a.style,
                styles = _a.styles,
                loading = _a.loading,
                restProps = __rest(_a, ["size", "type", "disabled", "activeStyle", "onPress", "style", "styles", "loading"]);
            return React.createElement(
                WithTheme,
                { themeStyles: buttonStyles, styles: styles },
                function (_styles) {
                    var textStyle = [_styles[size + 'RawText'], _styles[type + 'RawText'], disabled && _styles[type + 'DisabledRawText'], _this2.state.pressIn && _styles[type + 'HighlightText']];
                    var wrapperStyle = [_styles.wrapperStyle, _styles[size + 'Raw'], _styles[type + 'Raw'], disabled && _styles[type + 'DisabledRaw'], _this2.state.pressIn && activeStyle && _styles[type + 'Highlight'], activeStyle && _this2.state.touchIt && activeStyle, style];
                    var underlayColor = StyleSheet.flatten(activeStyle ? activeStyle : _styles[type + 'Highlight']).backgroundColor;
                    var indicatorColor = StyleSheet.flatten(_this2.state.pressIn ? _styles[type + 'HighlightText'] : _styles[type + 'RawText']).color;
                    return React.createElement(
                        TouchableHighlight,
                        _extends({ activeOpacity: 0.4 }, restProps, { style: wrapperStyle, disabled: disabled, underlayColor: underlayColor, onPress: function onPress(e) {
                                return _onPress && _onPress(e);
                            }, onPressIn: _this2.onPressIn, onPressOut: _this2.onPressOut, onShowUnderlay: _this2.onShowUnderlay, onHideUnderlay: _this2.onHideUnderlay }),
                        React.createElement(
                            View,
                            { style: _styles.container },
                            loading ?
                            // tslint:disable-next-line:jsx-no-multiline-js
                            React.createElement(ActivityIndicator, { style: _styles.indicator, animating: true, color: indicatorColor, size: 'small' }) : null,
                            React.createElement(
                                Text,
                                { style: textStyle },
                                _this2.props.children
                            )
                        )
                    );
                }
            );
        }
    }]);

    return Button;
}(React.Component);

export default Button;

Button.defaultProps = {
    pressIn: false,
    disabled: false,
    loading: false,
    onPress: function onPress(_) {},
    onPressIn: function onPressIn(_) {},
    onPressOut: function onPressOut(_) {},
    onShowUnderlay: function onShowUnderlay(_) {},
    onHideUnderlay: function onHideUnderlay(_) {}
};