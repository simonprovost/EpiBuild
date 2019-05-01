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

var _reactNative = require('react-native');

var _ = require('../../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function showToast() {
    // multiple toast
    _.Toast.info('This is a toast tips 1 !!!', 4);
    _.Toast.info('This is a toast tips 2 !!!', 3);
    _.Toast.info('This is a toast tips 3 !!!', 1);
} /* tslint:disable:no-console */

function successToast() {
    _.Toast.success('Load success !!!', 1);
}
function showToastNoMask() {
    _.Toast.info('Toast without mask !!!', 1, undefined, false);
}
function failToast() {
    _.Toast.fail('Load failed !!!');
}
function offline() {
    _.Toast.offline('Network connection failed !!!');
}
function loadingToast() {
    _.Toast.loading('Loading...', 1, function () {
        console.log('Load complete !!!');
    });
}

var ToastExample = function (_React$Component) {
    (0, _inherits3['default'])(ToastExample, _React$Component);

    function ToastExample() {
        (0, _classCallCheck3['default'])(this, ToastExample);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (ToastExample.__proto__ || Object.getPrototypeOf(ToastExample)).apply(this, arguments));

        _this.alwaysShowToast = function () {
            var key = _.Toast.info('A toast width duration = 0 !!!', 0);
            _this.timer = setTimeout(function () {
                _.Portal.remove(key);
            }, 5000);
        };
        return _this;
    }

    (0, _createClass3['default'])(ToastExample, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _reactNative.DeviceEventEmitter.removeAllListeners('navigatorBack');
            if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                _.WingBlank,
                { style: { marginTop: 80 } },
                _react2['default'].createElement(_.WhiteSpace, null),
                _react2['default'].createElement(
                    _.Button,
                    { onPress: showToastNoMask },
                    'Without mask'
                ),
                _react2['default'].createElement(_.WhiteSpace, null),
                _react2['default'].createElement(
                    _.Button,
                    { onPress: showToast },
                    'Text toast'
                ),
                _react2['default'].createElement(_.WhiteSpace, null),
                _react2['default'].createElement(
                    _.Button,
                    { onPress: successToast },
                    'Success toast'
                ),
                _react2['default'].createElement(_.WhiteSpace, null),
                _react2['default'].createElement(
                    _.Button,
                    { onPress: failToast },
                    'Failed toast'
                ),
                _react2['default'].createElement(_.WhiteSpace, null),
                _react2['default'].createElement(
                    _.Button,
                    { onPress: offline },
                    'Network failure toast'
                ),
                _react2['default'].createElement(_.WhiteSpace, null),
                _react2['default'].createElement(
                    _.Button,
                    { onPress: loadingToast },
                    'Loading toast'
                ),
                _react2['default'].createElement(_.WhiteSpace, null),
                _react2['default'].createElement(
                    _.Button,
                    { onPress: this.alwaysShowToast },
                    'Toast width duration = 0'
                ),
                _react2['default'].createElement(_.WhiteSpace, null)
            );
        }
    }]);
    return ToastExample;
}(_react2['default'].Component);

exports['default'] = ToastExample;
module.exports = exports['default'];