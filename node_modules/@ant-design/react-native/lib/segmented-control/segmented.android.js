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

var _normalizeCssColor = require('normalize-css-color');

var _normalizeCssColor2 = _interopRequireDefault(_normalizeCssColor);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _style = require('../style');

var _index = require('./style/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

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
    (0, _inherits3['default'])(SegmentedControl, _React$Component);

    function SegmentedControl(props) {
        (0, _classCallCheck3['default'])(this, SegmentedControl);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (SegmentedControl.__proto__ || Object.getPrototypeOf(SegmentedControl)).call(this, props));

        _this.state = {
            selectedIndex: props.selectedIndex
        };
        return _this;
    }

    (0, _createClass3['default'])(SegmentedControl, [{
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

            return _react2['default'].createElement(
                _style.WithTheme,
                { styles: this.props.styles, themeStyles: _index2['default'] },
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
                        var underlayColor = idx === selectedIndex ? tintColor : '#' + setNormalizedColorAlpha((0, _normalizeCssColor2['default'])(tintColor), 0.3).toString(16);
                        return _react2['default'].createElement(
                            _reactNative.TouchableHighlight,
                            { disabled: disabled, key: idx, onPress: function onPress(e) {
                                    return _this2.onPress(e, idx, value);
                                }, underlayColor: underlayColor, style: itemStyle, activeOpacity: 1 },
                            _react2['default'].createElement(
                                _reactNative.Text
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
                    return _react2['default'].createElement(
                        _reactNative.View,
                        { style: [styles.segment, segmentedStyle, style] },
                        items
                    );
                }
            );
        }
    }]);
    return SegmentedControl;
}(_react2['default'].Component);

exports['default'] = SegmentedControl;

SegmentedControl.defaultProps = {
    selectedIndex: 0,
    disabled: false,
    values: [],
    onChange: function onChange() {},
    onValueChange: function onValueChange() {},

    style: {}
};
module.exports = exports['default'];