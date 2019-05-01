import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { isValidElement } from 'react';
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import Icon from '../icon';

var TabBarItem = function (_React$Component) {
    _inherits(TabBarItem, _React$Component);

    function TabBarItem() {
        _classCallCheck(this, TabBarItem);

        return _possibleConstructorReturn(this, (TabBarItem.__proto__ || Object.getPrototypeOf(TabBarItem)).apply(this, arguments));
    }

    _createClass(TabBarItem, [{
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
            var badgeDom = badge ? React.createElement(
                View,
                { style: [styles.badge] },
                React.createElement(
                    Text,
                    { style: [styles.badgeText] },
                    badge
                )
            ) : null;
            // icon
            var source = selected && selectedIcon !== undefined ? selectedIcon : icon !== undefined ? icon : null;
            var color = selected ? tintColor : unselectedTintColor;
            var isIcon = source && source.type && source.type.displayName === 'Icon';
            return React.createElement(
                TouchableWithoutFeedback,
                { onPress: onPress },
                React.createElement(
                    View,
                    { style: [styles.barItem, itemSelectedStyle] },
                    React.createElement(
                        View,
                        null,
                        source === null ? null : isValidElement(source) ? isIcon ? React.createElement(Icon, _extends({ color: color }, source.props)) : source : React.createElement(Image, { source: source, style: [styles.barIcon, iconStyle] }),
                        badgeDom
                    ),
                    React.createElement(
                        Text,
                        { style: [styles.barItemTitle, { color: color }] },
                        title
                    )
                )
            );
        }
    }]);

    return TabBarItem;
}(React.Component);

export default TabBarItem;

TabBarItem.defaultProps = {
    onPress: function onPress() {}
};