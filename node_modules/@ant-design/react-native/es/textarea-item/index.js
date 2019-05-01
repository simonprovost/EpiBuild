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
import { Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import Icon from '../icon';
import { WithTheme } from '../style';
import TextareaItemStyles from './style/index';
function fixControlledValue(value) {
    if (typeof value === 'undefined' || value === null) {
        return '';
    }
    return value;
}

var TextAreaItem = function (_React$Component) {
    _inherits(TextAreaItem, _React$Component);

    function TextAreaItem(props) {
        _classCallCheck(this, TextAreaItem);

        var _this = _possibleConstructorReturn(this, (TextAreaItem.__proto__ || Object.getPrototypeOf(TextAreaItem)).call(this, props));

        _this.onChange = function (event) {
            var text = event.nativeEvent.text;
            var onChange = _this.props.onChange;

            _this.setState({
                inputCount: text.length
            });
            if (onChange) {
                onChange(text);
            }
        };
        _this.onContentSizeChange = function (theme) {
            return function (event) {
                var height = void 0;
                var _this$props = _this.props,
                    autoHeight = _this$props.autoHeight,
                    onContentSizeChange = _this$props.onContentSizeChange;

                var rows = _this.props.rows;
                if (autoHeight) {
                    height = event.nativeEvent.contentSize.height;
                } else if (rows > 1) {
                    height = 6 * rows * 4;
                } else {
                    height = theme.list_item_height;
                }
                _this.setState({
                    height: height
                });
                if (onContentSizeChange) {
                    onContentSizeChange(event);
                }
            };
        };
        _this.getHeight = function (theme) {
            var rows = _this.props.rows;

            if (_this.state.height) {
                return _this.state.height;
            }
            return rows !== undefined && rows > 1 ? 6 * rows * 4 : theme.list_item_height;
        };
        _this.state = {
            inputCount: 0
        };
        return _this;
    }

    _createClass(TextAreaItem, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _a = this.props,
                rows = _a.rows,
                error = _a.error,
                clear = _a.clear,
                count = _a.count,
                autoHeight = _a.autoHeight,
                last = _a.last,
                onErrorClick = _a.onErrorClick,
                styles = _a.styles,
                style = _a.style,
                restProps = __rest(_a, ["rows", "error", "clear", "count", "autoHeight", "last", "onErrorClick", "styles", "style"]);var value = restProps.value,
                defaultValue = restProps.defaultValue;
            var inputCount = this.state.inputCount;

            return React.createElement(
                WithTheme,
                { themeStyles: TextareaItemStyles, styles: styles },
                function (s, theme) {
                    var valueProps = void 0;
                    if ('value' in _this2.props) {
                        valueProps = {
                            value: fixControlledValue(value)
                        };
                    } else {
                        valueProps = {
                            defaultValue: defaultValue
                        };
                    }
                    var containerStyle = {
                        borderBottomWidth: last ? 0 : theme.border_width_sm
                    };
                    var textareaStyle = {
                        color: error ? '#f50' : theme.color_text_base,
                        paddingRight: error ? 2 * theme.h_spacing_lg : 0
                    };
                    var maxLength = count > 0 ? count : undefined;
                    return React.createElement(
                        View,
                        { style: [s.container, containerStyle, { position: 'relative' }] },
                        React.createElement(TextInput, _extends({ clearButtonMode: clear ? 'while-editing' : 'never', underlineColorAndroid: 'transparent', style: [s.input, textareaStyle, { height: Math.max(45, _this2.getHeight(theme)) }, style] }, restProps, valueProps, { onChange: function onChange(event) {
                                return _this2.onChange(event);
                            }, onContentSizeChange: _this2.onContentSizeChange(theme), multiline: rows > 1 || autoHeight, numberOfLines: rows, maxLength: maxLength, ref: function ref(_ref) {
                                return _this2.textAreaRef = _ref;
                            } })),
                        error ? React.createElement(
                            TouchableWithoutFeedback,
                            { onPress: onErrorClick },
                            React.createElement(
                                View,
                                { style: [s.errorIcon] },
                                React.createElement(Icon, { name: 'info-circle', style: {
                                        color: theme.brand_error
                                    } })
                            )
                        ) : null,
                        rows > 1 && count > 0 ? React.createElement(
                            View,
                            { style: [s.count] },
                            React.createElement(
                                Text,
                                null,
                                inputCount,
                                ' / ',
                                count
                            )
                        ) : null
                    );
                }
            );
        }
    }]);

    return TextAreaItem;
}(React.Component);

export default TextAreaItem;

TextAreaItem.defaultProps = {
    onChange: function onChange() {},
    onFocus: function onFocus() {},
    onBlur: function onBlur() {},
    onErrorClick: function onErrorClick() {},

    clear: true,
    error: false,
    editable: true,
    rows: 1,
    count: 0,
    keyboardType: 'default',
    autoHeight: false,
    last: false
};