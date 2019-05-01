import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PortalConsumer from './portal-consumer';
import PortalHost, { portal, PortalContext } from './portal-host';
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
    _inherits(Portal, _React$Component);

    function Portal() {
        _classCallCheck(this, Portal);

        return _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
    }

    _createClass(Portal, [{
        key: 'render',
        value: function render() {
            var children = this.props.children;

            return React.createElement(
                PortalContext.Consumer,
                null,
                function (manager) {
                    return React.createElement(
                        PortalConsumer,
                        { manager: manager },
                        children
                    );
                }
            );
        }
    }]);

    return Portal;
}(React.Component);

Portal.Host = PortalHost;
Portal.add = portal.add;
Portal.remove = portal.remove;
export default Portal;