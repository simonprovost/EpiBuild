'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _style = require('../style');

var _index = require('./style/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Checkbox = function (_React$Component) {
    (0, _inherits3['default'])(Checkbox, _React$Component);

    function Checkbox(props, context) {
        (0, _classCallCheck3['default'])(this, Checkbox);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props, context));

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

    (0, _createClass3['default'])(Checkbox, [{
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
            return _react2['default'].createElement(
                _style.WithTheme,
                { themeStyles: _index2['default'], styles: this.props.styles },
                function (styles, theme) {
                    var icon = void 0;
                    if (checked) {
                        icon = disabled ? _react2['default'].createElement(_icon2['default'], { name: 'check-square', style: [styles.icon, style] }) : _react2['default'].createElement(_icon2['default'], { name: 'check-square', color: theme.brand_primary, style: [styles.icon, style] });
                    } else {
                        icon = disabled ? _react2['default'].createElement(_icon2['default'], { name: 'border', style: [styles.icon, style] }) : _react2['default'].createElement(_icon2['default'], { name: 'border', color: theme.brand_primary, style: [styles.icon, style] });
                    }
                    return _react2['default'].createElement(
                        _reactNative.TouchableWithoutFeedback,
                        { onPress: _this2.handleClick },
                        _react2['default'].createElement(
                            _reactNative.View,
                            { style: [styles.wrapper] },
                            icon,
                            typeof children === 'string' ?
                            // tslint:disable-next-line:jsx-no-multiline-js
                            _react2['default'].createElement(
                                _reactNative.Text,
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
}(_react2['default'].Component);

exports['default'] = Checkbox;
module.exports = exports['default'];