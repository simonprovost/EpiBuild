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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeSafeAreaView = require('react-native-safe-area-view');

var _reactNativeSafeAreaView2 = _interopRequireDefault(_reactNativeSafeAreaView);

var _style = require('../style');

var _index = require('./style/index');

var _index2 = _interopRequireDefault(_index);

var _TabBarItem = require('./TabBarItem');

var _TabBarItem2 = _interopRequireDefault(_TabBarItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var TabBar = function (_React$Component) {
    (0, _inherits3['default'])(TabBar, _React$Component);

    function TabBar() {
        (0, _classCallCheck3['default'])(this, TabBar);
        return (0, _possibleConstructorReturn3['default'])(this, (TabBar.__proto__ || Object.getPrototypeOf(TabBar)).apply(this, arguments));
    }

    (0, _createClass3['default'])(TabBar, [{
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
            _react2['default'].Children.map(children, function (child, idx) {
                if (content && selectedIndex === idx) {
                    newChildren.push(_react2['default'].createElement(
                        _reactNative.View,
                        { key: idx, style: [styles.contentItem, idx === selectedIndex ? styles.contentItemSelected : undefined] },
                        child.props.children
                    ));
                } else {
                    newChildren.push(_react2['default'].cloneElement(child, {
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
            return _react2['default'].createElement(
                _reactNativeSafeAreaView2['default'],
                { forceInset: { bottom: 'always', top: 'never' }, style: [{ flex: 1 }, style] },
                _react2['default'].createElement(
                    _style.WithTheme,
                    { styles: this.props.styles, themeStyles: _index2['default'] },
                    function (styles) {
                        return _react2['default'].createElement(
                            _reactNative.View,
                            { style: styles.tabbar },
                            _react2['default'].createElement(
                                _reactNative.View,
                                { style: styles.content },
                                _this2.getPanes(styles, true)
                            ),
                            _react2['default'].createElement(
                                _reactNative.View,
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
}(_react2['default'].Component);

TabBar.defaultProps = {
    barTintColor: 'white',
    tintColor: '#108ee9',
    unselectedTintColor: '#888'
};
TabBar.Item = _TabBarItem2['default'];
exports['default'] = TabBar;
module.exports = exports['default'];