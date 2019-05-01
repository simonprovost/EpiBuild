import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
/* tslint:disable:no-console */
import React from 'react';
import { DeviceEventEmitter } from 'react-native';
import { Button, Portal, Toast, WhiteSpace, WingBlank } from '../../';
function showToast() {
    // multiple toast
    Toast.info('This is a toast tips 1 !!!', 4);
    Toast.info('This is a toast tips 2 !!!', 3);
    Toast.info('This is a toast tips 3 !!!', 1);
}
function successToast() {
    Toast.success('Load success !!!', 1);
}
function showToastNoMask() {
    Toast.info('Toast without mask !!!', 1, undefined, false);
}
function failToast() {
    Toast.fail('Load failed !!!');
}
function offline() {
    Toast.offline('Network connection failed !!!');
}
function loadingToast() {
    Toast.loading('Loading...', 1, function () {
        console.log('Load complete !!!');
    });
}

var ToastExample = function (_React$Component) {
    _inherits(ToastExample, _React$Component);

    function ToastExample() {
        _classCallCheck(this, ToastExample);

        var _this = _possibleConstructorReturn(this, (ToastExample.__proto__ || Object.getPrototypeOf(ToastExample)).apply(this, arguments));

        _this.alwaysShowToast = function () {
            var key = Toast.info('A toast width duration = 0 !!!', 0);
            _this.timer = setTimeout(function () {
                Portal.remove(key);
            }, 5000);
        };
        return _this;
    }

    _createClass(ToastExample, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            DeviceEventEmitter.removeAllListeners('navigatorBack');
            if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                WingBlank,
                { style: { marginTop: 80 } },
                React.createElement(WhiteSpace, null),
                React.createElement(
                    Button,
                    { onPress: showToastNoMask },
                    'Without mask'
                ),
                React.createElement(WhiteSpace, null),
                React.createElement(
                    Button,
                    { onPress: showToast },
                    'Text toast'
                ),
                React.createElement(WhiteSpace, null),
                React.createElement(
                    Button,
                    { onPress: successToast },
                    'Success toast'
                ),
                React.createElement(WhiteSpace, null),
                React.createElement(
                    Button,
                    { onPress: failToast },
                    'Failed toast'
                ),
                React.createElement(WhiteSpace, null),
                React.createElement(
                    Button,
                    { onPress: offline },
                    'Network failure toast'
                ),
                React.createElement(WhiteSpace, null),
                React.createElement(
                    Button,
                    { onPress: loadingToast },
                    'Loading toast'
                ),
                React.createElement(WhiteSpace, null),
                React.createElement(
                    Button,
                    { onPress: this.alwaysShowToast },
                    'Toast width duration = 0'
                ),
                React.createElement(WhiteSpace, null)
            );
        }
    }]);

    return ToastExample;
}(React.Component);

export default ToastExample;