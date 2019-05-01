import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import List from '../list/index';
import { WithTheme } from '../style';
import Checkbox from './Checkbox';
import CheckboxItemStyles from './style/index';
var ListItem = List.Item;

var CheckboxItem = function (_React$Component) {
    _inherits(CheckboxItem, _React$Component);

    function CheckboxItem() {
        _classCallCheck(this, CheckboxItem);

        var _this = _possibleConstructorReturn(this, (CheckboxItem.__proto__ || Object.getPrototypeOf(CheckboxItem)).apply(this, arguments));

        _this.handleClick = function () {
            if (_this.checkbox) {
                _this.checkbox.handleClick();
            }
            if (_this.props.onPress) {
                _this.props.onPress();
            }
        };
        return _this;
    }

    _createClass(CheckboxItem, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                style = _props.style,
                checkboxStyle = _props.checkboxStyle,
                defaultChecked = _props.defaultChecked,
                checked = _props.checked,
                disabled = _props.disabled,
                children = _props.children,
                extra = _props.extra,
                onChange = _props.onChange;

            var thumbNode = React.createElement(
                WithTheme,
                { styles: this.props.styles, themeStyles: CheckboxItemStyles },
                function (styles) {
                    return React.createElement(Checkbox, { ref: function ref(_ref) {
                            return _this2.checkbox = _ref;
                        }, style: [styles.checkboxItemCheckbox, checkboxStyle], defaultChecked: defaultChecked, checked: checked, onChange: onChange, disabled: disabled });
                }
            );
            return React.createElement(
                ListItem,
                { style: style, onPress: disabled ? undefined : this.handleClick, extra: extra, thumb: thumbNode },
                children
            );
        }
    }]);

    return CheckboxItem;
}(React.Component);

export default CheckboxItem;