import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { isValidElement } from 'react';
import { Animated, Dimensions, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { WithTheme } from '../style';
import TabBarStyles from './style';
var WINDOW_WIDTH = Dimensions.get('window').width;
export var DefaultTabBar = function (_React$PureComponent) {
    _inherits(DefaultTabBar, _React$PureComponent);

    function DefaultTabBar(props) {
        _classCallCheck(this, DefaultTabBar);

        var _this = _possibleConstructorReturn(this, (DefaultTabBar.__proto__ || Object.getPrototypeOf(DefaultTabBar)).call(this, props));

        _this._tabsMeasurements = [];
        _this.updateView = function (offset) {
            var position = Math.floor(offset.value);
            var pageOffset = offset.value % 1;
            var tabCount = _this.props.tabs.length;
            var lastTabPosition = tabCount - 1;
            if (tabCount === 0 || offset.value < 0 || offset.value > lastTabPosition) {
                return;
            }
            if (_this.necessarilyMeasurementsCompleted(position, position === lastTabPosition)) {
                _this.updateTabPanel(position, pageOffset);
                _this.updateTabUnderline(position, pageOffset, tabCount);
            }
        };
        _this.onPress = function (index) {
            var _this$props = _this.props,
                goToTab = _this$props.goToTab,
                onTabClick = _this$props.onTabClick,
                tabs = _this$props.tabs;
            // tslint:disable-next-line:no-unused-expression

            onTabClick && onTabClick(tabs[index], index);
            // tslint:disable-next-line:no-unused-expression
            goToTab && goToTab(index);
        };
        _this.renderTab = function (tab, index, width, onLayoutHandler, styles, theme) {
            var _this$props2 = _this.props,
                activeTextColor = _this$props2.tabBarActiveTextColor,
                inactiveTextColor = _this$props2.tabBarInactiveTextColor,
                textStyle = _this$props2.tabBarTextStyle,
                activeTab = _this$props2.activeTab,
                renderTab = _this$props2.renderTab;

            var isTabActive = activeTab === index;
            var textColor = isTabActive ? activeTextColor || theme.activeTextColor : inactiveTextColor || theme.inactiveTextColor;
            return React.createElement(
                TouchableOpacity,
                { activeOpacity: 1, key: tab.title + '_' + index, accessible: true, accessibilityTraits: 'button', onPress: function onPress() {
                        return _this.onPress(index);
                    }, onLayout: onLayoutHandler },
                React.createElement(
                    View,
                    { style: _extends({}, StyleSheet.flatten(styles.tab), _this.props.tabStyle, { width: width }) },
                    renderTab ? renderTab(tab) : isValidElement(tab.title) ? tab.title : React.createElement(
                        Text,
                        { style: [_extends({ color: textColor }, StyleSheet.flatten(styles.textStyle)), textStyle] },
                        tab.title
                    )
                )
            );
        };
        _this.measureTab = function (page, event) {
            var _event$nativeEvent$la = event.nativeEvent.layout,
                x = _event$nativeEvent$la.x,
                width = _event$nativeEvent$la.width,
                height = _event$nativeEvent$la.height;

            _this._tabsMeasurements[page] = { left: x, right: x + width, width: width, height: height };
            _this.updateView({ value: _this.props.scrollValue._value });
        };
        _this.onTabContainerLayout = function (e) {
            _this._tabContainerMeasurements = e.nativeEvent.layout;
            var width = _this._tabContainerMeasurements.width;
            // fix: https://github.com/ant-design/ant-design-mobile-rn/issues/162
            // if (width < WINDOW_WIDTH) {
            // width = WINDOW_WIDTH;
            // }
            _this.setState({ _tabContainerWidth: width });
            if (!_this.props.dynamicTabUnderlineWidth) {
                _this.state._widthTabUnderline.setValue(width / _this.props.tabs.length);
            }
            _this.updateView({ value: _this.props.scrollValue._value });
        };
        _this.onContainerLayout = function (e) {
            _this._containerMeasurements = e.nativeEvent.layout;
            _this.setState({ _containerWidth: _this._containerMeasurements.width });
            _this.updateView({ value: _this.props.scrollValue._value });
        };
        _this.state = {
            _leftTabUnderline: new Animated.Value(0),
            _widthTabUnderline: new Animated.Value(0),
            _containerWidth: WINDOW_WIDTH,
            _tabContainerWidth: WINDOW_WIDTH
        };
        return _this;
    }

    _createClass(DefaultTabBar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.scrollValue.addListener(this.updateView);
        }
    }, {
        key: 'necessarilyMeasurementsCompleted',
        value: function necessarilyMeasurementsCompleted(position, isLastTab) {
            return this._tabsMeasurements[position] && (isLastTab || this._tabsMeasurements[position + 1]) && this._tabContainerMeasurements && this._containerMeasurements;
        }
    }, {
        key: 'updateTabPanel',
        value: function updateTabPanel(position, pageOffset) {
            var containerWidth = this._containerMeasurements.width;
            var tabWidth = this._tabsMeasurements[position].width;
            var nextTabMeasurements = this._tabsMeasurements[position + 1];
            var nextTabWidth = nextTabMeasurements && nextTabMeasurements.width || 0;
            var tabOffset = this._tabsMeasurements[position].left;
            var absolutePageOffset = pageOffset * tabWidth;
            var newScrollX = tabOffset + absolutePageOffset;
            newScrollX -= (containerWidth - (1 - pageOffset) * tabWidth - pageOffset * nextTabWidth) / 2;
            newScrollX = newScrollX >= 0 ? newScrollX : 0;
            if (Platform.OS === 'android') {
                this._scrollView.scrollTo({ x: newScrollX, y: 0, animated: false });
            } else {
                var rightBoundScroll = this._tabContainerMeasurements.width - this._containerMeasurements.width;
                newScrollX = newScrollX > rightBoundScroll ? rightBoundScroll : newScrollX;
                this._scrollView.scrollTo({ x: newScrollX, y: 0, animated: false });
            }
        }
    }, {
        key: 'updateTabUnderline',
        value: function updateTabUnderline(position, pageOffset, tabCount) {
            var dynamicTabUnderlineWidth = this.props.dynamicTabUnderlineWidth;

            if (0 <= position && position <= tabCount - 1) {
                if (dynamicTabUnderlineWidth) {
                    var nowLeft = this._tabsMeasurements[position].left;
                    var nowRight = this._tabsMeasurements[position].right;
                    var nextTabLeft = this._tabsMeasurements[position + 1].left;
                    var nextTabRight = this._tabsMeasurements[position + 1].right;
                    var newLineLeft = pageOffset * nextTabLeft + (1 - pageOffset) * nowLeft;
                    var newLineRight = pageOffset * nextTabRight + (1 - pageOffset) * nowRight;
                    this.state._leftTabUnderline.setValue(newLineLeft);
                    this.state._widthTabUnderline.setValue(newLineRight - newLineLeft);
                } else {
                    var _nowLeft = position * this.state._tabContainerWidth / tabCount;
                    var _nextTabLeft = (position + 1) * this.state._tabContainerWidth / tabCount;
                    var _newLineLeft = pageOffset * _nextTabLeft + (1 - pageOffset) * _nowLeft;
                    this.state._leftTabUnderline.setValue(_newLineLeft);
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                tabs = _props.tabs,
                _props$page = _props.page,
                page = _props$page === undefined ? 0 : _props$page,
                tabBarUnderlineStyle = _props.tabBarUnderlineStyle,
                tabBarBackgroundColor = _props.tabBarBackgroundColor,
                tabsContainerStyle = _props.tabsContainerStyle,
                renderUnderline = _props.renderUnderline,
                keyboardShouldPersistTaps = _props.keyboardShouldPersistTaps;

            return React.createElement(
                WithTheme,
                { styles: this.props.styles, themeStyles: TabBarStyles },
                function (styles, theme) {
                    var tabUnderlineStyle = _extends({ position: 'absolute', bottom: 0 }, StyleSheet.flatten(styles.underline), StyleSheet.flatten(tabBarUnderlineStyle));
                    var dynamicTabUnderline = {
                        left: _this2.state._leftTabUnderline,
                        width: _this2.state._widthTabUnderline
                    };
                    var tabWidth = _this2.state._containerWidth / Math.min(page, tabs.length);
                    var underlineProps = {
                        style: _extends({}, dynamicTabUnderline, tabUnderlineStyle)
                    };
                    return React.createElement(
                        View,
                        { style: [styles.container, {
                                backgroundColor: tabBarBackgroundColor
                            }], onLayout: _this2.onContainerLayout },
                        React.createElement(
                            ScrollView,
                            { ref: function ref(scrollView) {
                                    _this2._scrollView = scrollView;
                                }, horizontal: true, showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false, directionalLockEnabled: true, bounces: false, scrollsToTop: false, scrollEnabled: tabs.length > page, keyboardShouldPersistTaps: keyboardShouldPersistTaps, renderToHardwareTextureAndroid: true },
                            React.createElement(
                                View,
                                { style: [styles.tabs, _extends({}, tabsContainerStyle, { backgroundColor: tabBarBackgroundColor })], onLayout: _this2.onTabContainerLayout },
                                tabs.map(function (name, index) {
                                    var tab = { title: name };
                                    if (tabs.length - 1 >= index) {
                                        tab = tabs[index];
                                    }
                                    return _this2.renderTab(tab, index, tabWidth, _this2.measureTab.bind(_this2, index), styles, theme);
                                }),
                                renderUnderline ? renderUnderline(underlineProps.style) : React.createElement(Animated.View, underlineProps)
                            )
                        )
                    );
                }
            );
        }
    }]);

    return DefaultTabBar;
}(React.PureComponent);
DefaultTabBar.defaultProps = {
    animated: true,
    tabs: [],
    goToTab: function goToTab() {},
    activeTab: 0,
    page: 5,
    tabBarUnderlineStyle: {},
    tabBarBackgroundColor: '#fff',
    tabBarActiveTextColor: '',
    tabBarInactiveTextColor: '',
    tabBarTextStyle: {},
    dynamicTabUnderlineWidth: false
};