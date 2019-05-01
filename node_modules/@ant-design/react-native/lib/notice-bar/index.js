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

var _style = require('../style');

var _Marquee = require('./Marquee');

var _Marquee2 = _interopRequireDefault(_Marquee);

var _index = require('./style/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var NoticeBar = function (_React$Component) {
    (0, _inherits3['default'])(NoticeBar, _React$Component);

    function NoticeBar(props) {
        (0, _classCallCheck3['default'])(this, NoticeBar);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (NoticeBar.__proto__ || Object.getPrototypeOf(NoticeBar)).call(this, props));

        _this.onPress = function () {
            var _this$props = _this.props,
                mode = _this$props.mode,
                onPress = _this$props.onPress;

            if (onPress) {
                onPress();
            }
            if (mode === 'closable') {
                _this.setState({
                    show: false
                });
            }
        };
        _this.state = {
            show: true
        };
        return _this;
    }

    (0, _createClass3['default'])(NoticeBar, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                children = _props.children,
                mode = _props.mode,
                icon = _props.icon,
                style = _props.style,
                action = _props.action,
                marqueeProps = _props.marqueeProps;

            return _react2['default'].createElement(
                _style.WithTheme,
                { styles: this.props.styles, themeStyles: _index2['default'] },
                function (styles, theme) {
                    var operationDom = null;
                    icon = typeof icon === 'undefined' ? _react2['default'].createElement(_icon2['default'], { name: 'sound', color: theme.brand_warning }) : icon;
                    if (mode === 'closable') {
                        operationDom = _react2['default'].createElement(
                            _reactNative.TouchableWithoutFeedback,
                            { onPress: _this2.onPress },
                            _react2['default'].createElement(
                                _reactNative.View,
                                { style: styles.actionWrap },
                                action ? action : _react2['default'].createElement(
                                    _reactNative.Text,
                                    { style: [styles.close] },
                                    '\xD7'
                                )
                            )
                        );
                    } else if (mode === 'link') {
                        operationDom = _react2['default'].createElement(
                            _reactNative.View,
                            { style: styles.actionWrap },
                            action ? action : _react2['default'].createElement(
                                _reactNative.Text,
                                { style: [styles.link] },
                                '\u221F'
                            )
                        );
                    }
                    var main = _react2['default'].createElement(
                        _reactNative.View,
                        { style: [styles.notice, style] },
                        icon && _react2['default'].createElement(
                            _reactNative.View,
                            { style: styles.left15 },
                            icon
                        ),
                        _react2['default'].createElement(
                            _reactNative.View,
                            { style: [styles.container, icon ? styles.left6 : styles.left15] },
                            _react2['default'].createElement(_Marquee2['default'], (0, _extends3['default'])({ style: styles.content, text: children }, marqueeProps))
                        ),
                        operationDom
                    );
                    return _this2.state.show ? mode === 'closable' ? main : _react2['default'].createElement(
                        _reactNative.TouchableWithoutFeedback,
                        { onPress: _this2.onPress },
                        main
                    ) : null;
                }
            );
        }
    }]);
    return NoticeBar;
}(_react2['default'].Component);

exports['default'] = NoticeBar;

NoticeBar.defaultProps = {
    mode: '',
    onPress: function onPress() {}
};
module.exports = exports['default'];