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

var _portalConsumer = require('./portal-consumer');

var _portalConsumer2 = _interopRequireDefault(_portalConsumer);

var _portalHost = require('./portal-host');

var _portalHost2 = _interopRequireDefault(_portalHost);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Portal allows to render a component at a different place in the parent tree.
 * You can use it to render content which should appear above other elements, similar to `Modal`.
 * It requires a [`Portal.Host`](portal-host.html) component to be rendered somewhere in the parent tree.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Portal, Text } from '@ant-design/react-native';
 *
 * export default class MyComponent extends React.Component {
 *   render() {
 *     const { visible } = this.state;
 *     return (
 *       <Portal>
 *         <Text>This is rendered at a different place</Text>
 *       </Portal>
 *     );
 *   }
 * }
 * ```
 */
var Portal = function (_React$Component) {
    (0, _inherits3['default'])(Portal, _React$Component);

    function Portal() {
        (0, _classCallCheck3['default'])(this, Portal);
        return (0, _possibleConstructorReturn3['default'])(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Portal, [{
        key: 'render',
        value: function render() {
            var children = this.props.children;

            return _react2['default'].createElement(
                _portalHost.PortalContext.Consumer,
                null,
                function (manager) {
                    return _react2['default'].createElement(
                        _portalConsumer2['default'],
                        { manager: manager },
                        children
                    );
                }
            );
        }
    }]);
    return Portal;
}(_react2['default'].Component);

Portal.Host = _portalHost2['default'];
Portal.add = _portalHost.portal.add;
Portal.remove = _portalHost.portal.remove;
exports['default'] = Portal;
module.exports = exports['default'];