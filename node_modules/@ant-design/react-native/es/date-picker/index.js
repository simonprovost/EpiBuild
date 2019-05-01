import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import PropTypes from 'prop-types';
import React from 'react';
import PickerStyles from '../picker/style/index';
import { WithTheme } from '../style';
import { getComponentLocale } from '../_util/getLocale';
import AntDatePicker from './datepicker';
import PopupDatePicker from './datepicker/Popup';
import { formatProps } from './utils';

var DatePicker = function (_React$Component) {
    _inherits(DatePicker, _React$Component);

    function DatePicker() {
        _classCallCheck(this, DatePicker);

        return _possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).apply(this, arguments));
    }

    _createClass(DatePicker, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                children = _props.children,
                value = _props.value,
                itemStyle = _props.itemStyle;

            var locale = getComponentLocale(this.props, this.context, 'DatePicker', function () {
                return require('./locale/zh_CN');
            });
            var okText = locale.okText,
                dismissText = locale.dismissText,
                extra = locale.extra,
                DatePickerLocale = locale.DatePickerLocale;

            var dataPicker = React.createElement(AntDatePicker, { minuteStep: this.props.minuteStep, locale: DatePickerLocale, mode: this.props.mode, minDate: this.props.minDate, maxDate: this.props.maxDate, defaultDate: value, onValueChange: this.props.onValueChange, itemStyle: itemStyle });
            return React.createElement(
                WithTheme,
                { styles: this.props.styles, themeStyles: PickerStyles },
                function (styles) {
                    return React.createElement(
                        PopupDatePicker,
                        _extends({ datePicker: dataPicker, styles: styles }, _this2.props, { date: value, dismissText: _this2.props.dismissText || dismissText, okText: _this2.props.okText || okText }),
                        children && React.isValidElement(children) && React.cloneElement(children, {
                            extra: value ? formatProps(_this2.props, value) : _this2.props.extra || extra
                        })
                    );
                }
            );
        }
    }]);

    return DatePicker;
}(React.Component);

export default DatePicker;

DatePicker.defaultProps = {
    mode: 'datetime',
    triggerType: 'onPress',
    minuteStep: 1
};
DatePicker.contextTypes = {
    antLocale: PropTypes.object
};