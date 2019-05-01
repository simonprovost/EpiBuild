import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { isValidElement } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Popover as Pop, PopoverController } from 'react-native-modal-popover';
import { WithTheme } from '../style';
import PopoverStyles from './style';
export var PopoverItem = function (_React$PureComponent) {
    _inherits(PopoverItem, _React$PureComponent);

    function PopoverItem() {
        _classCallCheck(this, PopoverItem);

        return _possibleConstructorReturn(this, (PopoverItem.__proto__ || Object.getPrototypeOf(PopoverItem)).apply(this, arguments));
    }

    _createClass(PopoverItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                value = _props.value,
                disabled = _props.disabled,
                children = _props.children,
                onSelect = _props.onSelect,
                style = _props.style;

            return React.createElement(
                WithTheme,
                null,
                function (_, theme) {
                    return React.createElement(
                        TouchableOpacity,
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
}(React.PureComponent);

var Popover = function (_React$PureComponent2) {
    _inherits(Popover, _React$PureComponent2);

    function Popover() {
        _classCallCheck(this, Popover);

        var _this2 = _possibleConstructorReturn(this, (Popover.__proto__ || Object.getPrototypeOf(Popover)).apply(this, arguments));

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

            var items = React.Children.map(overlay, function (child) {
                if (!isValidElement(child)) {
                    return child;
                }
                return React.cloneElement(child, {
                    onSelect: function onSelect(v) {
                        return _this2.onSelect(v, closePopover);
                    }
                });
            });
            if (typeof renderOverlayComponent === 'function') {
                return renderOverlayComponent(items);
            }
            return React.createElement(
                ScrollView,
                null,
                items
            );
        };
        return _this2;
    }

    _createClass(Popover, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props2 = this.props,
                children = _props2.children,
                disabled = _props2.disabled,
                triggerStyle = _props2.triggerStyle,
                styles = _props2.styles,
                placement = _props2.placement;

            return React.createElement(
                WithTheme,
                { themeStyles: PopoverStyles, styles: styles },
                function (s) {
                    return React.createElement(
                        PopoverController,
                        null,
                        function (_ref) {
                            var openPopover = _ref.openPopover,
                                closePopover = _ref.closePopover,
                                popoverVisible = _ref.popoverVisible,
                                setPopoverAnchor = _ref.setPopoverAnchor,
                                popoverAnchorRect = _ref.popoverAnchorRect;
                            return React.createElement(
                                View,
                                null,
                                React.createElement(
                                    TouchableOpacity,
                                    { ref: setPopoverAnchor, onPress: openPopover, style: triggerStyle, disabled: disabled, activeOpacity: 0.75 },
                                    children
                                ),
                                React.createElement(
                                    Pop,
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
}(React.PureComponent);

export default Popover;

Popover.defaultProps = {
    onSelect: function onSelect() {}
};
Popover.Item = PopoverItem;