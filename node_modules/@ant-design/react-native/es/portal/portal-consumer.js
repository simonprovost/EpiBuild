import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';

var PortalConsumer = function (_React$Component) {
    _inherits(PortalConsumer, _React$Component);

    function PortalConsumer() {
        _classCallCheck(this, PortalConsumer);

        return _possibleConstructorReturn(this, (PortalConsumer.__proto__ || Object.getPrototypeOf(PortalConsumer)).apply(this, arguments));
    }

    _createClass(PortalConsumer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (!this.props.manager) {
                throw new Error('Looks like you forgot to wrap your root component with `Provider` component from `@ant-design/react-native`.\n\n');
            }
            this._key = this.props.manager.mount(this.props.children);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.props.manager.update(this._key, this.props.children);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.props.manager.unmount(this._key);
        }
    }, {
        key: 'render',
        value: function render() {
            return null;
        }
    }]);

    return PortalConsumer;
}(React.Component);

export default PortalConsumer;