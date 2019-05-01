import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import arrayTreeFilter from 'array-tree-filter';
import React from 'react';
import MultiPicker from '../MultiPicker';
import Picker from '../Picker';

var Cascader = function (_React$Component) {
    _inherits(Cascader, _React$Component);

    function Cascader() {
        _classCallCheck(this, Cascader);

        var _this = _possibleConstructorReturn(this, (Cascader.__proto__ || Object.getPrototypeOf(Cascader)).apply(this, arguments));

        _this.state = {
            value: _this.getValue(_this.props.data, _this.props.defaultValue || _this.props.value)
        };
        _this.onValueChange = function (value, index) {
            var children = arrayTreeFilter(_this.props.data, function (c, level) {
                return level <= index && c.value === value[level];
            });
            var data = children[index];
            var i = void 0;
            for (i = index + 1; data && data.children && data.children.length && i < _this.props.cols; i++) {
                data = data.children[0];
                value[i] = data.value;
            }
            value.length = i;
            if (!('value' in _this.props)) {
                _this.setState({
                    value: value
                });
            }
            if (_this.props.onChange) {
                _this.props.onChange(value);
            }
        };
        return _this;
    }

    _createClass(Cascader, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                this.setState({
                    value: this.getValue(nextProps.data, nextProps.value)
                });
            }
        }
    }, {
        key: 'getValue',
        value: function getValue(d, val) {
            var data = d || this.props.data;
            var value = val || this.props.value || this.props.defaultValue;
            var level = 0;
            var nextValue = [];
            if (value && value.length) {
                do {
                    var index = data.findIndex(function (item) {
                        return item.value === value[level];
                    });
                    if (index < 0) {
                        break;
                    }
                    nextValue[level] = value[level];
                    level += 1;
                    data = data[index].children || [];
                } while (data.length > 0);
            }
            for (var i = level; i < this.props.cols; i++) {
                if (data && data.length) {
                    nextValue[i] = data[0].value;
                    data = data[0].children;
                } else {
                    break;
                }
            }
            return nextValue;
        }
    }, {
        key: 'getCols',
        value: function getCols() {
            var _props = this.props,
                data = _props.data,
                cols = _props.cols,
                disabled = _props.disabled,
                pickerItemStyle = _props.pickerItemStyle,
                indicatorStyle = _props.indicatorStyle;

            var value = this.state.value;
            var childrenTree = arrayTreeFilter(data, function (c, level) {
                return c.value === value[level];
            }).map(function (c) {
                return c.children;
            });
            // in case the users data is async get when select change
            var needPad = cols - childrenTree.length;
            if (needPad > 0) {
                for (var i = 0; i < needPad; i++) {
                    childrenTree.push([]);
                }
            }
            childrenTree.length = cols - 1;
            childrenTree.unshift(data);
            return childrenTree.map(function () {
                var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                var level = arguments[1];
                return React.createElement(
                    Picker,
                    { key: level, style: { flex: 1 }, disabled: disabled, itemStyle: pickerItemStyle, indicatorStyle: indicatorStyle },
                    children.map(function (item) {
                        return React.createElement(
                            Picker.Item,
                            { value: item.value, key: item.value },
                            item.label
                        );
                    })
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var props = this.props;
            var rootNativeProps = props.rootNativeProps,
                style = props.style;

            var cols = this.getCols();
            return React.createElement(
                MultiPicker,
                { style: [{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }, style], selectedValue: this.state.value, rootNativeProps: rootNativeProps, onValueChange: this.onValueChange, onScrollChange: props.onScrollChange },
                cols
            );
        }
    }]);

    return Cascader;
}(React.Component);

Cascader.defaultProps = {
    cols: 3,
    data: [],
    disabled: false
};
export default Cascader;