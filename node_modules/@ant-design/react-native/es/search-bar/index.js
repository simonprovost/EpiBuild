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
import PropTypes from 'prop-types';
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import Icon from '../icon';
import { WithTheme } from '../style';
import { getComponentLocale } from '../_util/getLocale';
import { defaultProps } from './PropsType';
import SearchBarStyles from './style/index';

var SearchBar = function (_React$Component) {
    _inherits(SearchBar, _React$Component);

    function SearchBar(props) {
        _classCallCheck(this, SearchBar);

        var _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

        _this.onSubmit = function (_) {
            if (_this.props.onSubmit) {
                _this.props.onSubmit(_this.state.value || '');
            }
        };
        _this.onChangeText = function (value) {
            if (!('value' in _this.props)) {
                _this.setState({ value: value });
            }
            if (_this.props.onChange) {
                _this.props.onChange(value);
            }
        };
        _this.onCancel = function () {
            if (_this.props.onCancel) {
                _this.props.onCancel(_this.state.value || '');
            }
        };
        _this.onFocus = function () {
            _this.setState({
                focus: true
            });
            if (_this.props.onFocus) {
                _this.props.onFocus();
            }
        };
        _this.onBlur = function () {
            _this.setState({
                focus: false
            });
            if (_this.props.onBlur) {
                _this.props.onBlur();
            }
        };
        var value = void 0;
        if ('value' in props) {
            value = props.value;
        } else if ('defaultValue' in props) {
            value = props.defaultValue;
        } else {
            value = '';
        }
        _this.state = {
            value: value,
            focus: false
        };
        return _this;
    }

    _createClass(SearchBar, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                this.setState({
                    value: nextProps.value
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _a = this.props,
                showCancelButton = _a.showCancelButton,
                styles = _a.styles,
                propsValue = _a.value,
                cancelText = _a.cancelText,
                onChangeText = _a.onChangeText,
                onChange = _a.onChange,
                disabled = _a.disabled,
                style = _a.style,
                restProps = __rest(_a, ["showCancelButton", "styles", "value", "cancelText", "onChangeText", "onChange", "disabled", "style"]);
            // tslint:disable-next-line:variable-name
            var _locale = getComponentLocale(this.props, this.context, 'SearchBar', function () {
                return require('./locale/zh_CN');
            });
            var _state = this.state,
                value = _state.value,
                focus = _state.focus;
            // tslint:disable-next-line:variable-name

            var _showCancelButton = showCancelButton || focus;
            return React.createElement(
                WithTheme,
                { styles: styles, themeStyles: SearchBarStyles },
                function (_styles) {
                    return React.createElement(
                        View,
                        { style: _styles.wrapper },
                        React.createElement(
                            View,
                            { style: _styles.inputWrapper },
                            React.createElement(TextInput, _extends({ clearButtonMode: 'always', underlineColorAndroid: 'transparent', editable: !disabled }, restProps, { style: [_styles.input, style], ref: function ref(el) {
                                    return _this2.inputRef = el;
                                }, value: value, onChangeText: _this2.onChangeText, onSubmitEditing: _this2.onSubmit, onFocus: _this2.onFocus, onBlur: _this2.onBlur }))
                        ),
                        React.createElement(Icon, { name: 'search', style: _styles.search }),
                        _showCancelButton && React.createElement(
                            View,
                            { style: _styles.cancelTextContainer },
                            React.createElement(
                                Text,
                                { style: _styles.cancelText, onPress: _this2.onCancel },
                                cancelText || _locale.cancelText
                            )
                        )
                    );
                }
            );
        }
    }]);

    return SearchBar;
}(React.Component);

export default SearchBar;

SearchBar.defaultProps = _extends({}, defaultProps);
SearchBar.contextTypes = {
    antLocale: PropTypes.object
};