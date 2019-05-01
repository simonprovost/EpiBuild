import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { WithTheme } from '../style';
import Checkbox from './Checkbox';
import AgreeItemstyles from './style/index';

var AgreeItem = function (_React$Component) {
    _inherits(AgreeItem, _React$Component);

    function AgreeItem() {
        _classCallCheck(this, AgreeItem);

        var _this = _possibleConstructorReturn(this, (AgreeItem.__proto__ || Object.getPrototypeOf(AgreeItem)).apply(this, arguments));

        _this.handleClick = function () {
            if (_this.checkbox) {
                _this.checkbox.handleClick();
            }
        };
        return _this;
    }

    _createClass(AgreeItem, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                style = _props.style,
                checkboxStyle = _props.checkboxStyle,
                children = _props.children,
                disabled = _props.disabled,
                checked = _props.checked,
                defaultChecked = _props.defaultChecked,
                onChange = _props.onChange;

            return React.createElement(
                WithTheme,
                { styles: this.props.styles, themeStyles: AgreeItemstyles },
                function (styles) {
                    var contentDom = !children ? null : React.isValidElement(children) ? children : React.createElement(
                        Text,
                        null,
                        children
                    );
                    return React.createElement(
                        TouchableWithoutFeedback,
                        { onPress: _this2.handleClick },
                        React.createElement(
                            View,
                            { style: [styles.agreeItem, style] },
                            React.createElement(Checkbox, { ref: function ref(_ref) {
                                    return _this2.checkbox = _ref;
                                }, style: [styles.agreeItemCheckbox, checkboxStyle], disabled: disabled, checked: checked, defaultChecked: defaultChecked, onChange: onChange }),
                            React.createElement(
                                View,
                                { style: { flex: 1 } },
                                contentDom
                            )
                        )
                    );
                }
            );
        }
    }]);

    return AgreeItem;
}(React.Component);

export default AgreeItem;