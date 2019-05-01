import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import Icon from '../icon';
import { WithTheme } from '../style';
import variables from '../style/themes/default';
import RadioStyles from './style/index';

var Radio = function (_React$Component) {
    _inherits(Radio, _React$Component);

    function Radio(props, context) {
        _classCallCheck(this, Radio);

        var _this = _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).call(this, props, context));

        _this.handleClick = function () {
            if (_this.props.disabled) {
                return;
            }
            if (!('checked' in _this.props)) {
                _this.setState({
                    checked: true
                });
            }
            if (_this.props.onChange) {
                _this.props.onChange({ target: { checked: true } });
            }
        };
        _this.state = {
            checked: props.checked || props.defaultChecked || false
        };
        return _this;
    }

    _createClass(Radio, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('checked' in nextProps) {
                this.setState({
                    checked: !!nextProps.checked
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                style = _props.style,
                disabled = _props.disabled,
                children = _props.children;

            return React.createElement(
                WithTheme,
                { styles: this.props.styles, themeStyles: RadioStyles },
                function (styles) {
                    var checked = _this2.state.checked;
                    var icon = undefined;
                    if (checked) {
                        icon = disabled ? React.createElement(Icon, { name: 'check', style: [styles.icon, style] }) : React.createElement(Icon, { name: 'check', color: variables.brand_primary, style: [styles.icon, style] });
                    }
                    return React.createElement(
                        TouchableWithoutFeedback,
                        { onPress: _this2.handleClick },
                        React.createElement(
                            View,
                            { style: [styles.wrapper] },
                            icon,
                            typeof children === 'string' ?
                            // tslint:disable-next-line:jsx-no-multiline-js
                            React.createElement(
                                Text,
                                null,
                                _this2.props.children
                            ) : children
                        )
                    );
                }
            );
        }
    }]);

    return Radio;
}(React.Component);

export default Radio;