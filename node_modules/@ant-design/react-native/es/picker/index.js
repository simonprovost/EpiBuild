import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
import treeFilter from 'array-tree-filter';
import PropTypes from 'prop-types';
import React from 'react';
import { WithTheme } from '../style';
import { getComponentLocale } from '../_util/getLocale';
import RMCCascader from './cascader';
import RMCPopupCascader from './cascader/Popup';
import MultiPicker from './MultiPicker';
import RMCPicker from './Picker';
import PickerStyles from './style';
export function getDefaultProps() {
    var defaultFormat = function defaultFormat(values) {
        return values.join(',');
    };
    return {
        triggerType: 'onPress',
        prefixCls: 'am-picker',
        pickerPrefixCls: 'am-picker-col',
        popupPrefixCls: 'am-picker-popup',
        format: defaultFormat,
        cols: 3,
        cascade: true,
        title: ''
    };
}

var Picker = function (_React$Component) {
    _inherits(Picker, _React$Component);

    function Picker() {
        _classCallCheck(this, Picker);

        var _this = _possibleConstructorReturn(this, (Picker.__proto__ || Object.getPrototypeOf(Picker)).apply(this, arguments));

        _this.getSel = function () {
            var value = _this.props.value || [];
            var treeChildren = void 0;
            var data = _this.props.data;

            if (_this.props.cascade) {
                treeChildren = treeFilter(data, function (c, level) {
                    return c.value === value[level];
                });
            } else {
                treeChildren = value.map(function (v, i) {
                    return data[i].filter(function (d) {
                        return d.value === v;
                    })[0];
                });
            }
            return _this.props.format && _this.props.format(treeChildren.map(function (v) {
                return v.label;
            }));
        };
        _this.getPickerCol = function () {
            var _this$props = _this.props,
                data = _this$props.data,
                itemStyle = _this$props.itemStyle,
                indicatorStyle = _this$props.indicatorStyle;

            return data.map(function (col, index) {
                return React.createElement(
                    RMCPicker,
                    { key: index, style: { flex: 1 }, itemStyle: itemStyle, indicatorStyle: indicatorStyle },
                    col.map(function (item) {
                        return React.createElement(
                            RMCPicker.Item,
                            { key: item.value, value: item.value },
                            item.label
                        );
                    })
                );
            });
        };
        _this.onOk = function (v) {
            if (_this.scrollValue !== undefined) {
                v = _this.scrollValue;
            }
            if (_this.props.onChange) {
                _this.props.onChange(v);
            }
            if (_this.props.onOk) {
                _this.props.onOk(v);
            }
        };
        _this.setScrollValue = function (v) {
            _this.scrollValue = v;
        };
        _this.setCasecadeScrollValue = function (v) {
            // 级联情况下保证数据正确性，滚动过程中只有当最后一级变化时才变更数据
            if (v && _this.scrollValue) {
                var length = _this.scrollValue.length;
                if (length === v.length && _this.scrollValue[length - 1] === v[length - 1]) {
                    return;
                }
            }
            _this.setScrollValue(v);
        };
        _this.fixOnOk = function (cascader) {
            if (cascader && cascader.onOk !== _this.onOk) {
                cascader.onOk = _this.onOk;
                cascader.forceUpdate();
            }
        };
        _this.onPickerChange = function (v) {
            _this.setScrollValue(v);
            if (_this.props.onPickerChange) {
                _this.props.onPickerChange(v);
            }
        };
        _this.onVisibleChange = function (visible) {
            _this.setScrollValue(undefined);
            if (_this.props.onVisibleChange) {
                _this.props.onVisibleChange(visible);
            }
        };
        _this.getCascade = function (cascade, data, cols, itemStyle, indicatorStyle) {
            var cascader = void 0;
            var popupMoreProps = {};
            if (cascade) {
                cascader = React.createElement(RMCCascader, { data: data, cols: cols, onChange: _this.onPickerChange, onScrollChange: _this.setCasecadeScrollValue, pickerItemStyle: itemStyle, indicatorStyle: indicatorStyle });
            } else {
                cascader = React.createElement(
                    MultiPicker,
                    { style: { flexDirection: 'row', alignItems: 'center' }, onScrollChange: _this.setScrollValue },
                    _this.getPickerCol()
                );
                popupMoreProps = {
                    pickerValueProp: 'selectedValue',
                    pickerValueChangeProp: 'onValueChange'
                };
            }
            return { cascader: cascader, popupMoreProps: popupMoreProps };
        };
        return _this;
    }

    _createClass(Picker, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _a = this.props,
                children = _a.children,
                _a$value = _a.value,
                value = _a$value === undefined ? [] : _a$value,
                popupPrefixCls = _a.popupPrefixCls,
                itemStyle = _a.itemStyle,
                indicatorStyle = _a.indicatorStyle,
                okText = _a.okText,
                dismissText = _a.dismissText,
                extra = _a.extra,
                cascade = _a.cascade,
                data = _a.data,
                cols = _a.cols,
                onOk = _a.onOk,
                restProps = __rest(_a, ["children", "value", "popupPrefixCls", "itemStyle", "indicatorStyle", "okText", "dismissText", "extra", "cascade", "data", "cols", "onOk"]);
            // tslint:disable-next-line:variable-name
            var _locale = getComponentLocale(this.props, this.context, 'Picker', function () {
                return require('./locale/zh_CN');
            });

            var _getCascade = this.getCascade(cascade, data, cols, itemStyle, indicatorStyle),
                cascader = _getCascade.cascader,
                popupMoreProps = _getCascade.popupMoreProps;

            return React.createElement(
                WithTheme,
                { styles: restProps.styles, themeStyles: PickerStyles },
                function (styles) {
                    return React.createElement(
                        RMCPopupCascader,
                        _extends({ cascader: cascader }, _this2.popupProps, restProps, { styles: styles, value: value, dismissText: dismissText || _locale.dismissText, okText: okText || _locale.okText }, popupMoreProps, { ref: _this2.fixOnOk, onVisibleChange: _this2.onVisibleChange }),
                        children && typeof children !== 'string' && React.isValidElement(children) && React.cloneElement(children, {
                            extra: _this2.getSel() || extra || _locale.extra
                        })
                    );
                }
            );
        }
    }]);

    return Picker;
}(React.Component);

export default Picker;

Picker.contextTypes = {
    antLocale: PropTypes.object
};
Picker.defaultProps = getDefaultProps();