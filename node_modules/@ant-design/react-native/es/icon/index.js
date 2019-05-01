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
import { IconOutline } from '@ant-design/icons-react-native';
import React from 'react';
import { WithTheme } from '../style';

var Icon = function (_React$Component) {
    _inherits(Icon, _React$Component);

    function Icon() {
        _classCallCheck(this, Icon);

        return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
    }

    _createClass(Icon, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                size = _a.size,
                color = _a.color,
                name = _a.name,
                rest = __rest(_a, ["size", "color", "name"]);
            var sizeMap = {
                xxs: 15,
                xs: 18,
                sm: 21,
                md: 22,
                lg: 36
            };
            var fontSize = typeof size === 'string' ? sizeMap[size] : size;
            return React.createElement(
                WithTheme,
                null,
                function (_, theme) {
                    return React.createElement(IconOutline, _extends({ size: fontSize, color: color || theme.color_icon_base, name: name }, rest));
                }
            );
        }
    }]);

    return Icon;
}(React.Component);

export default Icon;

Icon.defaultProps = {
    size: 'md'
};
Icon.displayName = 'Icon';