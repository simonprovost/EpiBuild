import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import PropTypes from 'prop-types';
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native';
import { WithTheme } from '../style';
import { getComponentLocale } from '../_util/getLocale';
import zh_CN from './locale/zh_CN';
import RCModal from './ModalView';
import modalStyles from './style/index';
var maxHeight = StyleSheet.create({
    maxHeight: {
        maxHeight: Dimensions.get('window').height
    }
}).maxHeight;

var AntmModal = function (_React$Component) {
    _inherits(AntmModal, _React$Component);

    function AntmModal() {
        _classCallCheck(this, AntmModal);

        var _this = _possibleConstructorReturn(this, (AntmModal.__proto__ || Object.getPrototypeOf(AntmModal)).apply(this, arguments));

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

    _createClass(AntmModal, [{
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

            var _locale = getComponentLocale(this.props, this.context, 'Modal', function () {
                return zh_CN;
            });
            return React.createElement(
                WithTheme,
                { styles: this.props.styles, themeStyles: modalStyles },
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
                            return React.createElement(
                                TouchableHighlight,
                                { key: i, style: horizontalFlex, underlayColor: '#ddd', onPress: onPressFn },
                                React.createElement(
                                    View,
                                    { style: [buttonWrapStyle, noneBorder] },
                                    React.createElement(
                                        Text,
                                        { style: [styles.buttonText, buttonStyle] },
                                        button.text || '' + _locale.buttonText + i
                                    )
                                )
                            );
                        });
                        footerDom = React.createElement(
                            View,
                            { style: [btnGroupStyle, styles.footer], onLayout: _this2.onFooterLayout },
                            footerButtons
                        );
                    }
                    var animType = _this2.props.animationType;
                    if (transparent) {
                        if (animType === 'slide') {
                            animType = 'slide-up';
                        }
                        var closableDom = closable ? React.createElement(
                            View,
                            { style: [styles.closeWrap] },
                            React.createElement(
                                TouchableWithoutFeedback,
                                { onPress: onClose },
                                React.createElement(
                                    View,
                                    null,
                                    React.createElement(
                                        Text,
                                        { style: [styles.close] },
                                        '\xD7'
                                    )
                                )
                            )
                        ) : null;
                        return React.createElement(
                            View,
                            { style: styles.container },
                            React.createElement(
                                RCModal,
                                { onClose: onClose, animationType: animType, wrapStyle: transparent ? styles.wrap : undefined, style: [styles.innerContainer, style], visible: visible, onAnimationEnd: onAnimationEnd, animateAppear: animateAppear, maskClosable: maskClosable },
                                React.createElement(
                                    View,
                                    { style: maxHeight, ref: _this2.saveRoot },
                                    title ? React.createElement(
                                        Text,
                                        { style: [styles.header] },
                                        title
                                    ) : null,
                                    React.createElement(
                                        View,
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
                        return React.createElement(
                            View,
                            { style: styles.container },
                            React.createElement(
                                RCModal,
                                { onClose: onClose, animationType: animType
                                    // tslint:disable-next-line:jsx-no-multiline-js
                                    , style: [styles.popupContainer, styles['popup' + aType], style], visible: visible, onAnimationEnd: onAnimationEnd, animateAppear: animateAppear, maskClosable: maskClosable },
                                React.createElement(
                                    View,
                                    { ref: _this2.saveRoot, style: bodyStyle },
                                    children
                                )
                            )
                        );
                    }
                    if (animType === 'slide') {
                        animType = undefined;
                    }
                    return React.createElement(
                        View,
                        { style: styles.container },
                        React.createElement(
                            RCModal,
                            { visible: visible, animationType: animType, onClose: onClose },
                            React.createElement(
                                View,
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
}(React.Component);

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
    antLocale: PropTypes.object
};
export default AntmModal;