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

var _index = require('../list/index');

var _index2 = _interopRequireDefault(_index);

var _style = require('../style');

var _Checkbox = require('./Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _index3 = require('./style/index');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ListItem = _index2['default'].Item;

var CheckboxItem = function (_React$Component) {
    (0, _inherits3['default'])(CheckboxItem, _React$Component);

    function CheckboxItem() {
        (0, _classCallCheck3['default'])(this, CheckboxItem);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (CheckboxItem.__proto__ || Object.getPrototypeOf(CheckboxItem)).apply(this, arguments));

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

    (0, _createClass3['default'])(CheckboxItem, [{
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

            var thumbNode = _react2['default'].createElement(
                _style.WithTheme,
                { styles: this.props.styles, themeStyles: _index4['default'] },
                function (styles) {
                    return _react2['default'].createElement(_Checkbox2['default'], { ref: function ref(_ref) {
                            return _this2.checkbox = _ref;
                        }, style: [styles.checkboxItemCheckbox, checkboxStyle], defaultChecked: defaultChecked, checked: checked, onChange: onChange, disabled: disabled });
                }
            );
            return _react2['default'].createElement(
                ListItem,
                { style: style, onPress: disabled ? undefined : this.handleClick, extra: extra, thumb: thumbNode },
                children
            );
        }
    }]);
    return CheckboxItem;
}(_react2['default'].Component);

exports['default'] = CheckboxItem;
module.exports = exports['default'];