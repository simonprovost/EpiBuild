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

var _default = require('../style/themes/default');

var _default2 = _interopRequireDefault(_default);

var _index = require('./style/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Radio = function (_React$Component) {
    (0, _inherits3['default'])(Radio, _React$Component);

    function Radio(props, context) {
        (0, _classCallCheck3['default'])(this, Radio);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).call(this, props, context));

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

    (0, _createClass3['default'])(Radio, [{
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

            return _react2['default'].createElement(
                _style.WithTheme,
                { styles: this.props.styles, themeStyles: _index2['default'] },
                function (styles) {
                    var checked = _this2.state.checked;
                    var icon = undefined;
                    if (checked) {
                        icon = disabled ? _react2['default'].createElement(_icon2['default'], { name: 'check', style: [styles.icon, style] }) : _react2['default'].createElement(_icon2['default'], { name: 'check', color: _default2['default'].brand_primary, style: [styles.icon, style] });
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
}(_react2['default'].Component);

exports['default'] = Radio;
module.exports = exports['default'];