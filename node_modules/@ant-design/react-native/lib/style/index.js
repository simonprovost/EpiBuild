'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WithTheme = exports.useTheme = exports.ThemeProvider = exports.ThemeContext = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _deepmerge = require('deepmerge');

var _deepmerge2 = _interopRequireDefault(_deepmerge);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _default = require('./themes/default');

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ThemeContext = exports.ThemeContext = _react2['default'].createContext(_default2['default']);
var ThemeProvider = exports.ThemeProvider = function ThemeProvider(props) {
    var theme = (0, _extends3['default'])({}, _default2['default'], props.value);
    return _react2['default'].createElement(
        ThemeContext.Provider,
        { value: theme },
        props.children
    );
};
var useTheme = exports.useTheme = function useTheme() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var theme = (0, _react.useContext)(ThemeContext);
    return (0, _extends3['default'])({}, theme, props.theme);
};

var WithTheme = exports.WithTheme = function (_React$Component) {
    (0, _inherits3['default'])(WithTheme, _React$Component);

    function WithTheme() {
        (0, _classCallCheck3['default'])(this, WithTheme);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (WithTheme.__proto__ || Object.getPrototypeOf(WithTheme)).apply(this, arguments));

        _this.getStyles = function (theme) {
            var _this$props = _this.props,
                themeStyles = _this$props.themeStyles,
                styles = _this$props.styles;

            var defaultThemeStyles = themeStyles(theme);
            if (styles) {
                // TODO: check these styles has changed
                // merge styles from user defined
                return (0, _deepmerge2['default'])(defaultThemeStyles, styles);
            }
            return defaultThemeStyles;
        };
        return _this;
    }

    (0, _createClass3['default'])(WithTheme, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2['default'].createElement(
                ThemeContext.Consumer,
                null,
                function (theme) {
                    return _this2.props.children(_this2.getStyles(theme), theme);
                }
            );
        }
    }]);
    return WithTheme;
}(_react2['default'].Component);

WithTheme.defaultProps = {
    themeStyles: function themeStyles() {}
};