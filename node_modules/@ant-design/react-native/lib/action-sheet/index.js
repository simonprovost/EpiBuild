'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _portal = require('../portal');

var _portal2 = _interopRequireDefault(_portal);

var _AndroidContainer = require('./AndroidContainer');

var _AndroidContainer2 = _interopRequireDefault(_AndroidContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var instance = void 0;
exports['default'] = {
    showActionSheetWithOptions: function showActionSheetWithOptions(config, callback) {
        if (_reactNative.Platform.OS === 'ios') {
            _reactNative.ActionSheetIOS.showActionSheetWithOptions(config, callback);
            return;
        }
        var key = _portal2['default'].add(_react2['default'].createElement(_AndroidContainer2['default'], { visible: true, ref: function ref(_ref) {
                return instance = _ref;
            }, onAnimationEnd: function onAnimationEnd(visible) {
                if (!visible) {
                    _portal2['default'].remove(key);
                }
            }, config: config, callback: callback }));
    },
    showShareActionSheetWithOptions: function showShareActionSheetWithOptions(config, failureCallback, successCallback) {
        var content = {};
        var options = {};
        content.message = config.message;
        if (config.title) {
            content.title = config.title;
            options.dialogTitle = config.title;
        }
        if (config.url) {
            content.url = config.url;
        }
        if (config.excludedActivityTypes) {
            options.excludedActivityTypes = config.excludedActivityTypes;
        }
        if (config.tintColor) {
            options.tintColor = config.tintColor;
        }
        // promise is not called in Android
        // https://github.com/facebook/react-native/blob/master/Libraries/Share/Share.js#L80
        _reactNative.Share.share(content, options).then(function (result) {
            if (result.action === _reactNative.Share.sharedAction) {
                // completed successCallback(completed, method)
                if (successCallback) {
                    successCallback(true, result.activityType);
                }
            } else if (result.action === _reactNative.Share.dismissedAction) {
                if (successCallback) {
                    successCallback(false);
                }
            }
        })['catch'](function (error) {
            if (failureCallback) {
                failureCallback(error);
            }
        });
    },
    close: function close() {
        if (instance) {
            instance.close();
        }
    }
};
module.exports = exports['default'];