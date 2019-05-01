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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var PortalConsumer = function (_React$Component) {
    (0, _inherits3['default'])(PortalConsumer, _React$Component);

    function PortalConsumer() {
        (0, _classCallCheck3['default'])(this, PortalConsumer);
        return (0, _possibleConstructorReturn3['default'])(this, (PortalConsumer.__proto__ || Object.getPrototypeOf(PortalConsumer)).apply(this, arguments));
    }

    (0, _createClass3['default'])(PortalConsumer, [{
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
}(_react2['default'].Component);

exports['default'] = PortalConsumer;
module.exports = exports['default'];