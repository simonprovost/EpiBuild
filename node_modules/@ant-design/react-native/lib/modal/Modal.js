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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _style = require('../style');

var _getLocale = require('../_util/getLocale');

var _zh_CN = require('./locale/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

var _ModalView = require('./ModalView');

var _ModalView2 = _interopRequireDefault(_ModalView);

var _index = require('./style/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var maxHeight = _reactNative.StyleSheet.create({
    maxHeight: {
        maxHeight: _reactNative.Dimensions.get('window').height
    }
}).maxHeight;

var AntmModal = function (_React$Component) {
    (0, _inherits3['default'])(AntmModal, _React$Component);

    function AntmModal() {
        (0, _classCallCheck3['default'])(this, AntmModal);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (AntmModal.__proto__ || Object.getPrototypeOf(AntmModal)).apply(this, arguments));

        _this.onFooterLayout = function (e) {
            if (_this.root) {
                _this.root.setNativeProps({
                    style: [{ paddingBottom: e.nativeEvent.layout.height }, maxHeight]
                });
            }
        };
        _this.saveRoot = function (root) {
            _this.root = root;
        };
        return _this;
    }

    (0, _createClass3['default'])(AntmModal, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                title = _props.title,
                closable = _props.closable,
                footer = _props.footer,
                children = _props.children,
                style = _props.style,
                animateAppear = _props.animateAppear,
                maskClosable = _props.maskClosable,
                popup = _props.popup,
                transparent = _props.transparent,
                visible = _props.visible,
                onClose = _props.onClose,
                bodyStyle = _props.bodyStyle,
                onAnimationEnd = _props.onAnimationEnd;
            // tslint:disable-next-line:variable-name

            var _locale = (0, _getLocale.getComponentLocale)(this.props, this.context, 'Modal', function () {
                return _zh_CN2['default'];
            });
            return _react2['default'].createElement(
                _style.WithTheme,
                { styles: this.props.styles, themeStyles: _index2['default'] },
                function (styles) {
                    var btnGroupStyle = styles.buttonGroupV;
                    var horizontalFlex = {};
                    if (footer && footer.length === 2 && !_this2.props.operation) {
                        btnGroupStyle = styles.buttonGroupH;
                        horizontalFlex = { flex: 1 };
                    }
                    var buttonWrapStyle = footer && footer.length === 2 ? styles.buttonWrapH : styles.buttonWrapV;
                    var footerDom = void 0;
                    if (footer && footer.length) {
                        var footerButtons = footer.map(function (button, i) {
                            var buttonStyle = {};
                            if (_this2.props.operation) {
                                buttonStyle = styles.buttonTextOperation;
                            }
                            if (button.style) {
                                buttonStyle = button.style;
                                if (typeof buttonStyle === 'string') {
                                    var styleMap = {
                                        cancel: {},
                                        'default': {},
                                        destructive: { color: 'red' }
                                    };
                                    buttonStyle = styleMap[buttonStyle] || {};
                                }
                            }
                            var noneBorder = footer && footer.length === 2 && i === 1 ? { borderRightWidth: 0 } : {};
                            var onPressFn = function onPressFn() {
                                if (button.onPress) {
                                    button.onPress();
                                }
                                if (onClose) {
                                    onClose();
                                }
                            };
                            return _react2['default'].createElement(
                                _reactNative.TouchableHighlight,
                                { key: i, style: horizontalFlex, underlayColor: '#ddd', onPress: onPressFn },
                                _react2['default'].createElement(
                                    _reactNative.View,
                                    { style: [buttonWrapStyle, noneBorder] },
                                    _react2['default'].createElement(
                                        _reactNative.Text,
                                        { style: [styles.buttonText, buttonStyle] },
                                        button.text || '' + _locale.buttonText + i
                                    )
                                )
                            );
                        });
                        footerDom = _react2['default'].createElement(
                            _reactNative.View,
                            { style: [btnGroupStyle, styles.footer], onLayout: _this2.onFooterLayout },
                            footerButtons
                        );
                    }
                    var animType = _this2.props.animationType;
                    if (transparent) {
                        if (animType === 'slide') {
                            animType = 'slide-up';
                        }
                        var closableDom = closable ? _react2['default'].createElement(
                            _reactNative.View,
                            { style: [styles.closeWrap] },
                            _react2['default'].createElement(
                                _reactNative.TouchableWithoutFeedback,
                                { onPress: onClose },
                                _react2['default'].createElement(
                                    _reactNative.View,
                                    null,
                                    _react2['default'].createElement(
                                        _reactNative.Text,
                                        { style: [styles.close] },
                                        '\xD7'
                                    )
                                )
                            )
                        ) : null;
                        return _react2['default'].createElement(
                            _reactNative.View,
                            { style: styles.container },
                            _react2['default'].createElement(
                                _ModalView2['default'],
                                { onClose: onClose, animationType: animType, wrapStyle: transparent ? styles.wrap : undefined, style: [styles.innerContainer, style], visible: visible, onAnimationEnd: onAnimationEnd, animateAppear: animateAppear, maskClosable: maskClosable },
                                _react2['default'].createElement(
                                    _reactNative.View,
                                    { style: maxHeight, ref: _this2.saveRoot },
                                    title ? _react2['default'].createElement(
                                        _reactNative.Text,
                                        { style: [styles.header] },
                                        title
                                    ) : null,
                                    _react2['default'].createElement(
                                        _reactNative.View,
                                        { style: [styles.body, bodyStyle] },
                                        children
                                    ),
                                    footerDom,
                                    closableDom
                                )
                            )
                        );
                    }
                    if (popup) {
                        var aType = 'SlideDown';
                        if (animType === 'slide-up') {
                            animType = 'slide-up';
                            aType = 'SlideUp';
                        } else {
                            animType = 'slide-down';
                        }
                        return _react2['default'].createElement(
                            _reactNative.View,
                            { style: styles.container },
                            _react2['default'].createElement(
                                _ModalView2['default'],
                                { onClose: onClose, animationType: animType
                                    // tslint:disable-next-line:jsx-no-multiline-js
                                    , style: [styles.popupContainer, styles['popup' + aType], style], visible: visible, onAnimationEnd: onAnimationEnd, animateAppear: animateAppear, maskClosable: maskClosable },
                                _react2['default'].createElement(
                                    _reactNative.View,
                                    { ref: _this2.saveRoot, style: bodyStyle },
                                    children
                                )
                            )
                        );
                    }
                    if (animType === 'slide') {
                        animType = undefined;
                    }
                    return _react2['default'].createElement(
                        _reactNative.View,
                        { style: styles.container },
                        _react2['default'].createElement(
                            _ModalView2['default'],
                            { visible: visible, animationType: animType, onClose: onClose },
                            _react2['default'].createElement(
                                _reactNative.View,
                                { style: style },
                                children
                            )
                        )
                    );
                }
            );
        }
    }]);
    return AntmModal;
}(_react2['default'].Component);

AntmModal.defaultProps = {
    visible: false,
    closable: false,
    maskClosable: false,
    style: {},
    bodyStyle: {},
    animationType: 'fade',
    onClose: function onClose() {},

    footer: [],
    transparent: false,
    popup: false,
    animateAppear: true,
    operation: false
};
AntmModal.contextTypes = {
    antLocale: _propTypes2['default'].object
};
exports['default'] = AntmModal;
module.exports = exports['default'];