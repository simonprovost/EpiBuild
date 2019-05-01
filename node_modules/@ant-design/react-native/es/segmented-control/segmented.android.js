import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import normalizeColor from 'normalize-css-color';
import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { WithTheme } from '../style';
import AndroidStyles from './style/index';
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/**
 * number should be a color processed by `normalizeColor`
 * alpha should be number between 0 and 1
 */
function setNormalizedColorAlpha(input, alpha) {
    if (alpha < 0) {
        alpha = 0;
    } else if (alpha > 1) {
        alpha = 1;
    }
    alpha = Math.round(alpha * 255);
    // magic bitshift guarantees we return an unsigned int
    // tslint:disable-next-line:no-bitwise
    return (input & 0xffffff00 | alpha) >>> 0;
}

var SegmentedControl = function (_React$Component) {
    _inherits(SegmentedControl, _React$Component);

    function SegmentedControl(props) {
        _classCallCheck(this, SegmentedControl);

        var _this = _possibleConstructorReturn(this, (SegmentedControl.__proto__ || Object.getPrototypeOf(SegmentedControl)).call(this, props));

        _this.state = {
            selectedIndex: props.selectedIndex
        };
        return _this;
    }

    _createClass(SegmentedControl, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.selectedIndex !== this.props.selectedIndex) {
                this.setState({
                    selectedIndex: nextProps.selectedIndex
                });
            }
        }
    }, {
        key: 'onPress',
        value: function onPress(e, index, value) {
            var _props = this.props,
                disabled = _props.disabled,
                onChange = _props.onChange,
                onValueChange = _props.onValueChange;

            if (!disabled) {
                e.nativeEvent.selectedSegmentIndex = index;
                e.nativeEvent.value = value;
                if (onChange) {
                    onChange(e);
                }
                if (onValueChange) {
                    onValueChange(value);
                }
                this.setState({
                    selectedIndex: index
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props2 = this.props,
                style = _props2.style,
                disabled = _props2.disabled,
                _props2$values = _props2.values,
                values = _props2$values === undefined ? [] : _props2$values;
            var tintColor = this.props.tintColor;

            return React.createElement(
                WithTheme,
                { styles: this.props.styles, themeStyles: AndroidStyles },
                function (styles, theme) {
                    var selectedIndex = _this2.state.selectedIndex;
                    tintColor = tintColor || theme.segmented_control_color;
                    var items = values.map(function (value, idx) {
                        var itemRadius = null;
                        if (idx === 0) {
                            itemRadius = styles.itemLeftRadius;
                        } else if (idx === values.length - 1) {
                            itemRadius = styles.itemRightRadius;
                        }
                        var itemStyle = [styles.item, itemRadius, {
                            backgroundColor: idx === selectedIndex ? tintColor : 'transparent',
                            borderColor: tintColor
                        }];
                        var underlayColor = idx === selectedIndex ? tintColor : '#' + setNormalizedColorAlpha(normalizeColor(tintColor), 0.3).toString(16);
                        return React.createElement(
                            TouchableHighlight,
                            { disabled: disabled, key: idx, onPress: function onPress(e) {
                                    return _this2.onPress(e, idx, value);
                                }, underlayColor: underlayColor, style: itemStyle, activeOpacity: 1 },
                            React.createElement(
                                Text
                                // tslint:disable-next-line:jsx-no-multiline-js
                                ,
                                { style: [styles.itemText, { color: idx === selectedIndex ? '#fff' : tintColor }] },
                                value
                            )
                        );
                    });
                    var enabledOpacity = !disabled ? 1 : 0.5;
                    var segmentedStyle = {
                        opacity: enabledOpacity,
                        borderColor: tintColor
                    };
                    return React.createElement(
                        View,
                        { style: [styles.segment, segmentedStyle, style] },
                        items
                    );
                }
            );
        }
    }]);

    return SegmentedControl;
}(React.Component);

export default SegmentedControl;

SegmentedControl.defaultProps = {
    selectedIndex: 0,
    disabled: false,
    values: [],
    onChange: function onChange() {},
    onValueChange: function onValueChange() {},

    style: {}
};