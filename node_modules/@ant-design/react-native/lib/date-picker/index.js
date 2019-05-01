'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../picker/style/index');

var _index2 = _interopRequireDefault(_index);

var _style = require('../style');

var _getLocale = require('../_util/getLocale');

var _datepicker = require('./datepicker');

var _datepicker2 = _interopRequireDefault(_datepicker);

var _Popup = require('./datepicker/Popup');

var _Popup2 = _interopRequireDefault(_Popup);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var DatePicker = function (_React$Component) {
    (0, _inherits3['default'])(DatePicker, _React$Component);

    function DatePicker() {
        (0, _classCallCheck3['default'])(this, DatePicker);
        return (0, _possibleConstructorReturn3['default'])(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).apply(this, arguments));
    }

    (0, _createClass3['default'])(DatePicker, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                children = _props.children,
                value = _props.value,
                itemStyle = _props.itemStyle;

            var locale = (0, _getLocale.getComponentLocale)(this.props, this.context, 'DatePicker', function () {
                return require('./locale/zh_CN');
            });
            var okText = locale.okText,
                dismissText = locale.dismissText,
                extra = locale.extra,
                DatePickerLocale = locale.DatePickerLocale;

            var dataPicker = _react2['default'].createElement(_datepicker2['default'], { minuteStep: this.props.minuteStep, locale: DatePickerLocale, mode: this.props.mode, minDate: this.props.minDate, maxDate: this.props.maxDate, defaultDate: value, onValueChange: this.props.onValueChange, itemStyle: itemStyle });
            return _react2['default'].createElement(
                _style.WithTheme,
                { styles: this.props.styles, themeStyles: _index2['default'] },
                function (styles) {
                    return _react2['default'].createElement(
                        _Popup2['default'],
                        (0, _extends3['default'])({ datePicker: dataPicker, styles: styles }, _this2.props, { date: value, dismissText: _this2.props.dismissText || dismissText, okText: _this2.props.okText || okText }),
                        children && _react2['default'].isValidElement(children) && _react2['default'].cloneElement(children, {
                            extra: value ? (0, _utils.formatProps)(_this2.props, value) : _this2.props.extra || extra
                        })
                    );
                }
            );
        }
    }]);
    return DatePicker;
}(_react2['default'].Component);

exports['default'] = DatePicker;

DatePicker.defaultProps = {
    mode: 'datetime',
    triggerType: 'onPress',
    minuteStep: 1
};
DatePicker.contextTypes = {
    antLocale: _propTypes2['default'].object
};
module.exports = exports['default'];