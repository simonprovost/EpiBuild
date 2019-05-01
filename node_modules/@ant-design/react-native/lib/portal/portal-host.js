'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.portal = exports.PortalContext = undefined;

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _portalManager = require('./portal-manager');

var _portalManager2 = _interopRequireDefault(_portalManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var PortalContext = exports.PortalContext = _react2['default'].createContext(null);
// events
var addType = 'ANT_DESIGN_MOBILE_RN_ADD_PORTAL';
var removeType = 'ANT_DESIGN_MOBILE_RN_REMOVE_PORTAL';
// fix react native web does not support DeviceEventEmitter
var TopViewEventEmitter = _reactNative.DeviceEventEmitter || new _reactNative.NativeEventEmitter();

var PortalGuard = function PortalGuard() {
    var _this = this;

    (0, _classCallCheck3['default'])(this, PortalGuard);

    this.nextKey = 10000;
    this.add = function (e) {
        var key = _this.nextKey++;
        TopViewEventEmitter.emit(addType, e, key);
        return key;
    };
    this.remove = function (key) {
        return TopViewEventEmitter.emit(removeType, key);
    };
};
/**
 * portal
 */


var portal = exports.portal = new PortalGuard();
/**
 * Portal host renders all of its children `Portal` elements.
 * For example, you can wrap a screen in `Portal.Host` to render items above the screen.
 * If you're using the `Provider` component, it already includes `Portal.Host`.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Text } from 'react-native';
 * import { Portal } from '@ant-design/react-native';
 *
 * export default class MyComponent extends React.Component {
 *   render() {
 *     return (
 *       <Portal.Host>
 *         <Text>Content of the app</Text>
 *       </Portal.Host>
 *     );
 *   }
 * }
 * ```
 *
 * Here any `Portal` elements under `<App />` are rendered alongside `<App />` and will appear above `<App />` like a `Modal`.
 */

var PortalHost = function (_React$Component) {
    (0, _inherits3['default'])(PortalHost, _React$Component);

    function PortalHost() {
        (0, _classCallCheck3['default'])(this, PortalHost);

        var _this2 = (0, _possibleConstructorReturn3['default'])(this, (PortalHost.__proto__ || Object.getPrototypeOf(PortalHost)).apply(this, arguments));

        _this2._nextKey = 0;
        _this2._queue = [];
        _this2._setManager = function (manager) {
            _this2._manager = manager;
        };
        _this2._mount = function (children, _key) {
            var key = _key || _this2._nextKey++;
            if (_this2._manager) {
                _this2._manager.mount(key, children);
            } else {
                _this2._queue.push({ type: 'mount', key: key, children: children });
            }
            return key;
        };
        _this2._update = function (key, children) {
            if (_this2._manager) {
                _this2._manager.update(key, children);
            } else {
                var op = { type: 'mount', key: key, children: children };
                var index = _this2._queue.findIndex(function (o) {
                    return o.type === 'mount' || o.type === 'update' && o.key === key;
                });
                if (index > -1) {
                    _this2._queue[index] = op;
                } else {
                    _this2._queue.push(op);
                }
            }
        };
        _this2._unmount = function (key) {
            if (_this2._manager) {
                _this2._manager.unmount(key);
            } else {
                _this2._queue.push({ type: 'unmount', key: key });
            }
        };
        return _this2;
    }

    (0, _createClass3['default'])(PortalHost, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var manager = this._manager;
            var queue = this._queue;
            TopViewEventEmitter.addListener(addType, this._mount);
            TopViewEventEmitter.addListener(removeType, this._unmount);
            while (queue.length && manager) {
                var action = queue.pop();
                if (!action) {
                    continue;
                }
                // tslint:disable-next-line:switch-default
                switch (action.type) {
                    case 'mount':
                        manager.mount(action.key, action.children);
                        break;
                    case 'update':
                        manager.update(action.key, action.children);
                        break;
                    case 'unmount':
                        manager.unmount(action.key);
                        break;
                }
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            TopViewEventEmitter.removeListener(addType, this._mount);
            TopViewEventEmitter.removeListener(removeType, this._unmount);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                PortalContext.Provider,
                { value: {
                        mount: this._mount,
                        update: this._update,
                        unmount: this._unmount
                    } },
                _react2['default'].createElement(
                    _reactNative.View,
                    { style: styles.container, collapsable: false },
                    this.props.children
                ),
                _react2['default'].createElement(_portalManager2['default'], { ref: this._setManager })
            );
        }
    }]);
    return PortalHost;
}(_react2['default'].Component);

exports['default'] = PortalHost;

PortalHost.displayName = 'Portal.Host';
var styles = _reactNative.StyleSheet.create({
    container: {
        flex: 1
    }
});