import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { Text, View } from 'react-native';
import List from '../list/index';
import { WithTheme } from '../style';
import Radio from './Radio';
import RadioItemStyles from './style/index';
var ListItem = List.Item;

var RadioItem = function (_React$Component) {
    _inherits(RadioItem, _React$Component);

    function RadioItem() {
        _classCallCheck(this, RadioItem);

        var _this = _possibleConstructorReturn(this, (RadioItem.__proto__ || Object.getPrototypeOf(RadioItem)).apply(this, arguments));

        _this.handleClick = function () {
            if (_this.radio) {
                _this.radio.handleClick();
            }
        };
        return _this;
    }

    _createClass(RadioItem, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                style = _props.style,
                radioStyle = _props.radioStyle,
                defaultChecked = _props.defaultChecked,
                checked = _props.checked,
                disabled = _props.disabled,
                children = _props.children,
                onChange = _props.onChange;

            return React.createElement(
                WithTheme,
                { styles: this.props.styles, themeStyles: RadioItemStyles },
                function (styles) {
                    var contentDom = null;
                    if (children && React.isValidElement(children)) {
                        contentDom = React.createElement(
                            View,
                            { style: { flex: 1 } },
                            children
                        );
                    } else {
                        var contentStyle = [styles.radioItemContent, disabled ? styles.radioItemContentDisable : {}];
                        contentDom = React.createElement(
                            Text,
                            { style: contentStyle, numberOfLines: 1 },
                            _this2.props.children
                        );
                    }
                    var radioEl = React.createElement(Radio, { ref: function ref(_ref) {
                            return _this2.radio = _ref;
                        }, style: radioStyle, defaultChecked: defaultChecked, checked: checked, onChange: onChange, disabled: disabled });
                    return React.createElement(
                        ListItem,
                        { style: style, onPress: disabled ? undefined : _this2.handleClick, extra: radioEl },
                        contentDom
                    );
                }
            );
        }
    }]);

    return RadioItem;
}(React.Component);

export default RadioItem;