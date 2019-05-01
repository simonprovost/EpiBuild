import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
/* tslint:disable:no-console */
import React from 'react';
import { Text, View } from 'react-native';
import { DatePickerView } from '../../';

var DatePickerViewExample = function (_React$Component) {
    _inherits(DatePickerViewExample, _React$Component);

    function DatePickerViewExample() {
        _classCallCheck(this, DatePickerViewExample);

        var _this = _possibleConstructorReturn(this, (DatePickerViewExample.__proto__ || Object.getPrototypeOf(DatePickerViewExample)).apply(this, arguments));

        _this.state = {
            value: undefined,
            value12hours: undefined
        };
        _this.onChange = function (value) {
            console.log(value);
            _this.setState({ value: value });
        };
        _this.onValueChange = function () {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            console.log(args);
        };
        return _this;
    }

    _createClass(DatePickerViewExample, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                View,
                null,
                React.createElement(
                    Text,
                    { style: { margin: 16 } },
                    'use12Hours'
                ),
                React.createElement(DatePickerView, { value: this.state.value12hours, onChange: function onChange(v) {
                        return _this2.setState({ value12hours: v });
                    }, use12Hours: true }),
                React.createElement(
                    Text,
                    { style: { margin: 16 } },
                    'Start DateTime'
                ),
                React.createElement(DatePickerView, { value: this.state.value, onChange: this.onChange, onValueChange: this.onValueChange }),
                React.createElement(
                    Text,
                    { style: { margin: 16 } },
                    'End DateTime'
                ),
                React.createElement(DatePickerView, { value: this.state.value, onChange: this.onChange, onValueChange: this.onValueChange })
            );
        }
    }]);

    return DatePickerViewExample;
}(React.Component);

export default DatePickerViewExample;