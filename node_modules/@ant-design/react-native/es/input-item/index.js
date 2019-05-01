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
import { Platform, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Icon from '../icon';
import { WithTheme } from '../style';
import Input from './Input';
import InputItemStyles from './style/index';
var noop = function noop() {};
function normalizeValue(value) {
    if (typeof value === 'undefined' || value === null) {
        return '';
    }
    return value;
}

var InputItem = function (_React$Component) {
    _inherits(InputItem, _React$Component);

    function InputItem() {
        _classCallCheck(this, InputItem);

        var _this = _possibleConstructorReturn(this, (InputItem.__proto__ || Object.getPrototypeOf(InputItem)).apply(this, arguments));

        _this.state = {
            focus: false
        };
        _this.onChange = function (text) {
            var _this$props = _this.props,
                onChange = _this$props.onChange,
                type = _this$props.type;

            var maxLength = _this.props.maxLength;
            switch (type) {
                case 'bankCard':
                    text = text.replace(/\D/g, '');
                    if (maxLength > 0) {
                        text = text.substring(0, maxLength);
                    }
                    text = text.replace(/\D/g, '').replace(/(....)(?=.)/g, '$1 ');
                    break;
                case 'phone':
                    text = text.replace(/\D/g, '').substring(0, 11);
                    var valueLen = text.length;
                    if (valueLen > 3 && valueLen < 8) {
                        text = text.substr(0, 3) + ' ' + text.substr(3);
                    } else if (valueLen >= 8) {
                        text = text.substr(0, 3) + ' ' + text.substr(3, 4) + ' ' + text.substr(7);
                    }
                    break;
                case 'password':
                    break;
                default:
                    break;
            }
            if (onChange) {
                onChange(text);
            }
        };
        _this.onInputBlur = function () {
            _this.setState({ focus: false }, function () {
                if (_this.props.onBlur) {
                    _this.props.onBlur(_this.props.value);
                }
            });
        };
        _this.onInputFocus = function () {
            _this.setState({ focus: true }, function () {
                if (_this.props.onFocus) {
                    _this.props.onFocus(_this.props.value);
                }
            });
        };
        _this.onInputClear = function () {
            if (_this.inputRef) {
                _this.inputRef.clear();
            }
            _this.onChange('');
        };
        // this is instance method for user to use
        _this.focus = function () {
            if (_this.inputRef) {
                _this.inputRef.focus();
            }
        };
        return _this;
    }

    _createClass(InputItem, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var android = Platform.OS === 'android';
            var _a = this.props,
                type = _a.type,
                editable = _a.editable,
                clear = _a.clear,
                children = _a.children,
                error = _a.error,
                extra = _a.extra,
                labelNumber = _a.labelNumber,
                last = _a.last,
                onExtraClick = _a.onExtraClick,
                onErrorClick = _a.onErrorClick,
                styles = _a.styles,
                disabled = _a.disabled,
                restProps = __rest(_a, ["type", "editable", "clear", "children", "error", "extra", "labelNumber", "last", "onExtraClick", "onErrorClick", "styles", "disabled"]);var focus = this.state.focus;
            var value = restProps.value,
                defaultValue = restProps.defaultValue,
                style = restProps.style;

            var valueProps = void 0;
            if ('value' in this.props) {
                valueProps = {
                    value: normalizeValue(value)
                };
            } else {
                valueProps = {
                    defaultValue: defaultValue
                };
            }
            return React.createElement(
                WithTheme,
                { styles: styles, themeStyles: InputItemStyles },
                function (s, theme) {
                    var containerStyle = {
                        borderBottomWidth: last ? 0 : StyleSheet.hairlineWidth
                    };
                    var textStyle = {
                        width: theme.font_size_heading * labelNumber * 1.05
                    };
                    var extraStyle = {
                        width: typeof extra === 'string' && extra.length > 0 ? extra.length * theme.font_size_heading : 0
                    };
                    var keyboardTypeArray = ['default', 'email-address', 'numeric', 'phone-pad', 'ascii-capable', 'numbers-and-punctuation', 'url', 'number-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search'];
                    var keyboardType = 'default';
                    if (type === 'number') {
                        keyboardType = 'numeric';
                    } else if (type === 'bankCard') {
                        keyboardType = 'number-pad'; // 不带小数点
                    } else if (type === 'phone') {
                        keyboardType = 'phone-pad';
                    } else if (type && keyboardTypeArray.indexOf(type) > -1) {
                        keyboardType = type;
                    }
                    var disabledStyle = disabled ? s.inputDisabled : {};
                    return React.createElement(
                        View,
                        { style: [s.container, containerStyle] },
                        children ? typeof children === 'string' ? React.createElement(
                            Text,
                            { style: [s.text, textStyle] },
                            children
                        ) : React.createElement(
                            View,
                            { style: textStyle },
                            children
                        ) : null,
                        React.createElement(Input, _extends({ editable: !disabled && editable, clearButtonMode: clear ? 'while-editing' : 'never', underlineColorAndroid: 'transparent', ref: function ref(el) {
                                return _this2.inputRef = el;
                            } }, restProps, valueProps, { style: [{
                                height: !android ? theme.list_item_height_sm : theme.list_item_height
                            }, s.input, error ? s.inputErrorColor : null, disabledStyle,
                            // 支持自定义样式
                            style], keyboardType: keyboardType, onChange: function onChange(event) {
                                return _this2.onChange(event.nativeEvent.text);
                            }, secureTextEntry: type === 'password', onBlur: _this2.onInputBlur, onFocus: _this2.onInputFocus })),
                        editable && clear && value && focus && android ? React.createElement(
                            TouchableOpacity,
                            { style: [s.clear], onPress: _this2.onInputClear, hitSlop: { top: 5, left: 5, bottom: 5, right: 5 } },
                            React.createElement(Icon, { name: 'close', color: 'white' })
                        ) : null,
                        extra ? React.createElement(
                            TouchableWithoutFeedback,
                            { onPress: onExtraClick },
                            React.createElement(
                                View,
                                null,
                                typeof extra === 'string' ? React.createElement(
                                    Text,
                                    { style: [s.extra, extraStyle] },
                                    extra
                                ) : extra
                            )
                        ) : null,
                        error && React.createElement(
                            TouchableWithoutFeedback,
                            { onPress: onErrorClick },
                            React.createElement(
                                View,
                                { style: [s.errorIcon] },
                                React.createElement(Icon, { name: 'info-circle', style: {
                                        color: theme.brand_error
                                    } })
                            )
                        )
                    );
                }
            );
        }
    }]);

    return InputItem;
}(React.Component);

export default InputItem;

InputItem.defaultProps = {
    type: 'text',
    editable: true,
    clear: false,
    onChange: noop,
    onBlur: noop,
    onFocus: noop,
    extra: '',
    onExtraClick: noop,
    error: false,
    onErrorClick: noop,
    labelNumber: 4,
    labelPosition: 'left',
    textAlign: 'left',
    last: false
};