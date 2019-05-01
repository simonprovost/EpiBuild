import _extends from 'babel-runtime/helpers/extends';
import _toConsumableArray from 'babel-runtime/helpers/toConsumableArray';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { View, StyleSheet } from 'react-native';
/**
 * Portal host is the component which actually renders all Portals.
 */

var PortalManager = function (_React$PureComponent) {
    _inherits(PortalManager, _React$PureComponent);

    function PortalManager() {
        _classCallCheck(this, PortalManager);

        var _this = _possibleConstructorReturn(this, (PortalManager.__proto__ || Object.getPrototypeOf(PortalManager)).apply(this, arguments));

        _this.state = {
            portals: []
        };
        _this.mount = function (key, children) {
            _this.setState(function (state) {
                return {
                    portals: [].concat(_toConsumableArray(state.portals), [{ key: key, children: children }])
                };
            });
        };
        _this.update = function (key, children) {
            return _this.setState(function (state) {
                return {
                    portals: state.portals.map(function (item) {
                        if (item.key === key) {
                            return _extends({}, item, { children: children });
                        }
                        return item;
                    })
                };
            });
        };
        _this.unmount = function (key) {
            return _this.setState(function (state) {
                return {
                    portals: state.portals.filter(function (item) {
                        return item.key !== key;
                    })
                };
            });
        };
        return _this;
    }

    _createClass(PortalManager, [{
        key: 'render',
        value: function render() {
            return this.state.portals.map(function (_ref, i) {
                var key = _ref.key,
                    children = _ref.children;
                return React.createElement(
                    View,
                    { key: key, collapsable: false /* Need collapsable=false here to clip the elevations, otherwise they appear above sibling components */, pointerEvents: 'box-none', style: [StyleSheet.absoluteFill, { zIndex: 1000 + i }] },
                    children
                );
            });
        }
    }]);

    return PortalManager;
}(React.PureComponent);

export default PortalManager;