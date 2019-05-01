'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Portal host is the component which actually renders all Portals.
 */
var PortalManager = function (_React$PureComponent) {
    (0, _inherits3['default'])(PortalManager, _React$PureComponent);

    function PortalManager() {
        (0, _classCallCheck3['default'])(this, PortalManager);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (PortalManager.__proto__ || Object.getPrototypeOf(PortalManager)).apply(this, arguments));

        _this.state = {
            portals: []
        };
        _this.mount = function (key, children) {
            _this.setState(function (state) {
                return {
                    portals: [].concat((0, _toConsumableArray3['default'])(state.portals), [{ key: key, children: children }])
                };
            });
        };
        _this.update = function (key, children) {
            return _this.setState(function (state) {
                return {
                    portals: state.portals.map(function (item) {
                        if (item.key === key) {
                            return (0, _extends3['default'])({}, item, { children: children });
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

    (0, _createClass3['default'])(PortalManager, [{
        key: 'render',
        value: function render() {
            return this.state.portals.map(function (_ref, i) {
                var key = _ref.key,
                    children = _ref.children;
                return _react2['default'].createElement(
                    _reactNative.View,
                    { key: key, collapsable: false /* Need collapsable=false here to clip the elevations, otherwise they appear above sibling components */, pointerEvents: 'box-none', style: [_reactNative.StyleSheet.absoluteFill, { zIndex: 1000 + i }] },
                    children
                );
            });
        }
    }]);
    return PortalManager;
}(_react2['default'].PureComponent);

exports['default'] = PortalManager;
module.exports = exports['default'];