import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { InteractionManager, Platform, ScrollView, Text, View } from 'react-native';
import { WithTheme } from '../style';
import CarouselStyles from './style/index';
var defaultPagination = function defaultPagination(props) {
    var styles = props.styles,
        current = props.current,
        vertical = props.vertical,
        count = props.count,
        dotStyle = props.dotStyle,
        dotActiveStyle = props.dotActiveStyle;

    var positionStyle = vertical ? 'paginationY' : 'paginationX';
    var flexDirection = vertical ? 'column' : 'row';
    var arr = [];
    for (var i = 0; i < count; i++) {
        arr.push(React.createElement(View, { key: 'dot-' + i, style: [styles.pointStyle, styles.spaceStyle, dotStyle, i === current && styles.pointActiveStyle, i === current && dotActiveStyle] }));
    }
    return React.createElement(
        View,
        { style: [styles.pagination, styles[positionStyle]] },
        React.createElement(
            View,
            { style: { flexDirection: flexDirection } },
            arr
        )
    );
};

var Carousel = function (_React$Component) {
    _inherits(Carousel, _React$Component);

    function Carousel(props) {
        _classCallCheck(this, Carousel);

        var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

        _this.getChildrenCount = function (children) {
            var count = children ? React.Children.count(children) || 1 : 0;
            return count;
        };
        _this.loopJump = function () {
            var _this$state = _this.state,
                loopJump = _this$state.loopJump,
                selectedIndex = _this$state.selectedIndex,
                width = _this$state.width,
                height = _this$state.height;
            var _this$props = _this.props,
                infinite = _this$props.infinite,
                vertical = _this$props.vertical;
            // iOS 通过 contentOffet 可以平滑过度，不需要做处理

            if (loopJump && Platform.OS === 'android') {
                var _index = selectedIndex + (infinite ? 1 : 0);
                var x = 0;
                var y = 0;
                if (vertical) {
                    y = height * _index;
                } else {
                    x = width * _index;
                }
                // FIXME: not work well in android when horizontal
                setTimeout(function () {
                    // tslint:disable-next-line:no-unused-expression
                    _this.scrollviewRef && _this.scrollviewRef.scrollTo({ x: x, y: y, animated: false });
                }, 10);
            }
        };
        _this.autoplay = function () {
            var _this$props2 = _this.props,
                children = _this$props2.children,
                autoplay = _this$props2.autoplay,
                infinite = _this$props2.infinite,
                autoplayInterval = _this$props2.autoplayInterval;
            var _this$state2 = _this.state,
                isScrolling = _this$state2.isScrolling,
                autoplayEnd = _this$state2.autoplayEnd,
                selectedIndex = _this$state2.selectedIndex;

            var count = _this.getChildrenCount(children);
            if (!Array.isArray(children) || !autoplay || isScrolling || autoplayEnd) {
                return;
            }
            clearTimeout(_this.autoplayTimer);
            _this.autoplayTimer = setTimeout(function () {
                if (!infinite && selectedIndex === count - 1) {
                    // !infinite && last one, autoplay end
                    return _this.setState({ autoplayEnd: true });
                }
                _this.scrollNextPage();
            }, autoplayInterval);
        };
        _this.onScrollBegin = function (e) {
            _this.setState({
                isScrolling: true
            }, function () {
                if (_this.props.onScrollBeginDrag) {
                    _this.props.onScrollBeginDrag(e, _this.state, _this);
                }
            });
        };
        _this.onScrollEnd = function (e) {
            _this.setState({ isScrolling: false });
            // android incompatible
            if (!e.nativeEvent.contentOffset) {
                // kind of hack ? see: line 282
                var position = e.nativeEvent.position;
                e.nativeEvent.contentOffset = {
                    x: position * _this.state.width,
                    y: position * _this.state.height
                };
            }
            _this.updateIndex(e.nativeEvent.contentOffset);
            _this.scrollEndTimter = setTimeout(function () {
                _this.autoplay();
                _this.loopJump();
                if (_this.props.onMomentumScrollEnd) {
                    _this.props.onMomentumScrollEnd(e, _this.state, _this);
                }
            });
        };
        _this.onScrollEndDrag = function (e) {
            var _this$state3 = _this.state,
                offset = _this$state3.offset,
                selectedIndex = _this$state3.selectedIndex;
            var _this$props3 = _this.props,
                vertical = _this$props3.vertical,
                children = _this$props3.children;

            var previousOffset = vertical ? offset.y : offset.x;
            var newOffset = vertical ? e.nativeEvent.contentOffset.y : e.nativeEvent.contentOffset.x;
            var count = _this.getChildrenCount(children);
            if (previousOffset === newOffset && (selectedIndex === 0 || selectedIndex === count - 1)) {
                _this.setState({
                    isScrolling: false
                });
            }
            // pagingEnabled: Vertical pagination is not supported on Android.
            // implement android vertical paging
            // if upgrade rn to 0.53, can use snapToInterval to implement vertical paging
            _this.paging(e.nativeEvent.contentOffset.y);
        };
        _this.paging = function (offsetY) {
            var height = _this.state.height;
            var _this$props4 = _this.props,
                vertical = _this$props4.vertical,
                infinite = _this$props4.infinite;

            if (Platform.OS === 'android' && vertical) {
                var _selectedIndex = Math.round(offsetY / height) - (infinite ? 1 : 0);
                // tslint:disable-next-line:no-unused-expression
                _this.scrollviewRef && _this.scrollviewRef.scrollTo({
                    x: 0,
                    y: (_selectedIndex + (infinite ? 1 : 0)) * height
                });
                // if drag ScrollView, not slide ScrollView, onScrollEnd is not triggered, so need to manually trigger onScrollEnd
                if (Platform.OS === 'android' && vertical) {
                    _this.onScrollEnd({
                        nativeEvent: {
                            position: _selectedIndex + (infinite ? 1 : 0)
                        }
                    });
                }
            }
        };
        _this.updateIndex = function (offset) {
            var _this$props5 = _this.props,
                vertical = _this$props5.vertical,
                children = _this$props5.children,
                infinite = _this$props5.infinite,
                afterChange = _this$props5.afterChange;
            var _this$state4 = _this.state,
                _this$state4$offset = _this$state4.offset,
                x = _this$state4$offset.x,
                y = _this$state4$offset.y,
                height = _this$state4.height,
                width = _this$state4.width;
            var selectedIndex = _this.state.selectedIndex;

            var diff = vertical ? offset.y - y : offset.x - x;
            var step = vertical ? height : width;
            var loopJump = false;
            var count = _this.getChildrenCount(children);
            // Do nothing if offset no change.
            if (!diff) {
                return;
            }
            selectedIndex = selectedIndex + Math.round(diff / step);
            if (infinite) {
                if (selectedIndex <= -1) {
                    selectedIndex = count - 1;
                    if (vertical) {
                        offset.y = step * count;
                    } else {
                        offset.x = step * count;
                    }
                    loopJump = true;
                } else if (selectedIndex >= count) {
                    selectedIndex = 0;
                    if (vertical) {
                        offset.y = step;
                    } else {
                        offset.x = step;
                    }
                    loopJump = true;
                }
            }
            _this.setState({
                selectedIndex: selectedIndex,
                offset: offset,
                loopJump: loopJump
            });
            if (afterChange) {
                afterChange(selectedIndex);
            }
        };
        _this.scrollNextPage = function () {
            var _this$state5 = _this.state,
                isScrolling = _this$state5.isScrolling,
                selectedIndex = _this$state5.selectedIndex,
                width = _this$state5.width,
                height = _this$state5.height;
            var _this$props6 = _this.props,
                children = _this$props6.children,
                infinite = _this$props6.infinite,
                vertical = _this$props6.vertical;

            var count = _this.getChildrenCount(children);
            if (isScrolling || count < 2) {
                return;
            }
            var diff = (infinite ? 1 : 0) + selectedIndex + 1;
            if (vertical) {
                // tslint:disable-next-line:no-unused-expression
                _this.scrollviewRef && _this.scrollviewRef.scrollTo({ x: 0, y: diff * height });
            } else {
                // tslint:disable-next-line:no-unused-expression
                _this.scrollviewRef && _this.scrollviewRef.scrollTo({ x: diff * width, y: 0 });
            }
            _this.setState({
                isScrolling: true,
                autoplayEnd: false
            });
            // trigger onScrollEnd manually in android
            if (Platform.OS === 'android') {
                _this.androidScrollEndTimer = setTimeout(function () {
                    _this.onScrollEnd({
                        nativeEvent: {
                            position: diff
                        }
                    });
                }, 0);
            }
        };
        _this.renderContent = function (pages) {
            var others = {
                onScrollBeginDrag: _this.onScrollBegin,
                onMomentumScrollEnd: _this.onScrollEnd,
                onScrollEndDrag: _this.onScrollEndDrag
            };
            return React.createElement(
                ScrollView,
                _extends({ ref: function ref(el) {
                        return _this.scrollviewRef = el;
                    } }, _this.props, { horizontal: !_this.props.vertical, pagingEnabled: true, bounces: !!_this.props.bounces, scrollEventThrottle: 100, removeClippedSubviews: false, automaticallyAdjustContentInsets: false, directionalLockEnabled: true, showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false, contentContainerStyle: _this.props.style, contentOffset: _this.state.offset }, others),
                pages
            );
        };
        _this.renderDots = function (index) {
            var _this$props7 = _this.props,
                children = _this$props7.children,
                vertical = _this$props7.vertical,
                pagination = _this$props7.pagination,
                dotStyle = _this$props7.dotStyle,
                dotActiveStyle = _this$props7.dotActiveStyle;

            if (!pagination) {
                return null;
            }
            var count = _this.getChildrenCount(children);
            return React.createElement(
                WithTheme,
                { themeStyles: CarouselStyles, styles: _this.props.styles },
                function (styles) {
                    return pagination({
                        styles: styles,
                        vertical: vertical,
                        current: index,
                        count: count,
                        dotStyle: dotStyle,
                        dotActiveStyle: dotActiveStyle
                    });
                }
            );
        };
        _this.onLayout = function (e) {
            // for horizontal, get width, scollTo
            // for vertical, get height, scollTo
            var _this$props8 = _this.props,
                children = _this$props8.children,
                infinite = _this$props8.infinite,
                vertical = _this$props8.vertical;

            var count = _this.getChildrenCount(children);
            var selectedIndex = count > 1 ? Math.min(_this.props.selectedIndex, count - 1) : 0;
            var width = e.nativeEvent.layout.width;
            var offsetX = vertical ? 0 : width * (selectedIndex + (infinite ? 1 : 0));
            var offsetY = vertical ? _this.state.height * (selectedIndex + (infinite ? 1 : 0)) : 0;
            _this.setState({
                width: width,
                offset: { x: offsetX, y: offsetY }
            }, function () {
                if (Platform.OS === 'android') {
                    // scrollview has a layout animation when create, must delay to call scrollTo after the animation
                    InteractionManager.runAfterInteractions(function () {
                        return _this.scrollviewRef && _this.scrollviewRef.scrollTo({
                            x: offsetX,
                            y: offsetY,
                            animated: false
                        });
                    });
                }
            });
        };
        _this.onChildLayout = function (e) {
            if (_this.props.vertical) {
                _this.setState({ height: e.nativeEvent.layout.height });
            }
        };
        var _this$props9 = _this.props,
            children = _this$props9.children,
            selectedIndex = _this$props9.selectedIndex;

        var count = _this.getChildrenCount(children);
        var index = count > 1 ? Math.min(selectedIndex, count - 1) : 0;
        _this.state = {
            width: 0,
            height: 0,
            isScrolling: false,
            autoplayEnd: false,
            loopJump: false,
            selectedIndex: index,
            offset: { x: 0, y: 0 }
        };
        return _this;
    }

    _createClass(Carousel, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.autoplay();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearTimeout(this.autoplayTimer);
            clearTimeout(this.androidScrollEndTimer);
            clearTimeout(this.scrollEndTimter);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                width = _state.width,
                height = _state.height,
                selectedIndex = _state.selectedIndex;
            var _props = this.props,
                dots = _props.dots,
                infinite = _props.infinite,
                children = _props.children;

            if (!children) {
                return React.createElement(
                    Text,
                    { style: { backgroundColor: 'white' } },
                    'You are supposed to add children inside Carousel'
                );
            }
            var pageStyle = { width: width };
            var count = this.getChildrenCount(children);
            var pages = void 0;
            // For make infinite at least count > 1
            if (count > 1) {
                // TODO: infinite
                var childrenArray = React.Children.toArray(children);
                if (infinite) {
                    childrenArray.unshift(childrenArray[count - 1]);
                    childrenArray.push(childrenArray[1]);
                }
                pages = childrenArray.map(function (page, i) {
                    return (
                        // when vertical, use the height of the first child as the height of the Carousel
                        React.createElement(
                            View,
                            { style: pageStyle, key: i, onLayout: i === 0 ? _this2.onChildLayout : function () {} },
                            page
                        )
                    );
                });
            } else {
                pages = React.createElement(
                    View,
                    { style: pageStyle, onLayout: this.onChildLayout },
                    children
                );
            }
            return React.createElement(
                View,
                { onLayout: this.onLayout, style: height > 0 ? { height: height } : {} },
                this.renderContent(pages),
                dots && this.renderDots(selectedIndex)
            );
        }
    }]);

    return Carousel;
}(React.Component);

Carousel.defaultProps = {
    bounces: true,
    infinite: false,
    dots: true,
    autoplay: false,
    autoplayInterval: 3000,
    selectedIndex: 0,
    vertical: false,
    pagination: defaultPagination,
    dotStyle: {},
    dotActiveStyle: {}
};
export default Carousel;