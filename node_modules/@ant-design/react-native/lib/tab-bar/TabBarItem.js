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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var TabBarItem = function (_React$Component) {
    (0, _inherits3['default'])(TabBarItem, _React$Component);

    function TabBarItem() {
        (0, _classCallCheck3['default'])(this, TabBarItem);
        return (0, _possibleConstructorReturn3['default'])(this, (TabBarItem.__proto__ || Object.getPrototypeOf(TabBarItem)).apply(this, arguments));
    }

    (0, _createClass3['default'])(TabBarItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                title = _props.title,
                selected = _props.selected,
                tintColor = _props.tintColor,
                unselectedTintColor = _props.unselectedTintColor,
                icon = _props.icon,
                selectedIcon = _props.selectedIcon,
                onPress = _props.onPress,
                badge = _props.badge,
                iconStyle = _props.iconStyle;

            var styles = this.props.styles;
            var itemSelectedStyle = selected ? styles.barItemSelected : null;
            var badgeDom = badge ? _react2['default'].createElement(
                _reactNative.View,
                { style: [styles.badge] },
                _react2['default'].createElement(
                    _reactNative.Text,
                    { style: [styles.badgeText] },
                    badge
                )
            ) : null;
            // icon
            var source = selected && selectedIcon !== undefined ? selectedIcon : icon !== undefined ? icon : null;
            var color = selected ? tintColor : unselectedTintColor;
            var isIcon = source && source.type && source.type.displayName === 'Icon';
            return _react2['default'].createElement(
                _reactNative.TouchableWithoutFeedback,
                { onPress: onPress },
                _react2['default'].createElement(
                    _reactNative.View,
                    { style: [styles.barItem, itemSelectedStyle] },
                    _react2['default'].createElement(
                        _reactNative.View,
                        null,
                        source === null ? null : (0, _react.isValidElement)(source) ? isIcon ? _react2['default'].createElement(_icon2['default'], (0, _extends3['default'])({ color: color }, source.props)) : source : _react2['default'].createElement(_reactNative.Image, { source: source, style: [styles.barIcon, iconStyle] }),
                        badgeDom
                    ),
                    _react2['default'].createElement(
                        _reactNative.Text,
                        { style: [styles.barItemTitle, { color: color }] },
                        title
                    )
                )
            );
        }
    }]);
    return TabBarItem;
}(_react2['default'].Component);

exports['default'] = TabBarItem;

TabBarItem.defaultProps = {
    onPress: function onPress() {}
};
module.exports = exports['default'];