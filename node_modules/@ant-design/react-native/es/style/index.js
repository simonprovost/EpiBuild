import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _extends from 'babel-runtime/helpers/extends';
import deepmerge from 'deepmerge';
import React, { useContext } from 'react';
import defaultTheme from './themes/default';
export var ThemeContext = React.createContext(defaultTheme);
export var ThemeProvider = function ThemeProvider(props) {
    var theme = _extends({}, defaultTheme, props.value);
    return React.createElement(
        ThemeContext.Provider,
        { value: theme },
        props.children
    );
};
export var useTheme = function useTheme() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var theme = useContext(ThemeContext);
    return _extends({}, theme, props.theme);
};
export var WithTheme = function (_React$Component) {
    _inherits(WithTheme, _React$Component);

    function WithTheme() {
        _classCallCheck(this, WithTheme);

        var _this = _possibleConstructorReturn(this, (WithTheme.__proto__ || Object.getPrototypeOf(WithTheme)).apply(this, arguments));

        _this.getStyles = function (theme) {
            var _this$props = _this.props,
                themeStyles = _this$props.themeStyles,
                styles = _this$props.styles;

            var defaultThemeStyles = themeStyles(theme);
            if (styles) {
                // TODO: check these styles has changed
                // merge styles from user defined
                return deepmerge(defaultThemeStyles, styles);
            }
            return defaultThemeStyles;
        };
        return _this;
    }

    _createClass(WithTheme, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                ThemeContext.Consumer,
                null,
                function (theme) {
                    return _this2.props.children(_this2.getStyles(theme), theme);
                }
            );
        }
    }]);

    return WithTheme;
}(React.Component);
WithTheme.defaultProps = {
    themeStyles: function themeStyles() {}
};