import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import Icon from '../icon';
import { WithTheme } from '../style';
import CheckboxStyles from './style/index';

var Checkbox = function (_React$Component) {
    _inherits(Checkbox, _React$Component);

    function Checkbox(props, context) {
        _classCallCheck(this, Checkbox);

        var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props, context));

        _this.handleClick = function () {
            if (_this.props.disabled) {
                return;
            }
            var checked = !_this.state.checked;
            if (!(typeof _this.props.checked === 'boolean')) {
                _this.setState({
                    checked: checked
                });
            }
            if (_this.props.onChange) {
                _this.props.onChange({ target: { checked: checked } });
            }
        };
        _this.state = {
            checked: props.checked || props.defaultChecked || false
        };
        return _this;
    }

    _createClass(Checkbox, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (typeof nextProps.checked === 'boolean') {
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

            var checked = this.state.checked;
            return React.createElement(
                WithTheme,
                { themeStyles: CheckboxStyles, styles: this.props.styles },
                function (styles, theme) {
                    var icon = void 0;
                    if (checked) {
                        icon = disabled ? React.createElement(Icon, { name: 'check-square', style: [styles.icon, style] }) : React.createElement(Icon, { name: 'check-square', color: theme.brand_primary, style: [styles.icon, style] });
                    } else {
                        icon = disabled ? React.createElement(Icon, { name: 'border', style: [styles.icon, style] }) : React.createElement(Icon, { name: 'border', color: theme.brand_primary, style: [styles.icon, style] });
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
                                { style: styles.iconRight },
                                _this2.props.children
                            ) : children
                        )
                    );
                }
            );
        }
    }]);

    return Checkbox;
}(React.Component);

export default Checkbox;