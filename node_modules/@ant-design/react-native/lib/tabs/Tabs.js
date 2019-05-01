'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Tabs = undefined;

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

var _style = require('../style');

var _view = require('../view');

var _view2 = _interopRequireDefault(_view);

var _DefaultTabBar = require('./DefaultTabBar');

var _tabs = require('./style/tabs');

var _tabs2 = _interopRequireDefault(_tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var instanceId = 0;

var Tabs = exports.Tabs = function (_React$PureComponent) {
    (0, _inherits3['default'])(Tabs, _React$PureComponent);

    function Tabs(props) {
        (0, _classCallCheck3['default'])(this, Tabs);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

        _this.tabCache = {};
        _this.setScrollView = function (sv) {
            _this.scrollView = sv;
            _this.scrollTo(_this.state.currentTab);
        };
        _this.renderContent = function () {
            var getSubElements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.getSubElements();
            var _this$props = _this.props,
                tabs = _this$props.tabs,
                usePaged = _this$props.usePaged,
                destroyInactiveTab = _this$props.destroyInactiveTab,
                keyboardShouldPersistTaps = _this$props.keyboardShouldPersistTaps;
            var _this$state = _this.state,
                _this$state$currentTa = _this$state.currentTab,
                currentTab = _this$state$currentTa === undefined ? 0 : _this$state$currentTa,
                _this$state$container = _this$state.containerWidth,
                containerWidth = _this$state$container === undefined ? 0 : _this$state$container;

            var content = tabs.map(function (tab, index) {
                var key = tab.key || 'tab_' + index;
                // update tab cache
                if (_this.shouldRenderTab(index)) {
                    _this.tabCache[index] = _this.getSubElement(tab, index, getSubElements);
                } else if (destroyInactiveTab) {
                    _this.tabCache[index] = undefined;
                }
                return _react2['default'].createElement(
                    _view2['default'],
                    { key: key
                        // active={currentTab === index}
                        , style: { width: containerWidth } },
                    _this.tabCache[index]
                );
            });
            if (_reactNative.Platform.OS === 'android') {
                return _react2['default'].createElement(
                    _reactNative.ViewPagerAndroid,
                    { key: '$content', keyboardDismissMode: 'on-drag', initialPage: currentTab, scrollEnabled: _this.props.swipeable || usePaged, onPageScroll: function onPageScroll(e) {
                            _this.state.scrollX.setValue(e.nativeEvent.position * _this.state.containerWidth);
                        }, style: { flex: 1 }, onPageSelected: function onPageSelected(e) {
                            var index = e.nativeEvent.position;
                            _this.setState({
                                currentTab: index
                            }, function () {
                                // tslint:disable-next-line:no-unused-expression
                                _this.props.onChange && _this.props.onChange(tabs[index], index);
                            });
                            _this.nextCurrentTab = index;
                        }, ref: function ref(_ref) {
                            return _this.viewPager = _ref;
                        } },
                    content
                );
            }
            return _react2['default'].createElement(
                _reactNative.Animated.ScrollView,
                { key: '$content', horizontal: true, pagingEnabled: usePaged, automaticallyAdjustContentInsets: false, ref: _this.setScrollView, onScroll: _reactNative.Animated.event([{
                        nativeEvent: {
                            contentOffset: { x: _this.state.scrollX }
                        }
                    }], { useNativeDriver: true }), onMomentumScrollEnd: _this.onMomentumScrollEnd, scrollEventThrottle: 16, scrollsToTop: false, showsHorizontalScrollIndicator: false, scrollEnabled: _this.props.swipeable, directionalLockEnabled: true, alwaysBounceVertical: false, keyboardDismissMode: 'on-drag', keyboardShouldPersistTaps: keyboardShouldPersistTaps },
                content
            );
        };
        _this.onMomentumScrollEnd = function (e) {
            var offsetX = e.nativeEvent.contentOffset.x;
            var page = _this.getOffsetIndex(offsetX, _this.state.containerWidth);
            if (_this.state.currentTab !== page) {
                _this.goToTab(page);
            }
        };
        _this.handleLayout = function (e) {
            var width = e.nativeEvent.layout.width;

            requestAnimationFrame(function () {
                _this.scrollTo(_this.state.currentTab, false);
            });
            if (Math.round(width) !== Math.round(_this.state.containerWidth)) {
                _this.setState({ containerWidth: width });
            }
        };
        _this.scrollTo = function (index) {
            var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            if (_reactNative.Platform.OS === 'android') {
                if (_this.viewPager) {
                    if (animated) {
                        _this.viewPager.setPage(index);
                    } else {
                        _this.viewPager.setPageWithoutAnimation(index);
                    }
                    return;
                }
            }
            var containerWidth = _this.state.containerWidth;

            if (containerWidth) {
                var offset = index * containerWidth;
                if (_this.scrollView && _this.scrollView._component) {
                    var scrollTo = _this.scrollView._component.scrollTo;
                    // tslint:disable-next-line:no-unused-expression

                    scrollTo && scrollTo.call(_this.scrollView._component, { x: offset, animated: animated });
                }
            }
        };
        _this.isTabVertical = function () {
            var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props.tabDirection;
            return direction === 'vertical';
        };
        _this.shouldRenderTab = function (idx) {
            var _this$props$prerender = _this.props.prerenderingSiblingsNumber,
                prerenderingSiblingsNumber = _this$props$prerender === undefined ? 0 : _this$props$prerender;
            var _this$state$currentTa2 = _this.state.currentTab,
                currentTab = _this$state$currentTa2 === undefined ? 0 : _this$state$currentTa2;

            return currentTab - prerenderingSiblingsNumber <= idx && idx <= currentTab + prerenderingSiblingsNumber;
        };
        _this.getOffsetIndex = function (current, width) {
            var threshold = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this.props.distanceToChangeTab || 0;

            var ratio = Math.abs(current / width);
            var direction = ratio > _this.state.currentTab ? '<' : '>';
            var index = Math.floor(ratio);
            switch (direction) {
                case '<':
                    return ratio - index > threshold ? index + 1 : index;
                case '>':
                    return 1 - ratio + index > threshold ? index : index + 1;
                default:
                    return Math.round(ratio);
            }
        };
        _this.getSubElements = function () {
            var children = _this.props.children;

            var subElements = {};
            return function () {
                var defaultPrefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '$i$-';
                var allPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '$ALL$';

                if (Array.isArray(children)) {
                    children.forEach(function (child, index) {
                        if (child.key) {
                            subElements[child.key] = child;
                        }
                        subElements['' + defaultPrefix + index] = child;
                    });
                } else if (children) {
                    subElements[allPrefix] = children;
                }
                return subElements;
            };
        };
        var width = _reactNative.Dimensions.get('window').width;
        var pageIndex = _this.getTabIndex(props);
        _this.state = {
            currentTab: pageIndex,
            scrollX: new _reactNative.Animated.Value(pageIndex * width),
            scrollValue: new _reactNative.Animated.Value(pageIndex),
            containerWidth: width
        };
        _this.nextCurrentTab = _this.state.currentTab;
        _this.instanceId = instanceId++;
        return _this;
    }

    (0, _createClass3['default'])(Tabs, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.prevCurrentTab = this.state.currentTab;
            this.state.scrollX.addListener(function (_ref2) {
                var value = _ref2.value;

                var scrollValue = value / _this2.state.containerWidth;
                _this2.state.scrollValue.setValue(scrollValue);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                tabBarPosition = _props.tabBarPosition,
                noRenderContent = _props.noRenderContent,
                keyboardShouldPersistTaps = _props.keyboardShouldPersistTaps;
            var _state = this.state,
                scrollX = _state.scrollX,
                scrollValue = _state.scrollValue,
                containerWidth = _state.containerWidth;
            // let overlayTabs = (this.props.tabBarPosition === 'overlayTop' || this.props.tabBarPosition === 'overlayBottom');

            var overlayTabs = false;
            var tabBarProps = (0, _extends3['default'])({}, this.getTabBarBaseProps(), { keyboardShouldPersistTaps: keyboardShouldPersistTaps, scrollX: scrollX, scrollValue: scrollValue, containerWidth: containerWidth });
            if (overlayTabs) {
                // tabBarProps.style = {
                //     position: 'absolute',
                //     left: 0,
                //     right: 0,
                //     [this.props.tabBarPosition === 'overlayTop' ? 'top' : 'bottom']: 0,
                // };
            }
            return _react2['default'].createElement(
                _style.WithTheme,
                { styles: this.props.styles, themeStyles: _tabs2['default'] },
                function (styles) {
                    var content = [_react2['default'].createElement(
                        _view2['default'],
                        { key: '$tabbar', style: tabBarPosition === 'top' ? styles.topTabBarSplitLine : styles.bottomTabBarSplitLine },
                        _this3.renderTabBar(tabBarProps, _DefaultTabBar.DefaultTabBar)
                    ), !noRenderContent && _this3.renderContent()];
                    return _react2['default'].createElement(
                        _view2['default'],
                        { style: [styles.container, _this3.props.style], onLayout: _this3.handleLayout },
                        tabBarPosition === 'top' ? content : content.reverse()
                    );
                }
            );
        }
    }, {
        key: 'getTabIndex',
        value: function getTabIndex(props) {
            var page = props.page,
                initialPage = props.initialPage,
                tabs = props.tabs;

            var param = (page !== undefined ? page : initialPage) || 0;
            var index = 0;
            if (typeof param === 'string') {
                tabs.forEach(function (t, i) {
                    if (t.key === param) {
                        index = i;
                    }
                });
            } else {
                index = param || 0;
            }
            return index < 0 ? 0 : index;
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.page !== nextProps.page && nextProps.page !== undefined) {
                this.goToTab(this.getTabIndex(nextProps), true);
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.prevCurrentTab = this.state.currentTab;
        }
    }, {
        key: 'goToTab',
        value: function goToTab(index) {
            var _this4 = this;

            var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var newState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            if (!force && this.nextCurrentTab === index) {
                return false;
            }
            this.nextCurrentTab = index;
            var _props2 = this.props,
                tabs = _props2.tabs,
                onChange = _props2.onChange;

            if (index >= 0 && index < tabs.length) {
                if (!force) {
                    // tslint:disable-next-line:no-unused-expression
                    onChange && onChange(tabs[index], index);
                }
                this.setState((0, _extends3['default'])({ currentTab: index }, newState), function () {
                    requestAnimationFrame(function () {
                        _this4.scrollTo(_this4.state.currentTab, _this4.props.animated);
                    });
                });
            }
            return true;
        }
    }, {
        key: 'tabClickGoToTab',
        value: function tabClickGoToTab(index) {
            this.goToTab(index);
        }
    }, {
        key: 'getTabBarBaseProps',
        value: function getTabBarBaseProps() {
            var currentTab = this.state.currentTab;
            var _props3 = this.props,
                animated = _props3.animated,
                onTabClick = _props3.onTabClick,
                tabBarActiveTextColor = _props3.tabBarActiveTextColor,
                tabBarBackgroundColor = _props3.tabBarBackgroundColor,
                tabBarInactiveTextColor = _props3.tabBarInactiveTextColor,
                tabBarPosition = _props3.tabBarPosition,
                tabBarTextStyle = _props3.tabBarTextStyle,
                tabBarUnderlineStyle = _props3.tabBarUnderlineStyle,
                renderTab = _props3.renderTab,
                renderUnderline = _props3.renderUnderline,
                tabs = _props3.tabs;

            return {
                activeTab: currentTab,
                animated: !!animated,
                goToTab: this.tabClickGoToTab.bind(this),
                onTabClick: onTabClick,
                tabBarActiveTextColor: tabBarActiveTextColor,
                tabBarBackgroundColor: tabBarBackgroundColor,
                tabBarInactiveTextColor: tabBarInactiveTextColor,
                tabBarPosition: tabBarPosition,
                tabBarTextStyle: tabBarTextStyle,
                tabBarUnderlineStyle: tabBarUnderlineStyle,
                renderTab: renderTab,
                renderUnderline: renderUnderline,
                tabs: tabs,
                instanceId: this.instanceId
            };
        }
        // tslint:disable-next-line:no-shadowed-variable

    }, {
        key: 'renderTabBar',
        value: function renderTabBar(tabBarProps, DefaultTabBar) {
            var renderTabBar = this.props.renderTabBar;

            if (renderTabBar === false) {
                return null;
            } else if (renderTabBar) {
                return renderTabBar(tabBarProps);
            } else {
                return _react2['default'].createElement(DefaultTabBar, tabBarProps);
            }
        }
    }, {
        key: 'getSubElement',
        value: function getSubElement(tab, index, subElements) {
            var defaultPrefix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '$i$-';
            var allPrefix = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '$ALL$';

            var key = tab.key || '' + defaultPrefix + index;
            var elements = subElements(defaultPrefix, allPrefix);
            var component = elements[key] || elements[allPrefix];
            if (component instanceof Function) {
                component = component(tab, index);
            }
            return component || null;
        }
    }]);
    return Tabs;
}(_react2['default'].PureComponent);

Tabs.defaultProps = {
    tabBarPosition: 'top',
    initialPage: 0,
    swipeable: true,
    animated: true,
    prerenderingSiblingsNumber: 1,
    tabs: [],
    destroyInactiveTab: false,
    usePaged: true,
    tabDirection: 'horizontal',
    distanceToChangeTab: 0.3,
    style: {}
};
Tabs.DefaultTabBar = _DefaultTabBar.DefaultTabBar;