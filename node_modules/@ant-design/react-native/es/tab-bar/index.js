import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { WithTheme } from '../style';
import TabBarStyles from './style/index';
import TabBarItem from './TabBarItem';

var TabBar = function (_React$Component) {
    _inherits(TabBar, _React$Component);

    function TabBar() {
        _classCallCheck(this, TabBar);

        return _possibleConstructorReturn(this, (TabBar.__proto__ || Object.getPrototypeOf(TabBar)).apply(this, arguments));
    }

    _createClass(TabBar, [{
        key: 'getPanes',
        value: function getPanes(styles, content) {
            var _props = this.props,
                tintColor = _props.tintColor,
                unselectedTintColor = _props.unselectedTintColor,
                children = _props.children;
            // ios 规则： selected 为多个则只选中最后一个， selected 为 0 个则选中第一个;

            var selectedIndex = 0;
            [].concat(children).forEach(function (child, idx) {
                if (child.props.selected) {
                    selectedIndex = idx;
                }
            });
            var newChildren = [];
            React.Children.map(children, function (child, idx) {
                if (content && selectedIndex === idx) {
                    newChildren.push(React.createElement(
                        View,
                        { key: idx, style: [styles.contentItem, idx === selectedIndex ? styles.contentItemSelected : undefined] },
                        child.props.children
                    ));
                } else {
                    newChildren.push(React.cloneElement(child, {
                        key: idx,
                        tintColor: tintColor,
                        unselectedTintColor: unselectedTintColor,
                        styles: styles
                    }));
                }
            });
            if (content) {
                return newChildren.filter(function (_, i) {
                    return i === selectedIndex;
                });
            }
            return newChildren;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var style = { backgroundColor: this.props.barTintColor };
            return React.createElement(
                SafeAreaView,
                { forceInset: { bottom: 'always', top: 'never' }, style: [{ flex: 1 }, style] },
                React.createElement(
                    WithTheme,
                    { styles: this.props.styles, themeStyles: TabBarStyles },
                    function (styles) {
                        return React.createElement(
                            View,
                            { style: styles.tabbar },
                            React.createElement(
                                View,
                                { style: styles.content },
                                _this2.getPanes(styles, true)
                            ),
                            React.createElement(
                                View,
                                { style: [style, styles.tabs] },
                                _this2.getPanes(styles, false)
                            )
                        );
                    }
                )
            );
        }
    }]);

    return TabBar;
}(React.Component);

TabBar.defaultProps = {
    barTintColor: 'white',
    tintColor: '#108ee9',
    unselectedTintColor: '#888'
};
TabBar.Item = TabBarItem;
export default TabBar;