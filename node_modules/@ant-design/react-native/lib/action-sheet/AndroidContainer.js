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

var _ModalView = require('../modal/ModalView');

var _ModalView2 = _interopRequireDefault(_ModalView);

var _style = require('../style');

var _index = require('./style/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ActionSheetAndroid = function (_React$PureComponent) {
    (0, _inherits3['default'])(ActionSheetAndroid, _React$PureComponent);

    function ActionSheetAndroid(props) {
        (0, _classCallCheck3['default'])(this, ActionSheetAndroid);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (ActionSheetAndroid.__proto__ || Object.getPrototypeOf(ActionSheetAndroid)).call(this, props));

        _this.close = function () {
            _this.setState({
                visible: false
            });
        };
        _this.state = {
            visible: _this.props.visible || false
        };
        return _this;
    }

    (0, _createClass3['default'])(ActionSheetAndroid, [{
        key: 'confirm',
        value: function confirm(index) {
            var callback = this.props.callback;

            if (callback) {
                callback(index);
            }
            this.setState({
                visible: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                config = _props.config,
                onAnimationEnd = _props.onAnimationEnd;
            var title = config.title,
                message = config.message,
                options = config.options,
                destructiveButtonIndex = config.destructiveButtonIndex,
                cancelButtonIndex = config.cancelButtonIndex;

            return _react2['default'].createElement(
                _style.WithTheme,
                { themeStyles: _index2['default'], styles: this.props.styles },
                function (styles, theme) {
                    var titleMsg = !!title && _react2['default'].createElement(
                        _reactNative.View,
                        { style: styles.title, key: '0' },
                        _react2['default'].createElement(
                            _reactNative.Text,
                            { style: styles.titleText },
                            title
                        )
                    );
                    var content = options.map(function (item, index) {
                        return _react2['default'].createElement(
                            _reactNative.View,
                            { key: index, style: [cancelButtonIndex === index ? styles.cancelBtn : undefined] },
                            _react2['default'].createElement(
                                _reactNative.TouchableHighlight,
                                { style: [styles.btn], underlayColor: theme.fill_tap, onPress: function onPress() {
                                        return _this2.confirm(index);
                                    } },
                                _react2['default'].createElement(
                                    _reactNative.Text,
                                    { style: [destructiveButtonIndex === index ? styles.destructiveBtn : undefined] },
                                    item
                                )
                            ),
                            cancelButtonIndex === index ? _react2['default'].createElement(_reactNative.View, { style: styles.cancelBtnMask }) : null
                        );
                    });
                    return _react2['default'].createElement(
                        _reactNative.View,
                        { style: styles.container },
                        _react2['default'].createElement(
                            _ModalView2['default'],
                            { animationDuration: 200, animateAppear: true, visible: _this2.state.visible, onAnimationEnd: onAnimationEnd, style: styles.content, animationType: 'slide-up', maskClosable: true, onClose: function onClose() {
                                    return _this2.confirm(cancelButtonIndex || -1);
                                } },
                            _react2['default'].createElement(
                                _reactNative.View,
                                null,
                                titleMsg,
                                !!message && _react2['default'].createElement(
                                    _reactNative.View,
                                    { style: styles.message, key: '1' },
                                    _react2['default'].createElement(
                                        _reactNative.Text,
                                        null,
                                        message
                                    )
                                ),
                                _react2['default'].createElement(
                                    _reactNative.View,
                                    null,
                                    content
                                )
                            )
                        )
                    );
                }
            );
        }
    }]);
    return ActionSheetAndroid;
}(_react2['default'].PureComponent);

exports['default'] = ActionSheetAndroid;
module.exports = exports['default'];