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

var _index = require('../list/index');

var _index2 = _interopRequireDefault(_index);

var _style = require('../style');

var _Radio = require('./Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var _index3 = require('./style/index');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ListItem = _index2['default'].Item;

var RadioItem = function (_React$Component) {
    (0, _inherits3['default'])(RadioItem, _React$Component);

    function RadioItem() {
        (0, _classCallCheck3['default'])(this, RadioItem);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (RadioItem.__proto__ || Object.getPrototypeOf(RadioItem)).apply(this, arguments));

        _this.handleClick = function () {
            if (_this.radio) {
                _this.radio.handleClick();
            }
        };
        return _this;
    }

    (0, _createClass3['default'])(RadioItem, [{
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

            return _react2['default'].createElement(
                _style.WithTheme,
                { styles: this.props.styles, themeStyles: _index4['default'] },
                function (styles) {
                    var contentDom = null;
                    if (children && _react2['default'].isValidElement(children)) {
                        contentDom = _react2['default'].createElement(
                            _reactNative.View,
                            { style: { flex: 1 } },
                            children
                        );
                    } else {
                        var contentStyle = [styles.radioItemContent, disabled ? styles.radioItemContentDisable : {}];
                        contentDom = _react2['default'].createElement(
                            _reactNative.Text,
                            { style: contentStyle, numberOfLines: 1 },
                            _this2.props.children
                        );
                    }
                    var radioEl = _react2['default'].createElement(_Radio2['default'], { ref: function ref(_ref) {
                            return _this2.radio = _ref;
                        }, style: radioStyle, defaultChecked: defaultChecked, checked: checked, onChange: onChange, disabled: disabled });
                    return _react2['default'].createElement(
                        ListItem,
                        { style: style, onPress: disabled ? undefined : _this2.handleClick, extra: radioEl },
                        contentDom
                    );
                }
            );
        }
    }]);
    return RadioItem;
}(_react2['default'].Component);

exports['default'] = RadioItem;
module.exports = exports['default'];