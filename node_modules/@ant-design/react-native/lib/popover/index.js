'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PopoverItem = undefined;

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

var _reactNativeModalPopover = require('react-native-modal-popover');

var _style = require('../style');

var _style2 = require('./style');

var _style3 = _interopRequireDefault(_style2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var PopoverItem = exports.PopoverItem = function (_React$PureComponent) {
    (0, _inherits3['default'])(PopoverItem, _React$PureComponent);

    function PopoverItem() {
        (0, _classCallCheck3['default'])(this, PopoverItem);
        return (0, _possibleConstructorReturn3['default'])(this, (PopoverItem.__proto__ || Object.getPrototypeOf(PopoverItem)).apply(this, arguments));
    }

    (0, _createClass3['default'])(PopoverItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                value = _props.value,
                disabled = _props.disabled,
                children = _props.children,
                onSelect = _props.onSelect,
                style = _props.style;

            return _react2['default'].createElement(
                _style.WithTheme,
                null,
                function (_, theme) {
                    return _react2['default'].createElement(
                        _reactNative.TouchableOpacity,
                        { activeOpacity: 0.75, disabled: disabled, onPress: function onPress() {
                                if (typeof onSelect === 'function') {
                                    onSelect(value);
                                }
                            }, style: [{
                                padding: theme.v_spacing_md
                            }, style] },
                        children
                    );
                }
            );
        }
    }]);
    return PopoverItem;
}(_react2['default'].PureComponent);

var Popover = function (_React$PureComponent2) {
    (0, _inherits3['default'])(Popover, _React$PureComponent2);

    function Popover() {
        (0, _classCallCheck3['default'])(this, Popover);

        var _this2 = (0, _possibleConstructorReturn3['default'])(this, (Popover.__proto__ || Object.getPrototypeOf(Popover)).apply(this, arguments));

        _this2.onSelect = function (value, closePopover) {
            var onSelect = _this2.props.onSelect;

            if (onSelect) {
                onSelect(value);
            }
            closePopover();
        };
        _this2.renderOverlay = function (closePopover) {
            var _this2$props = _this2.props,
                overlay = _this2$props.overlay,
                renderOverlayComponent = _this2$props.renderOverlayComponent;

            var items = _react2['default'].Children.map(overlay, function (child) {
                if (!(0, _react.isValidElement)(child)) {
                    return child;
                }
                return _react2['default'].cloneElement(child, {
                    onSelect: function onSelect(v) {
                        return _this2.onSelect(v, closePopover);
                    }
                });
            });
            if (typeof renderOverlayComponent === 'function') {
                return renderOverlayComponent(items);
            }
            return _react2['default'].createElement(
                _reactNative.ScrollView,
                null,
                items
            );
        };
        return _this2;
    }

    (0, _createClass3['default'])(Popover, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props2 = this.props,
                children = _props2.children,
                disabled = _props2.disabled,
                triggerStyle = _props2.triggerStyle,
                styles = _props2.styles,
                placement = _props2.placement;

            return _react2['default'].createElement(
                _style.WithTheme,
                { themeStyles: _style3['default'], styles: styles },
                function (s) {
                    return _react2['default'].createElement(
                        _reactNativeModalPopover.PopoverController,
                        null,
                        function (_ref) {
                            var openPopover = _ref.openPopover,
                                closePopover = _ref.closePopover,
                                popoverVisible = _ref.popoverVisible,
                                setPopoverAnchor = _ref.setPopoverAnchor,
                                popoverAnchorRect = _ref.popoverAnchorRect;
                            return _react2['default'].createElement(
                                _reactNative.View,
                                null,
                                _react2['default'].createElement(
                                    _reactNative.TouchableOpacity,
                                    { ref: setPopoverAnchor, onPress: openPopover, style: triggerStyle, disabled: disabled, activeOpacity: 0.75 },
                                    children
                                ),
                                _react2['default'].createElement(
                                    _reactNativeModalPopover.Popover,
                                    { contentStyle: s.content, arrowStyle: s.arrow, backgroundStyle: s.background, visible: popoverVisible, onClose: closePopover, fromRect: popoverAnchorRect, supportedOrientations: ['portrait', 'landscape'], placement: placement },
                                    _this3.renderOverlay(closePopover)
                                )
                            );
                        }
                    );
                }
            );
        }
    }]);
    return Popover;
}(_react2['default'].PureComponent);

exports['default'] = Popover;

Popover.defaultProps = {
    onSelect: function onSelect() {}
};
Popover.Item = PopoverItem;